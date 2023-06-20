import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../header";
import SideBar from "../sidebar";
import { useState } from "react";
import axios from "axios";
import { apiEndPoint } from "../../webapi/api";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from "react-toastify";


function UpdateCategory() {
    const loaction=useLocation();
    const category= loaction.state.category;
    const [categoryName,SetUpdateCategory]=useState(" ");
    const [categoryId,setCategoryId]=useState(" ");

   const id=category._id;


    const editSubmit=async(event)=>{
        try{
        event.preventDefault();
       
        let response=await axios.post(apiEndPoint.EDIT_CATEGORY,{id,categoryName})
        console.log(response.data)
        SetUpdateCategory([...categoryName])
        toast.info("Category Updated Succesfully");
        }catch(err){
            toast.error("Something Went Wrong");
        }
    }
    return<>
        <Header />
        <div className="container-fluid page-body-wrapper">
            <SideBar />


            <div className="main-panel">
           <ToastContainer/>
                <div className="content-wrapper">
                    
                    <div className="col-md-12" >
                        <div className="mt-3">
                        <div className="d-sm-flex justify-content-between align-items-center transaparent-tab-border {">

                        </div>
                        <form onSubmit={editSubmit}>
                            <div className="form-group">
                                  
                                    <label className='text-black heading' style={{fontSize:'20px'}}>Category Name</label>
                                    <input type="text" name="categoryName" onChange={(event)=>{SetUpdateCategory(event.target.value)}} className="form-control updateinput mt-3" defaultValue={category.categoryName}/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-dark">Update</button>
                                    </div>
                         </form>


                            </div>
                            </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
}
 export default UpdateCategory;
