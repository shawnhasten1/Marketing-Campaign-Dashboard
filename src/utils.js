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
        if(window.location.pathname == '/login' || window.location.pathname == '/register'){
            localStorage.showRegister = false;
            window.location.href = '/';
        }
    })
    .catch((error) => {
        console.log(error);
        console.log(window.location.pathname);
        if(window.location.pathname != '/login' && window.location.pathname != '/register'){
            window.location.href = '/login';
        }
    })
}

export function modalController(target, action){
    console.log(target);
    console.log(action);
    var style_change = 'none';
    if(action == 'dismiss'){
        style_change = 'none';
    }
    else{
        style_change = 'block';
    }
    document.getElementById(target).style.display = style_change;
}