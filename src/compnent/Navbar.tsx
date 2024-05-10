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
                        <a className="nav-link" href="#">خانه</a>
                    </li>
                    <li className="nav-item menu-itme">
                        <a className="nav-link" href="#">درباره من</a>
                    </li>
                    <li className="nav-item menu-itme">
                        <a className="nav-link" href="#">نمونه کار</a>
                    </li>
                    <li className="nav-item menu-itme">
                        <a className="nav-link" href="#">یه چیزی</a>
                    </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-dark my-2 my-sm-0 rounded rounded-pill btn-lg " style={{fontSize : "20px"}}>ارتباط با ما</button>
                    </div>
                </div>
                </nav>
        </div>
    )}