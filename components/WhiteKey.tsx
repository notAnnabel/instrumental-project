import { useAudioPlayer } from 'expo-audio';
import { Pressable, StyleSheet, View } from "react-native";

const audioSource = require('../helpers/notes/piano/B4.mp3')


export default function WhiteKey() {
  const player = useAudioPlayer(audioSource);

  function onPress(){
   console.log("a white key has been pressed");
   player.seekTo(0) // resets time to 0 for audio player
   player.play()
  };
  return (
    <Pressable onPress={onPress}>
      <View
      style={styles.blackKey} // execute code, you need to put it in brackets
      >
    </View></Pressable>
  );
}
const styles = StyleSheet.create({
    blackKey: {width: 100,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white"
}
    

  });