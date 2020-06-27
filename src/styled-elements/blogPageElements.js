import styled from "styled-components"

export const AllBlogsWrapper = styled.div`
  height: auto;
  min-height: 100vh;
  /* width: auto; */
  width: auto;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`
export const NoResultsWrapper = styled.h3`
  margin: auto;
  color: ${({ theme }) => theme.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 20px auto;
  }
`
export const PostCountWrapper = styled.h2`
  margin: 10px auto;
  color: ${({ theme }) => theme.headings};
`
