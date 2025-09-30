import Piano from "@/components/Piano";
import { Orientation } from "expo-screen-orientation";
import { StyleSheet, Text } from "react-native";

import useOrientation from "@/hooks/useOrientation";


export default function Index() {
  const screenOrientation  = useOrientation(); // hook stored in a variable
  
  if (screenOrientation===Orientation.LANDSCAPE_LEFT) return <Piano/>;
  if (screenOrientation===Orientation.LANDSCAPE_RIGHT) return <Piano/>;
  else return <Text> Rotate device to landscape </Text> //text overwrites piano
  
}

  const styles = StyleSheet.create({
    container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  mainview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"rgba(117, 83, 69, 1)"
  },
  
  text: {
    fontSize: 20,
    color: "white"
  }
});