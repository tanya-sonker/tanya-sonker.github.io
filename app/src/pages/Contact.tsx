import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Tanya Sonker | Contact';
  }, []);

  return (
    <div className="container">
      <div className="row addpaddingtop">
        <div className="col-sm contlhs">
          <a href="https://www.youtube.com/watch?v=9iHmRI7ULLA" target="_blank" rel="noreferrer" aria-label="Watch Santa Clara University Digital Humanities Documentary">
            <img
              id="scudoc"
              src="/images/scu-doc.png"
              alt="Santa Clara University Digital Humanities Documentary"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col-sm exprhs">
          <p id="ewo">media</p>
          <p>___________</p>
          <p>
            Represented Santa Clara Laptop Orchestra in Santa Clara University's{' '}
            <a href="https://www.scu.edu/digital-humanities/" target="_blank" rel="noreferrer" aria-label="Read about Santa Clara University's Digital Humanities Initiative">
              Digital Humanities Initiative
            </a>{' '}
            documentary. Watch it{' '}
            <a href="https://www.youtube.com/watch?v=9iHmRI7ULLA" target="_blank" rel="noreferrer" aria-label="Watch Santa Clara University Digital Humanities Documentary">
              here
            </a>.
          </p>
          <p>
            Featured in Santa Clara Laptop Orchestra's "What is SCLOrk?" documentary. Watch it{' '}
            <a href="https://www.youtube.com/watch?v=UorZXvhU6uI" target="_blank" rel="noreferrer" aria-label="Watch Santa Clara Laptop Orchestra Documentary">
              here
            </a>.
          </p>
          <p>
            Equally passionate about tech and arts, I often had to choose between studying engineering and humanities.
            Through the Digitial Humanities Initiative and SCLOrk, SCU showed me otherwise{' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </p>
        </div>
      </div>
      <div className="row addpaddingbtm">
        <div className="col-sm contlhs">
          <a href="https://www.youtube.com/watch?v=UorZXvhU6uI" target="_blank" rel="noreferrer" aria-label="Watch Santa Clara Laptop Orchestra Documentary">
            <img
              id="sclorkdoc"
              src="/images/sclork-doc.png"
              alt="Santa Clara Laptop Orchestra Documentary"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col-sm exprhs">
          <p id="cont">contact</p>
          <p>____________</p>
          <p>
            My socials are linked in the footer, let's connect <i className="bi bi-balloon-heart"></i>
          </p>
          <blockquote className="blockquote">
            <i className="bi bi-blockquote-left"></i>
            <p>If you can't give me poetry, can't you give me poetical science?</p>
            <footer className="blockquote-footer">Ada Lovelace</footer>
          </blockquote>
          <blockquote className="blockquote">
            <i className="bi bi-blockquote-left"></i>
            <p>The way to know life is to love many things.</p>
            <footer className="blockquote-footer">Vincent Van Gogh</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
