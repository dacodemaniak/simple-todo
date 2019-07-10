/**
 * @name App
 * @abstract Point d'entrée dans l'application
 */

import * as $ from 'jquery';
import { LocalDataService } from './services/local-data-service';
import { TodoModel } from './models/todo-model';
import { TodoListController } from './controllers/todo-list-controller';
import { TodoFormController } from './controllers/todo-form-controller';

export class App {

    public run(): void {
        console.log('Hello TypeScript');

        const service: LocalDataService = new LocalDataService();

        // Instancier le contrôleur de la liste des todos
        const todoListController: TodoListController = new TodoListController(service);

        // Instancier le contrôleur du formulaire
        const todoFormController: TodoFormController = new TodoFormController(service);
    }
}

$(document).ready(() => {
    const app: App = new App();
    app.run();
});