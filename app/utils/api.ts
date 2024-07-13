// utils/api.ts
import { WeatherData } from './types';

export const getWeatherData = async (location: string, arrivalDate: string, departureDate: string): Promise<WeatherData[]> => {
  // Mock data for testing purposes
  return [
    { date: '2024-06-24', conditions: 'Sunny', highTemp: 85.9, lowTemp: 69.1 },
    { date: '2024-06-25', conditions: 'Cloudy', highTemp: 83.9, lowTemp: 67.0 },
    { date: '2024-06-26', conditions: 'Rain', highTemp: 83.0, lowTemp: 65.9 },
    { date: '2024-06-27', conditions: 'Sunny', highTemp: 82.4, lowTemp: 64.8 },
  ];
};
