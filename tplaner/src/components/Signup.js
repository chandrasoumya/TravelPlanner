import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const saveData = () => {
        return new Promise((resolve, reject) => {
            let userData ={
                Name: name,
                Mobile: mobile,
                Password: password
            };
            axios.post(`${window.location.origin}/users/`, userData)
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    alert("We are facing some problem, please try again later: " + error.message);
                    reject(error);
                });
        });
    };

    const allFields = () => {
        return name.trim() !== "" && mobile.trim() !== "" && password.trim() !== "";
    };

    const navigate = useNavigate();

    const savingData = () => {
        if (!allFields()) {
            alert("Please enter all the required data");
        } else {
            saveData()
                .then(() => {
                    navigate('welcome',{state: {mobile: mobile}});
                });
        }
    };

    return (
        <div className="signup">
            <h2>Signup</h2>
            <label>Name</label>
            <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <label>Mobile number</label>
            <input type="tel" name="mobile" id="mobile" required value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            <br/>
            <label>Password</label>
            <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button onClick={savingData}>Signup</button>
        </div>
    );
};

export default Signup;
