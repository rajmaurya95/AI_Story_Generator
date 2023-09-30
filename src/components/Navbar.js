import React from 'react'
import {Link,useLocation, useNavigate} from 'react-router-dom';


const Navbar = () => {
    
    const navigate = useNavigate();


    const handleLogout=()=>{
      localStorage.removeItem('token')
      navigate('/login')
  }
   
    let location=useLocation();
    // console.log(location.pathname)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark" >
            <div className="container-fluid">
                <Link  className="navbar-brand" to="/"> AI Story_Generator </Link>
                <button className="fs-4 bd navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample  " aria-controls="offcanvasExample" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{"visibility":localStorage.getItem('token')?"visible":"hidden"}}>
                        <li className="nav-item">
                            <Link  className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className={`nav-link ${location.pathname==='/about'?'active':''}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className={`nav-link ${location.pathname==='/get'?'active':''}`} to="/get">Subscription</Link>
                        </li>
                    </ul>
{/* offcanvas start */}

    <div className=''>               




</div>
{/* offfcanvas */}


                    {!localStorage.getItem('token')?<form className="d-flex" role="search">
                        <Link className="btn btn-primary mx-2" role="button" to='/login'>Login</Link>
                        <Link className="btn btn-primary" role="button"  to='/signup'>SignUp</Link>
                    </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar