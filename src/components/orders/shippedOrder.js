import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../header";
import SideBar from "../sidebar";
import axios from "axios";
import { apiEndPoint } from "../../webapi/api";
import { toast } from "react-toastify";

function ShippedOrder(){
    const [orderList,setOrderList] = useState([]);
    const [error,setError]=useState(" ");
    const [loading,setLoading]=useState(true)


   


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

     


  


  useEffect(()=>{
    fetchOrder();
  },[])


    return <>
        <Header/>
        <div class="container-fluid page-body-wrapper">
            <SideBar/>


            <div class="main-panel">

                <div class="content-wrapper">
                    <div class="d-xl-flex justify-content-between align-items-start">
                
                        </div>
                   
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
                                {orderList.filter((item)=>item.status=="shipped").map((item, index) => <tr id={"row" + index} key={index}>

                                    <td>{index + 1}</td>
                                    <td>{item._id}</td>
                                    <td>{item.contactPerson}</td>
                                    <td>{item.date}</td>
                                    <td><span className="badge badge-dark rounded-pill d-inline">{item.status}</span></td>


                                </tr>)}

                            </tbody>
                        </table>
                    </div></div>
                <Footer/>
            </div></div>


    </>
}


export default ShippedOrder;