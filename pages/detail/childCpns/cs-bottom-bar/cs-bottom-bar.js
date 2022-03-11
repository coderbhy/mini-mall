// pages/detail/childCpns/cs-bottom-bar/cs-bottom-bar.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    buyGoods() {
      wx.showToast({
        icon: 'error',
        mask: true,
        title: '暂未开发'
      })
    },
    addGoods() {
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        mask: true,
        complete: () => {
          this.triggerEvent('addGoods', {}, {});
        }
      })
    }
  }
})
