import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByRole("textbox", {
      placeholder: "Add a new task here...",
    });
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByRole("textbox", {
      placeholder: "Add a new task here...",
    });
    fireEvent.change(inputElement,{target:{value:"Order food"}})
    expect(inputElement.value).toBe("Order food")
  });

  test("should be able to type input & click on add", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByRole("textbox", {
      placeholder: "Add a new task here...",
    });
    const addButton = screen.getByRole("button", {label:/Add/i})
    fireEvent.change(inputElement,{target:{value:"Order food"}})
    fireEvent.click(addButton)
    expect(mockedSetTodos).toBeCalled()
  });

  test("should have empty input value on button click",() => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByRole("textbox", {
      placeholder: "Add a new task here...",
    });
    const addButton = screen.getByRole("button", {label:/Add/i})
    fireEvent.change(inputElement,{target:{value:"Order food"}})
    fireEvent.click(addButton)
    expect(inputElement.value).toBe("")
  });
});
