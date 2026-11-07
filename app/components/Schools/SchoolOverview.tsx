import type { ReactNode } from 'react';
import type { YFGEvent } from '@app/data/events';
import { createSiteMailto } from '@app/data/siteContact';

interface SchoolOverviewProps {
  event: YFGEvent;
  edition: string;
  statusLabel: string;
  illustration: ReactNode;
  facts: { label: string; value: string }[];
  registrationMessage: string;
  children?: ReactNode;
}

export default function SchoolOverview({
  event,
  edition,
  statusLabel,
  illustration,
  facts,
  registrationMessage,
  children,
}: SchoolOverviewProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8 sm:px-14 sm:py-12">
      <section className="overflow-hidden rounded-[28px] border border-sky-100 bg-sky-50 dark:border-sky-900 dark:bg-slate-900">
        <div className="grid items-stretch lg:grid-cols-[1.12fr_0.88fr]">
          <div className="min-w-0 px-6 py-8 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-900 dark:text-sky-300">
              {edition}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {event.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-900 dark:bg-sky-900 dark:text-sky-100">
                {statusLabel}
              </span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                {event.dateFormatted}
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {children && (
                <a
                  href="#program"
                  className="inline-flex items-center rounded-xl bg-sky-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-700 dark:bg-sky-300 dark:text-sky-950 dark:hover:bg-sky-200 dark:focus-visible:outline-sky-300"
                >
                  Explore the program
                </a>
              )}
              <a
                href="#registration"
                className="inline-flex items-center rounded-xl border border-sky-300 bg-white px-4 py-2.5 text-sm font-semibold text-sky-900 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-700 dark:border-sky-700 dark:bg-slate-800 dark:text-sky-100 dark:hover:bg-slate-700 dark:focus-visible:outline-sky-300"
              >
                Registration updates
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full bg-slate-900 lg:aspect-auto">
            {illustration}
          </div>
        </div>
        <dl className="grid gap-px border-t border-sky-100 bg-sky-100 dark:border-sky-900 dark:bg-sky-900 sm:grid-cols-3">
          {facts.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white px-6 py-4 dark:bg-slate-950 sm:px-8"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-sky-800 dark:text-sky-300">
                {label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {children}

      <section
        id="registration"
        className="mt-8 scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Registration updates
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
          {registrationMessage}
        </p>
        <a
          href={createSiteMailto(`${event.subtitle} inquiry`)}
          className="mt-4 inline-flex rounded-lg py-2 text-sm font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-700 dark:text-sky-300 dark:hover:text-sky-100 dark:focus-visible:outline-sky-300"
        >
          Contact the YFG about this school
        </a>
      </section>
    </div>
  );
}
