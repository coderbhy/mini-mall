// pages/home/home.js
import { fetchBannersAndRecommends, fetchGoodsInfo } from '../../apis/home';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    tabs: ['流行', '热销', '上新'],
    currentType: 'pop',
    goodsInfo: {
      pop: {
        list: [],
        page: 0
      },
      sell: {
        list: [],
        page: 0
      },
      new: {
        list: [],
        page: 0
      }
    },
    fixTabIsShow: false,
    backIsShow: false
  },

  getBannersAndRecommends() {
    fetchBannersAndRecommends()
      .then(res => {
        const banners = res.data.banner.list;
        const recommends = res.data.recommend.list;
        this.setData({
          banners,
          recommends
        })
      })
  },
  getGoodsInfo({
    type,
    page
  }) {
    fetchGoodsInfo({
      type,
      page
    })
      .then(res => {
        const oldList = this.data.goodsInfo[type].list;
        const newData = res.data.list;
        oldList.push(...newData);
        const listKey = `goodsInfo.${type}.list`;
        const pageKey = `goodsInfo.${type}.page`;
        this.setData({
          [listKey]: oldList,
          [pageKey]: page
        })
      })
  },

  listenCurrentIndex(event) {
    const currentIndex = event.detail.currentIndex;
    switch(currentIndex) {
      case 0:
        this.setData({
          currentType: 'pop'
        })
        break;
      case 1:
        this.setData({
          currentType: 'sell'
        })
        break;
      case 2:
        this.setData({
          currentType: 'new'
        })
        break;
    }
    const tab1 = this.selectComponent('.cs-home-main-tabbar');
    const tab2 = this.selectComponent('.cs-home-other-tabbar');
    tab1.setData({
      currentIndex
    })
    tab2.setData({
      currentIndex
    })
  },
  scrollToTop() {
    wx.pageScrollTo({
      duration: 500,
      scrollTop: 0
    })
  },

  routeToDetail(event) {
    const iid = event.currentTarget.dataset.iid;
    wx.navigateTo({
      url: `/pages/detail/detail?iid=${iid}`,
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBannersAndRecommends();
    this.getGoodsInfo({
      type: 'pop',
      page: 1
    })
    this.getGoodsInfo({
      type: 'sell',
      page: 1
    })
    this.getGoodsInfo({
      type: 'new',
      page: 1
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
    const oldPage = this.data.goodsInfo[this.data.currentType].page;
    this.getGoodsInfo({
      type: this.data.currentType,
      page: oldPage + 1
    })
  },
  onPageScroll(event) {
    if (event.scrollTop >= 604 && !this.data.fixTabIsShow || event.scrollTop < 604 && this.data.fixTabIsShow) {
      this.setData({
        fixTabIsShow: !this.data.fixTabIsShow
      })
    }
    if (event.scrollTop >= 500 && !this.data.backIsShow || event.scrollTop < 500 && this.data.backIsShow) {
      this.setData({
        backIsShow: !this.data.backIsShow
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})