import "./css/Explore.css";
import { FaMapMarker } from "react-icons/fa";

import Activites from "../components/Activities";

function Explore() {
  return (
    <main id="explore-page">
      <section className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <input type="text" className="zipcode-input" placeholder="29201" />
        <FaMapMarker color="#344e41" />
      </section>

      <section className="explore">
        <Activites/>
      </section>
    </main>
  );
}

export default Explore;
