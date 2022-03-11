// pages/cart/childCpns/cs-bottom-bar/cs-bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectAll: {
      type: Boolean,
      value: false
    },
    checkedIid: {
      type: Array
    },
    totalPrice: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    totalNum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setSeleteAll() {
      this.triggerEvent('setSelectAll', {}, {})
    }
  },
  observers: {
    checkedIid(newValue) {
      this.setData({
        totalNum: newValue.length
      })
    }
  }
})
