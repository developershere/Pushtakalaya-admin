import { Component } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(){

  const{currentadmin,isError}=useSelector((state)=>state.admin)
   return <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center" style={{borderBottom:"2px solid white"}}>
      <a class="navbar-brand brand-logo " href="#"><img src="assets/images/logo/logo.png" alt="logo" style={{width:"25%", height:"60px",float:'left'}}/><b className="topbarlogoheading">PUSTAKALAYA</b></a>
      
      <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-stretch">
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
        <span class="mdi mdi-menu"></span>
      </button>
      <div class="search-field d-none d-xl-block">
        <form class="d-flex align-items-center h-100" action="#">
          <div class="input-group">
            <div class="input-group-prepend bg-transparent">
              <i class="input-group-text border-0 mdi mdi-magnify"></i>
            </div>
            
            <input type="text" class="form-control bg-transparent border-0" placeholder="Search products"/>
          </div>
        </form>
      </div>
      <ul class="navbar-nav navbar-nav-right">
          
      <li class="nav-item">
        <Link to='/signup' class="nav-link">
          <span class="icon-bg"><i class="mdi mdi-account menu-icon"></i></span>
          <span class="menu-title">Create New Admin</span>
        </Link>
      </li>
           
          </ul>
      
     
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </nav>
  
}

export default Header;