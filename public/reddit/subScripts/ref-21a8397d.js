import { d as t, w as i, t as s, e, A as o } from './icon-f94fc1dd.js';
const n = (t, i) => {
    var s, e;
    const o = t._$AN;
    if (void 0 === o) return !1;
    for (const t of o)
      null === (e = (s = t)._$AO) || void 0 === e || e.call(s, i, !1), n(t, i);
    return !0;
  },
  l = (t) => {
    let i, s;
    do {
      if (void 0 === (i = t._$AM)) break;
      (s = i._$AN), s.delete(t), (t = i);
    } while (0 === (null == s ? void 0 : s.size));
  },
  h = (t) => {
    for (let i; (i = t._$AM); t = i) {
      let s = i._$AN;
      if (void 0 === s) i._$AN = s = new Set();
      else if (s.has(t)) break;
      s.add(t), r(i);
    }
  };
function d(t) {
  void 0 !== this._$AN ? (l(this), (this._$AM = t), h(this)) : (this._$AM = t);
}
function c(t, i = !1, s = 0) {
  const e = this._$AH,
    o = this._$AN;
  if (void 0 !== o && 0 !== o.size)
    if (i)
      if (Array.isArray(e))
        for (let t = s; t < e.length; t++) n(e[t], !1), l(e[t]);
      else null != e && (n(e, !1), l(e));
    else n(this, t);
}
const r = (t) => {
  var i, e, o, n;
  t.type == s.CHILD &&
    ((null !== (i = (o = t)._$AP) && void 0 !== i) || (o._$AP = c),
    (null !== (e = (n = t)._$AQ) && void 0 !== e) || (n._$AQ = d));
};
class v extends t {
  constructor() {
    super(...arguments), (this._$AN = void 0);
  }
  _$AT(t, i, s) {
    super._$AT(t, i, s), h(this), (this.isConnected = t._$AU);
  }
  _$AO(t, i = !0) {
    var s, e;
    t !== this.isConnected &&
      ((this.isConnected = t),
      t
        ? null === (s = this.reconnected) || void 0 === s || s.call(this)
        : null === (e = this.disconnected) || void 0 === e || e.call(this)),
      i && (n(this, t), l(this));
  }
  setValue(t) {
    if (i(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const i = [...this._$Ct._$AH];
      (i[this._$Ci] = t), this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}
const a = () => new $();
class $ {}
const _ = new WeakMap(),
  u = e(
    class extends v {
      render(t) {
        return o;
      }
      update(t, [i]) {
        var s;
        const e = i !== this.G;
        return (
          e && void 0 !== this.G && this.ot(void 0),
          (e || this.rt !== this.lt) &&
            ((this.G = i),
            (this.ct =
              null === (s = t.options) || void 0 === s ? void 0 : s.host),
            this.ot((this.lt = t.element))),
          o
        );
      }
      ot(t) {
        var i;
        if ('function' == typeof this.G) {
          const s = null !== (i = this.ct) && void 0 !== i ? i : globalThis;
          let e = _.get(s);
          void 0 === e && ((e = new WeakMap()), _.set(s, e)),
            void 0 !== e.get(this.G) && this.G.call(this.ct, void 0),
            e.set(this.G, t),
            void 0 !== t && this.G.call(this.ct, t);
        } else this.G.value = t;
      }
      get rt() {
        var t, i, s;
        return 'function' == typeof this.G
          ? null ===
              (i = _.get(
                null !== (t = this.ct) && void 0 !== t ? t : globalThis
              )) || void 0 === i
            ? void 0
            : i.get(this.G)
          : null === (s = this.G) || void 0 === s
            ? void 0
            : s.value;
      }
      disconnected() {
        this.rt === this.lt && this.ot(void 0);
      }
      reconnected() {
        this.ot(this.lt);
      }
    }
  );
export { v as c, a as e, u as n };
//# sourceMappingURL=ref-21a8397d.js.map
