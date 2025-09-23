import { StyleSheet, Text, View } from "react-native";

import WhiteKey from "@/components/whiteKey";


export default function Index() {
  return (
    <View style={styles.mainview}
    >
      
    <View
      style={styles.container} // execute code, you need to put it in brackets
    >
    <WhiteKey/>
    <WhiteKey/>
    <WhiteKey/>
    <WhiteKey/>
    <WhiteKey/>
    <WhiteKey/>
    <WhiteKey/>
    
    </View>
    <Text style={styles.text}> piano with no black keys and can't be pressed...</Text>
    <Text style={styles.text}> I want a refund!!!!!</Text>
    </View>
  );
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