import React from 'react';
import Switcher from '../../UI/Switcher/Switcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';

function FilterPhoto() {
    return (
        <div className='filter_photo'>
            <div className='icon_text'>
                <FontAwesomeIcon icon={faPortrait} style={{ marginRight: '12px' }} />
                <span>Только с фотографией</span>
            </div>
            <Switcher idHtml={"switcher_photo"}/>
        </div>
    )
}

export default FilterPhoto;
