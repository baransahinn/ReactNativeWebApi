import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


type UserProps = {
    
    name:string
    username:string,
    email:string
  
}
const UserCards:React.FC<UserProps>=({name , username, email})=> {
  return (
    <View style={styles.container}>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.innerContainer}>
        <Text>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eceff1',
        marginVertical:5,
        padding:10,
    },
    username:{
        fontWeight:'bold'
    },
    email:{
        fontSize:12,
        fontStyle:'italic',
        color:'gray',
        marginLeft:5,

    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center',
    }

})


export default UserCards