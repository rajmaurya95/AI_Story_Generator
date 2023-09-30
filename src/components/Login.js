import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import LOGIN from "../assets/login.jpg"
const Login = (props) => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        let email = document.getElementById("email").value
        let pass = document.getElementById("password").value
        const respone = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: pass })
        });
        const json = await respone.json()
        console.log(json)
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            props.showAlert("Logged in Successfully","success")
            navigate("/")


        }
        else {
            // alert('invalid')
            props.showAlert("Invalid Details","danger")

        }

    }

    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        
        
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100 text-center">
                    <div className="col-md-9 col-lg-6  col-xl-5">
                        <img src={LOGIN}
                            className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 text-white">
                        <h1 className='text-white text-center'> WELCOME TO STORY_GENERATOR AI TOOL</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4 my-3">
                                <label className="form-label d-flex" htmlFor="email">Email address</label>
                                <input type="email"  className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" id="email" name='email' />
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label d-flex" htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" name='password' autoComplete="on"/>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{"paddingLeft":"2.5rem","paddingRight":"2.5rem"}}>Login</button>
                                
                            </div>

                        </form>
                    </div>
                </div>

                <div class="card col-12 text-center mt-3">
  <div class="card-header ">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Welcom to Story_Generator</h5>
    <p class="card-text">Welcome to Story_Generator, a place where your imagination can run wild! Here, you can explore countless worlds, create intriguing characters, and embark on thrilling adventures all with the click of a button. From sci-fi to romance, mystery to fantasy, the possibilities are endless. Each click will generate a unique story prompt that will challenge and inspire you. So why wait? Dive into the endless depths of Story_Generator and let your creativity soar. Whether you're a seasoned writer or just starting out, this is the perfect place to hone your craft. So come on in and let's get started on your next epic tale!</p>
    {!localStorage.getItem('token')?<form className="" role="search">
                        <Link className="btn btn-primary mx-2" role="button" to='/login'>Login</Link>
                        <Link className="btn btn-primary" role="button"  to='/signup'>SignUp</Link>
                    </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
  </div>
  <div class="card-footer text-muted">
   Gautam Shakya - CEO of Story_Generator
  </div>
</div>

            </div>
            
        
    )
}

export default Login