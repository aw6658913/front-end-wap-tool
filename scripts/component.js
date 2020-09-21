/**
 * pages模版快速生成脚本,执行命令 npm run com `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

// 页面模版
const indexTep = `import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import styles from './index.scss';

@connect(({${dirName}}) => ({
  ...${dirName},
}))
export default class ${nameCase(dirName)} extends Component {
  componentDidMount = () => {

  };

  render() {
    return (
      <View className={styles.${dirName}Page}>
        ${dirName}
      </View>
    );
  }
}
`;

// scss文件模版
const scssTep = `.${dirName}Page {
}
`;


fs.mkdirSync(`./src/components/${nameCase(dirName)}`); // mkdir $1
process.chdir(`./src/components/${nameCase(dirName)}`); // cd $1

fs.writeFileSync('index.js', indexTep);
fs.writeFileSync('index.scss', scssTep);

// eslint-disable-next-line no-console
console.log(`组件模版${dirName}已创建`);

function nameCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] =
      array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);
