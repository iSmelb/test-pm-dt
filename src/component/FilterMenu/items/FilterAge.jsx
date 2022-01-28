import React, { useState } from 'react';
import { Slider } from '@material-ui/core';

function FilterAge() {
    const [age, setAge] = useState([20,30])

    const changeAge = (event, value) => {
        setAge(value)
    }

    return (
        <div className='filter_age'>
            <h4>Возраст</h4>
            <span className='underline' />
            <Slider
                min={18}
                max={40}
                value={age}
                onChange={changeAge}
            />
            <p>
                От
                <input type='number' />
                до
                <input type='number' />
                Лет
            </p>
        </div>
    )
}

export default FilterAge;
