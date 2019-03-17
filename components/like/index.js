// components/like/index.js
// 组件封闭性、开放性及粒度
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    check: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    checkImg: 'images/like.png',
    noCheckImg: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLike(e) {
      let check = this.properties.check;
      let count = this.properties.count;
      count = check ? count - 1 : count + 1;
      this.setData({
        count,
        check: !check
      })
      // 激活自定义事件
      let behavior = this.properties.check ? 'like' : "cancel";
      this.triggerEvent('like', {
        behavior
      }, {})
    }
  }
})
