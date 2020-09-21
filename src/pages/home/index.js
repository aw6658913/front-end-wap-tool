import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { toPage, toast } from '@/utils/util';

@connect(({ globalModel }) => ({
  ...globalModel,
}))
class Home extends Taro.Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentDidMount = () => {
    // 未登录则重定向到登陆页
    const hasLogin = Taro.getStorageSync('hasLogin');
    if (!hasLogin) {
      Taro.redirectTo({
        url: '/pages/login/login',
      });
    }
  };

  add = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'globalModel/save',
      payload: {
        num: 1
      }
    });
    toast('跳转成功');
    toPage({
      url: '/pages/list/index'
    });
  }

  render() {
    return (
      <View>
        首页
        <View onClick={this.add}>加加</View>
      </View>
    );
  }
}

export default Home;
