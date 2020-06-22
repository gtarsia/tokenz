import { stubIfTest } from 'dummee'
import Token from './token/Token'

function createToken(walker, tokenType, props = {}) {
  const { pos, liner } = walker
  return new Token(tokenType, { ...props, pos }, liner)
}

export default stubIfTest(createToken)
