import useOrientation from "@/hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";
import { StyleSheet, Text } from "react-native";

import Otamatone from "@/components/Otamatone";


export default function Index() {

  const screenOrientation  = useOrientation(); // hook stored in a variable
    
    if (screenOrientation===Orientation.PORTRAIT_DOWN) return <Otamatone/>;
    if (screenOrientation===Orientation.PORTRAIT_UP) return <Otamatone/>;
    else return <Text> Rotate device to landscape. orientation : {screenOrientation} </Text> //text overwrites piano
    
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    mainview: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: "rgba(117, 83, 69, 1)"
    },
  
    text: {
      fontSize: 20,
      color: "white"
    }

  
  });