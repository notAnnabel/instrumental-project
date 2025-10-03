import { StyleSheet, View } from "react-native";


export default function BlackKey() {
  return (
    <View
      style={styles.blackKey} // execute code, you need to put it in brackets
    >
    </View>
  );
}
const styles = StyleSheet.create({
    blackKey: {width: 75,
    height: 150,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "black"
}
    

  });