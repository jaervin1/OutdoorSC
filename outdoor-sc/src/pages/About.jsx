import Contact from "../components/Contact";
import "./css/About.css"
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

function About() {
  return (
    <main>
      <section id="aboutus-gallery">
        <img src= {process.env.PUBLIC_URL + "/images/about-us/us-main.jpg"}  alt="Our group at Table Rock State Park this winter." />
      </section>
      <section id="aboutus">
        <h2>About Us</h2>
        <p>
          Welcome to OutdoorSC, your go-to hub for outdoor adventure and fitness
          exploration in South Carolina! Whether you're an avid hiker, an
          enthusiastic cyclist, a kayaking adventurer, or just looking to explore
          new outdoor activities, our platform is designed to help you track,
          share, and discover the best experiences the state has to offer.
        </p>
        <hr />
        <h2>Our Mission</h2>
        <p>
          Based out of Columbia, SC, our mission is to connect like-minded outdoor enthusiasts and provide a
          space to document and share their experiences. We believe that exploring
          nature is one of the best ways to stay active, challenge yourself, and
          appreciate the beauty of South Carolina. By offering a platform where
          users can track their activities, rate trails and routes, and interact
          with others, we hope to inspire more people to get outside and embrace
          adventure.
        </p>
        <hr />
        <h2>Contact Us</h2>
        <Contact></Contact>
        <hr />
        <h2>Socials</h2>
        <ul class="social-list">
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/jaervin1">
              <FaGithub />
            </a>
          </li>
        </ul>
      </section>
      </main>
      );
};

      export default About;