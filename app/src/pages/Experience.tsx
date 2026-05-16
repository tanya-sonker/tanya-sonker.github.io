import { useEffect } from 'react';

export default function Experience() {
  useEffect(() => {
    document.title = 'Tanya Sonker | Experience';
  }, []);

  return (
    <div className="container">
      <div className="row addpaddingtop">
        <div className="col-sm explhs">
          <img id="dbizjob" src="/images/dbiz.png" alt="Dbiz AI Solutions Pvt Ltd" className="img-fluid" />
        </div>
        <div className="col-sm exprhs">
          <p id="dbiz">dbiz ai solutions</p>
          <p>________________</p>
          <p id="posloc">
            software engineer | mumbai, india
            <span id="timeline">mar 2023 - present</span>
          </p>
          <p>
            Dbiz AI Solutions is an Australian consultancy firm. For their client, I lead frontend for the Frameworks team,
            working closely with UX, BAs, DLs, and 7 Engineering teams. I've been handling Principal Engineering
            responsibilities since Jan 2024, co-leading the UI/UX CoE with a Sr. EM.
          </p>
          <ul>
            <li>
              Led an Angular upgrade across 6 versions, refactoring +78,500/-64,800 lines of code to revamp 2 containers
              responsible for loading 9 SPAs, achieving a 71% reduction in build times from 14 mins to 4 mins
            </li>
            <li>
              Led resolution of a P1 production incident in 8 days, fixing 401 errors caused by tokens not refreshing
              properly upon session expiry, resolving 14+ ServiceNow incidents
            </li>
            <li>Leading a design system upgrade by improving React components</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-sm explhs">
          <img id="ewoweb" src="/images/ewo.png" alt="Ericsson Wireless Office" className="img-fluid" />
        </div>
        <div className="col-sm exprhs">
          <p id="ewo">ericsson</p>
          <p>________________</p>
          <p id="posloc">
            software developer | plano, tx
            <span id="timeline">sep 2021 - feb 2023</span>
          </p>
          <p>
            Ericsson Wireless Office (EWO) functioned like a Series C startup to build cloud workspaces. As EWO's only
            new grad engineer, I rotated between QA, UX and Eng roles to support the team during different stages of the
            software development life cycle.
          </p>
          <ul>
            <li>
              Added Internationalization and Localization to Angular app using{' '}
              <a href="https://github.com/ngx-translate/core" target="_blank" rel="noreferrer">
                ngx-translate
              </a>
              library
            </li>
            <li>
              Created unit tests for 25% of the codebase's Angular components using TypeScript, Karma, and Jasmine
            </li>
            <li>
              Led UI/UX for a new product release by working closely with stakeholders to design wireframes in InVision
              Studio
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-sm explhs">
          <img id="kupcakeshop" src="/images/work-1.png" alt="demo web app for mesh7" className="img-fluid" />
        </div>
        <div className="col-sm exprhs">
          <p id="sclork">mesh7</p>
          <p>___________</p>
          <p id="posloc">
            software engineer intern | sunnyvale, ca
            <span id="timeline">jun 2019 - aug 2019</span>
          </p>
          <p>
            Before being acquired by VMware, Mesh7 was venture backed by Splunk and used to be a Series A container security
            startup called Kavach at The Fabric. As 1 of the 3 interns, I worked directly with the founding team of 2
            co-founders and 2 distinguished engineers.
          </p>
          <ul>
            <li>
              Re-built open-source project{' '}
              <a href="https://microservices-demo.github.io/" target="_blank" rel="noreferrer">
                Sock Shop
              </a>
              to create an e-commerce website which was used as a microservices{' '}
              <a href="https://github.com/tanya-sonker/cupcake-shop" target="_blank" rel="noreferrer">
                demo
              </a>{' '}
              to clients
            </li>
            <li>
              Redesigned UI elements and developed the frontend using HTML, CSS, JavaScript, and MongoDB
            </li>
            <li>
              Improved the demo by implementing text receipt functionality using Twilio API, Node.js, and Golang
            </li>
            <li>Debugged and eliminated 15 security vulnerabilities in package dependencies and added support for SQL injection</li>
            <li>
              Built and maintained the codebase on GitHub; Distributed container images on Docker Hub
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-sm explhs">
          <img id="sclork2020" src="/images/sclork-2020.png" alt="TA for SCLOrk ensemble 2020" className="img-fluid" />
        </div>
        <div className="col-sm exprhs">
          <p id="sclork">santa clara university</p>
          <p>___________</p>
          <p id="posloc">
            teaching assistant | santa clara, ca
            <span id="timeline">jan 2018 - mar 2020</span>
          </p>
          <p>
            At SCU, Teaching Assistant positions are not open to Undergraduate student applications. I was recruited by{' '}
            <a href="https://www.scu.edu/cas/mathcs/faculty-and-staff/natalie-linnell/" target="_blank" rel="noreferrer">
              Dr. Natalie Linnell
            </a>{' '}
            during sophomore year and{' '}
            <a href="https://works.bepress.com/bruno-ruviaro/about/" target="_blank" rel="noreferrer">
              Dr. Bruno Ruviaro
            </a>{' '}
            during senior year.
          </p>
          <ul>
            <li>Taught fundamental programming concepts and helped debug 15 students' C++ code every lab session</li>
            <li>Promoted to teach labs for CSCI 60 (Object Oriented Programming) after teaching CSCI 10 (Introduction to C++)</li>
            <li>
              Introduced a buddy system by pairing experienced ensemble members with inexperienced members in MUSC 157/MUSC 57
            </li>
            <li>
              Mentored students 1:1 by teaching fundamental SuperCollider concepts, debugging code and offering optional weekly
              check-ins to bridge learning gaps
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-sm explhs">
          <img id="quneo" src="/images/work-0.png" alt="QuNeo GUI for Santa Clara Laptop Orchestra" className="img-fluid" />
        </div>
        <div className="col-sm exprhs">
          <p id="sclork">santa clara laptop orchestra</p>
          <p>________________</p>
          <p id="posloc">
            software developer intern | santa clara, ca
            <span id="timeline">aug 2019 - sep 2019</span>
          </p>
          <p>
            Santa Clara Laptop Orchestra (SCLOrk) is an ensemble which draws on music composition, sound design,
            and programming for performance art. I was SCLOrk's first engineering intern.
          </p>
          <ul>
            <li>
              Built a{' '}
              <a href="https://github.com/tanya-sonker/sclork-quneo" target="_blank" rel="noreferrer">
                GUI
              </a>{' '}
              (Graphical User Interface) for the MIDI controller QuNeo in SuperCollider and C++
            </li>
            <li>Designed and developed an official <a href="https://scu-sclork.github.io/" target="_blank" rel="noreferrer">website</a> for SCLOrk</li>
            <li>Recruited out of ensemble to be the Teaching Assisant</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-sm explhs">
          <img className="groceryhelper img-fluid" src="/images/work-3.png" alt="Grocery Helper landing page" />
        </div>
        <div className="col-sm exprhs">
          <p id="sclork">project - grocery helper</p>
          <p>___________</p>
          <p id="posloc">
            frontend developer | santa clara, ca
            <span id="timeline">sep 2019 - dec 2019</span>
          </p>
          <p>
            Created a{' '}
            <a href="https://github.com/tanya-sonker/grocery-helper.github.io" target="_blank" rel="noreferrer">
              web app
            </a>{' '}
            in a group of 6 for a Software class (CSCI 187) to enhance grocery shopping experiences by keeping track of items
            bought and estimating their expiration dates.
          </p>
          <ul>
            <li>Automated reminders for expiring items through desktop push notifications by writing a Python script</li>
            <li>Created server-side PHP scripts to populate drop-downs of categories suggesting food items to add to a grocery list</li>
            <li>Built the frontend in HTML, CSS, and JavaScript as 1 of the 2 frontend developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
