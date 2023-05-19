import { useState } from 'react';
import './signup.css'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import { apiEndPoint } from '../../webapi/api';
import { Link } from 'react-router-dom';
function SignUp() {
  
   const [name,setName]=useState(" ");
   const [contact,setContact]=useState(" ");
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");
   

    const handleSubmit=async(event)=>{
        try{
          event.preventDefault();
           const response = await axios.post(apiEndPoint.ADMIN_SIGNUP,{name,contact,email,password})
           if(response.data.status){
            toast.success("sign up succesfully");
            return response.data.admin;
         }
        }catch(err){
             toast.error("Sign In Faied")
        }
    }

    return <>
    <ToastContainer/>
    <body className='signupbody'>
        <div className='col-md-4 m-auto mt-2'>
<div class="signup-form">
    <form  onSubmit={handleSubmit}>
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>                    
				</div>
                <input onChange={(event)=>setName(event.target.value)} type="text"className="form-control" placeholder="Enter Name" />
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-paper-plane"></i>
					</span>                    
				</div>
				
                <input onChange={(event)=>setEmail(event.target.value)} type="email"  className="form-control" placeholder="Enter Email" />
                                           
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-lock"></i>
					</span>                    
				</div>
                <input onChange={(event)=>setPassword(event.target.value)} type="password"  className="form-control" placeholder="Enter Password"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-phone"></i>
						
					</span>                    
				</div>
				<input  onChange={(event)=>setContact(event.target.value)} type="text"  className="form-control" placeholder="Enter Contact" />
			</div>
        </div>
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required"/>
             I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-dark btn-lg">Sign Up</button>
        </div>
     
    </form>
	
</div>
</div>
</body>
      
                           




    </>
}

export default SignUp;