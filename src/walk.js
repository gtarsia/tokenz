import { stubIfTest } from 'dummee'

function walk(walker, fns) {
  let token = null
  const { pos } = walker
  fns.some((fn) => {
    token = fn(walker)
    const tokenIsValid = token !== null && token !== undefined
    if (!tokenIsValid) {
      walker.pos = pos
    }
    return tokenIsValid
  })
  return token
}

export default stubIfTest(walk)
