import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "../constants";

const initialState = {
    user: null,
    login: {
        failed: false,
        success: false,
        loading: false
    },
    updateUser: {
        failed: false,
        success: false,
        loading: false
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_LOADING:
            return {
                ...state,
                login:{
                    failed: false,
                    success: false,
                    loading: true
                }
            }
        case LOGIN_FAILED:
            return {
                ...state,
                login:{
                    failed: true,
                    success: false,
                    loading: false,
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                login:{
                    failed: false,
                    success: true,
                    loading: false,
                }
            }
        default:
            return state;
    }
}