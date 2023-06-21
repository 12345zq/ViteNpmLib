import { defineComponent as a, openBlock as d, createElementBlock as l, normalizeClass as r, renderSlot as _ } from "vue";
const u = {
  name: "JkButton"
}, p = /* @__PURE__ */ a({
  ...u,
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    return (e, n) => (d(), l("button", {
      class: r(["muk-btn", [t.size, t.type]])
    }, [
      _(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const i = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [c, s] of e)
    n[c] = s;
  return n;
}, o = /* @__PURE__ */ i(p, [["__scopeId", "data-v-bc0d15d3"]]), f = [o], y = {
  install(t) {
    f.forEach((e) => {
      t.component(e.name, o);
    });
  }
};
export {
  o as Button,
  y as default
};
