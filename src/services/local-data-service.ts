import { TodoModel } from "./../models/todo-model";
import * as $ from 'jquery';

/**
 * @name LocalDataService
 * @abstract Service de presistance locale LocalStorage
 */
export class LocalDataService {

    public get(): Promise<Array<TodoModel>> {
        return new Promise((resolve, reject) => {
            if (localStorage.getItem('todos')) {
                const todos: Array<TodoModel> = JSON.parse(localStorage.getItem('todos'));
                setTimeout(() => {
                    resolve(todos);
                }, 1500);
                return;
            }
            resolve(null);
        });
    }

    public set(todos: Array<TodoModel>): void {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    public getSize(): number {
        if (localStorage.getItem('todos')) {
            return JSON.parse(localStorage.getItem('todos')).length;
        }
        return 0;
    }

    public add(todo: TodoModel) {
        let todos: Array<any> = this.get();

        if (!todos) {
            todos = Array<any>();
        }

        todos.push(todo);

        this.set(todos);
    }
}