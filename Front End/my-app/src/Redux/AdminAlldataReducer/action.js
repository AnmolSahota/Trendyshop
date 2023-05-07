import axios from "axios"
import { GET_AYURVEDA_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_SUPLIMENT_SUCCESS, GET_TESTSTRIP_SUCCESS, GET_VITAMIN_SUCCESS } from "./actiontype"



export const Vitamin = async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST })
        let res = await axios.get(`https://good-pear-cheetah-tutu.cyclic.app/vitamin`)
        dispatch({ type: GET_VITAMIN_SUCCESS, payload: res.data })    
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL })
    }
}


export const Ayurveda = async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST })
        let res = await axios.get(`https://good-pear-cheetah-tutu.cyclic.app/ayurveda`)
        dispatch({ type: GET_AYURVEDA_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL })
    }
}


export const Teststrip = async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST })
        let res = await axios.get(`https://good-pear-cheetah-tutu.cyclic.app/teststrip`)
        dispatch({ type: GET_TESTSTRIP_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL })
    }
}


export const Supliment = async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST })
        let res = await axios.get(`https://good-pear-cheetah-tutu.cyclic.app/supplements`)
        dispatch({ type: GET_SUPLIMENT_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL })
    }
}