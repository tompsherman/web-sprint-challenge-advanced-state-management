const initialState = {
    smurfs: [],
    isLoading: false,
    errors: ""
}

const FETCH_START = "FETCH_START"

const reducer = (state=initialState) =>{
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                errors: ""
            }
        default:
            return state
    }
}

export default reducer