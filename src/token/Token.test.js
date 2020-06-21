import test from 'ava'
import Token from './Token'

test('Token should be initialized correctly', (t) => {
  const tokenType = Symbol('tokenType')
  const prop = Symbol('prop')
  const token = new Token(tokenType, { prop })
  t.deepEqual(token.tokenType, tokenType)
  t.deepEqual(token.prop, prop)
})
