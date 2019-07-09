import * as moment from 'moment';

/**
 * @name TodoModel
 * @abstract Modèle des Todos de l'application
 */
export class TodoModel {
    private _id: number;
    private _title: string;
    private _begin: Date;
    private _end: Date;
    private _sensibility: number;
    private _detail: string;

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }
    
    public get title(): string {
        return this._title;
    }
    
    public set title(title: string) {
        this._title = title;
    }

    public get begin(): Date {
        return this._begin;
    }

    public getBeginDate(): string {
        return moment(this._begin).format('DD/MM/YYYY');
    }

    public getEndDate(): string {
        return moment(this._end).format('DD/MM/YYYY');
    }
    public set begin(value: Date) {
        this._begin = value;
    }

    public get end(): Date {
        return this._end;
    }
    public set end(value: Date) {
        this._end = value;
    }

    public get sensibility(): number {
        return this._sensibility;
    }
    public set sensibility(value: number) {
        this._sensibility = value;
    }

    public get detail(): string {
        return this._detail;
    }
    public set detail(value: string) {
        this._detail = value;
    }

    public deserialize(data: any): TodoModel {
        Object.assign(this, data);
        return this;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}