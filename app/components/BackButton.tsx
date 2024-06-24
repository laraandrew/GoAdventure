import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/BackButtonStyles'; // Importing the styles from the separate file

type BackButtonProps = {
  onPress: () => void; // Function to handle the press event on the back button
};

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    // TouchableOpacity component to make the back button touchable
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      {/* Text displayed on the back button */}
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
