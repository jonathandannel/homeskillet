import React from "react";
import { AppState } from "../interfaces";
import { LinearProgress } from "@material-ui/core";
import { loadingStyles } from "./styles";

interface IProps {
  appState: AppState;
}

const Loading = ({ appState }: IProps) => {
  const styles = loadingStyles();
  return (
    <div className={styles.main}>
      <LinearProgress
        className={!appState.loading ? styles.hidden : ""}
        color="secondary"
        variant="indeterminate"
      ></LinearProgress>
    </div>
  );
};
export default Loading;
