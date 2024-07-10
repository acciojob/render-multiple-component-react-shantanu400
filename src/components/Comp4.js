import React from "react"
export default function Comp4(props){
    return(
        <>
        <h1 data-ns-test="project-name">{props.name}</h1>
        <h6 data-ns-test="project-description">{props.desc}</h6>
        </>
    )
}