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
  const type = Symbol('type')
  t.deepEqual(createToken(walker, type), new Token(type, { pos, lineNumber, columnNumber }))
  t.deepEqual(getLineColumnNumber.calls, [{ args: [pos] }])
})
