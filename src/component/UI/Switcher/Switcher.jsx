import React from 'react';
import classes from './Switcher.module.scss'

function Switcher({idHtml, onClick}) {
    return (
        <div className={classes.switcher}>
            <input type="checkbox" id={idHtml} />
            <label onClick={onClick} htmlFor={idHtml}></label>
        </div>
    );
}

export default Switcher;
