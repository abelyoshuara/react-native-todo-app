/**
 * test scenario for todosReducer
 *
 * - todosReducer function:
 *  - should return the initial state
 *  - should return the todos with the new todo when given by ADD_TODO action
 *  - should return the todos with the update todo when given by UPDATE_TODO action
 *  - should return the todos with the delete todo when given by DELETE_TODO action
 *
 */

import type { Todo } from "../types/Todo";
import { Action, initialTodos, todosReducer } from "./todos";

describe("todosReducer function", () => {
  it("should return the initial state", () => {
    const initialState: Todo[] = [];
    expect(initialTodos).toEqual(initialState);
  });

  it("should return the todos with the new todo when given by ADD_TODO action", () => {
    const initialState = [
      {
        id: 1,
        name: "Todo Test 1",
        isCompleted: false,
      },
    ];

    const action = {
      type: "ADD_TODO",
      payload: {
        id: "todo-2",
        name: "Todo Test 2",
        isCompleted: false,
      },
    } as Action;

    const nextState = todosReducer(initialState, action);
    expect(nextState).toEqual([...initialState, action.payload]);
  });

  it("should return the todos with the update todo when given by UPDATE_TODO action", () => {
    const initialState: Todo[] = [
      {
        id: 1,
        name: "Todo Test 1",
        isCompleted: false,
      },
      {
        id: 2,
        name: "Todo Test 2",
        isCompleted: false,
      },
    ];

    const action: Action = {
      type: "UPDATE_TODO",
      payload: {
        id: 1,
      },
    };

    const nextState = todosReducer(initialState, action);
    const updateTodo = initialState.map((todo: Todo) =>
      todo.id === action.payload.id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    );

    expect(nextState).toEqual(updateTodo);
  });

  it("should return the todos with the delete todo when given by DELETE_TODO action", () => {
    const initialState: Todo[] = [
      {
        id: 1,
        name: "Todo Test 1",
        isCompleted: false,
      },
      {
        id: 2,
        name: "Todo Test 2",
        isCompleted: false,
      },
    ];

    const action: Action = {
      type: "DELETE_TODO",
      payload: {
        id: 1,
      },
    };

    const nextState = todosReducer(initialState, action);
    const deleteTodo = initialState.filter(
      (todo) => todo.id !== action.payload.id
    );

    expect(nextState).toEqual(deleteTodo);
  });
});
