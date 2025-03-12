import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

test("adds a new todo when the form is submitted", () => {
  render(<TodoList />);

  // Find the input and button
  const inputElement = screen.getByPlaceholderText("Enter a new todo");
  const addButton = screen.getByText("Add Todo");
  const deleteButton = screen.getByTestId("delete-1");
  

  // Simulate user typing a new todo
  fireEvent.change(inputElement, { target: { value: "Go to church" } });
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
  fireEvent.click(deleteButton);
  expect(screen.queryByTestId("todo-1")).toBeNull();
  // Simulate form submission
  fireEvent.click(addButton);

  // Check if the new todo is added to the list
  expect(screen.getByText("Go to church")).toBeInTheDocument();
});
