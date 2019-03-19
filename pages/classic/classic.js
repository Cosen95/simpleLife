// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js';
import { LikeModel } from '../../models/like.js';

let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: false,
    count: 0,
    first: false,
    latest: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      console.log(res.data[0]);
      // id: 期刊在数据中序号，供点赞使用
      // type: 期刊类型,这里的类型分为:100 电影 200 音乐 300 句子
      const { count, check, content, image, id, type, index, title } = res.data[0];
      this.setData({
        count,
        check,
        content,
        image,
        id,
        type,
        index,
        title
      })
    })
   
  },

  handleLike: function(event) {
    let { detail = {} } = event;
    let { behavior = '' } = detail;
    const { id, type } = this.data;
    likeModel.like(behavior,id,type)
  },
  handleNext: function(event) {
    // 下一期期刊
  },
  handlePrevious: function(event) {
    // 上一期期刊
  }

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // promise处理异步
    // let Promise = new Promise((resolve, reject) => {
    //   wx.request({
    //     url: '',
    //     success: (res) => {
    //       resolve(res)
    //     }
    //   })
    // })

    // Promise.then((res) => {
    //   console.log(res);
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})