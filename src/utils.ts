import { NamePath } from 'antd/lib/form/interface'

export function getKeyByNamePath(namePath: NamePath) {
  if (Array.isArray(namePath)) {
    return namePath.join('.')
  } else {
    return namePath.toString()
  }
}

export function isNil(val: any) {
  return typeof val === 'undefined' || val === null
}
