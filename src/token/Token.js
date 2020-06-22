import ensureLineColumnNumbers from './ensure-line-column-numbers'

export default class Token {
  constructor(tokenType, props = {}, liner) {
    Object.assign(this, props)
    this.tokenType = tokenType
    this.liner = liner
  }

  get lineNumber() {
    ensureLineColumnNumbers(this)
    return this._lineNumber
  }

  get columnNumber() {
    ensureLineColumnNumbers(this)
    return this._columnNumber
  }
}
