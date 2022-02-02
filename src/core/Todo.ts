


export interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}


export type TodoInfo = Omit<Todo, "id" | "userId">