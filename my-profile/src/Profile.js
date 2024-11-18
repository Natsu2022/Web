// src/Profile.js
import React from 'react';
import './Profile.css';
import profilePicture from './profile.jpg';

const Profile = () => {
  return (
    <div className="profile">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <h1>Mr.Phumin Tongla</h1>
      <p>Software Engineer</p>
      <p>Student of Sripatum University</p>
      <p>StudentID 65003361</p>
      
      <div className="profile-section">
        <h2>Programming Languages</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C/C++</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Frameworks</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Tools</h2>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>VSCode</li>
          <li>Postman</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Database</h2>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Skills</h2>
        <ul>
          <li>Problem Solving</li>
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Time Management</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>Education</h2>
        <p>University of ABC</p>
        <p>Bachelor of Computer Science</p>
      </div>

      <div className="profile-section">
        <h2>GitHub Projects</h2>
        <ul>
          <li><a href="https://github.com/Natsu2022/server" target="_blank" rel="noopener noreferrer">Project 1</a></li>
          <li><a href="https://github.com/Natsu2022/WareVista" target="_blank" rel="noopener noreferrer">Project 2</a></li>
          <li><a href="https://github.com/Natsu2022/Web" target="_blank" rel="noopener noreferrer">Project 3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;