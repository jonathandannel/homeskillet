import { makeStyles } from "@material-ui/core";

export const navbarStyles = makeStyles(({ palette }) => ({
  main: {
    height: "8vh",
    paddingLeft: "1rem",
    display: "flex",
    background: "white",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  text: {
    letterSpacing: "0.02rem",
    fontSize: "1.7rem"
  }
}));

export const loadingStyles = makeStyles(({ palette }) => ({
  main: {
    marginBottom: "5vh"
  },
  hidden: {
    visibility: "hidden"
  }
}));

export const searchStyles = makeStyles(({ palette }) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem"
  },
  formControl: {
    width: "75%"
  },
  input: {
    marginBottom: "2rem"
  }
}));

export const resultStyles = makeStyles(() => ({
  main: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid lightgrey",
    height: "40vh",
    borderRadius: "5px"
  },
  formControl: {
    width: "50%"
  },
  input: {
    marginBottom: "1rem"
  }
}));
