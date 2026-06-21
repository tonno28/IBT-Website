/* ==========================================================================
   IBT Coming-Soon — Motion-Orchestrierung
   1) Scroll-Reveal (transitions.dev "texts reveal" #18)
   2) Avatar-Group-Hover (transitions.dev #11) auf der Badge-Reihe
   Beides respektiert prefers-reduced-motion (CSS-Guard zeigt Inhalte sofort).
   ========================================================================== */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------- 1) Scroll-Reveal ----------------------------------------------
     Gruppen ([data-reveal-group]) bekommen pro Kind automatisch einen
     Stagger-Index --si und werden selbst zu Reveal-Elementen. Danach werden
     alle [data-reveal] beobachtet und einmalig eingeblendet, sobald sie in
     den Viewport scrollen. */
  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    Array.prototype.forEach.call(group.children, (child, i) => {
      child.setAttribute("data-reveal", "");
      child.style.setProperty("--si", i);
    });
  });

  const revealEls = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* -------- 2) Avatar-Group-Hover -----------------------------------------
     Distance-Falloff-Lift mit richtungsabhängigem Easing. Trick: die
     transition-timing-function wird inline gesetzt, BEVOR --shift/--scale
     geschrieben werden — so gilt clean ease-in beim Hover und federnder
     Overshoot beim Zurücksetzen, ohne zweite Transition-Deklaration. */
  document.querySelectorAll(".t-avatar-group").forEach((root) => {
    if (reduceMotion) return;
    const items = Array.prototype.slice.call(root.querySelectorAll(".t-avatar"));
    if (!items.length) return;

    const cs = getComputedStyle(document.documentElement);
    const num = (name, fb) => {
      const v = parseFloat(cs.getPropertyValue(name));
      return Number.isFinite(v) ? v : fb;
    };
    const ease = (name, fb) => cs.getPropertyValue(name).trim() || fb;

    const setShifts = (activeIdx, phase) => {
      const lift = num("--avatar-lift", -4);
      const falloff = num("--avatar-falloff", 0.45);
      const scale = num("--avatar-scale", 1.05);
      const tf =
        phase === "out"
          ? ease("--avatar-ease-out", "cubic-bezier(0.34, 3.85, 0.64, 1)")
          : ease("--avatar-ease-in", "cubic-bezier(0.22, 1, 0.36, 1)");

      items.forEach((el, i) => {
        el.style.transitionTimingFunction = tf;
        if (activeIdx == null) {
          el.style.setProperty("--shift", "0px");
          el.style.setProperty("--scale-active", "1");
          return;
        }
        const d = Math.abs(i - activeIdx);
        el.style.setProperty("--shift", (lift * Math.pow(falloff, d)).toFixed(3) + "px");
        el.style.setProperty("--scale-active", i === activeIdx ? String(scale) : "1");
      });
    };

    items.forEach((el, i) => {
      el.addEventListener("mouseenter", () => setShifts(i, "in"));
    });
    root.addEventListener("mouseleave", () => setShifts(null, "out"));
  });
})();
