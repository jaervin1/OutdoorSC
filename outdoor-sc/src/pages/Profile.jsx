import "./css/Profile.css"

function Profile() {
  return (
    <main>
      <div id="profile-page">
        <div id="profile">
          <img src={process.env.PUBLIC_URL + "/images/default_profile.png"} alt="Profile Image" />
          <h2 id="user-name">Alex Ervin</h2>
          <h3 id="username">@jaervin</h3>
          <section id="aboutme">
            <h3>About me:</h3>
            <hr />
            <p>
              I'm a dedicated environmental steward committed to protecting and
              preserving our planet's natural heritage. I believe that everyone
              has a role to play in safeguarding our environment, and I'm
              passionate about raising awareness about the challenges facing our
              ecosystems. Through my work, I aim to inspire action,
              promote sustainable practices, and foster a deeper connection
              between people and nature.
            </p>
          </section>
        </div>
        <div id="your-posts">
          <h2>Your Posts</h2>
        </div>
      </div>
    </main>
  );
};

export default Profile;