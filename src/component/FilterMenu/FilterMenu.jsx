import React, { useState } from 'react';
import FilterAge from './items/FilterAge';
import FilterEducation from './items/FilterEducation';
import FilterEmployment from './items/FilterEmployment';
import FilterExperience from './items/FilterExperience';
import FilterGender from './items/FilterGender';
import FilterLanguage from './items/FilterLanguage';
import FilterOffer from './items/FilterOffer';
import FilterPhoto from './items/FilterPhoto';

function FilterMenu() {

    return (
        <div className='filter_menu hide'>
            <div className={`closeMenu`}>
                <span />
                <span />
            </div>
            <h2>Фильтры</h2>
            <FilterPhoto/>
            <FilterAge/>
            <FilterGender/>
            <FilterOffer/>
            <FilterExperience/>
            <FilterLanguage/>
            <FilterEmployment/>
            <FilterEducation/>
        </div>
    )
}

export default FilterMenu;
