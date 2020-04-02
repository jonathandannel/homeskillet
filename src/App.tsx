import React, { useEffect, ReactElement, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState, AppState, ResultState } from "./interfaces";
import { ThemeProvider, Container, Typography } from "@material-ui/core";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import ResultList from "./components/ResultList";
import Loading from "./components/Loading";
import theme from "./theme";

const mapStateToProps = (state: RootState) => ({
  appState: state.app,
  resultState: state.results
});

const connector = connect(mapStateToProps, null);

type ConnProps = ConnectedProps<typeof connector>;

interface IProps {
  appState: AppState;
  resultState: ResultState;
}

const App: React.FC<IProps & ConnProps> = ({
  appState,
  resultState
}): ReactElement => {
  useEffect(() => {
    console.log(appState, resultState);
  }, [appState, resultState]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar appState={appState} />
      <Loading appState={appState} />
      <Container>
        <SearchFilter appState={appState} />
        <ResultList appState={appState} resultState={resultState} />
      </Container>
    </ThemeProvider>
  );
};
export default connector(App);
