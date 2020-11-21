import React from "react";
import { Button } from "antd";
import { useToggle, useMount, useUnmount } from "@umijs/hooks";

function About() {
  useMount(() => {
    console.log("组件挂载✔");
  });
  useUnmount(() => {
    console.log("组件卸载⛔");
  });
  return (
    <>
      <h2>About组件</h2>
    </>
  );
}

export default () => {
  const { state, toggle } = useToggle(true);
  return (
    <>
      <div>
        {state && <About />}
        <Button
          onClick={() => {
            toggle();
          }}
        >
          Toggle
        </Button>
      </div>
    </>
  );
};
