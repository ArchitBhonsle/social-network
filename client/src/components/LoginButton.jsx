import React, { useContext } from 'react';

import { Button } from '@material-ui/core';

import { UserContext } from '../contexts/UserContext';

export const LoginButton = () => {
  const { signInWithGoogle } = useContext(UserContext);

  return (
    <Button color='inherit' onClick={signInWithGoogle}>
      Login
    </Button>
  );
};
