import React from "react";
import { Switch, Button } from "antd";
import { useState } from "react";
import { useBoolean } from "@umijs/hooks";

export default () => {
  // React中的Hooks
//   const [state, setState] = useState(true);
  // umi 中的Hooks  返回的是一个对象
  const { state, toggle, setTrue, setFalse } = useBoolean(true);
  return (
    <>
      <p>当前的state:{state + ""}</p>
      <Switch
        checked={state}
        onClick={() => {
            toggle();
        }}
      ></Switch>
      <Button onClick={()=>{setTrue()}}>打开</Button>
      <Button onClick={()=>{setFalse()}}>关闭</Button>
    </>
  );
};
