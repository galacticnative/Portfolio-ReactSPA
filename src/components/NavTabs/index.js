import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Projects', 'About', 'Contact', 'Resume'];
  return (
    <ul className={`nav nav-tabs hero`}>
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
