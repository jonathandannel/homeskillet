import React, { useEffect } from "react";
import { AppState } from "../interfaces";
import {
  AppBar,
  Typography,
  Container,
  LinearProgress
} from "@material-ui/core";
import { navbarStyles } from "./styles";

interface IProps {
  appState: AppState;
}

const Navbar = ({ appState: { selectedCity } }: IProps) => {
  const styles = navbarStyles();
  return (
    <AppBar elevation={1} className={styles.main} position="static">
      <Container>
        <Typography className={styles.text} color="primary" variant="h5">
          ristorio
        </Typography>
  <Typography variant="caption">{selectedCity ? `${selectedCity}` || 'Select a city'}</Typography>
      </Container>
    </AppBar>
  );
};
export default Navbar;
