import React, { useState } from "react";
import "./navbar.css";
import notify from '../../Assets/notify.png'
import downArrow from "../../Assets/downarrow.png"

const Navbar = () => {
  const [activePage, setActivePage] = useState("jobs");

  const handlePageChange = (page) => {
    setActivePage(page);
  }


  return (
    <header className="main-header">
      <div className="left-section">
        <div className="logo"></div>
        <span class="LOGOIPSUM">NEC</span>
      </div>

      <div className="center-section">
        <nav>
          <ul>
            <li className={activePage === 'jobs' ? 'active' : ''}>
              <a href="/" onClick={() => handlePageChange('jobs')}>
                Jobs
              </a>
            </li>

            <li onClick={() => handlePageChange('connections')} className={activePage === 'connections' ? 'active' : ''}>
              <a href="/connections" >
                Connections
              </a>
            </li>

            <li className={activePage === 'aboutus' ? 'active' : ''}>
              <a href="/aboutus" onClick={() => handlePageChange('aboutus')}>
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="right-section">
        <div className="notification-icon">
          <img src={notify} class="Group" alt="notify"/>
        </div>
        <div className="profile">
          <div className="profile-image"> </div>
          <div class="Oval"></div>
          <span className="profile-name">Jasmin Mishra</span>
          <span className="dropdown-icon">
            <img src={downArrow} class="Group" alt="downarrow"/>
          </span>
          {/* <span className="profile-name">Logout</span> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
