import React from "react";
import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test("header renders with correct text", () => {
  const headerEl = getByTestId("counterHeader");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initializes at zero", () => {
  const counterEl = getByTestId("counterDisplay");

  expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const inputEl = getByTestId("stepSizeInput");

  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  const btnEl = getByTestId("addBtn");

  expect(btnEl.textContent).toBe("+");
});

test("subtract button renders with -", () => {
  const btnEl = getByTestId("subBtn");

  expect(btnEl.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const inputEl = getByTestId("stepSizeInput");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
});

test("clicking on plus button adds input value to counter", () => {
  const btnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counterDisplay");
  const inputEl = getByTestId("stepSizeInput");

  fireEvent.click(btnEl);

  expect(counterEl.textContent).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");

  fireEvent.click(btnEl);

  expect(counterEl.textContent).toBe("6");
});

test("clicking on subtract button subtracts input value from counter", () => {
  const btnEl = getByTestId("subBtn");
  const counterEl = getByTestId("counterDisplay");
  const inputEl = getByTestId("stepSizeInput");

  fireEvent.click(btnEl);

  expect(counterEl.textContent).toBe("-1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");

  fireEvent.click(btnEl);

  expect(counterEl.textContent).toBe("-6");
});

test("counter display has correct color/className", () => {
  const counterEl = getByTestId("counterDisplay");
  const addBtnEl = getByTestId("addBtn");
  const subBtnEl = getByTestId("subBtn");
  const inputEl = getByTestId("stepSizeInput");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "30",
    },
  });

  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("");
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("");
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("");
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("120");
  expect(counterEl.className).toBe("green");
  fireEvent.change(inputEl, {
    target: {
      value: "75",
    },
  });
  fireEvent.click(subBtnEl);
  expect(counterEl.className).toBe("");
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe("-30");
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe("-105");
  expect(counterEl.className).toBe("red");
});
