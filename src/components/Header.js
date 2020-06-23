import React from "react"
import styled from "styled-components"
import { HeaderWrapper } from "../styled-elements"
import { Link } from "gatsby"
import { DarkModeToggler } from "./DarkModeToggler"

const NavLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSize || "1.4rem"};
  /*to use fontSize passed by props*/
  font-weight: ${props => (props.title ? 500 : "medium")};
  text-decoration: none;
  margin: ${props => (props.title ? "0px 50px 0px 50px" : "")};
  padding-bottom: 1px;

  &.current-page {
    border-bottom: ${({ theme }) => `3px solid ${theme.border}`};
  }

  &:last-of-type {
    margin-left: 15px;
  }
`
export const Header = () => {
  return (
    <HeaderWrapper>
      <NavLink to="/" fontSize="2rem" title="true">
        Alvin lal
      </NavLink>
      <nav>
        <NavLink to="/blog" activeClassName="current-page">
          Blog
        </NavLink>
        <NavLink to="/projects" activeClassName="current-page">
          Projects
        </NavLink>
      </nav>
      <DarkModeToggler />
    </HeaderWrapper>
  )
}
