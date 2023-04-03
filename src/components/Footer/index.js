import './Footer.css'

function Footer() {
  return (
    <div className="container">
      <footer className="row footer-container footer-bs">
        <ul className="footer-content col-3 col-md-2 col-sm-1">
          <div className="footer-section about footer-brand animated fadeInLeft">
            <img
              src="https://garageworks.in/assets_gw/img/GarageWorks.png"
              alt="logo"
              className="image"
            />
            <h3 className="footer-head">
              GarageWorks is a 360 solution for all you two wheeler need & in
              your parking
            </h3>
            <h style={{padding: '15px'}}>Postal Address</h>
            <ul style={{padding: '15px'}}>
              <li>3rd Floor, Survey No 15A,</li>
              <li>next to old Mumbai - Pune Highway,</li>
              <li>Wakadewadi, Shivajinagar,</li>
              <li>Pune, Maharashtra 411003</li>
            </ul>
          </div>
          <div className="size">
            <div className="footer-section contact footer-nav animated fadeInUp">
              <h3>Social</h3>
              <ul className="social pages">
                <li>
                  <a href="/">Blogs</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/garageworksservice">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/GarageWorks33?s=08">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/garageworks_/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/garage-works/">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className=" contact footer-nav animated ">
              <h3>Company</h3>
              <br />
              <ul className="list">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/garageworksservice">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/GarageWorks33?s=08">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/garageworks_/">
                    Legal & Privacy
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/garage-works/">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
        <div className="footer-section contact footer-nav animated ">
          <div>
            <h2>Want us to contact you ?</h2>
            <p style={{padding: '15px'}}>Click here to fill the form</p>
            <button type="button" className="button">
              {' '}
              Contact us{' '}
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; My Website {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
