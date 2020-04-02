import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "./interfaces";
import { RootState } from "./reducers";

const mapStateToProps = (state: RootState) => ({
  appState: state.app
});

const connector = connect(mapStateToProps, null);

type ConnProps = ConnectedProps<typeof connector>;

interface IProps {
  appState: AppState;
}

function App({ appState }: IProps & ConnProps) {
  useEffect(() => {
    console.log(appState);
  }, [appState]);
  return <div></div>;
}
export default connector(App);
