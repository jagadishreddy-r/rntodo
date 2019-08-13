import { render, fireEvent } from "react-native-testing-library";
import React, { Component } from "react";
import Login from "./index.js";

describe("login page", () => {
  it("csdc", () => {
    const { getByPlaceholder, getByText } = render(<Login />);
    const username = getByPlaceholder("Username");
    const password = getByPlaceholder("Password");
    const submitbut = getByText("Login");
    fireEvent.changeText(username, "jagadish");
    fireEvent.changeText(password, "jagadish");
    fireEvent.press(submitbut);
  });
});
