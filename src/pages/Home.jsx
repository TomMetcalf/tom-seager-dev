import Navigation from '../components/Navigation';
import SiteLinks from '../components/SiteLinks';
import SocialLinks from '../components/SocialLinks';
import UndersConstructionText from '../components/UnderConstructionText';
import WebHeader from '../components/WebHeader';

export default function Home() {
  return (
    <>
      <Navigation />
      <WebHeader />
      <UndersConstructionText />
      <SiteLinks />
      <SocialLinks />
    </>
  );
}
