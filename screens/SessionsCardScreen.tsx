import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
export default function SessionsCardScreen() {
  const [PlayerId, setPlayerId] = useState(620);

  const apiURL = 'http://172.28.16.1:8000';
  const argentinaFlag = require('../assets/Flags/AR.png');
  const [TotalScore, setTotalScore] = useState('n/a');
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

  return (
    <ImageBackground
      source={require('../assets/bg_session.png')}
      style={styles.background}
    >
      <View style={styles.container}>
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

        {/* Six small squares on the left under the blue line */}
        <View style={styles.smallSquareLeft}>
          <Text style={styles.smallSquareTextLeft}>Decision Making</Text>
          <Text style={styles.smallSquareNumber}>85</Text>
        </View>
        <View style={styles.smallSquareLeft2}>
          <Text style={styles.smallSquareTextLeft2}>Pre-orientation</Text>
          <Text style={styles.smallSquareNumber}>90</Text>
        </View>
        <View style={styles.smallSquareLeft3}>
          <Text style={styles.smallSquareTextLeft3}>Cog,Flexibility</Text>
          <Text style={styles.smallSquareNumber}>88</Text>
        </View>
        <View style={styles.smallSquareLeft4}>
          <Text style={styles.smallSquareTextLeft4}>Accoust.Preception</Text>
          <Text style={styles.smallSquareNumber}>81</Text>
        </View>
        <View style={styles.smallSquareLeft5}>
          <Text style={styles.smallSquareTextLeft5}>Skill12</Text>
          <Text style={styles.smallSquareNumber}>79</Text>
        </View>
        <View style={styles.smallSquareLeft6}>
          <Text style={styles.smallSquareTextLeft6}>Skill13</Text>
          <Text style={styles.smallSquareNumber}>80</Text>
        </View>
        {/* Six small squares on the left under the blue line */}
        <View style={styles.smallSquareRight}>
          <Text style={styles.smallSquareTextRight}>Right Foot</Text>
          <Text style={styles.smallSquareNumber}>89</Text>
        </View>
        <View style={styles.smallSquareRight2}>
          <Text style={styles.smallSquareTextRight}>Left Foot</Text>
          <Text style={styles.smallSquareNumber}>87</Text>
        </View>

        <View style={styles.smallSquareRight3}>
          <Text style={styles.smallSquareTextRight}>Total Passes</Text>
          <Text style={styles.smallSquareNumber}>79</Text>
        </View>
        <View style={styles.smallSquareRight4}>
          <Text style={styles.smallSquareTextRight}>Battles</Text>
          <Text style={styles.smallSquareNumber}>85</Text>
        </View>

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
          <Text style={styles.trainingTimeText}>Total training Time</Text>
          <Text style={styles.trainingTime}>{TotalTrainingTime.totalSessionHours}H : {TotalTrainingTime.totalSessionMinutes}M</Text>
        </View>
        <View >
          <Text style={styles.WorldRankingText}>World Ranking</Text>
          <Text style={styles.WorldRankingNumber}>132</Text>
        </View>
        <View >
          <Text style={styles.TotalSessionsText}>Total Sessions</Text>
          <Text style={styles.TotalSessionsNumber}>{TrainingSessionsCount}</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  WorldRankingText: {
    color: 'white',
    bottom: '350%',
    left: 250,
    fontSize: 18,


  },
  WorldRankingNumber: {
    color: 'white',
    bottom: '320%',
    left: 280,
    fontSize: 15,

  },
  TotalSessionsText: {
    color: 'white',
    bottom: '300%',
    left: 250,
    fontSize: 18,

  },
  TotalSessionsNumber: {
    color: 'white',
    bottom: '280%',
    left: 280,
    fontSize: 15,

  },
  trainingTimeText: {
    color: 'white',
    bottom: '260%',
    left: 30,
    fontSize: 18,


  },
  trainingTime: {
    color: 'white',
    bottom: '230%',
    left: 50,
    fontSize: 15,


  },
  TotalGamesText: {
    color: 'white',
    bottom: '10%',
    left: 40,
    fontSize: 18,

  },
  TotalGames: {
    color: 'white',
    bottom: '-5%',
    left: 70,
    fontSize: 15,

  },
  horizontalLine: {
    width: '70%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 35,
    left: 60,
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: 'white',
    marginHorizontal: 30,
    left: 170,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: -200,
    right: 30,
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
    marginTop: 250,
  },
  blueLine: {
    height: 100,
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  leftImage: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
    position: 'absolute',
    top: -180,
    left: 15,
  },
  imageText: {
    color: 'white',
    fontSize: 25,
    left: 50,
    marginTop: 30,
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
    top: -90,
    right: 30,
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
  smallSquareLeft: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 120,
    left: 40,
  },
  smallSquareLeft2: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 155,
    left: 40,
  },
  smallSquareLeft3: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 190,
    left: 40,
  },
  smallSquareLeft4: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 225,
    left: 40,
  },
  smallSquareLeft5: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 260,
    left: 40,
  },
  smallSquareLeft6: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 295,
    left: 40,
  },
  smallSquareRight: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 120,
    right: 145,
  },
  smallSquareRight2: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 155,
    right: 145,
  },
  smallSquareRight3: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 190,
    right: 145,
  },
  smallSquareRight4: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 225,
    right: 145,
  },
  smallSquareRight5: {
    width: 40,
    height: 25,
    backgroundColor: '#6BA5D4',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    top: 260,
    right: 145,
  },

  smallSquareNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 0,
    top: -12,
  },
  smallSquareTextLeft: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 50,
    top: 10,
  },
  smallSquareTextLeft2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 50,
    top: 10,
  },
  smallSquareTextLeft3: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 50,
    top: 10,
  },
  smallSquareTextLeft4: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 50,
    top: 10,
  },
  smallSquareTextLeft5: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 50,
    top: 10,
  },
  smallSquareTextLeft6: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 50,
    top: 10,
  },
  smallSquareTextRight: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    left: 50,
    top: 10,
  },
  smallSquareTextRight2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    left: 50,
    top: 10,
  },
  smallSquareTextRight3: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    left: 50,
    top: 10,
  },
  smallSquareTextRight4: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    left: 50,
    top: 10,
  },
  smallSquareTextRight5: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    left: 50,
    top: 10,
  },
});

