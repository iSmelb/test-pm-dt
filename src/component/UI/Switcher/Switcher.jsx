import React from 'react';
import classes from './Switcher.module.scss'

function Switcher({idHtml}) {
    return (
        <div className={classes.switcher}>
            <input type="checkbox" id={idHtml} />
            <label htmlFor={idHtml}></label>
        </div>
    );
}

export default Switcher;
