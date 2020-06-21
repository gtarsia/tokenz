import StringLiner from './string-liner/StringLiner'
import peek from './peek'
import read from './read'
import skip from './skip'
import readUntil from './read-until'
import skipUntil from './skip-until'
import match from './match'
import skipUntilNot from './skip-until-not'
import indexOfMany from './string/index-of-many'
import indexOfManyNot from './string/index-of-many-not'
import walk from './walk'
import createToken from './create-token'

export default class TextWalker {
  constructor(text) {
    this.pos = 0
    this.text = text
    this.liner = new StringLiner(text)
  }

  isEnd() {
    return this.pos >= this.text.length
  }

  peek(i, count) {
    return peek(this, i, count)
  }

  read(count) {
    return read(this, count)
  }

  readUntil(strs) {
    return readUntil(this, strs)
  }

  skip(i) {
    return skip(this, i)
  }

  skipUntil(strs) {
    return skipUntil(this, strs)
  }

  skipUntilNot(strs) {
    return skipUntilNot(this, strs)
  }

  match(strs, i) {
    return match(this, strs, i)
  }

  nextIndexOf(strs) {
    return indexOfMany(this.text, strs, this.pos) - this.pos
  }

  nextIndexOfNot(strs) {
    return indexOfManyNot(this.text, strs, this.pos) - this.pos
  }

  walk(fns) {
    return walk(this, fns)
  }

  createToken(tokenType) {
    return createToken(this, tokenType)
  }
}
