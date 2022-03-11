// pages/cart/childCpns/cs-cart-item/cs-cart-item.js
Component({
  options: {
    styleIsolation: "apply-shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    cartItem: {
      type: Object,
      value: {}
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
    selectSingle(event) {
      this.triggerEvent('setSelectSingle', {
        iid: event.currentTarget.dataset.iid,
        isSelect: event.currentTarget.dataset.isSelect
      })
    }
  }
})
