import SiteLinks from "../components/SiteLinks";
import SocialLinks from "../components/SocialLinks";
import UndersConstructionText from "../components/UnderConstructionText";
import WebHeader from "../components/WebHeader";


export default function Home() {
    return (
      <>
        <WebHeader />
        <UndersConstructionText />
        <SiteLinks />
        <SocialLinks />
      </>
    );
}