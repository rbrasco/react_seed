import SessionActions from './session.actionTypes';
const axios = require('axios');

const checkLoggedIn = () => {

  return (dispatch) => {

    dispatch({
      type: SessionActions.CHECKING_LOG,
      payload: true,
    });

    axios.get('https://jira.scytl.net/rest/auth/1/session').then(res => {

      dispatch({
        type: SessionActions.LOGGED_IN,
        payload: !!res.data && !!res.data.name,
      });

      dispatch({
        type: SessionActions.SET_USERNAME,
        payload: res.data.name ? res.data.name : '',
      });

      dispatch({
        type: SessionActions.CHECKING_LOG,
        payload: false,
      });

    });

  };

};

export {
  checkLoggedIn,
};
