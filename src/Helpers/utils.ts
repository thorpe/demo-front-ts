export function formatNumber(src: number | string | undefined) {
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

export function formatSimpleNumber(src: number | string | undefined) {
  return formatNumber(src)
}

const timeout = ms => new Promise(res => setTimeout(res, ms))


export async function delay(ms) {
  await timeout(ms)
}
