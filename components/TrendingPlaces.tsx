import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TrendingPlaces = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      
      <View style={[styles.card, styles.cardElevated]}>
      {/* <ScrollView  style={styles.scroll} > */}
        <Image
          source={{
            uri: 'https://cdn.concreteplayground.com/content/uploads/2022/12/jezael-melgoza-alY6_OpdwRQ-unsplash.jpg',
          }}
          style={styles.cardImage}></Image>
       
          {/* <View>
          <Image
          source={{
            uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg',
          }}
          style={styles.cardImage}></Image>
          </View> */}
        {/* </ScrollView> */}
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Tokiyo</Text>
          <Text style={styles.cardLabel}>Night City View</Text>
          <Text style={styles.cardDescription}>
            Tokyo is the administrative, cultural, financial, commercial, and
            educational centre of Japan and the focus of an extensive urban
            complex that includes Kawasaki and Yokohama.
          </Text>
          <Text style={styles.cardFooter}>Visit Japan</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendingPlaces;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    // margin: 10,
  },
  card: {
    height:500,
    width:"100%",
    backgroundColor:"#000000",
    borderRadius:10,
//    marginHorizontal:10,
   marginVertical:20
  },
  cardElevated: {},
  cardImage: {
    height: 250,
    width: "100%",
    borderRadius:10
  },
  cardBody: {
    marginVertical:15,
    marginHorizontal:10,
    flex:1,
    alignItems:'center'
  },
  cardTitle: {
    color:"#FFFFFF",
    fontSize:24,
    fontWeight:'bold',
    
  
},
  cardLabel: {
    fontSize:18,
  },
  cardDescription: {
    fontSize:16,
  },
  cardFooter: {},
//   scroll: {
//     padding:8,
//     backgroundColor:"gray",
   
//   },
});
