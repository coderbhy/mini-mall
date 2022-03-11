// pages/category/category.js
import { fetchCategory, fetchSubCategory } from '../../apis/category';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [],
    subCategory: []
  },

  getCategory() {
    fetchCategory()
      .then(res => {
        const category = res.data.category.list;
        // console.log(res);
        this.setData({
          category
        })
      })
  },
  getSubCategory({
    maitKey
  }) {
    fetchSubCategory({
      maitKey
    })
      .then(res => {
        const subCategory = res.data.list;
        this.setData({
          subCategory
        })
      })
  },

  listenCurrentMaitKey(event) {
    const maitKey = event.detail.maitKey;
    this.getSubCategory({
      maitKey
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategory();
    this.getSubCategory({
      maitKey: '3627'
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