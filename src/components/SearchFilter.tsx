import React, { Fragment, useState, useEffect, ChangeEvent } from "react";
import {
  FormControl,
  TextField,
  Container,
  Button,
  Typography
} from "@material-ui/core";
import {
  AppState,
  SearchState,
  FilterType,
  Action,
  Restaurant
} from "../interfaces";
import { searchStyles } from "./styles";
import { LocationOn, NearMe, Search } from "@material-ui/icons";
import { getAllRestaurants } from "../api";

interface IProps {
  appState: AppState;
  searchState: SearchState;
  setLoading: (b: boolean) => Action;
  selectCity: (c: string) => Action;
  setAllCityRestaurants: (r: ReadonlyArray<Restaurant>) => Action;
  setSearchFilter: (q: string) => Action;
  setFilterType: (f: FilterType) => Action;
}

const SearchFilter = ({
  appState: { allCities, selectedCity },
  searchState: { allCityRestaurants, resultCount },
  setLoading,
  selectCity,
  setAllCityRestaurants,
  setSearchFilter,
  setFilterType
}: IProps) => {
  const styles = searchStyles();
  const [cityQuery, setCityQuery] = useState("");
  const [cityList, setCityList] = useState([]);

  const handleCityInput = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => {
    if (value === "") {
      setCityList([]);
    }
    setLoading(true);
    setCityQuery(value);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const chooseCity = (c: string): void => {
    selectCity(c);
    setCityQuery("");
    setCityList([]);
    getAllRestaurants(c).then(r => setAllCityRestaurants(r));
  };

  useEffect(() => {
    if (cityQuery.length > 2) {
      const matches: Array<string> = allCities.filter(
        q =>
          q.slice(0, cityQuery.length).toLowerCase() ===
          cityQuery.trim().toLowerCase()
      );
      setCityList([...matches]);
    }
  }, [cityQuery]);

  return (
    <Fragment>
      <Container className={styles.main}>
        <FormControl className={styles.formControl}>
          <div className={styles.flex}>
            <LocationOn className={styles.iconCity}></LocationOn>
            <TextField
              required
              color="secondary"
              value={cityQuery}
              onChange={handleCityInput}
              label="City"
              variant="outlined"
              className={styles.input}
            ></TextField>
          </div>
          <div className={styles.flex}>
            <NearMe className={styles.iconRefine}></NearMe>
            <TextField
              disabled={selectedCity === null}
              label="Refine"
              color="secondary"
              variant="outlined"
              className={styles.input}
            ></TextField>
          </div>
        </FormControl>
      </Container>
      <Container className={styles.cityList}>
        {cityList.map(c => (
          <Button
            className={styles.cityButton}
            onClick={() => chooseCity(c)}
            variant="contained"
            color="primary"
          >
            {c}
          </Button>
        ))}
      </Container>
    </Fragment>
  );
};
export default SearchFilter;
