import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, WeatherType } from '../utils/types';
import WeatherCard from '../components/WeatherCard';
import BackButton from '../components/BackButton';
import { colors } from '../../assets/colors'


type ResultsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Results'>;
type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;

type Props = {
  navigation: ResultsScreenNavigationProp;
  route: ResultsScreenRouteProp;
};

const ResultsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { location, arrivalDate, departureDate, weatherData } = route.params;

  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Your Trip Details</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {weatherData.map((day, index) => (
          <WeatherCard
            key={index}
            date={day.date}
            weather={day.conditions as WeatherType}
            highTemp={day.highTemp}
            lowTemp={day.lowTemp}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    color: colors.black,
    fontFamily: 'Sansita One, sans-serif',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
    height: '100%', 
  },
});

export default ResultsScreen;
