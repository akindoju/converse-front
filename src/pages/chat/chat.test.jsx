import { findByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chat from "./chat";

test("Checking initial state of components", async () => {
  render(<Chat />);

  const header = screen.getByRole("heading", { name: /converse/i });
  const activeUsers = screen.getByRole("button", { name: "0" });
  const welcomeMsg = await findByText("Hello, welcome to room", {
    exact: false,
  });
  const textField = screen.getByPlaceholderText(/type a message/i);
  const sendBtn = screen.getByRole("button", { name: /send/i });

  expect(header).toBeInTheDocument();
  expect(activeUsers).toBeInTheDocument();
  expect(welcomeMsg).toBeInTheDocument();
  expect(activeUsers).toHaveTextContent("1");
  expect(textField).not.toHaveValue();
  expect(sendBtn).toBeInTheDocument();
});
