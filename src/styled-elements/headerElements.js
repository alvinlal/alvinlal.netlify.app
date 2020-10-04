import styled from "styled-components"
import { Link } from "gatsby"
export const HeaderWrapper = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: ${({ theme }) => `3px solid ${theme.border}`};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 70px;
    padding: 10px;
  }
`
export const TopNavs = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`
export const SideNavs = styled.nav`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 30px;
    a {
      transition: 0.3s;
      font-size: 25px;
      margin-top: 20px;

      width: auto;
      &:last-of-type {
        margin-left: 0px;
      }
    }
  }
`
export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0px 50px 0px 50px;
  padding-bottom: 1px;
  width: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 30px 5px;
    font-weight: bold;
  }
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};

  font-size: 1.4rem;
  font-weight: medium;
  text-decoration: none;
  padding-bottom: 1px;
  width: auto;
  &.current-page {
    border-bottom: ${({ theme }) => `3px solid ${theme.border}`};
  }

  &:last-of-type {
    margin-left: 15px;
  }
`
export const HamBurgerMenu = styled.a`
  display: none;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    margin-left: auto;
  }
`

export const Bar = styled.span`
  height: 3px;
  width: 100%;
  background-color: ${({ theme }) => theme.text};
  border-radius: 10px;
`
export const SideNav = styled.div`
  height: 100%;
  width: ${({ width }) => width};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.background};
  overflow-x: hidden;
  transition: all 0.3s ease;
  padding-top: 60px;
  border: 0px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
  border-left: ${({ theme, width }) =>
    width === "210px" ? `3px solid ${theme.border}` : "0px"};
`

export const CloseBtn = styled.a`
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 40px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`
