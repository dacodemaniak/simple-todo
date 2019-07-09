import { LocalDataService } from "./../services/local-data-service";
import * as $ from 'jquery';
import { TodoModel } from "./../models/todo-model";

/**
 * @name TodoListController
 * @abstract Gère l'affichage de la liste des todos
 */
export class TodoListController {
    private _service: LocalDataService;

    public constructor(localDataService: LocalDataService) {
        this._service = localDataService;

        // Eventually clear tbody
        $('tbody tr').remove();
        
        // Invoke private method
        this._setTodosNumber();
        this._hydrateTable();
    }

    private _setTodosNumber(): void {
        const placeholder: JQuery = $('#todos-number');

        placeholder.html(this._service.getSize().toString());
    }

    private _hydrateTable(): void {
        const todos: Array<TodoModel> = this._service.get();
        
        console.log('Todos : ', JSON.stringify(todos));

        if (this._service.getSize() > 0) {
            // Récupérer l'instance de "tbody" du DOM
            const tbody: JQuery = $('tbody');

            todos.forEach((data: any) => {
                // Deserialization to get a well formed todo
                let todo: TodoModel = new TodoModel().deserialize(data);

                let _row: JQuery = $('<tr>'); // Instance d'un TR dans le DOM

                let _idTD: JQuery = $('<td>'); // Instance d'un TD dans le DOM
                _idTD.html(todo.id.toString());
                _idTD.appendTo(_row); // Ajoute le noeud TD enfant dans le TR

                let _titleTD: JQuery = $('<td>');
                _titleTD.html(todo.title).appendTo(_row);

                $('<td>').html(todo.getBeginDate()).appendTo(_row);
                $('<td>').html(todo.getEndDate()).appendTo(_row);
                $('<td>').html('').appendTo(_row);

                // Add row to HTML content
                tbody.append(_row);

            });
        }
    }
}