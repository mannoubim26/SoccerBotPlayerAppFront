import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ListRenderItem,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Item {
  id: number;
  text: string;
  number: number;
  date: string;
  duration: string;
  games: number;
  passes: number;
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  sessionListText: {
    position: 'absolute',
    top: height * 0.2,
    left: Dimensions.get('window').width * 0.06,
    color: 'white',
    fontSize: 24,
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  searchIconContainer: {
    position: 'absolute',
    top: height * 0.06,
    right: Dimensions.get('window').width * 0.05,
  },
  arrowIconContainer: {
    position: 'absolute',
    top: height * 0.06,
    left: Dimensions.get('window').width * 0.05,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBackground: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
  },

  circleText: {
    color: 'white',
    fontSize: 30,
    top: '15%',
  },
  logoContainer: {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -20 }],
  },
  logo: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  blueCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0443AC',
    marginLeft: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DynamicList: React.FC = () => {
  const { width: windowWidth } = useWindowDimensions();
  const [numberOfItems, setNumberOfItems] = useState<number>(50);

  const data: Item[] = Array.from({ length: numberOfItems }, (_, index) => ({
    id: index,
    text: `Item ${index + 1}`,
    number: index + 1,
    date: 'March 7, 2024',
    duration: '01H 30M',
    games: 12,
    passes: 134,
  }));

  const renderItem: ListRenderItem<Item> = ({ item, index }) => (
    <View style={{ paddingRight: windowWidth * 0.0 }}>
      <View style={styles.itemBackground}>
        <ImageBackground
          source={require('../assets/bg_session.png')}
          style={styles.item}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 17 }}>{item.date}</Text>
              <Text style={{ color: 'white', fontSize: 17 }}>
                Duration: {item.duration}
              </Text>
              <Text style={{ color: 'white', fontSize: 17 }}>
                {item.games} games, {item.passes} passes
              </Text>
            </View>
            <View style={styles.blueCircle}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../assets/logo.png')}
                  style={styles.logo}
                />
              </View>
              <Text style={styles.circleText}>{item.number}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );



  return (
    <ImageBackground source={require('../assets/bg_session.png')} style={styles.background}>
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
        style={styles.gradient}
      />
      <TouchableOpacity style={styles.searchIconContainer}>
        <Icon name="search" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.arrowIconContainer}>
        <Icon name="arrow-left" size={20} color="white" />
      </TouchableOpacity>

      <Text style={styles.sessionListText}>
        Training Sessions List
      </Text>

      <View style={styles.buttonContainer}></View>

      <FlatList
        style={{ flex: 1, marginTop: height * 0.24 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ImageBackground>
  );
};

export default DynamicList;
