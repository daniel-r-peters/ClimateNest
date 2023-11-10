// main.js
// Purpose: Entry point for Vue.js application.
// Contents: Initializes Vue app and configures plugins.

import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';