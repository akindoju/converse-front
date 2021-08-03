import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Join from "./join";

test("Check initial components state", () => {
  render(<Join />);

  const header = screen.getByRole("heading", { name: /converse/i });
  const pageTitle = screen.getByRole("heading", { name: /join/i });
  const nameInput = screen.getByPlaceholderText(/name/i);
  const roomInput = screen.getByPlaceholderText(/room/i);
  const joinBtn = screen.getByRole("button", { name: /join room/i });

  expect(header).toBeInTheDocument();
  expect(pageTitle).toBeInTheDocument();
  expect(nameInput).not.toHaveValue();
  expect(roomInput).not.toHaveValue();
  expect(joinBtn).toBeDisabled();
});

test("check that button gets enabled only when both input have value", () => {
  render(<Join />);

  const nameInput = screen.getByPlaceholderText(/name/i);
  const roomInput = screen.getByPlaceholderText(/room/i);
  const joinBtn = screen.getByRole("button", { name: /join room/i });

  //expect btn to remain disabled if only name field is filled
  userEvent.type(nameInput, "name");
  expect(joinBtn).toBeDisabled();

  //expect btn to be enabled if both fields are filled
  userEvent.type(roomInput, "room");
  expect(joinBtn).toBeEnabled();

  //expect btn to get disabled if one field is cleared
  userEvent.clear(nameInput);
  expect(joinBtn).toBeDisabled();
});
