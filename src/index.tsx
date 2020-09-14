import React, { FC, ComponentType } from 'react'
import { FormProps } from 'antd/lib/form'
import { Form } from 'antd'
import { FieldItem, InternalType } from './interface'
import ComposeField from './compose-field'
import BaseField from './base-field'
import ListField from './list-field'
import { registerFieldType } from './components'
import { getKeyByNamePath } from './utils'

export interface SchemaFormProps extends FormProps {
  fieldItems: FieldItem[]
}

export interface SchemaFormType extends FC<SchemaFormProps> {
  registerFieldType: (type: string, cmp: ComponentType) => void
  Compose: InternalType.Compose
  List: InternalType.List
}

const SchemaForm: SchemaFormType = ({ fieldItems = [], ...restProps }) => {
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

SchemaForm.registerFieldType = registerFieldType
SchemaForm.Compose = InternalType.Compose
SchemaForm.List = InternalType.List

export default SchemaForm
