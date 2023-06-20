import { useEffect, useRef } from "react";
import React, { useState } from 'react'


import axios from "axios";
import { toast } from "react-toastify";

import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../header";
import SideBar from "../sidebar";
import { apiEndPoint } from "../../webapi/api";
import Spinner from "../Spinner/spinner";
import'./book.css'
import { useNavigate } from "react-router-dom";


function Book() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [permission,setPermission] = useState("");
    const navigate= useNavigate();
   
    const viewDescription = (book) => {
         window.alert(book)
        navigate("/viewDescription", { state: { bookDetails: book } })
      }

  

    const fetchProduct = async () => {
        try {
            const response = await axios.get(apiEndPoint.BOOK_LIST + `?page=${page}`);
            if (response.data.status) {
                console.log(response.data)
                setData(response.data.bookList);
                setData([...data, ...response.data.bookList]);
                setPage(page + 1);
                setIsLoading(false);
                console.log(response.data.bookList)
            }
        } catch (err) {
            setError("oops Something Went Wrong")
            toast.error("oops Soething Went Wrong");
        }
    }



    const removeBook = async (product) => {
        try {
                   data.map((book)=>{
                    if(book._id==product._id)
                        book.status = false
                })
               
           let response= await axios.put(apiEndPoint.DELETE_BOOK+`${product._id}`)
           console.log(response);
            toast.success("Book Deleted SuccesFully");
            setData([...data]); 
        } catch (err) {
            setError("Something Went Wrong");
            toast.error("Something Went Wrong")
        }

    }



    useEffect(() => {
        fetchProduct();
    }, [data]);



    return <>
    <Header/>
      <div class="container-fluid page-body-wrapper">
        <SideBar/>

        <div class="main-panel">
        <div class="content-wrapper">
            <div class="d-xl-flex justify-content-between align-items-start">
                <h2 class="text-dark font-weight-bold mb-2">Books</h2> </div>
            <div class="col-md-12">
                <div class="d-sm-flex justify-content-between align-items-center transaparent-tab-border {">

                </div>


            </div>

            <div className="container tablecontainer mb-5 "  >
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchProduct}
                    hasMore={data.length < 150}
                    loader={<Spinner/>}
                    endMessage={<p>Data End...</p>}>

                    <table className="table"   >
                        <thead  className="table-thead text-white" >
                            <tr>
                                <th className="col-1">Sno.</th>
                                <th className="col-2">Image</th>
                                <th className="col-2">Book Name</th>
                                <th className="col-2">Author</th>
                                <th className="col-2">Price</th>
                                <th className="col-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody >


                            {!error && data.filter((product)=>product.status==true).map((product, index) => <tr>
                                <td>{index + 1}</td>
                                <td> {product.photos.split("@")[1] ? <img src={apiEndPoint.DISK_STORAGE+ product.photos.split("@")[1]} className="img-fluid bookimg"  onClick={()=>{viewDescription(product)}}  /> : <img src={"https://drive.google.com/uc?export=view&id=" + product.photos.substring(32,product.photos.lastIndexOf("/"))} className="img-fluid bookimg" onClick={()=>{viewDescription(product)}}  />}</td>
                                <td>{product.name.substring(0, 20)}</td>
                                <td>{product.author.substring(0, 10)}</td>

                                <td>{product.price}&#8377; </td>
                            
                                <td><button className="btn btn-outline-danger"  onClick={() => removeBook(product)}>Delete</button></td>
                            </tr>)}




                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
          </div>
        </div>
        </div>

    </>
}

export default Book;