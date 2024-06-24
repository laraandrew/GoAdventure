// app/styles/SplashScreenStyles.ts

import { StyleSheet } from 'react-native';

// Creating a stylesheet for the SplashScreen component
const styles = StyleSheet.create({
  container: {
    // Style for the main container of the screen
    flex: 1, // Ensures the container takes up the full height
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
    backgroundColor: '#3498db', // Sets the background color to blue
  },
  title: {
    // Style for the title text
    fontSize: 40, // Font size of the title
    color: 'white', // Sets the text color to white
    fontWeight: 'bold', // Makes the title text bold
  },
});

export default styles;
