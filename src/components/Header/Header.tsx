import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { logo } from 'assets';
import './Header.scss';

const links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const activeClassName = 'active';
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSidebar]);
  useEffect(() => {
    setShowSidebar(false);
  }, [pathname]);
  return (
    <div className="headerContainer">
      <img className="logo" src={logo} alt="BackPacker logo" />
      <nav>
        {links.map(({ name, url }) => (
          <NavLink
            to={url}
            key={name}
            className={() => (pathname === url ? activeClassName : undefined)}
          >
            {name}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar">
        <div className="hamburger-menu">
          <span
            className="icon"
            onClick={() => setShowSidebar(!showSidebar)}
          ></span>
        </div>

        {showSidebar && (
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="backdrop"
          />
        )}
        <div className={`content  ${showSidebar ? 'content--active' : ''}`}>
          <span
            className="close"
            onClick={() => setShowSidebar(!showSidebar)}
          ></span>
          <nav>
            {links.map(({ name, url }) => (
              <NavLink
                to={url}
                key={name}
                className={() =>
                  pathname === url ? activeClassName : undefined
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
