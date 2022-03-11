// pages/home/childCpns/cs-backtop/cs-backtop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    backIsShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrollToTop() {
      this.triggerEvent('scrollToTop', {}, {});
    }
  }
})
