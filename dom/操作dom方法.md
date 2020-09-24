# 操作dom方法

1. `nextSibling`:获取当前元素的下一个同胞元素

2. `appendChild`：当前元素的子元素中追加一个元素

   **语法**

   > element.append(child)

   **参数**

   * child:要追加的元素

   **返回值**

   返回要追加的child

   **例子**

   ```js
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
   </head>
   <body>
     <div id="box">
       <p>a</p>
       <p>b</p>
     </div>
     <script>
       const box = document.querySelector('#box');
       // appendChild
       const d = document.createDocumentFragment();
       const p = document.createElement('p');
       p.textContent = 'c'
       d.appendChild(p);
       box.appendChild(d);
     </script>
     
   </body>
   </html>
   ```

   ​

3. insertBefore

4. innerText 和 textContent的区别

   > 1.innerText的值依赖于浏览器的显示，textContent依赖于代码的显示
   >
   > 2.如果一个元素之间包含了script标签或者style标签，innerText是获取不到这两个元素之间的文本的，而textContent可以
   >
   > 3.textContent会把空标签解析成换行（几个空标签就是几行），innerText只会把block元素类型的空标签解析换行，并且如果是多个的话仍看成是一个，而inline类型的原素则解析成空格
   >
   > 5.innerText的设置会引发浏览器的回流操作，而textContent则不一定会

