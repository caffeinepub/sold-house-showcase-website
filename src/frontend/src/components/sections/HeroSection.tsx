import { Badge } from '@/components/ui/badge';
import type { ListingData } from '@/data/listing';

interface HeroSectionProps {
  address: string;
  tagline: string;
  status: ListingData['status'];
  heroImage: ListingData['heroImage'];
}

export function HeroSection({ address, tagline, status, heroImage }: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/20" />
      </div>

      {/* Content */}
      <div className="container relative flex h-full items-end pb-16">
        <div className="max-w-3xl space-y-4">
          <Badge 
            variant="default" 
            className="bg-accent text-accent-foreground px-6 py-2 text-lg font-semibold tracking-wide shadow-lg"
          >
            {status.toUpperCase()}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {address}
          </h1>
          <p className="text-xl text-muted-foreground sm:text-2xl md:text-3xl">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
