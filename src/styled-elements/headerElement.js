import styled from "styled-components"

export const HeaderWrapper = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => `3px solid ${theme.border}`};
`
