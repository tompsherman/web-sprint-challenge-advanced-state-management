import React, {useEffect} from 'react'

import {connect} from "react-redux"
import {fetchSmurfs} from "../actions"

import SmurfCard from "./SmurfCard.jsx"


const SmurfList = (props) => {

    useEffect(()=>{
        props.fetchSmurfs()
    }, [])
    return (
        <div>
            <h2>this is the smurf list</h2>
            x{
                props.smurfs.map(item => (
                    <SmurfCard key={item.id} item={item} />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        errors: state.errors
    }
}

export default connect (mapStateToProps, {fetchSmurfs}) (SmurfList)
