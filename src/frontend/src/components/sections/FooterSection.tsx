import { Mail, Phone, Heart } from 'lucide-react';
import type { ListingData } from '@/data/listing';

interface FooterSectionProps {
  contact: ListingData['contact'];
}

export function FooterSection({ contact }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'unknown-app';

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Listing Agent
            </h3>
            <p className="mb-4 text-xl font-bold text-foreground">
              {contact.agentName}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{contact.email}</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              About This Property
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This property has been successfully sold. The information provided is for reference purposes only. 
              All details, measurements, and descriptions were accurate at the time of listing. 
              For inquiries about similar properties or current listings, please contact the listing agent.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Sanjay singh Chauhan. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 fill-accent text-accent" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
