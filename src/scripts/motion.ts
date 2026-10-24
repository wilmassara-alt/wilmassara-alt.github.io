import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const touch = window.matchMedia('(pointer: coarse)').matches;

if (!reduce && !touch) {
  const lenis = new Lenis({ lerp: 0.12, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Entrance: the parts of each section rise in sequence, once, as the section enters (IntersectionObserver, with a timed safety net)
const rises = gsap.utils.toArray<HTMLElement>('.rise, .rise-x');
const showAll = (els: HTMLElement[]) => els.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
if (reduce || !('IntersectionObserver' in window)) showAll(rises);
else {
  const groups = new Map<Element, HTMLElement[]>();
  rises.forEach((el) => { const sec = el.closest('section, footer, header, article') ?? document.body; if (!groups.has(sec)) groups.set(sec, []); groups.get(sec)!.push(el); });
  const pending = new Set(groups.keys());
  const play = (sec: Element) => { if (!pending.has(sec)) return; pending.delete(sec); gsap.to(groups.get(sec)!, { opacity: 1, x: 0, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.06, overwrite: true }); };
  const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { play(e.target); io.unobserve(e.target); } }), { rootMargin: '0px 0px -4% 0px', threshold: 0.01 });
  groups.forEach((_, sec) => io.observe(sec));
  // anything the observer never reached (printing, odd scrollers) is shown after a moment
  setTimeout(() => pending.forEach((sec) => play(sec)), 6000);
  // The hero's own parts rise at load
  const heroParts = document.querySelectorAll<HTMLElement>('[data-hero-half]');
  gsap.from(heroParts, { y: 30, opacity: 0, duration: 0.6, ease: 'power4.out', stagger: 0.08 });
}

window.addEventListener('load', () => ScrollTrigger.refresh());

// Hero reel: the strip passes through the sentence while the stage is held (scroll-linked, transform only)
const hero = document.querySelector<HTMLElement>('[data-hero]');
const strip = document.querySelector<HTMLElement>('[data-reel-strip]');
const captions = document.querySelector<HTMLElement>('[data-reel-captions]');
if (hero && strip) {
  const frames = strip.querySelectorAll<HTMLElement>('[data-reel-frame]');
  const caps: string[] = captions ? JSON.parse(captions.dataset.captions || '[]') : [];
  let last = -1;
  const update = () => {
    if (window.innerWidth < 768) { strip.style.transform = 'none'; return; }
    const rect = hero.getBoundingClientRect();
    const total = hero.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -rect.top / total));
    const step = (frames[0].offsetHeight + 24);
    const travel = step * (frames.length - 1);
    strip.style.transform = `translate3d(0, ${-(reduce ? Math.round(p * (frames.length - 1)) * step : p * travel)}px, 0)`;
    const idx = Math.min(frames.length - 1, Math.round(p * (frames.length - 1)));
    if (idx !== last && captions && caps[idx]) { captions.textContent = caps[idx]; last = idx; }
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

// Index of talks: the active row swaps the sticky photograph
const rows = document.querySelectorAll<HTMLButtonElement>('[data-index-row]');
const pics = document.querySelectorAll<HTMLElement>('[data-index-pic]');
const activate = (slug: string) => {
  rows.forEach((r) => r.setAttribute('aria-expanded', String(r.dataset.indexRow === slug)));
  pics.forEach((p) => { p.classList.toggle('opacity-100', p.dataset.indexPic === slug); p.classList.toggle('opacity-0', p.dataset.indexPic !== slug); });
};
rows.forEach((r) => {
  r.addEventListener('click', () => activate(r.dataset.indexRow!));
  r.addEventListener('mouseenter', () => activate(r.dataset.indexRow!));
  r.addEventListener('focus', () => activate(r.dataset.indexRow!));
});

// The live thing: pick the room
const tabs = document.querySelectorAll<HTMLButtonElement>('[data-room-tab]');
const panels = document.querySelectorAll<HTMLElement>('[data-room-panel]');
tabs.forEach((t) => t.addEventListener('click', () => {
  const i = t.dataset.roomTab;
  tabs.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.roomTab === i)));
  panels.forEach((p) => { p.hidden = p.dataset.roomPanel !== i; if (!p.hidden && !reduce) gsap.from(p.querySelectorAll('.pic, p, ul, a.btn'), { y: 18, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06 }); });
}));

// Reel modal
const reelBtns = document.querySelectorAll<HTMLElement>('[data-reel-open]');
const modal = document.getElementById('reel-modal');
if (modal && reelBtns.length) {
  const video = modal.querySelector('video') as HTMLVideoElement;
  const open = () => { modal.classList.remove('hidden'); modal.classList.add('flex'); document.documentElement.classList.add('lenis-stopped'); video.currentTime = 0; video.play().catch(() => {}); };
  const close = () => { video.pause(); modal.classList.add('hidden'); modal.classList.remove('flex'); document.documentElement.classList.remove('lenis-stopped'); };
  reelBtns.forEach((b) => b.addEventListener('click', open));
  modal.querySelectorAll('[data-reel-close]').forEach((b) => b.addEventListener('click', close));
  window.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

// One moving picture: a slow drift on the photographs as they pass
if (!reduce) gsap.utils.toArray<HTMLElement>('.pic-drift img').forEach((img) => {
  gsap.fromTo(img, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } });
});
