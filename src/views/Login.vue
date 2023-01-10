<template>
    <div class="container">
        <div class="col-12 mt-4" style="display:flex; justify-content:center;">
            <img src="@/assets/logo.png"/>
        </div>
        <div class="col-12" style="display:flex; justify-content:center;">
            <h1>Campaign Dashboard</h1>
        </div>
        <div class="col-12 mt-4" style="display:flex; justify-content:center;">
            <form class="card p-4 col-lg-6 bg-primary-2">
                <!-- Email input -->
                <div class="form-outline mb-4 mt-4">
                    <input type="email" id="form2Example1" class="form-control" v-model="username"/>
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>
                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" v-model="password"/>
                    <label class="form-label" for="form2Example2">Password</label>
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
                <a href="#" class="btn btn-primary btn-block mb-4" @click="authenticate()">Sign in</a>
                <!-- Register buttons -->
                <div class="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
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
        }
    },
    methods:{
        authenticate: function(){
            axios.post('http://localhost:5000/login', {
                "username":this.username,
                "password":this.password
            }).then(response => {
                console.log(response.token);
                localStorage.Authorization = response.data['token'];
                authUser();
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
    beforeMount(){
        authUser()
    }
}
</script>
