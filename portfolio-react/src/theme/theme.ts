import { createTheme, ThemeOptions } from "@mui/material/styles";

export const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#5d445f" },
    background: { default: "#ffffff" },
  },
});

export const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#CDBACE" },
    background: { default: "#121212" },
  },
});
