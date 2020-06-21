
export default class Token {
  constructor(tokenType, args = {}) {
    Object.assign(this, args)
    this.tokenType = tokenType
  }
}
