import { RouteComponentProps } from "@reach/router";
import { Button, Typography } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync } from "../counterSlice";
import type { RootState } from "../rootReducer";
import { Error } from "./Error";

interface Props extends RouteComponentProps {}

export const State = (props: Props) => {
  const items: Record<string, string> = {};
  const count = useSelector((state: RootState) => state.counter.count);
  const loading = useSelector((state: RootState) => state.counter.loading);
  const error = useSelector((state: RootState) => state.counter.error);
  const dispatch = useDispatch();

  const inc = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);
  const dec = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);
  const incAsync = useCallback(() => {
    dispatch(incrementAsync());
  }, [dispatch]);

  items["one"] = "test";

  return (
    <div className="content-container">
      {error && <Error message={error} />}
      <Typography.Title level={3}>State</Typography.Title>
      <Typography.Paragraph>
        Test page for verifying that Flux state works
      </Typography.Paragraph>
      <Typography>{`Current Count: ${count}`}</Typography>
      <Button onClick={inc}>Increase Count</Button>
      <Button onClick={dec}>Decrease Count</Button>
      <Button onClick={incAsync} loading={loading}>
        Increase Count Async
      </Button>
    </div>
  );
};
