import React from 'react'
import { NavLink } from 'react-router-dom';
import './Class.css';

function Class({navig}) {
    let classes = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className='Class'>
       <div className='container'>
           <div className='Grades'>
           {
            classes.map((grade, id) => {
                return <div key={id} className='grade'>
                   <h2>
                   <NavLink to={navig}>
                   {grade} - класс
                   </NavLink>
                   </h2>
                </div>
            })
            }
           </div>
       </div>
    </div>
  )
}

export default Class