import React, { useCallback } from 'react'
import SchemaForm, { SchemaFormProps } from '@opd/schema-form'
import { DatePicker, Form } from 'antd'

SchemaForm.registerFieldType('DatePicker', DatePicker)

const fieldItems: SchemaFormProps['fieldItems'] = [
  {
    type: 'Input',
    name: 'username',
    label: '用户名',
    rules: [
      {
        required: true,
      },
    ],
  },
  {
    type: 'InputNumber',
    name: 'age',
    label: '年龄',
  },
  {
    type: 'Select',
    name: 'gender',
    label: '性别',
    inputProps: {
      options: [
        {
          value: 1,
          label: '男',
        },
        {
          value: 2,
          label: '女',
        },
      ],
      style: {
        width: 88,
      },
    },
  },
  {
    type: 'RadioGroup',
    name: 'married',
    label: '婚否',
    inputProps: {
      options: [
        {
          value: 0,
          label: '否',
        },
        {
          value: 1,
          label: '是',
        },
      ],
    },
  },
  {
    type: 'DatePicker',
    name: 'birthday',
    label: '生日',
    inputProps: {
      placeholder: '选择生日',
    },
  },
  {
    type: DatePicker.RangePicker,
    name: 'rangeDate',
    label: '组件形式',
    inputProps: {
      showTime: true,
    },
  },
  {
    type: SchemaForm.Compose,
    fields: [
      {
        type: 'Input',
        label: '字段1',
        name: 'field1',
        labelCol: {
          span: 12,
        },
        rules: [
          {
            required: true,
          },
        ],
        colProps: {
          style: {
            flex: 1,
          },
        },
      },
      {
        type: 'Input',
        label: '字段2',
        name: 'field2',
        labelCol: {
          span: 12,
        },
        colProps: {
          style: {
            flex: 1,
          },
        },
      },
      {
        type: 'Input',
        label: '字段3',
        name: 'field3',
        labelCol: {
          span: 12,
        },
        colProps: {
          style: {
            flex: 1,
          },
        },
      },
    ],
  },
  {
    type: SchemaForm.List,
    name: 'familyMembers',
    label: '家人',
    field: {
      type: SchemaForm.Compose,
      fields: [
        {
          type: 'Input',
          name: 'firstName',
          rules: [
            {
              required: true,
            },
          ],
          colProps: {
            style: {
              flex: 1,
            },
          },
          label: 'FirstName',
          inputProps: {
            placeholder: 'First Name',
          },
        },
        {
          type: 'Input',
          name: 'lastName',
          colProps: {
            style: {
              flex: 1,
            },
          },
          label: 'LastName',
          inputProps: {
            placeholder: 'Last Name',
          },
        },
      ],
      gutter: 24,
    },
    addButtonProps: {
      type: 'primary',
    },
  },
  {
    type: SchemaForm.List,
    name: 'items',
    label: '列表',
    moveable: false,
    defaultValue: () => Math.ceil(Math.random() * 1000),
    field: {
      type: 'Input',
    },
  },
  {
    type: SchemaForm.Compose,
    fields: [
      {
        type: 'Button',
        inputProps: {
          children: '提交',
          htmlType: 'submit',
          type: 'primary',
        },
        colProps: {
          offset: 4,
        },
      },
      {
        type: 'Button',
        inputProps: {
          children: '重置',
          htmlType: 'reset',
          style: {
            marginLeft: 20,
          },
        },
      },
    ],
  },
]

export default () => {
  const [form] = Form.useForm()
  const handleSubmit = useCallback((data) => {
    console.log(data)
  }, [])

  const handleReset = useCallback(() => {
    form.resetFields()
  }, [form])

  return (
    <SchemaForm
      form={form}
      style={{ maxWidth: 800 }}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      fieldItems={fieldItems}
      onFinish={handleSubmit}
      onReset={handleReset}
      initialValues={{
        familyMembers: [
          {
            firstName: 'John',
            lastName: 'Tom',
          },
        ],
        items: ['A'],
      }}
    />
  )
}
