import React, { Fragment}  from 'react'
import {CgMouse} from 'react-icons/cg'
import "./Home.css"




import MetaData from '../layout/MetaData';

const product = {
  name: "Blue shirt",
  image: [{ url: "https://media.istockphoto.com/photos/very-happy-young-man-man-picture-id1332373959?s=612x612"}],
  price: "3000",
  _id: "manu"
}


const Home = () => {

  
  

  return (
  
  <Fragment>

    <MetaData title="ECOMMERCE"/>
      <div className='banner'>
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href='#container'>
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>  

      <h2 className='homeHeading'>Featured Products</h2>


      
     </Fragment>
    )} 
  
 

export default Home