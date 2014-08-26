# fnworker

Pass a function and context to a worker instead of a url. From an
[answer](http://stackoverflow.com/a/19201292) by Stackoverflow user Adria.

## Installing:

In the terminal:

```bash
$ npm install browserify -g
$ npm install fnworker
```

## Api:

```js
// returns a Worker with the supplied source and context.
function fnworker(Function source, Object context) 
```

## Example:

```js
var fnworker = require('fnworker')
  , foo = 'bar'

fnworker(function () {
  // your stuff here!
  console.log(a_variable_for_this_context)
}, { a_variable_for_this_context: foo })
```

## Running

In your terminal:

```bash
$ browserify mysourcefile.js -o bundle.js
```

Include bundle.js in your webpage.

## Compatibility

Anything that supports `Worker`, `Blob`, and `URL`.

- *Internet Explorer*: 10+
- *Firefox*: 30+
- *Chrome*: 27+
- *Chrome for Android*: 36+
- *Safari*: 6.1+
- *iOS Safari: 6.1+
- *Opera*: 23+
- *Opera Mini*: n/a
- *Android Browser*: 4.4+ 

