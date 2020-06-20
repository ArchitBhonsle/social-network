import React, { useState, useEffect } from 'react';

import { auth, googleProvider } from '../firebase/firebase.utils';

export const UserContext = React.createContext(null);

export const UserContextManager = ({ children }) => {
  const [ user, setUser ] = useState(null);

  useEffect(() => console.log(user), [ user ]);

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (!user) setUser(null);
    else setUser(user);
  });

  const signOut = () => auth.signOut();
  const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  const context = {
    user,
    unsubscribe,
    signOut,
    signInWithGoogle
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
