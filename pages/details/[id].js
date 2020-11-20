import React from 'react'

export default (props) =>{
    console.log('id:',props.match.params.id);
    return <>
        <h1>动态路由参数id:{props.match.params.id}</h1>
    </>
}