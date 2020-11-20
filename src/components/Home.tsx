import { Typography } from "antd";
import React from "react";

interface Props {
  path?: string;
}

export const Home = (props: Props) => {
  return (
    <div>
      <Typography>Home Page</Typography>
    </div>
  );
};
