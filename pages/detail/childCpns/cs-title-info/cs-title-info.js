// pages/detail/childCpns/cs-title-info/cs-title-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo: {
      type: Object,
      value: {},
      observer(newValue) {
        this.discountBgColor = newValue.discountBgColor;
      }
    },
    columns: {
      type: Array,
      value: []
    },
    shopInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    discountBgColor: '#ff5777'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
