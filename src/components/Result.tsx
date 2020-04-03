import React, { useEffect, ReactElement } from "react";
import { Container, Paper, Card } from "@material-ui/core";
import { AppState, Restaurant } from "../interfaces";
import { resultCardStyles } from "./styles";

interface IProps {
  result: Restaurant;
}

const ResultCard: React.FC<IProps> = ({ result }): ReactElement => {
  const styles = resultCardStyles();
  return <Card className={styles.main}>{result.name}</Card>;
};
export default ResultCard;
