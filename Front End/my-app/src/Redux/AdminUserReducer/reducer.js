import { GET_ADMIN_FAILS, GET_ADMIN_REQUEST, GET_ADMINUSER_SUCCESS } from "./actiontype"

const init={
    isLoading:false,
    isError:true,
    userdata:[]
}

export const reducer=(state=init,{type,payload})=>{

    switch(type){

        case GET_ADMIN_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case GET_ADMINUSER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                userdata:payload
            }
        case GET_ADMIN_FAILS:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default:return state
    }
}