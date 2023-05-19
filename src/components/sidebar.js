import { Component } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signout } from "../router-config/adminslice";
function SideBar(){
  const dispatch = useDispatch();

  
  const signOut = () => {
    dispatch(signout());
    toast.info("Sign Out SuccesFully");
}

    return  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-category text-white">Main</li>
      
      <li class="nav-item">
        <Link to='/home' class="nav-link">
          <span class="icon-bg"><i class="mdi-home menu-icon"></i></span>
          <span class="menu-title">Home</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link to='/user' class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <span class="icon-bg"><i class="mdi mdi-crosshairs-gps menu-icon"></i></span>
          <span class="menu-title">Users</span>
         
        </Link>
        
      </li>
      
      <li class="nav-item">
        <Link to='/book' class="nav-link">
          <span class="icon-bg"><i class="mdi mdi-format-list-bulleted menu-icon"></i></span>
          <span class="menu-title">Books</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link to='/category' class="nav-link">
          <span class="icon-bg"><i class="mdi mdi-format-list-bulleted menu-icon"></i></span>
          <span class="menu-title">Category</span>
        </Link>
      </li>
     
      <li class="nav-item">
        <Link to='/freebook' class="nav-link">
          <span class="icon-bg"><i class="mdi mdi-format-list-bulleted menu-icon"></i></span>
          <span class="menu-title"> Free Books</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link to='/permission' class="nav-link">
          <span class="icon-bg"><i class="mdi mdi-format-list-bulleted menu-icon"></i></span>
          <span class="menu-title">New Books</span>
        </Link>
      </li>
      
      
      <li class="nav-item sidebar-user-actions">
        <div class="sidebar-user-menu">
          <Link onClick={signOut} class="nav-link"><i class="mdi mdi-logout menu-icon"></i>
            <span class="menu-title">Sign Out</span></Link>
        </div>
      </li>
    </ul>
  </nav>
   }


export default SideBar;