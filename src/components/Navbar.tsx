import React, { useEffect } from "react";
import { AppState, ResultState } from "../interfaces";
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

const Navbar = ({ appState }: IProps) => {
  const styles = navbarStyles();
  return (
    <AppBar elevation={1} className={styles.main} position="static">
      <Container>
        <Typography className={styles.text} color="primary" variant="h5">
          ristorio
        </Typography>
      </Container>
    </AppBar>
  );
};
export default Navbar;
