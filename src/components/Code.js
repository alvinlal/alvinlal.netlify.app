import React, { useState } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import darkTheme from "prism-react-renderer/themes/palenight"
import lightTheme from "../themes/vsCodeTheme"

import {
  PreWrapper,
  Line,
  LineNo,
  LineContent,
  CopySpan,
} from "../styled-elements"
import { ThemeContext } from "../providers/provider"

export const Code = props => {
  const { theme } = React.useContext(ThemeContext)
  const [copyState, setCopyState] = useState("Copy")
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  const handleCopy = () => {
    window.navigator.clipboard.writeText(props.children.props.children.trim())
    setCopyState("Copied!")
    setTimeout(() => {
      setCopyState("Copy")
    }, 2000)
  }
  return (
    <Highlight
      {...defaultProps}
      theme={theme === "dark" ? darkTheme : lightTheme}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <PreWrapper className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
              {i === 0 && <CopySpan onClick={handleCopy}>{copyState}</CopySpan>}
            </Line>
          ))}
        </PreWrapper>
      )}
    </Highlight>
  )
}
