import { StyleSheet, View } from "react-native";


export default function WhiteKey() {
  return (
    <View
      style={styles.blackKey} // execute code, you need to put it in brackets
    >
    </View>
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