import React from 'react'
import ProgressBar from '../component/ProgressBar'
import './feedback.css'
function Feedback() {
    return (
        <>
            <div className='topbar'><h3 style={{ fontWeight: "100", color: "#848484" }}>All Mentors / Mentor Profile / <b style={{ color: "black" }}>Feedback</b></h3></div>
            <div className='f-box'>
                <div className='f-head'>
                    <button className='f-btn'>Mentor Feedback</button>
                    <button className='f-btn'>Mentee Feedback</button>
                </div>
                <div className='f-container'>
                    <div className='f-card'>
                        <h4>How was you experience with mentee</h4>
                        <ProgressBar />
                    </div>
                </div>
                <div className='f-card'>
                    <h4>What was the mentee`s problem about?</h4>
                    <h4 className='h4li'>Looking for a new job /career switch</h4>
                </div>
                <div className='f-card'>
                    <h4>How was you experience with mentee</h4>
                    <h4 className='h4li'>Yes</h4>
                </div>
                <div className='f-card'>
                    <h4>How was you experience with mentee</h4>
                    <ProgressBar />
                </div>
            </div>
        </>
    )
}

export default Feedback