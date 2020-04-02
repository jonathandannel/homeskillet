import React, { Fragment, useState, useEffect, ChangeEvent } from "react";
import {
  FormControl,
  TextField,
  Container,
  Button,
  Typography
} from "@material-ui/core";
import { AppState, SearchState, FilterType, Action } from "../interfaces";
import { searchStyles } from "./styles";
import { LocationOn, NearMe, Search } from "@material-ui/icons";

interface IProps {
  appState: AppState;
  searchState: SearchState;
  setLoading: (b: boolean) => Action;
  selectCity: (c: string) => Action;
  setSearchFilter: (q: string) => Action;
  setFilterType: (f: FilterType) => Action;
}

const SearchFilter = ({
  appState: { allCities, selectedCity },
  searchState,
  setLoading,
  selectCity,
  setSearchFilter,
  setFilterType
}: IProps) => {
  const styles = searchStyles();
  const [cityQuery, setCityQuery] = useState("");
  const [cityList, setCityList] = useState([]);

  const handleCityInput = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => {
    if (selectedCity || value === "") {
      clearCityInput();
      return;
    }

    setLoading(true);
    setCityQuery(value);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const clearCityInput = (): void => {
    selectCity(null);
    setCityQuery("");
    setCityList([]);
  };

  const chooseCity = (c: string): void => {
    selectCity(c);
    setCityQuery("");
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
              onFocus={() => {
                clearCityInput();
              }}
              onChange={handleCityInput}
              label="City"
              variant="outlined"
              className={styles.input}
            ></TextField>
          </div>
          <div className={styles.flex}>
            <NearMe className={styles.iconRefine}></NearMe>
            <TextField
              label="Refine"
              color="secondary"
              variant="outlined"
              className={styles.input}
            ></TextField>
          </div>
        </FormControl>
      </Container>
      {!selectedCity ? (
        <Container>
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
      ) : (
        <Typography variant="h4">{selectedCity}</Typography>
      )}
    </Fragment>
  );
};
export default SearchFilter;
