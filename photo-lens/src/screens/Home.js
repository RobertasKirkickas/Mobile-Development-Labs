import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.HomeScreen}>
			<Pressable onPress={() => navigation.navigate('Photos')}>
				<Text>Browse Photos</Text>
			</Pressable>
			<Pressable onPress={() => navigation.navigate('Collections')}>
				<Text>Browse Collections</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	HomeScreen: {
		padding: 20,
	},
});
