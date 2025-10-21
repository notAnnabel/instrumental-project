import Slider from '@react-native-community/slider';
import { StyleSheet, View } from "react-native";
import { AudioContext, OscillatorNode } from 'react-native-audio-api';

// const headClosed = require('../assets/images/otamatone-closed.png');

export default function Stem() {

    const [oscillator, setOscillator]= useState<OscillatorNode>(ctx.createOscillator());
    //const [volume, setVolume]= useState(ctx.createGain()); 

    

        oscillator.frequency.value = Value;


        const newOscillator = ctx.createOscillator();
        
        
        newOscillator.detune.value = 0; // detuner
        
        
        
        
        volume.connect(ctx.destination);
        

        
    }
    function onSlidingComplete(){
        oscillator.stop();
        }

    

    return (
            style={{ width: 300, height: 100, transform: [{ rotate: '-90deg' }], left: 50, top: 300 }}
            minimumValue={450}
            maximumValue={1000}
            minimumTrackTintColor="#8141e9f5"
            maximumTrackTintColor="#4c1f66ff"
            onSlidingStart={onSlidingStart}
            onSlidingComplete={onSlidingComplete}
            trackHeight={50}
            thumbSize={50}
            step={1}
            thumbTintColor='#faffe4f5'
            //trackStyle={{loadStyles.Stem}}
        />
        </View>
        

        /*<View styles={loadStyles.Head}>
    </View>*/)

}


function loadStyles() {
    return StyleSheet.create({
        Stem: {
            width: 150,
            height: 700,
            borderWidth: 2,
            borderColor: "black",
            backgroundColor: "purple", // use the variable in use state variable
            top: -50,
            zIndex: 1,
            left: 100,
        },
        Head : {
            borderRadius: 100,
            width: 200,
            height: 200,
        }
    })
};
