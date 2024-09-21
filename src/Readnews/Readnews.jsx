import React, { useEffect } from 'react'
import Homefooter from '../Homepage/Footer/Homefooter'
import Dashoard from './Dashboard/Dashoard';
import Dashcenter from './Dashboard/Dashcenter';

function Readnews() {

  return (
    <div className='flex flex-col '>
    <Dashoard />
    <Dashcenter />
    <Homefooter/>
    </div>
  )
}

export default Readnews
