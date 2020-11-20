import React from 'react'

export default (props)=>{
    console.log("info/id/name",props);
    return <>
        <h2>id:{props.match.params.id}</h2>
        <h2>name:{props.match.params.name}</h2>
    </>
}