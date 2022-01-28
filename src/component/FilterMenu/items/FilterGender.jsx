import React from 'react';

function FilterGender() {
  return (
      <div className="filter_gender">
          <h4>Пол</h4>
          <span className='underline' />
          <button>Любой</button>
          <button>Женшины</button>
          <button>Мужчины</button>
      </div>
  )
}

export default FilterGender;
