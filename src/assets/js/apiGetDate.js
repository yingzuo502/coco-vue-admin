


import axios from 'axios'
// import Utils from './utils'
import {apiDomain} from './Config.js'


const Axios = axios.create({
    baseURL: apiDomain,
    headers: {
    'X-Access-Token': process.broswer ? utils.getCookie('xly_token') : '',
    "LN-TYPE": "0"
    },
    timeout: 20000,
})

Axios.interceptors.response.use(function (response) {
  return response;
  }, function (error) {
        let {status, data} = error.response
        switch (status) {
        case 400:
        console.log(data, "response error")
        break;
        case 401:
        //用户凭证校验不通过,需要重新登录
        Utils.setCookie("xly_token", '') //因为token无效而需要的重定向必须要先清空！！!
        location.href = FINAL_URL
        break;
        default:
        return Promise.reject(error);
      }
});

export default Axios