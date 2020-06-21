import test from 'ava'
import indexesOfLines from './indexes-of-lines'

test('indexesOfLines should work correctly', (t) => {
  debugger
  t.deepEqual(indexesOfLines('\nqwe\n'), [0, 1])
  t.deepEqual(indexesOfLines('\nqwe'), [0, 1])
  t.deepEqual(
    indexesOfLines('\r\n \n\r\nqwe\n'),
    [0, 2, 4, 6],
  )
})
