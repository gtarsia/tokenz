import test from 'ava'
import dummee from 'dummee'
import createToken from './create-token'
import Token from './token/Token'

test('createToken should work correctly', (t) => {
  const lineNumber = Symbol('lineNumber')
  const columnNumber = Symbol('columnNumber')
  const getLineColumnNumber = dummee(() => ({ lineNumber, columnNumber }))
  const liner = { getLineColumnNumber }
  const pos = Symbol('pos')
  const walker = { pos, liner }
  const tokenType = Symbol('tokenType')
  t.deepEqual(createToken(walker, tokenType),
    new Token(tokenType, { pos, lineNumber, columnNumber }))
  t.deepEqual(getLineColumnNumber.calls, [{ args: [pos] }])
})
