import { StyleSheet, View } from "react-native";
import Stem from "./Stem";


export default function Otamatone() {
  return (
    <View style={styles.container}>
      <Stem></Stem>
  </View>

  )}

  const styles = StyleSheet.create({
   container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
     stem: {
       width: 75,
       height: 700,
       borderWidth: 2,
       borderColor: "black",
       backgroundColor: "purple", // use the variable in use state variable
       top: -50,
       zIndex: 1,
       left: 100,
       
},
  
    text: {
      fontSize: 20,
      color: "white"
    }
  });