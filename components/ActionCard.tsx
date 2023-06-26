import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(WebsiteLink: string) {
    Linking.openURL(WebsiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Automobile</Text>
      <View  style={styles.card}>
        <Text style={styles.headingText}>
          Harley-Davidson X 440 India launch on July 3
        </Text>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/Fw9b_zsaAAEP7QS.jpg:large',
          }}
          style={styles.cardImage}></Image>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyContainerText} numberOfLines={5}>
            Harley-Davidson X440 is expected to launch in India in July 2023 in
            the expected price range of ₹ 2,50,000 to ₹ 3,00,000. Currently
            available bikes which are similar to X440 are Benelli Imperiale 400,
            QJ Motor SRC 500 & Jawa Perak.
          </Text>
          <View>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.bikewale.com/harleydavidson-bikes/x440/#:~:text=Harley%2DDavidson%20X440%20is%20expected,Motor%20SRC%20500%20%26%20Jawa%20Perak.',
                )
              }>
              <Text style={styles.readMore}>Read more...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card:{
   backgroundColor:'#000000',
height:800,
borderRadius:10,
marginHorizontal:10,
marginVertical:10
  },
  cardImage: {
    height: 550,
    // width: '100%',
  },
  cardTitle: {
    fontSize: 20,
    marginLeft: 10,
  },
  bodyContainer: {},
  bodyContainerText: {
    fontSize: 18,
    marginHorizontal:5
  },
  readMore:{
    // paddingHorizontal:10,
    // paddingVertical:6,
    // backgroundColor:"red"
    color:'#000000',
    marginLeft:5,
    width:120,
    height:28,
    backgroundColor:'#ffffff',
    borderRadius:5,

  }
});
