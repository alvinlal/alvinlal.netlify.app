import React, { useState } from "react"

import {
  HeaderWrapper,
  TopNavs,
  SideNavs,
  TitleLink,
  NavLink,
  HamBurgerMenu,
  Bar,
  SideNav,
  CloseBtn,
} from "../styled-elements"

import { DarkModeToggler } from "./DarkModeToggler"

export const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  return (
    <HeaderWrapper>
      <TitleLink to="/">Alvin Lal</TitleLink>
      <TopNavs>
        <NavLink to="/blog" activeClassName="current-page">
          Blog
        </NavLink>
        <NavLink to="/projects" activeClassName="current-page">
          Projects
        </NavLink>
      </TopNavs>
      <HamBurgerMenu onClick={() => setShowSideNav(!showSideNav)}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </HamBurgerMenu>
      <DarkModeToggler />
      <SideNav width={showSideNav ? "210px" : "0px"}>
        <CloseBtn href="#" onClick={() => setShowSideNav(!showSideNav)}>
          &times;
        </CloseBtn>
        <SideNavs>
          <NavLink to="/blog" activeClassName="current-page">
            Blog
          </NavLink>
          <NavLink to="/projects" activeClassName="current-page">
            Projects
          </NavLink>
        </SideNavs>
        <DarkModeToggler sideNav={true} />
      </SideNav>
    </HeaderWrapper>
  )
}
