import { stubIfTest } from 'dummee'

function betterIndexOf(s, char, i = 0) {
  const val = s.indexOf(char, i)
  return val === -1 ? Infinity : val
}

function indexesOfLines(str) {
  const indexes = [0]
  let i = 0
  // the current index for windows newline and posix newline
  let winIndex = 0
  let posixIndex = 0
  while (i < str.length) {
    winIndex = betterIndexOf(str, '\r\n', i)
    posixIndex = betterIndexOf(str, '\n', i)
    i = Math.min(winIndex, posixIndex)
    if (i !== Infinity) {
      i += str[i] === '\r' ? 2 : 1
      if (i < str.length) {
        indexes.push(i)
      }
    } else {
      i = str.length
    }
  }
  return indexes
}

export default stubIfTest(indexesOfLines)
