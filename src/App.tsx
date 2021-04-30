import React from 'react'
import './styles.css'
const App = () => {
  const name = 'sasasa'
  return (
    <div>
      <h1>
        Helloriko * {process.env.NODE_ENV} {process.env.name}
      </h1>
    </div>
  )
}

export default App
