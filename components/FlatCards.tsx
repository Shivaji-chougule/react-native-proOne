import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
        <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
        <Text>orange</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
        <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardFour]}>
        <Text>yellow</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    container:{
        display:"flex",
        flexDirection:"row",
        // flexWrap:'wrap',

    },
    card:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        // textAlign: 'center',
        // textAlignVertical: 'center',
        height:200,
        width:200,
        borderRadius:10,
        margin:10
    },
    cardOne:{
        backgroundColor:'#ef5495',
        
    },
    
    cardTwo:{
        backgroundColor:'orange',
        
    },
  
    cardThree:{
        backgroundColor:'green',
        
    }
    ,
  
    cardFour:{
        backgroundColor:'yellow',
        
    }
})