import axios from "axios"
import { GET_ADMIN_FAILS, GET_ADMIN_REQUEST, GET_ADMINUSER_SUCCESS } from "./actiontype"


export const Adminuserdata =async(dispatch) => {
    try {        
        dispatch({ type:GET_ADMIN_REQUEST })
        let res = await axios.get(`https://639b03f6d514150197480eef.mockapi.io/user/users`)
        dispatch({ type:GET_ADMINUSER_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:GET_ADMIN_FAILS})
    }
}

