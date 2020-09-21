import Taro from '@tarojs/taro';

// 重定向跳转页面
export const rePage = (param = {}) => {
  Taro.redirectTo({...param});
};

// 跳转页面
export const toPage = (param = {}) => {
  // 如果跳转层级已经超过8层强制重定向跳转
  if (Taro.getCurrentPages().length > 8) {
    rePage({...param});
  }
  Taro.navigateTo({
    ...param
  });
};

// 轻提示
export const toast = (title, onHide) => {
  Taro.showToast({
      title: title,
      icon: "none",
      mask: true,
      duration: 1500,
      success: () => {
        if (onHide && typeof onHide === 'function') {
          onHide();
        }
      }
  });
};

// 加载中提示弹框
export const loading = (title = "加载中") => {
  if (Taro.showLoading) {
      Taro.showLoading({
          title: title,
          mask: true
      });
  } else {
      Taro.showNavigationBarLoading(); //导航条加载动画
  }
};

// 隐藏加载中提示弹框
export const hideLoading = () => {
  Taro.hideLoading();
};

// 成功轻提示
export const toastSuccess = (title, onHide) => {
  Taro.showToast({
    title: title,
    icon: "success",
    duration: 1500,
    mask: true,
    success: () => {
      if (onHide && typeof onHide === 'function') {
        onHide();
      }
    }
  });
};

export default { toPage, toast, loading, hideLoading, toastSuccess };


