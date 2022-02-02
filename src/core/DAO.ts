import { Todo } from "./Todo";


export interface DAO{
    getAll():Promise<Todo[]>;
    delete(id:number):Promise<void>;
    save(todo:Todo):Promise<Todo>;
 
}