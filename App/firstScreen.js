import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

import { getCurrentGame, setCurrentGame } from './db';

class firstScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Cat Scramble!",
    headerBackTitle: "Back",
    }

  componentWillMount(){
    getCurrentGame()
   }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Levels')}
          style={styles.TO}
          >
          <Text style={styles.text}>
            Play Now!
          </Text>
        </TouchableOpacity>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e0e6',
    alignItems: 'center',
    justifyContent: 'center',
    },
  TO: {
    backgroundColor: "#FF69B4",
    padding: 25,
    borderRadius: 15
    },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    }
  });

export default connect(state => ({currentGame: state.currentGame}) )(firstScreen)