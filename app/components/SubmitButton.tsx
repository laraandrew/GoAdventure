import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/SubmitButtonStyles';

type SubmitButtonProps = {
  onPress: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress }) => {
  const [buttonColor, setButtonColor] = useState('#5664DD');

  const handlePress = () => {
    setButtonColor('#69995D');  // Green color
    setTimeout(() => {
      setButtonColor('#5664DD');  // Blue color
      onPress();
    }, 800);
  };

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={handlePress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
