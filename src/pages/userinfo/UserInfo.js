import React from 'react'
import styles from  './UserInfo.module.css';
import UserImage from '../../assets/images/UserImage.png';

function UserInfo() {
  return (
    <div className={styles.NewUser}>
        <div className='container'>
            <div className={styles.imageName}>
                <div>
                    <div className={styles.UserImage}>
                        <img alt='#' src={UserImage}/>
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
                    <div>
                    <button>Редактировать</button>
                    </div>
                    <div>
                    <button>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfo;