import React from 'react'
import logo from '../logo.svg'
import { AiOutlineSearch ,AiOutlineDown} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='mb-5'>
            <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Bootstrap" width="40" height="44" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2  mb-lg-0">
                            <li className="nav-item dropdown ml-4 fs-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Delhi
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li>
                        </ul>
                            <form className="d-flex  border  rounded-4 bg-light py-1 px-1 mx-auto" role="search">
                                <AiOutlineSearch fontSize="25px" color='gray' className='pt-1' />
                                <input className="form-control me-2 bg-light" type="search" placeholder="Search here...." aria-label="Search" className='border pb-1 pr-2  border-white border-none outline-none ' style={{width:'30vw'}}  />
                               
                            </form>
                            <li className="nav-item d-flex text-danger mx-2">
                                Call 0876-123-4567
                               
                            </li>
                            <div className="vr d-md-block d-none" style={{height:'45px'}}></div>
                                <button className='px-2 py-2 rounded-5 mx-2 my-2 bg-danger text-white'>Log In/Sign Up</button>
                           
                    </div>
                </div>
           
            </nav>
        <nav className="navbar navbar-expand-sm  bg-body-tertiary">
        <div className="container-fluid  py-2" style={{backgroundColor:'#FFE9E4'}}>
          <button className="navbar-toggler mx-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineDown/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">ENT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gynaecology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Protolohy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Laparoscopy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Urology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Protolohy</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navbar