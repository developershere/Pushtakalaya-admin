import { useDispatch, useSelector } from "react-redux";
import Header from "../header";
import SideBar from "../sidebar";
import Footer from "../Footer";
import "../category/category.css"
import axios from "axios";
import { apiEndPoint } from "../../webapi/api";
import { setCategory} from "../../router-config/categorySlice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

function Order() {
    const [orderList,setOrderList] = useState([]);
    const [error,setError]=useState(" ");
    const [loading,setLoading]=useState(true)

    const dispatch = useDispatch();
    const navigate = useNavigate();
   


     const fetchOrder = async ()=>{
        try{
        let response = await axios.get(apiEndPoint.TOTAL_ORDERS);
        if(response.data.status){
            console.log(response.data);
        setOrderList(response.data.orderlist)
        setLoading(false);
        }
      } catch(err) {
        toast.setError("Something Went Wrong");
      }
      }

      const changeOrderStaus=async(order)=>{
       const orderId=order._id;
    
        if(window.confirm("Are You Sure")){
       let response= await axios.put(apiEndPoint.CHANGE_STATUS +`${orderId}`)
         toast.info("Status Update Succesfully");
   
      }
    
      }


  


  useEffect(()=>{
    fetchOrder();
  },[orderList])


    return <>
        <Header />
        <div class="container-fluid page-body-wrapper">
            <SideBar />


            <div class="main-panel">

                <div class="content-wrapper">
                    <div class="d-xl-flex justify-content-between align-items-start">
                     <Link to='/shippedOrder'><button className="btn btn-dark">Shipped Order</button></Link>  
                        </div>
                   <ToastContainer/>
                    <div className="container tablecontainer mb-5 mt-3">
                        <table className="table">
                            <thead className="table-thead">
                                <tr className="text-white">
                                    <th>S.No</th>
                                    <th>OrderId</th>
                                    <th>contactPerson</th>
                                    <th>Date</th>
                                    <td>Order Status</td>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                {orderList.filter((item)=>item.status=="pending").sort((b,a)=>b.date<a.date?1:-1).map((item, index) => <tr id={"row" + index} key={index}>

                                    <td>{index + 1}</td>
                                    <td>{item._id}</td>
                                    <td>{item.contactPerson}</td>
                                    <td>{item.date}</td>
                              <td><button onClick={()=>changeOrderStaus(item)} className="btn btn-outline-dark">{item.status}</button></td>


                                </tr>)}

                            </tbody>
                        </table>
                    </div></div>
                <Footer />
            </div></div>


    </>
}

export default Order;