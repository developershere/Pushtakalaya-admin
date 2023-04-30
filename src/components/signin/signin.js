import { useState } from 'react';
import'./signin.css'
import axios from 'axios';
import { apiEndPoint } from '../../webapi/api';
import { setCurrentAdmin } from '../../router-config/adminslice';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function SignIn(){

  const[email,SetEmail]=useState(" ");
  const[password,SetPassword]=useState(" ");
  const navigate = useNavigate();
   const dispatch = useDispatch();

   
  const handlesubmit=async(event)=>{
    try{
    event.preventDefault();
     let response= await axios.post(apiEndPoint.ADMIN_SIGNIN,{email,password});
      dispatch(setCurrentAdmin(response.data.admin));
      toast.success("Sign Up Succesfully");
      navigate("/home")
    }catch(err){
      toast.error("Oops Something Went Wrong");
    }
  }

    return<>
    <ToastContainer/>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="Yinka Enoch Adedokun" />
  <title>Login Page</title>

  <div className="container-fluid">
    <div className="row main-content bg-success text-center">
      <div className="col-md-4 text-center company__info">
        <span className="company__logo row ">
          <div className='col-md-4 mb-5 mt-1'>
          <img src='\assets\images\logo\logo.png' className='signinimg'/>
          </div>
          <div className='col-md-5 mt-5 '>
          <span className="logoheading ">Pustakalaya</span>
          </div>
        </span>
       
      </div>
      <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
        <div className="container-fluid">
          <div className="row">
            <h2>Log In</h2>
          </div>
          <div className="row text-white">
            <form control="" className="form-group" onSubmit={handlesubmit}>
              <div className="row">
                <input type="email" onChange={(event)=>SetEmail(event.target.value)} className="form__input text-white" placeholder="Username"
                />
              </div>
              <div className="row">
                {/* <span class="fa fa-lock"></span> */}
                <input type="password" onChange={(event)=>SetPassword(event.target.value)}  className="form__input text-white" placeholder="Password"
                />
              </div>
            
              <div className="row">
                <input type="submit" defaultValue="Submit" className="signinbtn" />
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </div>
 
</>

//  completed
}

export default SignIn;