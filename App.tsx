import React from 'react'
import { View ,Text,Button} from 'react-native'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';


function App() {

  function fetchData (){
  axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response)=>console.log(response))
  .catch((error)=>console.log(error))
  }

  return (
     <SafeAreaView>
      <View>
        <Text>Hello Api</Text>
        <Button title='Fetch Data' onPress={fetchData}/>
        </View>
     </SafeAreaView>
    
  )
}




export default App;