import React from "react";
import Demo from "./Demo";
import { render, fireEvent } from "@testing-library/react";

test("Component test", () => {
  const { getByText, getByTestId, getByRole, debug} = render(<Demo/>);
  // debug();
  let helloText = getByText("Hello Test!"); // Not Correct way

  // fireEvent
  let myBtn = getByRole('button');
  fireEvent.click(myBtn);

  let myName = "Prabhudev";
  let myInput = getByRole('textbox');
  expect(myInput).toHaveValue('');
  fireEvent.change( myInput, { target: { value : myName }});
  expect(myInput).toHaveValue(myName);

  // console.log(helloText.tagName);
  expect(helloText).toBeTruthy();
  expect(helloText.tagName).toBe("H1");
  expect(helloText.textContent).toBe("Hello Test!");

  // Methods to select (getBy, queryBy, findBy)
  let helloTextById = getByTestId("my-heading"); // Correct way
  expect(helloTextById).toBeTruthy();
})