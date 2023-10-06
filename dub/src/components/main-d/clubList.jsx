import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import clubdata from "../../dummy/clubdata.json";
import { url } from '../../Url';
import './clubList.scss'
// import { useNavigate } from 'react-router-dom';
function ClubList() {

  const [clubs, setClubs] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const getClub = async () => {
      await axios.get(
        `${url}/app/post/getAll`
      ).then(response => {
        setClubs(response.data.result)
      })
    }
    try {
      getClub();
    } catch(ex) {
      if (ex.response && ex.response.status === 404) {
        // 404 에러가 발생한 경우
        console.log('글을 불러올 수 없습니다.');
      } else {
        // unexpected 에러가 발생한 경우
        console.log('글을 불러 오는 과정에서 예상치 못한 에러가 발생했습니다.');
    }
  }
  }, []);

  const onClickClub = (id) => {

  }
  return(
    <div className='Club-container'>
      <ul className='Club-list'>
        {
          clubs.map((club, index) => {
            return (
              <li className='Club-card-container' key={index}>
                <div className='Club-card' onClick={onClickClub(club.id)}>
                  <h2>{club.image}</h2>
                  <h2>{club.title}</h2>
                  <h2>{club.clubName}</h2>
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