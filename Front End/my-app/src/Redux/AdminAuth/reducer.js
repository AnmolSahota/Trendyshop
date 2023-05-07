import { ADMIN_AUTH_SUCCESS } from "./actiontype"

const init={
    isAuthAdmin:false,
}

export const reducer=(state=init,{type,payload})=>{
  switch(type){
    case ADMIN_AUTH_SUCCESS :
        return{
            ...init,
            isAuth:true
        }

    default:return state
  }
}