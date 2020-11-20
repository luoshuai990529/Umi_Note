import React from 'react'
import {connect} from 'umi'
function Home(props) {
    return (
      <div>
        <h2>num:{props.num}</h2>
        <button
          onClick={() => {
            props.add();
          }}
        >
          增加
        </button>
        <button
          onClick={() => {
            props.less();
          }}
        >
          减少
        </button>
        <hr />
        <h2>name:{props.info.name}</h2>
        <h2>age:{props.info.age}</h2>
        <button
          onClick={() => {
            props.getUserInfo();
          }}
        >
          发送异步action
        </button>
      </div>
    );
  }
  
  const mapStateToProps1 = function (state) {
    return { num: state.home.num, info: state.home.info };
  };
  const mapDispatchToProps1 = function (dispatch) {
    return {
      add: () => {
        dispatch({ type: "home/increase", num: 1 });
      },
      less: () => {
        dispatch({ type: "home/reduce", num: 1 });
      },
      getUserInfo: () => {
        dispatch({ type: "home/asyncGetInfo" });
      },
    };
  };
  // 调用connect 将mapStateToProps1和mapDispatchToProps1映射到Home组件中
  const DvaHome = connect(mapStateToProps1, mapDispatchToProps1)(Home);
  
  export default DvaHome