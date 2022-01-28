import React from 'react';
import classes from './CustomCheckbox.module.scss'

function CustomCheckbox({children, ...props}) {
    return (
        <label className={classes.custom_checkbox}>
            <input type="checkbox" {...props} />
            <span>{children} {props.name}</span>
        </label>
    )
}

export default CustomCheckbox;
