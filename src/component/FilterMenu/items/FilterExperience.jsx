import React, { useState } from 'react';
import CustomCheckbox from '../../UI/Checkbox/CustomCheckbox';
import Switcher from '../../UI/Switcher/Switcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function FilterExperience() {
    const [arrExperience, setArrExperience] = useState([
        'Без опыта', 'До 1 года', 'От 1 до 2 лет', 'От 2 до 5 лет',
        'От 5 до 10 лет', 'Более 10 лет',
    ])
    const value = 603

  return (
      <div className='filter_experience'>
          <h4>Опыт работы</h4>
          <span className='underline'/>
          <div className='experience_checkboxes'>
                {arrExperience.map(duration => 
                    <div key={duration}>
                        <CustomCheckbox name={duration} value={value}/>
                        <span>{value}</span>
                    </div>
                )}
          </div>
          <div className='only_students'>
                <span>
                    <FontAwesomeIcon style={{marginRight: '10px'}} icon={faGraduationCap}/>
                    Только студенты
                </span>
                <Switcher idHtml='switcher_students'/>
            </div>
      </div>
  )
}

export default FilterExperience;
