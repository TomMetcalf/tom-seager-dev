import './App.css';
import WebHeader from './components/WebHeader';

function App() {
  return (
    <>
      <WebHeader />
      <h2>
        <span className="first-line">The Home of </span>
        <span className="second-line">Tom Seager Dev</span>
      </h2>
      <p>Site currently under construction.</p>
      <p>Please check back for future updates.</p>
      <section className="siteLinks">
        <a href="https://www.tom-seager.com" className="siteLinkStyle">
          Return to the Tom Seager Main Site
        </a>
      </section>
      <section>
        <a href="https://github.com/TomMetcalf" target="_blank">
          <i className="devicon-github-original-wordmark social-icon"></i>
        </a>
        <a href="https://twitter.com/TomSeagerDev" target="_blank">
          <i className="devicon-twitter-original social-icon"></i>
        </a>
      </section>
      <section className="social-links">
        <div className="social-items">
          <a href="https://github.com/TomMetcalf" target="_blank">
            <i className="fa-brands fa-github github-icon"></i>
            <p>Tom Seager GitHub</p>
          </a>
        </div>
        <div className="social-items">
          <a href="https://twitter.com/TomSeagerDev" target="_blank">
            <i className="fa-solid fa-x x-icon"></i>
            <p>Tom Seager Dev X</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
