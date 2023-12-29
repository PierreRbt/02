import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MemberService from '../services/MemberService';

const CreateMemberComponent = () => { 
  const navigate = useNavigate();
  const [state, setState] = useState({
  firstName: "",
  lastName: "",
  email: ""
});

const changeFirstNameHandler = (event) => {
  setState({ ...state, firstName: event.target.value });
};

const changeLastNameHandler = (event) => {
  setState({ ...state, lastName: event.target.value });
};

const changeEmailAddressHandler = (event) => {
  setState({ ...state, email: event.target.value });
};

const saveMember = (e) => {
  e.preventDefault();
  let member = {
    firstName: state.firstName, 
    lastName: state.lastName, 
    email: state.email
  };
  MemberService.createMember(member).then(res =>{
    navigate("/members");
  })
};

const cancel = () => {
  // Add logic to cancel
  navigate('/members');
};

    return (
      <div>
        <div className = "container">
          <div className = "row">
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className="text-center">Add Member</h3>
              <div className = "card-body">
                <form> 
                  <div className = "form-group">
                    <label>First Name</label>
                    <input placeholder="First Name" name="firstName"
                    className='form-control' value={state.firstName} onChange={changeFirstNameHandler}/>
                  </div>
                  <div className = "form-group">
                    <label>Last Name</label>
                    <input placeholder="Last Name" name="lastName"
                    className='form-control' value={state.lastName} onChange={changeLastNameHandler}/>
                  </div>
                  <div className = "form-group">
                    <label>Email Adress</label>
                    <input placeholder="Email Adress" name="emailAdress"
                    className='form-control' value={state.email} onChange={changeEmailAddressHandler}/>
                  </div>

                  <button className="btn btn-success" onClick={saveMember}>Save</button>
                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
               </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

  export default CreateMemberComponent;
