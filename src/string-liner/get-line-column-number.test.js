import test from 'ava'
import getLineColumnNumber from './get-line-column-number'

test('getLineColumnNumber should work correctly', (t) => {
  const text = 'qwe1asd2zxc3'
  const lineIndexes = [0, 4, 8]
  t.deepEqual(getLineColumnNumber({ lineIndexes, text }, 6), { lineNumber: 2, columnNumber: 3 })
  t.deepEqual(getLineColumnNumber({ lineIndexes, text }, 1), { lineNumber: 1, columnNumber: 2 })
  t.deepEqual(getLineColumnNumber({ lineIndexes, text }, 11), { lineNumber: 3, columnNumber: 4 })
})
