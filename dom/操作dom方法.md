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

