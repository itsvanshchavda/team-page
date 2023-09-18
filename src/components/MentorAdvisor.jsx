import React from 'react';
import { Card } from 'react-bootstrap';
import './MentorAdvisor.css';
import mentorAdvisorData from '../data/mentoradvisor'



const MentorAdvisor = () => {
  return (
    
    <div className='mentor-advisors-container'>
      {mentorAdvisorData.map((mentor, index) => (
        <Card key={index} className="profile-card">
          <div className='profile-image'>
            <img src={mentor.img} alt="" />
          </div>
          <div className="profile-content">
            <h1 className="profile-name">{mentor.name}</h1>
            <p className="profile-role">{mentor.role}</p>
            <div className="links">
              <a href={mentor.linkedin}><i className="fa-brands fa-linkedin"></i>Linkdln</a>
              <a href={mentor.youtube}><i className="fa-brands fa-youtube" id='yt'></i>YouTube</a>
            </div>
            <div className="msg">
              <button>Messsege him now<i className="fa-solid fa-message" id='msg'></i></button> 
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default MentorAdvisor;
