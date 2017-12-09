module.exports = function(source) {
  return source + `;
    if (module.hot) {
      var injectCss = function injectCss(prev, href) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = href;
        link.onload = function() {
          document.head.removeChild(prev);
        };
        document.head.appendChild(link);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(document.location.href)) return;
            injectCss(link, link.href.split("?")[0] + "?unix=${+new Date()}");
          });
      }
    }
  `
};
