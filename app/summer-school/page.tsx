import type { Metadata } from 'next';
import SchoolOverview from '@app/components/Schools/SchoolOverview';
import { SUMMER_SCHOOL } from '@app/data/events';
import FlightSystemsIllustration from './FlightSystemsIllustration';

export const metadata: Metadata = {
  title: `${SUMMER_SCHOOL.title} | ${SUMMER_SCHOOL.subtitle}`,
  description: SUMMER_SCHOOL.description,
};

const program = [
  {
    title: 'Learn the fundamentals',
    description:
      'Connect mechanism design, aerodynamics, and flight stability to the two builds.',
  },
  {
    title: 'Build two flight systems',
    description:
      'Develop a mechanism-based aircraft and assemble a four-rotor aircraft in teams.',
  },
  {
    title: 'Test and improve',
    description:
      'Plan supervised tests, compare the results, and use the evidence to refine the builds.',
  },
];

export default function SummerSchoolPage() {
  return (
    <SchoolOverview
      event={SUMMER_SCHOOL}
      edition={`IFToMM YFG · ${SUMMER_SCHOOL.subtitle}`}
      statusLabel="Proposed"
      illustration={<FlightSystemsIllustration />}
      facts={[
        { label: 'Proposed venue', value: SUMMER_SCHOOL.venue },
        { label: 'Format', value: 'Two-week intensive · 15 sessions' },
        { label: 'Language', value: 'English' },
      ]}
      registrationMessage="Registration is not open. Dates, eligibility, and application details will be announced once the program is confirmed."
    >
      <section id="program" className="mt-10 scroll-mt-6">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
          Proposed program
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          The program draws on TMU’s proposed{' '}
          <cite>Introduction to Aeromodelling</cite> course. The plan includes
          an off-campus visit and two days of model flight testing, subject to
          campus arrangements and approvals.
        </p>
        <ol className="mt-5 grid gap-4 sm:grid-cols-3">
          {program.map(({ title, description }, index) => (
            <li
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-sm font-semibold text-sky-800 dark:text-sky-300">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </SchoolOverview>
  );
}
