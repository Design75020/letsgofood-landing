import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="logo">🍽️ LetsGoFood</h1>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Hot food. Delivered fast.</h2>
          <p>Your favorite meals, just a click away. Order now and enjoy premium dishes delivered to your door.</p>
          <button className="cta-button">Order Now</button>
        </div>
      </section>

      <section id="features" className="features">
        <h3>Why Choose LetsGoFood?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h4>Lightning Fast</h4>
            <p>Get your food delivered in 30 minutes or less</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h4>Wide Selection</h4>
            <p>Choose from hundreds of restaurants and cuisines</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h4>Safe Payment</h4>
            <p>Secure and convenient payment options</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h4>Quality Assured</h4>
            <p>Rating and reviews from verified customers</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h3>About LetsGoFood</h3>
        <p>We are revolutionizing food delivery by connecting hungry customers with the best restaurants in town. Fast, reliable, and always fresh.</p>
      </section>

      <section id="contact" className="contact">
        <h3>Get Started Today</h3>
        <p>Download our app or visit our website to start ordering</p>
        <button className="cta-button">Download App</button>
      </section>

      <footer className="footer">
        <p>&copy; 2026 LetsGoFood. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App