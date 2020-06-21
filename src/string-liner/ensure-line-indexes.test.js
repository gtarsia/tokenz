import test from 'ava'
import ensureLineIndexes from './ensure-line-indexes'
import indexesOfLines from '../string/indexes-of-lines'

test('ensureLineIndexes should work correctly', (t) => {
  const text = Symbol('text')
  const liner = { text }
  const lineIndexes = Symbol('lineIndexes')
  indexesOfLines.cb = () => lineIndexes
  ensureLineIndexes(liner)
  t.deepEqual(liner.lineIndexes, lineIndexes)
  t.deepEqual(indexesOfLines.calls.shift(), { args: [text] })
  t.deepEqual(indexesOfLines.calls, [])

  ensureLineIndexes(liner)
  t.deepEqual(liner.lineIndexes, lineIndexes)
  t.deepEqual(indexesOfLines.calls, [])
})
