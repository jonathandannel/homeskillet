import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState, AppState, ResultState } from "./interfaces";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import ResultList from "./components/ResultList";

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

const App = ({ appState, resultState }: IProps & ConnProps) => {
  useEffect(() => {
    console.log(appState, resultState);
  }, [appState, resultState]);

  return (
    <div>
      <Navbar appState={appState} />
      <SearchFilter appState={appState} />
      <ResultList appState={appState} />
    </div>
  );
};
export default connector(App);
