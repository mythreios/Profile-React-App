// Profile.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../Css/Profile.css';

export const Profile = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3300/api/profiles/${id}`)
      .then((res) => {
        setProfileData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching profile data:', err);
        window.location.href = '/*'
      });
  }, [id]);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className='profile-image-container'>
          <img src={profileData.icon} alt={`${profileData.nickname}`} className='profile-image' />
        </div>
        <h2>{profileData.nickname}</h2>
        <p><strong>ID:</strong> {profileData.id}</p>
        <p><strong>Soyisim:</strong> {profileData.surname}</p>
        <p><strong>Yaş:</strong> {profileData.age}</p>
        
      </div>

      <Link to="/" className="linkButton">Geri Git</Link>
    </div>
  );
};
