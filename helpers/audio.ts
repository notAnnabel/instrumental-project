


export function loadAudioPlayers(){
    const C4 = require('./notes/piano/C4.mp4'); // starts with C key
    const D4 = require('./notes/piano/D4.mp4'); //
    const E4 = require('./notes/piano/E4.mp4'); //
    const F4 = require('./notes/piano/F4.mp4'); //
    const G4 = require('./notes/piano/G4.mp4'); //
    const A4 = require('./notes/piano/A4.mp4'); //
    const B4 = require('./notes/piano/B4.mp4'); //

    const notes = {C4, D4, E4, F4, G4, A4, B4};
    return notes
}