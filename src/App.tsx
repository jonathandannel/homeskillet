import React, { useEffect, ReactElement } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import {
  RootState,
  AppState,
  SearchState,
  Action,
  Restaurant,
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
  filterResults,
  clearFilter,
} from "./actions/searchActions";
import { queryAllCities } from "./api";

const mapStateToProps = ({ app, search }: RootState) => ({
  appState: app,
  searchState: search,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setAllCities: (c: ReadonlyArray<string>) => dispatch(setAllCities(c)),
  selectCity: (c: string) => dispatch(selectCity(c)),
  setLoading: (b: boolean) => dispatch(setLoading(b)),
  setSearchFilter: (q: string) => dispatch(setSearchFilter(q)),
  setFilterType: (f: string) => dispatch(setFilterType(f)),
  setAllCityRestaurants: (r: ReadonlyArray<any>) =>
    dispatch(setAllCityRestaurants(r)),
  clearFilter: () => dispatch(clearFilter()),
  filterResults: () => dispatch(filterResults()),
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
  clearFilter,
  filterResults,
}): ReactElement => {
  const styles = appStyles();

  useEffect(() => {
    console.log(searchState);
  }, [searchState]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    queryAllCities().then((cities) => {
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
          setAllCityRestaurants={setAllCityRestaurants}
          clearFilter={clearFilter}
        />
        {searchState.allCityRestaurants.length ? (
          <ResultList
            filterResults={filterResults}
            appState={appState}
            searchState={searchState}
          />
        ) : null}
      </Container>
    </ThemeProvider>
  );
};
export default connector(App);
