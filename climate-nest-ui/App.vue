<!-- App.vue -->
<!-- Purpose: Main application component. -->
<!-- Contents: Vue component that wraps other components. -->

<!-- The template section contains the structure of the component in HTML. 
    In this case, it's a div with the id "app," which will contain the main content of your application. 
    The router-view tag is used for rendering components based on the current route. -->
<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/weather">Weather</router-link>
        <router-view />
    </div>
</template>
  
  <!-- The script section contains the JavaScript logic for the component. 
    It exports a Vue.js component object with a name (App) and an empty components property. -->
<script>
    export default {
        name: 'App',
        components: {},
    };
</script>
  
  <!-- The style section contains the CSS styles for the component.
    It adds some basic styling to center the content, change the font, and set the color. -->
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    router-link {
        margin: 0 10px;
        text-decoration: none;
        color: #3498db;
        font-weight: bold;
    }

    router-link:hover {
        text-decoration: underline;
    }
</style>