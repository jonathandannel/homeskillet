import React from "react";
import { SearchState, AppState } from "../interfaces";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import store from "../store";
import SearchFilter from "../components/SearchFilter";
import App from "../App";
import { setLoading } from "../actions/appActions";
import {
  setFilterType,
  setSearchFilter,
  clearFilter,
  setAllCityRestaurants,
} from "../actions/searchActions";

import { selectCity } from "../actions/appActions";
import { allRestaurants } from "./searchState";

const searchState: SearchState = {
  resultCount: 0,
  allCityRestaurants: allRestaurants,
  currentQueryResults: [],
  currentQueryPages: new Map(),
  searchFilter: "",
  searchFilterType: null,
};

const appState: AppState = {
  loading: false,
  selectedCity: "Toronto",
  allCities: ["Toronto", "Torrance", "Torrey", "Torreón", "Torrington"],
};

function renderWithRedux() {
  return {
    ...render(
      <Provider store={store}>
        <App>
          <SearchFilter
            appState={appState}
            searchState={searchState}
            selectCity={selectCity}
            setAllCityRestaurants={setAllCityRestaurants}
            clearFilter={clearFilter}
            setSearchFilter={setSearchFilter}
            setFilterType={setFilterType}
            setLoading={setLoading}
          />
        </App>
      </Provider>
    ),
  };
}

test("selecting a city triggers paginating all restaurants", () => {
  const { getByTestId, getByLabelText } = renderWithRedux();
});
