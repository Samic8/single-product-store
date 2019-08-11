import PropTypes from "prop-types";
import React from "react";

function Header({ siteTitle }) {
  return (
    <nav className="text-white text-4xl font-bold text-center mt-6">
      {siteTitle}
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
