import React from "react";
import { Router } from "@reach/router";
import { Home } from "./components/Home";
import { Remount } from './components/Remount';

interface Props {}

export const Routes = (props: Props) => {
  return (
    <Router>
      <Home path="/" />
      <Remount path="remount" />
    </Router>
  );
};
