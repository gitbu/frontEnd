# css变量

## 一、使用

### 声明

变量的前缀加`--`

```css
body {
  --theme-color: blue;
}
```



### `var()`函数使用

`var()`用于读取变量

```css
button {
  color: var(--theme-color)
}
```

`var()`函数的第二个参数表示默认值，和`lodash`中的`get(data, path, [defaultValue])`同样的道理

```css
button {
  color: var(--theme-color, red)
}
```

`var()`函数还可以用在变量的声明的值中

```css
body {
  --theme-color: blue;
  --font-color: var(--theme-color)
}
```



## 二、特性

与css的层叠规则是一样的，一样具有`继承性`

```html
<html>
  <head>
    <style>
      :root { --color: blue; }
      div { --color: green; }
      #alert { --color: red; }
      * { color: var(--color); }
     </style>
  </head>
  <body>
     <p>蓝色</p>
		 <div>绿色</div>
		  <div id="alert">红色</div>
  </body>
</html>



```

<iframe
     src="https://codesandbox.io/embed/wonderful-platform-ql6f4?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="wonderful-platform-ql6f4"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>



## 三、兼容性

除了IE不支持以为，剩余的大部分都支持

[查看兼容性](https://www.caniuse.com/#search=var())

