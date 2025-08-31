import React, { useEffect, useState } from 'react'
import { View ,Text,Button,FlatList, ListRenderItem,ActivityIndicator} from 'react-native'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';
import UserCards from './src/components/UserCards';

type ApiUser = {
  id: number;
  name: string;
  email:string
  username:string

};

function App() {
  const [loading , setLoading] = useState(false)
  const [userList , setUserList] = useState<ApiUser[]>([]);

  async function fetchData (){
  try {
    setLoading(true)
    const response = await axios.get<ApiUser[]>('https://jsonplaceholder.typicode.com/users')
    setLoading(false)
    setUserList(response.data);
  }catch(error){
      console.log(error)
    }
  }
  const renderUser:ListRenderItem<ApiUser> = ({item})=><UserCards name={item.name} email={item.email} username={item.username} />
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
     <SafeAreaView>
      <View>
       
        {loading ? (<ActivityIndicator/>)
        :(<FlatList
        keyExtractor={(item) => item.id.toString()}
        data={userList}
        renderItem={renderUser}
        />)
        }
        {/* <Button title='Fetch Data' onPress={fetchData}/> */}
        </View>
     </SafeAreaView>
    
  )
}




export default App;