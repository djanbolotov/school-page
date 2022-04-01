import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Login.css';

function Login() {

  return (
    <div className='Login'>
        <h1>
            Школьный образовательный <br/> портал
        </h1>

        <div className='form-container'>
            <form>
                <div>
                    <input placeholder='Логин'/>
                </div>
                <div>
                    <input placeholder='Пароль'/>
                </div>
                <div>
                    <button>
                        <NavLink to='/'>
                        Войти
                        </NavLink>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login