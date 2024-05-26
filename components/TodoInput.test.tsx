/**
 * test scenario for TodoInput
 *
 * - TodoInput component
 *   - should handle todo input correctly
 *   - should call onAddTodo function when add button is clicked
 *
 */

import React from "react";
import { render, screen, userEvent } from "@testing-library/react-native";
import TodoInput from "./TodoInput";

jest.useFakeTimers();

describe("TodoInput component", () => {
  it("should handle todo input correctly", async () => {
    const mockAddTodo = jest.fn();

    render(<TodoInput onAddTodo={mockAddTodo} />);

    const todoInput = await screen.getByPlaceholderText(/Write a task/i);
    await userEvent.type(todoInput, "todotest");

    expect(todoInput.props.value).toBe("todotest");
  });

  it("should call onAddTodo function when add button is clicked", async () => {
    const mockAddTodo = jest.fn();

    render(<TodoInput onAddTodo={mockAddTodo} />);

    const todoInput = await screen.getByPlaceholderText(/Write a task/i);
    await userEvent.type(todoInput, "todotest");

    const addButton = await screen.getByTestId("addButton");
    await userEvent.press(addButton);

    expect(mockAddTodo).toHaveBeenCalledWith({ name: "todotest" });
  });
});
