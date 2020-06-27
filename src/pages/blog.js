import React, { useState } from "react"
import { Layout, PostPreview, SearchBlog } from "../components"
import {
  AllBlogsWrapper,
  NoResultsWrapper,
  PostCountWrapper,
} from "../styled-elements"
import { usePosts } from "../hooks"

const Blog = () => {
  const posts = usePosts()
  const [searchWord, setSearchWord] = useState("")
  const searchRegex = new RegExp("\\b" + searchWord.toLowerCase() + "\\b")

  var flag = 0
  const handleSearch = e => {
    setSearchWord(e.target.value)
  }
  const showPosts = () => {
    if (!searchWord) {
      return posts.map(post => {
        return <PostPreview key={post.id} info={post} />
      })
    } else if (searchWord) {
      flag = 0
      return posts.map((post, index) => {
        if (searchRegex.test(post.title.toLowerCase())) {
          flag++

          return <PostPreview key={post.id} info={post} />
        }
        if (index + 1 === posts.length && flag === 0) {
          return <NoResultsWrapper>No results found</NoResultsWrapper>
        }
        return null
      })
    }
  }
  return (
    <Layout>
      <AllBlogsWrapper>
        <SearchBlog handleSearch={handleSearch} />
        <PostCountWrapper>
          {!searchWord && `${posts.length} posts`}{" "}
        </PostCountWrapper>
        {showPosts()}
      </AllBlogsWrapper>
    </Layout>
  )
}

export default Blog
// return posts.map(post => {
//   return (
//     searchRegex.test(post.title.toLowerCase()) && (
//       <PostPreview key={post.id} info={post} />
//     )
//   )
// })
