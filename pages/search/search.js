// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onChange(e) {
    console.log(e);

    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    console.log('搜索');
  },
  onClick() {
    console.log('搜索qq')
  },
})