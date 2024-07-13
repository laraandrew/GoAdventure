// app/types.ts
export type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'snowy';

export type RootStackParamList = {
  Splash: undefined;
  Input: undefined;
  Results: {
    location: string;
    arrivalDate: string;
    departureDate: string;
    weatherData: {
      date: string;
      conditions: string;
      highTemp: number;
      lowTemp: number;
    }[];
  };
};
export type WeatherData = {
  date: string;
  conditions: string;
  highTemp: number;
  lowTemp: number;
};

