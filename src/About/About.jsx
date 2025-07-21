import React, { useEffect } from 'react'

export default function About() {
   useEffect(() => {
      document.title = "About";
    }, []);
  return (
    <>
    <div className='Aboutstyle d-flex flex-column align-items-center justify-content-center text-white'>
            <div className='container d-flex flex-column align-items-center justify-content-center'>
             
             <h2 className='fs-1 fw-bolder mb-3' >ABOUT COMPONENT</h2>
             <div className='starstyle d-flex align-items-center justify-content-center mb-3'>
               <i className='fa-solid fa-star mx-3 '></i> 
             </div>
             <div className="row px-5">
                <div className="col-md-6 ps-md-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 pe-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
             </div>
             
            </div>
            
        </div>
    </>
  )
}

