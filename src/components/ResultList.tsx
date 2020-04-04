import React, { Fragment, useState, useEffect, ReactElement } from "react";
import {
  Container,
  Paper,
  Card,
  Typography,
  Badge,
  Button
} from "@material-ui/core";
import { AppState, SearchState } from "../interfaces";
import { resultListStyles } from "./styles";
import ResultCard from "./Result";

interface IProps {
  appState: AppState;
  searchState: SearchState;
}

const ResultList: React.FC<IProps> = ({
  appState: { selectedCity },
  searchState: { currentQueryResults, currentQueryPages }
}): any => {
  const styles = resultListStyles();
  const [shownResults, setShownResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentQueryResults.length && currentPage) {
      setShownResults([...currentQueryPages.get(currentPage)]);
    }
  }, [currentQueryResults, currentQueryPages, currentPage]);

  const incPage = (val: number): void => {
    if (currentPage + val > -1 && currentPage + val <= currentQueryPages.size) {
      setCurrentPage(currentPage + val);
    }
  };

  return (
    <Fragment>
      {selectedCity && (
        <Container>
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
          <Button onClick={() => incPage(-1)}>Previous page</Button>
          <Button onClick={() => incPage(1)}>Next page</Button>
        </Container>
      )}
      <Paper className={styles.paper}>
        {shownResults
          ? [...shownResults].map(v => <ResultCard result={v} />)
          : null}
      </Paper>
    </Fragment>
  );
};
export default ResultList;
