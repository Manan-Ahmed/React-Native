// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import signup from './components/signup';
// import signin from './components/signin';
// import home from './components/home';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import chat from './components/chat';
// import { useEffect, useState } from 'react';

// export default function App() {
// const [auth,setAuth] = useState(false)

// // useEffect(()=>{
// //   changeAuth()
// // },[])
// //   const changeAuth = ()=>{
// //     setTimeout(()=>{
// //       setAuth(true)
// //     },5000)
// //   }
// //   const forFade = ({ current }:any) => ({
// //     cardStyle: {
// //       opacity: current.progress,
// //     },
// //   });
//   const Stack = createStackNavigator()
//   const Tab = createBottomTabNavigator()

//   return (
//    <NavigationContainer>


// <Tab.Navigator
// screenOptions={({route})=>{
  
// }}
// >
//   <Tab.Screen name='home' component={home}/>
//   <Tab.Screen name='chat' component={chat}/>
//   <Tab.Screen name='signin' component={signin}/>

// </Tab.Navigator>


//     {/* {
//       !auth ?     ( <Stack.Navigator initialRouteName='signup'  screenOptions={() => ({
//         headerShown: true,
//       })}>
//  <Stack.Screen name='signup' component={signup}  />
//  <Stack.Screen name='signin' component={signin}  options={{ cardStyleInterpolator: forFade }}/>
//  <Stack.Screen name='home' component={home}/>

//  </Stack.Navigator> ) : 
//  (
//  <Tab.Navigator >
//   <Tab.Screen name='signup' component={signup}  />
//   <Tab.Screen name='signin' component={signin}  />
//   <Tab.Screen name='home' component={home}  />

// </Tab.Navigator>
//  )
//     }
//   */}


//      </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import chat from './components/chat';
import home from './components/home';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon set you want to use
import signin from './components/signin';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'chatbubble';
            }else if (route.name === 'signin') {
              iconName = focused ? 'signin' : 'login-in';
            }

            // You can return any component that renders an icon.
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="chat" component={chat} />
        <Tab.Screen name="signin" component={signin} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
