# 获取dom元素

1.innerHTML

```html
<body>
		<p>你好</p>
		<div id="test"><h5>就是喜欢你</h5></div>
		<script type="text/javascript">
			var hj=document.getElementById("test").innerHTML;
			alert(hj);
		</script>
</body>
 
输出结果：
 
<h5>就是喜欢你</h5>
```

2.outerHTML

```html
<body>
		<p>你好</p>
		<div id="test"><h5>就是喜欢你</h5></div>
		<script type="text/javascript">
			var kj=document.getElementById("test").outerHTML;
			alert(kj);
		</script>
</body>
 
输出结果：
 
<div id="test"><h5>就是喜欢你</h5></div>
```

