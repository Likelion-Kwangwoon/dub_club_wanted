import React from 'react';
import clubdata from "../../dummy/clubdata.json";
import './clubList.scss'
function ClubList() {
  const data = clubdata;
  return(
    <div className='Club-container'>
      <ul className='Club-list'>
        {
          data.club.map((club) => {
            return (
              <li className='Club-card-container'>
                <div className='Club-card'>
                  <h2>{club.image}</h2>
                  <h2>{club.title}</h2>
                  <h2>{club.name}</h2>
                  <h2>{club.category}</h2>
                </div>
              </li>
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default ClubList;