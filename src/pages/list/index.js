import { Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { connect } from '@tarojs/redux';

@connect(({ globalModel }) => ({
  ...globalModel,
}))

class List extends Taro.Component {
  componentDidMount = () => {};
  config = {
    navigationBarTitleText: '列表',
  };

  render() {
    const { num } = this.props;
    return <Text>列表{num}</Text>;
  }
}

export default List;
