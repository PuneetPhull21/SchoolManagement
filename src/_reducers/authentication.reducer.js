import {userConstant} from '../_constants';
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { inLoggedIn:true,user} :{};

export  function authentication(state = initialState,action){
 
    switch(action.type){
        case userConstant.LOGIN_REQUEST:
            return {
                inLoggedIn:true,
                user:action.user
            }
        case userConstant.LOGIN_SUCCESS:
            return {
                inLoggedIn:true,
                user:action.user,
            }
        case userConstant.LOGIN_FAILURE:
            return {};
            
        case userConstant.LOGOUT_REQUEST:
            return {};
         default :
         return state;   
    }
}