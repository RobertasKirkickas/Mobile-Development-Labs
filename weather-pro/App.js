import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LocationSearch from './src/components/LocationSearch';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './src/components/WeatherDisplay'



export default function App() {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState('Ipswich, UK');
  const apiKey = '456ec1ffa42a5683f63d03e7c257a4ad';

  const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=' + apiKey)
      .then(response => response.json())
      .then(json => {
        console.log(JSON.stringify(json, null, 2));
        setWeatherData({
          temp: json.main.temp,
          humidity: json.main.humidity,
          pressure: json.main.pressure,
          feelsLike: json.main.feels_like,
          description: json.weather[0].description,
          icon: json.weather[0].icon,
          windSpeed: json.wind.speed
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    getWeather();
  }, [location]);

  const updateLocation = (newLocation) => {
    setLocation(newLocation);

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/weather-backgrounds/rain.jpg')}
        style={styles.imageBackground}>
        <LocationSearch updateLocation={updateLocation} />
        <WeatherDisplay weatherData={weatherData} />
      </ImageBackground>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  }
});
