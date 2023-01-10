<!--VueJS Template for Navbar sidebar that is collapsible using bootstrap-->
<template>
    <nav class="navbar shadow">
      <ul class="navbar-nav">
        <li class="logo">
          <router-link to="/" class="nav-link">
            <span class="link-text">dashboard</span>
            <font-awesome-icon icon="fa-solid fa-angles-right" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="fa-solid fa-home" />
            <span class="link-text">Campaigns</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="fa-solid fa-users" />
            <span class="link-text">Contacts</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="fa-solid fa-person" />
            <span class="link-text">Account</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="fa-solid fa-gear" />
            <span class="link-text">Settings</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
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
    name: 'Navbar'
  }
  </script>
  
  <!--VueJS Style for Navbar sidebar that is collapsible using bootstrap-->
  <style scoped>
  </style>