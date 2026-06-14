'use client';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE_CONTACT_EMAIL } from '@app/data/siteContact';

const navbarMainItems = [
  {
    ref: '/',
    label: 'Home',
    desktopLabel: 'Home',
    matchPaths: ['/'],
  },
  {
    ref: '/yfg',
    label: 'YFG Symposia',
    desktopLabel: 'YFG Symposia',
    matchPaths: ['/yfg'],
  },
  {
    ref: '/hmds',
    label: 'HMDS',
    desktopLabel: 'HMDS',
    matchPaths: ['/hmds'],
  },
  {
    ref: '/summer-school',
    label: 'Summer School',
    desktopLabel: 'Summer School',
    matchPaths: ['/summer-school'],
  },
  {
    ref: '/winter-school',
    label: 'Winter School',
    desktopLabel: 'Winter School',
    matchPaths: ['/winter-school'],
  },
  {
    ref: '/meetings',
    label: 'Meetings',
    desktopLabel: 'Meetings',
    matchPaths: ['/meetings'],
  },
];

const navbarSecondaryItems = [
  {
    ref: 'https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/',
    label: 'ABOUT YFG',
  },
  { ref: 'https://iftomm-world.org/', label: 'IFToMM WORLD' },
];

const StyledNavLink = ({
  isActive,
  className,
  activeClassName,
  inactiveClassName,
  ...linkProps
}: LinkProps & {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}) => (
  <Link
    className={`${className ?? ''} ${
      isActive
        ? activeClassName ?? 'text-sky-300'
        : inactiveClassName ?? 'hover:text-sky-200'
    }`}
    {...linkProps}
  />
);

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathname = usePathname();
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!);
  const toggleOpen = useCallback(() => {
    setIsMenuShown((shown) => !shown);
  }, []);

  useEffect(() => {
    setLinkRef(pathname!);
    setIsMenuShown(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    if (isMenuShown) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuShown]);

  useEffect(() => {
    if (!isMenuShown) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuShown(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuShown]);

  const isActiveRoute = (item: (typeof navbarMainItems)[number]) => {
    const matches = item.matchPaths ?? [String(item.ref)];
    return matches.includes(pathname ?? '') || item.ref === linkRef;
  };

  return (
    <>
      <div className="hidden xl:flex items-center gap-1 2xl:gap-2">
        {navbarMainItems.map((item) => (
          <StyledNavLink
            key={item.ref}
            href={item.ref}
            isActive={isActiveRoute(item)}
            activeClassName="text-sky-700 dark:text-sky-300"
            inactiveClassName="hover:text-sky-700 dark:hover:text-sky-200"
            className={`rounded-full border px-2.5 py-1.5 text-[11px] 2xl:text-xs tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              isActiveRoute(item)
                ? 'border-sky-300/70 bg-sky-50 text-sky-700 dark:border-sky-400/40 dark:bg-sky-500/10 dark:text-sky-300'
                : 'border-zinc-200 bg-white text-zinc-700 hover:border-sky-200 hover:bg-sky-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-sky-500/30 dark:hover:bg-sky-500/10'
            }`}
            onClick={() => {
              setLinkRef(item.ref);
            }}
          >
            {item.desktopLabel ?? item.label}
          </StyledNavLink>
        ))}
      </div>

      <button
        type="button"
        className="relative z-[3001] mt-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 xl:hidden"
        onClick={toggleOpen}
        aria-expanded={isMenuShown}
        aria-controls="yfg-site-menu"
        aria-label={
          isMenuShown ? 'Close navigation menu' : 'Open navigation menu'
        }
      >
        <div className="space-y-2">
          {(isMenuShown
            ? [
                'rotate-45 translate-y-[13px] bg-white',
                'opacity-0 h-0',
                '-rotate-45 translate-y-[-13px] bg-white',
              ]
            : [
                'bg-zinc-800 dark:bg-zinc-200',
                'bg-zinc-800 dark:bg-zinc-200',
                'bg-zinc-800 dark:bg-zinc-200',
              ]
          ).map((className, index) => (
            <span
              key={index}
              className={
                'block h-[4px] w-8 transform transition duration-500 ease-in-out ' +
                className
              }
            ></span>
          ))}
        </div>
      </button>
      <nav
        id="yfg-site-menu"
        className={`fixed inset-0 z-[3000] min-h-dvh overflow-y-auto bg-black/95 backdrop-blur text-white pt-8 transition-all duration-300 ease-out xl:hidden ${
          isMenuShown
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-0 opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden={!isMenuShown}
      >
        <div className="flex flex-col items-center gap-2 px-6 sm:px-10">
          <h2 className="text-center text-2xl sm:text-5xl md:text-[80px] z-20 leading-none">
            IFToMM YFG
          </h2>
        </div>
        <ul className="flex flex-col items-center gap-4 justify-end mt-4 sm:mt-10 md:mt-[80px] pb-10 px-6">
          {navbarMainItems.map((item) => (
            <li key={item.ref} className="relative">
              <StyledNavLink
                className="text-lg rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                isActive={isActiveRoute(item)}
                href={item.ref}
                onClick={() => {
                  setLinkRef(item.ref);
                  setIsMenuShown(false);
                }}
              >
                {item.label}
              </StyledNavLink>
            </li>
          ))}
          <li className="mt-4">
            <div className="flex text-white gap-4">
              <a
                href="https://iftomm-world.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open IFToMM World website"
                className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href={`mailto:${SITE_CONTACT_EMAIL}`}
                className="rounded-sm transition-colors hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                aria-label="Email IFToMM YFG contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </li>
          {navbarSecondaryItems.map(({ ref, label }) => (
            <li key={ref} className="relative">
              <a
                className="text-xs hover:text-zinc-400 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                href={ref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuShown(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
