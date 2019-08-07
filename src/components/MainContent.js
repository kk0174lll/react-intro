import React from "react"

function MainContent() {
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
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default MainContent