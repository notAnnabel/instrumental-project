import { StyleSheet, View } from "react-native";

interface BlackKeyProps{
  left: number;
}


export default function BlackKey({left}: BlackKeyProps) {
  return (
    <View
      style={loadStyles(left).blackKey} // execute code, you need to put it in brackets
    >
    </View>
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

const styles = StyleSheet.create({
  blackKey1: {
    width: 75,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "black",
    top: -50,
    left: -635,
  },
  blackKey2: {
    width: 75,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "black",
    top: -50,
    left: -535,
  },
  blackKey3: {
    width: 75,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "black",
    top: -50,
    left: -535,
  },
  blackKey4: {
    width: 75,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "black",
    top: -50,
    left: -535,
  },
  blackKey5: {
    width: 75,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "black",
    top: -50,
    left: -535,
  },
})

