import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a
              className="Nav-brand-logo"
              href="http://logocache.com/custom-design/logo-name/urban-designstyle-colors-u.png"
            >
              Urban
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
