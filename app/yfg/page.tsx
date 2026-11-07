import Image from 'next/image';
import EventPageNav from '@app/components/EventPageNav';
import { YFG_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import {
  MMS_TOPICS,
  YFG_MMS_2024_ORGANIZING,
  YFG_MMS_2024_TECHNICAL,
} from '@app/data/events';

const OFFICIAL_SECOND_YFG_URL = 'https://iftomm-yfgs2026.sciencesconf.org';
const FIRST_YFG_URL = 'https://saja8.github.io/IFToMM_YFG-MMS/';

const currentEditionFacts = [
  ['Edition', '2nd IFToMM YFG Symposium'],
  ['Dates', 'April 15-17, 2026'],
  ['Location', 'Monastir, Tunisia'],
  ['Live updates', 'Official SciencesConf site'],
];

export default function YFGPage() {
  return (
    <div className="relative pt-16">
      <section className="px-4 py-5 sm:px-8 sm:py-8 lg:px-14">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              IFToMM Young Faculty Group
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl sm:leading-[0.95]">
              YFG Symposia
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              A concise gateway for the Young Faculty Group symposium series:
              the current official edition, the first symposium archive, and
              the recurring meeting route.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={OFFICIAL_SECOND_YFG_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-100"
              >
                Open official registration
              </a>
              <a
                href={FIRST_YFG_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:border-sky-300 hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-sky-500/40 dark:hover:bg-zinc-800"
              >
                Open 2024 archive
              </a>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              {currentEditionFacts.map(([label, value]) => (
                <div
                  key={label}
                  className="border-t border-zinc-200 pt-4 dark:border-zinc-800"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-[320px] bg-zinc-900 sm:min-h-[420px] lg:min-h-full">
            <Image
              src="/images/yfg/monastir-ribat.jpg"
              alt="Monastir Ribat in Tunisia"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="max-w-md text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Current host city
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Monastir, Tunisia
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  Program, submission, and registration updates are maintained
                  on the official symposium website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav items={YFG_PAGE_NAV_ITEMS} activeHref="/yfg" />

      <section className="px-4 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[20px] border border-sky-100 bg-sky-50 p-6 dark:border-sky-500/20 dark:bg-sky-950/30 sm:p-8">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm dark:bg-sky-500/10 dark:text-sky-200">
              Upcoming
            </span>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-zinc-950 dark:text-white sm:text-3xl">
              YFGS 2026
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
              The official site lists conference days on April 15-17, 2026 in
              Monastir. Visitors should use SciencesConf for the latest program,
              submissions, and registration information.
            </p>
            <a
              href={OFFICIAL_SECOND_YFG_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-[42px] items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Open official site
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <section className="rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                What stays here
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                This portal keeps the stable overview, edition history, and
                navigation across Young Faculty Group events.
              </p>
            </section>
            <section className="rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                What is external
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                Live details, registration, and new announcements are routed to
                the official symposium website.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                Past / 1st Symposium
              </span>
              <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-zinc-950 dark:text-white sm:text-3xl">
                1st IFToMM YFG-MMS
              </h2>
              <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
                Emerging Fields in Mechanism and Machine Science
              </p>
              <div className="mt-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Nov 19-21, 2024 · Online
                </p>
                <p className="mt-3">
                  The inaugural edition was a single-track, peer-reviewed
                  online symposium for young faculty members, combining research
                  presentations with discussion sessions.
                </p>
              </div>
              <a
                href={FIRST_YFG_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-[42px] items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Open archive site
              </a>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  Topics
                </h3>
                <div className="mt-4 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                  {MMS_TOPICS.slice(0, 12).map((topic) => (
                    <div key={topic} className="flex gap-2 leading-6">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  Committees
                </h3>
                <div className="mt-4 space-y-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Organizing Committee
                    </p>
                    <ul className="mt-2 space-y-1">
                      {YFG_MMS_2024_ORGANIZING.map((member) => (
                        <li key={member.name}>
                          {member.name} ({member.country})
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Technical Committee
                    </p>
                    <ul className="mt-2 space-y-1">
                      {YFG_MMS_2024_TECHNICAL.map((member) => (
                        <li key={member.name}>
                          {member.name} ({member.country})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-8 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl rounded-[20px] border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-950/20 sm:p-8">
          <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-start">
            <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm dark:bg-emerald-500/10 dark:text-emerald-200">
              Recurring
            </span>
            <div>
              <h2 className="text-xl font-semibold leading-tight text-zinc-950 dark:text-white sm:text-2xl">
                YFG Monthly Meetings
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
                Monthly online meetings are open to young faculty members for
                research updates, networking, and event planning.
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                Interested in joining? Reach out through the{' '}
                <a
                  href="https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-sky-700 hover:underline dark:text-sky-300"
                >
                  IFToMM YFG page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
