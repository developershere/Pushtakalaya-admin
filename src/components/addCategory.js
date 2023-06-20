import axios from "axios";
import { useState } from "react";

function  AddCategory({categories,setCategories}){
      
     const [category,setCategory]=useState("");
     
     const saveCategory=async(event)=>{
          event.preventDefault();
        try{
         let response = await axios.post("http://localhost:3000/category/add",{categoryName:category});
         if(response.data.status){
            // window.alert("Category Saved....");
            //  setCategories([...categories,response.data.category]) 

             
              
         }
        }catch(err){
            console.log(err);
            console.log("Catch Executed");
        }
     }


    return<form onSubmit={saveCategory}>
       <div className="row mt-3">
            <div className="col-3">
                <input type="text" class="form-control" onChange={(event)=>setCategory(event.target.value)} placeholder="Add Category" style={{height:'6vh'}} />
           </div>
           <div className="col-2">
           <button type="submit" className="btn btn-dark w-50">Save</button>
           </div>
        </div>
        </form>
}

export default AddCategory;