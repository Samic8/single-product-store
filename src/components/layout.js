import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>
        {children}
      </main>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
