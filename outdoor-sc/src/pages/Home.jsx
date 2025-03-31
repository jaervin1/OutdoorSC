import "./css/Home.css";

function Home() {
  return (
    <main>
      <section class="featured content">
        <a href="activity.html">
          <h1>Featured Activity</h1>
          <img src={process.env.PUBLIC_URL + "/images/activity-images/trail-one.jpg"} alt="Featured Activity" />
          <h2>Boardwalk Loop</h2>
          <p>Scenic walk through one of the most unique biospheres in the state.</p>
        </a>
      </section>
      <section className="recommended content">
        <h1>For You</h1>
        <div className="columns">
          <section>
            <a href="">
              <img src={process.env.PUBLIC_URL + "/images/activity-images/trail-two.jpg"} />
              <h2>Table Rock Trail</h2>
              <p>A challenging trail leading to breathtaking panoramic views from Table Rock Mountain. The steep ascent is rewarded with one of the best overlooks in South Carolina.</p>
            </a>
          </section>
          <section>
            <a href="">
              <img src={process.env.PUBLIC_URL + "/images/activity-images/trail-four.jpg"} />
              <h2>Raven Cliff Falls Trail</h2>
              <p>A scenic hike leading to an overlook of the tallest waterfall in South Carolina. A great balance between effort and reward.</p>
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Home;
