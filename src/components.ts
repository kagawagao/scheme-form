import {
  Input,
  Select,
  Radio,
  Checkbox,
  InputNumber,
  Switch,
  Button,
} from 'antd'
import { FormComponentMap } from './interface'
import { ComponentType } from 'react'

const components: FormComponentMap = {
  Input,
  TextArea: Input.TextArea,
  Select,
  Radio,
  RadioGroup: Radio.Group,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Switch,
  InputNumber,
  Button,
}

export function registerFieldType(type: string, Cmp: ComponentType) {
  components[type] = Cmp
}

export default components
