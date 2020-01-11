import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  // call only one time when first time open app
  useEffect(() => {
    tryLocalSignin();
  },[]);

  return null;
};

export default ResolveAuthScreen; 