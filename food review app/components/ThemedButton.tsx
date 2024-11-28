

import react, { ReactNode } from 'react'

import { TouchableOpacity,type TouchableOpacityProps,StyleSheet } from 'react-native'
import { ThemedText } from './ThemedText'

export type ThemedButtonProps = TouchableOpacityProps & {
    bgColor?: string,
    txtColor?:string,
    txt:string,
    mx?:number,
    my?:number,
    icon?:ReactNode,
}

export default  function ThemedButton({bgColor,txtColor,txt,mx=0,my=0,style,icon,...rest}:ThemedButtonProps){
    return(
   <TouchableOpacity
    style={[styles.btnContainer,
    bgColor && {backgroundColor:bgColor},
    mx?{marginHorizontal:mx}: undefined,
    my ? {marginHorizontal:my}:undefined,style]}
    {...rest}
    >

        {icon && icon}
<ThemedText style={{color:txtColor ? txtColor : '#fff'}}>  
    {txt}</ThemedText>
</TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    btnContainer :{
    height: 50,
    marginHorizontal:20,
    justifyContent:'center',
    flexDirection:"row",
    gap:2,

    alignItems:'center',
    backgroundColor:'#9900ef',
    borderRadius:7
    }
})