import Taro from '@tarojs/taro';
import { toast, loading, hideLoading } from './util';
import { ERROR, SUCCESS } from './wxutils';

const baseUrl = 'http://www.testrequest.com/'; // request请求的头URL,改成自己项目的URL
const mockBaseUrl = 'http://127.0.0.1:9527';

const getUrl = (url) => {
  if (url.indexOf('://') === -1) {
    // 判断是否是mock接口，若是mock则使用mock服务
    if (url.indexOf('/mock') > -1) {
      url = mockBaseUrl + url;
    } else {
      url = baseUrl + url;
    }
  }
  return url;
};

// 封装请求
export default function request(opt, showLoading, ...others) {
  const openId = Taro.getStorageSync('openId');
  if (showLoading) {
    loading({
      title: '请稍后...',
    });
  }
  const { param = {}, url } = opt;
  return Taro.request({
    ...opt,
    url: getUrl(url),
    data: { ...param, openId },
    header: {
      'content-type': 'application/x-www-form-urlencoded', // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
    },
    ...others,
  }).then((res) => {
    let { statusCode, data } = res;
    if (showLoading) {
      hideLoading();
    }
    if (statusCode === SUCCESS) {
      return data;
    } else if (statusCode === ERROR) {
      const { data: { errorMessage = '400错误' } = {} } = res;
      toast(errorMessage);
    } else {
      toast('系统错误');
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
}
