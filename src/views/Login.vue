<template>
    <div class="container">
        <div class="col-12 mt-4" style="display:flex; justify-content:center;">
            <img src="@/assets/logo.png"/>
        </div>
        <div class="col-12" style="display:flex; justify-content:center;">
            <h1>Campaign Dashboard</h1>
        </div>
        <div class="col-12 mt-4" style="display:flex; justify-content:center;">
            <form class="card login-card p-4 col-lg-6 bg-primary-2">
                <!-- Email input -->
                <h3 class="text-center">Login</h3>
                <hr/>
                <i :style="{display:showRegister}">Successfully Registered!</i>
                <div class="form-outline mb-4 mt-4">
                    <label class="form-label" for="form2Example1">Username</label>
                    <input type="text" id="form2Example1" class="form-control" v-model="username" @click="clicked_username = true;" v-on:keyup.enter="authenticate()"/>
                    <span class="text-danger" :style="{display:usernameError}">Please enter a username</span>
                </div>
                <!-- Password input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" class="form-control" v-model="password" @click="clicked_password = true;" v-on:keyup.enter="authenticate()"/>
                    <span class="text-danger" :style="{display:passwordError}">Please enter a password</span>
                </div>
                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <!-- Checkbox -->
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>
                    <div class="col">
                        <!-- Simple link -->
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <!-- Submit button -->
                <a href="#" class="btn btn-primary btn-block mb-2" @click="authenticate()">Sign in</a>
                <span class="text-danger text-center mb-4" :style="{display:authenticationError}">Credentials do not match!</span>
                <!-- Register buttons -->
                <div class="text-center">
                    <p>Not a member? <router-link to="/register" >Register</router-link></p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {authUser} from '@/utils'
import axios from 'axios'
export default {
    name: 'Login',
    data(){
        return{
            username:null,
            password:null,
            clicked_username:false,
            clicked_password:false,
            authentication_error:false
        }
    },
    methods:{
        authenticate: function(){
            if(this.username && this.password){
                axios.post('http://localhost:5000/login', {
                    "username":this.username,
                    "password":this.password
                }).then(response => {
                    console.log(response.token);
                    localStorage.Authorization = response.data['token'];
                    authUser();
                })
                .catch((error) => {
                    this.authentication_error = true;
                    console.log(error);
                })
            }
        }
    },
    computed:{
        usernameError(){
            if(this.clicked_password && this.clicked_username){
                if(this.username == null || this.username === undefined || this.username == '') return '';
            } 
            return 'none';
        },
        passwordError(){
            return 'none';
        },
        authenticationError(){
            if(this.authentication_error)return '';
            return 'none';
        },
        showRegister(){
            if(localStorage.showRegister) return '';
            return 'none';
        }
    },
    beforeMount(){
        authUser()
    }
}
</script>
