import '../App.css';
import mern from '../mern.jpg'
import nasa from '../nasa.png'
import crypto from '../crypto.png'
import covid from '../covid.png'
import image from '../image.jpg'
function Home() {
  return (
  //  <div className='container'>
  //   <div className="card" style={{width: '18rem'}}>
  //     <img className="card-img-top" src={mern} alt="Card image cap"/>
  //     <div className="card-body">
  //       <p className="card-text">Full stack - HTML, CSS, Javascript, ES6, React, Nodejs, MongoDB</p>
  //     </div>
  //   </div>
  //  </div>
<div className='mt-5'id='background'>
  <center>
  <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={mern} alt="Card image cap"/>
      <div className="card-body "style={{background:"#CFE2FF"}}>
        <h4 className="card-text-dark">Full stack - HTML, CSS, Javascript, ES6, React, Nodejs, MongoDB</h4>
       </div>
     </div>
  </center>

<div className='div-main row m-5 ms-5 p-3 ' id='all-api'>
      
    <div className='div col-4'>
    <center>
    <h1 className='text-white' id='crypto-h1'>Crypto API</h1>
    <img  id='crypto-img'src={crypto}></img>
    <p >Cryptocurrency API which shows different crypto currencies <br/> data which you can search them by their name and price</p>
    </center>
    </div>
    <div className='div col-4'>
        <center>
      <h1 className='text-white' id='nasa-h1'>Nasa API</h1>
      <img id='nasa-img' src={nasa}></img>
      <p>Nasa API contains a userlogin <br/> form built with validation functionally</p>
      </center>
      </div>
    <div className='div col-4'>
    <center>
    <h1 className='text-white' id='covid-h1'>Covid API</h1>
    <img id='covid-img' src={covid}></img>
    <p>Covid API which contains different states covid data within <br/> india like total no of cases ,deaths and discharged</p>
   
     </center>
    </div>
    
    
  </div>

</div>
  
  );
}

export default Home;