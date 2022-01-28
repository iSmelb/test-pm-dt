import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

function UserCardMini() {

    const [like, setLike] = useState(false)
    const [settings, setSettings] = useState(false)

    return (
        <div className='user_card'>
            <div className='photo'>
                    <img src='' alt='photo' />
                </div>
            <div className='info'>
                <div className='main_info'>
                    <h3>Продавец - консультант</h3>
                    <p>Дмитрий, 23 года</p>
                    <p style={{fontSize: '13px'}}>
                        <FontAwesomeIcon style={{marginRight: '12px'}} icon={faMapMarkerAlt}/>
                        Kyiv, Ukraine
                    </p>
                </div>
                <div className='desiredposition'>
                    <p>Координатор BALOX Agency - 4 мес.</p>
                    <p>Оператор кол центра в DELTA - 11 мес.</p>
                </div>
                <div className='status'>
                    <span>Онлайн</span>
                    <p>Обновлено 9 минут назад</p>
                </div>
            </div>
            <div className='like_or_hide'>
                <div className='like'>
                    {like 
                        ? <FontAwesomeIcon onClick={() => setLike(!like)} style={{marginRight: '22px', color: 'red', fontSize: '27px'}} icon={faHeart}/>
                        : <FontAwesomeIcon onClick={() => setLike(!like)} style={{marginRight: '22px', color: 'red', fontSize: '27px' }} icon={faHeartRegular}/>
                    }
                </div>
                <div className='hide'>
                    <FontAwesomeIcon onClick={() => setSettings(!settings)} icon={faEllipsisV}/>
                    <div className={`settings ${!settings && 'hide'}`}>
                        <p>Пожаловаться</p>
                        <p>Скрыть карндидата</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCardMini;
