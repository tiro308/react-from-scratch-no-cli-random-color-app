import React, {useState, useEffect} from 'react'
import randomColor from 'random-color'

function Colorbox() {
    const [hexColString, setHexColString]= useState("#000000")

    const style = {
        transition: "background-color 0.9s ease",
        width: "800px",
        height: "200px",
        "backgroundColor": hexColString,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setHexColString(randomColor().hexString())
        }, 3000);
        return () => clearInterval(interval);
      }, []);

    // setInterval(()=>{
    //     const colorfield = document.getElementById("colorfield")
    //     const hexText = document.getElementById("hexText")
    //     const hexColorString = randomColor().hexString()
    //     hexText.innerText = hexColorString
    //     colorfield.style.background = hexColorString
    // },3000)

    return (
        <div style={style} id="colorfield">
            <p style={{fontSize: "3em", color: "white"}} id="hexText">{hexColString}</p>
        </div>
    )
}

export default Colorbox
