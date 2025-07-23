import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
function displaylabel(e) {
  let input = e.target.value;
  let label = e.target.previousElementSibling;
  if (input == ''){
  label.classList.add ("move")
  }else{
    label.classList.remove ("move")
  }
}
  

  return (
    <>
    <div className='Contactstyle py-4 d-flex flex-column align-items-center justify-content-center text-white'>
            <div className='container'>
             <div className='d-flex contact-head align-items-center justify-content-center flex-column '>
             <h2 className='fs-1 fw-bolder mb-3 contacth2' >CONATCT SECTION</h2>
             <div className='starstyle d-flex align-items-center justify-content-center mb-3'>
               <i className='fa-solid fa-star mx-3 '></i> 
             </div>
             </div>
             
             <form className='formstyP mx-auto'> 
                <div className="mb-4">
                <label className='label position-relative top-0 move' htmlFor="exampleFormControlInput1"> userName :</label>
                <input onChange={displaylabel} type="text " className="form-control p-3 border-0 border-bottom " id="exampleFormControlInput1" placeholder="userName" />
                </div>

                <div className="mb-4">
                <label className='label position-relative top-0 move' htmlFor="exampleFormControlInput2"> userAge :</label>
                <input onChange={displaylabel} type="text" className="form-control p-3 border-0 border-bottom " id="exampleFormControlInput2" placeholder="userAge" />
                </div>

                <div className="mb-4">
                <label className='label position-relative top-0 move' htmlFor="exampleFormControlInput3"> userEmail :</label>
                <input onChange={displaylabel} type="text" className="form-control p-3 border-0 border-bottom " id="exampleFormControlInput3" placeholder="userEmail" />
                </div>

                <div className="mb-4">
                <label className='label position-relative top-0 move' htmlFor="exampleFormControlInput4"> userPassword :</label>
                <input onChange={displaylabel} type="password" className="form-control p-3 border-0 border-bottom " id="exampleFormControlInput4" placeholder="userPassword" />
                </div>
                  
                <button className='btn btn-success' type="submit"> Send Message</button>
                
             </form>
             
             
            </div>
            
        </div>
    </>
  )
}
