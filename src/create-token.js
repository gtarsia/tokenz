import { stubIfTest } from 'dummee'
import Token from './token/Token'

function createToken(walker, tokenType) {
  const { pos, liner } = walker
  const { lineNumber, columnNumber } = liner.getLineColumnNumber(pos)
  return new Token(tokenType, { pos, lineNumber, columnNumber })
}

export default stubIfTest(createToken)
