import { useState, useEffect } from "react"

const useDarkMode = () => {
  const [theme, setTheme] = useState("dark")
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }
  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("dark")
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}

export default useDarkMode
