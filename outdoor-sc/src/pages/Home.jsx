import "./css/Home.css";
import Tree from "../components/Tree";
function Home() {
  return (
    <>
      <section class="featured content">
        <h2>Featured Activity</h2>
        <img src="images/boardwalk-trail.jpg" />
        <a href="activity.html"><h2>Boardwalk Loop</h2></a>
      </section>
      <section className="recommended content">
        <h2>For You</h2>
        <div className="columns">
            <section>
                <img src="images/trail-one.jpg"/>
                <a href=""><h2>Peak to Pemaria</h2></a>
            </section>
            <section>
                <img src="images/trail-two.jpg"/>
                <a href=""><h2>Hellwood Loop</h2></a>
            </section>
        </div>
      </section>
    </>
  );
}

export default Home;
