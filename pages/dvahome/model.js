function newSetTiming(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "张三", age: 18 });
    }, time);
  });
}

let HomeModel = {
  // 每一个model都可以有一个namespace命名空间属性，用来区分不同的Model
  namespace: "home",
  state: {
    num: 10,
    info: {
      name: "",
      age: "",
    },
  },
  reducers: {
    increase: (state, action) => {
      return { ...state, num: state.num + action.num };
    },
    reduce: (state, action) => {
      return { ...state, num: state.num - action.num };
    },
    changeInfoAction: (state, action) => {
      console.log({ ...state, info: action.info });
      return { ...state, info: action.info };
    },
  },
  // 发送异步action
  effects: {
    // 这里会拦截effects中的asyncGetInfo类型的action
    *asyncGetInfo(state, { call,put }) {
      console.log("拦截asyncGetInfo");
      // 进行异步拦截处理
      const data = yield newSetTiming(1000); //相当于：call(newSetTiming ,1000)
      // 保存异步数据调用put方法，这里相当于调用dispatch(changeInfoAction(data))
      yield put({ type: "changeInfoAction", info: data });
    },
  },
  // 每次进入页面 只要调用了app.start 就会执行subscriptions
  subscriptions: {
    setup({ history, dispatch }) {
      console.log("执行setup");
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {
        //   document.title = pathname;
      });
    },
  },
};

export default HomeModel;
