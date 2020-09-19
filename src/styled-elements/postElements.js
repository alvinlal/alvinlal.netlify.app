import styled from "styled-components"

export const PostWrapper = styled.main`
  width: 80%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
  }
`

export const PostHeaderWrapper = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  h1 {
    color: ${({ theme }) => theme.headings};
    font-size: 3rem;
  }
  border-bottom: ${({ theme }) => `2px solid ${theme.border}`};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: 2.5rem;
    }
  }
`
export const PostbodyWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  width: 80%;
  margin: auto;
  border-bottom: ${({ theme }) => `2px solid ${theme.border}`};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.headings};
    margin-top: 2rem;
  }
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin-top: 2rem;
    line-height: 1.8rem;
  }
  ol,
  ul {
    font-size: 1.2rem;
    margin: 2rem 0rem 0rem 2rem;
    line-height: 2rem;
  }
  ul {
    list-style: none;
  }
  ul li::before {
    content: "\\2022";
    color: ${({ theme }) => theme.border};
    width: 10px;
    height: 10px;
    font-weight: bold;
    margin-right: 5px;
  }
  blockquote {
    border-left: ${({ theme }) => `10px solid ${theme.border}`};
    padding-left: 10px;
    font-style: italic;
    background-color: ${({ theme }) =>
      theme.lightTheme ? "#f3f3f3" : theme.background};
  }
  code {
    font-family: ${({ theme }) => theme.fonts.code};
    background-color: ${({ theme }) => theme.codeBackground};
    color: ${({ theme }) => theme.text};
    font-size: inherit;
    border-radius: 5px;
    padding: 0px 5px;
  }
  pre {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.headings};
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.headings};
  }
  table,
  th,
  td {
    border: ${({ theme }) => `2px solid ${theme.border}`};
    text-align: center;
    padding: 10px;
    border-collapse: collapse;
    font-size: 1.5rem;
  }
  th {
    color: ${({ theme }) => theme.headings};
  }
  table {
    margin: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    pre {
      font-size: 1rem;
    }
    td,
    th {
      font-size: 1rem;
    }
  }
`
export const TableWrapper = styled.div`
  margin: 2rem;
  overflow-x: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 10px 5px;
  }
`

export const PreWrapper = styled.pre`
  background-color: ${({ theme }) =>
    theme.darkTheme ? `${theme.background} !important` : "#282C34 !important"};
  line-height: 1.6rem !important;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 500px;
  padding: 20px;
  border: ${({ theme }) =>
    theme.darkTheme ? `2px solid ${theme.border}` : "none"};
  border-radius: 10px;
  margin: 2rem auto;
  text-align: left;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`
export const Line = styled.div`
  display: table-row;
`

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

export const LineContent = styled.span`
  display: table-cell;
`
export const CopySpan = styled.span`
  cursor: pointer;
  float: right;
  :hover {
    color: ${({ theme }) => theme.headings};
  }
`
export const EditOnGithubWrapper = styled.a`
  color: ${({ theme }) => theme.headings};
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  img {
    height: 32px;
    width: 32px;
    margin-right: 5px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`

export const PageNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  font-size: 1.2rem;
  justify-content: space-between;
  width: 80%;
  margin: 2rem auto;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    :hover {
      color: ${({ theme }) => theme.headings};
    }
    border: ${({ theme }) => `2px solid ${theme.border}`};
    padding: 10px;
    margin: 20px auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    font-size: 1rem;
  }
`
