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
    marginBottom: "4rem",
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
    marginBottom: "3rem",
  },
  disabled: {
    opacity: 0.5,
  },
  formControl: {
    width: "75%",
    flexDirection: "row",
    display: "flex",
    marginBottom: "1rem",
  },
  input: {
    marginBottom: "2rem",
    width: "100%",
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
  },
  aligned: {
    display: "flex",
    width: "45%",
    marginRight: "2rem",
  },
  cityList: {
    marginBottom: "2rem",
  },
  cityButton: {
    margin: "1rem",
  },
  radioGroup: {
    transform: "translateX(0.5rem)",
  },
}));

export const resultListStyles = makeStyles(({ palette }) => ({
  paper: {
    height: "120vh",
    marginTop: "4rem",
    padding: "3rem",
    marginBottom: "4rem",
    justifyContent: "flex",
    flexWrap: "wrap",
  },
  selectedCity: {
    color: "#525252 !important",
  },
  resultTitle: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
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
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "1.5rem",
    display: "flex",
  },
  info: {
    display: "flex",
  },
  avatar: {
    transform: "translateY(1rem)",
    marginRight: "1rem",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  caption: {
    display: "flex",
    paddingTop: "0.25rem",
  },
  action: {
    paddingTop: "1rem",
    marginRight: "1rem",
  },
}));
