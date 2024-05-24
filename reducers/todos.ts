import { Todo } from "../types/Todo";

export type Action = {
  type: string;
  payload: { id?: string | number; name: string; isComplete: boolean };
};

const initialTodos: Todo[] = [];

function todosReducer(todos: Todo[], action: Action) {
  switch (action.type) {
    case "ADD_TODO": {
      const todo = [...todos, { id: +new Date(), ...action.payload }];
      return todo;
    }

    case "DELETE_TODO": {
      const todo = todos.filter((todo) => todo.id !== action.payload.id);
      return todo;
    }

    case "UPDATE_TODO": {
      const todo = todos.map((todo: Todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: !todo.isCompleted }
          : todo
      );
      return todo;
    }

    default:
      throw new Error("Unknown action.");
  }
}

export { todosReducer, initialTodos };
