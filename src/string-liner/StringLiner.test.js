import test from 'ava'
import StringLiner from './StringLiner'
import ensureLineIndexes from './ensure-line-indexes'
import getLine from './get-line'
import getLineColumnNumber from './get-line-column-number'

test('String liner should call getLine properly', (t) => {
  ensureLineIndexes.cb = () => {} // don't actually call it
  getLine.cb = () => {} // don't actually call it
  const liner = new StringLiner()
  const i = Symbol('i')
  liner.getLine(i)
  t.deepEqual(ensureLineIndexes.calls.shift(), { args: [liner] })
  t.deepEqual(ensureLineIndexes.calls, [])
  t.deepEqual(getLine.calls.shift(), { args: [liner, i] })
  t.deepEqual(getLine.calls, [])
})

test('String liner should call getLineColumnNumber properly', (t) => {
  ensureLineIndexes.cb = () => {} // don't actually call it
  getLineColumnNumber.cb = () => {} // don't actually call it
  const liner = new StringLiner()
  const index = Symbol('index')
  liner.getLineColumnNumber(index)
  t.deepEqual(ensureLineIndexes.calls.shift(), { args: [liner] })
  t.deepEqual(ensureLineIndexes.calls, [])
  t.deepEqual(getLineColumnNumber.calls.shift(), { args: [liner, index] })
  t.deepEqual(getLineColumnNumber.calls, [])
})
