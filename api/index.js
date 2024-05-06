// 网络请求方法
const { request } = require("../utils/request.js")
const { baseUrl, banner, goods, hostSearch, search } = require("./base")
function getBanner(data){
  return request(baseUrl + banner, 'GET', data)
}
function getGoods(data){
  return request(baseUrl + goods, 'GET', data)
}
function getHostSearch(data){
  return request(baseUrl + hostSearch, 'GET', data)
}
function getSearch(data){
  return request(baseUrl + search, 'GET', data)
}
module.exports ={ 
  getBanner,
  getGoods,
  getHostSearch,
  getSearch,
}