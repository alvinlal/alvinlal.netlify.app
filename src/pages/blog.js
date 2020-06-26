import React from "react"
import { Layout, PostPreview } from "../components"
import { usePosts } from "../hooks"
import styled from "styled-components"

const AllBlogsWrapper = styled.div`
  height: auto;
  /* width: auto; */
  width: 900px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`

const Blog = () => {
  const posts = usePosts()
  console.log(posts)
  return (
    <Layout>
      <AllBlogsWrapper>
        {posts.map(post => (
          <PostPreview info={post} key={post.id} />
        ))}
      </AllBlogsWrapper>
    </Layout>
  )
}

export default Blog
