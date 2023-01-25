import React from 'react'
import './nasa.css'
const NasaDisplay = ({ data }) => {
    return (

        <div className='row'>
            <center>
                {/* <div className='col'>
        <img className='image mt-5' style={{width:"30%"}} src={data.hdurl}></img><br/>
       <h3 style={{color:"yellow"}} > {data.title}</h3>
       <p style={{color:"black"}}>Date: {data.date}</p>
       </div> */}
        <h1 className='mt-3 text-white'>Nasa API</h1>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="animate__animated animate bounce card " style={{width: '18rem'}}>
                        <img src={data.hdurl} className="card-img-top " alt="..." style={{height: '12rem'}}/>
                        <div className="card-body"  style={{background:"#CFE2FF"}}>
                            <h5 className="card-title ms-1">{data.title}</h5>
                            <button className="btn btn-primary mb-1 mt-1 ">Date : {data.date}</button>
                        </div>
                    </div>
                </div>
            </center>

        </div>

    )
}

export default NasaDisplay;

