import React, { FC, ComponentType } from 'react'
import { FormProps } from 'antd/lib/form'
import { Form } from 'antd'
import { FieldItem, InternalType } from './interface'
import ComposeField from './compose-field'
import BaseField from './base-field'
import ListField from './list-field'
import { registerFieldType } from './components'
import { getKeyByNamePath } from './utils'

export interface SchemeFormProps extends FormProps {
  fieldItems: FieldItem[]
}

export interface SchemeFormType extends FC<SchemeFormProps> {
  registerFieldType: (type: string, cmp: ComponentType) => void
  Compose: InternalType.Compose
  List: InternalType.List
}

const SchemeForm: SchemeFormType = ({ fieldItems = [], ...restProps }) => {
  return (
    <Form {...restProps}>
      {fieldItems.map((item, index) => {
        if (item.type === InternalType.Compose) {
          return <ComposeField key={index} {...item} />
        } else if (item.type === InternalType.List) {
          return <ListField key={index} {...item} />
        } else {
          return (
            <BaseField key={getKeyByNamePath(item.name || index)} {...item} />
          )
        }
      })}
    </Form>
  )
}

SchemeForm.registerFieldType = registerFieldType
SchemeForm.Compose = InternalType.Compose
SchemeForm.List = InternalType.List

export default SchemeForm
