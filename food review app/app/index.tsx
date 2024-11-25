import { ThemedText } from '@/components/ThemedText';
import { View,Text,StyleSheet,Image } from 'react-native';

export default function Welcome() {
 return(
  <View style={styles.container}>
<View style={styles.topContainer}>
  <Image style={{flex: 1}} source={{
uri: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // uri: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }}/>
</View>
<View style={styles.bottomContainer}>
<View>
  <ThemedText type='title' align='center'>
    Find Best Resturent
  </ThemedText>
 
  <ThemedText type='subtitle' style={styles.desc}     align =  "center"
  >In Our App Find Our Best Resturent in Our Area With User Reviews</ThemedText>
 
  </View>
  
  <ThemedText type='link' align='center'>Login to Continue</ThemedText>
</View>

  </View>
 )



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-around'
  
  },
  desc:{
    lineHeight: 28,
    marginTop: 10
  }

})
