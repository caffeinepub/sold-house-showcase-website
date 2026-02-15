// Central data model for the sold house listing
export interface ListingData {
  status: 'sold';
  address: string;
  tagline: string;
  heroImage: {
    src: string;
    alt: string;
  };
  stats: {
    price?: string;
    soldDate?: string;
    beds: number;
    baths: number;
    sqft: number;
    lotSize: string;
    yearBuilt: number;
  };
  highlights: string[];
  gallery: Array<{
    src: string;
    alt: string;
  }>;
  contact: {
    agentName: string;
    phone: string;
    email: string;
  };
}

export const listing: ListingData = {
  status: 'sold',
  address: '2847 Oakwood Drive, Riverside Heights',
  tagline: 'Stunning Modern Home with Premium Finishes',
  heroImage: {
    src: '/assets/generated/sold-hero.dim_1600x900.png',
    alt: 'Beautiful modern suburban house exterior at golden hour with manicured lawn and contemporary architecture'
  },
  stats: {
    price: '$875,000',
    soldDate: 'January 2026',
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    lotSize: '0.42 acres',
    yearBuilt: 2019
  },
  highlights: [
    'Gourmet kitchen with quartz countertops and stainless steel appliances',
    'Spacious master suite with walk-in closet and spa-like bathroom',
    'Open-concept living and dining areas with vaulted ceilings',
    'Hardwood floors throughout main level',
    'Energy-efficient smart home features and solar panels',
    'Beautifully landscaped backyard with covered patio',
    'Two-car garage with epoxy flooring and storage',
    'Prime location near top-rated schools and shopping'
  ],
  gallery: [
    {
      src: '/assets/generated/sold-gallery-01.dim_1200x800.png',
      alt: 'Modern living room with large windows and contemporary furniture'
    },
    {
      src: '/assets/generated/sold-gallery-02.dim_1200x800.png',
      alt: 'Gourmet kitchen with island and premium appliances'
    },
    {
      src: '/assets/generated/sold-gallery-03.dim_1200x800.png',
      alt: 'Luxurious master bedroom with elegant decor'
    },
    {
      src: '/assets/generated/sold-gallery-04.dim_1200x800.png',
      alt: 'Spa-like master bathroom with soaking tub'
    },
    {
      src: '/assets/generated/sold-gallery-05.dim_1200x800.png',
      alt: 'Landscaped backyard with patio and outdoor living space'
    },
    {
      src: '/assets/generated/sold-gallery-06.dim_1200x800.png',
      alt: 'Home office with built-in shelving and natural light'
    },
    {
      src: '/assets/generated/sold-floorplan.dim_1400x900.png',
      alt: 'Detailed floor plan showing room layout and dimensions'
    }
  ],
  contact: {
    agentName: 'Sarah Mitchell',
    phone: '+91 91701409494',
    email: 'sarah.mitchell@realestate.com'
  }
};
