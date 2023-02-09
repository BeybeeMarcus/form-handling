import React, { useState } from 'react'
import userEmoji from '../image/userEmoji.png'
import lock from '../image/lock.png'


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = { username, password };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        };

        fetch("/api/login", options)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {

                }
            })
            .catch(error => {
                console.error("Error:", error);
                setError("An error occurred while logging in.");
            });
    };

    return (
        <>
            <div className="form-floating" id="loginForm">
                <form className="border border-secondary w-100 d-grid myForm" style={{
                    margin: "20px", padding: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomRightRadius: "20px",
                    borderBottomLeftRadius: "20px", boxShadow: "3px 2px 18px 7px rgba(79,76,76,0.67)",
                    WebkitBoxShadow: "3px 2px 18px 7px rgba(79,76,76,0.67)",
                    MozBoxShadow: "3px 2px 18px 7px rgba(79,76,76,0.67)",
                }} onSubmit={handleSubmit}>
                    <h4>Login Form</h4>

                    {error && (
                        <div className="alert alert-danger">{error}</div>
                    )}

                    <div className="mb-3 row" />
                    <label type="inputUsername" className="col-sm-2 col-form-label">
                    </label>
                    <div className="input-group" />
                    <span className="input-group-text"><img src={userEmoji} style={{ padding: "0px", marginLeft: "-3px", width: "43px", height: "35px" }} />
                        <input
                            type="username"
                            className="form-control"
                            id="inputUsername"
                            placeholder=' Username'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            style={{ margin: "-2px -2px -2px 10px", 
                            height:"40px", 
                                     fontHeight: "50px",
                                     borderTopLeftRadius:"20px",
                                     borderBottomLeftRadius:"20px",
                                     borderTopRightRadius:"20px",
                                     borderBottomRightRadius:"20px"}} />
                    </span>

                    <div className="mb-3 row" />
                    <label type="inputPassword" className="col-sm-2 col-form-label">

                    </label>
                    <div className="input-group" />
                    <span className="input-group-text"><img src={lock} style={{ marginLeft: "-5px", width: "45px", height: "30px" }} />
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            style={{ margin: "-4px -2px -4px 10px", 
                                     height:"40px", 
                                     fontHeight: "50px",
                                     borderTopLeftRadius:"20px",
                                     borderBottomLeftRadius:"20px",
                                     borderTopRightRadius:"20px",
                                     borderBottomRightRadius:"20px"}} />
                    </span>
                    <div className="input-group mb-3" />
                            <input className="form-check-input mt-0" 
                                   type="checkbox" 
                                   value="" 
                                   aria-label="Checkbox for following text input" />
                                    Remember Me
                    <br />
                    <br />
                    <button className="btn btn-success col-sm-12" style={{marginTop: "-10px"}}>Login</button>
                </form>
            </div>

        </>

    )
}
export default Login