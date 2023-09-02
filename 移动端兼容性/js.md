# js兼容想问题

## IOS移动端click事件300ms的延迟响应

解决办法：

用touchstart事件代替click事件

## new Date(“2018-04-27 11:11”),如果时间是以中横线分割，在ios上会返回`Invalid Date`

解决办法：

把`-`换成`/`

#编码问题

