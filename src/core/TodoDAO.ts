import { DAO } from "./DAO";
import { Todo } from "./Todo";



export class TodoDAO implements DAO{
    async getAll(): Promise<Todo[]> {
        return fetch(process.env.REACT_APP_URL_TODO || "").then(r => r.json())
    }
}
