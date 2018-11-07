import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import { AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { setCurrentGame } from './db';

class levels extends React.Component {
  constructor(props){
    super(props)

    this.onPress = this.onPress.bind(this)
  }

  static navigationOptions = {
    headerTitle: "Cat Scramble!",
    headerBackTitle: "Back",
  }

  onPress(num) {
    setCurrentGame(num+"")
    this.props.navigation.navigate('Game')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          key={1}
          onPress={ () => this.onPress(1)}
          style={styles.TO1}
          >
          <Text style={styles.text}>
            Level 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={2}
          onPress={ () => this.onPress(2)}
          style={styles.TO2}
          >
          <Text style={styles.text}>
            Level 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={3}
          onPress={ () => this.onPress(3)}
          style={styles.TO1}
          >
          <Text style={styles.text}>
            Level 3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={4}
          onPress={ () => this.onPress(4)}
          style={styles.TO2}
          >
          <Text style={styles.text}>
            Level 4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={5}
          onPress={ () => this.onPress(5)}
          style={styles.TO1}
          >
          <Text style={styles.text}>
            Level 5
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  TO1: {
    backgroundColor: "#b0e0e6",
    padding: 25,
  },
  TO2: {
    backgroundColor: "#FF69B4",
    padding: 25,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default connect( state => ({currentGame: state.currentGame}))(levels)