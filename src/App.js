import './App.css'
import React,{useEffect,createContext,useReducer, useContext} from "react"
import NavBar from "./components/NavBar.js"
import {BrowserRouter,Route,Switch,useHistory,ProtecedRoute} from "react-router-dom"

/* The following line can be included in your src/index.js or App.js file */
import 'materialize-css'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import Profile from './components/screens/Profile'
import CreatePost from "./components/screens/Createpost";
import BookPost from "./components/screens/Bookpost";
import {initialState, reducer} from "./reducers/userReducer"
import AdminPosts from './components/screens/AdminPosts'
import NewProfile from './components/screens/NewProfile'
import Book from './components/screens/Book'
import NavbarPage from './components/screens/Nav'
import AdminLogin from "./components/screens/AdminLogin";
import Notifications from './components/screens/Notifications'
import CreateNote from './components/screens/CreateNote'
import Page404 from './components/screens/404page'
export const UserContext = createContext()

const Routing=()=>{
  const history = useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem("user"))
    const admin =JSON.parse(localStorage.getItem("admin"))
    if(admin){
      dispatch({type:"USER",payload:admin})
      }
    else if(user){
      dispatch({type:"USER",payload:user})
    }
    else{
      if(user || admin){
        history.push('/')
      }
      history.push('/signin')

    }
    console.log(state)
  },[])
  return(
    <Switch>
    <Route path="/" exact>
    <Home/>
    </Route>
    {/* <Route path="/profile">
    </Route> */}
    <Route path="/newprofile">
      <NewProfile/>
      <Switch>
      <Route path="/newprofile/collections">
      <Profile/>
    </Route>
    <Route path="/newprofile/notifications">
      <Notifications/>
    </Route>
    <Route path="/newprofile/messages">
    </Route>
      </Switch>
    </Route>
    {/* <Route path="/newprofile/collections">
      <Home/>
    </Route>
    <Route path="/newprofile/books">
    </Route>
    <Route path="/newprofile/messages">
    </Route> */}
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/adminsignin">
      <AdminLogin/>
    </Route>
    <Route path="/signin">
      <Login/>
    </Route>
    <Route path="/createpost">
      <CreatePost/>
    </Route>
    <Route path="/book4+5dsarjnssD3Gg5fhsF3cdgfd6gFDvsgFvb8jjyrgfd/bookpost">
      <BookPost/>
    </Route>
    <Route path="/admin+ea5@fadfdtgjidw42jazxgtvcr6igbmw3xe5zpc52e4tg32/adminposts">
      <AdminPosts/>
    </Route>
    <Route path="/note4+dtrhv3+5GfghjuP@^+4fdgdhvgr5+en8gksFvbHmhiuHK/createnote">
      <CreateNote/>
    </Route>
    <Route>
      <Page404/>
      </Route>
  </Switch>
  )
}
function App() {
   const [state,dispatch] =useReducer(reducer,initialState)
   
  return (
    <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
        <NavBar/>
        <Routing/>
        </BrowserRouter>
    </UserContext.Provider>
      );
}

export default App;
