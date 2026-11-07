import Link from 'next/link';
import { SUMMER_SCHOOL, WINTER_SCHOOL } from '@app/data/events';

const schools = [
  { event: SUMMER_SCHOOL, href: '/summer-school', status: 'Proposed' },
  { event: WINTER_SCHOOL, href: '/winter-school', status: 'In planning' },
];

export default function SchoolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8 sm:px-14 sm:py-12">
      <section className="rounded-[28px] border border-sky-100 bg-sky-50 p-6 dark:border-sky-900 dark:bg-slate-900 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-900 dark:text-sky-300">
          IFToMM Young Faculty Group
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          Schools
        </h1>
        <p className="mt-4 text-base text-zinc-700 dark:text-zinc-300">
          Summer and winter programs in planning for 2027.
        </p>
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {schools.map(({ event, href, status }) => (
          <Link
            key={href}
            href={href}
            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-700 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-500 dark:focus-visible:outline-sky-300"
          >
            <span className="rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-900 dark:bg-sky-900 dark:text-sky-100">
              {status}
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              {event.title}
            </h2>
            <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {event.dateFormatted}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {event.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
