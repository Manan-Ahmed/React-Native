import { View,Text, TouchableOpacity } from "react-native";



export default function Signin({navigation}){
    const gotohome = ()=>{
        navigation.navigate('home')
    }
    return(
        <>
            <View>
                <Text style={{fontSize: 90}}>This is signin a page</Text>
                <TouchableOpacity onPress={gotohome}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}