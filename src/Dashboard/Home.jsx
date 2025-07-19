import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from 'react'

const Home = () =>{
    const[showNav, setShowNav] = useState(false);

    return(
        <div>
            {/* <Navbar/> */}
            <header>
                <GiHamburgerMenu  onClick={() => setShowNav(!showNav)}/>
            </header>
            {/* {showNav && <Sidebar/>} */}
            <Sidebar show={showNav}/>
            <div className='home'>
                <h2>Welcome Home Page !</h2>
            </div>
        </div>
    )
}

export default Home