import React from 'react'
import {useHistory} from "react-router-dom"

const SmurfCard = (props) => {

    const haveHistory = useHistory()

    const clickProfile = (event) => {
        haveHistory.push(`/profile`)
    }
    return (
        <div onClick={clickProfile}>
            <h3>this is the smurf Card</h3>
            <h2>{props.item.name}</h2>
            <h4>{props.item.age}</h4>
            <h4>{props.item.height}</h4>
        </div>
    )
}

export default SmurfCard
