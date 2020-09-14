import React, { FC, useMemo } from 'react'
import { BaseFieldProps } from './interface'
import components from './components'
import { Form } from 'antd'

const BaseField: FC<BaseFieldProps> = ({ type, inputProps, ...restProps }) => {
  const FormInput = useMemo(
    () => (typeof type === 'string' ? components[type] : type),
    [type]
  )

  return (
    <Form.Item
      children={FormInput ? <FormInput {...inputProps} /> : null}
      {...restProps}
    />
  )
}
export default BaseField
