// components/classic/music/index.js
import { classicBehavior } from '../classic-behavior';
// BackgroundAudioManager 实例，可通过 wx.getBackgroundAudioManager 获取
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

  attached() {
    // 在组件实例进入页面节点树时执行
    this._recoverStatus();
  },
  detached() {
    // 在组件实例被从页面节点树移除时执行
    // audioManage.stop();
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
    },
    _recoverStatus: function() {
      // 如果当前没有音乐播放，则将状态置为待播放
      if(audioManage.paused) {
        this.setData({
          isPlay: false
        })
        return
      }
      // 如果当前页面播放音乐与BackgroundAudioManager 实例中的音乐相同，则保留当前音乐播放状态
      if(audioManage.src === this.properties.src) {
        this.setData({
          isPlay: true
        })
      }
    }
  }
})
