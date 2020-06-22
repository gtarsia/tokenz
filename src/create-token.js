import { stubIfTest } from 'dummee'
import Token from './token/Token'

function createToken(walker, tokenType) {
  const { pos, liner } = walker
  return new Token(tokenType, { pos }, liner)
}

export default stubIfTest(createToken)
