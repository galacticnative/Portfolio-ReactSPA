import React from 'react';
import Resume from '../../../assets/images/resume2020.jpg'

function Resume() {

    return (
        <div id="resume">
            <h3>My Resume</h3>
            <img src={Resume} style={{ width: '36rem' }}></img>
        </div>
    );
}

export default Resume;