import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {

  //! ----------- STATE -----------

  //initialising state of 'user'
  const [user, setUser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    website: "",
    company: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  //initialising state of 'company'
  const [company, setCompany] = useState({
    name: "",
    description: ""
  });

  //initialising state of 'deal'
  const [deal, setDeal] = useState({
    // companyID: "",
    dealname: "",
    // dealstage: "",
    // hubspotowner: "",
    amount: ""
    // dealtype: ""
  });

  //initialising tate of 'IDs'
  const [ids, setIds] = useState({
    userID: "",
    companyID: ""
  });

  //! ----------- USER -----------
  // update user function to update the state of each key as a user types
  const updateUser = (event) => {
    console.log(event.target.value);

    setUser({
      // spread operator ... to update/bring in current state (everything that was already there before it updates again)
      ...user,
      // this finds the key presses by the field input name in the form and updates it's value in the state
      [event.target.name]: event.target.value
    })
  }

  const registerUser = async (event) => {
    // following stops the page reloading itself
    event.preventDefault();
    console.log('registerUserForm submitted sucesfully');

    // create body variable and set it to JSON - Update it with the current state
    const body = JSON.stringify({
      emailJSON: user.email,
      firstnameJSON: user.firstname,
      lastnameJSON: user.lastname,
      websiteJSON: user.website,
      companyJSON: user.company,
      phoneJSON: user.phone,
      addressJSON: user.address,
      cityJSON: user.city,
      stateJSON: user.state,
      zipJSON: user.zip
    })
    // setup the config to set the content type being sent.
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // send data via post to backend route 'registerUser'
    // including the body - 
    // including config - 
    const res = await axios.post('/registerUser', body, config)
    // print the response data from the backend showing success
    console.log(res.data);
  }


  //! ----------- COMPANY -----------
  // update user function to update the state of each key as a user types
  const updateCompany = (event) => {
    console.log(event.target.value);

    setCompany({
      // spread operator ... to update/bring in current state (everything that was already there before it updates again)
      ...company,
      // this finds the key presses by the field input name in the form and updates it's value in the state
      [event.target.name]: event.target.value
    })
  }

  const registerCompany = async (event) => {
    // following stops the page reloading itself
    event.preventDefault();
    console.log('registerCompanyForm submitted sucesfully');

    // create body variable and set it to JSON - Update it with the current state
    const body = JSON.stringify({
      nameJSON: company.name,
      descriptionJSON: company.description
    })
    // setup the config to set the content type being sent.
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // send data via post to backend route 'registerCompany'
    // including the body - 
    // including config - 
    const res = await axios.post('/registerCompany', body, config)
    // print the response data from the backend showing success
    console.log(res.data);
  }
  
  
  //! ----------- DEALS -----------
  // update user function to update the state of each key as a user types
  const updateDeal = (event) => {
    console.log(event.target.value);

    setDeal({
      // spread operator ... to update/bring in current state (everything that was already there before it updates again)
      ...deal,
      // this finds the key presses by the field input name in the form and updates it's value in the state
      [event.target.name]: event.target.value
    })
  }

  const registerDeal = async (event) => {
    // following stops the page reloading itself
    event.preventDefault();
    console.log('createDealForm submitted sucesfully');

    // create body variable and set it to JSON - Update it with the current state
    const body = JSON.stringify({
      // companyIDJSON: deal.companyid,
      dealnameJSON: deal.dealname,
      // dealstageJSON: deal.dealstage,
      // hubspotownerJSON: deal.hubspotowner,
      amountJSON: deal.amount
      // dealtypeJSON: deal.dealtype
    })
    // setup the config to set the content type being sent.
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // send data via post to backend route 'registerCompany'
    // including the body - 
    // including config - 
    const res = await axios.post('/registerDeal', body, config)
    // print the response data from the backend showing success
    console.log(res.data);
  }


  //! ----------- IDs -----------
  // update user function to update the state of each key as a user types
  const updateAssociate = (event) => {
    console.log(event.target.value);

    setIds({
      // spread operator ... to update/bring in current state (everything that was already there before it updates again)
      ...ids,
      // this finds the key presses by the field input name in the form and updates it's value in the state
      [event.target.name]: event.target.value
    })
  }

  const associateUserCompany = async (event) => {
    // following stops the page reloading itself
    event.preventDefault();
    console.log('AssociateForm submitted sucesfully');

    // create body variable and set it to JSON - Update it with the current state
    const body = JSON.stringify({
      userIDJSON: ids.userID,
      companyIDJSON: ids.companyID
    })
    // setup the config to set the content type being sent.
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // send data via post to backend route 'associate'
    // including the body - 
    // including config - 
    const res = await axios.put('/associate', body, config)
    // print the response data from the backend showing success
    console.log(res.data);
  }

  //! ----------- BRIEF LOGS -----------

  console.log("My current state is");
  console.log(user);
  console.log(company);
  console.log(deal);
  console.log(ids);

  //! ----------- RETURNS -----------

  return (
    <div className="App">

      <div className="registerUserDiv">
        <h2>User Registration</h2>

        <form onSubmit={registerUser}>
          <label>email Address:</label>
          <input type="text" onChange={updateUser} name="email" />
          <label>First Name:</label>
          <input type="text" onChange={updateUser} name="firstname" />
          <label>Last Name:</label>
          <input type="text" onChange={updateUser} name="lastname" />
          <label>Website:</label>
          <input type="text" onChange={updateUser} name="website" />
          <label>Company:</label>
          <input type="text" onChange={updateUser} name="company" />
          <label>Phone Number:</label>
          <input type="text" onChange={updateUser} name="phone" />
          <label>Address:</label>
          <input type="text" onChange={updateUser} name="address" />
          <label>City:</label>
          <input type="text" onChange={updateUser} name="city" />
          <label>County:</label>
          <input type="text" onChange={updateUser} name="state" />
          <label>Postcode:</label>
          <input type="text" onChange={updateUser} name="zip" />
          <button className="button" type="submit">Register User</button>
        </form>
      </div>

      <div className="registerCompanyDiv">
        <h2>Company Registration</h2>

        <form onSubmit={registerCompany}>
          <label>Company Name:</label>
          <input type="text" onChange={updateCompany} name="name" />
          <label>Company Description:</label>
          <input type="text" onChange={updateCompany} name="description" />
          <button className="button" type="submit">Register Company</button>
        </form>
      </div>


      <div className="createDealDiv">
        <h2>Create Deal</h2>

        <form onSubmit={registerDeal}>
          {/* <label>Company ID:</label> */}
          {/* <input type="text" onChange={updateDeal} name="companyID" /> */}
          <label>Deal Name:</label>
          <input type="text" onChange={updateDeal} name="dealname" />
          {/* <label>Deal Stage:</label> */}
          {/* <input type="text" onChange={updateDeal} name="dealstage" /> */}
          {/* <label>HubSpot Owner:</label> */}
          {/* <input type="text" onChange={updateDeal} name="hubspotowner" /> */}
          <label>Deal Amount:</label>
          <input type="text" onChange={updateDeal} name="amount" />
          {/* <label>Deal Type:</label>
          <input type="text" onChange={updateDeal} name="dealtype" /> */}
          <button className="button" type="submit">Submit Deal</button>
        </form>
      </div>

      <div className="associateUserDiv">
        <h2>Association</h2>

        <form onSubmit={associateUserCompany}>
          <label>User ID No:</label>
          <input type="text" onChange={updateAssociate} name="userID" />
          <label>Company ID No:</label>
          <input type="text" onChange={updateAssociate} name="companyID" />
          <button className="button" type="submit">Associate</button>
        </form>
      </div>

    </div>
  );
}

export default App;


