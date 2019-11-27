| 类型      | 说明                                       | 缺点                                       | 适用场景   |
| ------- | ---------------------------------------- | ---------------------------------------- | ------ |
| any     | 申明了any,不希望类型检查器检查，直接通过该编译阶段的检查           | 很容处处都是any,写成anyScript,所以在配置中把noImplicitAny 设置成true | 尽量不要使用 |
| unknown | 和any共同点：可以是任何类型 , 和any的不同点：在类型未确定之前不能有任何操作 ，unknown是更安全的any |                                          |        |
| never   | 那些永远不存在值的类型                              |                                          |        |

> any和unknown

```js
// any和unknown都可以申明任何类型
let value: any;
value = true; // ok
value = 33;   // ok
value 'eee';  // ok
value = {}    // ok

let value: unknown;
value = true; // ok
value = 33;   // ok
value 'eee';  // ok
value = {}    // ok

// any可以执行任何操作,unknown不可以
let value: any;
value.a.b      // ok
value()        // ok
value[0][1]    // ok
new value()    // ok


let value: unknown
value.a.b     // ERROR
value()	      // ERROR
value[0][1]   // ERROR
new value()   // ERROR

// never
function a():never {
    try {
        throw new Error('err')
    } catch(err) {
        console.error(err)
    }
}

let emptyArr: never[] = []; 

```

