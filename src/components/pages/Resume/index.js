import React from 'react';
import ResumeImg from '../../../assets/images/resume2020.jpg'

function ResumeFile() {

    return (
        <div id="resume">
            <h3>My Resume</h3>
            <img src={ResumeImg} style={{ width: '36rem' }} alt="image-resume"></img>
        </div>
    );
}

export default ResumeFile;