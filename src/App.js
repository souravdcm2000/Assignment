import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import AllMentors from './pages/AllMentors';
import MentorsRequest from './pages/MentorsRequest';
import MentorProfile from './pages/MentorProfile';
import Feedback from './pages/Feedback';
import MentorProfileRq from './pages/MentorProfileRq';

function App() {
  console.log(window.location)
  return (
    <>
      <div className='head'><Header /></div>
      <div className='mainpage'>
        <div className='sidebar'><Sidebar /></div>
        <div>
          <Routes>
            <Route path='/AllMentors' element={<AllMentors />}> </Route>
            <Route path='/MentorsRequest' element={<MentorsRequest />}></Route>
            <Route path='/AllMentors/MentorProfile' element={<MentorProfile />}></Route>
            <Route path='/MentorsRequest/MentorProfilerq' element={<MentorProfileRq />}></Route>
            <Route path='/AllMentors/MentorProfile/feedback' element={<Feedback />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
