import React,{useEffect,useRef,useState} from "react"
import M from 'materialize-css'
const Home = () =>{
    
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')
    const material = useRef(null)
    useEffect(()=>{
      M.Materialbox.init(material.current)
   },[])
    useEffect(()=>{
        fetch('/allposts',{
        }).then(res=>res.json())
        .then(result=>{
           //  console.log(result)
            setData(result.Posts)
        })
     },[])
     const filterData=data.filter(data2=>{
         return data2.title.toLowerCase().includes(search.toLowerCase())
     })
    return(
        <div>
        <div className="search">
        <input type="search" placeholder="Search.." onChange={(e)=>setSearch(e.target.value)}></input>
        </div>
        <div className="home">
            {
                filterData.map(item=>{
                    return(
                        <div className="card cards" key={item._id}>
                        <div className="card-image">
                            <img className="materialboxed" src={item.photo} style={{height:"70%",width:"60%",margin:"auto"}} ref={material} alt="none"></img>
                        </div>
                        <div className="card-content">
                            <h6><b>{item.title}</b></h6>
                            <p>{item.body}</p>
                        </div>
                        </div>

                )
            })
            } 
        </div>
        </div>
        )
}
export default Home;