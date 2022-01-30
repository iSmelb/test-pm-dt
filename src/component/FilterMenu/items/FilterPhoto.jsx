import React from 'react';
import Switcher from '../../UI/Switcher/Switcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeCurrentPage, fetchSumarries, fetchSumarriesWhithPhoto, switchFiltresPhoto } from '../../../redux/actions';

function FilterPhoto() {

    const switcherPhoto = useSelector(state => state.switchFiltres.photo)
    const dispatch = useDispatch()

    const switchPhoto = () => {
        dispatch(switchFiltresPhoto())
        dispatch(changeCurrentPage(1))
        
        if(!switcherPhoto) {
            setTimeout(()=>dispatch(fetchSumarriesWhithPhoto()), 1000)
            
        } else {
            dispatch(fetchSumarries())
        }
    }
    
    return (
        <div className='filter_photo'>
            <div className='icon_text'>
                <FontAwesomeIcon icon={faPortrait} style={{ marginRight: '12px' }} />
                <span>Только с фотографией</span>
            </div>
            <Switcher onClick={switchPhoto} idHtml={"switcher_photo"}/>
        </div>
    )
}

export default FilterPhoto;
