import { FormItemProps } from 'antd/lib/form'
import { RowProps } from 'antd/lib/row'
import { ColProps } from 'antd/lib/col'
import { ReactElement, ComponentType } from 'react'
import { ButtonProps } from 'antd/lib/button'
import {
  FormListProps,
  FormListOperation,
  FormListFieldData,
} from 'antd/lib/form/FormList'

export enum InternalType {
  Compose,
  List,
}

export interface BaseFieldProps extends FormItemProps {
  type: string | ComponentType
  inputProps?: Record<string, any>
}

export interface ComposeFieldItem extends BaseFieldProps {
  colProps?: ColProps
}

export interface ComposeFieldProps extends RowProps {
  type: InternalType.Compose
  fields: ComposeFieldItem[]
}

export interface ListFieldProps extends Omit<FormListProps, 'children'> {
  type: InternalType.List
  field: BaseFieldProps | ComposeFieldProps
  label?: string
  addable?: boolean
  moveable?: boolean
  removable?: boolean
  defaultValue?: (fields: FormListFieldData[]) => any | any
  addRender?: (add: FormListOperation['add']) => ReactElement
  addButtonProps?: ButtonProps
  moveButtonProps?: ButtonProps
  removeButtonProps?: ButtonProps
}

export type FieldItem = BaseFieldProps | ComposeFieldProps | ListFieldProps

export interface FormComponentMap {
  [type: string]: any
}

export interface ListChildrenFieldProps {
  operations: FormListOperation
  index: number
  isListField: boolean
}
