import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  dateInputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    color: '#FCFAFA', // White color
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#FCFAFA', // White color
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000807', // Black color
    backgroundColor: '#FCFAFA', // White color
  },
});

export default DateInput;
