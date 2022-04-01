import React from 'react'
import styles from  './NewUser.module.css';

function NewUser() {
  return (
    <div className={styles.NewUser}>
        <div className='container'>
            <div className={styles.loginName}>
                <div>
                    <div>
                        <input placeholder='Логин'/>
                    </div>
                    <div>
                        <input placeholder='Пароль'/>
                    </div>
                </div>
                <div>
                    <div>
                        <input placeholder='Имя'/>
                    </div>
                    <div>
                        <input placeholder='Фамилия'/>
                    </div>
                </div>
            </div>
            <div className={styles.information}>
                <div>
                    <input placeholder='Наименование школы'/>
                </div>
                <div>
                    <input placeholder='Должность'/>
                </div>
                <div>
                    <input placeholder='Адрес проживания'/>
                </div>
                <div className={styles.createUser}>
                    <button>Создать</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewUser