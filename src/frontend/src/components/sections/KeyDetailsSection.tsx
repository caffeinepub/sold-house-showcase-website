import { Home, Bed, Bath, Maximize, Calendar, DollarSign, Phone } from 'lucide-react';
import type { ListingData } from '@/data/listing';

interface KeyDetailsSectionProps {
  stats: ListingData['stats'];
  inquiryPhone: string;
}

export function KeyDetailsSection({ stats, inquiryPhone }: KeyDetailsSectionProps) {
  const details = [
    ...(stats.price ? [{ icon: DollarSign, label: 'Sale Price', value: stats.price }] : []),
    ...(stats.soldDate ? [{ icon: Calendar, label: 'Sold Date', value: stats.soldDate }] : []),
    { icon: Bed, label: 'Bedrooms', value: stats.beds.toString() },
    { icon: Bath, label: 'Bathrooms', value: stats.baths.toString() },
    { icon: Maximize, label: 'Square Feet', value: stats.sqft.toLocaleString() },
    { icon: Home, label: 'Lot Size', value: stats.lotSize },
    { icon: Calendar, label: 'Year Built', value: stats.yearBuilt.toString() }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Property Details
          </h2>
          <div className="mt-3 flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <p className="text-sm">
              For inquiries about similar properties, call{' '}
              <a 
                href={`tel:${inquiryPhone}`}
                className="font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {inquiryPhone}
              </a>
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-accent p-3 transition-colors group-hover:bg-accent/80">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-foreground">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
