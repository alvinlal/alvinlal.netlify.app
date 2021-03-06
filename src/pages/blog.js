import React, { useState } from "react"
import { Layout, PostPreview, SearchBlog, Seo } from "../components"
import {
  AllBlogsWrapper,
  NoResultsWrapper,
  PostCountWrapper,
} from "../styled-elements"
import Fade from "react-reveal/Fade"
import { usePosts } from "../hooks"
import config from "react-reveal/globals"

config({ ssrFadeout: true })
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
        return (
          <Fade key={post.id} bottom={true}>
            <PostPreview key={post.id} info={post} />
          </Fade>
        )
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
      <Seo title={"All blogs"} />
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
