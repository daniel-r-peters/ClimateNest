// main.js
// Purpose: Entry point for Vue.js application.
// Contents: Initializes Vue app and configures plugins.

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    // You'll add the endponit when you set up your GraphQL server
    uri: 'YOUR_GRAPHQL_ENDPOINT',
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

new Vue({
    render: h => h(App),
    apolloProvider,

}).$mount('#app');