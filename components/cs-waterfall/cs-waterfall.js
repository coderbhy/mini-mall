// components/cs-waterfall/cs-waterfall.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    allDisData: {
      type: Array,
      observer(newValue) {
        if (JSON.stringify(newValue) !== "[]") {
          this.setData({
            leftDisData: [],
            rightDisData: [],
            leftHeight: 0,
            rightHeight: 0
          })
          this.divideAllDisData();
        }
      }
    }
  },

  lifetimes: {
    attached() {
      this.getWindowInfo();
      this.getContainerInfo();
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftDisData: [],
    rightDisData: [],
    leftHeight: 0,
    rightHeight: 0,
    containerWidth: 0,
    // 屏幕像素比 dpr
    pixelRatio: 2
  },

  /**
   * 组件的方法列表
   */
  methods: {
    divideAllDisData() {
      const allDisData = this.data.allDisData;
      const leftDisData = this.data.leftDisData;
      const rightDisData = this.data.rightDisData;
      let leftHeight = this.data.leftHeight;
      let rightHeight = this.data.rightHeight;
      let pixelRatio = this.data.pixelRatio;
      let originWidth = 0;
      let originHeight = 0;
      let columnWidth = parseInt(this.data.containerWidth * 0.48); // px
      let itemHeight = 0;

      let xPosition = 0; // x 号在 show 字段中的位置
      let _Position = 0; // x 前面的 _ 号在 show 字段中的位置
      let dotPosition = 0; // .jpg 在 show 字段中的位置
      allDisData.forEach(item => {
        if (item.show) {
          xPosition = item.show.img.search(/\d\dx\d\d/) + 2;
          _Position = item.show.img.lastIndexOf('_', xPosition)
          dotPosition = item.show.img.search(/\.jpg|\.png|\.gif/);
          originWidth = +item.show.img.slice(_Position + 1, xPosition);
          originHeight = +item.show.img.slice(xPosition + 1, dotPosition);
          itemHeight = parseInt((originHeight * columnWidth / originWidth) * pixelRatio); // rpx
        }
        if (item.image) {
          xPosition = item.image.search(/\d\dx\d\d/) + 2;
          _Position = item.image.lastIndexOf('_', xPosition)
          dotPosition = item.image.search(/\.jpg|\.png|\.gif/);
          originWidth = +item.image.slice(_Position + 1, xPosition);
          originHeight = +item.image.slice(xPosition + 1, dotPosition);
          itemHeight = parseInt((originHeight * columnWidth / originWidth) * pixelRatio); // rpx
        }
        if (leftHeight == rightHeight || leftHeight < rightHeight) {
          leftDisData.push(item);
          leftDisData[leftDisData.length - 1].itemHeight = itemHeight;
          leftHeight += (itemHeight + 80); // 文字占 80 rpx
        } else {
          rightDisData.push(item);
          rightDisData[rightDisData.length - 1].itemHeight = itemHeight;
          rightHeight += (itemHeight + 80); // 文字占 80 rpx
        }
      })
      this.setData({
        leftDisData,
        rightDisData,
        leftHeight,
        rightHeight
      })
    },
    getWindowInfo() {
      wx.getSystemInfo({
        success: (res) => {
          const pixelRatio = res.pixelRatio;
          this.setData({
            pixelRatio
          })
        },
      })
    },
    getContainerInfo() {
      const query = this.createSelectorQuery();
      query
        .select('.cs-waterfall-cpn')
        .boundingClientRect()
        .exec(res => {
          this.setData({
            containerWidth: res[0].width
          })
        })
    },
    routeToDetail(event) {
      const iid = event.target.dataset.iid;
      wx.navigateTo({
        url: `/pages/detail/detail?iid=${iid}`,
      })
    }
  }
})
