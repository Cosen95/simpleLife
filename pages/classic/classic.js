// pages/classic/classic.js
import { HTTP } from '../../util/http.js';
let http = new HTTP();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5c8c9090800fbb7305fd8106/simple/classic/latest'
    // })
    http.request({
      url: 'classic/latest',
      success: (res) => {
        console.log(res);
      }
    })
  },

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