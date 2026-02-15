import { Check } from 'lucide-react';

interface HighlightsSectionProps {
  highlights: string[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Property Highlights
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm"
            >
              <div className="mt-0.5 rounded-full bg-accent p-1">
                <Check className="h-4 w-4 text-accent-foreground" />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
