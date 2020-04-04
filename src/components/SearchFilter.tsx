import React, { Fragment, useState, useEffect, ChangeEvent } from "react";
import {
  FormControl,
  TextField,
  Container,
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";
import { AppState, SearchState, Action, Restaurant } from "../interfaces";
import { searchStyles } from "./styles";
import { LocationOn, NearMe } from "@material-ui/icons";
import { getAllRestaurants } from "../api";

interface IProps {
  appState: AppState;
  searchState: SearchState;
  setLoading: (b: boolean) => Action;
  selectCity: (c: string) => Action;
  setAllCityRestaurants: (r: ReadonlyArray<Restaurant>) => Action;
  setSearchFilter: (q: string) => Action;
  setFilterType: (f: string) => Action;
  clearFilter: () => Action;
}

const SearchFilter = ({
  appState: { allCities, selectedCity },
  searchState: { searchFilterType },
  setLoading,
  selectCity,
  setAllCityRestaurants,
  clearFilter,
  setSearchFilter,
  setFilterType,
}: IProps) => {
  const styles = searchStyles();
  const [cityQuery, setCityQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const [cityList, setCityList] = useState([]);

  const handleCityInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    if (value === "") {
      setCityList([]);
    }
    setLoading(true);
    setCityQuery(value);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const chooseCity = (c: string): void => {
    setLoading(true);
    selectCity(c);
    setCityList([]);
    setAllCityRestaurants(null);
    getAllRestaurants(c).then((r) => setAllCityRestaurants(r));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleFilterChange = ({
    target: { value },
  }: ChangeEvent<any>): void => {
    setLoading(true);
    setFilterType(value);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleFilterQuery = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setLoading(true);
    if (value === "") {
      clearFilter();
      setFilterType(null);
    }
    setFilterQuery(value);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setSearchFilter(filterQuery);
  }, [filterQuery]);

  useEffect(() => {
    if (cityQuery.length > 2) {
      const matches: Array<string> = allCities.filter(
        (q) =>
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
            <NearMe
              className={`${styles.iconRefine} ${
                selectedCity === null ? styles.disabled : ""
              }`}
            ></NearMe>
            <TextField
              disabled={selectedCity === null}
              label="Refine"
              color="secondary"
              variant="outlined"
              value={filterQuery}
              onChange={handleFilterQuery}
              className={styles.input}
            ></TextField>
          </div>
        </FormControl>
        <FormControl disabled={selectedCity === null} component="fieldset">
          <FormLabel component="legend">Filter by</FormLabel>
          <RadioGroup onChange={handleFilterChange} value={searchFilterType}>
            <FormControlLabel value="name" control={<Radio />} label="Name" />
            <FormControlLabel value="area" control={<Radio />} label="Area" />
            <FormControlLabel
              value="address"
              control={<Radio />}
              label="Address"
            />
          </RadioGroup>
        </FormControl>
      </Container>
      <Container className={styles.cityList}>
        {cityList.map((c) => (
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
