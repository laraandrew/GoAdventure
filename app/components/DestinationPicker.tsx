import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type DestinationPickerProps = {
  location: string;
  onValueChange: (itemValue: string) => void;
};

const DestinationPicker: React.FC<DestinationPickerProps> = ({ location, onValueChange }) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={location}
        onValueChange={onValueChange}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Select a destination" value="" />
        <Picker.Item label="Los Angeles" value="Los Angeles" />
        <Picker.Item label="New York" value="New York" />
        <Picker.Item label="Chicago" value="Chicago" />
        <Picker.Item label="Miami" value="Miami" />
        <Picker.Item label="San Francisco" value="San Francisco" />
        {/* Add more options as needed */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: '#5664DD', // Blue background color
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#FCFAFA', // White color
    marginBottom: 5,
  },
  picker: {
    height: Platform.OS === 'ios' ? 200 : 50,
    color: '#FCFAFA', // White color
  },
  pickerItem: {
    fontSize: 16,
    color: '#000807', // Black color
  },
});

export default DestinationPicker;
