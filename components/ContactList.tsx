import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid:1,
            name:"Dustin purior",
            profession:"Fighter",
            age:32,
            imageUrl:'https://www.sherdog.com/image_crop/200/300/_images/fighter/1601262923Dustin_Poirier.jpg'
        },
        {
            uid:2,
            name:"Virat Kohli",
            profession:"Crickter",
            age:33,
            imageUrl:'https://img.etimg.com/thumb/msid-98912259,width-650,height-488,imgsize-67876,,resizemode-75/virat-kohli.jpg'
        },
        {
            uid:3,
            name:"John Cena",
            profession:"wrestler",
            age:50,
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H7LkcROi8XCuEA59HUz9ye2ic2oThS4kFg&usqp=CAU'
        },
        {
            uid:4,
            name:"max",
            profession:"Racer",
            age:25,
            imageUrl:'https://media.cnn.com/api/v1/images/stellar/prod/230207182348-04-max-verstappen-interview-f1-spt-intl.jpg?c=original'
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>User List</Text>
      <ScrollView  style={styles.scroll} scrollEnabled>
    {contacts.map(({uid,name,profession,age,imageUrl})=>
    <View key={uid} style={styles.userList}>
       
        <View>
        <Image
        source={{
            uri:imageUrl
        }} style={styles.images}/>
        </View>
        <View style={styles.userDetails}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
        </View>
        
    </View>
    )}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        margin:10
    },
    scroll:{
        paddingHorizontal:10
    },
    userList:{
        backgroundColor:"#ef9999",
        marginVertical:5,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        padding:5
    },
    userName:{
        
        fontSize:16,
        fontWeight:'bold',
        color:'#ffffff'
    },
    profession:{fontSize:16,
        fontWeight:'bold',},
    userAge:{fontSize:16,
        fontWeight:'bold',},
    images:{
        width:80,
        height:80,
        margin:10,
        borderRadius:40,
        
    },
    userDetails:{
        // backgroundColor:'black',
        marginLeft:10
    },
})