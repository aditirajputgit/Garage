import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const About = () => (
  <>
    <div className="about">
      <Header />
    </div>
    <div className="product-sections">
      <h1 style={{padding: '15px'}}>About Us</h1>
      <p style={{padding: '15px'}}>
        Leave us a little info, and we’ll be in touch.
      </p>
      <button type="button" className="about-us-button">
        {' '}
        Contact Us
      </button>
    </div>
    <div className="About-section ">
      <div className="about1">
        <h3 style={{color: 'orchid'}}>About Us</h3>
        <p className="about-para">
          We are GarageWorks, a doorstep service provider for two wheelers -
          Convenient, Transparent, and Cost Effective.
        </p>
      </div>
      <div className="about-section">
        <p style={{padding: '20px'}}>
          The foundation for GarageWorks was laid in November 2015. But after a
          lot of experiments and learnings, GarageWorks launched its 360°
          Managed Marketplace for Two-Wheelers in June 2017.
        </p>
        <p style={{padding: '20px'}}>
          GarageWorks was launched with a single objective – to make two-wheeler
          management simple, effective & stress-free.
        </p>
        <p style={{padding: '20px'}}>
          In last 3 years we have :
          <ul>
            <li>Delivered 150000 Services</li>
            <li>On-boarded 49000+ customers across 3 cities</li>
            <li>Resolved 200000+ vehicle related complaints</li>
          </ul>
        </p>
        <p style={{padding: '20px'}}>
          We at GarageWorks realized that:
          <ul>
            <li>
              New-age customers are looking for convenience and trustworthy
              services.
            </li>
            <li>
              It’s not possible to differentiate a good mechanic from the bad
              one.
            </li>
          </ul>
        </p>
      </div>
    </div>
    <div className="about3">
      <p>
        All in all, the market is offering a broken and an unhappy experience to
        the customers.
      </p>
      <p>
        We at GarageWorks saw this as a massive opportunity and decided to
        disrupt the status quo by
      </p>
      <p style={{padding: '0px'}}>leveraging technology.</p>
      <p>
        GarageWorks offers standardized services with a predictable quality to
        customers at their doorstep.
      </p>
      <p>
        Literally! We mean it. A network of skilled mechanics visit you at home
        to service or repair your two-wheeler, making it convenient and
        trustworthy.
      </p>
    </div>
    <div className="about-box">
      <div>
        <h3>Our Promise</h3>
        <h1>Leading with our guiding principles</h1>
        <h2>
          GarageWorks operates on 4 key principles to deliver standardized
          services across multiple brands, models and locations.
        </h2>
      </div>
      <div>
        <h1>aditi</h1>
      </div>
    </div>
    <div className="about4">
      <p>
        We enable our customers to maintain their motorcycles and scooters
        conveniently at home by availing good service qualities at a predictable
        cost.
      </p>
      <p>
        How? We use technology to identify your vehicle’s needs which helps us
        identify the right mechanic and the right set of spare parts needed for
        the job. This helps us achieve an 86% first time fix. The technology
        helps us own the customer experience and standardize it irrespective of
        the vehicle brand, model and location of the vehicle.
      </p>
      <p>
        We have tie-up with renowned spares & consumable brands which are
        enabled through a robust supply chain code. This helps us to ensure that
        every part used in servicing or repairing your two-wheeler is completely
        genuine.
      </p>
      <p>
        Our vision is to become the one-stop-shop solution for all your
        two-wheeler needs including periodic maintenance, repairs, accidental
        repairs, tyre replacement, battery replacement and others.
      </p>
    </div>
    <h1>Trusted Partners with</h1>
    <div className="about-box">
      <div>
        <h3>Our Promise</h3>
        <h1>Leading with our guiding principles</h1>
        <h2>
          GarageWorks operates on 4 key principles to deliver standardized
          services across multiple brands, models and locations.
        </h2>
      </div>
      <div>
        <h1>aditi</h1>
      </div>
    </div>
    <Footer />
  </>
)

export default About
