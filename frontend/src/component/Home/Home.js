import React, { Fragment}  from 'react'
import {CgMouse} from 'react-icons/cg'
import "./Home.css"
import Product from "./Product.js"
import MetaData from '../layout/MetaData';

const product = {
  name: "Blue shirt",
  image: [{ url: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80"}],
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

      <div className='container' id='container'>
         <Product product={product} />
         <Product product={product} />
         <Product product={product} />
         <Product product={product} />
         <Product product={product} />
         <Product product={product} />

      </div>


      
     </Fragment>
    )
  } 
  
 

export default Home