import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faMapMarkerAlt, faGlobe, } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';


function Header() {
    const [isActiveRole, setIsActiveRole] = useState(false)
    const [isActiveLang, setIsActiveLang] = useState(false)
    const [arrRoles, setArrRoles] = useState(['Соискатель', 'Работодатель', 'HR'])
    const [currectRole, setCurrectRole] = useState(arrRoles[0])
    const [arrLang, setArrLang] = useState(['Ru', 'En', 'Uk'])
    const [currectLang, setCurrectLang] = useState(arrLang[0])

    return (
        <header className='header'>
            <div className='conteiner_for_header'>
                <div className='top_bar'>
                    <div className='role_menu'>
                        <span onClick={(e) => setIsActiveRole(!isActiveRole)}>
                            {currectRole}
                            <span className='arrow' />
                        </span>
                        <ul className={isActiveRole ? 'show' : ''}>
                            {arrRoles.map((role) => <li
                                key={role}
                                onClick={() => setCurrectRole(role)}
                            >
                                {role}
                            </li>)}
                        </ul>
                    </div>
                    <div className='lang_login'>
                        <div className='language'>
                            <span onClick={(e) => setIsActiveLang(!isActiveLang)}>
                                <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faGlobe} />
                                {currectLang}
                                <span className='arrow' />
                            </span>
                            <ul className={isActiveLang ? 'show' : 'hide'}>
                            {arrLang.map((lang) => <li
                                key={lang}
                                onClick={() => setCurrectLang(lang)}
                            >
                                {lang}
                            </li>)}
                            </ul>
                        </div>
                        <div className='logout'>
                            <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faUser} />
                            Юра Марченко
                        </div>
                        <div className='login'>Войти</div>
                    </div>
                </div>
                <div className='search_bar'>
                    <div className='searchInput'>
                        <div className='searchIcon'>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input type="search" name='seachQuest' placeholder='Поиск' />
                    </div>
                    <div className='searchInputCity'>
                        <div className='searchIcon'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <input type="search" name='city' placeholder='Город' />
                    </div>
                    <button className='searchButton'>Найти кандидата</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
