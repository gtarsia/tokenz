import test from 'ava'
import dummee from 'dummee'
import ensureLineColumnNumbers from './ensure-line-column-numbers'

test('ensureLineColumnNumbers should work correctly', (t) => {
  const pos = Symbol('pos')
  const lineNumber = Symbol('lineNumber')
  const columnNumber = Symbol('columnNumber')
  const getLineColumnNumbers = dummee(() => ({ lineNumber, columnNumber }))
  const liner = { getLineColumnNumbers }
  const token = { pos, liner }
  ensureLineColumnNumbers(token)
  t.deepEqual(token._lineNumber, lineNumber)
  t.deepEqual(token._columnNumber, columnNumber)
})
