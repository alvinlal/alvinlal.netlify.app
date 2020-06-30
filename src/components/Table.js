import React from "react"
import { TableWrapper } from "../styled-elements"

export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}
