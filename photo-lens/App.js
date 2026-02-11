import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import CollectionsScreen from './src/screens/Collections';
import PhotosScreen from './src/screens/Photos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Photo Lens' }} />
				<Stack.Screen name='Photos' component={PhotosScreen} options={{ title: 'Photos' }} />
				<Stack.Screen name='Collections' component={CollectionsScreen} options={{ title: 'Photo Collections' }} />
			</Stack.Navigator>
			<StatusBar style='auto' hidden={true} />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {},
});
