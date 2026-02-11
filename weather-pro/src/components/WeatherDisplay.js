import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function WeatherDisplay({ weatherData }) {
    if (weatherData) {
        return (
            <View style={styles.weatherDisplay}>

                <View style={styles.weatherDetails}>

                <Text style={[styles.weatherDetailText, styles.weatherDescription]} >

                {weatherData.name || "Unknown Location"}

                </Text>

                    <Image source={{
                        uri: 'https://openweathermap.org/img/wn/' + weatherData.icon +
                            '@2x.png'
                    }} style={styles.weatherIcon} />

                    <Text style={[styles.weatherDetailText, styles.weatherDescription]} >
                        {`${weatherData.temp > 20 && weatherData.temp < 30
                            ? `${weatherData.temp}
🌤`
                            : weatherData.temp >= 30
                                ? `${weatherData.temp} ☀`
                                : weatherData.temp <= 20
                                    ? `${weatherData.temp} ☁`
                                    : ""
                            }`}
                    </Text>


                </View>
            </View>
        );
    } else {
        return (
            <View style={[styles.weatherDisplay, styles.weatherDetailText]}>
                <Text>Loading weather data...</Text>
            </View>
        );
    }
}





const styles = StyleSheet.create({
    weatherDisplay: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 15,
        margin: 15,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    weatherDetails: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    weatherIcon: {
        width: 120,
        height: 120,
    },
    weatherDetailText: {
        fontWeight: '700',
        fontSize: 18,
    },
    weatherDescription: {
        marginBottom: 10,
    }
});