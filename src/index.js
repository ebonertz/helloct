import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createRequestBuilder } from '@commercetools/api-request-builder'
import { config,host }  from './config.js'
import "babel-polyfill";

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow(config)

const httpMiddleware = createHttpMiddleware(host)

const client = createClient({
  middlewares: [
    authMiddleware,
    httpMiddleware
  ],
})

// Define requestBuilder variable with project key option
const requestBuilder = createRequestBuilder({
  projectKey: config.projectKey
})

// Use request builder helper to build custom URIs
const productsUri = requestBuilder.products
      .build()

const customersUri = requestBuilder.customers
      .build()

const channelsUri = requestBuilder.channels
      .build()

const requestProducts = {
    uri: productsUri,
    method: 'GET'
}

const requestCustomers = {
  uri: customersUri,
  method: 'GET'
}

const requestChannels = {
  uri: channelsUri,
  method: 'GET'
}

const getAllChannels = async() => {
  let channels = '';
  channels = await client.execute(requestChannels)
    .then(response => response.body.results)
    return channels
}

const getAllCustomers = async() => {
  let customers = '';
  customers = await client.execute(requestCustomers)
   .then(response => response.body.results)
  return customers
}

const getAllProducts = async() => {
  let products = '';
  products = await client.execute(requestProducts)
    .then(response => response.body.results)
  return products
}

getAllChannels()
  .then((channels) => {
    console.log("Channels:",channels);
  })
  .catch((error) => {
    console.log(error);
  });
getAllCustomers()
  .then((customers) => {
    console.log("Customers:", customers);
  })
  .catch((error) => {
    console.log(error);
  });
getAllProducts()
  .then((products) => {
    console.log("Products:", products)
  })
  .catch((error) => {
    console.log(error);
  });

// const p1 = client.execute(requestCustomers)
// const p2 = client.execute(requestProducts)
// const p3 = client.execute(requestChannels)
//
// //Executes all the requests and returns promises containing all the responses
// Promise.all([p1,p2,p3])
//        .then((responses) => {
//          responses.forEach((response) => {
//           console.log(response.body.results)
//         });
//        })
//        .catch((reason) => {
//          console.log(reason)
//        })
