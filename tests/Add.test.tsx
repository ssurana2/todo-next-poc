import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";
import * as stories from "@/stories/Add.stories";

const { AddInput } = composeStories(stories);

test("should trigger onAdd event on clicking the add button", () => {
  const onAddMock = jest.fn();
  render(<AddInput onAdd={onAddMock} />);

  const inputElement = screen.getByPlaceholderText("Placeholder");
  expect(inputElement).toBeDefined();
  userEvent.type(inputElement, "Hello");
  expect(inputElement).toHaveValue("Hello");

  const buttonElement = screen.getByText("Add");
  expect(buttonElement).toBeDefined();
  userEvent.click(buttonElement);

  expect(onAddMock).toHaveBeenCalledTimes(1);
  expect(onAddMock).toHaveBeenCalledWith("Hello");
  expect(inputElement).toHaveValue("");
});
