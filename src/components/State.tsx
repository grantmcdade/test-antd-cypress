import { RouteComponentProps } from "@reach/router";
import { Button, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store";

interface Props extends RouteComponentProps {}

export const State = (props: Props) => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="content-container">
      <Typography.Title level={3}>State</Typography.Title>
      <Typography.Paragraph>
        Test page for verifying that Flux state works
      </Typography.Paragraph>
      <Typography>{`Current Count: ${count}`}</Typography>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase Count
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease Count
      </Button>
      <Button
        onClick={() => {
          setTimeout(() => {
            dispatch(increment());
          }, 1000);
        }}
      >
        Increase Count Async
      </Button>
    </div>
  );
};
