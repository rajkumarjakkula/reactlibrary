import React,{useEffect,useRef,useContext, useState} from "react"
import {Link,useHistory} from 'react-router-dom'

import {UserContext} from '../App'
import M from 'materialize-css'
const NavBar = () =>{
    const {state,dispatch} =useContext(UserContext)
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar)
    const logoutmodel = useRef(null)
    const side = useRef(null)
  
    const history =useHistory()
    useEffect(()=>{
      M.Modal.init(logoutmodel.current)
   },[])
   useEffect(()=>{
    M.Sidenav.init(side.current)
 },[])
   const logout=()=>
   {
     localStorage.clear()
    dispatch({type:"CLEAR"})
    history.push('/signin')
  }
    const renderList=()=>{
      //  console.log(state)
    //    console.log(state,dispatch)
        if(state){
          const home="/"
          const profile="/newprofile/collections"
          const createnote="/note4+dtrhv3+5GfghjuP@^+4fdgdhvgr5+en8gksFvbHmhiuHK/createnote"
          const bookpost="/book4+5dsarjnssD3Gg5fhsF3cdgfd6gFDvsgFvb8jjyrgfd/bookpost"
          const adminpost="/admin+ea5@fadfdtgjidw42jazxgtvcr6igbmw3xe5zpc52e4tg32/adminposts"
          if(state.name){
            return [
              <li> <Link to={home} className="sidenav-close">Home</Link></li>,
              <li key="2"><Link to={profile} className="sidenav-close">Profile</Link></li>,
              <li key="3"><Link to="/createpost" className="sidenav-close">Create Post</Link></li>, 
              //<li key="10"><Link to="/newprofile">NewProfile</Link></li>, 
              //<li key="20"><Link to="/bookpost">Book Post</Link></li>,
              //<li key="4"><Link to="/adminposts">Posts</Link></li>,   
              //<li key="8"><Link to="/newprofile/collections">Postsfhsggj</Link></li>,   
              <li key="5">
              <button data-target="modal1" className="btn #c62828 red darken-3 modal-trigger sidenav-close">Logout
             </button>
             </li>
             ]
              }
              else{
                return [
               //   <li key="2"><Link to="/profile">Profile</Link></li>,
               <li> <Link to={home} className="sidenav-close">Home</Link></li>,
                  <li key="3"><Link to="/createpost" className="sidenav-close">Create Post</Link></li>,
                  <li key="10"><Link to={createnote} className="sidenav-close">CreateNotification</Link></li>,
                 <li key="20"><Link to={bookpost} className="sidenav-close">Book Post</Link></li>,
                <li key="4"><Link to={adminpost} className="sidenav-close">Posts</Link></li>,
                //<li key="8"><Link to="/newprofile/collections">Postsfhsggj</Link></li>,   
                <li key="5">
                <button data-target="modal1" className="btn #c62828 red darken-3 modal-trigger sidenav-close">Logout
               </button>
               </li>
                 ]
              }
        }
        else{
          return [
           <li  key="6"><Link to="/signin" className="sidenav-close">Signin</Link></li>,
           <li  key="7"><Link to="/signup" className="sidenav-close">Signup</Link></li>,
           <li key="12"><Link to="/adminsignin" className="sidenav-close">Admin Login</Link></li>
           ]
        }
    }
    return(
          <nav>
          
            <div className="nav-wrapper blue">
              <Link to="/" className="brand-logo" style={{margin:"0px 20px"}}>JNTSCMS</Link>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                  {renderList()}         
              </ul>
              <ul className="sidenav" id="mobile-demo" ref={side} >
             {renderList()}
            </ul>
            </div>
            <div id="modal1" className="modal" ref={logoutmodel} style={{color:"black",alignItems:"center"}}>
                      <div className="modal-content">
                      <h4>Are You Sure</h4>
                      <p>You are trying to logout</p>
                      </div>
                      <div className="modal-footer">
                      <a  className="modal-close waves-effect waves-green btn-flat" onClick={()=>logout()}>Yes</a>
                      <a  className="modal-close waves-effect waves-green btn-flat">No</a>

                      </div>
                  </div>
        </nav>
    )
}
export default NavBar;