import { V as jsxRuntimeExports } from "./server-8JVr5XlA.js";
import { m as motion } from "./router-CgOxyFIj.js";
function LegalLayout({
  eyebrow,
  title,
  updated,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { x: [0, 50, 0], y: [0, -30, 0] },
          transition: { duration: 14, repeat: Infinity },
          className: "absolute -left-20 top-0 h-72 w-72 rounded-full bg-pink/30 blur-3xl"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { x: [0, -40, 0], y: [0, 40, 0] },
          transition: { duration: 18, repeat: Infinity },
          className: "absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow/20 blur-3xl"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-4 text-center sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            className: "inline-block rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em]",
            children: eyebrow
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "text-shadow-lg mt-5 text-4xl font-extrabold sm:text-6xl",
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.25 },
            className: "mt-4 text-sm text-primary-foreground/80",
            children: updated
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "mx-auto max-w-3xl px-4 py-16 sm:px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 text-[15px] leading-relaxed text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-primary [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-pink [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5", children })
      }
    )
  ] });
}
export {
  LegalLayout as L
};
