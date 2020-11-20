// 以前dva 创建时的参数 都写在app.js文件中
import { createLogger } from 'redux-logger';
export const dva = {
  config: {
    onAction: createLogger(),
    
  },
};