import { AsyncStorage } from 'react-native';
import { Actions } from 'jumpstate';

export const getCurrentGame = async () => {
  let currGame = null;
  try { currGame = await AsyncStorage.getItem('currGame' || null )
  } catch ( err ) {
    console.log(err.message)
  }
  Actions.setGame(currGame)
}

export const setCurrentGame = async currG => {
  try {
    await AsyncStorage.setItem('currGame', currG)
  } catch ( err ) {
    console.log( err.message )
  }
  Actions.setGame(currG)
}

export const getGameStatus = async () => {
	let gameStatus = null;
	try { gameStatus = await AsyncStorage.getItem('gameStatus' || null)
	} catch ( err ) {
		console.log(err.message)
	}
	Actions.setGameStatus(JSON.parse(gameStatus))
	return gameStatus
}

export const setGameStatus = async gameStatus => {
	console.log("hit sGS")
	try {
		await AsyncStorage.setItem('gameStatus', gameStatus)
		Actons.setGameStatus(gameStatus)
	} catch ( err ) {
		console.log( err.message )
	}
}

export const resetGameStatus = async gameStatus => {
	try {
		await AsyncStorage.setItem('gameStatus', null)
	} catch ( err ) {
		console.log( err.message )
	}
	Actions.resetGameStatus()
}