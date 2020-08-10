import React from 'react'
import Colorbox from './Colorbox'

const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}

export default function App() {
    return (
        <div style={style}>
            <h1>That's React from scratch without CLI aka create-react-app is for quitters!</h1>
            <Colorbox />
        </div>
    )
}
