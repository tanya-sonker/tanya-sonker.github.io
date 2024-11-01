import "./Footer.css";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const Footer: React.FC = () => (
  <footer className="footer">
    <Divider></Divider>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <p className="date">last updated 10/24</p>
        </Grid>
        <Grid size={8}>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/tanya-sonker/"
              target="_blank"
              aria-label="Follow Tanya on LinkedIn"
              className="text-decoration-none"
            >
              <span>
                <i className="bi bi-linkedin"></i>
              </span>
            </a>

            <a
              href="https://www.github.com/tanya-sonker/"
              target="_blank"
              aria-label="Follow Tanya on GitHub"
              className="text-decoration-none"
            >
              <span>
                <i className="bi bi-github"></i>
              </span>
            </a>

            <a
              href="mailto:tsonker98@gmail.com"
              target="_blank"
              aria-label="Email Tanya"
              className="text-decoration-none"
            >
              <span>
                <i className="bi bi-envelope-at"></i>
              </span>
            </a>

            <a
              href="https://www.instagram.com/tanya.tsx/"
              target="_blank"
              aria-label="Follow Tanya on Instagram"
              className="text-decoration-none"
            >
              <span>
                <i className="bi bi-instagram"></i>
              </span>
            </a>

            <a
              href="https://poeticalscience.substack.com/"
              target="_blank"
              aria-label="Follow Tanya on Substack"
              className="text-decoration-none"
            >
              <span>
                <i className="bi bi-substack"></i>
              </span>
            </a>

            <a
              href="https://medium.com/@tanyasonker/"
              target="_blank"
              aria-label="Follow Tanya on Medium"
              className="text-decoration-none"
            >
              <span>
                <i className="bi bi-medium"></i>
              </span>
            </a>
          </div>
        </Grid>
      </Grid>
    </Box>
  </footer>
);

export default Footer;
