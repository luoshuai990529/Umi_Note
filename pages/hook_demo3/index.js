import React from "react";
import { Button } from 'antd';
import { useLocalStorageState } from '@umijs/hooks';


export default () => {
  const [message, setMessage] = useLocalStorageState('name', 'defaultValue');
  return (
    <>
      <div>
      <p>{message.name} </p>
      <p>{message.age} </p>
      <p>{message+''} </p>
      <Button onClick={()=>{setMessage({name:"zxj",age:20})}}>保存</Button>
    </div>
    </>
  );
};
