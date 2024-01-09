// components/swiper/swiper.js
Component({
  // 页面的属性列表
  properties: {
    indicatorDots: {
      type: Boolean,
      value: false,
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    interval: {
      type: Number,
      value: 3000,
    },
    duration: { 
      type: Number,
      value: 1000,
    },
    swiperData: {
      type: Array,
      value : []
    }
  },
})