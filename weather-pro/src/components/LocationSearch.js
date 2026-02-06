import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function LocationSearch() {



return (
<View style={styles.searchForm}>

<TextInput
placeholder="Search location..."
placeholderTextColor="#FFF"
style={styles.input}
/>
<TouchableOpacity style={styles.button}>
<FontAwesome style={styles.button} name="search" size={24} color="black" />
</TouchableOpacity>

</View>
);
}




const styles = StyleSheet.create({
searchForm: {
padding: 20,
height: 100,
alignItems: 'flex-start',
flexDirection: 'row'
},
input: {
flexGrow: 1,
paddingHorizontal: 15,
paddingVertical: 5,
borderColor: '#FFF',
borderRadius: 15,
borderWidth: 1,
fontSize: 15,
color: '#FFF',
marginRight: 10
},
button: {
width: 30,
height: 35,
color: '#FFF',
alignItems: 'center',
justifyContent: 'center',
}
});