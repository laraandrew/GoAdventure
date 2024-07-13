import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type SubmitButtonProps = {
  onPress: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress }) => {
  const [buttonColor, setButtonColor] = useState('#5664DD'); // Blue color

  const handlePress = () => {
    setButtonColor('#69995D'); // Green color
    setTimeout(() => {
      setButtonColor('#5664DD'); // Revert back to blue
      onPress();
    }, 800);
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FCFAFA', // White color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubmitButton;
