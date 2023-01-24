import React from 'react'
import './mentorprofile.css'
import { Link } from 'react-router-dom'
function MentorProfile() {
    const linkStyle = {
        color: '#3397ef'
    };
    return (
        <>
            <div className='topbar'><h3 style={{ fontWeight: "100", color: "#848484" }}>All Mentors / <b style={{ color: "black" }}>Mentor Profile</b></h3></div>
            <div className='containers'>
                <div className='mprofile'>
                    <div><img className='mprofilepic' src='../Assets/profilepic.jpeg' alt='profilepic' ></img></div>
                    <div><h1>Mentor Bhattacharya</h1>
                        <h4>Director,  KPMG in India</h4>
                    </div>
                    <div className='linkedinn'><a className='linkedin' href='#'>Linkedin</a></div>
                </div>
                <div class="wrapper">
                    <div class="tabs">
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch" />
                            <label for="tab-1" class="tab-label">Overview</label>
                            <div className='tab-content'> </div>
                        </div>
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-2" class="tab-switch" />
                            <label for="tab-2" class="tab-label">Weekly Slot</label>
                            <div className='tab-content'> </div>
                        </div>
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-3" class="tab-switch" />
                            <label for="tab-3" class="tab-label">Bookings</label>
                            <div className='tab-content'>
                                <div className='litem'><p>Upcoming Calls</p><p className='blitem'>Past Calls</p></div>
                                <div className='card'>
                                    <div><img className='imgsq' src='../Assets/profile.jpg' alt='profilepic' ></img></div>
                                    <div className='up'><p><b>Rimpa Roy</b></p>
                                        <p>Rimppaaaa@gmail.com</p><div className='btnb'>
                                            <button className='cardbtn'>SAT  26  NOV  2022</button>
                                            <button className='cardbtn1'>11:30 AM</button></div></div>
                                    <div><button className='btn3'><Link to='/allmentors/mentorprofile/feedback' style={linkStyle}>View Feedback</Link></button></div>
                                </div>
                                <div className='card'>
                                    <div><img className='imgsq' src='../Assets/profile.jpg' alt='profilepic' ></img></div>
                                    <div className='up'><p><b>Rimpa Roy</b></p>
                                        <p>Rimppaaaa@gmail.com</p><div className='btnb'>
                                            <button className='cardbtn'>SAT  26  NOV  2022</button>
                                            <button className='cardbtn1'>11:30 AM</button></div></div>
                                    <div><button className='btn3'><Link to='/allmentors/mentorprofile/feedback' style={linkStyle}>View Feedback</Link></button></div>
                                </div>
                                <div className='card'>
                                    <div><img className='imgsq' src='../Assets/profile.jpg' alt='profilepic' ></img></div>
                                    <div className='up'><p><b>Rimpa Roy</b></p>
                                        <p>Rimppaaaa@gmail.com</p><div className='btnb'>
                                            <button className='cardbtn'>SAT  26  NOV  2022</button>
                                            <button className='cardbtn1'>11:30 AM</button></div></div>
                                    <div><button className='btn3'><Link to='/allmentors/mentorprofile/feedback' style={linkStyle}>View Feedback</Link></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MentorProfile