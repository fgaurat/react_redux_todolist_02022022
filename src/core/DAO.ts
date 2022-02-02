import { Todo } from "./Todo";


export interface DAO{
    getAll():Promise<Todo[]>;
}