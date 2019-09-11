import React from 'react';
import './meme.css';
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"

function MemeApp() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default MemeApp