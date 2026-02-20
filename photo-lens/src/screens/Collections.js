import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, Pressable } from 'react-native';
import { global } from '../config/global';
import SearchForm from '../components/SearchForm';

export default function CollectionsScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState('Cars');
	const [collections, setCollections] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const numberOfColumns = 2;

	const searchCollections = () => {
		// Remove accidental spaces from the search text.
		const query = searchQuery?.trim();
		// If query is empty, clear results and stop loading state.
		if (!query) {
			setCollections([]);
			setIsLoading(false);
			return;
		}

		setIsLoading(true);
		// Fetch matching collections from Unsplash.
		fetch('https://api.unsplash.com/search/collections?client_id=' + global.unsplashAccessKey + '&query=' + encodeURIComponent(query))
			.then((response) => response.json())
			.then((json) => {
				// Keep results safe even if API response is broken.
				setCollections(Array.isArray(json['results']) ? json['results'] : []);
			})
			.catch((error) => {
				// Log request errors and reset list.
				console.error(error);
				setCollections([]);
			})
			.finally(() => {
				// Always end loading state after request completes.
				setIsLoading(false);
			});
	};

	useEffect(() => {
		// Re-run search whenever the query changes.
		searchCollections();
	}, [searchQuery]);

	return (
		<View style={styles.CollectionsScreen}>
			<SearchForm type='collections' setSearchQuery={setSearchQuery} />
			{/* Loading state */}
			{isLoading ? (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size='large' color='#000' />
				</View>
			) : /* Results state */ collections.length > 0 ? (
				<View style={styles.resultsContainer}>
					<FlatList
						key={`collections-columns-${numberOfColumns}`}
						data={collections}
						numColumns={numberOfColumns}
						style={{ margin: 10, marginBottom: 100 }}
						renderItem={({ item }) => (
							<Pressable
								style={styles.resultImageTouchable}
								onPress={() => {
									navigation.navigate('Collection Details', {
										collectionId: item.id,
									});
								}}
							>
								{item.cover_photo ? (
									<Image style={styles.resultImage} source={{ uri: item.cover_photo.urls.regular }} />
								) : (
									<View style={styles.noImage}>
										<Text>No Preview</Text>
									</View>
								)}
							</Pressable>
						)}
					/>
				</View>
			) : (
				/* Empty state */ <View style={styles.emptyContainer}>
					<Text>No collections found.</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	CollectionsScreen: {
		/* styles here */
	},
	loadingContainer: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyContainer: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	resultImage: {
		flex: 1,
		height: 200,
	},
	resultImageTouchable: {
		flex: 1,
		margin: 10,
		height: 200,
	},
	noImage: {
		backgroundColor: '#b2bec3',
		height: 200,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
