import React from "react"
import "./Header.css"

function Header() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
    const styles = {
      color: "#FF8C00"    
    }     
    return (
        <header className="header">Good {timeOfDay}!</header>
    )
}

export default Header