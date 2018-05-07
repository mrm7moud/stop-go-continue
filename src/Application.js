import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

class Application extends Component {
  constructor (props) {
    super(props);
    this.restaurantsRef = null;
    this.state = {
      user: null
    };
  }

  componentWillMount () {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
      this.restaurantsRefStop = database.ref('stop');
      this.restaurantsRefGo = database.ref('go');
      this.restaurantsRefContinue = database.ref('contnue');

      this.restaurantsRefStop.on('value', snapshot => {
        this.setState({ stop: snapshot.val() });
      });
      this.restaurantsRefGo.on('value', snapshot => {
        this.setState({ go: snapshot.val() });
      });
      this.restaurantsRefContinue.on('value', snapshot => {
        this.setState({ contnue: snapshot.val() });
      });
    });
  }

  render () {
    const { user, stop, go, contnue } = this.state;

    return (
      <div className='Application'>
        <header className='Application--header'>
          <h1>SGC Code Academy</h1>
        </header>
        { user
          ? <div>
            <h2>STOP</h2>
            <NewRestaurant
              restaurantsRef={this.restaurantsRefStop}
              />
            {
                stop &&
                <Restaurants restaurants={stop} user={user} restaurantsRef={this.restaurantsRefStop} />
              }

            <h2>GO</h2>
            <NewRestaurant
              restaurantsRef={this.restaurantsRefGo}
              />
            {
                go &&
                <Restaurants restaurants={go} user={user} restaurantsRef={this.restaurantsRefGo} />
              }
            <h2>CONTINUE</h2>
            <NewRestaurant
              restaurantsRef={this.restaurantsRefContinue}
                />
            {
                  contnue &&
                  <Restaurants restaurants={contnue} user={user} restaurantsRef={this.restaurantsRefContinue} />
                }
            <CurrentUser user={user} />
          </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default Application;
