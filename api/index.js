// 网络请求方法
const { request } = require("../utils/request.js")
const { baseUrl, banner, goods } = require("./base")
function getBanner(data){
  return request(baseUrl + banner, 'GET', data)
}
function getGoods(data){
  return request(baseUrl + goods, 'GET', data)
}

module.exports ={ 
  getBanner,
  getGoods,
}