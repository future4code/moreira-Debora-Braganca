import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import CardPost from "../../components/CardPost";
import styled from "styled-components"

const ContainerLista = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

const Feed = () => {

    const token = localStorage.getItem('token')
    const headers = {headers: {
        Authorization: token
     }}
    const [posts, loadingPosts, postsError] = useRequestData(`${BASE_URL}/posts`, headers)   

    const listaDePosts = posts.map((post) => {
        return <CardPost key={post.id} nome={post.username} body={post.body} 
        commentCount={post.commentCount} voteSum={post.voteSum}/>
    })

    return <div>
        {loadingPosts && <p>Carregando...</p>}
        {!loadingPosts && postsError && <p>Ocorreu um erro!</p>}
        {!loadingPosts && posts && posts.length === 0 && (<p>Não há posts</p>)}
        {!loadingPosts && posts && posts.length > 0 && <ContainerLista>{listaDePosts}</ContainerLista>}
    </div>
}

export default Feed