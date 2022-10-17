import React from "react"
import './Audio.css'

export default function Audio(props){

    return (

        <audio controls>
            <source src={props.aud} type="audio/mp3"/>

        </audio>

    )
}