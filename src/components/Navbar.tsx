import React from "react";
import { AppState } from "../interfaces";
import { AppBar, Typography, Container } from "@material-ui/core";
import { Language } from "@material-ui/icons";
import { navbarStyles } from "./styles";

interface IProps {
  appState: AppState;
}

const Navbar = ({ appState: { selectedCity } }: IProps): React.ReactElement => {
  const styles = navbarStyles();
  return (
    <AppBar elevation={1} className={styles.main} position="static">
      <Container>
        <div className={styles.navbarContent}>
          <Typography className={styles.text} color="primary" variant="h5">
            ristorio
          </Typography>
          <div className={styles.location}>
            <Language className={styles.locationIcon} color="primary" />
            <Typography
              className={styles.locationText}
              color="primary"
              variant="body2"
            >
              {selectedCity ? selectedCity : "Select a city"}
            </Typography>
          </div>
        </div>
      </Container>
    </AppBar>
  );
};
export default Navbar;
