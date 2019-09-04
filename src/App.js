const React = require('react');

require('babel-polyfill');
require("babel-register");

import { Route, MemoryRouter as Router } from 'react-router-dom';
import Homepage from './pages/Homepage';
import store from './redux';
import { Provider } from 'react-redux';
import withLogIn from './HOC/withLogIn';
// import ErrorBoundary from './components/ErrorBoundary'; TO DO
// import Header from './components/Header'; TO DO
import { checkLoggedIn } from './redux/session/session.actions';

export default class App extends React.Component {

  constructor (props) {

    super(props);

  }
  componentDidMount () {

    store.dispatch(checkLoggedIn());

  }
  render () {

    return (

      <Provider store={store}>
        <Router>
          <Route path="/" component={withLogIn(Homepage)}/>
        </Router>
      </Provider>
    );

  }

}
