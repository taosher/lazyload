# Lazyload插件——适用于jQuery和Zepto

让图片以lazyload方式加载，即当图片出现在视口中时，才会被加载。

本插件中使用了函数节流以及加载标记，不会阻塞浏览器也不会重复加载。

适用于jQuery或Zepto，亦可以作为AMD模块使用。

1. 引入

   ```html
   <script src="./jquery.js"></script>
   <script src="./lazyload.js"></script>
   ```

   或：

   ```javascript
   require(['lazyload'],function() {
     //$('xxx').lazyload();
   })
   ```

2. 在HTML里设置好`<img>`标签

   ```html
   <img class="lazy-img" data-src="./images/01.jpg" width="400px" height="400px">
   ```

   将`src`地址放在`data-src`属性中，建议提前在`<img>`属性中设置好`width`和`height`的值

3. 使用Lazyload

   ```javas
   $('.lazy-img').lazyload()
   ```

   即可让所有`class`为`lazy-img`的图片以Lazyload形式加载

   ​
