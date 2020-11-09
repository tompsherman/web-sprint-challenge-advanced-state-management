import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_START, POST_FAILURE, POST_START, POST_SUCCESS} from "../actions"

const initialState = {
    smurfs: [],
    isLoading: false,
    errors: ""
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                errors: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                errors: ""
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isLoading: true,
                errors: action.payload
            }
        case POST_START:
            return{
                ...state,
                smurfs: [...state.smurfs],
                isLoading: true,
                errors: ""
            }
        case POST_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isLoading: false,
                errors: ""
            }
        case POST_FAILURE:
            return{
                ...state,
                isLoading: false,
                errors: action.payload
            }
        default:
            return state
    }
}

export default reducer