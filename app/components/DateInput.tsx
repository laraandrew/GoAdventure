import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/DateInputStyles';

type DateInputProps = {
  label: string;
  date: string;
  onPress: () => void;
};

const DateInput: React.FC<DateInputProps> = ({ label, date, onPress }) => {
  return (
    <View style={styles.dateInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <TextInput
          style={styles.input}
          placeholder="mm/dd/yyyy"
          value={date}
          editable={false} // Make the input non-editable
          pointerEvents="none" // Prevent touch events
        />
      </TouchableOpacity>
    </View>
  );
};

export default DateInput;
