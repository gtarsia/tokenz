import { stubIfTest } from 'dummee'

function ensureLineColumnNumbers(token) {
  const { _lineNumber, liner, pos } = token
  if (!_lineNumber && liner) {
    const { lineNumber, columnNumber } = liner.getLineColumnNumbers(pos)
    token._lineNumber = lineNumber
    token._columnNumber = columnNumber
  }
}

export default stubIfTest(ensureLineColumnNumbers)
