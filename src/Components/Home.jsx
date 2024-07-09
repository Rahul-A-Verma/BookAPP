import react ,{useState, useEffect}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(title)=>{
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+title+'&key=AIzaSyCKIGwOd7L878n1qhynfLqEhlJ78GftVCY'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        
    }
    useEffect(()=>{
        searchBook('Love')
    },[])
    return(
        <>
        <div className="p-4 flex justify-center items-center flex-col">
            <h1 className='text-5xl'>BookApp</h1>
        <div id="search-bar" className=" rounded-md">
        <div className="flex items-center justify-center m-6">
            <input type="text" placeholder="Search"
                className="w-fit rounded-md px-4 py-2 border border-black max-sm:w-64"
                value={search} onChange={e=>setSearch(e.target.value)}/>
            <button
            className="bg-red-950 text-white rounded-md px-4 py-2 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            onClick={()=>searchBook(search)}>
            Search
        </button>
        </div>
        </div>
        </div>

{bookData?.length>0?(
    <div className="flex gap-8 flex-wrap justify-center py-10">
              {
                    <Card book={bookData}/>
              }  
            </div>
):(
    <div className="w-full mt-12 flex justify-center items-center">
    <h2>No Book Found</h2>
  </div>
)}
            
        </>
    )
}
export default Main;