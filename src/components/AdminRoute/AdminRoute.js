import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

const AdminRoute = ({ children, ...rest }) => {
  const [loggedUserData] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedUserData.role === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/notAdmin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
