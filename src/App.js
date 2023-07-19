import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [text, setText] = useState("default");
  console.log("text: " + text);

  useEffect( () => {
    window.addEventListener("keydown", handleKeyPress);

    // clean up when component dismounts 
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    }
  }, []); // on component mount

  function handleKeyPress(event) {

    var keyPress = event.key;
    var strKey = String(keyPress).toUpperCase();
    var x = document.getElementById(strKey);

    switch (strKey) {
        case "Q":
          setText("Hitter 1");
          x.play();
          break;
        case "W":
          setText("Hitter 2");
          x.play();
          break;
        case "E":
          setText("Hitter 3");
          x.play();
          break;
        case "A":
          setText("Hitter 4");
          x.play();
          break;
        case "S":
          setText("Clap");
          x.play();
          break;
        case "D":
          setText("Open-HH");
          x.play();
          break;
        case "Z":
          setText("Kick-n'-Hat");
          x.play();
          break;
        case "X":
          setText("Kick");
          x.play();
          break;
        case "C":
          setText("Closed-HH");
          x.play();
          break;
        default:
          break;
    }

    /*
    if( event.key === "q"){
      var keyPress = event.key;
      var strKey = String(keyPress).toUpperCase();
      var x = document.getElementById(strKey);
      x.play();
    }
    */
  }

  function handleButtonPress(event) {
    var x = event.target.value;
    var elem = document.getElementById(x);
    elem.play();

    switch(x) {
      case 'Q':
        setText("Hitter 1");
        elem.play();
        break;
      case 'W':
        setText("Hitter 2");
        elem.play();
        break;
      case 'E':
        setText("Hitter 3");
        elem.play();
        break;
      case 'A':
        setText("Hitter 4");
        elem.play();
        break;
      case 'S':
        setText("Clap");
        elem.play();
        break;
      case 'D':
        setText("Open-HH");
        elem.play();
        break;
      case 'Z':
        setText("Kick-n'-Hat");
        elem.play();
        break;
      case 'X':
        setText("Kick");
        elem.play();
        break;
      case 'C':
        setText("Closed-HH");
        elem.play();
        break;
      default:
        break;
    }
  }


  return (
    <div className="App">
      {/* Drum Pad Container - holds the Display and DrumPad buttons } */ }
      <div id='drum-machine'>
        <div id='display'>{ text }</div>
        <div id="pad-container">
          {/* 1st Row */}
          <button type='button' value='Q' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Heater_1'><audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio> Q</button>
          <button type='button' value='W' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Heater_2'><audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio> W</button>
          <button type='button' value='E' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Heater_3'><audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio> E</button>
          {/* 2nd Row */}
          <button type='button' value='A' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Heater_4'><audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio> A</button>
          <button type='button' value='S' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Clap'><audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio> S</button>
          <button type='button' value='D' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Open_HH'><audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio> D</button>
          {/* 3rd Row */}
          <button type='button' value='Z' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Kick_n_Hat'><audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio> Z</button>
          <button type='button' value='X' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Kick'><audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio> X</button>
          <button type='button' value='C' onKeyDown={ handleKeyPress } onClick={ handleButtonPress } className='drum-pad' id='Closed_HH'><audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio> C</button>

        </div>
      </div>

      
    </div>
  );
}

export default App;
