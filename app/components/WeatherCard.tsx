import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors'

// Mapping weather conditions to corresponding image sources
const weatherImages: { [key: string]: any } = {
  'partly-cloudy-day': require('../../assets/imgs/cloudy.png'),
  'partly-cloudy-night': require('../../assets/imgs/cloudy.png'),
  'clear-day': require('../../assets/imgs/sunny.png'),
  'clear-night': require('../../assets/imgs/sunny.png'),
  'rain': require('../../assets/imgs/rainy.png'),
  'snow': require('../../assets/imgs/snowy.png'),
  'cloudy': require('../../assets/imgs/cloudy.png'),
};

interface WeatherCardProps {
  date: string;
  weather: keyof typeof weatherImages;
  highTemp: number;
  lowTemp: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ date, weather, highTemp, lowTemp }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.day}>Day {date}</Text>
      <View style={styles.weatherContainer}>
        <Image source={weatherImages[weather]} style={styles.weatherImage} />
        <View style={styles.temperatures}>
          <View style={styles.tempContainer}>
            <Text style={styles.temp}>{highTemp}</Text>
          </View>
          <View style={styles.tempContainer}>
            <Text style={styles.temp}>{lowTemp}°</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
    fontFamily: 'Sansita One, sans-serif',
  },
  day: {
    fontSize: 32,
    color: colors.white,
    marginBottom: 10,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  weatherImage: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  temperatures: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  temp: {
    fontSize: 18,
    color: colors.black,
  },
});
