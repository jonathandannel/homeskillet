import React, { useEffect, ReactElement } from "react";
import { Container, Paper, Card } from "@material-ui/core";
import { AppState, SearchState } from "../interfaces";
import { resultListStyles } from "./styles";
import ResultCard from "./Result";

interface IProps {
  appState: AppState;
  searchState: SearchState;
}

const ResultList: React.FC<IProps> = ({
  appState,
  searchState
}): ReactElement => {
  const styles = resultListStyles();
  return (
    <Paper className={styles.paper}>
      <ResultCard></ResultCard>
      <ResultCard></ResultCard>
      <ResultCard></ResultCard>
      <ResultCard></ResultCard>
      <ResultCard></ResultCard>
      <ResultCard></ResultCard>
      <ResultCard></ResultCard>
      <ResultCard></ResultCard>
    </Paper>
  );
};
export default ResultList;
