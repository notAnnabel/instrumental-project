import { AudioSource, useAudioPlayer } from 'expo-audio';
import { Pressable, StyleSheet, View } from "react-native";

const audioSource = require('../helpers/notes/piano/B4.mp3')

interface WhiteKeyProps{
  audio: AudioSource; 
} // property siybd

export default function WhiteKey({audio}: WhiteKeyProps) { // whitekey expected audio object
  const player = useAudioPlayer(audio);

  function onPress(){
   console.log("a white key has been pressed");
   player.seekTo(0) // resets time to 0 for audio player
   player.play()
  };
  return (
    <Pressable onPress={onPress}>
      <View
      style={styles.whiteKey} // execute code, you need to put it in brackets
      >
    </View></Pressable>
  );
}
const styles = StyleSheet.create({
    whiteKey: {width: 100,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white"
}
    

  });