import { makeStyles } from "@material-ui/core";

export const navbarStyles = makeStyles(({ palette }) => ({
  main: {
    height: "8vh",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    display: "flex",
    background: "white",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  text: {
    letterSpacing: "0.02rem",
    fontSize: "1.7rem",
  },
  navbarContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  location: {
    display: "flex",
    paddingTop: "0.1rem",
  },
  locationIcon: {
    marginRight: "1rem",
    paddingTop: "0.25rem",
  },
  locationText: {
    color: "#525252",
    paddingTop: "0.5rem",
  },
}));

export const appStyles = makeStyles(({ palette }) => ({
  introText: {
    color: "#525252",
    marginBottom: "3rem",
    paddingLeft: "0.25rem",
  },
}));
export const loadingStyles = makeStyles(({ palette }) => ({
  main: {
    marginBottom: "5vh",
  },
  hidden: {
    visibility: "hidden",
  },
}));

export const searchStyles = makeStyles(({ palette }) => ({
  main: {
    display: "flex",
    width: "100%",
    paddingLeft: "1px",
  },
  disabled: {
    opacity: 0.5,
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    marginBottom: "2rem",
    width: "25vw",
    "& > .Mui-disabled": {
      opacity: 0.6,
    },
  },
  iconCity: {
    color: palette.primary.main,
    paddingTop: "0.8rem",
    fontSize: "1.5rem",
    marginRight: "1rem",
  },
  iconRefine: {
    color: palette.primary.main,
    paddingTop: "1rem",
    fontSize: "1.5rem",
    marginRight: "1rem",
  },
  flex: {
    display: "flex",
    marginRight: "3rem",
  },
  cityList: {
    marginBottom: "2rem",
  },
  cityButton: {
    margin: "1rem",
  },
}));

export const resultListStyles = makeStyles(({ palette }) => ({
  paper: {
    height: "50vw",
    marginTop: "2rem",
    padding: "3rem",
    marginBottom: "2rem",
    justifyContent: "flex",
    flexWrap: "wrap",
  },
  selectedCity: {
    color: "#525252 !important",
  },
  resultTitle: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  paginationButton: {
    marginRight: "1rem",
  },
  badge: {
    "& > .MuiBadge-badge": {
      transform: "scale(1) translate(120%, -20%)",
    },
  },
}));

export const resultCardStyles = makeStyles(() => ({
  main: {
    margin: "2rem",
    padding: "1rem",
  },
}));
