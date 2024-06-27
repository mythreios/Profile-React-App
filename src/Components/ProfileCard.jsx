import React from 'react';
import '../Css/ProfileCard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProfileCard = ({id, nickname, surname, age, image}) => {

    function cardClick() {
        window.location.href = `/profiles/${id}`;
    }

    function deleteProfile() {
        axios.delete(`http://localhost:3300/api/profiles/${id}`).then((res) => {
            window.location.reload();
        }).catch((err) => {

            return (
                <div>
                    Hata aldın kardeş salsana burayı
                </div>
            )
            
        })
    }

    return (

        <div className='profile-card'>
        <div className='profile-image-container'>
          <img src={image} alt={`${nickname}'s profile`} className='profile-image' />
        </div>
        <div className='profile-info'>
          <h3>{nickname}</h3>
          <p>{surname}</p>
          <p><strong>Yaş: </strong>{age}</p>
          <Link to={`/profiles/${id}`} className='view-profile'>Profile Git</Link>
        </div>
        <button className='delete-button' onClick={deleteProfile}>Sil</button>
      </div>
    )

}

export default ProfileCard