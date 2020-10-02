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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .featureImage {
      display: none;
    }
    transition: none;
    margin: 2.5% 2.5%;
    border-radius: 0px;
    border: ${({ theme }) => `2px solid ${theme.border}`};

    width: 95%;
    height: auto;
    padding: 10px 3px;
    font-size: 1rem;
    :hover {
      transform: none;
    }
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.text};
  height: 200px;
  margin: auto 0px auto 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 5px;
    height: auto;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`
export const DateWrapper = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.text};
  img {
    height: 18px;
    width: 18px;
    margin: 0px 5px 0px 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    img {
      margin: 0px 5px 0px 0px;
    }
  }
`
export const TimeToReadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`
export const ExcerptWrapper = styled.div`
  font-size: 1.1rem;
  line-height: 1.3;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`

export const ViewCountWrapper = styled.div`
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0px;
  }
`

export const DisqusWrapper = styled.div`
  width: 80%;
  margin: 10px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
  }
`
