import WhiteKey from "@/components/WhiteKey"; // go from root to hook :3
import { loadAudioPlayers } from "@/helpers/audio";
import { StyleSheet, View } from "react-native";
import BlackKey from "./BlackKey";


export default function Piano() {
  const players = loadAudioPlayers(); // audio player notes
  return (
    <View style={styles.mainview}>
        <View
          style={styles.whitecontainer} // execute code, you need to put it in brackets
        >
          <WhiteKey audio={players.C4} />
          <WhiteKey audio={players.D4} />
          <WhiteKey audio={players.E4} />
          <WhiteKey audio={players.F4} />
          <WhiteKey audio={players.G4} />
          <WhiteKey audio={players.A4} />
          <WhiteKey audio={players.B4} />
          {/* <BlackKey left={-585}/> */}
        </View>

      <View style={styles.blackcontainer}>
        <BlackKey left={50} audio={players.Bb4} />
        <BlackKey left={-130} audio={players.Ab4} />
        <BlackKey left={-306} audio={players.Gb4} />
        <BlackKey left={-580} audio={players.Eb4}/>
        <BlackKey left={-760} audio={players.Db4}/>

      


      </View>
      {/* <Text style={styles.text}> piano with no black keys and can't be pressed...</Text> */}
      {/* <Text style={styles.text}> I want a refund!!!!!</Text> */}
      {/* change to vertical if needed*/}
    </View>
  );
}

const styles = StyleSheet.create({
  whitecontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  blackcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 0,
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