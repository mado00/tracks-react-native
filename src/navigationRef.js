// function to get access to navigator in App.js
import { NavigationActions } from 'react-navigation';

let navigator;

// nav is coming from  react navigation
export const setNavigator = nav => {
  navigator = nav;
};

// navigate dunction for everyone else to use
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};