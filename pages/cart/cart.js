// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    selectAll: false,
    checkedIID: [],
    totalPrice: 0
  },

  getCartList() {
    let cartList = wx.getStorageSync('cart');
    const checkedIID = this.data.checkedIID;
    let selectAll = false;
    if (!!cartList) {
      cartList = JSON.parse(cartList);
      this.setData({
        cartList
      })
      cartList.forEach(item => {
        if (item.checked && checkedIID.indexOf(item.iid) === -1) {
          checkedIID.push(item.iid)
        }
      })
      if (checkedIID.length === cartList.length) {
        selectAll = true;
      }
      this.setData({
        selectAll,
        checkedIID
      })
      this.calcTotalPrice()
    }
  },
  setSelectAll() {
    const selectAll = this.data.selectAll;
    this.setData({
      selectAll: !selectAll
    })
    let checkedIID = [];
    if (this.data.selectAll) {
      checkedIID = this.data.cartList.map(item => {
        return item.iid;
      })
    } else {
      checkedIID = []
    }
    let cartList = this.data.cartList;
    cartList.forEach(item => {
      item.checked = this.data.selectAll;
    })
    this.setData({
      checkedIID,
      cartList
    })
    this.calcTotalPrice()
  },
  setSelectSingle(event) {
    const isSelect = !event.detail.isSelect;
    const iid = event.detail.iid;
    let checkedIID = this.data.checkedIID;
    const cartList = this.data.cartList;
    if (isSelect) {
      checkedIID.push(iid);
      if (checkedIID.length === cartList.length) {
        this.setData({
          selectAll: true
        })
      }
    } else {
      checkedIID = checkedIID.filter(item => {
        return item !== iid;
      })
      this.setData({
        selectAll: false
      })
    }
    const item = cartList.find((item, index) => {
      return item.iid === iid;
    })
    const index = cartList.indexOf(item);
    const key = `cartList[${index}].checked`;
    this.setData({
      checkedIID,
      [key]: isSelect
    })
    this.calcTotalPrice()
  },
  calcTotalPrice() {
    let totalPrice = 0;
    if (this.data.cartList.length === 0) {
    } else {
      totalPrice = this.data.cartList.reduce((pre, cur) => {
        if (cur.checked) {
          return pre + parseFloat(cur.price.slice(1)) * Number(cur.count)
        } else {
          return pre;
        }
      }, 0)
      totalPrice = totalPrice.toFixed(2);
    }
    this.setData({
      totalPrice
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getCartList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorageSync('cart', JSON.stringify(this.data.cartList));
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})