import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from '../styles/InputScreenStyles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../utils/types';
import DateInput from '../components/DateInput';
import DestinationPicker from '../components/DestinationPicker';
import SubmitButton from '../components/SubmitButton';
import { getWeatherData } from '../utils/WeatherService';

const InputScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [location, setLocation] = useState('');
  const [arrivalDate, setArrivalDate] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<string>('');
  const [isArrivalPickerVisible, setArrivalPickerVisible] = useState(false);
  const [isDeparturePickerVisible, setDeparturePickerVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState('#5664DD');

  const handleArrivalConfirm = (date: Date) => {
    setArrivalDate(date.toISOString().split('T')[0]);
    setArrivalPickerVisible(false);
  };

  const handleDepartureConfirm = (date: Date) => {
    setDepartureDate(date.toISOString().split('T')[0]);
    setDeparturePickerVisible(false);
  };

  const handleSubmit = async () => {
    setButtonColor('#69995D'); // Green color on press
    try {
      const weatherData = await getWeatherData(location, arrivalDate, departureDate);
      setButtonColor('#5664DD'); // Revert back to blue
      navigation.navigate('Results', { location, arrivalDate, departureDate, weatherData });
    } catch (error) {
      setButtonColor('#5664DD'); // Revert back to blue
      Alert.alert('Error', 'Failed to fetch weather data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Adventure</Text>
      <Text style={styles.subtitle}>Enter your trip details below</Text>
      <View style={styles.dateContainer}>
        <DateInput
          label="Arrival"
          date={arrivalDate}
          onPress={() => setArrivalPickerVisible(true)}
        />
        <DateInput
          label="Departure"
          date={departureDate}
          onPress={() => setDeparturePickerVisible(true)}
        />
      </View>
      <DateTimePickerModal
        isVisible={isArrivalPickerVisible}
        mode="date"
        onConfirm={handleArrivalConfirm}
        onCancel={() => setArrivalPickerVisible(false)}
      />
      <DateTimePickerModal
        isVisible={isDeparturePickerVisible}
        mode="date"
        onConfirm={handleDepartureConfirm}
        onCancel={() => setDeparturePickerVisible(false)}
      />
      <DestinationPicker location={location} onValueChange={setLocation} />
      <SubmitButton onPress={handleSubmit} />
    </View>
  );
};

export default InputScreen;
