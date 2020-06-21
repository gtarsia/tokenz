
export default class Token {
  constructor(type, args) {
    Object.assign(this, args)
    this.type = type
  }
}
