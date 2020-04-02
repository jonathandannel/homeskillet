import React, { useEffect, ReactElement, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import {
  RootState,
  AppState,
  ResultState,
  Action,
  Restaurant
} from "./interfaces";
import { ThemeProvider, Container, Typography } from "@material-ui/core";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import ResultList from "./components/ResultList";
import Loading from "./components/Loading";
import theme from "./theme";
import { miscStyles } from "./components/styles";
import { selectCity, setAllCities } from "./actions/appActions";

import { queryRestaurantsByCity, queryAllCities } from "./api";

const mapStateToProps = ({ app, search }: RootState) => ({
  appState: app,
  searchState: search
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setAllCities: (c: ReadonlyArray<string>) => dispatch(setAllCities(c)),
  selectCity: (c: string) => dispatch(selectCity(c))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConnProps = ConnectedProps<typeof connector>;

interface IProps {
  appState: AppState;
  resultState: ResultState;
}

const App: React.FC<IProps & ConnProps> = ({
  appState,
  resultState,
  setAllCities
}): ReactElement => {
  const styles = miscStyles();

  useEffect(() => {
    console.log(appState, resultState);
  }, [appState, resultState]);

  // Fetch all cities on load
  useEffect(() => {
    queryAllCities().then(cities => {
      if (cities) setAllCities(cities);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar appState={appState} />
      <Loading appState={appState} />
      <Container>
        <Typography variant="h2" className={styles.introText}>
          Find the food you love.
        </Typography>
        <SearchFilter appState={appState} selectCity={selectCity} />
        <ResultList appState={appState} resultState={resultState} />
      </Container>
    </ThemeProvider>
  );
};
export default connector(App);
