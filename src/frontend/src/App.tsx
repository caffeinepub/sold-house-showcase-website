import { HeroSection } from './components/sections/HeroSection';
import { GallerySection } from './components/sections/GallerySection';
import { KeyDetailsSection } from './components/sections/KeyDetailsSection';
import { HighlightsSection } from './components/sections/HighlightsSection';
import { FooterSection } from './components/sections/FooterSection';
import { listing } from './data/listing';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection
        address={listing.address}
        tagline={listing.tagline}
        status={listing.status}
        heroImage={listing.heroImage}
      />
      <KeyDetailsSection 
        stats={listing.stats} 
        inquiryPhone={listing.contact.phone}
      />
      <GallerySection gallery={listing.gallery} />
      <HighlightsSection highlights={listing.highlights} />
      <FooterSection contact={listing.contact} />
    </div>
  );
}

export default App;
