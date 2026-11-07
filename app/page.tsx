import Link from 'next/link';
import { EventDateBars } from '@app/components/WixInspired/EventDateBars';
import { YFG_EVENTS, type YFGEvent } from '@app/data/events';

const CATEGORY_ORDER: Record<string, number> = {
  symposium: 0,
  conference: 1,
  'summer-school': 2,
  'winter-school': 3,
};

const HERO_LINKS = [
  { href: '/yfg', label: 'YFG Symposia', dot: 'bg-sky-500' },
  { href: '/hmds', label: 'HMDS', dot: 'bg-indigo-500' },
  { href: '/summer-school', label: 'Summer School', dot: 'bg-emerald-500' },
  { href: '/winter-school', label: 'Winter School', dot: 'bg-cyan-500' },
  { href: '/meetings', label: 'Meetings', dot: 'bg-amber-500' },
];

function getDisplayStatus(event: YFGEvent): 'upcoming' | 'planning' | 'past' {
  if (event.status === 'planning') {
    return 'planning';
  }

  const timestamp = event.date ? Date.parse(event.date) : NaN;
  if (Number.isNaN(timestamp)) {
    return event.status === 'past' ? 'past' : 'upcoming';
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return timestamp < today.getTime() ? 'past' : 'upcoming';
}

function sortEvents(events: YFGEvent[]) {
  const getTime = (date?: string) => {
    const value = date ? Date.parse(date) : NaN;
    return Number.isNaN(value) ? Number.MAX_SAFE_INTEGER : value;
  };

  const upcoming = events
    .filter((event) => getDisplayStatus(event) === 'upcoming')
    .sort((a, b) => getTime(a.date) - getTime(b.date));

  const planning = events
    .filter((event) => getDisplayStatus(event) === 'planning')
    .sort((a, b) => getTime(a.date) - getTime(b.date));

  const past = events
    .filter((event) => getDisplayStatus(event) === 'past')
    .sort((a, b) => getTime(b.date) - getTime(a.date));

  return { upcoming, planning, past };
}

function getEventHref(event: YFGEvent) {
  if (event.category === 'conference') {
    return '/hmds';
  }

  if (event.category === 'summer-school') {
    return '/summer-school';
  }

  if (event.category === 'winter-school') {
    return '/winter-school';
  }

  return '/yfg';
}

export default function HomePage() {
  const visibleEvents = YFG_EVENTS.filter(
    (event) => event.status !== 'cancelled'
  );
  const { upcoming, planning, past } = sortEvents(visibleEvents);
  const allSorted = [...upcoming, ...planning, ...past];
  allSorted.sort((a, b) => {
    const sa = getDisplayStatus(a);
    const sb = getDisplayStatus(b);
    if (sa !== sb) {
      const rank = { upcoming: 0, planning: 1, past: 2 };
      return rank[sa] - rank[sb];
    }
    return (
      (CATEGORY_ORDER[a.category] ?? 9) - (CATEGORY_ORDER[b.category] ?? 9)
    );
  });
  const dateBarItems = allSorted.map((event) => ({
    title: event.title,
    dateFormatted: event.dateFormatted,
    location: event.location,
    subtitle: event.venue === event.location ? event.location : event.venue,
    href: getEventHref(event),
    status: getDisplayStatus(event),
    category: event.category,
  }));

  return (
    <div className="mx-auto relative pt-16">
      <section className="max-w-6xl 2xl:max-w-[88rem] mx-auto px-6 sm:px-14 pt-4 sm:pt-6">
        <div className="relative overflow-hidden rounded-[28px]">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <div className="relative bg-stone-50 dark:bg-zinc-900 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-500/20 blur-3xl"
              />
              <p className="text-xs tracking-[0.22em] uppercase text-zinc-500 dark:text-zinc-400">
                IFToMM Young Faculty Group
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
                  Mechanism &amp; Machine Science
                </span>
              </div>
              <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50">
                IFToMM YFG
                <br />
                Events
              </h1>
              <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                The central portal for IFToMM Young Faculty Group events —
                symposia, conferences, and summer/winter schools bringing
                together young researchers worldwide.
              </p>

              <div className="mt-7 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/yfg"
                    className="group rounded-2xl border border-sky-300/70 dark:border-sky-400/30 bg-gradient-to-br from-sky-100 to-cyan-100 dark:from-sky-500/15 dark:to-cyan-500/10 p-4 text-zinc-900 dark:text-zinc-100 transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
                        <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                        Featured
                      </span>
                      <span className="text-sky-700/80 dark:text-sky-300/80">↗</span>
                    </div>
                    <p className="mt-2 text-base font-semibold">YFG Symposia</p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                      Main symposium page and editions overview.
                    </p>
                  </Link>

                  <Link
                    href="/hmds"
                    className="group rounded-2xl border border-indigo-300/70 dark:border-indigo-400/30 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-500/15 dark:to-violet-500/10 p-4 text-zinc-900 dark:text-zinc-100 transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
                        <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                        Featured
                      </span>
                      <span className="text-indigo-700/80 dark:text-indigo-300/80">↗</span>
                    </div>
                    <p className="mt-2 text-base font-semibold">HMDS</p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                      Heterogeneous and Multi-Domain Systems symposium details.
                    </p>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {HERO_LINKS.slice(2).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 px-3.5 py-2 text-xs font-medium text-zinc-800 dark:text-zinc-100 transition-colors hover:border-sky-200 hover:bg-zinc-50 dark:hover:border-sky-400/30 dark:hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-[#050b23] sm:aspect-[16/8] lg:aspect-auto lg:min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-mechanism.svg?v=18"
                alt="Animated mechanism illustration — orbiting gears, robotic arm, four-bar linkage, rover, satellite, and people meeting around a table"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              {/* left edge fade — only on desktop where image sits beside text */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 hidden lg:block lg:w-24"
                style={{ background: 'linear-gradient(to right, #050b23 0%, transparent 100%)' }}
              />
              {/* right edge fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block lg:w-24"
                style={{ background: 'linear-gradient(to left, #050b23 0%, transparent 100%)' }}
              />
              {/* top edge fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-8 lg:h-24"
                style={{ background: 'linear-gradient(to bottom, #050b23 0%, transparent 100%)' }}
              />
              {/* bottom edge fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-8 lg:h-24"
                style={{ background: 'linear-gradient(to top, #050b23 0%, transparent 100%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <EventDateBars title="Event Calendar" items={dateBarItems} />
    </div>
  );
}
