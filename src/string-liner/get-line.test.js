import test from 'ava'
import getLine from './get-line'

test('getLine should fail when trying to obtain line invalid lines', (t) => {
  t.deepEqual(t.throws(() => getLine({}, 0)).message,
    'getLine arg was 0 but should a positive safe integer')
  t.deepEqual(t.throws(() => getLine({}, 3.2)).message,
    'getLine arg was 3.2 but should a positive safe integer')
})

test('getLine should fail when trying to obtain line higher than line count', (t) => {
  const lineIndexes = [0]
  t.deepEqual(t.throws(() => getLine({ lineIndexes }, 2)).message,
    'getLine arg was 2 but shouldn\'t more than number of lines which is 1)')
})

test('getLine should work correctly', (t) => {
  const text = 'qweasdzxc'
  const lineIndexes = [0, 3, 4]
  t.deepEqual(getLine({ text, lineIndexes }, 1), 'qwe')
  t.deepEqual(getLine({ text, lineIndexes }, 2), 'a')
  t.deepEqual(getLine({ text, lineIndexes }, 3), 'sdzxc')
})
