import axios from "axios"
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "../constants"

const point = 'http://localhost:4000/api/users/'

export const logIn = (login, password) => {
    return async (dispatch) => {
        const url = `${point}auth`
        dispatch({ type: LOGIN_LOADING })
        const responce = await axios.get(url, {params:{login, password}})
        const json = await responce.json();
        if(json){
            dispatch({type: LOGIN_SUCCESS, payload: json});
        }else{
            dispatch({type: LOGIN_FAILED});
        }
    }
}