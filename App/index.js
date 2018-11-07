import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './Reducers/store';

import FirstScreen from './firstScreen';
import Levels from './levels';
import Game from './game';

const App = createStackNavigator({
  First: { screen: FirstScreen },
  Levels: { screen: Levels },
  Game: { screen: Game },
}, {
  initialRouteName: 'First'
});

class Nav extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
      )
  }
}

export default Nav;