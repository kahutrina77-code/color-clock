import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="clock-container">
      <h1 className="clock-title">Trina's Dynamic Color Clock</h1>
      <div className="clock-display">
        {/* Display formatted date and time using date-fns */}
        <p className="time">{format(currentTime, 'hh:mm:ss a')}</p>
        <p className="date">{format(currentTime, 'EEEE, MMMM dd, yyyy')}</p>
      </div>
    </div>
  )
}

export default App