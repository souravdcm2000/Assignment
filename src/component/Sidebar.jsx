import React from 'react';
import './Sidebar.css';
import AllMentors from '../pages/AllMentors';
import MentorsRequest from '../pages/MentorsRequest';
import { FiPhoneCall } from 'react-icons/fi';
import { RiUserFollowLine } from 'react-icons/ri';
import { BsCheckCircle } from 'react-icons/bs';
import { BiUserPin } from 'react-icons/bi';
import { Link, NavLink, Route, Routes } from 'react-router-dom';


function Sidebar() {

  return (
    <div className='container'>

      <div className='profile'>
        <img className='roundpic' src='./Assets/profilepic.jpeg' alt='pic'></img>
        <h3>Gurji Kocher</h3>
      </div>
      <div>
        <ul>
          <li><Link to="/#"><FiPhoneCall style={{ marginRight: '20px' }} />All Call Details </Link></li>
          <li><Link to="/allmentors"><RiUserFollowLine style={{ marginRight: '20px' }} />All Mentors</Link></li>
          <li><a href="AllMentee.jsx"><BiUserPin style={{ marginRight: '20px' }} />All Mentee</a></li>
          <li><Link to="/mentorsrequest"><BsCheckCircle style={{ marginRight: '20px' }} />Mentors Request</Link></li>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar