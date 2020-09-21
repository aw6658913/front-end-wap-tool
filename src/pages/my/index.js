import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './my.module.scss';

class Mine extends Taro.Component {
  componentDidMount = () => {};
  config = {
    navigationBarTitleText: '我的',
  };

  render() {
    return (
      <View className={styles.myPage}>
        我的
      </View>
    );
  }
}

export default Mine;
