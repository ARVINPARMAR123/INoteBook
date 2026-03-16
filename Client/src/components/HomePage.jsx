import { Link } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  const getStartedPath = isLoggedIn ? '/home' : '/signup';
  const signInPath = isLoggedIn ? '/home' : '/login';

  return (
    <div className="home-container">

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-badge">📓 Smart Note Taking</div>
        <h1>Welcome to <span className="brand">iNoteBook</span></h1>
        <p>Your smart, secure cloud notebook — organize thoughts, tasks, and ideas in one place.</p>
        <div className="hero-actions">
          <Link to={getStartedPath} className="btn hero-btn-primary">Get Started Free</Link>
          <Link to={signInPath} className="btn hero-btn-secondary">Sign In</Link>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Everything you need</h2>
        <p className="features-subtitle">Simple, powerful tools to keep you organized.</p>
        <div className="features-cards">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Create Notes</h3>
            <p>Add unlimited notes with titles, descriptions and custom tags.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3>Edit Anytime</h3>
            <p>Update your notes on the fly — changes are saved to the cloud instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗂️</div>
            <h3>Stay Organized</h3>
            <p>Tag your notes and keep your workspace clutter-free.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>JWT-protected accounts ensure only you can access your notes.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section">
        <h2>How it works</h2>
        <div className="how-steps">
          <div className="how-step">
            <div className="step-number">1</div>
            <h4>Create an account</h4>
            <p>Sign up for free in seconds — no credit card needed.</p>
          </div>
          <div className="how-step-arrow">→</div>
          <div className="how-step">
            <div className="step-number">2</div>
            <h4>Add your notes</h4>
            <p>Write, tag and organize notes as you go.</p>
          </div>
          <div className="how-step-arrow">→</div>
          <div className="how-step">
            <div className="step-number">3</div>
            <h4>Access anywhere</h4>
            <p>Your notes sync to the cloud and are available on any device.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to get organized?</h2>
        <p>Join iNoteBook and start taking smarter notes today.</p>
        <Link to={getStartedPath} className="btn hero-btn-primary">Start for Free</Link>
      </section>

    </div>
  );
};

export default HomePage;
