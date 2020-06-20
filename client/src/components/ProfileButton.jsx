import React, { useContext } from 'react';
import { LoginButton } from './LoginButton';
import { UserContext } from '../contexts/UserContext';

import { Button } from '@material-ui/core';

export const ProfileButton = () => {
  const { user, signOut } = useContext(UserContext);

  let username = null;
  if (user) username = user.displayName;

  if (username) {
    return (
      <Button color='inherit' onClick={signOut}>
        {username}
      </Button>
    );
  } else {
    return <LoginButton />;
  }
};
