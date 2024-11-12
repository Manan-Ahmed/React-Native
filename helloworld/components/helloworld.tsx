import React, { useState } from "react";
import { View,Text, TouchableOpacity, Button, TextInput, FlatList } from "react-native";
import Post from "./Post";



export default function HelloWorld(){
    const [counter,setCounter] = useState(0)
const [todo,setTodo] = useState<string>('')
const [todoList,setTodoList] = useState<string[]>([])

const friuts =  ['apple','banana','mango']
    const addCounter = ()=>{
        setCounter(counter + 1)
    }

    
   const add = ()=>{
     setTodoList([...todoList,todo])
     setTodo('')
     console.log(todoList);
     
   }


   const posts = [
    {
      id: "0",
      title: 'Hello World',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    },
    {
      id: "1",
      title: 'Hello Mars',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    },
    {
      id: "2",
      title: 'Hello Pluto',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    },
    {
      id: "3",
      title: 'Hello Jupitor',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    },
    {
      id: "4",
      title: 'Hello Venus',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    }
  ];


  
    return(
        <>
             <View>
                   <Text style={{fontSize: 50,color: 'red'}}>Hello world</Text>

                   <Text style={{fontSize: 40,textAlign: 'center'}}>
                     {counter}
                   </Text>


                  <TouchableOpacity onPress={addCounter}>
                  <Text style={{fontSize: 30,textAlign: 'center'}}>Increment</Text>
                    
                  </TouchableOpacity>
 
                  <Button
  onPress={addCounter}
  title="Add"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"/>
                  

                  <TouchableOpacity onPress={()=>{setCounter(counter > 0 ? counter - 1:0)}}>
                  <Text style={{fontSize: 30,textAlign: 'center'}}>Decrement</Text>
                    
                  </TouchableOpacity>
             </View>

     <TextInput
     style={{borderColor: "#000000",borderWidth: 1,height: 50,fontSize: 40}}
     value={todo}
     onChangeText={(text)=>{setTodo(text)}}
     />
      <TouchableOpacity>
      <Text  onPress={add}  style={{fontSize: 50}} >Add</Text>
      </TouchableOpacity>
        
        
        {/* {
        todoList.length > 0 && todoList.map((todo)=>(
               
             <View>
                  <Text style={{fontSize: 50}}>{todo}</Text>
               
        
             </View>
        ))
        
        } */}
        
        <FlatList
        data={friuts}
        renderItem={({item})=>(
          <Text>{item}</Text>
    )}
    keyExtractor={(item,index)=> item + index}
        />

        {/* <FlatList
        data={posts}
        renderItem={({item})=>(
           <View>

            <Post
            title={item.title}
            content={item.content}
            url={item.img}
            />
           </View>
        )}
        /> */}
        
        </>

    )
}




