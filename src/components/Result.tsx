import React, { ReactElement } from "react";
import {
  Container,
  IconButton,
  Card,
  Avatar,
  Typography,
} from "@material-ui/core";
import { EventAvailable, Call } from "@material-ui/icons";
import { Restaurant } from "../interfaces";
import { resultCardStyles } from "./styles";

interface IProps {
  result: Restaurant;
}

const ResultCard: React.FC<IProps> = ({ result }): ReactElement => {
  const styles = resultCardStyles();
  const makeReservation = () => window.open(result.reserve_url, "_blank");
  const makeCall = () => window.open(`tel:${result.phone}`, "_blank");
  return result ? (
    <Card className={styles.main}>
      <Avatar className={styles.avatar} src={result.image_url} />
      <Container className={styles.content}>
        <Container>
          <Typography variant="h6">{result.name}</Typography>
          <Typography variant="body2">{result.address}</Typography>
          <Typography variant="body2">{result.area}</Typography>
        </Container>
        <div className={styles.actionContainer}>
          <div className={styles.action}>
            <IconButton onClick={makeCall} color="primary">
              <Call />
            </IconButton>
          </div>
          <div className={styles.action}>
            <IconButton onClick={makeReservation} color="primary">
              <EventAvailable />
            </IconButton>
          </div>
        </div>
      </Container>
    </Card>
  ) : null;
};
export default ResultCard;
