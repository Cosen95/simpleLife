# simpleLife
## 简单生活小程序

## 记录
* 不要在observer中修改自身属性，会引起内存泄漏，造成无限循环
* 布局：display:inline-flex 将对象作为内联块级弹性伸缩盒显示
* behavior继承与多继承的覆盖规则: 如果有同名的属性或方法，组件本身的属性或方法会覆盖 behavior 中的属性或方法，如果引用了多个 behavior ，在定义段中靠后 behavior 中的属性或方法会覆盖靠前的属性或方法；生命周期函数不会相互覆盖，而是在对应触发时机被逐个调用。
* 小程序缓存机制：每个微信小程序都可以有自己的本地缓存，可以通过 wx.setStorage/wx.setStorageSync、wx.getStorage/wx.getStorageSync、wx.clearStorage/wx.clearStorageSync，wx.removeStorage/wx.removeStorageSync 对本地缓存进行读写和清理。