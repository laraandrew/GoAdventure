import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#FCFAFA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    alignItems: 'center',
    borderWidth: 2,
    flexDirection: 'column',
    gap: 2,
  },
  date: {
    fontSize: 16,
    color: '#000807',
    marginBottom: 10,
  },
  weatherImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  temp: {
    fontSize: 18,
    color: '#000807',
  },
});
