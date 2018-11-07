import React from 'react';
import { connect } from 'react-redux';
import { Button, Image, ImageEditor, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { getGameStatus, resetGameStatus, setGameStatus } from '../db';

class game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      A1: "",
      A2: "",
      A3: "",
      A4: "",
      B1: "",
      B2: "",
      B3: "",
      B4: "",
      C1: "",
      C2: "",
      C3: "",
      C4: "",
      D1: "",
      D2: "",
      D3: "",
      D4: "",
      E1: "",
      E2: "",
      E3: "",
      E4: "",
      F1: "",
      F2: "",
      F3: "",
      F4: "",
      A: "",
      B: "",
      C: "",
      D: "",
      E: "",
      F: "",
      G: "",
      H: "",
      I: "",
      J: "",
      K: "",
      L: "",
      M: "",
      N: "",
      O: "",
      P: "",
      Q: "",
      R: "",
      S: "",
      T: "",
      U: "",
      V: "",
      W: "",
      X: "",
      }

    this.onPress=this.onPress.bind(this)
  }




  onPress(string, sel, ex){
    this.setState({
      [this.state.X]: sel,
      [this.state[string]]: ex,
      [string]: this.state.X,
      X: this.state[string]
      })
    }

  componentWillMount(){
    let levelNum = 1
    let A = (
      <TouchableOpacity onPress={ () => this.onPress("A", A, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/0-0.jpeg')} />
      </TouchableOpacity>
      )
    let B = (
      <TouchableOpacity onPress={ () => this.onPress("B", B, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/0-1.jpeg')} />
      </TouchableOpacity>
      )
    let C = (
      <TouchableOpacity onPress={ () => this.onPress("C", C, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/0-2.jpeg')} />
      </TouchableOpacity>
      )
    let D = (
      <TouchableOpacity onPress={ () => this.onPress("D", D, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/0-3.jpeg')} />
      </TouchableOpacity>
      )
    let E = (
      <TouchableOpacity onPress={ () => this.onPress("E", E, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/1-0.jpeg')} />
      </TouchableOpacity>
      )
    let F = (
      <TouchableOpacity onPress={ () => this.onPress("F", F, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/1-1.jpeg')} />
      </TouchableOpacity>
      )
    let G = (
      <TouchableOpacity onPress={ () => this.onPress("G", G, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/1-2.jpeg')} />
      </TouchableOpacity>
      )
    let H = (
      <TouchableOpacity onPress={ () => this.onPress("H", H, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/1-3.jpeg')} />
      </TouchableOpacity>
      )
    let I = (
      <TouchableOpacity onPress={ () => this.onPress("I", I, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/2-0.jpeg')} />
      </TouchableOpacity>
      )
    let J = (
      <TouchableOpacity onPress={ () => this.onPress("J", J, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/2-1.jpeg')} />
      </TouchableOpacity>
      )
    let K = (
      <TouchableOpacity onPress={ () => this.onPress("K", K, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/2-2.jpeg')} />
      </TouchableOpacity>
      )
    let L = (
      <TouchableOpacity onPress={ () => this.onPress("L", L, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/2-3.jpeg')} />
      </TouchableOpacity>
      )
    let M = (
      <TouchableOpacity onPress={ () => this.onPress("M", M, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/3-0.jpeg')} />
      </TouchableOpacity>
      )
    let N = (
      <TouchableOpacity onPress={ () => this.onPress("N", N, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/3-1.jpeg')} />
      </TouchableOpacity>
      )
    let O = (
      <TouchableOpacity onPress={ () => this.onPress("O", O, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/3-2.jpeg')} />
      </TouchableOpacity>
      )
    let P = (
      <TouchableOpacity onPress={ () => this.onPress("P", P, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/3-3.jpeg')} />
      </TouchableOpacity>
     )
    let Q = (
      <TouchableOpacity onPress={ () => this.onPress("Q", Q, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/4-0.jpeg')} />
      </TouchableOpacity>
      )
    let R = (
      <TouchableOpacity onPress={ () => this.onPress("R", R, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/4-1.jpeg')} />
      </TouchableOpacity>
      )
    let S = (
      <TouchableOpacity onPress={ () => this.onPress("S", S, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/4-2.jpeg')} />
      </TouchableOpacity>
      )
    let T = (
      <TouchableOpacity onPress={ () => this.onPress("T", T, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/4-3.jpeg')} />
      </TouchableOpacity>
      )
    let U = (
      <TouchableOpacity onPress={ () => this.onPress("U", U, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/5-0.jpeg')} />
      </TouchableOpacity>
      )
    let V = (
      <TouchableOpacity onPress={ () => this.onPress("V", V, X)}>
        <Image style={styles.minis} source={require('../../images/cat3/5-1.jpeg')} />
      </TouchableOpacity>
      )
    let W = (
      <TouchableOpacity onPress={ () => this.onPress("W", W, X)}>
        <Image key="W" style={styles.minis} source={require('../../images/cat3/5-2.jpeg')} />
      </TouchableOpacity>
      )
    let X = (<View style={styles.minisX} ></View>)
    
    let squares = {
      A1: I,
      A2: T,
      A3: B,
      A4: S,
      B1: L,
      B2: O,
      B3: R,
      B4: F,
      C1: M,
      C2: V,
      C3: D,
      C4: A,
      D1: Q,
      D2: U,
      D3: P,
      D4: H,
      E1: J,
      E2: G,
      E3: W,
      E4: N,
      F1: X,
      F2: E,
      F3: K,
      F4: C,
      }
    let selfs = {
      A: "C4",
      B: "A3",
      C: "F4",
      D: "C3",
      E: "F2",
      F: "B4",
      G: "E2",
      H: "D4",
      I: "A1",
      J: "E1",
      K: "F3",
      L: "B1",
      M: "C1",
      N: "E4",
      O: "B2",
      P: "D3",
      Q: "D1",
      R: "B3",
      S: "A4",
      T: "A2",
      U: "D2",
      V: "C2",
      W: "E3",
      X: "F1"
      }

    this.setState({
      ...squares,
      ...selfs
    })

    }

  render() {
    return (
      <View style={styles.inner}>
        {this.state.A1}
        {this.state.A2}
        {this.state.A3}
        {this.state.A4}
        {this.state.B1}
        {this.state.B2}
        {this.state.B3}
        {this.state.B4}
        {this.state.C1}
        {this.state.C2}
        {this.state.C3}
        {this.state.C4}
        {this.state.D1}
        {this.state.D2}
        {this.state.D3}
        {this.state.D4}
        {this.state.E1}
        {this.state.E2}
        {this.state.E3}
        {this.state.E4}
        {this.state.F1}
        {this.state.F2}
        {this.state.F3}
        {this.state.F4}
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
  inner: {
    height: 540,
    width: 360,
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    flexWrap: "wrap"
    },
  image: {
    // flex: 2
    // width: undefined,
    // height: undefined
    height: 540,
    width: 360,
    borderRadius: 15,
    //resizeMode: "center",
    },
  minis: {
    //flex: 2
    // width: undefined,
    // height: undefined
    height: 90,
    width: 90,
    //borderRadius: 15,
    //resizeMode: "center",
    },
  minisX: {
    //flex: 2
    // width: undefined,
    // height: undefined
    height: 90,
    width: 90,
    //borderRadius: 15,
    //resizeMode: "center",
    backgroundColor: "#FF69B4"
    },
  button: {
    backgroundColor: "#b0e0e6",
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'    
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

export default connect(state => ({
  currentGame: state.currentGame, 
  gameStatus: state.gameStatus
}))(game)