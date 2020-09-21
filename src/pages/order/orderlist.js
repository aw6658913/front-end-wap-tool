import { Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import './orderlist.scss';

@connect(({ globalModel }) => ({
  ...globalModel,
}))

class Order extends Taro.Component {
  componentDidMount = () => {};
  config = {
    navigationBarTitleText: '订单',
  };

  render() {
    const { num } = this.props;
    return <Text>订单{num}</Text>;
  }
}

export default Order;
