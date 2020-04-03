import React, { Fragment, useState, useEffect, ReactElement } from "react";
import { Container, Paper, Card, Typography, Badge } from "@material-ui/core";
import { AppState, SearchState } from "../interfaces";
import { resultListStyles } from "./styles";
import ResultCard from "./Result";

interface IProps {
  appState: AppState;
  searchState: SearchState;
}

const ResultList: React.FC<IProps> = ({
  appState: { selectedCity },
  searchState: { currentQueryResults }
}): any => {
  const styles = resultListStyles();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (currentQueryResults) {
      setResults(currentQueryResults);
    }
  }, [currentQueryResults]);

  return (
    <Fragment>
      {selectedCity && (
        <Badge
          max={999}
          color="primary"
          badgeContent={currentQueryResults.length}
        >
          <Typography
            className={styles.selectedCity}
            variant="h4"
          >{`${selectedCity}`}</Typography>
        </Badge>
      )}
      <Paper className={styles.paper}>
        {results ? results.map(v => <ResultCard result={v} />) : null}
      </Paper>
    </Fragment>
  );
};
export default ResultList;
