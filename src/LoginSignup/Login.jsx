import React, {useState} from "react";
// import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Import the CSS file here

const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [msg, setMsg] = useState("");
const navigate = useNavigate();

  const handleInput =(event) =>{
    const value = event.target.value; 
    const name = event.target.name; 
    if("email" == name){
      setEmail(value)
    }
    if("password" == name){
      setPassword(value)  
    }

  }

  const handleSubmit  = (event) =>{
    event.preventDefault();
    if(email=="" || password==""){
      alert("Please Enter Details !")
    } else {
      let getDetails = JSON.parse(localStorage.getItem("user"))
    console.log(getDetails);
    getDetails.map((curValue)=>{
      console.log(curValue.email);
      let storeEmail = curValue.email;
      let storePassword = curValue.password;
      if(storeEmail == email && storePassword == password){
        alert("Login Successfully ! ")
        navigate("/home")
      } else {
      return   setMsg("Invalid Email or Password !")
      }
    })
    }
    
  }


  return (
    <div>
      {/* <Navbar /> */}
      <div className="loginBox">
        <p className='errMsg'>{msg}</p>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className="heading">
            <p>Welcome to CareNow</p>
          </div>
          <div className="account">
            <input tpe="text" 
            name="email" 
            placeholder="Enter your Email" 
            required
            onChange={handleInput} 
            />
            <input
              tpe="password"
              name="password"
              placeholder="Enter your Password"
              required
              onChange={handleInput}
            />
            <p>
              Don't have an account? <a href="/sign-up">Signup</a>
            </p>
          </div>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
