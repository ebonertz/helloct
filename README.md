# Node.js Hello API

Simple Node.js based application that fetches customers and products from a commercetools project.

Uses commercetools [nodejs SDK](https://commercetools.github.io/nodejs/sdk/)

# Setup
1. Install the latest version of node on your system
2. Clone this repository
3. Copy your Client Id, Client Secret and Project Key from the commercetools [Merchant Center](https://mc.commercetools.co)
4. Insert these strings into the config.js file
5. Verify your Auth and http hosts. This is dependent on which datacenter your commercetools project is hosted on.

```
US
Auth Host
https://auth.commercetools.co
http Host
https://api.commercetools.co

EU
Auth Host
https://auth.sphere.io
http Host
https://api.sphere.io


```

# Request Builder

Build custom URI's for your requests

More info [here](https://commercetools.github.io/nodejs/sdk/api/apiRequestBuilder.html)

# Build and Start

Gulp runs build and start command for you

On build code is transpiled by babel from /src to /dist

On start node runs the index file from /dist


```
$ npm install

$ gulp

```
