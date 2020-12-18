import React, {useState} from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li>

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
