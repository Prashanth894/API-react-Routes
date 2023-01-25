import React from 'react'
import '../App.css'

 function CryptoDisplay(props) {
  return (
   <div className='col p-2' id='card'>
    
      <img  src={props.image} className='p-2' style={{width:'12rem'}}/>
      <h3 className='text-center'>{props.name}</h3>
      <center><p className="p-2 mb-2 bg-secondary text-white">Current Price : {props.currentPrice}</p></center>
      <center><p className="p-2 mb-2 bg-secondary text-white">Last Updated: {props.lastUpdated.split('T')[0]}</p></center>
   </div>
      

     
  )
}
export default CryptoDisplay;
