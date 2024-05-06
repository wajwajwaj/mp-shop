// pages/search/search.js
const { getHostSearch } = require('../../api/index')
Page({
  data: {
    value: '',
    hostData: []
  },

  onLoad(options) {
    getHostSearch().then(res => {
      this.setData({
        hostData: res.data.data.result || []
      })
    })
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    wx.navigateTo({
      url: '/pages/goods/goods?search=' + this.data.value,
    })
  },
  onClick() {
    wx.navigateTo({
      url: '/pages/goods/goods?search=' + this.data.value,
    })
  },
  onClickHostkey(e){
    this.setData({
      value: e.currentTarget.dataset.hostkeyvalue
    })
    wx.navigateTo({
      url: '/pages/goods/goods?search=' + e.currentTarget.dataset.hostkeyvalue,
    })
  }
})