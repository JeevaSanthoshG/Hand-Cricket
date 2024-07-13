import React from 'react'
import { Card, Space } from 'antd';
import Person from './Person';
import person from '../assets/artist-white.jpg'
import cpu from "../assets/bot.jpg"
const Scorecard = () => {
    const name="barath"
    const details=[
    {
        name:"barath",
        score:0,
        wicket:0,
        balls:0,
        img:person
    },
    {
        name:"cpu",
        score:0,
        wicket:0,
        balls:0,
        img:cpu

    }
]
  return ( 
    <div className='container d-flex justify-content-between w-100 mt-3'>
   {
   details.map((per,ind) => (
   
        <Card key={ind}
        size='small'
        extra={<Person img={per.img}/>}
          title={<h5 style={{fontWeight:"700"}}>{per.name.toUpperCase()}</h5>}
          style={{
            width: 300,
          }}
        >
        <div className="score ms-4" style={{fontSize:"2rem",fontWeight:"600"}}>
            {per.score} / {per.wicket} - ({per.balls})
        </div>
        </Card>
   ))
   }
  </div>
  )
}

export default Scorecard
