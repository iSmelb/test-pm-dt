import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import Switcher from '../../UI/Switcher/Switcher';

function FilterOffer() {
    const [paypal, setPaypal] = useState([20, 30])

    const changePaypal = (event, value) => {
        setPaypal(value)
    }

    return (
        <div className="filter_offer">
            <h4>Желаемая зарплата</h4>
            <span className='underline' />
            <Slider
                min={18}
                max={40}
                value={paypal}
                onChange={changePaypal}
            />
            <p>
                От
                <input type='number' />
                до
                <input type='number' />
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
