import React from 'react'

export default function () {
  return (
    <>
    <div className='py-5 footerstyle '>
     <div className='container'>
        <div className="row">
            <div className="col-md-4 py-1 text-white text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 py-1 text-white text-center ">
                <h3>AROUND THE WEB</h3>
                <ul className=' list-unstyled d-flex align-items-center justify-content-center'>
                 <li className=' icon'>
                   <i className='fa-brands fa-facebook mx-1'></i>
                 </li>
                 <li className=' icon'>
                 <i className='fa-brands fa-twitter mx-1'></i>
                 </li>
                 <li className=' icon'>
                 <i className='fa-brands fa-linkedin-in mx-1'></i>
                 </li>
                 <li className='icon'>
                 <i className='fa-solid fa-globe mx-1'></i>
                 </li>
                </ul>
            </div>
            <div className="col-md-4 py-1 text-white text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            
        </div>
        
    </div>   
    </div>
    <div className=' py-3  text-white text-center copyright '>
              <p className='mb-0'>Copyright © Your Website 2021</p>
            </div>
    </>
  )
}
