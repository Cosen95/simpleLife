# simpleLife
## 简单生活小程序

## 记录
* 不要在observer中修改自身属性，会引起内存泄漏，造成无限循环
* 组件的properties: `type` 表示属性类型、 `value` 表示属性初始值、 `observer(newVal, oldVal, changedPath)` 表示属性值被更改时的响应函数
* 布局：display:inline-flex 将对象作为内联块级弹性伸缩盒显示
* behavior继承与多继承的覆盖规则: 如果有同名的属性或方法，组件本身的属性或方法会覆盖 behavior 中的属性或方法，如果引用了多个 behavior ，在定义段中靠后 behavior 中的属性或方法会覆盖靠前的属性或方法；生命周期函数不会相互覆盖，而是在对应触发时机被逐个调用。
* 小程序缓存机制：每个微信小程序都可以有自己的本地缓存，可以通过 `wx.setStorage`/`wx.setStorageSync`、`wx.getStorage`/`wx.getStorageSync`、`wx.clearStorage`/`wx.clearStorageSync`，`wx.removeStorage`/`wx.removeStorageSync` 对本地缓存进行读写和清理。
* `wx:if` vs `hidden`：因为 wx:if 之中的模板也可能包含数据绑定，所以当 wx:if 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。同时 wx:if 也是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。一般来说，wx:if 有更高的切换消耗而 hidden 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 hidden 更好，如果在运行时条件不大可能改变则 wx:if 较好。
* hidden不会触发组件的detached,wx:if可以触发
* 音频播放：onPlay(function callback) 监听背景音频播放事件 / onPause(function callback) 监听背景音频暂停事件 onStop(function callback) 监听背景音频停止事件 / onEnded(function callback) 监听背景音频自然播放结束事件
* 组件wxml的slot:在组件的wxml中可以包含 slot 节点，用于承载组件使用者提供的wxml结构。默认情况下，一个组件的wxml中只能有一个slot。需要使用多slot时，可以在组件js中声明启用。( `multipleSlots: true` / 在组件定义时的选项中启用多slot支持)
* 外部样式类:有时，组件希望接受外部传入的样式类。此时可以在 Component 中用 `externalClasses` 定义段定义若干个外部样式类。这个特性从小程序基础库版本 1.9.90 开始支持。
* wxs: WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的API。
* triggerEvent: 自定义组件触发事件时，需要使用 triggerEvent 方法，指定事件名、detail对象和事件选项
* input事件bindconfirm: 点击完成按钮时触发
* 并行请求与串行请求: `Promise.all` / `Promise.race`
* 组件生命周期: `created`（组件实例刚刚创建，不能调用setData） / `attached`（组件完全初始化完毕，此生命周期比较重要，可进行初始化操作）/ `detached`（组件离开页面节点树时触发）
* 分页加载实现: `scroll-view`(可滚动视图区域。使用竖向滚动时，需要给<scroll-view>一个固定高度，通过 WXSS 设置 height) / `onReachBottom`(页面上拉触底事件的处理函数)
* 重复加载数据问题的解决: 使用锁的概念（通过变量记录请求发起前后的状态，决定是否继续进行请求）
* open-data: 用于展示微信开放的数据，如用户昵称、头像、所在城市、地区等
* button组件中的open-type(微信开放能力): `getUserInfo` 获取用户信息，可以从`bindgetuserinfo`回调中获取到用户信息
* wx.getUserInfo获取用户信息需要用户先授权: 在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调。在用户已授权的情况下调用此接口，可成功获取用户信息。
* wx.getSetting: 成功的回调函数中authSetting(用户授权结果)
* 微信小程序获取用户信息的两种方法wx.getUserInfo&open-data: `https://blog.csdn.net/lucky_zeng/article/details/80066479`