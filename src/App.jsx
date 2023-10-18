import './App.css';
import SiteLinks from './components/SiteLinks';
import SocialLinks from './components/SocialLinks';
import UndersConstructionText from './components/UnderConstructionText';
import WebHeader from './components/WebHeader';

function App() {
  return (
    <>
      <WebHeader />
      <UndersConstructionText />
      <SiteLinks />
      <SocialLinks />
    </>
  );
}

export default App;
