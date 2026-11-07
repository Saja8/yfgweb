import Link from 'next/link';
import EventPageNav from '@app/components/EventPageNav';
import { HMDS_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import { SITE_CONTACT_EMAIL, createSiteMailto } from '@app/data/siteContact';

const HMDS_OFFICIAL_URL = 'https://hmds-murex.vercel.app';
const HMDS_CONTACT_MAILTO = createSiteMailto('HMDS 2027 Inquiry');

export default function HMDSRegistrationPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      <section className="px-6 py-10 sm:px-14 sm:py-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-indigo-100 bg-white shadow-[0_35px_90px_rgba(15,23,42,0.08)] dark:border-indigo-500/20 dark:bg-zinc-900">
          <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(135deg,#eef2ff_0%,#f8fbff_54%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.14),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(135deg,#1e1b4b_0%,#0f172a_58%,#09090b_100%)]"
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                HMDS 2027
              </p>
              <h1 className="mt-4 text-4xl leading-[0.94] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
                Registration
                <span className="mt-1 block text-indigo-700 dark:text-indigo-300">
                  in preparation
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                The local HMDS materials state that the registration system and
                abstract submission portal are still being prepared. Use the
                official site for updates. This site uses one shared contact for
                general inquiries.
              </p>

              <div className="mt-7 text-sm leading-7 text-zinc-700 dark:text-zinc-300 max-w-2xl">
                The official HMDS website is the primary source for the live
                portal opening and registration announcements. For questions
                about this page, please contact the HMDS inquiry address.
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav
        items={HMDS_PAGE_NAV_ITEMS}
        activeHref="/hmds/registration"
      />

      <section className="px-6 pb-12 sm:px-14 sm:pb-14">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Current status
            </div>
            <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
              Registration updates will be published here
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Date
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Apr 1–4, 2027
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Venue
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Tokyo Metropolitan University
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Contact
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {SITE_CONTACT_EMAIL}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-[#eef2ff] p-6 shadow-sm dark:border-zinc-800 dark:bg-indigo-950/30 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Note
            </div>
            <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
              <p>
                This page summarizes the current status for HMDS 2027
                registration as of the latest available information. The
                official HMDS website remains the authoritative source for the
                live portal opening and final submission instructions.
              </p>
              <p>
                If you need clarifications about the content shown here, please
                email the HMDS inquiry address or return to the HMDS overview
                page for general event details.
              </p>
            </div>
            <div className="mt-6 text-sm text-zinc-700 dark:text-zinc-300">
              Official site: <a href={HMDS_OFFICIAL_URL} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300">{HMDS_OFFICIAL_URL}</a>
            </div>
            <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
              Return to the <Link href="/hmds" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300">HMDS overview</Link>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
