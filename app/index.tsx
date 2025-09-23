import { StyleSheet, View } from "react-native";

import WhiteKey from "@/components/whiteKey";


export default function Index() {
  return (
    <View
      style={styles.container} // execute code, you need to put it in brackets
  
    >
    <WhiteKey/>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  }
  });


