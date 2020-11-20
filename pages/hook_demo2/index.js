import React from "react";
import { Button } from 'antd';
import { useState,useRef } from "react";
import { useCounter } from "@umijs/hooks";

// 利用 useState和useRef实现 useCounter
function useMyCounter(initValue,options){
  let [state,setState] = useState(initValue);
  const resetValue = useRef(initValue)
  const optionsObj = {
    inc:()=>{
      if(options.max){
        state>=options.max?'':setState(state+=1)
      }else{
        setState(state+=1)
      }
    },
    dec:()=>{
      if(options.min){
        state<=options.min?'':setState(state-=1)
      }else{
        setState(state-=1)
      }
    },
    set:(count)=>{
      setState(count)
    },
    reset:()=>{
      setState(resetValue.current)
    }
  }

  return [state,optionsObj]
}


export default () => {
  const [current, { inc, dec, set, reset }] = useMyCounter(10 , { min: 5, max: 15 });
  
  return (
    <>
      <div>
      <p>{current} </p>
      <Button.Group>
        <Button onClick={() => { inc() }}>inc()</Button>
        <Button onClick={() => { dec() }}>dec()</Button>
        <Button onClick={() => { set(6) }}>set(6)</Button>
        <Button onClick={() => { reset() }}>reset()</Button>
      </Button.Group>
    </div>
    </>
  );
};
