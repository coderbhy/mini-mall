// pages/detail/detail.js
import { fetchDetail } from '../../apis/detail';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: '',
    topImages: [],
    itemInfo: {},
    columns: [],
    shopInfo: {},
    detailImage: [],
    itemParams: {},
    comments: []
  },

  getDetail({
    iid
  }) {
    fetchDetail({
      iid
    })
      .then(res => {
        // console.log(res);
        const topImages = res.result.itemInfo.topImages;
        const itemInfo = res.result.itemInfo;
        const columns = res.result.columns;
        const shopInfo = res.result.shopInfo;
        const detailImage = res.result.detailInfo.detailImage;
        const itemParams = res.result.itemParams;
        const comments = res.result.rate.list;
        this.setData({
          topImages,
          itemInfo,
          columns,
          shopInfo,
          detailImage,
          itemParams,
          comments
        })
      })
  },
  addGoods() {
    const result = app.globalData.cart.find(item => {
      return item.iid === this.data.iid;
    })
    if (!result) {
      const goodsInfo = {
        iid: this.data.iid,
        image: this.data.topImages[0],
        title: this.data.itemInfo.title,
        desc: this.data.itemInfo.desc,
        price: this.data.itemInfo.price,
        checked: false,
        count: 1
      };
      app.globalData.cart.push(goodsInfo)
    } else {
      result.count ++;
    }
    wx.setStorageSync('cart', JSON.stringify(app.globalData.cart));
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const iid = options.iid;
    this.setData({
      iid
    })
    this.getDetail({
      iid
    })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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