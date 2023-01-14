<!--VueJS Template for Navbar sidebar that is collapsible using bootstrap-->
<template>
    <nav class="navbar shadow" @mouseleave="toggleDropdown($event)">
      <ul class="navbar-nav">
        <li class="logo">
          <router-link to="/" class="nav-link">
            <span class="link-text">dashboard</span>
            <font-awesome-icon icon="fa-solid fa-angles-right" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link" :class="{active:path_name=='/'}">
            <font-awesome-icon icon="fa-solid fa-home" />
            <span class="link-text">Campaigns</span>
          </router-link>
        </li>
        <li class="nav-item" @click="toggleDropdown($event)" data-target="contacts" :class="{active:path_name=='/contacts'}">
          <a href="#" class="nav-link">
            <font-awesome-icon icon="fa-solid fa-users" />
            <span class="link-text">Contacts</span>
          </a>
          <ul class="nested-nav" dropdown-value="contacts">
            <li class="nav-item">
              <router-link to="/" class="nav-link" :class="{active:path_name=='/'}">
                <span class="link-text">Contact List</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" :class="{active:path_name=='/'}">
                <span class="link-text">Batch Upload</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item" :class="{active:path_name=='/account'}">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="fa-solid fa-person" />
            <span class="link-text">Account</span>
          </router-link>
        </li>
        <li class="nav-item" :class="{active:path_name=='/settings'}">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="fa-solid fa-gear" />
            <span class="link-text">Settings</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/logout" class="nav-link">
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
            <span class="link-text">Log Out</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <!--VueJS Script for Navbar sidebar that is collapsible using bootstrap-->
  <script>
  export default {
    name: 'Navbar',
    data: function(){
      return {
        path_name: this.$route.path
      }
    },
    methods:{
      toggleDropdown: function(e){
        var navlink = e.target;
        if(e.target.classList.contains('nav-link') == false){
          navlink = e.target.parentNode;
          if(navlink.classList.contains('nav-link') == false){
            navlink = null;
          }
        }
        var navlinks = document.getElementsByClassName('active-override');
        for(var i=0; i<navlinks.length; i++){
          navlinks[i].classList.remove('active-override');
        }
        if(navlink != null){
          if(navlink.getAttribute('dropdown') != 'true'){
            navlink.classList.add('active-override');
            navlink.setAttribute('dropdown', 'true');
          }
          else{
            navlink.classList.remove('active-override');
            navlink.setAttribute('dropdown', 'false');
          }
        }

        var dropdown = e.target.parentNode.getAttribute('data-target');
        if(dropdown == null){
          dropdown = e.target.parentNode.parentNode.getAttribute('data-target');
        }
        var dropdowns = document.getElementsByClassName('nested-nav');
        for(i=0; i<dropdowns.length; i++){
          if(dropdowns[i].getAttribute('dropdown-value') == dropdown){
            dropdowns[i].classList.toggle('active');
          }
          else{
            dropdowns[i].classList.remove('active');
          }
        }
      }
    },
    computed:{
      setNavActive: function(){
        console.log(this);
        return true;
      }
    }
  }
  </script>
  
  <!--VueJS Style for Navbar sidebar that is collapsible using bootstrap-->
  <style scoped>
  </style>