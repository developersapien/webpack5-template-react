import React from 'react'
import './styles.css'
const App = () => {
  return (
    <div>
      <h1>
        Welcome * {process.env.NODE_ENV} {process.env.name}
      </h1>
    </div>
  )
}

export default App
