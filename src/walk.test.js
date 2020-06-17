import test from 'ava'
import dummee from 'dummee'
import walk from './walk'

test('walk should reset pos if none work properly', (t) => {
  const pos = Symbol('pos')
  const walker = { pos }
  const givesNull = dummee(() => {
    walker.pos = Symbol('toBeResetPos')
    return null
  })
  t.deepEqual(walk(walker, [givesNull]), null)
  t.deepEqual(givesNull.calls, [{ args: [walker] }])
  t.deepEqual(walker.pos, pos)
})

test('walk should give exit on first that returns valid value', (t) => {
  const pos = Symbol('pos')
  const walker = { pos }
  const newPos = Symbol('newPos')
  const result = Symbol('result')
  const givesValid = dummee(() => {
    walker.pos = newPos
    return result
  })
  const givesNull = dummee(() => {
    walker.pos = Symbol('toBeResetPos')
    return null
  })
  t.deepEqual(walk(walker, [givesValid, givesNull]), result)
  t.deepEqual(givesValid.calls, [{ args: [walker] }])
  t.deepEqual(givesNull.calls, [])
  t.deepEqual(walker.pos, newPos)
})
