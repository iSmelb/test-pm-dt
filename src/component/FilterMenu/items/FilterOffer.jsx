import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import Switcher from '../../UI/Switcher/Switcher';

function FilterOffer() {
    const min = 10000
    const max = 100000
    const step = 1000
    const [paypal, setPaypal] = useState([min, max])

    const changePaypal = (event, value) => {
        setPaypal(value)
    }

    return (
        <div className="filter_offer">
            <h4>Желаемая зарплата</h4>
            <span className='underline' />
            <Slider
                min={min}
                max={max}
                step={step}
                value={paypal}
                onChange={changePaypal}
            />
            <p>
                От
                <input type='number' value={paypal[0]} onChange={(e) => setPaypal([e.target.value, paypal[1]])}/>
                до
                <input type='number' value={paypal[1]} onChange={(e) => setPaypal([paypal[0], e.target.value])}/>
                <span>
                    грн
                    <span className='arrow'/>
                </span>
            </p>
            <div className='hide_without_paypal'>
                <span>Не показывать без зарплаты</span>
                <Switcher idHtml='switcher_paypal'/>
            </div>
        </div>
    )
}

export default FilterOffer;
