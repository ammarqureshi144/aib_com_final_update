import { V as jsxRuntimeExports } from "./server-8JVr5XlA.js";
import { c as createLucideIcon, m as motion, L as Link } from "./router-CgOxyFIj.js";
import { H as Headphones } from "./headphones-BbbV_zth.js";
import { W as Wifi, T as Tv, Z as Zap } from "./zap-BiLwVWSt.js";
import { A as ArrowRight } from "./arrow-right-CbOjT-mN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    { d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z", key: "trhst0" }
  ],
  ["path", { d: "M17 21v-2", key: "ds4u3f" }],
  ["path", { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10", key: "1mo9zo" }],
  ["path", { d: "M21 21v-2", key: "eo0ou" }],
  ["path", { d: "M3 5V3", key: "1k5hjh" }],
  [
    "path",
    { d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z", key: "1dd30t" }
  ],
  ["path", { d: "M7 5V3", key: "1t1388" }]
];
const Cable = createLucideIcon("cable", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",
      key: "dzhfyz"
    }
  ],
  ["path", { d: "M16.5 7.5 19 5", key: "1ltcjm" }],
  [
    "path",
    {
      d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",
      key: "nfoymv"
    }
  ],
  ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }],
  [
    "path",
    {
      d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",
      key: "nv9zqy"
    }
  ]
];
const Satellite = createLucideIcon("satellite", __iconNode);
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
const core = [{
  icon: Headphones,
  title: "24/7 Customer Support",
  desc: "Access our 24/7 customer support for prompt assistance with any internet-related issues you may encounter. Just give us a call — we have got you covered.",
  color: "from-pink to-pink/70"
}, {
  icon: Wifi,
  title: "Get New Internet",
  desc: "Easily obtain a new internet connection at your doorstep by contacting us to check availability in your area.",
  color: "from-primary to-primary/70"
}, {
  icon: Cable,
  title: "Get New Cable",
  desc: "Secure a new cable connection conveniently delivered to your doorstep by simply contacting us to arrange installation in your area.",
  color: "from-yellow to-yellow/70"
}];
const partners = [{
  name: "Optimum",
  role: "Authorized Reseller",
  desc: "Stay connected seamlessly with high-speed internet, ensuring smooth live streaming on platforms like Facebook, Instagram, and TikTok. Enjoy lightning-fast uploads and downloads, along with unlimited streaming without buffering delays.",
  icon: Wifi
}, {
  name: "DirecTV",
  role: "Dealer",
  desc: "Stay connected seamlessly with premium TV packages and high-speed companion internet for smooth streaming and lightning-fast uploads and downloads — without buffering.",
  icon: Tv
}, {
  name: "Frontier",
  role: "Authorized Sales Agent",
  desc: "Cutting-edge features like voice control and seamless integration with smart-home devices for a futuristic TV experience. Stunning HD visuals deliver a cinematic viewing experience.",
  icon: Satellite
}, {
  name: "EarthLink",
  role: "Reseller",
  desc: "Reliable nationwide fiber and DSL internet — privacy-focused, no data caps on most plans, with friendly U.S.-based support.",
  icon: Zap
}, {
  name: "Kinetic",
  role: "Authorized Agent",
  desc: "Whole-home Wi-Fi powered by next-generation fiber — ideal for streaming, gaming, and remote work in supported regions.",
  icon: Wifi
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-gradient-hero py-24 text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink/30 blur-3xl animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-10 bottom-10 h-80 w-80 rounded-full bg-yellow/20 blur-3xl animate-float", style: {
          animationDelay: "2s"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur", children: "What We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "mt-5 text-5xl font-bold md:text-6xl", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow", children: "Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.3
        }, className: "mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85", children: "High-speed internet, premium cable TV, and around-the-clock support from the providers you already trust." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, variants: fadeUp, className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-primary md:text-5xl", children: "Core Offerings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-muted-foreground", children: "Everything you need to stay connected — delivered to your doorstep." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: core.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.12,
        duration: 0.6
      }, whileHover: {
        y: -8
      }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-white shadow-pink`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-xl font-bold", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: c.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink/10 transition-transform group-hover:scale-150" })
      ] }, c.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, variants: fadeUp, className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-pink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink", children: "Our Partners" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold text-primary md:text-5xl", children: "Service Details by Partner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-muted-foreground", children: "AIB Communications is proud to be an authorized agent and reseller for these leading providers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: partners.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: i % 2 === 0 ? -40 : 40
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08,
        duration: 0.6
      }, className: "group rounded-2xl bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-card text-primary-foreground transition-transform group-hover:rotate-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-pink", children: p.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: p.desc })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, className: "rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { className: "mb-4 h-10 w-10 text-yellow animate-float" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-2xl font-bold", children: "Customer Support" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/85", children: "Our dedicated customer support team is available 24/7 to assist our internet and TV users. You can count on us to provide timely and reliable support whenever you need help with your services." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.15
        }, className: "rounded-3xl bg-gradient-pink p-10 text-pink-foreground shadow-pink", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mb-4 h-10 w-10 animate-float" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-2xl font-bold", children: "New Internet Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pink-foreground/90", children: "Internet-related issues can be frustrating, so we prioritize swift problem resolution. We implement a robust ticketing system, track resolution times, and empower our team with the tools needed to diagnose and address connectivity or service problems efficiently." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, whileInView: {
        opacity: 1
      }, viewport: {
        once: true
      }, className: "mt-16 rounded-3xl border border-border bg-card p-10 text-center shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-primary", children: "Ready to upgrade your connection?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Get a free, no-obligation quote tailored to your address." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-card transition-all hover:scale-105 hover:bg-primary/90", children: [
          "Send Me a Quote ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ServicesPage as component
};
