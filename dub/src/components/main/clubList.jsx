import React from 'react';
import { useEffect, useState } from 'react';
import clubdata from "../../dummy/clubdata.json";
import './clubList.scss'
function ClubList() {
  const data = clubdata;
  const [clubs, setClubs] = useState([]);
  return(
    <div className='Club-container'>
      <ul className='Club-list'>
        {
          data.club.map((club, index) => {
            return (
              <li className='Club-card-container' key={index}>
                <div className='Club-card'>
                  <h2>{club.image}</h2>
                  <h2>{club.title}</h2>
                  <h2>{club.author}</h2>
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