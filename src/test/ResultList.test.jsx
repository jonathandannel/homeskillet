import ResultList from "../components/Result";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { searchState } from "./searchState";
import { appState } from "./appState";
import { fn } from "jest";
import React, { Component } from "react";

const mockProps = {
  appState: appState,
  searchState: searchState,
};

test("renders a message", () => {
  const { container, getByText } = render(
    <ResultList
      appState={appState}
      searchState={searchState}
      filterResults={jest.fn}
      setLoading={jest.fn}
    />
  );
  console.log(container);
});
