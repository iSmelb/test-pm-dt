import React, { useState } from 'react';
import { Slider } from '@material-ui/core';

function FilterAge() {
    const min = 18
    const max = 40
    const step = 1
    const [age, setAge] = useState([min,max])

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
                <input type='number'  value={age[0]} onChange={(e) => setAge([e.target.value, age[1]])} />
                до
                <input type='number' value={age[1]} onChange={(e) => setAge([age[0], e.target.value])}/>
                Лет
            </p>
        </div>
    )
}

export default FilterAge;
