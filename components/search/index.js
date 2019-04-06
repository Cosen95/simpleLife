// components/search/index.js
import { KeywordModel } from '../../models/keyword';
const keywordModel = new KeywordModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: []
  },

  attached() {
    // 在组件实例进入页面节点树时执行
    const historyWords = keywordModel.getHistory();
    this.setData({
      historyWords
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCancel(event) {
      this.triggerEvent('cancel',{},{})
    },
    handleConfirm(event) {
      const word = event.detail.value;
      keywordModel.addToHistory(word);
    }
  }
})
