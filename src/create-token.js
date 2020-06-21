import { stubIfTest } from 'dummee'
import Token from './token/Token'

function createToken(walker, type) {
  const { pos, liner } = walker
  const { lineNumber, columnNumber } = liner.getLineColumnNumber(pos)
  return new Token(type, { pos, lineNumber, columnNumber })
}

export default stubIfTest(createToken)
