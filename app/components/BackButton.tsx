import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type BackButtonProps = {
  onPress: () => void; // Function to handle the press event on the back button
};

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
  );
};

// Creating a stylesheet for the BackButton component
const styles = StyleSheet.create({
  backButton: {
    // Positioning the back button at the top left
    position: 'absolute',
    top: 40, // Distance from the top
    left: 20, // Distance from the left
    zIndex: 1, // Ensuring it appears above other elements
  },
  backButtonText: {
    // Styling the text of the back button
    color: '#3498db', // Blue color for the text
    fontSize: 18, // Font size of the text
  },
});

export default BackButton;