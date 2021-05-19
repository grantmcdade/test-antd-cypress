import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Typography } from 'antd'
import InputNumber from 'rc-input-number'

interface Props extends RouteComponentProps {
  
}

export const Numbers = (props: Props) => {
  const [value, setValue] = useState(123.49)

  function whatDecimalSeparator() {
    const n = 1.1;
    const separator = n.toLocaleString().substring(1, 2);
    return separator;
}
  return (
    <div className="content-container">
      <Typography.Title level={3}>Numbers</Typography.Title>
      
      <input type="number" name="test1" id="test1" value={value} step="0.01" onChange={(event) => {
        setValue(event.target.valueAsNumber)
      }} />

      <InputNumber value={value} decimalSeparator={whatDecimalSeparator()} />

      <Typography.Title level={4}>{ `Decimal separator is "${whatDecimalSeparator()}"`}</Typography.Title>
    </div>
  )
}
