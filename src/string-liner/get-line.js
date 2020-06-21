import { stubIfTest } from 'dummee'

function getLine(liner, i = 1) {
  if (i < 1 || !Number.isSafeInteger(i)) {
    throw new Error(`getLine arg was ${i} but should a positive safe integer`)
  }
  const { lineIndexes, text } = liner
  const lineCount = lineIndexes.length
  if (i > lineCount) {
    throw new Error(
      `getLine arg was ${i} but shouldn't more than number of lines which is ${lineCount})`,
    )
  }
  const start = lineIndexes[i - 1]
  const end = lineIndexes[i] || text.length
  return text.slice(start, end)
}

export default stubIfTest(getLine)
