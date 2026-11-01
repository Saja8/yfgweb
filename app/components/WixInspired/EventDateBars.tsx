'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';
import { categoryIcon } from '@app/components/icons/CategoryIcons';

type EventDateBarItem = {
  title: string;
  date: string;
  dateFormatted: string;
  location: string;
  subtitle?: string;
  href?: string;
  status?: 'upcoming' | 'planning' | 'past' | 'cancelled';
  category?: string;
};

type EventDateBarsProps = {
  title?: string;
  items: EventDateBarItem[];
};

function statusLabel(status?: EventDateBarItem['status']) {
  if (status === 'upcoming') return 'Upcoming';
  if (status === 'past') return 'Past';
  return 'Planning';
}

function statusClasses(status?: EventDateBarItem['status']) {
  if (status === 'upcoming') {
    return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300';
  }
  if (status === 'past') {
    return 'bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200';
  }
  return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300';
}

function accentColor(category?: string) {
  if (category === 'symposium') return 'border-l-sky-500';
  if (category === 'conference') return 'border-l-indigo-500';
  if (category === 'summer-school') return 'border-l-emerald-500';
  if (category === 'winter-school') return 'border-l-cyan-500';
  return 'border-l-zinc-400';
}

function iconBg(category?: string) {
  if (category === 'symposium')
    return 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300';
  if (category === 'conference')
    return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300';
  if (category === 'summer-school')
    return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300';
  if (category === 'winter-school')
    return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300';
  return 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300';
}

function carouselBg(category?: string) {
  if (category === 'symposium') return 'from-sky-600 to-sky-800';
  if (category === 'conference') return 'from-indigo-600 to-indigo-800';
  if (category === 'summer-school') return 'from-emerald-600 to-emerald-800';
  if (category === 'winter-school') return 'from-cyan-600 to-cyan-800';
  return 'from-zinc-600 to-zinc-800';
}

function getSlides(items: EventDateBarItem[]) {
  const upcoming = items.filter((i) => i.status === 'upcoming');
  return upcoming.length > 0 ? upcoming : items.slice(0, 3);
}

type CarouselControlProps = {
  controlledIndex?: number;
  onGoTo?: (idx: number) => void;
};

function EventCarousel({
  items,
  controlledIndex,
  onGoTo,
}: { items: EventDateBarItem[] } & CarouselControlProps) {
  const slides = getSlides(items);
  const isControlled = controlledIndex !== undefined;
  const [internalCurrent, setInternalCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const current = isControlled ? controlledIndex : internalCurrent;

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isControlled) return; // parent drives timing
    timerRef.current = setInterval(() => {
      setInternalCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
  }, [slides.length, isControlled]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  if (slides.length === 0) return null;

  const slide = slides[current % slides.length];
  const Icon = categoryIcon(slide.category || '');

  const goTo = (idx: number) => {
    if (onGoTo) onGoTo(idx);
    else {
      setInternalCurrent(idx);
      resetTimer();
    }
  };

  const content = (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${carouselBg(
        slide.category
      )} p-5 sm:p-6 text-white transition-all duration-500`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="relative flex items-start gap-4 min-h-[88px]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs uppercase tracking-[0.18em] text-white/70">
            Featured Event
          </div>
          <div className="mt-1 text-lg sm:text-xl font-semibold leading-tight">
            {slide.title}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80">
            <span>{slide.dateFormatted}</span>
            <span>{slide.location}</span>
          </div>
        </div>
      </div>
      <div className="relative mt-4 flex items-center justify-between">
        <div
          className="flex gap-1.5"
          role="tablist"
          aria-label="Featured event slides"
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goTo(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === current}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'w-6 bg-white'
                  : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-white/50">
          {current + 1} / {slides.length}
        </div>
      </div>
    </div>
  );

  if (slide.href) {
    return (
      <Link
        href={slide.href}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-2xl"
      >
        {content}
      </Link>
    );
  }
  return content;
}

/* ─── Standalone carousel block (homepage) ─── */
export function EventCarouselBlock({
  items,
  controlledIndex,
  onGoTo,
}: { items: EventDateBarItem[] } & CarouselControlProps) {
  const upcoming = items.filter((i) => i.status === 'upcoming');
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-14 mt-8">
      <div className="rounded-[24px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
        <div className="px-6 sm:px-8 py-5 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">
            Featured Events
          </h2>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {upcoming.length} upcoming
          </span>
        </div>
        <div className="p-4 sm:p-6">
          <EventCarousel
            items={items}
            controlledIndex={controlledIndex}
            onGoTo={onGoTo}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Dynamic tech divider ─── */
function TechDivider({ onCycle }: { onCycle?: () => void }) {
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pulseRef.current;
    if (!el || !onCycle) return;
    const handler = () => onCycle();
    el.addEventListener('animationiteration', handler);
    return () => el.removeEventListener('animationiteration', handler);
  }, [onCycle]);

  return (
    <div
      className="relative max-w-6xl mx-auto px-6 sm:px-14 my-4 h-10 flex items-center overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent translate-y-[2px]" />
      </div>
      {/* Scan pulse */}
      <div className="absolute inset-y-0 left-0 w-full">
        <div
          ref={pulseRef}
          className="scan-pulse absolute top-1/2 -translate-y-1/2 h-4 w-24 rounded-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent blur-sm"
        />
      </div>
      {/* Dot accents */}
      <div className="relative flex w-full items-center justify-between">
        <div className="h-1.5 w-1.5 rounded-full bg-sky-500/60" />
        <div className="h-1 w-1 rounded-full bg-indigo-400/40" />
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
        <div className="h-1 w-1 rounded-full bg-cyan-400/40" />
        <div className="h-1 w-1 rounded-full bg-amber-400/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-sky-500/60" />
      </div>
      <style jsx>{`
        @keyframes scan-h {
          0% {
            left: -10%;
          }
          50% {
            left: 90%;
          }
          100% {
            left: -10%;
          }
        }
        .scan-pulse {
          animation: scan-h 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

/* ─── Event Calendar (list-only with dynamic header) ─── */
export function EventCalendar({
  title = 'Event Calendar',
  items,
  onCycle,
}: EventDateBarsProps & { onCycle?: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState<boolean[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, idx) => {
            setTimeout(() => {
              setRevealed((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }, idx * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <TechDivider onCycle={onCycle} />
      <section
        ref={sectionRef}
        className="max-w-6xl mx-auto px-6 sm:px-14 mb-12"
      >
        <div className="rounded-[24px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
          <div className="px-6 sm:px-8 py-5 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">
              {title}
            </h2>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">
              {items.length} events
            </span>
          </div>

          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {items.map((item, idx) => {
              const Icon = categoryIcon(item.category || '');
              const isVisible = revealed[idx] ?? false;
              const inner = (
                <div
                  className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 border-l-[3px] ${accentColor(
                    item.category
                  )} transition-all duration-500 ${
                    item.href
                      ? 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer'
                      : ''
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 0.4s ease ${
                      idx * 0.08
                    }s, transform 0.4s ease ${idx * 0.08}s`,
                  }}
                >
                  <div
                    className={`hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBg(
                      item.category
                    )}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span
                      className={`block text-base font-medium text-zinc-950 dark:text-zinc-50 leading-snug ${
                        item.href
                          ? 'group-hover/datebar:text-sky-700 dark:group-hover/datebar:text-sky-300'
                          : ''
                      }`}
                    >
                      {item.title}
                    </span>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-0.5">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-300 ease-out group-hover/datebar:text-zinc-700 dark:group-hover/datebar:text-zinc-200">
                        {item.dateFormatted}
                      </span>
                      <span
                        className="text-xs text-zinc-400 dark:text-zinc-500"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 truncate transition-colors duration-300 delay-75 ease-out group-hover/datebar:text-zinc-600 dark:group-hover/datebar:text-zinc-300">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusClasses(
                      item.status
                    )}`}
                  >
                    {statusLabel(item.status)}
                  </span>
                </div>
              );

              if (item.href) {
                return (
                  <Link
                    key={`${item.title}-${item.dateFormatted}`}
                    href={item.href}
                    className="group/datebar block focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <div
                  key={`${item.title}-${item.dateFormatted}`}
                  className="group/datebar"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Legacy combined export ─── */
export function EventDateBars({ title, items }: EventDateBarsProps) {
  const slides = getSlides(items);
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % (slides.length || 1));
  }, [slides.length]);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  return (
    <>
      <EventCarouselBlock
        items={items}
        controlledIndex={current}
        onGoTo={goTo}
      />
      <EventCalendar title={title} items={items} onCycle={advance} />
    </>
  );
}
