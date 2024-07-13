import React, { useState } from 'react';
import { View, Text, Alert, Platform, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../utils/types';
import DateInput from '../components/DateInput';
import DestinationPicker from '../components/DestinationPicker';
import SubmitButton from '../components/SubmitButton';
import { getWeatherData } from '../utils/api';

const InputScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [location, setLocation] = useState('');
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [isArrivalPickerVisible, setArrivalPickerVisible] = useState(false);
  const [isDeparturePickerVisible, setDeparturePickerVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState('#5664DD');

  const formatDate = (date: Date | null): string => {
    return date ? date.toISOString().split('T')[0] : '';
  };

  const handleArrivalConfirm = (date: Date | null) => {
    if (date) {
      setArrivalDate(date);
    }
    setArrivalPickerVisible(false);
  };

  const handleDepartureConfirm = (date: Date | null) => {
    if (date) {
      setDepartureDate(date);
    }
    setDeparturePickerVisible(false);
  };

  const handleSubmit = async () => {
    setButtonColor('#69995D'); // Green color on press
    try {
      const weatherData = await getWeatherData(
        location,
        formatDate(arrivalDate),
        formatDate(departureDate)
      );
      setButtonColor('#5664DD'); // Revert back to blue
      navigation.navigate('Results', {
        location,
        arrivalDate: formatDate(arrivalDate),
        departureDate: formatDate(departureDate),
        weatherData,
      });
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
          date={formatDate(arrivalDate)}
          onPress={() => setArrivalPickerVisible(true)}
        />
        <DateInput
          label="Departure"
          date={formatDate(departureDate)}
          onPress={() => setDeparturePickerVisible(true)}
        />
      </View>
      {Platform.OS !== 'web' && (
        <>
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
        </>
      )}
      <DestinationPicker location={location} onValueChange={setLocation} />
      <SubmitButton onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000807',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FCFAFA',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FCFAFA',
    marginBottom: 40,
    textAlign: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#5664DD',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FCFAFA',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InputScreen;
