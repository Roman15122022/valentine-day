import React, {useState} from 'react';
import classes from './App.module.css'
import Header from "../header";
import Asked from "../askedGif";
import Button from "../button";
import Finally from "../finallyGif";

function App() {
  const [isAsk, setAsk] = useState(true);
  const [coords, setCoords] = useState({top: "72%" , left: "51%"})

  const handleClick = () => {
    setAsk(false);
  }

  const handleHover = () => {
    const top = Math.floor(Math.random() * 100) + 1;
    const left = Math.floor(Math.random() * 100) + 1;
    console.log(top, left);
    setCoords({top: top + '%', left: left + '%'});
  }

  return (
    <div className={classes.App}>
      {isAsk ?
        (
          <>
            <Header/>
            <Asked classNames={classes.gif}/>
            <div className={classes.container}>
              <Button name={'Yes'} handleClick={handleClick} inlineStyle={{top: "72%", left: "41%"}}/>
              <Button name={'No'} handleHover={handleHover} inlineStyle={coords}/>
            </div>
          </>
        )
        :
        (
         <>
            <h1 className={classes.title}>Where would you go?)</h1>
           <Finally classNames={classes.gif}/>
         </>
        )
      }

    </div>
  );
}

export default App;
