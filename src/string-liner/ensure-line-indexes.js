import { stubIfTest } from 'dummee'
import indexesOfLines from '../string/indexes-of-lines'

function ensureLineIndexes(liner) {
  const { text } = liner
  if (!liner.lineIndexes) {
    liner.lineIndexes = indexesOfLines(text)
  }
}

export default stubIfTest(ensureLineIndexes)
