import React from 'react'
import { Routes, Route } from "react-router-dom";
import SideBar from '../../componennts/sidebar/SideBar';
import ListOfUsers from '../listofusers/ListOfUsers';
import NewUser from '../newuser/NewUser';
import Schedule from '../schedule/Schedule';
import Class from '../studentclass/Class';
import User from '../user/User';
import UserInfo from '../userinfo/UserInfo';
import Estimates from '../estimates/Estimates';
import Attendance from '../attendance/Attendance';
import EstimateAndAttendance from '../estimateandattendance/EstimateAndAttandance';
import './Main.css';

function Main() {
  return (
        <div className='main'>
        <SideBar/>
          <div>
          <Routes>
            <Route exact path="/new-user" element={<NewUser/>}/>
            <Route exact path="/user-info" element={<UserInfo/>}/>
            <Route path="/" element={<User/>}/>
            <Route exact path='/classes' element={<Class navig={'/users'}/>}/>
            <Route exact path='/classes1' element={<Class navig={'/schedule'}/>}/>
            <Route exact path='/users' element={<ListOfUsers/>}/>
            <Route exact path='/schedule' element={<Schedule/>}/>
            <Route exact path='/estimates' element={<Estimates/>}/>
            <Route exact path='/attendance' element={<Attendance/>}/>
            <Route exact path='/estimateandattendance' element={<EstimateAndAttendance/>}/>
          </Routes>
          </div>
      </div>
  )
}

export default Main;