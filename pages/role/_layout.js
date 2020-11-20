import React from 'react'
import {Link} from 'umi'
/* 
    嵌套路由：
    Umi 里约定目录下有 _layout.tsx 时会生成嵌套路由，
    以 _layout.tsx 为该目录的 layout。
    layout 文件需要返回一个 React 组件，
    并通过 props.children 渲染子组件。
*/
export default (props)=>{

    return <>
        <Link to={'/role'}>role</Link>
        <Link style={{marginLeft:10+'px'}} to={'/role/info'}>info</Link>
        <Link style={{marginLeft:10+'px'}} to={'/role/price'}>price</Link>
        <div id="layout">{props.children}</div>
    </>
}