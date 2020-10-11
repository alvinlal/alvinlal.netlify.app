import styled from "styled-components"

export const PostPreviewWrapperMobile = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s linear;
  cursor: pointer;
  :hover {
    transform: translateX(10px);
    box-shadow: ${({ theme }) => theme.hoverShadow};
  }
  margin: 20px 20px;
  border: ${({ theme }) => `2px solid ${theme.border}`};
  width: 400px;
  height: auto;
  padding: 10px 3px;
  font-size: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: auto;
    margin-top: 10;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    :hover {
      transform: none;
    }
  }
`

export const InfoWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  margin: 5px;
  height: auto;
`
export const TitleWrapperMobile = styled.div`
  color: ${({ theme }) => theme.headings};
  font-weight: bold;
  justify-self: flex-start;
  font-size: 1.3rem;
`
export const DateWrapperMobile = styled.div`
  margin: 10px 0px;
  display: flex;
  color: ${({ theme }) => theme.text};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  img {
    height: 18px;
    width: 18px;
    margin: 0px 5px 0px 0px;
  }
`
export const TimeToReadWrapperMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`

export const ExcerptWrapperMobile = styled.div`
  font-size: 1rem;
  line-height: 1.3;
`
