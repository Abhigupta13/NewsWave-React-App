import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";

const Navbar=()=>{
  let location =useLocation();
  useEffect(() => {
  //  console.log(location.pathname);
  }, [location])
  
  
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark mt-1"
          style={{ color: "white" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsWave
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className={`nav-link  ${location.pathname ==="/business"? "active" : ""}`} href="/business">Business</a></li>
                <li className="nav-item"><a className={`nav-link  ${location.pathname ==="/entertainment"? "active" : ""}`} href="/entertainment">Entertainment </a></li>
                <li className="nav-item"><a className={`nav-link  ${location.pathname ==="/general"? "active" : ""}`} href="/general">General</a></li>
                <li className="nav-item"><a className={`nav-link  ${location.pathname ==="/health"? "active" : ""}`} href="/health">Health  </a></li>
                <li className="nav-item"><a className={`nav-link  ${location.pathname ==="/science"? "active" : ""}`} href="/science">Science </a></li>
                <li className="nav-item"><a className={`nav-link  ${location.pathname ==="/sports"? "active" : ""}`} href="/sports">Sports  </a></li>
                <li className="nav-item"><a className={`nav-link  ${location.pathname ==="/technology"? "active" : ""}`} href="/technology">Technology  </a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
