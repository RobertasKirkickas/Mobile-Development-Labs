import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { global } from '../config/global';

export default function PhotosScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState('Beach');
	const [photos, setPhotos] = useState();

	const searchPhotos = () => {};

	useEffect(() => {
		searchPhotos();
		console.log('Make a call to the API using the search query: ' + searchQuery);

		fetch('https://api.unsplash.com/search/photos?client_id=' + global.unsplashAccessKey + '&query=' + searchQuery)
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				setPhotos(json['results']);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [searchQuery]);

	return (
		<View style={styles.PhotosScreen}>
			<Text>Photos screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	PhotosScreen: {
		/* styles here */
	},
});
