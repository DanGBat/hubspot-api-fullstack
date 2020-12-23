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


// if you want to pass data between front and backend, you need the following two lines
app.use(express.urlencoded());
app.use(express.json());


// registerUser catch route from the front end that recieves form submitted entries
app.post('/registerUser', (req, res) => {
  console.log(req.body);

  const options = {
    method: 'POST',
    url: 'https://api.hubapi.com/contacts/v1/contact/',
    qs: { hapikey: myAPIKey },
    headers:
    {
      'Content-Type': 'application/json'
    },
    body:
    {
      properties:
        [{ property: 'email', value: req.body.emailJSON },
        { property: 'firstname', value: req.body.firstnameJSON },
        { property: 'lastname', value: req.body.lastnameJSON },
        { property: 'website', value: req.body.websiteJSON },
        { property: 'company', value: req.body.companyJSON },
        { property: 'phone', value: req.body.phoneJSON },
        { property: 'address', value: req.body.addressJSON },
        { property: 'city', value: req.body.cityJSON },
        { property: 'state', value: req.body.stateJSON },
        { property: 'zip', value: req.body.zipJSON }]
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  res.status(200).json({
    // send a res (response) message to the frontend to show success
    message: 'User Information Succesfully recieved'
  })
});


// registerCustomer catch route from the front end that recieves form submitted entries
app.post('/registerCompany', (req, res) => {
  console.log(req.body);

  const options = {
    method: 'POST',
    url: 'https://api.hubapi.com/companies/v2/companies',
    qs: { hapikey: myAPIKey },
    headers:
      { 'Content-Type': 'application/json' },
    body:
    {
      properties:
        [{
          name: 'name', value: req.body.nameJSON
        },
        {
          name: 'description', value: req.body.descriptionJSON
        }]
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  res.status(200).json({
    // send a res (response) message to the frontend to show success
    message: 'Company Information Succesfully recieved'
  })
});


// createDeal catch route from the front end that recieves form submitted entries
app.post('/registerDeal', (req, res) => {
  console.log(req.body);

  var options = {
    method: 'POST',
    url: 'https://api.hubapi.com/crm/v3/objects/deals',
    qs: {hapikey: myAPIKey },
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    body: {
      properties: {
        amount: req.body.amountJSON,
        closedate: '',
        dealname: req.body.dealnameJSON,
        dealstage: '',
        hubspot_owner_id: '',
        pipeline: 'default'
      }
    },
    json: true
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });

  res.status(200).json({
    // send a res (response) message to the frontend to show success
    message: 'Deal Creation Succesfully recieved'
  })
});


// Associate catch route from the front end that recieves form submitted entries
app.put('/associate', (req, res) => {
  console.log(req.body);

  const options = {
    method: 'PUT',
    url: 'https://api.hubapi.com/crm-associations/v1/associations?',
    qs: { hapikey: myAPIKey },
    headers:
    {
      'Content-Type': 'application/json'
    },
    body:
    {
      "fromObjectId": req.body.userIDJSON,
      "toObjectId": req.body.companyIDJSON,
      "category": "HUBSPOT_DEFINED",
      "definitionId": 1
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  res.status(200).json({
    // send a res (response) message to the frontend to show success
    message: 'Association Link Succesfully recieved'
  })
});


//setup port on local server with a callback function that console logs it's running
//Port number is now located in .env and held in 'PORT' variable so it's hidden.
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});