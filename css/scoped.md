```html
<article>
  <div>The scoped attribute allows for you to include style elements mid-document.
   Inside rules only apply to the parent element.</div>
  <p>This text should be black. If it is red your browser does not support the scoped attribute.</p>
  <section>
    <style scoped>
      p { color: red; }
    </style>
    <p>This should be red.</p>
  </section>
</article>
```

`scoped`如果该属性存在，则样式应用于其父元素；如果不存在，则应用于整个文档
