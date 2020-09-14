import React, { FC, useCallback } from 'react'
import { ListFieldProps, InternalType } from './interface'
import { Form, Button, Row, Col, Space } from 'antd'
import BaseField from './base-field'
import { isNil } from './utils'
import { NamePath } from 'antd/lib/form/interface'
import ComposeField from './compose-field'
import { FormListOperation } from 'antd/lib/form/FormList'
import {
  MinusOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons'
import { ButtonProps } from 'antd/lib/button'

interface ListFieldInnerProps {
  operations: FormListOperation
  index: number
  removable: boolean
  moveable: boolean
  isLast?: boolean
  moveButtonProps?: ButtonProps
  removeButtonProps?: ButtonProps
}

const ListFieldInner: FC<ListFieldInnerProps> = ({
  operations,
  index,
  moveable,
  removable,
  children,
  moveButtonProps,
  removeButtonProps,
  isLast = false,
}) => {
  const handleRemove = useCallback(() => {
    operations.remove(index)
  }, [operations, index])

  const handleMoveUp = useCallback(() => {
    operations.move(index, index - 1)
  }, [operations, index])

  const handleMoveDown = useCallback(() => {
    operations.move(index, index + 1)
  }, [operations, index])
  return (
    <Row gutter={12} style={{ alignItems: 'baseline' }}>
      <Col style={{ flex: 1 }} key="field">
        {children}
      </Col>
      {removable || moveable ? (
        <Col style={{ width: 100 }} key="operations">
          <Space size="small">
            {removable ? (
              <Button
                size="small"
                type="link"
                onClick={handleRemove}
                title="移除"
                icon={<MinusOutlined />}
                {...removeButtonProps}
              />
            ) : null}
            {index > 0 && moveable ? (
              <Button
                size="small"
                type="link"
                onClick={handleMoveUp}
                title="上移"
                icon={<ArrowUpOutlined />}
                {...moveButtonProps}
              />
            ) : null}
            {!isLast && moveable ? (
              <Button
                size="small"
                type="link"
                onClick={handleMoveDown}
                title="下移"
                icon={<ArrowDownOutlined />}
                {...moveButtonProps}
              />
            ) : null}
          </Space>
        </Col>
      ) : null}
    </Row>
  )
}

const ListField: FC<ListFieldProps> = ({
  field,
  type,
  label,
  addable = true,
  moveable = true,
  removable = true,
  addRender,
  defaultValue,
  addButtonProps,
  moveButtonProps,
  removeButtonProps,
  ...restProps
}) => {
  const fieldRender = useCallback(
    ({ listField, operations, index, fields }) => {
      if (field.type === InternalType.Compose) {
        return (
          <ListFieldInner
            key={listField.key}
            operations={operations}
            index={index}
            moveable={moveable}
            removable={removable}
            isLast={index === fields.length - 1}
            moveButtonProps={moveButtonProps}
            removeButtonProps={removeButtonProps}
          >
            <ComposeField
              {...field}
              fields={field.fields.map((item) => {
                const name = [listField.name, item.name].filter(
                  (name) => !isNil(name)
                ) as NamePath
                return {
                  ...item,
                  name,
                }
              })}
            />
          </ListFieldInner>
        )
      } else {
        const name = [listField.name, field.name].filter(
          (name) => !isNil(name)
        ) as NamePath
        return (
          <ListFieldInner
            key={listField.key}
            operations={operations}
            index={index}
            moveable={moveable}
            removable={removable}
            isLast={index === fields.length - 1}
            moveButtonProps={moveButtonProps}
            removeButtonProps={removeButtonProps}
          >
            <BaseField
              {...listField}
              {...field}
              name={name}
              label={undefined}
            />
          </ListFieldInner>
        )
      }
    },
    [field, moveable, removable, moveButtonProps, removeButtonProps]
  )

  return (
    <Form.Item label={label}>
      <Form.List {...restProps}>
        {(fields, operations) => {
          const handleAdd = () => {
            if (typeof defaultValue === 'function') {
              operations.add(defaultValue(fields))
            } else {
              operations.add(defaultValue)
            }
          }
          return (
            <div>
              {fields.map((listField, index) =>
                fieldRender({
                  listField,
                  operations,
                  fields,
                  index,
                })
              )}
              {addable ? (
                addRender ? (
                  addRender(operations.add)
                ) : (
                  <Button
                    block
                    type="dashed"
                    children="新增"
                    {...addButtonProps}
                    onClick={handleAdd}
                  />
                )
              ) : null}
            </div>
          )
        }}
      </Form.List>
    </Form.Item>
  )
}

export default ListField
