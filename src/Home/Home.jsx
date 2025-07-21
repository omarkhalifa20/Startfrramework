import React, { useEffect } from 'react'
import MainPic from '../assets/main.svg'
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
    <div className='Homestyle d-flex flex-column align-items-center justify-content-center  text-white'>
        <div className='container d-flex flex-column align-items-center justify-content-center '>
         <img className='Avatarpic ' src={MainPic} alt="Avatar pic" />   
         <h2 className='fs-1 fw-bolder mb-3' >START FRAMEWORK</h2>
         <div className='starhome d-flex align-items-center justify-content-center mb-3'>
           <i className='fa-solid fa-star mx-3 '></i> 
         </div>
         <p>Graphic Artist - Web Designer - Illustrator</p>
         
        </div>
        
    </div>
    </>
  )
}
