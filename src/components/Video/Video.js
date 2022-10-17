
import React from "react"
import './Video.css'

export default function Video(props){

    return (
<video controls>
    <source src={props.vid} type="audio/mp3"/>

</video>
    )
}

