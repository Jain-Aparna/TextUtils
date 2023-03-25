import {React} from 'react';
import  {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"> {props.title} </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item mx-3 ">
            <Link className="nav-Link" to="/about">About</Link>
          </li>
                {/* <li className="nav-item dropdown">
                <Link className="nav-Link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-Link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</Link>
            </li> */}
        </ul>
        {/* <form className="d-flex"> */}
        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.changeMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
        {/* // </form> */}
      </div>
    </div>
  </nav>
  )
}

// Navbar.propTypes = {
//     title: <PropTypes className="string isRequired"></PropTypes>,
//     about: PropTypes.string
// }

// Navbar.defaultProps ={
//     title: 'Set title here',
//     about : 'about here'

// }