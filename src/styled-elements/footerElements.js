import styled from "styled-components"

export const FooterWrapper = styled.footer`
  height: 80px;
  border-top: ${({ theme }) => `3px solid ${theme.border}`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 30px; */
`

export const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  width: auto;
  img {
    height: 32px;
    width: 32px;
    margin: 0px 10px;
    transition: all 0.5s ease;
  }
  img:hover {
    transform: translateY(-5px);
  }
`
