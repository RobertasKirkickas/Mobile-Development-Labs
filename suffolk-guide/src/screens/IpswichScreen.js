import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import areaImage from '../../assets/ipswich.jpg';

const IpswichScreen = () => {

return (

<View style={styles.container}>
<Image source={areaImage} style={styles.image}/>
<ScrollView>
<Text style={styles.paragraph}>
    Ipswich (/ˈɪpswɪtʃ/ ⓘ) is a port town and borough in Suffolk, England. It is the county town, and largest in Suffolk, followed by Lowestoft and Bury St Edmunds, and the third-largest population centre in East Anglia, after Peterborough and Norwich. It is 65 miles (105 km) northeast of London and in 2011 had a population of 144,957. The Ipswich built-up area is the fourth-largest in the East of England and the 42nd-largest in England and Wales. It includes the towns and villages of Kesgrave, Woodbridge, Bramford and Martlesham Heath.[4]
</Text>

<Text style={styles.paragraph}>
    Ipswich was first recorded during the medieval period as Gippeswic, the town has also been recorded as Gyppewicus and Yppswyche.[5] It has been continuously inhabited since the Saxon period,[5] and is believed to be one of the oldest towns in the United Kingdom.[6] The settlement was of great economic importance to the Kingdom of England throughout its history, particularly in trade,[7] with the town's historical dock, Ipswich Waterfront, known as the largest and most important dock in the Kingdom.[7][8]
</Text>

<Text style={styles.paragraph}>Ipswich is divided into various quarters, with the town centre and the waterfront drawing the most footfall. 
    The town centre features the retail shopping district and the historic town square, 
    known as the Cornhill. The waterfront, south of the town centre on a meander of the 
    River Orwell, offers a picturesque setting with a marina, luxury yachts, high-rise 
    apartment buildings, and a variety of restaurants and cafes. The waterfront is also 
    home to the University of Suffolk campus.</Text>

<Text style={styles.paragraph}>
Ipswich is adjacent to the Suffolk & Essex Coast & Heaths National Landscape AONB and is close to Dedham Vale AONB. The town has a tourist sector, with 3.5 million people reported to have visited the town in 2016.[9] In 2020, Ipswich was ranked as an emerging global tourist destination by TripAdvisor.[10]
</Text>
</ScrollView>

</View>



);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
},
paragraph: {
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
},
image: {
    width: Dimensions.get('screen').width,
    height: 159,
    marginBottom: 20,
}
});

export default IpswichScreen;