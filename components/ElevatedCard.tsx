import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal style={styles.container}>
        <View  style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View  style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View  style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View  style={[styles.card,styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View  style={[styles.card,styles.cardElevated]}>
            <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    card:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        
        height:200,
        width:200,
        borderRadius:10,
        margin:10
    },
    container:{
padding:8,
// backgroundColor:'gray'
    },
    cardElevated:{
backgroundColor:'#000000',
elevation:7,
shadowColor:'yellow'

    }
})
export default ElevatedCard