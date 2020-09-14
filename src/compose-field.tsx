import React, { FC } from 'react'
import { ComposeFieldProps } from './interface'
import { Row, Col } from 'antd'
import BaseField from './base-field'
import { getKeyByNamePath } from './utils'

const ComposeField: FC<ComposeFieldProps> = ({
  fields,
  type,
  ...restProps
}) => {
  return (
    <Row {...restProps}>
      {fields.map((field, index) => {
        const { colProps, ...restField } = field
        return (
          <Col {...colProps} key={getKeyByNamePath(restField.name || index)}>
            <BaseField {...restField} />
          </Col>
        )
      })}
    </Row>
  )
}

export default ComposeField
