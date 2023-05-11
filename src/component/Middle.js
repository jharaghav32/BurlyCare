import React from 'react'

const Middle = () => {
  return (
    <div className='mb-5 py-5'>
        <h1 className=' mx-auto' style={{fontSize:'',width:'60vw'}} >Book <span className='text-danger'>Free Appointments</span> With Our Expert Doctors!</h1>
        <p className='mx-auto w-45 'style={{fontSize:''}}>
        Get full medical assistance and consultation for diseases
Hassle-free experience throughout your treatment.
        </p>
        <div className='d-flex flex-column gap-2 flex-md-row justify-content-center align-items-center mt-5'>
        <button className='px-2 py-2 rounded-5 mx-2 bg-danger text-white' style={{width:'35%'}}>Book Appointments</button>
        <span className="vr bg-dark d-none d-md-block" style={{height:'45px',width:'2px'}}></span>
        <button className='px-2 py-2 rounded-5 mx-2  text-gray ' style={{width:'35%'}}>Call our Agent</button>
        </div>
    </div>
  )
}

export default Middle