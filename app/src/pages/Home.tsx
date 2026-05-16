import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Tanya Sonker | Home';
  }, []);

  return (
    <div className="container">
      <div className="row addpaddingbtm addpaddingtop">
        <div className="col-sm homelhs">
          <img src="/images/profile.png" alt="Tanya's profile picture" className="profile rounded-circle" />
          <p id="name">tanya sonker</p>
          <p>__________________________</p>
          <p>&lt;code&gt; || {`{music}.play`} || design.fig</p>
          <p id="resume">
            Resume
            <a href="/resume/Tanya_Sonker_Resume_May_2026_Socials.pdf" download target="_blank" rel="noreferrer" aria-label="Download Tanya's Resume">
              <span>
                <i className="bi bi-file-earmark-arrow-down"></i>
              </span>
            </a>
          </p>
        </div>
        <div className="col-sm">
          <img src="/images/header-copy.jpg" alt="View from CCRMA Stanford" className="stanford img-fluid" />
        </div>
      </div>
    </div>
  );

}
