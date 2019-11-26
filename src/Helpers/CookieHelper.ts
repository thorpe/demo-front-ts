/**
 * setCookie
 *
 * @export
 * @param {string} name
 * @param {string} value
 * @param {number} [expireDays=365]
 */
export function setCookie(name: string, value: string, expireDays = 365): void {
  const exDate = new Date()
  exDate.setDate(exDate.getDate() + expireDays)
  document.cookie = `${name}=${escape(value)};expires=${exDate.toUTCString()}`
}

/**
 * getCookie
 *
 * @export
 * @param {string} name
 * @returns
 */
export function getCookie(name: string): string {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(name + '=')
    if (cStart !== -1) {
      cStart = cStart + name.length + 1
      let cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) {
        cEnd = document.cookie.length
      }
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}

/**
 * clearCookie
 *
 * @export
 * @param {string} name
 */
export function clearCookie(name: string): void {
  setCookie(name, '')
}