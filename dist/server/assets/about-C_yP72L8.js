import { V as jsxRuntimeExports } from "./server-8JVr5XlA.js";
import { c as createLucideIcon, m as motion, L as Link, P as Phone, M as Mail, a as MapPin } from "./router-CgOxyFIj.js";
import { S as Sparkles, C as Check } from "./sparkles-BazL-mS9.js";
import { C as Clock } from "./clock-CZ6wYpG4.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode);
const offers = ["Optimum Authorized Reseller services", "EarthLink Authorized Reseller services", "DirecTV Dealer", "24/7 Customer Support", "Frontier Authorized Sales Agent", "New Cable Connection", "Satellite Internet Connection", "Fiber Internet Connection"];
const partners = [{
  name: "Optimum",
  role: "Authorized Reseller"
}, {
  name: "Frontier",
  role: "Authorized Sales Agent"
}, {
  name: "EarthLink",
  role: "Reseller"
}, {
  name: "DirecTV",
  role: "Dealer"
}, {
  name: "Kinetic",
  role: "Authorized Agent"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-gradient-hero py-24 text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 top-0 h-96 w-96 rounded-full bg-yellow/20 blur-3xl animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-pink/30 blur-3xl animate-float", style: {
          animationDelay: "1.5s"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur", children: "About Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "mt-5 text-5xl font-bold md:text-6xl", children: [
          "Welcome to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow", children: "AIB Communications" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.3
        }, className: "mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90", children: "We are on a mission to revolutionize your internet experience. Our team of passionate innovators is dedicated to providing cutting-edge internet services that not only meet, but exceed your expectations." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -40
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-pink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink", children: "Our Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold text-primary md:text-5xl", children: "A connected world where everyone thrives." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg leading-relaxed text-muted-foreground", children: "We envision a connected world where seamless internet connectivity empowers individuals and businesses to thrive. By harnessing the power of technology, we strive to create a digital landscape that is not just fast and reliable but also enriches your daily life." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden rounded-3xl bg-gradient-card p-10 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-full w-full text-yellow/80 animate-float", strokeWidth: 1 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          rotate: [0, 8, 0]
        }, transition: {
          duration: 4,
          repeat: Infinity
        }, className: "absolute -bottom-6 -left-6 rounded-2xl bg-pink p-4 text-pink-foreground shadow-pink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          y: [0, -10, 0]
        }, transition: {
          duration: 3,
          repeat: Infinity
        }, className: "absolute -right-4 top-8 rounded-2xl bg-yellow px-4 py-2 text-sm font-bold text-yellow-foreground shadow-card", children: "Always On" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-primary md:text-5xl", children: "What We Offer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-muted-foreground", children: "A complete suite of connectivity services from the providers you trust." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: offers.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.05
      }, className: "flex items-center gap-3 rounded-xl bg-card p-4 shadow-card transition-all hover:translate-x-1 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-pink text-pink-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: o })
      ] }, o)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-primary md:text-5xl", children: "Our Partners" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-muted-foreground", children: "Discover the finest internet and TV service options delivered right to your doorstep. AIB Communications partners with industry-leading providers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-5", children: partners.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, whileHover: {
        y: -8,
        rotate: -2
      }, className: "rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-shadow hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-primary", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs font-semibold uppercase tracking-wider text-pink", children: p.role })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero py-20 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mb-4 h-12 w-12 text-yellow animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold", children: "24/7 Availability" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-primary-foreground/85", children: "We are available around the clock. Whether you need technical support, want to set up a new service, or have questions about your existing plan, our team is always ready to help." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-3 text-sm font-bold text-yellow-foreground shadow-card transition-all hover:scale-105", children: "Contact Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, className: "rounded-3xl bg-white/10 p-8 backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-5 text-sm font-bold uppercase tracking-widest text-yellow", children: "Contact Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-yellow" }),
            " (888) 477-6212"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-yellow" }),
            " support@hopkinstek.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-5 w-5 text-yellow" }),
            " 9801 Westheimer Rd Ste 205-10, Houston, TX 77042"
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
