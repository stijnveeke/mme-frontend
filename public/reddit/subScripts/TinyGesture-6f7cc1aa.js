class t {
  constructor(e, o) {
    (this.element = e),
      (this.touch1 = null),
      (this.touch2 = null),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.touchEndX = null),
      (this.touchEndY = null),
      (this.touchMove1 = null),
      (this.touchMove2 = null),
      (this.touchMoveX = null),
      (this.touchMoveY = null),
      (this.velocityX = null),
      (this.velocityY = null),
      (this.longPressTimer = null),
      (this.doubleTapTimer = null),
      (this.doubleTapWaiting = !1),
      (this.thresholdX = 0),
      (this.thresholdY = 0),
      (this.disregardVelocityThresholdX = 0),
      (this.disregardVelocityThresholdY = 0),
      (this.swipingHorizontal = !1),
      (this.swipingVertical = !1),
      (this.swipingDirection = null),
      (this.swipedHorizontal = !1),
      (this.swipedVertical = !1),
      (this.originalDistance = null),
      (this.newDistance = null),
      (this.scale = null),
      (this.originalAngle = null),
      (this.newAngle = null),
      (this.rotation = null),
      (this.handlers = {
        panstart: [],
        panmove: [],
        panend: [],
        swipeleft: [],
        swiperight: [],
        swipeup: [],
        swipedown: [],
        tap: [],
        doubletap: [],
        longpress: [],
        pinch: [],
        pinchend: [],
        rotate: [],
        rotateend: []
      }),
      (this._onTouchStart = this.onTouchStart.bind(this)),
      (this._onTouchMove = this.onTouchMove.bind(this)),
      (this._onTouchEnd = this.onTouchEnd.bind(this)),
      (this.opts = Object.assign({}, t.defaults, o)),
      this.element.addEventListener('touchstart', this._onTouchStart, i),
      this.element.addEventListener('touchmove', this._onTouchMove, i),
      this.element.addEventListener('touchend', this._onTouchEnd, i),
      this.opts.mouseSupport &&
        !('ontouchstart' in window) &&
        (this.element.addEventListener('mousedown', this._onTouchStart, i),
        document.addEventListener('mousemove', this._onTouchMove, i),
        document.addEventListener('mouseup', this._onTouchEnd, i));
  }
  destroy() {
    var t, i;
    this.element.removeEventListener('touchstart', this._onTouchStart),
      this.element.removeEventListener('touchmove', this._onTouchMove),
      this.element.removeEventListener('touchend', this._onTouchEnd),
      this.element.removeEventListener('mousedown', this._onTouchStart),
      document.removeEventListener('mousemove', this._onTouchMove),
      document.removeEventListener('mouseup', this._onTouchEnd),
      clearTimeout(
        null !== (t = this.longPressTimer) && void 0 !== t ? t : void 0
      ),
      clearTimeout(
        null !== (i = this.doubleTapTimer) && void 0 !== i ? i : void 0
      );
  }
  on(t, i) {
    if (this.handlers[t])
      return (
        this.handlers[t].push(i),
        { type: t, fn: i, cancel: () => this.off(t, i) }
      );
  }
  off(t, i) {
    if (this.handlers[t]) {
      const e = this.handlers[t].indexOf(i);
      -1 !== e && this.handlers[t].splice(e, 1);
    }
  }
  fire(t, i) {
    for (let e = 0; e < this.handlers[t].length; e++) this.handlers[t][e](i);
  }
  onTouchStart(t) {
    var i,
      e,
      o,
      s,
      h,
      n,
      l,
      u,
      r,
      d,
      c,
      a,
      v,
      p,
      m,
      T,
      g,
      M,
      w,
      f,
      X,
      y,
      Y,
      E,
      b,
      S;
    let V = !1;
    if ('mousedown' !== t.type) {
      if (
        (this.touch1 || ((this.touch1 = t.changedTouches[0]), (V = !0)),
        ((V && t.changedTouches.length > 1) || !V) && !this.touch2)
      )
        return (
          (this.touch2 =
            [...t.changedTouches].find((t) => {
              var i;
              return (
                t.identifier !==
                (null === (i = this.touch1) || void 0 === i
                  ? void 0
                  : i.identifier)
              );
            }) || null),
          (this.originalDistance = Math.sqrt(
            Math.pow(
              (null !==
                (e =
                  null === (i = this.touch2) || void 0 === i
                    ? void 0
                    : i.screenX) && void 0 !== e
                ? e
                : 0) -
                (null !==
                  (n =
                    null !==
                      (s =
                        null === (o = this.touchMove1) || void 0 === o
                          ? void 0
                          : o.screenX) && void 0 !== s
                      ? s
                      : null === (h = this.touch1) || void 0 === h
                        ? void 0
                        : h.screenX) && void 0 !== n
                  ? n
                  : 0),
              2
            ) +
              Math.pow(
                (null !==
                  (u =
                    null === (l = this.touch2) || void 0 === l
                      ? void 0
                      : l.screenY) && void 0 !== u
                  ? u
                  : 0) -
                  (null !==
                    (a =
                      null !==
                        (d =
                          null === (r = this.touchMove1) || void 0 === r
                            ? void 0
                            : r.screenY) && void 0 !== d
                        ? d
                        : null === (c = this.touch1) || void 0 === c
                          ? void 0
                          : c.screenY) && void 0 !== a
                    ? a
                    : 0),
                2
              )
          )),
          void (this.originalAngle =
            Math.atan2(
              (null !==
                (p =
                  null === (v = this.touch2) || void 0 === v
                    ? void 0
                    : v.screenY) && void 0 !== p
                ? p
                : 0) -
                (null !==
                  (M =
                    null !==
                      (T =
                        null === (m = this.touchMove1) || void 0 === m
                          ? void 0
                          : m.screenY) && void 0 !== T
                      ? T
                      : null === (g = this.touch1) || void 0 === g
                        ? void 0
                        : g.screenY) && void 0 !== M
                  ? M
                  : 0),
              (null !==
                (f =
                  null === (w = this.touch2) || void 0 === w
                    ? void 0
                    : w.screenX) && void 0 !== f
                ? f
                : 0) -
                (null !==
                  (E =
                    null !==
                      (y =
                        null === (X = this.touchMove1) || void 0 === X
                          ? void 0
                          : X.screenX) && void 0 !== y
                      ? y
                      : null === (Y = this.touch1) || void 0 === Y
                        ? void 0
                        : Y.screenX) && void 0 !== E
                  ? E
                  : 0)
            ) /
            (Math.PI / 180))
        );
      if (!V) return;
    }
    (V || 'mousedown' === t.type) &&
      ((this.thresholdX = this.opts.threshold('x', this)),
      (this.thresholdY = this.opts.threshold('y', this)),
      (this.disregardVelocityThresholdX = this.opts.disregardVelocityThreshold(
        'x',
        this
      )),
      (this.disregardVelocityThresholdY = this.opts.disregardVelocityThreshold(
        'y',
        this
      )),
      (this.touchStartX =
        'mousedown' === t.type
          ? t.screenX
          : (null === (b = this.touch1) || void 0 === b ? void 0 : b.screenX) ||
            0),
      (this.touchStartY =
        'mousedown' === t.type
          ? t.screenY
          : (null === (S = this.touch1) || void 0 === S ? void 0 : S.screenY) ||
            0),
      (this.touchMoveX = null),
      (this.touchMoveY = null),
      (this.touchEndX = null),
      (this.touchEndY = null),
      (this.swipingDirection = null),
      (this.longPressTimer = setTimeout(
        () => this.fire('longpress', t),
        this.opts.longPressTime
      )),
      (this.scale = 1),
      (this.rotation = 0),
      this.fire('panstart', t));
  }
  onTouchMove(t) {
    var i, e, o, s, h, n, l, u, r, d, c, a, v;
    if (
      'mousemove' === t.type &&
      (!this.touchStartX || null !== this.touchEndX)
    )
      return;
    let p, m;
    if (
      ('mousemove' !== t.type &&
        ((p = [...t.changedTouches].find((t) => {
          var i;
          return (
            t.identifier ===
            (null === (i = this.touch1) || void 0 === i ? void 0 : i.identifier)
          );
        })),
        (this.touchMove1 = p || this.touchMove1),
        (m = [...t.changedTouches].find((t) => {
          var i;
          return (
            t.identifier ===
            (null === (i = this.touch2) || void 0 === i ? void 0 : i.identifier)
          );
        })),
        (this.touchMove2 = m || this.touchMove2)),
      'mousemove' === t.type || p)
    ) {
      const u =
        ('mousemove' === t.type
          ? t.screenX
          : null !== (i = null == p ? void 0 : p.screenX) && void 0 !== i
            ? i
            : 0) - (null !== (e = this.touchStartX) && void 0 !== e ? e : 0);
      (this.velocityX =
        u - (null !== (o = this.touchMoveX) && void 0 !== o ? o : 0)),
        (this.touchMoveX = u);
      const r =
        ('mousemove' === t.type
          ? t.screenY
          : null !== (s = null == p ? void 0 : p.screenY) && void 0 !== s
            ? s
            : 0) - (null !== (h = this.touchStartY) && void 0 !== h ? h : 0);
      (this.velocityY =
        r - (null !== (n = this.touchMoveY) && void 0 !== n ? n : 0)),
        (this.touchMoveY = r);
      const d = Math.abs(this.touchMoveX),
        c = Math.abs(this.touchMoveY);
      (this.swipingHorizontal = d > this.thresholdX),
        (this.swipingVertical = c > this.thresholdY),
        (this.swipingDirection =
          d > c
            ? this.swipingHorizontal
              ? 'horizontal'
              : 'pre-horizontal'
            : this.swipingVertical
              ? 'vertical'
              : 'pre-vertical'),
        Math.max(d, c) > this.opts.pressThreshold &&
          clearTimeout(
            null !== (l = this.longPressTimer) && void 0 !== l ? l : void 0
          ),
        this.fire('panmove', t);
    }
    'mousemove' !== t.type &&
      null != this.touchMove1 &&
      null != this.touchMove2 &&
      ((this.newDistance = Math.sqrt(
        Math.pow(this.touchMove2.screenX - this.touchMove1.screenX, 2) +
          Math.pow(this.touchMove2.screenY - this.touchMove1.screenY, 2)
      )),
      (this.scale =
        this.newDistance /
        (null !== (u = this.originalDistance) && void 0 !== u ? u : 0)),
      this.fire('pinch', t),
      (this.newAngle =
        Math.atan2(
          (null !== (r = this.touchMove2.screenY) && void 0 !== r ? r : 0) -
            (null !== (d = this.touchMove1.screenY) && void 0 !== d ? d : 0),
          (null !== (c = this.touchMove2.screenX) && void 0 !== c ? c : 0) -
            (null !== (a = this.touchMove1.screenX) && void 0 !== a ? a : 0)
        ) /
        (Math.PI / 180)),
      (this.rotation =
        this.newAngle -
        (null !== (v = this.originalAngle) && void 0 !== v ? v : 0)),
      this.fire('rotate', t));
  }
  onTouchEnd(t) {
    var i, e, o, s, h, n, l, u, r, d;
    let c;
    if (
      ('mouseup' !== t.type &&
        ((c = [...t.changedTouches].find((t) => {
          var i;
          return (
            t.identifier ===
            (null === (i = this.touch1) || void 0 === i ? void 0 : i.identifier)
          );
        })),
        [...t.touches].find((t) => {
          var i;
          return (
            t.identifier ===
            (null === (i = this.touch1) || void 0 === i ? void 0 : i.identifier)
          );
        }) || ((this.touch1 = null), (this.touchMove1 = null)),
        [...t.touches].find((t) => {
          var i;
          return (
            t.identifier ===
            (null === (i = this.touch2) || void 0 === i ? void 0 : i.identifier)
          );
        }) || ((this.touch2 = null), (this.touchMove2 = null))),
      'mouseup' !== t.type || (this.touchStartX && null === this.touchEndX))
    ) {
      if ('mouseup' === t.type || c) {
        (this.touchEndX =
          'mouseup' === t.type
            ? t.screenX
            : null !== (i = null == c ? void 0 : c.screenX) && void 0 !== i
              ? i
              : 0),
          (this.touchEndY =
            'mouseup' === t.type
              ? t.screenY
              : null !== (e = null == c ? void 0 : c.screenY) && void 0 !== e
                ? e
                : 0),
          this.fire('panend', t),
          clearTimeout(
            null !== (o = this.longPressTimer) && void 0 !== o ? o : void 0
          );
        const a =
            this.touchEndX -
            (null !== (s = this.touchStartX) && void 0 !== s ? s : 0),
          v = Math.abs(a),
          p =
            this.touchEndY -
            (null !== (h = this.touchStartY) && void 0 !== h ? h : 0),
          m = Math.abs(p),
          T = Math.sqrt(Math.pow(a, 2) + Math.pow(p, 2)),
          g = Math.abs(T),
          M = m / v;
        v > this.thresholdX ||
        m > this.thresholdY ||
        (this.opts.diagonalSwipes &&
          (g > this.thresholdX || g > this.thresholdY))
          ? ((this.swipedHorizontal =
              v > this.thresholdX ||
              (this.opts.diagonalSwipes && g > this.thresholdX)),
            (this.swipedVertical =
              m > this.thresholdY ||
              (this.opts.diagonalSwipes && g > this.thresholdY)),
            (!this.opts.diagonalSwipes ||
              M < Math.tan(((45 - this.opts.diagonalLimit) * Math.PI) / 180) ||
              M > Math.tan(((45 + this.opts.diagonalLimit) * Math.PI) / 180)) &&
              (v >= m && (this.swipedVertical = !1),
              m > v && (this.swipedHorizontal = !1)),
            this.swipedHorizontal &&
              (a < 0
                ? ((null !== (n = this.velocityX) && void 0 !== n ? n : 0) <
                    -this.opts.velocityThreshold ||
                    T < -this.disregardVelocityThresholdX) &&
                  this.fire('swipeleft', t)
                : ((null !== (l = this.velocityX) && void 0 !== l ? l : 0) >
                    this.opts.velocityThreshold ||
                    T > this.disregardVelocityThresholdX) &&
                  this.fire('swiperight', t)),
            this.swipedVertical &&
              (p < 0
                ? ((null !== (u = this.velocityY) && void 0 !== u ? u : 0) <
                    -this.opts.velocityThreshold ||
                    T < -this.disregardVelocityThresholdY) &&
                  this.fire('swipeup', t)
                : ((null !== (r = this.velocityY) && void 0 !== r ? r : 0) >
                    this.opts.velocityThreshold ||
                    T > this.disregardVelocityThresholdY) &&
                  this.fire('swipedown', t)))
          : v < this.opts.pressThreshold &&
            m < this.opts.pressThreshold &&
            (this.doubleTapWaiting
              ? ((this.doubleTapWaiting = !1),
                clearTimeout(
                  null !== (d = this.doubleTapTimer) && void 0 !== d
                    ? d
                    : void 0
                ),
                this.fire('doubletap', t))
              : ((this.doubleTapWaiting = !0),
                (this.doubleTapTimer = setTimeout(
                  () => (this.doubleTapWaiting = !1),
                  this.opts.doubleTapTime
                )),
                this.fire('tap', t)));
      }
      this.touch1 ||
        this.touch2 ||
        (this.fire('pinchend', t),
        this.fire('rotateend', t),
        (this.originalDistance = null),
        (this.newDistance = null),
        (this.scale = null),
        (this.originalAngle = null),
        (this.newAngle = null),
        (this.rotation = null));
    }
  }
}
t.defaults = {
  threshold: (t, i) =>
    Math.max(
      25,
      Math.floor(
        0.15 *
          ('x' === t
            ? window.innerWidth || document.body.clientWidth
            : window.innerHeight || document.body.clientHeight)
      )
    ),
  velocityThreshold: 10,
  disregardVelocityThreshold: (t, i) =>
    Math.floor(
      0.5 * ('x' === t ? i.element.clientWidth : i.element.clientHeight)
    ),
  pressThreshold: 8,
  diagonalSwipes: !1,
  diagonalLimit: 15,
  longPressTime: 500,
  doubleTapTime: 300,
  mouseSupport: !0
};
let i = !1;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        i = { passive: !0 };
      }
    })
  );
} catch (t) {}
export { t as T };
//# sourceMappingURL=TinyGesture-6f7cc1aa.js.map
