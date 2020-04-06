import React, { Fragment, useState, useEffect } from "react";
import { Container, Typography, Badge, Button } from "@material-ui/core";
import { AppState, SearchState, Action, Restaurant } from "../interfaces";
import { resultListStyles } from "./styles";
import ResultCard from "./Result";

interface IProps {
  appState: AppState;
  searchState: SearchState;
  filterResults: () => Action;
  setLoading: (b: boolean) => Action;
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
  setLoading,
}): React.ReactElement => {
  const styles = resultListStyles();
  const [shownResults, setShownResults] = useState<
    ReadonlyArray<Restaurant> | []
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const backEnabled = currentPage - 1 > 0;
  const forwardEnabled = currentPage + 1 < currentQueryPages.size;

  useEffect(() => {
    setShownResults([...currentQueryPages.get(currentPage)]);
  }, [currentQueryResults, currentQueryPages, currentPage]);

  useEffect(() => {
    if (searchFilter && searchFilterType) {
      setCurrentPage(1);
      filterResults();
    }
  }, [searchFilter, searchFilterType]);

  const incPage = (val: number): void => {
    setLoading(true);
    if (currentPage + val > 0 && currentPage + val <= currentQueryPages.size) {
      setCurrentPage(currentPage + val);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Fragment>
      {selectedCity && (
        <Container className={styles.resultTitle}>
          <Badge
            className={styles.badge}
            max={999}
            color="primary"
            badgeContent={currentQueryResults.length || 0}
          >
            <Typography
              className={styles.selectedCity}
              variant="h4"
            >{`${selectedCity}`}</Typography>
          </Badge>
          <div className={styles.buttonContainer}>
            <span className={styles.marginRight}>
              <Button
                className={styles.paginationButton}
                variant="contained"
                color="primary"
                disabled={!backEnabled}
                onClick={() => incPage(-1)}
              >
                Prev
              </Button>
            </span>
            <Button
              className={styles.paginationButton}
              variant="contained"
              color="primary"
              disabled={!forwardEnabled}
              onClick={() => incPage(1)}
            >
              Next
            </Button>
          </div>
        </Container>
      )}
      {shownResults && [...shownResults].map((v) => <ResultCard result={v} />)}
    </Fragment>
  );
};
export default ResultList;
