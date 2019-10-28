# yield表达式

## yield*: 会遍历后面的generator遍历器

```js
function* foo() {
  yield 'a';
  yield 'b';
}

function* bar() {
  yield 'x';
  // 手动遍历 foo()
  for (let i of foo()) {
    console.log(i);
  }
  yield 'y';
}

for (let v of bar()){
  console.log(v);
}
// x
// a
// b
// y

function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}
// x
// a
// b
// y
```
