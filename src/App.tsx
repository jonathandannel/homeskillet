import React, { useEffect, ReactElement, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import {
  RootState,
  AppState,
  SearchState,
  Action,
  FilterType,
  Restaurant
} from "./interfaces";
import { ThemeProvider, Container, Typography } from "@material-ui/core";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import ResultList from "./components/ResultList";
import Loading from "./components/Loading";
import theme from "./theme";
import { appStyles } from "./components/styles";
import { selectCity, setAllCities, setLoading } from "./actions/appActions";
import {
  setSearchFilter,
  setFilterType,
  setAllCityRestaurants,
  setResultPage,
  clearSearch
} from "./actions/searchActions";
import { queryAllCities } from "./api";

const mapStateToProps = ({ app, search }: RootState) => ({
  appState: app,
  searchState: search
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setAllCities: (c: ReadonlyArray<string>) => dispatch(setAllCities(c)),
  selectCity: (c: string) => dispatch(selectCity(c)),
  setLoading: (b: boolean) => dispatch(setLoading(b)),
  setSearchFilter: (q: string) => dispatch(setSearchFilter(q)),
  setFilterType: (f: FilterType) => dispatch(setFilterType(f)),
  setAllCityRestaurants: (r: ReadonlyArray<any>) =>
    dispatch(setAllCityRestaurants(r)),
  setResultPage: (n: number) => dispatch(setResultPage(n)),
  clearSearch: () => dispatch(clearSearch())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConnProps = ConnectedProps<typeof connector>;

interface IProps {
  appState: AppState;
  searchState: SearchState;
}

const App: React.FC<IProps & ConnProps> = ({
  appState,
  searchState,
  setAllCities,
  selectCity,
  setLoading,
  setSearchFilter,
  setAllCityRestaurants,
  setFilterType,
  setResultPage,
  clearSearch
}): ReactElement => {
  const styles = appStyles();

  useEffect(() => {
    console.log(appState, searchState);
  }, [appState, searchState]);

  // Fetch all cities on load
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
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
        <SearchFilter
          appState={appState}
          searchState={searchState}
          setLoading={setLoading}
          selectCity={selectCity}
          setSearchFilter={setSearchFilter}
          setFilterType={setFilterType}
          setResultPage={setResultPage}
          setAllCityRestaurants={setAllCityRestaurants}
          clearSearch={clearSearch}
        />
        {searchState.allCityRestaurants.length ? (
          <ResultList appState={appState} searchState={searchState} />
        ) : null}
      </Container>
    </ThemeProvider>
  );
};
export default connector(App);
