import '../Css/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowseRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCard from '../Components/ProfileCard';

export const HomePage = () => {

    const [profiles, setProfiles] = useState([])
    const [currentProfile, setCurrentProfile] = useState({ id: '', nickname: '', surname: '', age: '', icon: ''})

    useEffect(() => {
        axios.get(`http://localhost:3300/api/profiles`).then(
            (res) => {
                setProfiles(res.data.allProfiles);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function renderProfiles() {
        if ( !profiles.length ) {
            return <div>Loading...</div>
        }

        return profiles.map((value, index) => {
            return <ProfileCard key={index} id={value.id} nickname={value.nickname} surname={value.surname} age={value.age} image={value.icon}/>
        })
    }

    function handleInputChange() {

    }

    function handleFormSubmit() {

    }

    return (
        <div>
            <div className='profile-list'>
                { renderProfiles() }
            </div>

            
        </div>
    );
}