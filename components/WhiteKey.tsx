import { AudioSource, useAudioPlayer } from 'expo-audio';
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const audioSource = require('../helpers/notes/piano/B4.mp3')

interface WhiteKeyProps{
  audio: AudioSource; 
} // property siybd

export default function WhiteKey({audio}: WhiteKeyProps) { // whitekey expected audio object
  const player = useAudioPlayer(audio);
  const [backgroundColor, setBackgroundColor] = useState("white");

  function onPress(){
   console.log("a white key has been pressed");
   player.seekTo(0) // resets time to 0 for audio player
   player.play()
   setBackgroundColor("lightgrey"); // change color on press
  };

  function onPressOut(){
    setBackgroundColor("white"); // revert color on release
  }

  return (
    <Pressable onPressIn={onPress} onPressOut={onPressOut}>
      <View
      style={loadStyles(backgroundColor).whiteKey} 
      >
    </View>
    </Pressable>
  );
}

function loadStyles(backgroundColor: string){
  return StyleSheet.create({
    whiteKey: {
      width: 100,
      height: 300,
      borderWidth: 2,
    borderColor: "black",
    backgroundColor: backgroundColor // default color, can be overridden by inline style
  }}
  )};
