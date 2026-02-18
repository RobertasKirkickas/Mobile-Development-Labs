import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotosScreen from '../screens/Photos';
import PhotoDetailsScreen from '../screens/PhotoDetails';

export default function PhotosNavigator() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator style={styles.PhotosNavigator}>
			<Stack.Screen name='PhotosScreen' component={PhotosScreen} options={{ title: 'Photos' }} />
			<Stack.Screen name='Photo Details' component={PhotoDetailsScreen} />
		</Stack.Navigator>
	);
}
const styles = StyleSheet.create({
	PhotosNavigator: {
		/* Styles here */
	},
});
