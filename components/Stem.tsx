import Slider from '@react-native-community/slider';
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { AudioContext, OscillatorNode } from 'react-native-audio-api';

const headClosed = require('../assets/images/otamatone-closed.png');

export default function Stem() {

    let ctx = new AudioContext();
    const [oscillator, setOscillator]= useState<OscillatorNode>(ctx.createOscillator());
    const [volume, setVolume]= useState(ctx.createGain()); 

    

    function onValueChange(Value: number) {
        oscillator.frequency.value = Value;

    }

    function onSlidingStart(){
        const newOscillator = ctx.createOscillator();
        
        newOscillator.type = 'triangle'; // sine wave - other options: square, sawtooth, triangle
        
        newOscillator.frequency.value = 450;
        newOscillator.detune.value = 0; // detuner
        
        const volume = ctx.createGain();
        
        
        volume.gain.value = 0.30; // volume
        
        newOscillator.connect(volume);
        volume.connect(ctx.destination);
        
        newOscillator.start()

        
        setOscillator(newOscillator);
    }
    function onSlidingComplete(){
        oscillator.stop();
        }

    

    return (
        <View style={loadStyles().container}>
            <Slider
            style={{ width: 300, height: 100, transform: [{ rotate: '-90deg' }], top: 300 }}
            minimumValue={450}
            maximumValue={1000}
            minimumTrackTintColor="#8141e9f5"
            maximumTrackTintColor="#4c1f66ff"
            onValueChange={onValueChange}
            onSlidingStart={onSlidingStart}
            onSlidingComplete={onSlidingComplete}
            trackHeight={50}
            thumbSize={50}
            step={1}
            thumbTintColor='#fbff00f5'
            //trackStyle={{loadStyles.Stem}}
        />
        <Image style={loadStyles().Head} source={require('../assets/images/otamatone-closed.png')}></Image> 
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
            top: 400,
        },
        container: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
  }
    })
};
