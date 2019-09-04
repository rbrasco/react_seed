import SessionActions from './session.actionTypes';

const initialState = {
  isLoggedIn: false,
  isCheckingLog: false,
  username: '',
};

const sessionReducer = (state = initialState, action) => {

  switch (action.type) {

  case SessionActions.CHECK_LOGGED_IN: {

    return {
      ...state,
      isCheckingLog: action.payload,
    };

  }
  case SessionActions.LOGGED_IN: {

    return {
      ...state,
      isLoggedIn: action.payload,
    };

  }
  case SessionActions.SET_USERNAME: {

    return {
      ...state,
      username: action.payload,
    };

  }
  default: return state;

  }

};

export default sessionReducer;
