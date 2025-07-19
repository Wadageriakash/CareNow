import logo from './logo.svg';
import './App.css';
import Signup from './LoginSignup/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './LoginSignup/Login'
import Home from './Dashboard/Home'
import ScheduleNewAppointments from './Appointments/ScheduleNewAppointment'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/newappointment' element={<ScheduleNewAppointments/>}/>
    </Routes>
    </BrowserRouter>
    // <div>
    //   <Singnup/>
    // </div>
  );
}




export default App;
