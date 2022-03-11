// pages/category/childCpns/cs-category/cs-category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    category: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentMaitKey: "3627"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setCurrentMaitKey(event) {
      const currentMaitKey = event.currentTarget.dataset.maitKey;
      this.setData({
        currentMaitKey
      })
      this.triggerEvent('listenCurrentMaitKey', {
        maitKey: currentMaitKey
      })
    }
  }
})
