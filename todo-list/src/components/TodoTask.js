import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function TodoTask({item, toggleDone}) {
let doneIcon = false;
if(item.done) {
doneIcon = <Feather name="check-circle" size={24} color="black" />
}


return (
<Pressable onPress={() => toggleDone(item.key)} style={styles.task}>
<Text style={styles.taskText}>{item.task}</Text>
{doneIcon}
</Pressable>
);
}
const styles = StyleSheet.create({
task: {
borderColor: '#b9b9b9',
borderWidth: 1,
borderRadius: 5,
padding: 10,
marginBottom: 10,
flex: 1,
flexDirection: 'row',
alignItems: 'center',
height: 50,
},
taskText: {
flexGrow: 1,
},
taskDone: {
width: 30,
},
});
