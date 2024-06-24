import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/WeatherCardStyles';

// Mapping weather conditions to corresponding image sources
const weatherImages: { [key: string]: any } = {
  'partly-cloudy-day': require('../../assets/imgs/cloudy.png'),
  'partly-cloudy-night': require('../../assets/imgs/cloudy.png'),
  'clear-day': require('../../assets/imgs/sunny.png'),
  'clear-night': require('../../assets/imgs/sunny.png'),
  'rain': require('../../assets/imgs/rainy.png'),
  'snow': require('../../assets/imgs/snowy.png'),
  'cloudy': require('../../assets/imgs/cloudy.png'),
  // Add more mappings as needed
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
      <Text style={styles.date}>{date}</Text>
      <Image source={weatherImages[weather]} style={styles.weatherImage} />
      <Text style={styles.temp}>
        High: {highTemp}°F - Low: {lowTemp}°F
      </Text>
    </View>
  );
};

export default WeatherCard;
