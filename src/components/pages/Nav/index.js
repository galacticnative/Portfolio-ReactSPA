import React, {useState} from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';
import Resume from '../../../assets/resume2020.jpg'

function Nav() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#work" onClick={() => setContactSelected(false)}>
              Projects
            </a>
          </li>  
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a href="#contact-form" onClick={() => setContactSelected(false)}>
              Contact Me
            </a>
          </li>
          <li>
            <a target="_blank" rel='noopener noreferrer' href= {Resume}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
