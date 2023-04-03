import './index.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-sm-0 fixed-top">
      <div className="nav-logo">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src="https://garageworks.in/assets_gw/img/GarageWorks.png"
            alt="logo"
          />
          {/* GarageWorks<span className="c-orange-red">.</span> */}
        </a>
      </div>
      <div className="nav-menu">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About GarageWorks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/work">
                How it works?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/insurance">
                Insurance
              </a>
            </li>
          </ul>
        </div>
        <li>
          <div className="nav_account btn_demo3">
            <a
              href="/"
              className="btn  opacity-1 sweep_letter scale sweep_top rounded-8"
            >
              <div className="inside_item">
                <span data-hover="Book Now">Book Now</span>
              </div>
            </a>
          </div>
        </li>
      </div>
    </nav>
  )
}

export default Navbar
