import React, { useState } from 'react';
import CustomCheckbox from '../../UI/Checkbox/CustomCheckbox';

function FilterEmployment() {
    const [employment, setEmployment] = useState([
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
        }
    ])

    return (
        <div className='filter_employment'>
            <h4>Тип занятости</h4>
            <span className='underline' />
            <div className='list_employment'>
                {employment.map(variable => 
                    <div className='employment_item' key={variable.name}>
                        <CustomCheckbox name={variable.name} value={variable.value}/>
                        <span>{variable.value}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterEmployment;
