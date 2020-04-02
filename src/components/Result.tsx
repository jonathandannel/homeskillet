import React, { useEffect, ReactElement } from "react";
import { Container, Paper, Card } from "@material-ui/core";
import { AppState } from "../interfaces";
import { resultCardStyles } from "./styles";

const ResultCard: React.FC = (): ReactElement => {
  const styles = resultCardStyles();
  return <Card className={styles.main}>asdasdasd</Card>;
};
export default ResultCard;
