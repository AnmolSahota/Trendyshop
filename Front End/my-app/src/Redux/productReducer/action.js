import { PRODUCTREQUEST, PRODUCTSUCCESS } from "./actionType"

const initialState = {
    isLoading:false,
    isError:false,
    products:[]
}

export const reducer = (state=initialState,{type,payload})
{
    switch(type)
    {
        case PRODUCTREQUEST : {
            return {...state,isLoading:true}
        }

        case PRODUCTSUCCESS:{
            return {...state,isLoading:false,products:payload}
        }

        case PRODUCTFAILURE:{
            return {...state,isLoading:false,isError:true}
        }

        default:{
            return state
        }
    }
}