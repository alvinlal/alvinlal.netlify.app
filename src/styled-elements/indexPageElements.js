import styled from "styled-components"
import { Link } from "gatsby"
export const IndexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeroBannerOneWrapper = styled.div`
  display: flex;
  /* width: 80%; */
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  margin: 0px 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: calc(100vh - 90px);
    margin: 0px;
    flex-direction: column;
  }
`

export const WhoamiWrapper = styled.div`
  h1 {
    color: ${({ theme }) => theme.headings};
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 70px;
  }
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: flex-start;
  span {
    color: ${({ theme }) => theme.headings};
  }
  margin-top: 50px;
  /* margin-right: 70px; */
  p {
    line-height: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 97%;
    margin-top: 20px;
    /* text-align: center; */
    height: 400px;
    word-break: break-all;
    h1 {
      color: ${({ theme }) => theme.headings};
      margin-bottom: 30px;
      font-weight: bold;
      font-size: 50px;
    }
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`
export const TechStackWrapper = styled.div`
  width: auto;
  margin-top: 30px;

  h2 {
    color: ${({ theme }) => theme.headings};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const TechStackIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;
  height: 150px;
  margin-top: 20px;
  width: 400px;
  img {
    width: 50px;
    height: 50px;
    margin: 0px 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    img {
      width: 40px;
      height: 40px;
      margin: 0px 10px;
    }
  }
`

export const DeveloperWrapper = styled.div`
  width: 50%;
  img {
    height: 500px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
    height: 0px;
    width: 0px;
  }
`

export const HeroBannerTwoWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 20px 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 80vh;
    width: 95%;
    flex-direction: column;
    justify-content: flex-start;
    margin: 20px 0px;
  }
`
export const WorldWideWebImageWrapper = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 100px;
  img {
    height: 400px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
    height: 0px;
    width: 0px;
  }
`
export const EternalWrapper = styled.div`
  h1 {
    color: ${({ theme }) => theme.headings};
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 70px;
  }
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;
  span {
    color: ${({ theme }) => theme.headings};
  }
  margin-top: 50px;
  /* margin-right: 70px; */
  p {
    line-height: 2rem;
  }
  button {
    border: ${({ theme }) => `2px solid ${theme.border}`};
    color: ${({ theme }) => (theme.text === "#1D1A1A" ? "#0077AC" : "white")};
    background-color: ${({ theme }) => theme.background};
    padding: 10px;
    margin-top: 50px;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.headings};
    }
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    :focus {
      outline: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    margin: 0px;
    h1 {
      color: ${({ theme }) => theme.headings};
      margin-bottom: 30px;
      font-weight: bold;
      font-size: 50px;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`

export const TopPostWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-top: 10px;
  h1 {
    color: ${({ theme }) => theme.headings};
    margin-bottom: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    margin-top: 0px;
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
  margin-bottom: 200px;
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
