import { stubIfTest } from 'dummee'

function getLineColumnNumber(liner, index) {
  const { lineIndexes } = liner
  const j = lineIndexes.findIndex(i => i > index)
  const lineNumber = j === -1 ? lineIndexes.length : j
  const columnNumber = index - lineIndexes[lineNumber - 1] + 1
  return { lineNumber, columnNumber }
}

export default stubIfTest(getLineColumnNumber)
