import React from 'react';
import Header from '../../Components/Header';
import Component from '../../Components/Component';

class Homepage extends React.Component {

  constructor (props) {

    super(props);

    this.state = {
      /* Some parametres*/
    };

  }
  componentDidMount () {

    /* Some functions*/

  }
  render () {

    return (
      <div className="main" >
        <Header />
        <div className="X_component" >
          <Component />
        </div>
      </div>
    );

  }

}


export default Homepage;
