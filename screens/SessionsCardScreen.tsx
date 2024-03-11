import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
export default function SessionsCardScreen() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [PlayerId, setPlayerId] = useState(620);

  const apiURL = 'http://172.28.16.1:8000';
  const argentinaFlag = require('../assets/Flags/AR.png');
  const [TotalScore, setTotalScore] = useState('');
  const [TotalGames, setTotalGames] = useState(0);
  const [TrainingSessionsCount, setTrainingSessionsCount] = useState(0);

  const [TotalTrainingTime, setTotalTrainingTime] = useState({
    totalSessionHours: '00',
    totalSessionMinutes: '00'
  });

  const [PlayerName, setPlayerName] = useState({
    firstname: '',
    lastname: '',
  })
  // TrainingSessionsCount

  const getTrainingSessionsCount = async () => {
    try {
      const response = await fetch(`${apiURL}/api/Sessions/TrainingSessionsCount/${PlayerId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data); // Log the entire response
        setTrainingSessionsCount(data.Session_Count);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //Total Training Time

  const getTotalTrainingTime = async () => {
    try {
      const response = await fetch(`${apiURL}/api/Sessions/TotalTrainingTime/${PlayerId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data); // Log the entire response
        setTotalTrainingTime({ totalSessionHours: data.totalSessionHours, totalSessionMinutes: data.totalSessionMinutes });
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //Total Score 

  const getTotalScore = async () => {
    try {
      const response = await fetch(`${apiURL}/api/Sessions/TotalScore/${PlayerId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data); // Log the entire response
        console.log('Total Score:', data.TotalScore);
        setTotalScore(parseFloat(data.TotalScore).toFixed(0));
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //total games

  const getTotalGames = async () => {
    try {
      const response = await fetch(`${apiURL}/api/Sessions/totalGames/${PlayerId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data); // Log the entire response
        setTotalGames(data.totalGames);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //Player name

  const getPlayerName = async () => {
    try {
      const response = await fetch(`${apiURL}/api/Sessions/PlayerName/${PlayerId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data); // Log the entire response
        setPlayerName({ firstname: data.firstname, lastname: data.lastname });
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getTotalScore();
    getPlayerName();
    getTotalGames();
    getTotalTrainingTime();
    getTrainingSessionsCount();
  }, [])
  const styles = StyleSheet.create({
    firstBlock: {
      flex: windowHeight * 0.45,
      position: 'relative',
    },
    secondBlock: {
      flex: windowHeight * 0.30,
      position: 'relative',
    },
    thirdBlock: {
      flex: windowHeight * 0.25,
      position: 'relative',
    },
    WorldRankingText: {
      color: 'white',
      fontSize: 18,
      position: 'absolute',
      bottom: windowHeight * 0.17,  // Adjusted to be 10% from the top
      right: windowWidth * 0.09,  // Adjusted to be 5% from the right
    },
    WorldRankingNumber: {
      color: 'white',
      fontSize: 15,
      position: 'absolute',
      bottom: windowHeight * 0.13,  // Adjusted to be 10% from the top
      right: windowWidth * 0.2,  // Adjusted to be 5% from the right
    },


    TotalSessionsText: {
      color: 'white',
      fontSize: 18,
      position: 'absolute',
      bottom: windowHeight * 0.1,  // Adjusted to be 10% from the top
      right: windowWidth * 0.09,  // Adjusted to be 5% from the right
    },
    TotalSessionsNumber: {
      color: 'white',
      fontSize: 15,
      position: 'absolute',
      bottom: windowHeight * 0.06,  // Adjusted to be 10% from the top
      right: windowWidth * 0.2,  // Adjusted to be 5% from the right
    },
    trainingTimeText: {
      color: 'white',
      fontSize: 18,
      position: 'absolute',
      bottom: windowHeight * 0.1,  // Adjusted to be 10% from the top
      left: windowWidth * 0.06,


    },
    trainingTime: {
      color: 'white',
      fontSize: 15,
      bottom: windowHeight * 0.06,  // Adjusted to be 10% from the top
      left: windowWidth * 0.15,



    },
    TotalGamesText: {
      color: 'white',
      fontSize: 18,
      position: 'absolute',
      bottom: windowHeight * 0.17,  // Adjusted to be 10% from the top
      left: windowWidth * 0.07,
    },
    TotalGames: {
      color: 'white',
      fontSize: 15,
      position: 'absolute',
      bottom: windowHeight * 0.13,  // Adjusted to be 10% from the top
      left: windowWidth * 0.19,

    },
    horizontalLine: {
      width: '70%',
      height: 1,
      backgroundColor: 'white',
      position: 'absolute',
      top: 0, // Centered vertically
      left: '15%', // Adjust as needed
    },


    verticalLine: {
      width: 1,
      height: '70%',
      backgroundColor: 'white',
      position: 'absolute',
      top: windowWidth * 0.06, // Adjust as needed
      left: windowWidth / 2 - 0.5,  // Centered horizontally
    },

    textContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: windowWidth * 0.55, // Adjust as needed
      right: windowWidth * 0.09, // Adjust as needed
    },
    positionAgeContainer: {
      flexDirection: 'column',
      marginRight: 10,
      marginTop: 18,
    },
    ageText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',

    },
    positionText: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    flagContainer: {
      flexDirection: 'column',
      marginRight: 30,
    },
    CountryText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
    },
    blueLine: {
      height: 100,
      width: '100%',
      position: 'absolute',
      bottom: 0,
    },
    leftImage: {
      width: 180,
      height: 180,
      resizeMode: 'cover',
      position: 'absolute',
      top: windowHeight * 0.07,  // Adjusted to be centered vertically
      left: 14,
    },
    imageText: {
      color: 'white',
      fontSize: 25,
      position: 'absolute',
      bottom: windowHeight * 0.06,  // Adjusted to be inside the blue line
      left: windowWidth * 0.2,
    },

    flagIcon: {
      width: 35,
      height: 25,
      resizeMode: 'cover',
      marginLeft: 2,
    },
    circle: {
      width: 170,
      height: 170,
      borderRadius: 85,
      backgroundColor: '#0443AC',
      position: 'absolute',
      bottom: windowHeight * 0.05,  // Adjusted to be at the bottom
      right: windowWidth * 0.06,
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
      width: 80,
      height: 60,
      resizeMode: 'contain',
    },
    circleNumber: {
      color: 'white',
      fontSize: 60,
      fontWeight: 'bold',
      marginTop: 5,
    },

  });

  return (
    <ImageBackground
      source={require('../assets/bg_session.png')}
      style={styles.background}
    >
      <View style={styles.container}>

        <>
          {/* First Block (50% of the screen) */}
          <View style={styles.firstBlock}>
            <LinearGradient
              colors={['#161364', '#092F88']}
              style={styles.blueLine}
            />
            <Image
              source={require('../assets/messi.png')}
              style={styles.leftImage}
            />
            <Text style={styles.imageText}>{PlayerName.firstname[0]}. {PlayerName.lastname}</Text>
            <View style={styles.textContainer}>
              <View style={styles.flagContainer}>
                <Text style={styles.CountryText}>ARG</Text>
                <Image source={argentinaFlag} style={styles.flagIcon} />
              </View>
              <View style={styles.positionAgeContainer}>
                <Text style={styles.ageText}>36 yrs</Text>
                <Text style={styles.positionText}>LW</Text>
              </View>
            </View>
            <View style={styles.circle}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
              />
              <Text style={styles.circleNumber}>{TotalScore}</Text>
            </View>
          </View>
        </>


        <>
          {/* Second Block (25% of the screen) */}
          <View style={[styles.container, styles.secondBlock]}>
          </View>
        </>

        <>
          {/* Third Block (25% of the screen) */}
          <View style={[styles.container, styles.thirdBlock]}>
            <View style={styles.container}>
              {/* Horizontal white line */}
              <View style={styles.horizontalLine} />

              {/* Vertical white line */}
              <View style={styles.verticalLine} />

            </View>
            <View>
              <Text style={styles.TotalGamesText}>Played Games</Text>
              <Text style={styles.TotalGames}>{TotalGames}</Text>
            </View>
            <View>
              <Text style={styles.WorldRankingText}>World Ranking</Text>
              <Text style={styles.WorldRankingNumber}>132</Text>
            </View>
            <View>
              <Text style={styles.trainingTimeText}>Total training Time</Text>
              <Text style={styles.trainingTime}>{TotalTrainingTime.totalSessionHours}H : {TotalTrainingTime.totalSessionMinutes}M</Text>
            </View>

            <View >
              <Text style={styles.TotalSessionsText}>Total Sessions</Text>
              <Text style={styles.TotalSessionsNumber}>{TrainingSessionsCount}</Text>
            </View>

            <StatusBar style="auto" />
          </View>
        </>
      </View>
    </ImageBackground>
  );
}


