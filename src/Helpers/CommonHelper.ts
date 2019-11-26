import { cloneDeep } from 'lodash'

/**
 * 从url获取参数
 *
 * @export
 * @param {string} name
 * @returns {string}
 */
export function queryURL(name: string): string {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const result = window.location.search.substr(1).match(reg)
  if (result !== null) {
    return decodeURI(result[2])
  }
  return null
}

/**
 * 数组查询
 *
 * @export
 * @template T
 * @param {any[]} array
 * @param {string} key
 * @param {string} [keyAlias='key']
 * @returns {T}
 */
export function queryArray<T>(array: any[], key: string, keyAlias = 'key'): T {
  if (!(array instanceof Array)) {
    return null
  }
  const item = array.filter(a => a[keyAlias] === key)
  if (item.length) {
    return item[0]
  }
  return null
}

/**
 * 数组格式转树状结构
 *
 * @export
 * @template T
 * @param {any[]} array
 * @param {string} [id='id']
 * @param {string} [pid='pid']
 * @param {string} [children='children']
 * @returns {T[]}
 */
export function arrayToTree<T>(array: any[], id = 'id', pid = 'pid', children = 'children'): T[] {
  const data = cloneDeep(array)
  const result = []
  const hash = {}
  data.forEach((_, index) => {
    hash[data[index][id]] = data[index]
  })
  data.forEach(item => {
    const hashVP = hash[item[pid]]
    if (hashVP) {
      if (!hashVP[children]) {
        hashVP[children] = []
      }
      hashVP[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

export function formatNumber(src: number | string | undefined): string {
  const value = String(src || 0)
  const list = value.split('.')
  const prefix = list[0].charAt(0) === '-' ? '-' : ''
  let num = prefix ? list[0].slice(1) : list[0]
  let result = ''
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`
}