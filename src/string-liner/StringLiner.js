import ensureLineIndexes from './ensure-line-indexes'
import getLine from './get-line'
import getLineColumnNumber from './get-line-column-number'

export default class StringLiner {
  constructor(text) {
    this.text = text
  }

  getLine(i) {
    ensureLineIndexes(this)
    return getLine(this, i)
  }

  getLineColumnNumber(index) {
    ensureLineIndexes(this)
    return getLineColumnNumber(this, index)
  }
}
