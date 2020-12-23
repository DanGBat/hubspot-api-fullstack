const request = require("request");
// initialise express
const express = require("express");
// set express to app vairiable
const app = express();
// initialise dotnev
const dotenv = require("dotenv");
// initialise path variable
const path = require("path");
// enable dotenv for accessing sensitive data file
// check files for .env file on the same directory level as server.js
dotenv.config({ path: './.env' });
// set port from dotenv file
const port = process.env.PORT;
const myAPIKey = process.env.APIKey;

const email = "danny.gillespie@hotmail.com"
const company

const options = { method: 'GET',
  url: `https://api.hubapi.com/contacts/v1/contact/email/${email}/profile`,
  qs: { hapikey: myAPIKey }}

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});



Example POST URL:
https://api.hubapi.com/companies/v2/domains/hubspot.com/companies?hapikey=demo

Example POST body:
{
  "limit": 2,
  "requestOptions": {
    "properties": [
      "domain",
      "createdate",
      "name",
      "hs_lastmodifieddate"
    ]
  },
  "offset": {
    "isPrimary": true,
    "companyId": 0
  }
}