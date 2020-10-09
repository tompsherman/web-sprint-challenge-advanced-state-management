import React from 'react'

const SmurfForm = () => {
    
    const submitHandler = (event) => {
        event.preventDefault()
    }
    const changeHandler = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <h2>this is the smurfForm</h2>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    name="name" 
                    value="hardcoded"
                    onChange={changeHandler}
                    placeholder="enter smurf name"
                />
                <input 
                    type="text" 
                    name="age" 
                    value="hardcoded"
                    onChange={changeHandler}
                    placeholder="enter smurf age"
                />
                <input 
                    type="text" 
                    name="height" 
                    value="hardcoded"
                    onChange={changeHandler}
                    placeholder="enter smurf height"
                />
                <button>add that smurf!</button>
            </form>
        </div>
    )
}

export default SmurfForm
