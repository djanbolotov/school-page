import React from 'react'
import { Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import './ListOfUsers.css';

function ListOfUsers() {
    let users = [
        'Djanbolotov Askabek',
        'Sharshenaliev Orozobek',
        'Sultanaliev Arsen',
        'Bakytbekova Minar',
        'Omurbekova Jyldyz',
        'Stroikov Igor',
        'Melihov Danil',
        'Omurbekova Jyldyz',
    ]
  return (
    <div className='ListOfUsers'>
        <div className='container'>
        <div className='UsersList'>
            {
                users.map((user, id) => {
                    return <div  key={id} className='User'>
                        <h2> <NavLink to='/user-info'>
                        {user}
                            </NavLink> </h2>
                    </div>
                })
            }
        </div>
    </div>
    </div>
  )
}

export default ListOfUsers;