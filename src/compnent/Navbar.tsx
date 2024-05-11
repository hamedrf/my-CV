import { Link } from 'react-router-dom';
import icon from '../image/icon.jpg';
export const Navbar =() =>
    {
    return(
            <div className="main-nav">
            <nav className="navbar navbar-expand-lg navbar-light nav-div ">
                <a className="navbar-brand " style={{fontSize : "2em"}}> Hamed <img className='rounded rounded-circle' style={{height: "70px"}} src={icon} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarSupportedContent">
                    <span></span>
                    <ul className="navbar-nav mr-auto ">
                    <li className="nav-item menu-itme">
                        <Link className="nav-link" to="/" state={"home"} >خانه</Link>
                    </li>
                    <li className="nav-item menu-itme">
                        <Link className="nav-link" to="/" state={"about"}>درباره من</Link>
                    </li>
                    <li className="nav-item menu-itme">
                        <Link className="nav-link" to="/" state={"samples"}>نمونه کار</Link>
                    </li>
                    <li className="nav-item menu-itme">
                        <Link className="nav-link" to="/" state={"social"}>ارتباط با من</Link>
                    </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-dark my-2 my-sm-0 rounded rounded-pill btn-lg " data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{fontSize : "20px"}}> تماس با من</button>
                    </div>
                </div>
                </nav>
        </div>
    )}