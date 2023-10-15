import './App.css';

function App() {
  return (
    <>
      <h1 className='web-address'>dev.tom-seager.com</h1>
      <h2>
        <span className="first-line">The Home of </span>
        <span className="second-line">Tom Seager Dev</span>
      </h2>
      <p>Site currently under construction.</p>
      <p>Please check back for future updates.</p>
      <section className="siteLinks">
        <a
          href="https://www.tom-seager.com"
          className="siteLinkStyle"
        >
          Return to the Tom Seager Main Site
        </a>
      </section>
    </>
  );
}

export default App;
