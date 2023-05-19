import { useDispatch, useSelector } from "react-redux";
import Header from "../header";
import SideBar from "../sidebar";
import Footer from "../Footer";
import "./category.css"
import axios from "axios";
import { apiEndPoint } from "../../webapi/api";
import { setCategory} from "../../router-config/categorySlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function Category() {
    const [categoryList,setCategoryList] = useState([]);
    const [error,setError]=useState(" ");
    const [loading,setLoading]=useState(true)
    const [categoryName, setCategoryName] = useState(" ");
    const dispatch = useDispatch();
    const navigate = useNavigate();
   


     const fetchCategory = async ()=>{
        try{
        let response = await axios.get(apiEndPoint.CATEGORY_API);
        if(response.data.status){
            console.log(response.data);
        setCategoryList(response.data.category)
        setLoading(false);
        }
      } catch(err) {
        toast.setError("Something Went Wrong");
      }
      }

    const removeCategory = async (categoryId) => {
        try {
          
            if(window.confirm("Are You Sure")){
           let response= await axios.post(apiEndPoint.REMOVE_CATEGORY,{categoryId});
            toast.info("Category Remove Succesfully")
            let index =  categoryList.findIndex((category)=>category._id==categoryId);
            categoryList.splice(index,1);
                setCategoryList([...categoryList]);
            }
        } catch (err) {
            toast.setError("Something Went Wrong");
        }

    }


    const editCategory = async (category) => {
        window.alert(category);
        navigate("/updateCategory", { state: { category: category } })
    }

    const addCategory = async (event) => {
        try {
           
            event.preventDefault();
            console.log(categoryName);
            let response = await axios.post(apiEndPoint.ADD_CATEGORY, { categoryName });

            setCategoryList([...categoryList,response.data.category]);
            
        } catch (err) {
            toast.setError("oops Something Went Wrrong");
        }

    }

  useEffect(()=>{
    fetchCategory();
  },[])


    return <>
        <Header />
        <div class="container-fluid page-body-wrapper">
            <SideBar />


            <div class="main-panel">

                <div class="content-wrapper">
                    <div class="d-xl-flex justify-content-between align-items-start">
                        {/* <h2 class="text-dark font-weight-bold mb-2">Manage Categories </h2>  */}
                        </div>
                    <form onSubmit={addCategory}>
                        <div class="row form-group">

                            <div className="col-5">
                                <input type="text" placeholder="Enter Category" onChange={(event) => { setCategoryName(event.target.value) }} className="form-control forminput " />
                            </div>
                            <div className="col-2 mt-1">
                                <button className="btn btn-dark" type="submit"  >Add Category</button>
                            </div>

                        </div>
                    </form>
                    <div className="container tablecontainer mb-5 mt-3">
                        <table className="table">
                            <thead className="table-thead">
                                <tr className="text-white">
                                    <th>S.No</th>
                                    <th>CategoryName</th>
                                    <th>Edit</th>
                                    <th>Remove</th>

                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map((item, index) => <tr id={"row" + index} key={index}>

                                    <td>{index + 1}</td>
                                    <td>{item.categoryName}</td>
                                    <td><button className="btn btn-dark" onClick={() => editCategory(item)} >Edit</button></td>
                                    <td><button className="btn btn-outline-danger " onClick={() => removeCategory(item._id)}>Remove</button></td>

                                </tr>)}

                            </tbody>
                        </table>
                    </div></div>
                <Footer />
            </div></div>


    </>
}

export default Category;