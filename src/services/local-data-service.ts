import { TodoModel } from "./../models/todo-model";

/**
 * @name LocalDataService
 * @abstract Service de presistance locale LocalStorage
 */
export class LocalDataService {
    public get(): Array<TodoModel> {
        if (localStorage.getItem('todos')) {
            const todos: Array<TodoModel> = JSON.parse(localStorage.getItem('todos'));
            return todos;
        }
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