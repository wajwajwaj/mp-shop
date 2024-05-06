const { getDetails } = require('../../api/index')
Page({
  data: {
    goodsDetail:{}
  },

  onLoad(options) {
    // 如果详情数据太大，需要友好的交互提示用户
    wx.showLoading({
      title: '数据加载中...',
    })
    getDetails({ id: options.id }).then(res => {
      wx.hideLoading()
      const { data, status } = res.data
      if(status === 200){
        this.setData({
          goodsDetail: data[0]
        })
      } else {
        wx.showToast({
          title: '数据获取失败',
          icon: 'error'
        })
      }
      console.log(res, 'mm');
    })
  },
  onClickKF(){},
  onClickCart(){},
  onClickAddCart(){},
  onClickBuy(){},
})