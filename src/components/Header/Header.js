import React, { useState } from "react";
// import TextField from '@material-ui/core/TextField';
import Logo from "../../images/bookMyShowLogo.jpg";
import "./Header.css";
import { Link,Route ,Switch} from "react-router-dom";

import Main from '../Main/Main'
import SignIn from "../sign in/SignIn";

export default function Header() {
  const [display,setDisplay]=useState(false);
  const signIn=()=>{
      console.log('Hi, you clicked signin');
      setDisplay(!display)

  }
  return (
    <div className="container-fluid header">
      
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <img id="logo" src={Logo} alt="logo" />
          <input
            id="search"
            type="text"
            placeholder="Search for Movies,Events,Plays ,Sports and Activities"
          />
        </div>
        <div className="col-md-6 col-sm-6 right">
          <select
            class="form-select form-select-sm select"
            aria-label=".form-select-sm example"
          >
            <option selected>Chennai</option>
            <option value="1">Madurai</option>
            <option value="2">Trichy</option>
            <option value="3">Coimbatore</option>
          </select>
          <Link to ='/signIn'>
          <button type="button" class="btn btn-danger button" onClick={()=>signIn()}>Sign in</button>
          </Link>
          <Link to='/login'>Login</Link>

          <i className="fas fa-bars"></i>
          <Switch>
          <Route path='/'  >
          <Main />
          </Route>
          <Route path='/login'>
            <p>Ths is login page</p>
          </Route>
          <Route path='/signIn' >
            <SignIn/>
          </Route>
          </Switch>
         
         
        </div>
      </div>
     
    </div>
  );
}

