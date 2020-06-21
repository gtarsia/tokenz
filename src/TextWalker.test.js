import test from 'ava'
import TextWalker from './TextWalker'
import peek from './peek'
import read from './read'
import skip from './skip'
import readUntil from './read-until'
import skipUntil from './skip-until'
import skipUntilNot from './skip-until-not'
import match from './match'
import indexOfMany from './string/index-of-many'
import indexOfManyNot from './string/index-of-many-not'
import walk from './walk'
import createToken from './create-token'

function inst() {
  return new TextWalker('')
}

test('TextWalker.call should be called correctly', (t) => {
  const peekResult = Symbol('peekResult')
  peek.cb = () => peekResult // don't call it
  const i = Symbol('i')
  const count = Symbol('count')
  const w = inst()
  t.deepEqual(w.peek(i, count), peekResult)
  t.deepEqual(peek.calls.shift(), { args: [w, i, count] })
})

test('TextWalker.read should be called correctly', (t) => {
  const nextResult = Symbol('nextResult')
  read.cb = () => nextResult // don't call it
  const count = Symbol('count')
  const w = inst()
  t.deepEqual(w.read(count), nextResult)
  t.deepEqual(read.calls.shift(), { args: [w, count] })
})

test('TextWalker.skip should be called correctly correctly', (t) => {
  skip.cb = () => {} // don't call it
  const w = inst()
  const i = Symbol('i')
  w.skip(i)
  t.deepEqual(skip.calls.shift(), { args: [w, i] })
})

test('TextWalker.readUntil should be called correctly', (t) => {
  const result = Symbol('result')
  readUntil.cb = () => result // don't call it
  const w = inst()
  const firstArg = Symbol('firstArg')
  t.deepEqual(w.readUntil(firstArg), result)
  t.deepEqual(readUntil.calls.shift(), { args: [w, firstArg] })
})

test('TextWalker.skipUntil should be called correctly', (t) => {
  const result = Symbol('result')
  skipUntil.cb = () => result // don't call it
  const w = inst()
  const firstArg = Symbol('firstArg')
  t.deepEqual(w.skipUntil(firstArg), result)
  t.deepEqual(skipUntil.calls.shift(), { args: [w, firstArg] })
})

test('TextWalker.skipUntilNot should be called correctly', (t) => {
  const result = Symbol('result')
  skipUntilNot.cb = () => result // don't call it
  const w = inst()
  const firstArg = Symbol('firstArg')
  t.deepEqual(w.skipUntilNot(firstArg), result)
  t.deepEqual(skipUntilNot.calls.shift(), { args: [w, firstArg] })
})

test('TextWalker.match should be called correctly', (t) => {
  const result = Symbol('result')
  match.cb = () => result // don't call it
  const w = inst()
  const firstArg = Symbol('firstArg')
  debugger
  t.deepEqual(w.match(firstArg), result)
  t.deepEqual(match.calls.shift(), { args: [w, firstArg] })
})

test('TextWalker.nextIndexOf should be called correctly', (t) => {
  indexOfMany.cb = () => 3 // don't call it
  const w = inst()
  w.text = Symbol('text')
  w.pos = 3
  const strs = Symbol('strs')
  t.deepEqual(w.nextIndexOf(strs), 0)
  t.deepEqual(indexOfMany.calls.shift(), { args: [w.text, strs, w.pos] })
})

test('TextWalker.nextIndexOfNot should be called correctly', (t) => {
  indexOfManyNot.cb = () => 3 // don't call it
  const w = inst()
  w.text = Symbol('text')
  w.pos = 3
  const strs = Symbol('strs')
  t.deepEqual(w.nextIndexOfNot(strs), 0)
  t.deepEqual(indexOfManyNot.calls.shift(), { args: [w.text, strs, w.pos] })
})

test('TextWalker.walk should be called correctly', (t) => {
  const result = Symbol('result')
  walk.cb = () => result // don't call it
  const w = inst()
  const fns = Symbol('fns')
  t.deepEqual(w.walk(fns), result)
  t.deepEqual(walk.calls.shift(), { args: [w, fns] })
})

test('TextWalker.createToken should be called correctly', (t) => {
  const result = Symbol('result')
  createToken.cb = () => result // don't call it
  const w = inst()
  const type = Symbol('type')
  t.deepEqual(w.createToken(type), result)
  t.deepEqual(createToken.calls.shift(), { args: [w, type] })
})
