import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import areaImage from '../../assets/haverhill.jpg';

const HaverhillScreen= () => {

return (

<View style={styles.container}>
<Image source={areaImage} style={styles.image}/>
<ScrollView>
<Text style={styles.paragraph}>
    For the port, see Port of Felixstowe. For other uses, see Felixstowe (disambiguation).
Felixstowe
Town and civil parish

Felixstowe beach
Felixstowe is located in SuffolkFelixstoweFelixstowe
Location within Suffolk
Population	24,521 (East Suffolk estimate, 2017)
OS grid reference	TM306345
Civil parish	
Felixstowe
District	
East Suffolk
Shire county	
Suffolk
Region	
East
Country	England
Sovereign state	United Kingdom
Post town	FELIXSTOWE
Postcode district	IP11
Dialling code	01394
Police	Suffolk
Fire	Suffolk
Ambulance	East of England
UK Parliament	
Suffolk Coastal
List of placesUKEnglandSuffolk
51°57′50″N 1°21′05″E
Felixstowe (/ˈfiːlɪkstoʊ/ FEE-lic-stoh) is a port town and civil parish in the East Suffolk district, in the county of Suffolk, England. The estimated population in 2017 was 24,521.[1] The Port of Felixstowe is the largest container port in the United Kingdom.[2] Felixstowe is approximately 72 miles (116 km) northeast of London.
</Text>

<Text style={styles.paragraph}>
The name Bury is etymologically connected with borough,[8] which has cognates in other Germanic languages such as German Burg 'fortress, castle' and Old Norse borg 'wall, castle'; and Gothic baurg 'city'.[9] They all derive from Proto-Germanic *burgs 'fortress'. This in turn derives from the Proto-Indo-European root *bhrgh 'fortified elevation', with cognates including Welsh bera 'stack' and Sanskrit bhrant- 'high, elevated building'. In Medieval Latin it was known as Burgum Sancti Edmundi (also spelled Aedmundi).[10][11] In the Anglo-Saxon period the town was called Bedricesweord[12] or Bedericesworth.[13]
</Text>

<Text style={styles.paragraph}>
The second section of the name refers to Edmund, King of the East Angles, called Edmund the Martyr, who was killed by the Vikings in the year 869. He became venerated as a saint and a martyr, and his shrine made Bury St Edmunds an important place of pilgrimage.

The formal name of the diocese is "St Edmundsbury", and the town is colloquially known as Bury.


    </Text>

<Text style={styles.paragraph}>
An archaeological study in the 2010s on the outskirts of Bury St Edmunds uncovered evidence of Bronze Age activity in the area. The dig also uncovered Roman coins from the first and second centuries.[14] Samuel Lewis, writing in 1848, notes the earlier discovery of Roman antiquities, and as with several other writers connects Bury St Edmunds with Villa Faustini or Villa Faustina, although the location of this Roman site is also discussed by E. Gillingwater (1804), who notes the lack of evidence for it being here.[15][16][17]
</Text>

<Text style={styles.paragraph}>
The town was one of the royal boroughs of the Saxons.[15] Sigebert, king of the East Angles, founded Beodricesworth monastery here about 633, which in 924[18] became the burial place of King Edmund the Martyr, who was slain by the Danes in 869, and owed most of its early celebrity to the reputed miracles performed at the shrine of the martyr king. The town grew around Bury St Edmunds Abbey, a site of pilgrimage.
</Text>

<Text style={styles.paragraph}>
In 942 or 945, King Edmund I had granted to the abbot and convent jurisdiction over the whole town, free from all secular services, and Canute in 1020 freed it from episcopal control. Later, Edward the Confessor made the abbot lord of the franchise. The older monastery was destroyed and, the secular priests having been expelled, a new Benedictine abbey was built.[19] Count Alan Rufus is said to have been interred at Bury St Edmunds Abbey in 1093. In the 12th and 13th centuries the head of the de Hastings family, who held the Lordship of the Manor of Ashill in Norfolk, was hereditary Steward of this abbey.[20]
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

export default HaverhillScreen;