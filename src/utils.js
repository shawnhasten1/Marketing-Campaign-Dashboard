import axios from 'axios'
export function authUser(){
    var config = {
        headers:{
            Authorization:localStorage.Authorization
        }
    };
    axios.get("http://localhost:5000/users", config)
    .then(response => {
        console.log(response.status);
        console.log(window.location.pathname);
        if(window.location.pathname == '/login'){
            window.location.href = '/';
        }
    })
    .catch((error) => {
        console.log(error);
        console.log(window.location.pathname);
        if(window.location.pathname != '/login'){
            window.location.href = '/login';
        }
    })
}