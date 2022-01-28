import React, { useState } from 'react';
import CustomCheckbox from '../../UI/Checkbox/CustomCheckbox';
import spain from '../../../images/flags/spain.svg'
import united from '../../../images/flags/united.svg'
import germany from '../../../images/flags/germany.svg'
import poland from '../../../images/flags/poland.svg'
import russia from '../../../images/flags/russia.svg'
import ukraine from '../../../images/flags/ukraine.svg'

function FilterLanguage() {
    const [languages, setLanguages] = useState([
        {
            name: 'Английский',
            path: united
        },
        {
            name: 'Русский',
            path: russia 
        },
        {
            name: 'Украинский',
            path: ukraine
        },
        {
            name: 'Немецкий',
            path: germany
        },
        {
            name: 'Польский',
            path: poland
        },
        {
            name: 'Испанский',
            path: spain
        },
    ])
    const [languagesLvl, setLanguagesLvl] = useState([
        '(А1) – начальный', '(А2) – ниже среднего', '(В1) – средний', '(В2) – выше среднего', '(C1) – продвинутый', '(C2) – профессиональный уровень владения'
    ])
    const [activeArrow, setActiveArrow] = useState(false)
    const value = 603
    const valueLvl = 73

    const show = (e) => {
        const ulForShow = e.target.parentNode.parentNode.querySelector('ul')
        const arrow = e.target
        arrow.classList.toggle('reverse')
        ulForShow.classList.toggle('hide')
    }

    return (
        <div className='filter_language'>
            <h4>Владение языками</h4>
            <span className='underline' />
            <div className='language_list'>
                {languages.map(language =>
                    <div className='checkbox_language' key={language.name}>
                        <CustomCheckbox name={language.name} value={value.name}>
                            <img src={language.path} alt={language.name + 'icon'} />
                        </CustomCheckbox>
                        <span>
                            {value}
                            <span className='arrow' onClick={(e) => show(e)}/>
                        </span>
                        <ul className='radio_language hide'>
                            {languagesLvl.map(lvl => <li key={lvl}>
                                <label>
                                    <input type="radio" name='languageLvl' value={lvl} />
                                    {lvl}
                                </label>
                                <span>{valueLvl}</span>
                            </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterLanguage;
