
export default class Token {
  constructor(tokenType, props = {}) {
    Object.assign(this, props)
    this.tokenType = tokenType
  }
}
