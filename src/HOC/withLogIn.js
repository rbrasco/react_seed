import React from 'react';
import { connect } from 'react-redux';
import AuthError from '../pages/AuthError';

const withLogIn = (RestricedComponent) => {

  const ComponentToRender = (props) =>  {

    const { isLoggedIn } = props;

    return isLoggedIn ? <RestricedComponent {...props} /> : <AuthError />;

  };

  return connect(mapStateToProps)(ComponentToRender);

};

const mapStateToProps = (store) => ({
  isLoggedIn: store.SessionReducer.isLoggedIn,
});

export default withLogIn;
