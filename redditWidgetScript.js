!(function () {
  var t, e;
  ((e = t || (t = {})).Depth = 'depth'),
    (e.Theme = 'theme'),
    (e.Showmedia = 'showmedia'),
    (e.Showtitle = 'showtitle'),
    (e.Showedits = 'showedits'),
    (e.Created = 'created'),
    (e.Height = 'height'),
    (e.Context = 'context'),
    (e.Showmore = 'showmore'),
    (e.Embed = 'embed'),
    (e.UtmMedium = 'utm_medium'),
    (e.UtmSource = 'utm_source'),
    (e.UtmTerm = 'utm_term'),
    (e.UtmName = 'utm_name'),
    (e.RefSource = 'ref_source'),
    (e.Ref = 'ref'),
    (e.EnableShreddit = 'enableshreddit'),
    (e.Locale = 'locale'),
    (e.ShowUsername = 'showusername'),
    (e.EmbedHostUrl = 'embed_host_url'),
    (e.Snippet = 'snippet');
  var n =
      '.' +
      ['reddit-embed-bq', 'reddit-card', 'embedly-card', 'reddit-embed'].join(
        ', .'
      ),
    o = '[Reddit Widgets.js embed script]',
    r = 2e3,
    a = p(t.Depth),
    c = p(t.Theme),
    i = p(t.Showmedia),
    s = p(t.Showtitle),
    d = p(t.Showedits),
    u = p(t.Created),
    l = p(t.Height),
    m = p(t.EnableShreddit),
    h = p(t.Locale),
    w = p(t.ShowUsername),
    f = p(t.Snippet);
  function p(t) {
    return 'data-embed-'.concat(t);
  }
  function b(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
    return o;
  }
  function g(t) {
    if (Array.isArray(t)) return b(t);
  }
  function v(t) {
    if (
      ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
      null != t['@@iterator']
    )
      return Array.from(t);
  }
  function S() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function y(t, e) {
    if (t) {
      if ('string' == typeof t) return b(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        'Object' === n && t.constructor && (n = t.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(n)
          : 'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? b(t, e)
            : void 0
      );
    }
  }
  function A(t) {
    return g(t) || v(t) || y(t) || S();
  }
  function U(t) {
    return 'true' === t || 'false' === t;
  }
  function C(t, e, n) {
    var r = ''
      .concat(o, ' warning: unexpected ')
      .concat(e, ' parameter: ')
      .concat(t);
    n && (r += ', '.concat(n, '.')), console.log(r);
  }
  function x(e) {
    var n = e.depth,
      o = e.theme,
      r = e.created,
      a = e.showedits,
      c = e.showtitle,
      i = e.showmedia,
      s = e.locale,
      d = e.showusername,
      u = e.snippet;
    n && '1' !== n && '2' !== n && C(n, t.Depth),
      o && 'dark' !== o && C(o, t.Theme),
      r && 'string' != typeof r && C(r, t.Created),
      a && !U(a) && C(a, t.Showedits),
      c && !U(c) && C(c, t.Showtitle),
      i && !U(i) && C(i, t.Showmedia),
      d && !U(d) && C(d, t.ShowUsername),
      r &&
        !a &&
        C(a, t.Showedits, 'created is present but showedits is missing'),
      a && !r && C(r, t.Created, 'showedits is present but created is missing'),
      s && 'string' != typeof s && C(s, t.Locale),
      u && 'string' != typeof u && C(u, t.Snippet);
  }
  var E = /^https?:\/\//i,
    N = /\/(?:r|user)\/\w+\/comments\/\w+\/([^/]*?)\/?$/,
    R = /\/(?:r|user)\/\w+\/comments\/\w+\/([^/]*?)\/\w+\/?$/,
    _ = /^\/r\/\w+\/?$/;
  function I(t) {
    return '/' === t.charAt(t.length - 1) ? t : ''.concat(t, '/');
  }
  function T(e, n, l) {
    var m = e.getAttribute(a) || '1',
      p = e.getAttribute(c),
      b = e.getAttribute(u),
      g = e.getAttribute(d),
      v = e.getAttribute(s),
      S = e.getAttribute(i),
      y = e.getAttribute('data-card-created'),
      A = e.getAttribute(h),
      U = e.getAttribute(w),
      C = e.getAttribute(f);
    x({
      depth: m,
      theme: p,
      created: b,
      showedits: g,
      showtitle: v,
      showmedia: S,
      locale: A,
      showusername: U,
      snippet: C
    });
    var E = ''
      .concat(t.Embed, '=true&')
      .concat(t.RefSource, '=embed&')
      .concat(t.Ref, '=share&')
      .concat(t.UtmMedium, '=widgets&')
      .concat(t.UtmSource, '=embedv2&')
      .concat(t.UtmTerm, '=23');
    if (
      (p && (E += '&'.concat(t.Theme, '=').concat(p)),
      A && (E += '&'.concat(t.Locale, '=').concat(A)),
      U && (E += '&'.concat(t.ShowUsername, '=').concat(U)),
      g && b)
    )
      E += '&'
        .concat(t.Showedits, '=')
        .concat(g, '&')
        .concat(t.Created, '=')
        .concat(b);
    else if (y)
      try {
        var N = 1e3 * parseInt(y, 10),
          R = new Date(N).toISOString();
        E += '&'
          .concat(t.Showedits, '=false&')
          .concat(t.Created, '=')
          .concat(encodeURIComponent(R));
      } catch (t) {
        console.log(
          ''.concat(o, ' warning: unable to parse "data-card-created" value')
        );
      }
    return (
      l
        ? ((E += '&'
            .concat(t.Showmedia, '=false&')
            .concat(t.Showmore, '=false&')
            .concat(t.Depth, '=')
            .concat(m, '&')
            .concat(t.UtmName, '=comment_embed')),
          '1' !== m && (E += '&'.concat(t.Context, '=1')),
          v && (E += '&'.concat(t.Showtitle, '=').concat(v)))
        : (S && (E += '&'.concat(t.Showmedia, '=').concat(S)),
          (E += '&'.concat(t.UtmName, '=post_embed'))),
      C && (E += '&'.concat(t.Snippet, '=').concat(C)),
      (function (e, n) {
        var o,
          a,
          c = encodeURIComponent(
            (null === window ||
            void 0 === window ||
            null === (o = window.location) ||
            void 0 === o
              ? void 0
              : o.origin) || ''
          ),
          i = encodeURIComponent(
            (null === window ||
            void 0 === window ||
            null === (a = window.location) ||
            void 0 === a
              ? void 0
              : a.pathname) || ''
          );
        if (!c) return e;
        var s = '&'.concat(t.EmbedHostUrl, '=').concat(c),
          d = ''.concat(s).concat(i),
          u = n.length + e.length,
          l = u + d.length,
          m = u + c.length;
        if (l < r) return ''.concat(e).concat(d);
        if (m < r) return ''.concat(e).concat(s);
        return e;
      })(E, n)
    );
  }
  function j(t) {
    var e, n, o;
    if (
      ((n = (e = t).href),
      (o = e.pathname),
      E.test(n) && (N.test(o) || R.test(o) || _.test(o)))
    )
      return t.pathname.replace(/^\//, '');
  }
  function D(t, e) {
    var n = (function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var o = j(t[n]);
        if (o)
          return I(
            'https://'
              .concat(e ? 'sh.reddit.com/embed' : 'embed.reddit.com', '/')
              .concat(o)
          );
      }
    })('A' === t.tagName ? [t] : A(t.getElementsByTagName('a')), e);
    if (n) {
      var o = T(t, n, R.test(n));
      return ''.concat(n, '?').concat(o);
    }
  }
  try {
    !(function () {
      var t = function (t) {
          var n = e[t];
          if (!(null == n ? void 0 : n.parentNode)) return 'continue';
          var r = 'true' === n.getAttribute(m),
            a = D(n, r);
          if (!a) return { v: void 0 };
          var c = (function (t, e) {
            var n = document.createElement('iframe');
            console.log(t, e, n);
            return (
              e &&
                n.setAttribute(
                  'height',
                  (function (t) {
                    console.log(t);
                    var e = ''.concat(t);
                    console.log(e);
                    return 'px' === e.substring(e.length - 2)
                      ? e
                      : ''.concat(e, 'px');
                  })(e)
                ),
              n.setAttribute('src', t),
              n.setAttribute('width', '640px'),
              n.setAttribute('scrolling', 'no'),
              n.setAttribute('allowfullscreen', 'true'),
              n.setAttribute(
                'sandbox',
                'allow-scripts allow-same-origin allow-popups'
              ),
              n.setAttribute('allow', 'clipboard-read; clipboard-write'),
              (n.style.border = 'none'),
              (n.style.maxWidth = '100%'),
              (n.style.borderRadius = '8px'),
              (n.style.display = 'block'),
              (n.style.margin = '0 auto'),
              n
            );
          })(a, n.getAttribute(l));
          window.addEventListener('message', function (t) {
            return (function (t, e) {
              if (e.contentWindow === t.source) {
                var n;
                if ('string' == typeof t.data && t.data)
                  try {
                    n = JSON.parse(t.data);
                  } catch (t) {
                    console.error(
                      ''.concat(
                        o,
                        " error: Couldn't parse message from event: "
                      ),
                      t
                    );
                  }
                if (n && 'type' in n && 'resize.embed' === n.type) {
                  var r = n.data;
                  e.setAttribute('height', ''.concat(r)),
                    e.setAttribute('scrolling', 'no');
                }
              }
            })(t, c);
          }),
            n.parentNode.insertBefore(c, n),
            n.parentNode.removeChild(n);
        },
        e = document.querySelectorAll(n);
      if (e.length) {
        for (var r = 0; r < e.length; r++) {
          var a = t(r);
          if (
            'object' ==
            ((c = a) && c.constructor === Symbol ? 'symbol' : typeof c)
          )
            return a.v;
        }
        var c;
      }
    })();
  } catch (t) {
    console.log(''.concat(o, ' error: '), t);
  }
})();
