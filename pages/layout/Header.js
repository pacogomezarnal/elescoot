
const Header = () => {
    return(
        <nav className="navbar fixed-top bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand d-flex  align-items-center" href="#">
                    <img src="./img/logo.png" alt="Logo" height="35" class="d-inline-block align-text-top"/>
                    <span className="fs-2 ps-3 fw-bold">ElecScoot</span>
                </a>
            </div>
        </nav>
    )
};

export default Header;