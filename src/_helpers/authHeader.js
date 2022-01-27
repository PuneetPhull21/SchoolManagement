export function authHeader(){
    let token = localStorage.getItem('token');

    if(token){
        return {'authorization':'Bearer' +token};
    }
    else{
        return {}
    }
}