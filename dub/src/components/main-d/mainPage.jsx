import React from 'react';
import ClubList from './clubList';
import './mainPage.scss';
import ClubFilter from './clubFilter';
function MainPage() {
  return(
    <div className='main-page'>
      <ClubFilter />
      <ClubList />
    </div>
  )
}

export default MainPage;