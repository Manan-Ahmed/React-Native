import { View,Text,Image } from "react-native";




export default function Post({title,content,url}:any){
    return(
        <>
        
        <View>
            <Text>{title}</Text>
            <Text>{content}</Text>

<Image
                source={{
                    uri:url,
                }}
                style={{ 
                    width: 370, 
                    height: 200,
                    resizeMode: "stretch"
                 }}
              
            />
        </View>
        </>
    )
}