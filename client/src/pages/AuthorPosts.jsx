import React, { useState, useEffect } from 'react'
import PostItem from '../components/PostItem'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import axios from 'axios';

const AuthorPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const {id} = useParams()


  useEffect(() => {
    const fetchPosts = async() => {
      // setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`)
        setPosts(response.data)
      } catch (error) {
        console.log(error);
        
      }

      setIsLoading(false)
    }
    
    fetchPosts();

  }, [id])

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="postAlign">
      {posts.length > 0 ?
      <section id="posts1">
        {posts.map(
          ({_id: id, thumbnail, category, title, description, creator, createdAt }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorID={creator}
              createdAt={createdAt}
            />
          )
        )}
      </section> : <h2 style={{textAlign: "center"}}>No Post Found</h2>}
    </div>
  );
}

export default AuthorPosts