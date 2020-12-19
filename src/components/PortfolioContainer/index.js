import React, { useState } from 'react';
import NavTabs from '../Header/index.js'; 
import Project from '../pages/Project';
import About from '../pages/About';
import ContactForm from '../pages/Contact';
import Footer from '../pages/Footer';
import Resume from '../pages/Resume' 

function Portfolio() {

    const [currentPage, handlePageChange] = useState('About');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Project />;
            case 'Contact':
                return <ContactForm />;
            case 'Resume':
                return <Resume />
            default:
                return <About />;
        }
    };

    return (
        <div>
            {/* Pass the state value and the setter as props to NavTabs */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Call the renderPage function passing in the currentPage */}
            
                
            <div>{renderPage(currentPage)}</div>
           
            <Footer />
            
        </div>
    );
}

export default Portfolio;
  