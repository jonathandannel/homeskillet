import React, { useEffect, ReactElement } from "react";
import { Container, Paper, Card } from "@material-ui/core";
import { AppState, ResultState } from "../interfaces";
import { resultListStyles } from "./styles";
import ResultCard from "./Result";

interface IProps {
  appState: AppState;
  resultState: ResultState;
}

const ResultList: React.FC<IProps> = ({
  appState,
  resultState
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
