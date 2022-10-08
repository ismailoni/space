import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Technology from './components/Technology'
import Crew from './components/Crew'
import Destination from './components/Destination'


function App() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Destination' element={<Destination />} />
            <Route path='Crew' element={<Crew />} />
            <Route path='Technology' element={<Technology />} />

        </Routes>

      
    </div>
  )
}
export default App
