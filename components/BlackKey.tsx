import { AudioSource, useAudioPlayer } from "expo-audio";
import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";

interface BlackKeyProps{ 
  left: number;
  audio: AudioSource; 
}


export default function BlackKey({left, audio}: BlackKeyProps) {
  const player = useAudioPlayer(audio);
  const [backgroundColor, setBackgroundColor] = useState("rgba(56, 56, 56, 1)");
  // default background color for black key
  
    function onPress(){
     console.log("a black key has been pressed");
     player.seekTo(0) // resets time to 0 for audio player
     player.play()
     setBackgroundColor("rgba(20, 20, 20, 1)"); // change color on press
  }
    };
  return (<Pressable onPress={onPress}>
    <View
      style={loadStyles(left, backgroundColor).blackKey} // execute code, you need to put it in brackets
    >
    </View>
    </Pressable>
  );
} 

function loadStyles(left: number, backgroundColor:string){
const styles = StyleSheet.create({
  blackKey: {
    position: "relative",
    width: 75,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: backgroundColor, // use the variable in use state variable
    top: -50,
    zIndex: 1,
    left: left,
  }})
  return styles
}



