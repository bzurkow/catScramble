import React from 'react';
import { connect } from 'react-redux';
import { Button, Image, ImageEditor, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Cat1, Cat2, Cat3, Cat4, Cat5 } from './GameFiles';

class game extends React.Component {

  static navigationOptions = {
    headerTitle: "Cat Scramble!",
    headerBackTitle: "Back"
  }

  render() {
    console.log(typeof Number(this.props.currentGame))
    let cats = {
      1: <Cat1 />,
      2: <Cat2 />,
      3: <Cat3 />,
      4: <Cat4 />,
      5: <Cat5 />,
      
    }
    let cat = cats[Number(this.props.currentGame)]
    // if(Number(this.props.currentGame) === 1 ){
    //   cat=<Cat1 />
    // }

    return (
      <View style={styles.container}>
        {cat}
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
    }
  });

export default connect(state => ({
  currentGame: state.currentGame, 
}))(game)