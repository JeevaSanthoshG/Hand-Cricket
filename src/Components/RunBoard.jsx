import { Card, Modal } from 'antd';
import React, { useState } from 'react'
import sixImg from "../assets/Six.jpg"
import fourImg from "../assets/Four.jpg"
const RunBoard = () => {
  const score=[0,1,2,3,4,5,6];
  const [six,setSix]=useState(false)
  const [four,setFour]=useState(false)
  const [tScore,setTScore]=useState(0)
  const addingScore= (run) =>{
    setTScore(run)  
    if(run==6){
         setSix(!six)
         setTimeout(()=>{
            setSix(false)
         },1000)
      }
      else if(run==4){
        setFour(!six)
        setTimeout(()=>{
           setFour(false)
        },1000)
      }
      else if(run=="w"){

      }
  }
    return (
    <div className='d-flex container gap-1 mt-5' style={{position:"relative"}}>
      {
        score.map((_,ind)=>{
            return (
                <Card
                size='small'
                style={{
                    width:"160px",
                    height:"100px",
                    cursor:"pointer"
                }}
                className='d-flex justify-content-center align-items-center border'
                onClick={()=> {addingScore(ind)}}
                >
                    <h4 style={{fontSize:"2rem",fontWeight:"700"}}>{ind}</h4>
                </Card>
            )
        })
      }
      { six && (
          <Modal open={true}  footer={null} closable={false}>
           <img src={sixImg} alt="" width={470} height={450} />
          </Modal>
      )}
      { four && (
          <Modal open={true}  footer={null} closable={false}>
           <img src={fourImg} alt="" width={470} height={450} />
          </Modal>
      )}
    </div>
  )
}

export default RunBoard
