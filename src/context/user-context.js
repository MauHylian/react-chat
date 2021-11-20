import React from "react";

import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  const displayName = user.displayName;
  const email = user.email;

  const uid = user.uid;
}

const userContext = React.createContext({
  authenticated: user ? true : false,
  // Can we have the login function here?
  // login: () => {},
  displayName: user ? user.displayName : null,
  email: user ? user.email : null,
  uid: user ? user.uid : null,
});

export default userContext;
