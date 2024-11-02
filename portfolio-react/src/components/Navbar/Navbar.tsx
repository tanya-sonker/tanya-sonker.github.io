import "./Navbar.css";
import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logoLight from "../../assets/images/kuromi-light.png";
import logoDark from "../../assets/images/kuromi-dark.png";

const navItems = ["home", "about", "experience", "contact"];
const navLinks = ["/", "/about", "/experience", "/contact"];

export default function Navbar() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("ThemeContext not found");

  const { isDarkMode, toggleTheme } = themeContext;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className={isDarkMode ? "navbar-drawer-dark" : "navbar-drawer-light"}
    >
      <Box sx={{ flexGrow: 1 }}>
        <NavLink to={"/"}>
          {isDarkMode ? (
            <img
              src={logoDark}
              alt="Logo Dark Mode"
              style={{ width: "60px", height: "60px", cursor: "pointer" }}
            />
          ) : (
            <img
              src={logoLight}
              alt="Logo Light Mode"
              style={{ width: "60px", height: "60px", cursor: "pointer" }}
            />
          )}
        </NavLink>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink
                to={navLinks[index]}
                className={
                  isDarkMode ? "navbar-text-dark" : "navbar-text-light"
                }
              >
                <ListItemText primary={item} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
        <IconButton onClick={toggleTheme} color="primary">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        className={isDarkMode ? "navbar-appbar-dark" : "navbar-appbar-light"}
      >
        <Toolbar>
          <IconButton
            className={isDarkMode ? "navbar-text-dark" : "navbar-text-light"}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink to={"/"}>
              {isDarkMode ? (
                <img
                  src={logoDark}
                  alt="Logo Dark Mode"
                  style={{ width: "60px", height: "60px", cursor: "pointer" }}
                />
              ) : (
                <img
                  src={logoLight}
                  alt="Logo Light Mode"
                  style={{ width: "60px", height: "60px", cursor: "pointer" }}
                />
              )}
            </NavLink>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block", gap: 1 } }}>
            {navItems.map((item, index) => (
              <Button key={item} sx={{ color: "#FFFFFF" }}>
                <NavLink
                  to={navLinks[index]}
                  style={({ isActive }) => ({
                    fontStyle: isActive ? "italic" : "normal",
                  })}
                  className={
                    isDarkMode ? "navbar-text-dark" : "navbar-text-light"
                  }
                >
                  {item}
                </NavLink>
              </Button>
            ))}
            <IconButton
              onClick={toggleTheme}
              color="primary"
              sx={{ width: 16, height: 16, ml: 2 }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
              backgroundColor: isDarkMode ? "#121212" : "#ffffff", // Ensure the background color is set here
              color: isDarkMode ? "#cdbace" : "#5d445f", // Set text color as well
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
