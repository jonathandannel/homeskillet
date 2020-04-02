import React, { useEffect } from "react";
import {
  FormControl,
  Fab,
  Button,
  TextField,
  Container
} from "@material-ui/core";
import { Dispatch } from "redux";
import { AppState, ResultState, Action } from "../interfaces";
import { searchStyles } from "./styles";
import { LocationOn, NearMe, Search } from "@material-ui/icons";

interface IProps {
  appState: AppState;
  selectCity: (c: string) => Dispatch<Action>;
}

const SearchFilter = ({ appState, selectCity }: IProps) => {
  const styles = searchStyles();
  return (
    <Container className={styles.main}>
      <FormControl className={styles.formControl}>
        <div className={styles.flex}>
          <LocationOn className={styles.iconCity}></LocationOn>
          <TextField
            required
            color="secondary"
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
