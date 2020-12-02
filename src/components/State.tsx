import { RouteComponentProps } from "@reach/router";
import { Button, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync } from "../counterSlice";
import type { RootState } from "../rootReducer";
import { Error } from "./Error";

interface Props extends RouteComponentProps {}

export const State = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.count);
  const loading = useSelector((state: RootState) => state.counter.loading);
  const error = useSelector((state: RootState) => state.counter.error);
  const dispatch = useDispatch();

  return (
    <div className="content-container">
      {error && <Error message={error} />}
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
          dispatch(incrementAsync());
        }}
        loading={loading}
      >
        Increase Count Async
      </Button>
    </div>
  );
};
