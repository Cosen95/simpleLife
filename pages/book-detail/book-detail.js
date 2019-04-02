// pages/book-detail/book-detail.js
import { BookModel } from '../../models/book';
import { LikeModel } from '../../models/like.js';

const bookModel = new BookModel();
let likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    comments: [],
    likeStatus: false,
    likeCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { bid } = options;
    bookModel.getBookDetail()
    .then(res => {
      console.log('书籍详情',res);
      this.setData({
        book: res.data
      })
    })
    bookModel.getComment()
    .then(res => {
      console.log('短评信息',res);
      this.setData({
        comments: res.data.comment
      })
    })
    bookModel.getLikeStatus()
    .then(res => {
      console.log('喜欢',res);
      this.setData({
        likeStatus: res.data.like_status,
        likeCount: res.data.fav_nums
      })
    })
  },

  handleLike: function(event) {
    let { detail = {} } = event;
    let { behavior = '' } = detail;
    const { id } = this.data.book;
    likeModel.like(behavior,id,400)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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