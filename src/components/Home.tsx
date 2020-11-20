import { Typography } from "antd";
import React from "react";

interface Props {
  path?: string;
}

export const Home = (props: Props) => {
  return (
    <div className="content-container">
      <Typography.Title level={3}>Home Page</Typography.Title>
      <Typography.Paragraph>
        A simple react test framework
      </Typography.Paragraph>
    </div>
  );
};
