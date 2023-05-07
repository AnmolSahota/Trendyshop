import axios from "axios"
import { PRODUCTFAILURE, PRODUCTREQUEST, PRODUCTSUCCESS } from "./actionType"


export const getVitamins = (dispatch)=>{
    dispatch(PRODUCTREQUEST)
    axios.get("https://good-pear-cheetah-tutu.cyclic.app/vitamin").then((res)=>{
        dispatch({type:PRODUCTSUCCESS,payload:res.data})
        console.log(res)
    }).catch((err)=>{
        dispatch(PRODUCTFAILURE)
        console.log(err)

    })
}