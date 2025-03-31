import "./css/Explore.css";
import {FaPlusCircle, FaMapMarker} from "react-icons/fa";

function Explore() {
    return (
        <main id="explore-page">
            <section class="search-container">
                <input type="text" class="search-input" placeholder="Search" />
                <input type="text" class="zipcode-input" placeholder="29201" />
                <FaMapMarker color="#344e41"/>
            </section>

            <section class="filters">
                <button>Distance</button>
                <button>Rating (stars)</button>
                <button>Difficulty</button>
                <button>Activity Type</button>
                <a href="add_activity.html"
                ><button> <FaPlusCircle/> </button>
                </a>
            </section>
        </main>
    );
};

export default Explore;