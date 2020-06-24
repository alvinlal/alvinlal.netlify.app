import styled from "styled-components"

export const DarkModeTogglerWrapper = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  /* margin: 0 auto; */
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  position: absolute;
  right: 20px;
  width: 4rem;
  height: 2rem;
  outline: none !important;
  box-shadow: none !important;
  img {
    height: auto;
    width: 1.2rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ theme }) =>
        theme.lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme.lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ sideNav }) => (sideNav ? "flex" : "none")};
    position: absolute;
    left: 30px;
    margin-top: 20px;
  }
`
