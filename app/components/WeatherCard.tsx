import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FCFAFA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd', // Add border color
    shadowColor: '#000', // Add shadow for elevation effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  date: {
    fontSize: 16,
    color: '#000807',
    marginBottom: 10,
  },
  weatherImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  temp: {
    fontSize: 18,
    color: '#000807',
  },
});
