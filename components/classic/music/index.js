// components/classic/music/index.js
import { classicBehavior } from '../classic-behavior';
let audioManage =  wx.getBackgroundAudioManager()
Component({
  behaviors: [classicBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
   src: String,
   title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    isPlay: false,
    pauseSrc: 'images/player@waitting.png',
    playSrc: 'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePlay: function(event) {
      console.log(this.properties.src);
      const { isPlay } = this.data;
      if(!isPlay) {
        this.setData({
          isPlay: true
        })
        audioManage.src = this.properties.src;
        audioManage.title = this.properties.title;
      } else {
        this.setData({
          isPlay: false
        })
        audioManage.pause();
      }
    }
  }
})
