/**
 * @name App
 * @abstract Point d'entrée dans l'application
 */

import * as $ from 'jquery';
import { LocalDataService } from './services/local-data-service';
import { TodoModel } from './models/todo-model';
import { TodoListController } from './controllers/todo-list-controller';

export class App {

    public run(): void {
        console.log('Hello TypeScript');

        /* Persister un todo
        const todo: TodoModel = new TodoModel();
        todo.title = 'Test';
        todo.begin = new Date();
        todo.end = new Date();
        todo.sensibility = 0;
        todo.detail = 'Description du todo';*/

        const service: LocalDataService = new LocalDataService();

        // Instancier le contrôleur de la liste des todos
        const todoListController: TodoListController = new TodoListController(service);
    }
}

$(document).ready(() => {
    const app: App = new App();
    app.run();
});