
# tokenz

Tokenizer library

* Lightweight (almost zero-dep)
* Performant
* Versatile
* Only works with String (for now)

## Install

npm/yarn/pnpm install `tokenz`

## Example usage

```javascript
import { TextWalker } from 'tokenz'

const walker = new TextWalker(text)
  const walker = new TextWalker(html)
  const tokens = []
  while (!walker.isEnd()) {
    const token = walker.walk([
      () => endTag(walker),
      () => startTag(walker),
      () => text(walker),
    ])
    if (token) {
      tokens.push(token)
    }
  }
  return tokens
```

## API

### walker.isEnd
`walker.isEnd(): Boolean`

Returns whether end of text has been reached.
```javascript
const walker = new TextWalker('asd')
walker.isEnd() // => false
walker.skip(3)
walker.isEnd() // => true
```

### walker.peek
`walker.peek([pos: Number, [count: Number]]): String`

`pos` defaults to `0`.  
`count` defaults to `1`.  

Returns characters starting from `pos` relative to current walker's position,
and as many as `count` or until end of text is reached.

```javascript
const walker = new TextWalker('asd')
walker.peek() // => 'a'
walker.peek(1) // => 's'
walker.peek(0, 2) // => 'as'
```

### walker.match
`walker.match(strs: Array<String>, [count: Number]): Boolean`

`count` defaults to `1`.

Returns whether any string in `strs` matches the walker text in its current position.

```javascript
const walker = new TextWalker('asd')
walker.match('a') // => true
walker.match('b') // => false
walker.match('as') // => true
walker.match('asde') // => false
```

### walker.read
`walker.read([count: Number]): String`

`count` defaults to `1`.  

Returns characters from `walker.pos`
and as many characters as `count` (or less if end of text is reached).  
Increments `walker.pos` by `count`.  
```javascript
const walker = new TextWalker('asd')
walker.read() // => 'a'
walker.read(2) // => 'sd'
```

### walker.readUntil
`walker.readUntil(strs: Array<String>|String): String`

Returns all characters from `walker.pos` (or less if end of text is reached)  
until the first string on `strs` is found, or end of text is reached.

Increments `walker.pos` by the amount of characters returned.  
```javascript
const walker = new TextWalker('abcbd')
walker.readUntil(['b', 'c']) // => 'a'
walker.readUntil('b') // => 'bc'
```


### walker.readUntilNot
`walker.readUntilNot(strs: Array<String>|String): String`

Returns all characters from `walker.pos` (or less if end of text is reached)  
until either no match fro `strs` is found, or end of text is reached.

Increments `walker.pos` by the amount of characters returned.  
```javascript
const walker = new TextWalker('112233')
walker.readUntilNot(['1', '2']) // => '1122'
walker.readUntilNot('3') // => ''
```

### walker.skip
`walker.skip([count]: Number)`

Like [walker.read](#walkerread) but it doesn't return a `String`.

```javascript
const walker = new TextWalker('asd')
walker.skip()
walker.peek() // => 's'
walker.skip(2)
walker.isEnd() // => true
```

### walker.skipUntil
`walker.skipUntil(strs: Array<String>|String)`

Like [walker.readUntil](#walkerreaduntil) but it doesn't return a `String`.

### walker.skipUntilNot
`walker.skipUntilNot(strs: Array<String>|String)`

Like [walker.readUntilNot](#walkerreaduntilnot) but it doesn't return a `String`.

### walker.walk
`walker.walk(tokenizers: Array<Function>)`

Iterates over `tokenizers` executing them sequentially.  
Said iteration **stops** with the first return value that isn't `null|undefined`.  
This return value is also returned by `walker.walk`.

After each tokenizer execution that returns `null` or `undefined`,
`walker.pos` is rolled back to the value it had when `walker.walk` was called.
This allows each tokenizer to move `walker.pos` at will, but being able to **cancel**
at any time by return `null|undefined`.


