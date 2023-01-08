import { ApolloClient } from 'apollo-client'
import type { ApolloClientOptions } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const link = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://graphqlzero.almansi.me/api',
})

// Cache implementation
const cache = new InMemoryCache()

const options: ApolloClientOptions<any> = {
  cache,
  link
}

// Create the apollo client
export const apolloClient = new ApolloClient(options)
