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
                <h3 class="text-center">Register</h3>
                <hr/>
                <h4>Organization</h4>
                <div class="form-outline mb-4 mt-4">
                    <label class="form-label" for="form2Example1">*Organization Name</label>
                    <input type="text" id="form2Example1" class="form-control" v-model="org_name"/>
                    <span class="text-danger" :style="{display:orgNameDisplay}">Please enter a value</span>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-sm-12 form-outline mb-4">
                        <label class="form-label" for="form2Example1">Address Line 1</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="org_address_one"/>
                    </div>
                    <div class="col-lg-6 col-sm-12 form-outline mb-4">
                        <label class="form-label" for="form2Example1">Address Line 2</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="org_address_two"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-12 form-outline mb-4">
                        <label class="form-label" for="form2Example1">City</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="org_city"/>
                    </div>
                    <div class="col-lg-4 col-sm-12 form-outline mb-4">
                        <label class="form-label" for="form2Example1">State</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="org_state"/>
                    </div>
                    <div class="col-lg-4 col-sm-12 form-outline mb-4">
                        <label class="form-label" for="form2Example1">Zip Code</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="org_zip"/>
                    </div>
                </div>
                <i>Fields marked with * are required</i>
                <hr/>
                <h4>User</h4>
                <div class="row mt-4">
                    <div class="col-lg-6 col-sm-12 form-outline mb-4">
                        <label class="form-label" for="form2Example1">*First Name</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="name_first"/>
                        <span class="text-danger" :style="{display:firstNameDisplay}">Please enter a value</span>
                    </div>
                    <div class="col-lg-6 col-sm-12 form-outline mb-4">
                        <label class="form-label" for="form2Example1">*Last Name</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="name_last"/>
                        <span class="text-danger" :style="{display:lastNameDisplay}">Please enter a value</span>
                    </div>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">*Email</label>
                    <input type="email" id="form2Example1" class="form-control" v-model="email"/>
                    <span class="text-danger" :style="{display:emailDisplay}">Please enter a value</span>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">*Username</label>
                    <input type="text" id="form2Example1" class="form-control" v-model="username"/>
                    <span class="text-danger" :style="{display:usernameDisplay}">Please enter a value</span>
                </div>
                <!-- Password input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">*Password</label>
                    <input type="password" id="form2Example2" class="form-control" v-model="password"/>
                    <span class="text-danger" :style="{display:passwordDisplay}">Please enter a value</span>
                </div>
                <!-- Password input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">*Confirm Password</label>
                    <input type="password" id="form2Example2" class="form-control" v-model="confirm_password"/>
                    <span class="text-danger" :style="{display:passwordMatchDisplay}">Passwords do not match</span>
                </div>
                <i class="mb-4">Fields marked with * are required</i>
                <!-- Submit button -->
                <a href="#" class="btn btn-primary btn-block mb-2" @click="register()">Register</a>
                <!-- Register buttons -->
                <div class="text-center">
                    <p>Already a member? <router-link to="/login" >Login</router-link></p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {authUser} from '@/utils'
import axios from 'axios'
export default {
    name: 'Register',
    data(){
        return{
            org_name:null,
            org_address_one:null,
            org_address_two:null,
            org_city:null,
            org_state:null,
            org_zip:null,

            email:null,
            name_first:null,
            name_last:null,
            username:null,
            password:null,
            confirm_password:null,
            clicked_username:false,
            clicked_password:false,

            /* ERRORS */
            orgNameError:false,
            firstNameError:false,
            lastNameError:false,
            emailError:false,
            usernameError:false,
            passwordError:false,
            passwordMatchError:false
        }
    },
    methods:{
        register: function(){
            if(this.username && this.password && this.confirm_password && this.password == this.confirm_password && this.org_name && String(this.email).includes('@')){
                axios.post('http://localhost:5000/register', {
                    "organization":{
                        "name":this.org_name,
                        "address_line_1":this.org_address_one,
                        "address_line_2":this.org_address_two,
                        "country":"USA",
                        "state":this.org_state,
                        "city":this.org_city,
                        "post_code":this.org_zip
                    },
                    "user":{
                        "name_first":this.name_first,
                        "name_last":this.name_last,
                        "username":this.username,
                        "email":this.email,
                        "password":this.password
                    }
                }).then(response => {
                    console.log(response)
                    localStorage.registered = true;
                    window.location.href = '/login';
                })
                .catch((error) => {
                    this.authentication_error = true;
                    console.log(error);
                })
            }
            if(!this.org_name){
                this.orgNameError = true;
            }
            else{
                this.orgNameError = false;
            }
            if(!this.name_first){
                this.firstNameError = true;
            }
            else{
                this.firstNameError = false;
            }
            if(!this.name_last){
                this.lastNameError = true;
            }
            else{
                this.lastNameError = false;
            }
            if(!this.email){
                this.emailError = true;
            }
            else{
                this.emailError = false;
            }
            if(!this.username){
                this.usernameError = true;
            }
            else{
                this.usernameError = false;
            }
            if(!this.password){
                this.passwordError = true;
            }
            else{
                this.passwordError = false;
            }
            if(this.password != this.confirm_password){
                this.passwordMatchError = true;
            }
            else{
                this.passwordMatchError = false;
            }
        }
    },
    computed:{
        orgNameDisplay(){
            if(this.orgNameError){
                return '';
            }
            return 'none';
        },
        firstNameDisplay(){
            if(this.firstNameError){
                return '';
            }
            return 'none';
        },
        lastNameDisplay(){
            if(this.lastNameError){
                return '';
            }
            return 'none';
        },
        emailDisplay(){
            if(this.emailError){
                return '';
            }
            return 'none';
        },
        usernameDisplay(){
            if(this.usernameError){
                return '';
            }
            return 'none';
        },
        passwordDisplay(){
            if(this.passwordError){
                return '';
            }
            return 'none';
        },
        passwordMatchDisplay(){
            if(this.passwordMatchError){
                return '';
            }
            return 'none';
        }
    },
    beforeMount(){
        authUser()
    }
}
</script>
