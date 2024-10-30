import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../styles/Homepage.css'

const Homepage = () => {
  return (
    <Router>
      <NavBar />
      <Hero />
      <main style={{ padding: '20px', textAlign: 'center' }}>
      <section className="about-section">
  <h2>About Us</h2>
  <p>
    Welcome to Disaster Relief Solutions, a dedicated organization committed to empowering communities in times of crisis. Founded in 2010, we have been at the forefront of disaster management, providing vital support and resources to those affected by natural disasters and emergencies.
  </p>
  <p>
    Our mission is to enhance disaster preparedness, response, and recovery efforts through innovative strategies, education, and collaboration. We believe that every community deserves the tools and knowledge to withstand and recover from disasters, and we are passionate about making this a reality.
  </p>
  <p>
    At Disaster Relief Solutions, our team comprises experienced professionals, volunteers, and partners who bring a wealth of knowledge in emergency management, public health, and humanitarian aid. Together, we work to develop tailored solutions that address the unique challenges each community faces.
  </p>
  <p>
    Our services include training programs, emergency response planning, resource distribution, and public awareness campaigns. We strive to equip individuals and organizations with the skills and resources needed to respond effectively to disasters, ensuring that no one faces these challenges alone.
  </p>
  <p>
    Thank you for visiting Disaster Relief Solutions. Join us in our mission to build resilient communities, where preparedness and recovery are a priority for all.
  </p>
</section>


        <section className="services-section">
          <h2>Our Services</h2>
          <div className="service-item">Service 1</div>
          <div className="service-item">Service 2</div>
          <div className="service-item">Service 3</div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <blockquote>"Great service!" - Happy Customer</blockquote>
          <blockquote>"Highly recommend!" - Satisfied Client</blockquote>
        </section>

        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <Link to="/signup">
            <button className="cta-button">Sign Up Now</button>
          </Link>
        </section>

        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/signup" element={<h1>Sign Up Page</h1>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Homepage;
