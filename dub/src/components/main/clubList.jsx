import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import clubdata from "../../dummy/clubdata.json";
// import { url } from '../../url';
import './clubList.scss'
function ClubList() {
  const data = clubdata;
  // const [clubs, setClubs] = useState([]);

  // useEffect(() => {
  //   const getClub = async () => {
  //     await axios.get(
  //       `${url}/app/post/getAll`
  //     ).then(response => {
  //       setClubs(response.data.result)
  //     })
  //   }
  //   getClub();
  // }, []);
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