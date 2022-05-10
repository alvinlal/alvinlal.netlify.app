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
  color: ${({ theme }) => theme.text};
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: flex-start;
  margin-top: 50px;
  h1 {
    color: ${({ theme }) => theme.headings};
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 70px;
  }
  span {
    color: ${({ theme }) => theme.headings};
  }
  p {
    font-size: 42px;
    line-height: 60px;
  }
  a {
    border: ${({ theme }) => `2px solid ${theme.border}`};
    color: ${({ theme }) => (theme.text === "#1D1A1A" ? "#0077AC" : "white")};
    background-color: ${({ theme }) => theme.background};
    padding: 10px;
    text-decoration: none;
    margin-top: 50px;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.headings};
    }
    width: 275px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    :focus {
      outline: none;
    }
    :hover {
      transform: translateX(10px);
      box-shadow: ${({ theme }) => theme.hoverShadow};
    }
    transition: all 0.3s linear;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 97%;
    margin-top: 20px;
    height: 400px;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* word-break: break-all; */
    h1 {
      color: ${({ theme }) => theme.headings};
      margin-bottom: 30px;
      font-weight: bold;
      font-size: 50px;
    }
    p {
      font-size: 23px;
      line-height: 36px;
    }
    button {
      font-size: 1.2rem;
      width: 250px;
      height: 65px;
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

export const AboutWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 75%;
  }
`

export const HeroBannerTwoWrapper = styled.div`
  min-height: 100vh;
  margin: 20px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${({ theme }) => theme.headings};
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 62px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 80vh;
    margin: 40px 0px;
  }
`
export const SkillsWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 460px;
  margin: 0px auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* Hide scrollbar for Chrome, Safari and Opera */
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-right: 0px;
  }
`

export const SkillWrapper = styled.div`
  height: 200px;
  width: 300px;
  border: ${({ theme }) => `2px solid ${theme.border}`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 40px 20px 0px;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease-in-out;
  img {
    width: 150px;
    height: 150px;
  }
  .cpp {
    width: 150px;
    height: 169px;
  }
  .docker {
    width: 180px;
    height: 130px;
  }
  .react {
    width: 200px;
    height: 142px;
  }
  h1 {
    display: none;
    color: ${({ theme }) => theme.headings};
  }
  p {
    display: none;
    color: ${({ theme }) => theme.text};
  }
  a {
    display: none;
  }
  :hover {
    transform: scale(1.2, 1.1);
    flex-direction: column;
    z-index: 2;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    img {
      display: none;
    }
    h1 {
      display: block;
      font-size: 32px;
      margin-bottom: 10px;
      text-align: left;
    }
    p {
      display: block;
      font-size: 15px;
      font-weight: bold;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: ${({ theme }) => theme.headings};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 0px;
  }
`

export const DownArrow = styled.div`
  box-sizing: border-box;
  height: 3vw;
  width: 3vw;
  border-style: solid;
  border-color: ${({ theme }) => `${theme.border}`};
  border-width: 0px 8px 8px 0px;
  transform: rotate(45deg);
  margin-top: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 50px;
    width: 50px;
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
