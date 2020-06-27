import styled from "styled-components"

export const SearchBlogWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  border: ${({ theme }) => `2px solid ${theme.border}`};
  height: auto;
  width: 300px;
  margin: 20px auto;
  padding: 10px;

  input {
    border: none;
    height: 20px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    ::placeholder {
      color: ${({ theme }) => theme.headings};
      font-size: 1.1rem;
    }
    :focus {
      outline: none;
    }
  }
  img {
    margin: 0px 10px;
    height: 24px;
    width: 24px;
  }
`
