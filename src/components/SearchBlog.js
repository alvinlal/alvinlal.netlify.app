import React from "react"
import { SearchBlogWrapper } from "../styled-elements"
import { useStaticQuery, graphql } from "gatsby"

export const SearchBlog = ({ handleSearch }) => {
  const data = useStaticQuery(graphql`
    {
      searchLight: file(relativePath: { eq: "search-light.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <SearchBlogWrapper>
      <img src={data.searchLight.publicURL} alt="search icon" />
      <input type="text" placeholder="Search" onChange={handleSearch} />
    </SearchBlogWrapper>
  )
}
