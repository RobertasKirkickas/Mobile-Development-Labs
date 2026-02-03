import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import areaImage from '../../assets/bury.jpg';

const BuryStEdmundsScreen = () => {

return (

<View style={styles.container}>
<Image source={areaImage} style={styles.image}/>
<ScrollView>
<Text style={styles.paragraph}>
    Bury St Edmunds (/ˈbɛri sənt ˈɛdməndz/), commonly referred to locally as Bury, is a cathedral as well as market town and civil parish in the West Suffolk district, in the county of Suffolk, England.[3] The town is best known for Bury St Edmunds Abbey and St Edmundsbury Cathedral. Bury is the seat of the Diocese of St Edmundsbury and Ipswich of the Church of England, with the episcopal see at St Edmundsbury Cathedral. The town, originally called Beodericsworth,[4] was built on a grid pattern by Abbot Baldwin around 1080.[5][6] It is known for brewing and malting (Greene King brewery)[7] and for a British Sugar processing factory, where Silver Spoon sugar is produced. The town is the cultural and retail centre for West Suffolk and tourism is a major part of the economy. The built up area had a population of 41,280 at the 2021 census.
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

export default BuryStEdmundsScreen;