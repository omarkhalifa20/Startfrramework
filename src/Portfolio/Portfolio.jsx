import React, { useEffect } from 'react'
import Card1 from '../Card-1/Card1'
import Card2 from '../Card-2/Card2'
import Card3 from '../Card-3/Card3'

export default function Portfolio() {
useEffect(() => {
    document.title = "Portfolio";
  }, []);
  
  return (
    <>
    <div className='Portfoliostyle  d-flex flex-column align-items-center justify-content-center text-white'>
            <div className='container'>
             <div className='d-flex  align-items-center justify-content-center flex-column '>
             <h2 className='fs-1 fw-bolder mb-3' >PORTFOLIO COMPONENT</h2>
             <div className='starstyle d-flex align-items-center justify-content-center mb-3'>
               <i className='fa-solid fa-star mx-3 '></i> 
             </div>
             </div>
             
             <div className="row gy-5">
              <div className="col-md-4">
                <Card1/>
              </div>
              <div className="col-md-4">
                <Card2/>
              </div>
              <div className="col-md-4">
                <Card3/>
              </div>
              <div className="col-md-4">
                <Card1/>
              </div>
              <div className="col-md-4">
                <Card2/>
              </div>
              <div className="col-md-4">
                <Card3/>
              </div>
              
             </div>
             
             
            </div>
            
        </div>
    </>
  )
}
