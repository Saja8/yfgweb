import Image from 'next/image';
import Link from 'next/link';
import EventPageNav from '@app/components/EventPageNav';
import { HMDS_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import { HMDS_TOPICS, HMDS_ORGANIZING, HMDS_TECHNICAL } from '@app/data/events';

const HMDS_OFFICIAL_URL = 'https://hmds2027.org/';

export default function HMDSPage() {
  return (
    <div className="mx-auto relative pt-16">
      <section className="px-6 py-8 sm:px-14 sm:py-10">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[30px] border border-indigo-100 bg-white shadow-sm dark:border-indigo-500/20 dark:bg-zinc-900">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="bg-gradient-to-br from-sky-100 via-white to-cyan-100 px-6 py-8 dark:from-sky-950 dark:via-blue-950 dark:to-cyan-900 sm:px-8 sm:py-10">
              <div className="inline-flex items-center rounded-full border border-sky-200 dark:border-white/20 bg-sky-50 dark:bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase mb-4">
                IFToMM Young Faculty Group
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 text-zinc-900 dark:text-white">
                HMDS
              </h1>
              <p className="text-sky-800 dark:text-blue-200 text-base sm:text-lg max-w-2xl leading-relaxed">
                International Symposium on Heterogeneous and Multi-Domain
                Systems, connecting robotics, integration, interoperability, and
                advanced engineering applications.
              </p>
              <div className="mt-7 text-sm leading-7 text-zinc-700 dark:text-zinc-300 max-w-2xl">
                See the{' '}
                <a href={HMDS_OFFICIAL_URL} className="underline">
                  official HMDS website
                </a>{' '}
                for news, registration, and submission details.
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 dark:border-white/10 dark:bg-white/10">
                  <div className="text-xs uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-200">
                    Archive
                  </div>
                  <div className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    HMDS 2025
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    First edition at Tokyo Metropolitan University with
                    workshops, sessions, and proceedings.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 dark:border-white/10 dark:bg-white/10">
                  <div className="text-xs uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-200">
                    Next edition
                  </div>
                  <div className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    HMDS 2027
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    The second edition builds on the Tokyo program and will
                    continue the multi-domain systems focus.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[280px] bg-zinc-900">
              <Image
                src="/images/tokyo/tokyo-skytree-night.jpg"
                alt="Tokyo Skytree illuminated at night"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 hidden sm:block rounded-2xl border border-white/15 bg-black/45 p-4 text-white backdrop-blur">
                <div className="text-xs uppercase tracking-[0.18em] text-cyan-200">
                  Tokyo context
                </div>
                <div className="mt-2 text-lg font-medium">
                  Urban systems at scale
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-100/85">
                  HMDS focuses on integrated systems, coordination, and
                  real-world engineering complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav items={HMDS_PAGE_NAV_ITEMS} activeHref="/hmds" />

      <div className="max-w-5xl mx-auto px-6 sm:px-14 py-10 space-y-8">
        {/* HMDS 2025 — 1st Edition (Past) */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-800/50 dark:to-zinc-800/30 border-b border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                  Past
                </span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-2">
                  HMDS 2025 — 1st Edition
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Tokyo Metropolitan University, Minami-Osawa Campus, Japan
                </p>
              </div>
              <div className="text-right text-sm text-zinc-600 dark:text-zinc-300">
                <div className="font-semibold">Jun 22–26, 2025</div>
                <div>5-day program</div>
              </div>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Overview
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                The inaugural HMDS symposium focused on cutting-edge research in
                cyber-physical systems integration, multi-domain coordination,
                advanced robotics applications, and system interoperability. The
                symposium addresses modern engineering challenges where
                traditional single-domain approaches are insufficient.
              </p>

              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Core Topics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-zinc-600 dark:text-zinc-300 mb-6">
                {HMDS_TOPICS.map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                    {t}
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Publications
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-2">
                <strong>Oral presentations:</strong> Published in Springer
                &ldquo;Book of Mechanisms and Machines&rdquo; series with DOI.
                <br />
                <strong>Poster sessions:</strong> Published in symposium
                proceedings.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Submission via EasyChair — two-stage process (abstract → full
                paper/poster).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Program (5 days)
              </h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Days 1–2: Workshops &amp; Tutorials
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    System Integration, Robotics, Control Systems, Propulsion,
                    Simulation, Interoperability
                  </p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Day 3: Opening &amp; Main Program
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    Opening Ceremony, Parallel Sessions, Welcome Reception
                  </p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Day 4: Main Program
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    Parallel Sessions (Tracks A &amp; B)
                  </p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Day 5: Final Program &amp; Culture
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    Final Sessions, Tokyo City Tour, Closing Ceremony, Gala
                    Dinner
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Archive and updates
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The first-edition website remains the archive reference for the
                2025 symposium. Live registration updates for HMDS 2027 are
                handled separately so the current page does not mix archived fee
                notes with the upcoming edition.
              </p>

              <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                For the latest registration and submission information, refer to
                the official HMDS website. The 2025 archive remains here as a
                reference for the symposium program and topics.
              </div>
            </div>
          </div>
        </section>

        {/* HMDS 2027 — 2nd Edition */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-500/20 overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-500/10 dark:to-violet-500/10 border-b border-indigo-100 dark:border-indigo-500/10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-500/10 dark:text-indigo-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                  Upcoming
                </span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-2">
                  HMDS 2027 — 2nd Edition
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Tokyo Metropolitan University, Minami-Osawa Campus, Japan
                </p>
              </div>
              <div className="text-right text-sm text-zinc-600 dark:text-zinc-300">
                <div className="font-semibold">Mar 30–Apr 2, 2027</div>
                <div>4-day program</div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              The 2nd edition of HMDS continues the focus on heterogeneous and
              multi-domain systems research. Building on the inaugural edition,
              HMDS 2027 will feature paper presentations, poster sessions, and
              networking activities. Details will be announced after reviewing
              the outcomes of HMDS 2025.
            </p>
          </div>
        </section>

        {/* Committees */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 p-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Committees
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Organizing Committee
              </h3>
              <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                {HMDS_ORGANIZING.map((m) => (
                  <li key={m.name}>
                    {m.role ? <strong>{m.role}: </strong> : null}
                    {m.name} ({m.country})
                    {m.institution ? (
                      <span className="text-zinc-400 dark:text-zinc-500">
                        {' '}
                        — {m.institution}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Technical Committee
              </h3>
              <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                {HMDS_TECHNICAL.map((m) => (
                  <li key={m.name}>
                    {m.name} ({m.country})
                    {m.institution ? (
                      <span className="text-zinc-400 dark:text-zinc-500">
                        {' '}
                        — {m.institution}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Venue
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Tokyo Metropolitan University, Minami-Osawa Campus — 1-1
              Minami-Osawa, Hachioji-shi, Tokyo 192-0397, Japan. About 40
              minutes from Shinjuku via Keio Sagamihara Line to Minami-Osawa
              Station.
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Event-specific programme details are published on the official
              HMDS website.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
