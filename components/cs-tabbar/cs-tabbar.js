// components/cs-tabbar/cs-tabbar.js
Component({
  options: {
    styleIsolation: "apply-shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    fixTabIsShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setCurrentIndex(event) {
      // console.log(event);
      const currentIndex = event.currentTarget.dataset.index;
      this.setData({
        currentIndex
      })
      this.triggerEvent('setCurrentIndex', {
        currentIndex
      }, {})
    }
  }
})
