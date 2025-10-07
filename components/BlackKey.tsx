import { AudioSource, useAudioPlayer } from "expo-audio";
import { Pressable, StyleSheet, View } from "react-native";

interface BlackKeyProps{ 
  left: number;
  audio: AudioSource; 
}


export default function BlackKey({left, audio}: BlackKeyProps) {
  const player = useAudioPlayer(audio);
  
    function onPress(){
     console.log("a black key has been pressed");
     player.seekTo(0) // resets time to 0 for audio player
     player.play()
    };
  return (<Pressable onPress={onPress}>
    <View
      style={loadStyles(left).blackKey} // execute code, you need to put it in brackets
    >
    </View>
    </Pressable>
  );
}

function loadStyles(left: number){
const styles = StyleSheet.create({
  blackKey: {
    position: "relative",
    width: 75,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "black",
    top: -50,
    zIndex: 1,
    left: left,
  }})
  return styles
}



