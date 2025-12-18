import Footer from "./Footer";

const HomePage = () => {

  const onclick = () => {
    window.location.href = "/signup";
  }

  return (
    <>
      <div className="home-container">
        <section className="hero-section">
          <h1>Welcome to <span className="brand">iNoteBook</span></h1>
          <p>Your smart note-taking app — fast, simple & secure.</p>
          <button className="btn primary-btn" onClick={onclick}>Get Started</button>
        </section>

        <section className="features-section">
          <h2>Features</h2>
          <div className="features-cards">
            <div className="card">
              <h3>📝 Create Notes</h3>
              <p>Add unlimited notes quickly with rich text support.</p>
            </div>
            <div className="card">
              <h3>🔍 Search Notes</h3>
              <p>Find notes instantly with powerful search.</p>
            </div>
            <div className="card">
              <h3>🔒 Secure</h3>
              <p>Your notes are safe and private.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
