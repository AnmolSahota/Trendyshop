import { GET_AYURVEDA_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_SUPLIMENT_SUCCESS, GET_TESTSTRIP_SUCCESS, GET_VITAMIN_SUCCESS } from "./actiontype"

const init={
    isLoading:false,
    isError:false,
    vitamin:[],
    ayurveda:[],
    teststrip:[],
    supliment:[]
}

export const reducer =(state=init,{type,payload})=>{
    switch(type){

        case GET_PRODUCT_REQUEST:{
            return{
                ...state,
                isLoading:true,
            }
        }

        case GET_PRODUCT_FAIL:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }

        case GET_VITAMIN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                vitamin:payload
            }
        }

        case GET_AYURVEDA_SUCCESS:{
            return{
                ...state,
                ayurveda:payload
            }
        }

        case GET_TESTSTRIP_SUCCESS:{
            return{
                ...state,
                teststrip:payload
            }
        }

        case GET_SUPLIMENT_SUCCESS:{
            return{
                ...state,
                supliment:payload
            }
        }
        default:
            return state
    }

}