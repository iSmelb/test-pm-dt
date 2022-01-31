import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';

function UserCardMini({summary}) {
    const [like, setLike] = useState(false)
    const [settings, setSettings] = useState(false)

    return (
        <div className='user_card'>
            <div className='photo'>
                {summary.photo && <img src={summary.photo} alt='photo' /> }
            </div>
            <div className='info'>
                <div className='main_info'>
                    <h3>{summary.category}</h3>
                    <p>Дмитрий, 23 года</p>
                    <p>
                        <FontAwesomeIcon style={{marginRight: '12px'}} icon={faMapMarkerAlt}/>
                        Kyiv, Ukraine
                    </p>
                </div>
                <div className='desiredposition'>
                    <p>{summary.desiredposition[0] ? summary.desiredposition[0].position : 'default_position'}</p>
                    <p>{summary.desiredposition[1] ? summary.desiredposition[1].position : 'default_position'}</p>
                </div>
                <div className='status'>
                    <span className={summary.status ? 'online' : 'offline'}>
                        {summary.status ? 'Онлайн' : 'Оффлайн'}
                    </span>
                    <p>Обновлено {summary.updated_at}</p>
                </div>
            </div>
            <div className='like_or_hide'>
                <div className='like'>
                    {like 
                        ? <FontAwesomeIcon onClick={() => setLike(!like)} style={{ color: 'red', fontSize: '27px'}} icon={faHeart}/>
                        : <FontAwesomeIcon onClick={() => setLike(!like)} style={{ color: 'red', fontSize: '27px' }} icon={faHeartRegular}/>
                    }
                </div>
                <div className='hide' onClick={() => setSettings(!settings)}>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                    <div className={`settings ${!settings ? 'hide' : ''}`}>
                        <p>Пожаловаться</p>
                        <p>Скрыть карндидата</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCardMini;
