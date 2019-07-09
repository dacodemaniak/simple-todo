import { FormController } from "./form-controller-interface";
import { LocalDataService } from "./../services/local-data-service";

import * as $ from 'jquery';
import * as moment from 'moment';

import { TodoModel } from "./../models/todo-model";
import { TodoListController } from "./todo-list-controller";
/**
 * @name TodoFormController
 * @abstract Gère les contraintes du formulaire
 */

 export class TodoFormController implements FormController {
    private _service: LocalDataService;

    private _fields: Map<JQuery, any> = new Map();

    public constructor(localDataService: LocalDataService) {
        this._service = localDataService;

        this._fields.set(
            $('#todo-content'),
            { tag: 'input', type: 'text'}
        )
        .set(
            $('#todo-begin'),
            { tag: 'input', type: 'date'}
        )
        .set(
            $('#todo-end'),
            { tag: 'input', type: 'date'}
        )
        .set(
            $('#todo-sensibility'),
            { tag: 'select'}
        );

        // Mettre en place le gestionnaire du formulaire
        this.handler();
    }

    public handler() {
        $('#todo-form').on(
            'keyup change',
            (event) => {
                let isFormValid: boolean = true;
                
                this._fields.forEach((value: any, key: JQuery) => {
                    
                    if (value.tag === 'input') {
                        // On peut utiliser la méthode val()
                        if (key.val().toString().trim() === '') {
                            isFormValid = false;
                        }
                    } else if (value.tag === 'select') {
                        // Utiliser une autre stratégie
                        if (key.val() === 0) {
                            isFormValid = false;
                        }
                    } else if (value.tag === 'textarea') {
                        // On va devoir utiliser la méthode html()
                        if (key.html().toString().trim() === '') {
                            console.log(key.html(), ' est invalide !');
                            isFormValid = false;
                        }
                    }
                });
                isFormValid ? $('#todo-save').removeAttr('disabled') : $('#todo-save').attr('disabled', 'disabled');
            }
        );

        // Gérer la soumission du formulaire
        $('#todo-form').on(
            'submit',
            (event) => {
                event.preventDefault(); // Empêche la soumission du formulaire
                const newTodo: TodoModel = new TodoModel();
                
                newTodo.id = 2;
                newTodo.title = ($('#todo-content').val().toString());
                newTodo.begin = (moment($('#todo-begin').val()).toDate());
                newTodo.end = (moment($('#todo-end').val()).toDate());
                newTodo.sensibility = parseInt($('#todo-sensibility').val().toString());

                this._service.add(newTodo);

                // Reset le formulaire
                this._fields.forEach((value, key) => {
                    if (value.tag === 'input') {
                        // On peut utiliser la méthode val()
                        key.val('');
                    } else if (value.tag === 'select') {
                        // Utiliser une autre stratégie
                        key.val(0);
                    } else if (value.tag === 'textarea') {
                        key.val('');
                    }                    
                });

                // Appeler la méthode de réinitialisation du tableau
                const todoListController: TodoListController = new TodoListController(this._service);
            } 
        );
    }
 }