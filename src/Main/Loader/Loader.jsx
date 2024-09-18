import React from 'react'
import loadingGif from "../../assests/loader.gif"

const Loader = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'100%'}}>
  <div>
    <img src={loadingGif} alt="loading"  />
   </div>
    </div>
   
  )
}

export default Loader