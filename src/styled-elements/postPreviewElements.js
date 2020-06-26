import styled from "styled-components"

export const PostPreviewWrapper = styled.div`
  display: flex;
  height: auto;
  width: 800px;
  border: ${({ theme }) => `3px solid ${theme.border}`};
  border-radius: 15px;
  padding: 32px 32px;
  align-items: center;
  justify-content: flex-start;
  margin: 20px auto;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s linear;
  cursor: pointer;
  :hover {
    transform: translateX(10px);
    box-shadow: ${({ theme }) => theme.hoverShadow};
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.text};
  height: 200px;
  margin: auto 0px auto 20px;
`
export const FeatureImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  margin: auto 0px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 15px;
  }
`
export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.headings};
  font-weight: bold;
  font-size: 2rem;
  justify-self: flex-start;
`
export const DateWrapper = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 18px;
    width: 18px;
    margin: 0px 5px 0px 10px;
  }
`
export const ExcerptWrapper = styled.div`
  font-size: 1.1rem;
  line-height: 1.3;
`
