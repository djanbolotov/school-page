import React from 'react'
import './Schedule.css';

function Schedule() {
    let schedule = [
        {
            "name": "Понедельник",
            "arr": [
                "Математика",
                "История",
                "Геометрия",
                "Русский язык",
                "Физическая культура",
            ]
        },
        {
            "name": "Вторник",
            "arr": [
                "Математика",
                "История",
                "Геометрия",
                "Русский язык",
                "Физическая культура",
            ]
        },
        {
            "name": "Среда",
            "arr": [
                "Математика",
                "История",
                "Геометрия",
                "Русский язык",
                "Физическая культура",
            ]
        },
        {
            "name": "Четверг",
            "arr": [
                "Математика",
                "История",
                "Геометрия",
                "Русский язык",
                "Физическая культура",
            ]
        },
        {
            "name": "Пятница",
            "arr": [
                "Математика",
                "История",
                "Геометрия",
                "Русский язык",
                "Физическая культура",
            ]
        }      
    ]
  return (
    <div className='Schedule'>
        <div className='container'>
            <div className='schedule-list'>
            {
                schedule.map((day, index) => {
                    return <div key={index} className='day'>
                            <h2>{day.name}</h2>
                            <ol>
                            {
                                day.arr.map((lesson, id) => {
                                    return <li key={id}> {lesson} </li>
                                })
                            }
                            </ol>
                    </div>
                })
            }
            </div>
            <div className='save'>
                <button>Сохранить</button>
            </div>
        </div>
    </div>
  )
}

export default Schedule