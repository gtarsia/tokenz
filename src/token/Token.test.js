import test from 'ava'
import Token from './Token'
import ensureLineColumnNumbers from './ensure-line-column-numbers'

test('Token should be initialized correctly', (t) => {
  const tokenType = Symbol('tokenType')
  const prop = Symbol('prop')
  const liner = Symbol('liner')
  const token = new Token(tokenType, { prop }, liner)
  t.deepEqual(token.tokenType, tokenType)
  t.deepEqual(token.prop, prop)
  t.deepEqual(token.liner, liner)
})

test('Token columnNumber should call ensureLineColumnNumbers correctly', (t) => {
  const _lineNumber = Symbol('_lineNumber')
  const _columnNumber = Symbol('_columnNumber')
  const token = new Token(null, { _lineNumber, _columnNumber })
  t.deepEqual(token.lineNumber, _lineNumber)
  t.deepEqual(ensureLineColumnNumbers.calls.shift(), { args: [token] })
  t.deepEqual(ensureLineColumnNumbers.calls, [])

  t.deepEqual(token.columnNumber, _columnNumber)
  t.deepEqual(ensureLineColumnNumbers.calls.shift(), { args: [token] })
  t.deepEqual(ensureLineColumnNumbers.calls, [])
})
