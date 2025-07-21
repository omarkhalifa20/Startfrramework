import React, { useRef } from 'react'
import Pic3 from '../../src/assets/port3.png'
export default function Card3() {
 
   let overlayref = useRef(null);
     function DisplayImg() {
       
       overlayref.current.classList.remove ("d-none") 
       
       
     }
   
    
   
   
     
     function closetab() {
       overlayref.current.classList.add ("d-none")
       
     }
   
     document.addEventListener ("click", function(e) {
       if (e.target.id === "overlay"){
         closetab()
       }
     })
     
     document.addEventListener ("keyup", function(e) {
       if (e.key === "Escape"){
         closetab()
       }
     })
     return (
       <>
       <div className=' position-relative '>
        <img className='w-100 pic1 rounded-3' src={Pic3} alt="" /> 
        <button onClick={()=>DisplayImg()} className='layer rounded-3 d-flex align-items-center justify-content-center position-absolute'>
           <i className="text-white  fa-solid fa-plus fa-6x"></i>
       </button>  
       <div ref={overlayref} id='overlay' className='overlay-sec d-none d-flex align-items-center justify-content-center'>
       <img className=' pic-overlay ' src={Pic3} alt="" /> 
       </div>
       </div>
       
       </>
     )
}
