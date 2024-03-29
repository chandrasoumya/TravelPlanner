import axios from "axios";
import {  useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [mobile,setMobile] = useState();
    const [password,setPassword] = useState();
    const [data,setData] = useState("");

    const fetchData = ()=>{
        axios.get(`${window.location.origin}/users/${mobile}`)
        .then((res)=>{
            setData(res.data);
        })
        .catch((error) => {
            alert("We are facing some problem, please try again later");
            console.error(error); 
        })
    };

    const navigate = useNavigate();
    
    const getData =()=>{
        fetchData();
        if(data){
            if (data.Password === password) {
                navigate("/home" , {state: {mobile: mobile}});
            } 
            else {
                alert("incorrect password")
            }
        }
        else{
            alert("user not found");
        }
    }

    useEffect(()=>{
        fetchData();
    })


    return (
        <div className="login">
            <h2>Login</h2>
            <br/>
            <label>Mobile number</label>
            <input type="number" name="number" id="number" required onChange={(e)=>{setMobile(e.target.value)}}/>
            <br/>
            <label>Password</label>
            <input type="password" name="password" id="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <button onClick={getData}>Login</button>
        </div>
    )
}

export default Login;
