import React, { useEffect, ReactElement } from "react";
import { AppState, ResultState } from "../interfaces";

interface IProps {
  appState: AppState;
  resultState: ResultState;
}

const ResultList: React.FC<IProps> = ({
  appState,
  resultState
}): ReactElement => {
  return (
    <ul>
      {["1", "2", "3"].map(r => (
        <div>r</div>
      ))}
    </ul>
  );
};
export default ResultList;
