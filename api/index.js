// 网络请求方法
const { request } = require("../utils/request.js")
const { baseUrl, banner } = require("./base")
function getBanner(data){
  return request(baseUrl + banner, 'GET', data)
}

module.exports ={ 
  getBanner,
}