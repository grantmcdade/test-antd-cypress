import React from "react";
import { Router } from "@reach/router";
import { Home } from "./components/Home";

let Dash = (props: any) => <div>Dash</div>;

interface Props {}

export const Routes = (props: Props) => {
  return (
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  );
};
