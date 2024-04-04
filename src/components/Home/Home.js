import React, {useState, useEffect} from "react";
import Post from "../Post/Post";
import { Container } from "@mui/material";
import styled from "@mui/material/styles/styled";
import PostForm from "../Post/PostForm";

const container = styled("div")({

  });


function Home() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [postList, setPostList] = useState([]);

    const refreshPosts = () => {
        fetch("/posts")
        .then(res=>res.json())
        .then(
            (result) => {
                setIsLoading(true);
                setPostList(result);
            },
            (error) => {
                setIsLoading(true);
                setError(error);
            }
        )
    }


    useEffect(() => {
        refreshPosts()
    }, [postList])

    if (error) {
        return <div>Error !!!</div>;
    }else if (!isLoading) {
        return <div>Loading...</div>
    } else {
        return(
            <Container component={container}>
                <PostForm userId = {1} userName = {"serdarcolak"} refreshPosts = {refreshPosts}/>
                {postList.map(post => (
                    <Post postId = {post.id} userId = {post.userId} userName = {post.userName} 
                    title={post.title} text={post.text}></Post>
                ))}
            </Container>
        );
    }

}

export default Home;