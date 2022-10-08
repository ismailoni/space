import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Technology from './Technology'
import Crew from './Crew'
import Destination from './Destination'




function Navigation() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Destination' element={<Destination />} />
            <Route path='Crew' element={<Crew />} />
            <Route path='Technology' element={<Technology />} />

        </Routes>


        <Link to='/Home'>01 Home</Link>
        <Link to='/Destination'>02 Destination</Link>
        <Link to='/Destination'>03 Crew</Link>
        <Link to='/Destination'>04 Technology</Link>
    </div>
  )
}

export default Navigation
