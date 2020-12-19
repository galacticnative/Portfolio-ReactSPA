import React from 'react';
import Resume from '../../../assets/resume2020.pdf'

function ResumeFile() {

    return (
        <div id="resume" className="resume">
            <h3>My Resume</h3>
            
            <a target="_blank" rel="noopener noreferrer" href={Resume}>Click here to view:</a>
            <div>
            <br />
            <br />
            <br />
            <br />
            </div>
        </div>
        
    );
}

export default ResumeFile;