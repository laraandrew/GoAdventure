import React from 'react';
import { View, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/DestinationPickerStyles';

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

export default DestinationPicker;
