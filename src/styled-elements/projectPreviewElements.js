import styled from "styled-components"

export const ProjectPreviewWrapper = styled.div`
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
  p {
    margin-top: 10px;
  }
`

export const ProjectImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  margin: auto 0px;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: 10% 50%;
    border-radius: 15px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`
