export const Theme = {
  fonts: {
    main: "roboto,sans-serif",
    code: "fira code,monospace",
  },
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
  breakpoints: {
    mobile: "750px",
  },
  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
  animations: {
    buttons: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  shadows: {
    shadow1: "0px 5px 20px rgba(30,30,31,0.05)",
  },
}
export const darkTheme = {
  text: "white",
  headings: "#7A8BE6",
  background: "#01142A",
  border: "#7A8BE6",
  gradient: "linear-gradient(#091236, #1E215D)",
  darkTheme: true, //for the dark mode toggler
}

export const lightTheme = {
  text: "#1D1A1A",
  headings: "#022A58",
  background: "white",
  border: "#022A58",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  lightTheme: true, //for the dark mode toggler
}
