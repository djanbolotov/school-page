import React, { useState } from 'react'
import CloseIcon from '../../assets/icons/Close.png';
import LogoIcon from '../../assets/images/Logo.png';
import MainIcon from '../../assets/icons/Home.png';
import ScheduleIcon from '../../assets/icons/Schedule.png';
import TeacherIcon from '../../assets/icons/Teacher.png';
import NewUserIcon from '../../assets/icons/Add User Male.png';
import StudentIcon from '../../assets/icons/Student Male.png';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

function SideBar() {
  
  return (
    <div className='sidebar'>
        <div className='close'>
            <div className='closeIcon'>
            <img alt='#' src={CloseIcon}/>
            </div>
        </div>
        <div className='logo'>
        <div className='logo-icon'>
            <img alt='#' src={LogoIcon}/>
        </div>
        </div>
        <div className='menu'>
          <div className='menu-item'>
            <h2>
              <NavLink to="/">
                Главная
              </NavLink>
            </h2>
            <div className='icon'>
              <img alt='#' src={MainIcon}/>
            </div>
          </div>
          <div className='menu-item'>
            <h2>
            <NavLink to="/classes1">
                Расписание
              </NavLink>
            </h2>
            <div className='icon'>
              <img alt='#' src={ScheduleIcon}/>
            </div>
          </div>
          <div className='menu-item'>
            <h2>
            <NavLink to="/users">
                Учителя
              </NavLink>
            </h2>
            <div className='icon'>
              <img alt='#' src={TeacherIcon}/>
            </div>
          </div>
          <div className='menu-item'>
            <h2>
            <NavLink to="/classes">
                Ученики
              </NavLink>
            </h2>
            <div className='icon'>
              <img alt='#' src={StudentIcon}/>
            </div>
          </div>
          <div className='menu-item'>
            <h2>
            <NavLink to="/new-user">
                Создать
              </NavLink>
            </h2>
            <div className='icon'>
              <img alt='#' src={NewUserIcon}/>
            </div>
          </div>
        </div>
        <div className='exit'>
            <button>
            <NavLink to="/login">
                Выйти
              </NavLink>
            </button>
          </div>
    </div>
  )
}

export default SideBar;