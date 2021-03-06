import {create} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/models';
// 创建实例
const app = create();

// 加载models对象
models.forEach(model => {
  app.model(model);
});
// 使用插件
app.use(createLoading());
// 启动dva
app.start();
// 导出dva的数据
const store = app._store;
export default store;
