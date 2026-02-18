import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { global } from '../config/global';

export default function PhotoDetailsScreen({ route, navigation }) {
	const [photoData, setPhotoData] = useState();
	const { photoId } = route.params;

	const getPhotoData = () => {
		fetch('https://api.unsplash.com/photos/' + photoId + '?client_id=' + global.unsplashAccessKey)
			.then((response) => response.json())
			.then((json) => {
				setPhotoData(json);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		getPhotoData();
	}, [photoId]);

	return (
		<View style={styles.PhotoDetailsScreen}>
			{photoData ? (
				<View style={styles.photoDetailsContainer}>
					<Text>{photoData.description}</Text>
				</View>
			) : (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size='large' color='#000' />
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	PhotoDetailsScreen: {
		/* Styles here */
	},
	loadingContainer: {
		height: '100%',
		justifyContent: 'center',
	},
});
