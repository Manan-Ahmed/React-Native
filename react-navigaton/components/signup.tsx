import { View,Text, TouchableOpacity } from "react-native";



export default function Signup({navigation}:any){
    const gotologin = ()=>{
        navigation.navigate("signin")
    }
    return(
        <>
            <View>
                <Text style={{fontSize: 90}}>This is signup a page</Text>
                <TouchableOpacity onPress={gotologin}>
                    <Text style={{fontSize: 30}}>go to signin</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}