import { Alert, notification } from 'antd';
import React, { useEffect } from 'react'

interface Props {
  message: string;
}

export const Error = (props: Props) => {
  const { message } = props;

  useEffect(() => {
    notification.error({
      message,
      description: 'There was an error!'
    })
  }, [message])

  return (
    <Alert type="error" message={message} />
  )
}
