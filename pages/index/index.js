const { getBanner } = require("../../api/index.js")
Page({
  data: {
    value: '',
    swiperOptions: {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      swiperData: [],
    }
  },
  onLoad(){
    getBanner().then((res) => {
      console.log(res.data.data.result, 'mmm');
      this.setData({
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        swiperData: res.data.data.result
      })
    })
  },
  methods: {

  },
})
