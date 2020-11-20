import { Typography } from "antd";
import React from "react";

interface Props {
  path?: string;
}

export const Remount = (props: Props) => {
  return (
    <div className="content-container">
      <Typography.Title level={3}>Remount</Typography.Title>
      <Typography.Paragraph>
        Test page for finding out what might
        cause a component to remount
      </Typography.Paragraph>
    </div>
  );
};
