var t;
!(function (t) {
  (t[(t.NativeShare = 0)] = 'NativeShare'),
    (t[(t.Clipboard = 1)] = 'Clipboard');
})(t || (t = {}));
var a = async (a, r = !0) => {
  if ('function' == typeof window.navigator.share && !r) {
    try {
      await window.navigator.share(a);
    } catch (t) {}
    return t.NativeShare;
  }
  try {
    await navigator.clipboard.writeText(
      ((t) => {
        let a = t.title ?? '';
        return (
          t.text && (a.length && (a += '\n\n'), (a += t.text)),
          t.url && (a.length && (a += '\n\n'), (a += t.url)),
          a
        );
      })(a)
    );
  } catch (t) {}
  return t.Clipboard;
};
export { t as S, a as s };
//# sourceMappingURL=index-6b6f75e3.js.map
