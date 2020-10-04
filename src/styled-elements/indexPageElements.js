import styled from "styled-components"
import { Link } from "gatsby"
export const IndexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FullStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 700px;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    margin: 0px auto;
  }
  span {
    color: ${({ theme }) => theme.headings};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: 2rem;
    }
    width: 100%;
  }
`
export const ReactWrapper = styled.div`
  img {
    height: 195px;
    width: 250px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    img {
      height: 135px;
      width: 190px;
    }
  }
`
export const NodeWrapper = styled.div`
  img {
    height: 165px;
    width: 185px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    img {
      height: 105px;
      width: 120px;
    }
  }
`
export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 220px;
  margin-top: 20px;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0px;
  }
`
export const TopPostWrapper = styled.div`
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;

  h1 {
    color: ${({ theme }) => theme.headings};
    margin-bottom: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    min-height: 200vh;
  }
`
export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
export const BlogLink = styled(Link)`
  color: ${({ theme }) => theme.headings};
  font-size: 1.4rem;
  font-weight: medium;
  text-decoration: none;
  margin-top: 30px;
`
export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: ${({ theme }) => `2px solid ${theme.border}`};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 70%;
  height: 300px;
  margin-top: 100px;
  margin-bottom: 300px;
  h1 {
    color: ${({ theme }) => (theme.text === "#1D1A1A" ? "#0077AC" : "white")};
    margin-top: 80px;
    margin-bottom: 30px;
  }

  p {
    margin-top: 20px;
    margin-left: 20px;

    color: ${({ theme }) => (theme.text === "#1D1A1A" ? "#0077AC" : "white")};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    justify-content: center;
    p {
      margin-top: 20px;
      margin-left: 5px;
      margin-bottom: 50px;
    }
    h1 {
      font-size: 1.4rem;
    }
  }
`
export const MailInputWrapper = styled.div`
  /* width: 70%; */
  display: flex;
  input {
    border: ${({ theme }) => `2px solid ${theme.border}`};
    color: ${({ theme }) => (theme.text === "#1D1A1A" ? "#0077AC" : "white")};
    background-color: ${({ theme }) => theme.background};
    height: 30px;
    width: 300px;
    padding: 20px;
    font-size: 1rem;
    margin-right: 30px;

    ::placeholder {
      color: ${({ theme }) => (theme.text === "#1D1A1A" ? "#0077AC" : "white")};
      font-size: 1rem;
    }
    :focus {
      outline: none;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
  button {
    border: ${({ theme }) => `2px solid ${theme.border}`};
    color: ${({ theme }) => (theme.text === "#1D1A1A" ? "#0077AC" : "white")};
    background-color: ${({ theme }) => theme.background};
    padding: 10px;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.headings};
    }
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    :focus {
      outline: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
