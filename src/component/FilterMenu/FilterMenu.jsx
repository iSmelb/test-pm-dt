import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { switchFiltresStatus } from '../../redux/actions';
import FilterAge from './items/FilterAge';
import FilterEducation from './items/FilterEducation';
import FilterEmployment from './items/FilterEmployment';
import FilterExperience from './items/FilterExperience';
import FilterGender from './items/FilterGender';
import FilterLanguage from './items/FilterLanguage';
import FilterOffer from './items/FilterOffer';
import FilterPhoto from './items/FilterPhoto';

function FilterMenu() {
    const statusFilter = useSelector(state => state.switchFiltres.active)
    const dispatch = useDispatch()

    window.addEventListener('resize', ()=> {
        if(window.innerWidth >= 1024) {
            document.body.classList.remove('stop-scrolling')
        }
    })

    return (
        <div className={`filter_menu_block ${!statusFilter ? 'hide' : ''}`}>
            <div className='filter_menu'>
            <div className='closeMenu' onClick={() => {
                dispatch(switchFiltresStatus())
                document.body.classList.remove('stop-scrolling')
            }} >
                <span />
                <span />
            </div>
            <h2>Фильтры</h2>
            <FilterPhoto />
            <FilterAge />
            <FilterGender />
            <FilterOffer />
            <FilterExperience />
            <FilterLanguage />
            <FilterEmployment />
            <FilterEducation />
        </div>
        </div>
    )
}

export default FilterMenu;
