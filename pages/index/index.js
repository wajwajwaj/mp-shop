const { getBanner, getGoods } = require("../../api/index.js")
Page({
  data: {
    value: '',
    swiperOptions: {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      swiperData: [],
    },
    navData:[
      {
          text:"数码",
          icon:"like",
          color:"#ff0000"
      },
      {
          text:"生鲜",
          icon:"star",
          color:"#ff0000"
      },
      {
          text:"会员",
          icon:"fire",
          color:"#ff0000"
      },
      {
          text:"优惠",
          icon:"gift",
          color:"#ff0000"
      },
      {
          text:"充值",
          icon:"phone",
          color:"#ff0000"
      },
      {
          text:"领券",
          icon:"gem",
          color:"#ff0000"
      },
      {
          text:"外卖",
          icon:"gift-card",
          color:"#ff0000"
      },
      {
          text:"美食",
          icon:"smile",
          color:"#ff0000"
      }
    ],
    page: 1,
    goodsData: [],
  },
  onLoad(){
    getBanner().then((res) => {
      if(!res.data.msg){
        this.setData({
          indicatorDots: true,
          autoplay: true,
          interval: 3000,
          duration: 1000,
          swiperData: res.data.data.result
        })
      } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
      }
    })
    this.https(this.data.page)
  },
  https(page) {
    getGoods({ page }).then(res => {
      if(!res.data.msg){
        this.setData({
          goodsData: this.data.goodsData.concat(res.data.data.result)
        })        
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'success',
          duration: 2000
        })
      }

    })
  },
  // 触底方法
  onReachBottom(){
    this.setData({
      page: this.data.page += 1
    })
    this.https(this.data.page)
  },
  onSearch(){
    // 路由跳转
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})
