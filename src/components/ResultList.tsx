import React, { useEffect, ReactElement } from "react";
import { Container } from "@material-ui/core";
import { AppState, ResultState } from "../interfaces";
import { resultStyles } from "./styles";

interface IProps {
  appState: AppState;
  resultState: ResultState;
}

const ResultList: React.FC<IProps> = ({
  appState,
  resultState
}): ReactElement => {
  const styles = resultStyles();
  return <Container className={styles.main}></Container>;
};
export default ResultList;
