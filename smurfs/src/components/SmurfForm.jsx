import React, {useState} from 'react'
import {connect} from "react-redux"
import {postSmurfs} from "../actions"

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })
    
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("this is a smurf:", smurf)

        props.postSmurfs(smurf)

        console.log("smurf submit: ", props.postSmurfs(smurf))
    }
    const changeHandler = (event) => {
        event.preventDefault()
        setSmurf({...smurf, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <h2>this is the smurfForm</h2>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    name="name" 
                    value={props.name}
                    onChange={changeHandler}
                    placeholder="enter smurf name"
                />
                <input 
                    type="text" 
                    name="age" 
                    value={props.age}
                    onChange={changeHandler}
                    placeholder="enter smurf age"
                />
                <input 
                    type="text" 
                    name="height" 
                    value={props.height}
                    onChange={changeHandler}
                    placeholder="enter smurf height"
                />
                <button>add that smurf!</button>
            </form>
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

export default connect (mapStateToProps, {postSmurfs}) (SmurfForm)
