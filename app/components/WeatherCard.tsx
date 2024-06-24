// WeatherCard.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/WeatherCardStyles';

// Weather type mapping to corresponding image
const weatherImages: { [key: string]: any } = {
  sunny: require('../../assets/imgs/sunny.png'),
  cloudy: require('../../assets/imgs/cloudy.png'),
  rainy: require('../../assets/imgs/rainy.png'),
  snowy: require('../../assets/imgs/snowy.png')
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
