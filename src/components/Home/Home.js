import { Component, useEffect, useState } from "react";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import { apiEndPoint } from "../../webapi/api";
import Header from "../header";
import SideBar from "../sidebar";
import Footer from "../Footer";
import './home.css'
import { Link } from "react-router-dom";

function Home() {

  const [user, setUser] = useState([]);
  const [books, setBooks] = useState([]);
  const [freeBooks, setFreeBooks] = useState([]);
  const [pendingBooks, setPendingBooks] = useState([]);
  const [order, setOrder] = useState([]);

  const loadPendingBooks = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_PENDING_BOOKS);
      if (response.data.status)
        setPendingBooks(response.data.bookList)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }
  }

  const loadUsers = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_USERS);
      if (response.data.status)
        setUser(response.data.user)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }
  }
  const loadBooks = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_BOOKS);
      if (response.data.status)
        setBooks(response.data.bookList)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }

  }
  const loadFreeBooks = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_FREE_BOOKS);
      if (response.data.status)
        setFreeBooks(response.data.bookList)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }

  }
  const loadOrders = async () => {
    try {
      let response = await axios.get(apiEndPoint.TOTAL_ORDERS);
      if (response.data.status)
      setOrder(response.data.orderlist)
    } catch (err) {
      toast.error("Oops Something Went Wrong");
    }

  }


  useEffect(() => {
    loadUsers();
    loadBooks();
    loadOrders();
    loadFreeBooks();
    loadPendingBooks();
  }, [])


  return <>
    <Header />
    <div class="container-fluid page-body-wrapper">
      <SideBar />
      <ToastContainer />

      <div class="main-panel">
        <div class="content-wrapper">

          <div class="d-xl-flex justify-content-between align-items-start">
            <h2 class="text-dark font-weight-bold text-upper mb-2"> Overview Dashboard </h2>

          </div>
          <div class="container">
            <div class="tab-content tab-transparent-content">
              <div class="tab-pane fade show active" id="business-1" role="tabpanel" aria-labelledby="business-tab">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="card  d-flex mb-2 dashboarddiv">
                      <div className="card-header  p-3 pt-2">
                      <div className="icon icon-lg icon-shape bg-gradient shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute dashboardshort ">
                          <div className="dashboardicons">
                          <i className="fa fa-user "></i>
                          </div>

                        </div>
                    <Link to='/user'>
                        <div className="text-end pt-1  dashboardheading">
                          <p className=" headings mb-0 text-capitalize">Users</p>
                          <h4 className="mb-0 text-center">{user.length}</h4>
                        </div></Link>   
                       
                      </div>
                      
                    </div>
                  
                  </div>
                  <div className="col-lg-4 col-sm-4 mt-sm-0 mt-4">
                    <div className="card d-flex mb-2 dashboarddiv">
                      <div className="card-header p-3 pt-2 bg-transparent">
                        <div className="icon icon-lg icon-shape bg-gradient shadow-success text-center border-radius-xl mt-n4 position-absolute dashboardshort ">
                        <div className="dashboardicons">
                          <i className="fa fa-book "></i>
                          </div>
                        </div>
                        <Link to='/book'>
                        <div className="text-end pt-1  dashboardheading">
                          <p className=" headings mb-0 text-capitalize">Books</p>
                          <h4 className="mb-0 text-center">{books.length}</h4>
                        </div></Link>
                      </div>
                    
                    </div>
                  
                  </div>
                  <div className="col-lg-4 col-sm-4 mt-sm-0 mt-4">
                    <div className="card d-flex mb-2 dashboarddiv">
                      <div className="card-header p-3 pt-2 bg-transparent">
                        <div className="icon icon-lg icon-shape bg-gradient shadow-success text-center border-radius-xl mt-n4 position-absolute dashboardshort ">
                        <div className="dashboardicons">
                          <i className="fa fa-book "></i>
                          </div>
                        </div>
                        <Link to='/freebook'>
                        <div className="text-end pt-1  dashboardheading">
                          <p className=" headings mb-0 text-capitalize">Donate Books</p>
                          <h4 className="mb-0 text-center">{freeBooks.length}</h4>
                        </div></Link>
                      </div>
                    
                    </div>
                   
                  </div>
                </div>
                <div className="row mt-5">
                
                  <div className="col-lg-4 col-sm-4 mt-sm-0 mt-4">
                    <div className="card d-flex mb-2 dashboarddiv">
                      <div className="card-header p-3 pt-2 bg-transparent">
                        <div className="icon icon-lg icon-shape bg-gradient shadow-success text-center border-radius-xl mt-n4 position-absolute dashboardshort ">
                        <div className="dashboardicons">
                          <i className="fa fa-book "></i>
                          </div>
                        </div>
                      <Link to='/permission'> <div className="text-end pt-1  dashboardheading">
                          <p className=" headings mb-0 text-capitalize"> New Books</p>
                          <h4 className="mb-0 text-center">{pendingBooks.length}</h4>
                        </div></Link> 
                      </div>
                    
                    </div>
                  
                  </div>
                  <div className="col-lg-4 col-sm-4 mt-sm-0 mt-4">
                    <div className="card d-flex mb-2 dashboarddiv">
                      <div className="card-header p-3 pt-2 bg-transparent">
                        <div className="icon icon-lg icon-shape bg-gradient shadow-success text-center border-radius-xl mt-n4 position-absolute dashboardshort ">
                        <div className="dashboardicons">
                          <i className="fa fa-first-order "></i>
                          </div>
                        </div>
                        <Link to='/shippedOrder'>
                        <div className="text-end pt-1  dashboardheading">
                          <p className=" headings mb-0 text-capitalize">Shipped Orders</p>
                          <h4 className="mb-0 text-center">{order.filter((book)=>book.status=="shipped").length}</h4>
                        </div></Link>
                      </div>
                    
                    </div>
                  
                  </div>
                  <div className="col-lg-4 col-sm-4 mt-sm-0 mt-4">
                    <div className="card d-flex mb-2 dashboarddiv">
                      <div className="card-header p-3 pt-2 bg-transparent">
                        <div className="icon icon-lg icon-shape bg-gradient shadow-success text-center border-radius-xl mt-n4 position-absolute dashboardshort ">
                        <div className="dashboardicons">
                          <i className="fa fa-first-order "></i>
                          </div>
                        </div>
                        <Link to='/orders'>
                        <div className="text-end pt-1  dashboardheading">
                          <p className=" headings mb-0 text-capitalize"> Pending Orders</p>
                          <h4 className="mb-0 text-center">{order.filter((book)=>book.status=="pending").length}</h4>
                        </div></Link>
                      </div>
                    
                    </div>
                  
                  </div>
                </div>
                

             



              </div>
            </div>


          </div>

        </div>
        <Footer />

      </div>

    </div>
  </>
}
export default Home;