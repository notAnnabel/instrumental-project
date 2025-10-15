import Slider from '@react-native-community/slider';
import React from "react";
import { StyleSheet, View } from "react-native";
import { AudioContext } from 'react-native-audio-api';

export default function Stem() {

    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain(); // create the volume

    oscillator.type = 'triangle'; // sine wave - other options: square, sawtooth, triangle


    oscillator.frequency.value = 2000;
    oscillator.detune.value = 0; // detuner
    gain.gain.value = 0.50; // volume

    gain.connect(ctx.destination);
    //oscillator.start()

    function onValueChange(Value: number) {
        oscillator.frequency.value = Value;
        console.log(Value);
    }

    function onSlidingStart(Value: number){
        //oscillator.start()
        new AudioContext();
        oscillator.frequency.value = Value;
    }

    return (
        <View><Slider
            style={{ width: 300, height: 100, transform: [{ rotate: '-90deg' }], left: 50, top: 300 }}
            minimumValue={1000}
            maximumValue={4000}
            minimumTrackTintColor="#8141e9f5"
            maximumTrackTintColor="#4c1f66ff"
            onValueChange={onValueChange}
            onSlidingStart={onSlidingStart}
        /></View>

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
