import React, { useState } from 'react'
// import Img from "../Images/main.avif"
// import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const userDetail = {
        name:"",
        email:"",
        password:""
    }

    const [data, setData] = useState(userDetail)

    const navigate = useNavigate();
    const handleInput = (event) =>{
        // console.log(event.target.value)
        // console.log(event.target.name)
        const name = event.target.name;
        const value = event.target.value;
        setData({...data, [name]:value})
    }

const handleSubmit =(event)=>{
    event.preventDefault();
    // if(data.name == "" || data.email == "" || data.password == ""){
    //     alert("Please Enter Details")
    // } else {

    
    const getData = JSON.parse(localStorage.getItem("user") || "[]");
    let arr = [];
    arr = [...getData];
    arr.push(data)

    localStorage.setItem("user", JSON.stringify(arr))
    // alert("Signup Successfully !")
    navigate("/login")
    // }
}    

  return (
    <div>
    {/* <Navbar/> */}
        <div className='main-page'>
            <form onSubmit={handleSubmit}>
                <div className='heading'>
                    <p>Sign Up</p>
                </div>
                <div className='account'>
                 <input type='text' name='name' placeholder='Enter your Name' onChange={handleInput} required/>
                 <input type='email' name='email' placeholder='Enter your Email' onChange={handleInput} required/>
                 <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput} required/>
                 <p>Already have an account ? <a href='/login'>Login</a></p>
                </div>
                <button>SignUp</button>
            </form>
            
        </div>
       
    </div>
  )
}

export default Signup