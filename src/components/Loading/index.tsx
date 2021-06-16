/**
 * @File: Loading组件，用于请求处理
 */
import {Portal, Toast} from '@ant-design/react-native';

class Loading {
  instance: any;
  count: number;
  constructor() {
    this.instance = null;
    this.count = 0;
  }

  start() {
    this.count++;
    if (this.instance === null) {
      this.instance = Toast.loading('加载中...', 0);
    }
  }

  stop() {
    this.count--;
    if (this.instance !== null && this.count <= 0) {
      Portal.remove(this.instance);
      this.count = 0;
      this.instance = null;
    }
  }
}

export default Loading;
