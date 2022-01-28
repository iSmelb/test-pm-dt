import React, { useState } from 'react';
import CustomCheckbox from '../../UI/Checkbox/CustomCheckbox';

function FilterEducation() {
    const [education, setEducation] = useState([
        {
            name: 'Полная занятость',
            value: 34567 
        },
        {
            name: 'Неполная занятость',
            value: 876
        },
        {
            name: 'Удаленная работа',
            value: 1234
        },
        {
            name: 'Среднее',
            value: 8764
        }
    ])
    
    return (
        <div className='filter_education'>
            <h4>Образование</h4>
            <span className='underline' />
            <div className='list_education'>
                {education.map(variable => 
                    <div className='education_item' key={variable.name}>
                        <CustomCheckbox name={variable.name} value={variable.value}/>
                        <span>{variable.value}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterEducation;
