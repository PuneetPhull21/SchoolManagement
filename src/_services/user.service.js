//import {authHeader} from '../_helpers';

export const userService = {
    login,
}


function login (username,password){
    const requestOptions = {
      method :'POST',
      headers : {'Content-Type':'application/json'},
      body:JSON.stringify({username,password})
    }
    return fetch('',requestOptions).then(handleResponse).then(user =>{
        //store the details and jwt token in localstorage
        localStorage.setItem('token',JSON.stringify(user));
        return user;
    })

}



function logout (){
    localStorage.removeItem('user');
}

function handleResponse(response){
    return response.text().then(text =>{
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401){
                // auto logout if 401
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    })
}
