import { useState, useEffect } from 'react';

export default function About() {
  const [isGradPic, setIsGradPic] = useState(true);

  useEffect(() => {
    document.title = 'Tanya Sonker | About';
  }, []);

  return (
    <div className="container">
      <div className="row addpaddingbtm addpaddingtop">
        <div className="col-sm homelhs">
          <img
            id="myImg"
            src={isGradPic ? '/images/grad.png' : '/images/blu.png'}
            alt="Tanya's graduation picture"
            className="profile rounded-circle"
            onClick={() => setIsGradPic((current) => !current)}
            style={{ cursor: 'pointer' }}
          />
          <p id="name">tanya sonker</p>
          <p>__________________________</p>
          <p id="pronouns">she/her || [taa-nya sown-curr]</p>
        </div>
        <div className="col-sm aboutrhs">
          <p id="hello">hello!</p>
          <p>__________</p>
          <p>
            My name is Tanya and I'm passionate about bridging the gap between design and engineering.
            I love to code, read, travel, swim, and hang with my cat.
          </p>
          <p>
            I lead frontend in a design engineering capacity for a medium-sized Australian company -- a client
            of <a href="https://dbiz.ai/" target="_blank" rel="noreferrer">Dbiz</a> that specializes in asset remarketing.
          </p>
          <p>All things web excite me. I'm based in Mumbai, India.</p>
          <p>
            Before this, I lived in the U.S. for 7 years where I worked for about 3 years after graduating with a
            B.S. in CS and Math from Santa Clara University.
          </p>
          <ul>
            <p>Things I'm doing to upskill:</p>
            <li>
              Front-End Developer Professional Certificate @{' '}
              <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer/" target="_blank" rel="noreferrer">
                Coursera
              </a>{' '}
              which is a series of courses, focusing on React, taught by Meta
            </li>
            <li>
              Animations on the web{' '}
              <a href="https://animations.dev/" target="_blank" rel="noreferrer">
                course
              </a>{' '}
              taught by <a href="https://emilkowal.ski/" target="_blank" rel="noreferrer">Emil Kowalski</a> who is a Design Engineer @ Linear
            </li>
            <li>
              Design Systems 101{' '}
              <a href="https://designsystem.university/courses/design-systems-101" target="_blank" rel="noreferrer">
                course
              </a>{' '}
              taught by SuperFriendly's founder Dan Mall
            </li>
          </ul>
          <ul>
            <p>Previously I've worked as a:</p>
            <li>
              SDE @ Swedish telecom company <a href="https://www.ericsson.com/en" target="_blank" rel="noreferrer">
                Ericsson
              </a>
            </li>
            <li>
              SWE intern @ a container security startup acquired by{' '}
              <a href="https://blogs.vmware.com/networkvirtualization/2021/03/vmware-announces-mesh7.html/" target="_blank" rel="noreferrer">
                VMware
              </a>
            </li>
            <li>
              CS TA @ <a href="https://www.scu.edu/" target="_blank" rel="noreferrer">Santa Clara University</a>
            </li>
            <li>
              TA & SDE intern @{' '}
              <a href="https://www.scu.edu/cas/music/ensembles/sclork/" target="_blank" rel="noreferrer">
                Santa Clara Laptop Orchestra
              </a>
            </li>
          </ul>
          <p>P.S. Click on my pic to see Blu ♥</p>
        </div>
      </div>
    </div>
  );
}
