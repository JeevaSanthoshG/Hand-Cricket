import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
const Person = ({img}) => {
  return (
    <div className='mt-2 mb-2'>
      <img src={img} width={50} height={50} style={{borderRadius:"50%",objectFit:"cover",objectPosition:"top",border:"0.5px solid rgba(0,0,0,0.2)"}}/>
    </div>
  )
}

export default Person
