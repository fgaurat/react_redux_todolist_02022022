import { DAO } from "./DAO";
import { Todo } from "./Todo";



export class TodoDAO implements DAO{

    async delete(id: number): Promise<void> {
        const url = (process.env.REACT_APP_URL_TODO || "" ) + "/" + id;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        }).then(r => r.json())
    }

    async save(todo: Todo): Promise<Todo> {
        const url = (process.env.REACT_APP_URL_TODO || "" );
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }).then(r => r.json())
    }
    
    async getAll(): Promise<Todo[]> {
        return fetch(process.env.REACT_APP_URL_TODO || "").then(r => r.json())
    }
}
