import type { Metadata } from 'next';
import Image from 'next/image';
import SchoolOverview from '@app/components/Schools/SchoolOverview';
import { WINTER_SCHOOL } from '@app/data/events';

export const metadata: Metadata = {
  title: WINTER_SCHOOL.title,
  description: WINTER_SCHOOL.description,
};

export default function WinterSchoolPage() {
  return (
    <SchoolOverview
      event={WINTER_SCHOOL}
      edition="IFToMM Young Faculty Group"
      statusLabel="In planning"
      illustration={
        <Image
          src="/images/winter-school/andes-hero.svg"
          alt=""
          fill
          sizes="(min-width: 1024px) 440px, 100vw"
          className="object-cover"
          priority
        />
      }
      facts={[
        {
          label: 'Possible region',
          value: 'Chile or elsewhere in Latin America',
        },
        { label: 'Host and venue', value: WINTER_SCHOOL.venue },
        { label: 'Program', value: 'To be announced' },
      ]}
      registrationMessage="Registration is not open. Dates, host, and application details will be announced when the school is confirmed."
    />
  );
}
