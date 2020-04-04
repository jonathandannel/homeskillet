import React, { Fragment, useState, useEffect, ReactElement } from "react";
import {
  Container,
  Paper,
  Card,
  Typography,
  Badge,
  Button,
} from "@material-ui/core";
import { AppState, SearchState } from "../interfaces";
import { resultListStyles } from "./styles";
import ResultCard from "./Result";

interface IProps {
  appState: AppState;
  searchState: SearchState;
  filterResults: () => any;
}

const ResultList: React.FC<IProps> = ({
  appState: { selectedCity },
  searchState: {
    currentQueryResults,
    currentQueryPages,
    searchFilter,
    searchFilterType,
  },
  filterResults,
}): any => {
  const styles = resultListStyles();
  const [shownResults, setShownResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const backEnabled = currentPage - 1 > 0;
  const forwardEnabled = currentPage + 1 < currentQueryPages.size;

  useEffect(() => {
    setShownResults([...currentQueryPages.get(currentPage)]);
  }, [currentQueryResults, currentQueryPages, currentPage]);

  useEffect(() => {
    if (searchFilter && searchFilterType) {
      filterResults();
    }
  }, [searchFilter, searchFilterType]);

  const incPage = (val: number): void => {
    if (currentPage + val > 0 && currentPage + val <= currentQueryPages.size) {
      setCurrentPage(currentPage + val);
    }
  };

  return (
    <Fragment>
      {selectedCity && (
        <Container className={styles.resultTitle}>
          <Badge
            className={styles.badge}
            max={999}
            color="primary"
            badgeContent={currentQueryResults.length}
          >
            <Typography
              className={styles.selectedCity}
              variant="h4"
            >{`${selectedCity}`}</Typography>
          </Badge>
          <div>
            <Button
              className={styles.paginationButton}
              variant="contained"
              color="primary"
              disabled={!backEnabled}
              onClick={() => incPage(-1)}
            >
              Previous page
            </Button>
            <Button
              className={styles.paginationButton}
              variant="contained"
              color="primary"
              disabled={!forwardEnabled}
              onClick={() => incPage(1)}
            >
              Next page
            </Button>
          </div>
        </Container>
      )}
      <Paper elevation={8} className={styles.paper}>
        {shownResults
          ? [...shownResults].map((v) => <ResultCard result={v} />)
          : null}
      </Paper>
    </Fragment>
  );
};
export default ResultList;
