import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from 'react';


export default function App() {
  const [icon, setIcon] = useState('fort-awesome');
  const possibleIcons = ['square-web-awesome-stroke', 'square-font-awesome', 'space-awesome',
'fort-awesome-alt']

    const changeIcon = () => {
      const newIcon = possibleIcons[Math.floor(Math.random()*possibleIcons.length)];
      setIcon(newIcon);
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeIcon}>
      <FontAwesome6 name={icon} size={80} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
