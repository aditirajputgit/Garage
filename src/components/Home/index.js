import Header from '../Header'
import './index.css'
import Footer from '../Footer'

const Home = () => (
  <>
    <Header />
    <div className="home-container1">
      <div>
        <h1>No more time and efforts in visiting garages!</h1>
        <div>
          <img
            src="https://garageworks.in/assets_gw/img/icons/perodicservice.svg"
            alt="icons"
            className="icon-image"
          />
          <h3>
            Periodic <br /> Maintenance
          </h3>
        </div>
      </div>
    </div>
    <div className="title_sections" style={{marginBottom: '1rem'}}>
      <div className="before-title">
        <span style={{fontWeight: 'bold'}}>No of</span>
        <span className="c-blue" style={{color: 'blue'}}>
          Two Wheeler
        </span>
      </div>
      <br />
      <h2>Services Provided</h2>
    </div>
    <div className="txt">1,00,000+</div>
    <div className="content_state col-md-3">
      <div className="it__em">
        <div className="icon">
          <img
            loading="lazy"
            alt="Customer Rating"
            src="https://garageworks.in/assets_gw/img/app/ratings.png"
          />
        </div>
        <div className="info_txt">
          <h4>4.7</h4>
          <p>
            Customer
            <br />
            Rating
          </p>
        </div>
      </div>
      <div className="it__em">
        <div className="icon">
          <img
            loading="lazy"
            alt="Customers Served"
            src="https://garageworks.in/assets_gw/img/app/serviced.png"
          />
        </div>
        <div className="info_txt">
          <h4>80,000+</h4>
          <p>
            Customers
            <br />
            Served
          </p>
        </div>
      </div>
      <div className="it__em">
        <div className="icon">
          <img
            loading="lazy"
            alt="Cities Covered"
            src="https://garageworks.in/assets_gw/img/app/office.png"
          />
        </div>
        <div className="info_txt">
          <h4>8</h4>
          <p>
            Cities Covered
            <br />
            Pune | Mumbai | Bangalore | Lucknow | Hyderabad | Nashik | Nagpur |
            Indore
          </p>
        </div>
      </div>
    </div>
    <div className="rows">
      <div>
        <img
          src="https://garageworks.in/assets_gw/img/workspace/etnow.png"
          alt="lg"
        />
      </div>
      <div className="paar">
        <p>
          Recognized as one of the most promising startup with a social impact.
        </p>
      </div>
    </div>

    <div className="home-container">
      <div className="home-content">
        <h3>
          Two Wheeler{' '}
          <span style={{color: 'green'}}> Maintenance & Convenience</span>{' '}
        </h3>

        <h1>
          Two Wheeler Service in your parking. Convenient and trusted partners
          for your two wheeler.
        </h1>

        <button type="button" className="shop-now-button">
          Explore More
        </button>
        <img
          src="https://garageworks.in/assets_gw/img/icons/maintainance.svg"
          className="img-icon home-desktop-img"
          alt="img-icon"
        />
      </div>
      <div>
        <div className="home-descript">
          <img
            src="https://garageworks.in/assets_gw/img/icons/scooter.svg"
            alt="scooter"
            className="scooter-img"
          />
          <br />
          <h2 style={{color: 'black'}}>A bouquet of two wheeler Services</h2>
          <p>
            Garage Works delivers to you a bouquet of two-wheeler services for
            various brands of motorcycles and scooters, in your parking. A user
            friendly and tech enabled solution curated for making your everyday
            life comfortable.
          </p>
        </div>
        <div className="home-descript">
          <img
            src="https://garageworks.in/assets_gw/img/icons/home.svg"
            alt="scooter"
            className="scooter-img"
          />
          <h2 style={{color: 'black'}}>A bouquet of two wheeler Services</h2>
          <p>
            With GarageWorks you don;t have to worry about your two wheeler .
            And the best part is you donot have to go anywhere but best service
            come to you in your parking.
          </p>
        </div>
      </div>
    </div>
    <div className="home-container">
      <div className="scooty-conatiner">
        <h1>Quality Assured</h1>
        <p style={{color: 'gray'}}>
          The best two wheeler services delivered in your parking with assured
          quality.
        </p>
        <br />
        <ul>
          <li>Skilled Mechanics</li>
          <li>7 day service warranty</li>
          <li>Genuine Spares</li>
          <li>Contactless Service</li>
        </ul>
      </div>

      <img
        src="https://garageworks.in/assets_gw/img/hosting/78.svg"
        alt="hosting"
        className="img-icon"
      />
    </div>
    <div className="Home-garage-offer">
      <h1>hello</h1>
    </div>
    <Footer />
  </>
)

export default Home
