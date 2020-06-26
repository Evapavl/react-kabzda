import {getAuthUserData} from "../redux/auth-reduce";



let INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

let initialState = {
    initialized: false,
    
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializeApp = () => (dispatch) => {
      let promise = dispatch(getAuthUserData())
        Promise.all([promise]).then(()=>{
            dispatch(initializedSucces())
        })
    }


export const initializedSucces = () => ({type: INITIALIZED_SUCCES})

export default appReducer;