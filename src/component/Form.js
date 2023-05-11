import React from 'react'

const Form = () => {
    return (
        <div>
            <section className='my-3 border border-warning rounded-4 p-4 mx-auto' style={{width:'70vw'}}>
                <h1>Let's Schedule our Appointment</h1>
                <p>We would love to hear from you</p>
                <form className=' w-100 mx-auto'>
                    <div className="mb-3">
                        <div className="mb-3">

                            <input type="text" className="form-control" id="exampleInputname" placeholder='Full name' />
                        </div>
                        <div className='mb-3'>
                            <input type='number' className='form-control' id="number" placeholder='Phone number' />
                        </div>
                        <div className='mb-3'>
                            <select className="form-select" aria-label="Default select example">
                            <option defaultValue="0">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue="0">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger px-5 border rounded-3">Submit</button>
                </form>
            </section>
            <section className='my-5' style={{backgroundColor:'#FFF8F7'}}>
                <h2 style={{fontSize:'',fontWeight:'bold'}}>Frequently Asked Questions</h2>
                <p className='mx-auto' style={{fontSize:'',width:'40%'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut
                </p>
                <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center my-4'>
                    <div className="card border-0" style={{ width: '38rem', flexDirection: 'row' }}>

                        <div className="card-body  d-flex flex-row ">
                            <button className=' border rounded-circle bg-danger text-white mx-4' style={{ width: '60px', height: '40px' }}>?</button>
                            <div style={{ textAlign: 'left' }}>

                                <p className="card-title " style={{ fontSize: '', fontWeight: 'bold' }}>How Burlycare takes care of patients on the
                                    day of the surgery?</p>
                                <p style={{ fontSize: '' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card border-0" style={{ width: '38rem', flexDirection: 'row' }}>

                        <div className="card-body d-flex flex-row ">
                            <button className=' border rounded-circle bg-danger text-white mx-4' style={{ width: '60px', height: '40px' }}>?</button>
                            <div style={{ textAlign: 'left' }}>

                                <p className="card-title " style={{ fontSize: '', fontWeight: 'bold' }}>How Burlycare takes care of patients on the
                                    day of the surgery?</p>
                                <p style={{ fontSize: '' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card border-0" style={{ width: '38rem', flexDirection: 'row' }}>

                        <div className="card-body d-flex flex-row ">
                            <button className=' border rounded-circle bg-danger text-white mx-4' style={{ width: '60px', height: '40px' }}>?</button>
                            <div style={{ textAlign: 'left' }}>

                                <p className="card-title " style={{ fontSize: '', fontWeight: 'bold' }}>How Burlycare takes care of patients on the
                                    day of the surgery?</p>
                                <p style={{ fontSize: '' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card border-0" style={{ width: '38rem', flexDirection: 'row' }}>

                        <div className="card-body d-flex flex-row ">
                            <button className=' border rounded-circle bg-danger text-white mx-4' style={{ width: '60px', height: '40px' }}>?</button>
                            <div style={{ textAlign: 'left' }}>

                                <p className="card-title " style={{ fontSize: '', fontWeight: 'bold' }}>How Burlycare takes care of patients on the
                                    day of the surgery?</p>
                                <p style={{ fontSize: '' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='d-flex justify-content-end mx-4'>

<button className='py-2 px-5 bg-danger rounded-4 border border-dark'>View All</button>
</div>
            </section>
            <section className='my-5 p-4 mx-auto rounded-4' style={{border:'2px solid red',width:'70vw'}}>
            <p className='text-danger' style={{fontSize:'2rem',fontWeight:'bold'}}>Have Feedback ?</p>
            <p>Help us to improve by providing your feedbacks!</p>
            <form className='w-100 w-md-50 mx-auto my-5'>
            <div className="mb-3">
  
  <input type="email" className="form-control bg-light" id="exampleFormControlInput1" placeholder="Enter your email"/>
</div>
<div className="mb-3">
  <textarea className="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
</div>
  <button type="end" className="btn btn-danger px-5 border rounded-4 my-4">Send</button>
</form>
            </section>
        </div>
    )
}

export default Form