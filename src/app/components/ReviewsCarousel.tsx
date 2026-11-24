'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const SPEED = 28; // auto-scroll speed in px per second
const RESUME_AFTER = 3000; // ms of no interaction before auto-scroll resumes

/**
 * Horizontally scrollable review strip. It drifts slowly left to right on its own, can be
 * swiped on phones or moved with the arrow buttons, and pauses while a mouse is over it or
 * the visitor is interacting. `children` must contain the cards twice, the second copy
 * wrapped in an element with `data-loop-copy`, so the strip can loop without a visible jump.
 */
export default function ReviewsCarousel({
  children,
  label,
  prevLabel,
  nextLabel,
}: {
  children: React.ReactNode;
  label: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const touching = useRef(false);
  const focused = useRef(false);
  const pausedUntil = useRef(0);

  /** Distance from the first card to the start of the second copy: one full loop. */
  const period = useCallback(() => {
    const el = ref.current;
    const copy = el?.querySelector<HTMLElement>('[data-loop-copy]');
    const first = el?.querySelector<HTMLElement>('[data-loop-track] > *');
    if (!el || !copy || !first || copy.offsetParent === null) return 0;
    return copy.offsetLeft - first.offsetLeft;
  }, []);

  /**
   * Keeps the scroll position near the middle (between half a copy and one and a half copies)
   * by jumping exactly one copy, which looks identical. It only runs while the strip is idle:
   * changing the position during a swipe or an arrow's smooth scroll would cut it short.
   * The half-copy margin leaves several cards of room for swipes and arrow presses.
   */
  const wrap = useCallback(() => {
    const el = ref.current;
    const p = period();
    if (!el || p <= 0) return;
    if (el.scrollLeft < p / 2) el.scrollLeft += p;
    else if (el.scrollLeft > (p * 3) / 2) el.scrollLeft -= p;
  }, [period]);

  const pause = () => {
    pausedUntil.current = performance.now() + RESUME_AFTER;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Start on the second copy (it looks identical) so the strip can move right straight away.
    const p = period();
    if (p > 0) el.scrollLeft = p;
    if (reduced) return;

    let raf = 0;
    let last = performance.now();
    let carry = 0;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 100);
      last = now;
      const idle = !hovering.current && !touching.current && !focused.current && now > pausedUntil.current;
      if (idle && document.visibilityState === 'visible') {
        wrap();
        carry += (SPEED * dt) / 1000;
        const step = Math.floor(carry);
        if (step > 0) {
          carry -= step;
          el.scrollLeft -= step; // content moves left to right
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [period, wrap]);

  const move = (dir: -1 | 1) => {
    const el = ref.current;
    const card = el?.querySelector<HTMLElement>('[data-loop-track] > *');
    if (!el || !card) return;
    pause();
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' });
  };

  // Phones: arrows sit in a row under the strip so they never cover review text.
  // Tablets and up: they float on either side of the strip.
  const arrow = 'sm:absolute sm:top-1/2 sm:-translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors';

  return (
    <div className="relative">
      <div
        ref={ref}
        className="reviews-scroller overflow-x-auto"
        role="region"
        aria-label={label}
        tabIndex={0}
        onPointerEnter={(e) => {
          if (e.pointerType === 'mouse') hovering.current = true;
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === 'mouse') hovering.current = false;
        }}
        onTouchStart={() => {
          touching.current = true;
        }}
        onTouchEnd={() => {
          touching.current = false;
          pause();
        }}
        onTouchCancel={() => {
          touching.current = false;
          pause();
        }}
        onWheel={pause}
        onFocus={(e) => {
          // Only keyboard focus pauses it: a tap also focuses the strip on phones, and that
          // must not freeze it (the bug in the old CSS-only version).
          focused.current = e.currentTarget.matches(':focus-visible');
        }}
        onBlur={() => {
          focused.current = false;
          pause();
        }}
      >
        {children}
      </div>
      <div className="flex justify-between px-6 mt-5 sm:contents">
        <button type="button" onClick={() => move(-1)} className={`${arrow} sm:left-4`} aria-label={prevLabel}>
          <Icon name="ChevronLeftIcon" size={20} variant="outline" />
        </button>
        <button type="button" onClick={() => move(1)} className={`${arrow} sm:right-4`} aria-label={nextLabel}>
          <Icon name="ChevronRightIcon" size={20} variant="outline" />
        </button>
      </div>
    </div>
  );
}
