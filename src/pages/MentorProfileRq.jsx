import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs';
import { FaUserAlt, FaStopwatch } from 'react-icons/fa';
import { GiHandBag } from 'react-icons/gi';
import { MdMarkEmailUnread } from 'react-icons/md';

function MentorProfileRq() {
    return (
        <>            <div className='topbar'><div><h3 style={{ fontWeight: "100", color: "#848484" }}>Mentor New Request / <b style={{ color: "black" }}>Mentor Profile</b></h3>
        </div>
            <div><button className='tbtn1'>Reject</button>
                <button className='tbtn2'>Schedule Call</button></div>
        </div>
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
                            <div className='tab-content'>
                                <div className='c-head'><h5>Personal Details</h5></div>
                                <div className='box'>
                                    <div className="b-phone"><div className='c-icon'><MdMarkEmailUnread /></div>
                                        <div className='d-data'>
                                            <div> <p>Email</p></div>
                                            <div><span>Subhrohattacharya@Gmail.com</span></div>
                                        </div></div>
                                    <div className="b-phone"><div className='c-icon'><BsTelephoneFill /></div>
                                        <div className='d-data'>
                                            <div> <p>Phone Number</p></div>
                                            <div><span>+91-85669663322</span></div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='c-head'><h5>Personal Details</h5></div>
                                <div className='g-box'>
                                    <div className="b-phone"><div className='c-icon'><GiHandBag /></div>
                                        <div className='d-data'>
                                            <div> <p>Professional Interest</p></div>
                                            <div><span>+91-85669663322</span></div>
                                        </div>
                                    </div>
                                    <div className="b-phone"><div className='c-icon'><FaUserAlt /></div>
                                        <div className='d-data'>
                                            <div> <p>Mentor On</p></div>
                                            <div><span>+91-85669663322</span></div>
                                        </div>
                                    </div>
                                    <div className="b-phone"><div className='c-icon'><FaStopwatch /></div>
                                        <div className='d-data'>
                                            <div> <p>Year Of Experience</p></div>
                                            <div><span>+91-85669663322</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MentorProfileRq