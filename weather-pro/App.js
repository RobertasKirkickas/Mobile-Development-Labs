import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LocationSearch from './src/components/LocationSearch';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [location, setLocation] = useState('Ipswich, UK');
  const apiKey = '456ec1ffa42a5683f63d03e7c257a4ad';

  const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid='+apiKey)
    .then(response => response.json())
    .then(json => {
      console.log(JSON.stringify(json, null, 2));
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
getWeather();
}, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/weather-backgrounds/rain.jpg')}
style={styles.imageBackground}>
  <LocationSearch />
</ImageBackground>
      <StatusBar hidden={true}/>
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
