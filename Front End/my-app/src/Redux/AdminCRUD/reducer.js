import { CRUD_DELETE_SUCCESS, CRUD_FAILS, CRUD_PATCH_REQUEST_SUCCESS, CRUD_POST_REQUEST_SUCCESS, CRUD_REQUEST } from "./actiontype"

const init={
    isError:false,
    isLoading:false,
    Getdata:[]
}

export const reducer =(state=init,{type,payload})=>{

    switch(type){

        case CRUD_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        case CRUD_FAILS:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case CRUD_PATCH_REQUEST_SUCCESS:{
            return{
               ...state,
               isLoading:false,
               isError:false
            }
        }
        case CRUD_DELETE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false
            }
        case CRUD_POST_REQUEST_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false
            }
        default:return state
    }
}