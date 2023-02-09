import React, { useState, useEffect } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [techStack, setTechStack] = useState([]);

  

  const validateFirstName = () => {
    let error = "";
    if (!firstName) {
      error = "First name is required.";
    } else if (firstName.match(/\d/)) {
      error = "Number is not allowed.";
    } else if (!firstName.match(/^[a-zA-Z\s]{2,50}$/)) {
      error = "Enter at least 2 characters.";
    }
    setFirstNameError(error);
    return error;
  };

  const validateLastName = () => {
    let error = "";
    if (!lastName) {
      error = "Last name is required.";
    } else if (lastName.match(/\d/)) {
      error = "Number is not allowed.";
    } else if (!lastName.match(/^[a-zA-Z\s]{2,50}$/)) {
      error = "Enter at least 2 characters.";
    }
    setLastNameError(error);
    return error;
  };

  const validatePassword = () => {
    let error = "";
    if (!password) {
      error = "Password is required.";
    } else if (password.length < 5) {
      error = "Enter at least 5 characters.";
    }
    setPasswordError(error);
    return error;
  };

  const validateConfirmPassword = () => {
    let error = "";
    if (!confirmPassword) {
      error = "Confirm password is required.";
    } else if (password !== confirmPassword) {
      error = "Password and Confirm password must match.";
    }
    setConfirmPasswordError(error);
    return error;
  };

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFirstName() && !validateLastName() && !validatePassword() && !validateConfirmPassword()) {
      console.log("Submitted Successfully");
      let RegistrationForm = JSON.parse(localStorage.getItem("Registration Form")) || [];
      RegistrationForm.push({ firstName, lastName, password, techStack });
      localStorage.setItem("Registration Form", JSON.stringify(RegistrationForm));
    }
  };

  

  const handleOnChange = (e) => {
    if (e.target.name === 'firstName') {
      setFirstName(e.target.value);
    } else if (e.target.name === 'lastName') {
      setLastName(e.target.value);
    }

    const checkedValue = e.target.value;
  
    if (e.target.checked) {
      const tech = [...techStack, checkedValue]
      
      setTechStack(tech);
    } else {
      setTechStack(techStack.filter((item) => item !== checkedValue));
    }
    
    
    useEffect(() => {
      localStorage.setItem("Registration Form", JSON.stringify({ techStack }));
    }, [techStack]);
    
    useEffect(() => {
      const registrationForm = JSON.parse(localStorage.getItem("Registration Form"));
    
      if (registrationForm) {
        setTechStack(registrationForm.techStack);
      }
    }, []);
    


  
  };

  
   
  return (
    <form onSubmit={handleSubmit} className="border border-secondary d-grid myForm"
      style={{
        width: "350px",
        margin: "20px",
        padding: "20px",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        boxShadow: "3px 2px 18px 7px rgba(79,76,76,0.67)",
        WebkitBoxShadow: "3px 2px 18px 7px rgba(79,76,76,0.67)",
        MozBoxShadow: "3px 2px 18px 7px rgba(79,76,76,0.67)"
      }}
    >
      <h4>Registration Form</h4>
      <br />
      <div className="item1" style={{height:"100px"}}>
        <label htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          className="border border-secondary firstName form-control"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={validateFirstName} />
        {firstNameError && <span style={{ color: "red" }}>{firstNameError}</span>}
        <br />
        <br />
      </div>
      <div className="item2" style={{height:"100px"}}>
        <label htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          className="border border-secondary lastName form-control"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={validateLastName} />
      {lastNameError && <span style={{ color: "red" }}>{lastNameError}</span>}
      <br />
      <br />
      </div>
      <div className="item3" style={{height:"100px"}}>
        <label htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          className="border border-secondary password form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword} />
        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
        <br />
        <br />
      </div>
      <div className="item4" style={{height:"100px"}}>
        <label htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <input
          type="password"
          className="border border-secondary confirmPassword form-control"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validateConfirmPassword} />
        {confirmPasswordError && <span style={{ color: "red" }}>{confirmPasswordError}</span>}
        <br />
        <br />
      </div>
      <h5>Tech Stack</h5>
      <div className="item5">
        <div>
          <div className="input-group mb-3" />
          <input className="form-check-input mt-0"
            type="checkbox"
            value="html"
            name="techStack"
            id="html"
            aria-label="Checkbox for following text input" onChange={handleOnChange} />
          <label htmlFor="html" style={{ marginLeft: "10px" }}>
            HTML
          </label>
        </div>
        <div>
          <div className="input-group mb-3" />
          <input className="form-check-input mt-0"
            type="checkbox"
            value="css"
            name="techStack"
            id="css"
            aria-label="Checkbox for following text input" onChange={handleOnChange} />
          <label htmlFor="css" style={{ marginLeft: "10px" }}>
            CSS
          </label>
        </div>
        <div>
          <div className="input-group mb-3" />
          <input className="form-check-input mt-0"
            type="checkbox"
            value="js"
            name="techStack"
            id="js"
            aria-label="Checkbox for following text input" onChange={handleOnChange} />
          <label htmlFor="js" style={{ marginLeft: "10px" }}>
            JavaScript
          </label>
        </div>
        <div>
          <div className="input-group mb-3" />
          <input className="form-check-input mt-0"
            type="checkbox"
            value="php"
            name="techStack"
            id="php"
            aria-label="Checkbox for following text input" 
            onChange={handleOnChange} />
          <label htmlFor="php" style={{ marginLeft: "10px" }}>
            PHP
          </label>
        </div>
        <div>
          <div className="input-group mb-3" />
          <input className="form-check-input mt-0"
            type="checkbox"
            value="reactjs"
            name="techStack"
            id="reactjs"
            aria-label="Checkbox for following text input" 
            onChange={handleOnChange}  />
          <label htmlFor="reactjs" style={{ marginLeft: "10px" }}>
            ReactJS
          </label>
          <br />
        </div>
      </div>
      <br />
      <button type="submit" className="btn btn-success col-sm-12" style={{ marginTop: "-10px" }}>Submit</button>
    </form>
  );
};


export default RegistrationForm;