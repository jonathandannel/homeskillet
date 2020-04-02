import React, { useState, useEffect, ChangeEvent } from "react";
import { FormControl, TextField, Container } from "@material-ui/core";
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
  appState: { allCities },
  searchState,
  setLoading,
  selectCity,
  setSearchFilter,
  setFilterType
}: IProps) => {
  const styles = searchStyles();
  const [cityQuery, setCityQuery] = useState("");
  const [cityList, setCityList] = useState([]);

  const handleCityChange = (e: ChangeEvent) => {};

  useEffect(() => {
    const matches = allCities.filter(
      q => q.slice(0, cityQuery.length) === cityQuery
    );
    setCityList([...matches]);
  }, [cityQuery]);

  return (
    <Container className={styles.main}>
      <FormControl className={styles.formControl}>
        <div className={styles.flex}>
          <LocationOn className={styles.iconCity}></LocationOn>
          <TextField
            required
            color="secondary"
            onChange={handleCityChange}
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
  );
};
export default SearchFilter;
