export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-8 date">last updated 10/24</div>
        <div className="col-4 socials">
          <a href="https://www.linkedin.com/in/tanya-sonker/" target="_blank" rel="noreferrer" aria-label="Follow Tanya on LinkedIn" className="text-decoration-none">
            <span>
              <i className="bi bi-linkedin"></i>
            </span>
          </a>
          <a href="https://www.github.com/tanya-sonker/" target="_blank" rel="noreferrer" aria-label="Follow Tanya on GitHub" className="text-decoration-none">
            <span>
              <i className="bi bi-github"></i>
            </span>
          </a>
          <a href="https://www.instagram.com/tanya.tsx/" target="_blank" rel="noreferrer" aria-label="Follow Tanya on Instagram" className="text-decoration-none">
            <span>
              <i className="bi bi-instagram"></i>
            </span>
          </a>
          <a href="https://poeticalscience.substack.com/" target="_blank" rel="noreferrer" aria-label="Follow Tanya on Substack" className="text-decoration-none">
            <span>
              <i className="bi bi-substack"></i>
            </span>
          </a>
          <a href="https://medium.com/@tanyasonker/" target="_blank" rel="noreferrer" aria-label="Follow Tanya on Medium" className="text-decoration-none">
            <span>
              <i className="bi bi-medium"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
