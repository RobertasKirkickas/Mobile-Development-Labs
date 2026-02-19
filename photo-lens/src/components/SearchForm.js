import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function SearchForm({ setSearchQuery }) {
	const [text, setText] = useState();
	const changeHandler = (val) => {
		setText(val);
	};
	const submitHandler = () => {
		Keyboard.dismiss();
		setSearchQuery(text);
	};

	return (
		<View style={styles.searchForm}>
			<TextInput
				onSubmitEditing={() => {
					submitHandler();
				}}
				style={styles.input}
				placeholder='Search photos...'
				onChangeText={changeHandler}
			/>
			<Pressable onPress={() => submitHandler()} style={styles.searchButton}>
				<Feather style={styles.icon} name='search' size={24} color='#FFF' />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	searchForm: {
		width: '100%',
		height: 40,
		flexDirection: 'row',
		backgroundColor: '#FFF',
	},
	input: {
		flexGrow: 1,
		color: '#000',
		paddingHorizontal: 8,
		borderWidth: 2,
		borderColor: '#000',
	},
	searchButton: {
		width: 40,
		height: 40,
		padding: 2,
		backgroundColor: '#000',
	},
	icon: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		lineHeight: 32,
	},
});
