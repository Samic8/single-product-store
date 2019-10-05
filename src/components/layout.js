import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { Store } from "./containers/store";

function Layout({ children }) {
  const dispatch = useContext(Store.Dispatch);

  useEffect(() => {
    dispatch({
      type: "INIT_STORE FROM LS",
      payload: null
    });
    window.addEventListener("beforeunload", event =>
      dispatch({
        type: "PUT_STORE_IN_LS",
        payload: null
      })
    );
    return () => window.removeEventListener("beforeunload");
  }, [dispatch]);

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
    <div className="font-sans text-gray-900">
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
