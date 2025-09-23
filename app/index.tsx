import { StyleSheet, View } from "react-native";

import WhiteKey from "@/components/whiteKey";


export default function Index() {
  return (
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
  );
}

  const styles = StyleSheet.create({
    container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  }
  });


