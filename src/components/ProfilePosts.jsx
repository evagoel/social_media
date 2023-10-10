import React, { useEffect,useState} from "react"
import { useParams,Link } from "react-router-dom"
import Axios from "axios"
import LoadingDotsIcon from "./LoadingDotsIcon"


function ProfilePosts(props){
  const {username}=useParams()
  const[isLoading,setIsLoading]=useState(true)
  //we have set the initial value of isLoading to be true coz when we will use it in if condition so it will return the value written in it.
  const[posts,setPosts]=useState([])

  useEffect(()=>{
    const ourRequest=Axios.CancelToken.source()

    async function fetchPosts(){
      try{
        const response=await Axios.get(`/profile/${username}/posts`,{cancelToken:ourRequest.token})
        setPosts(response.data)
        //By above line,we are updating the state with new values which we got back from browser. 
        setIsLoading(false)
        //since we have completed our loading and have got data from the browser so thats why we have set it to false now. 
      }catch(e){
        console.log("there was a problem or the request was cancelled")
      }
    }
    fetchPosts()
    return ()=>{
      ourRequest.cancel()
    }
  },[])

  if(isLoading) return <LoadingDotsIcon/>

  return (
    <div className="list-group">
      {posts.map(post=>{
        //since posts will have array of elements and we will access each element using "post" and map it using key defined below.
        const date=new Date(post.createdDate)
        // This line creates a new JavaScript Date object using the value of the createdDate property from the post object.The Date object represents a specific point in time.
        const dateFormatted=`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
        return(
          <Link key={post._id} to={`/post/${post._id}`} className="list-group-item list-group-item-action">
          <img className="avatar-tiny" src={post.author.avatar}/> <strong>{post.title}</strong>{" "}
          <span className="text-muted small">on {dateFormatted}</span>
        </Link>
        )
      })}    
    </div>
  )
}
export default ProfilePosts