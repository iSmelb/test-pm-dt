import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faMapMarkerAlt, faGlobe, } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';


function Header() {
    const [isActiveRole, setIsActiveRole] = useState(false)
    const [isActiveLang, setIsActiveLang] = useState(false)

    return (
        <header className='header'>
            <div className='conteiner_for_header'>
                <div className='top_bar'>
                    <div className='role_menu'>
                        <span onClick={(e) => setIsActiveRole(!isActiveRole)}>
                            Соискатель
                            <span className='arrow'/>
                        </span>
                        <ul className={isActiveRole ? 'show' : 'hide'}>
                            <li>Соискатель</li>
                            <li>Работодатель</li>
                            <li>HR</li>
                        </ul>
                    </div>
                    <div className='lang_login'>
                        <div className='language'>
                            <span onClick={(e) => setIsActiveLang(!isActiveLang)}>
                                <FontAwesomeIcon style={{marginRight: '5px'}} icon={faGlobe}/>
                                RU
                                <span className='arrow'/>
                            </span>
                            <ul className={isActiveLang ? 'show' : 'hide'}>
                                <li>Ru</li>
                                <li>En</li>
                                <li>Uk</li>
                            </ul>
                        </div>
                        <div className='logout'>
                            <FontAwesomeIcon style={{marginRight: '15px'}} icon={faUser}/>
                            Юра Марченко
                        </div>
                        <div className='login'>Войти</div>
                    </div>
                </div>
                <div className='search_bar'>
                    <div className='searchInput'>
                        <div className='searchIcon'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                        <input type="search" name='seachQuest' placeholder='Поиск'/>
                    </div>
                    <div className='searchInputCity'>
                        <div className='searchIcon'>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        </div>
                        <input type="search" name='city' placeholder='Город'/>
                    </div>
                    <button className='searchButton'>Найти кандидата</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
