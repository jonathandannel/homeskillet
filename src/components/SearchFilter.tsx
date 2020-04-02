import React, { useEffect } from "react";
import { FormControl, Input, TextField, Container } from "@material-ui/core";
import { AppState, ResultState } from "../interfaces";
import { searchStyles } from "./styles";

interface IProps {
  appState: AppState;
}

const SearchFilter = ({ appState }: IProps) => {
  const styles = searchStyles();
  return (
    <Container className={styles.main}>
      <FormControl className={styles.formControl}>
        <TextField
          required
          label="City"
          variant="outlined"
          className={styles.input}
        ></TextField>
        <TextField
          label="Refine"
          variant="outlined"
          className={styles.input}
        ></TextField>
      </FormControl>
    </Container>
  );
};
export default SearchFilter;
