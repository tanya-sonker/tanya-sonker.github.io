import "./Footer.css";
import socialLinks from "../../utils/socialLinks";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export default function Footer() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("ThemeContext not found");

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <footer className="footer">
      <Divider />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, sm: 4 }}>
            <p className="date">last updated 10/24</p>
          </Grid>
          <Grid size={{ xs: 12, sm: 8 }} container justifyContent="flex-end">
            <Box className="socials" sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  aria-label={`Contact Tanya via ${link.label}`}
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className={`${link.icon} ${isDarkMode ? "social-icon-dark" : "social-icon-light"}`}></i>
                </a>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
