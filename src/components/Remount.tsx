import { RouteComponentProps } from "@reach/router";
import { Button, Form, Input, Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { createDebug } from "../lib/debug";

const debug = createDebug("remount");

interface Props extends RouteComponentProps {}

export const Remount = (props: Props) => {
  const [form] = useForm();
  const [text, setText] = useState("");
  useEffect(() => {
    debug("Mount");
    return () => {
      debug("Unmount");
    };
  }, []);

  const onFinish = (values: any) => {
    debug("Submitted: %O", values);
    setText(values.testInput);
  };

  const onFinishFailed = (errorInfo: any) => {
    debug("Failed: %O", errorInfo);
  };
  return (
    <div className="content-container">
      <Typography.Title level={3}>Remount</Typography.Title>
      <Typography.Paragraph>
        Test page for finding out what might cause a component to remount
      </Typography.Paragraph>
      <Typography>{text || "not set"}</Typography>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Test Input" name="testInput">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
