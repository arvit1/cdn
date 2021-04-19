_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [23], {
        "/a9y": function(e, t, n) {
            "use strict";
            var r = n("/GRZ"),
                a = n("i2R6"),
                o = n("48fX"),
                l = n("tCBg"),
                i = n("T0f4");

            function u(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = i(e);
                    if (t) {
                        var a = i(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var c = n("AroE");
            t.__esModule = !0, t.default = void 0;
            var s = c(n("q1tI")),
                f = c(n("8Kt/")),
                d = {
                    400: "Bad Request",
                    404: "This page could not be found",
                    405: "Method Not Allowed",
                    500: "Internal Server Error"
                };

            function p(e) {
                var t = e.res,
                    n = e.err;
                return {
                    statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
                }
            }
            var g = function(e) {
                o(n, e);
                var t = u(n);

                function n() {
                    return r(this, n), t.apply(this, arguments)
                }
                return a(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props.statusCode,
                            t = this.props.title || d[e] || "An unexpected error has occurred";
                        return s.default.createElement("div", {
                            style: h.error
                        }, s.default.createElement(f.default, null, s.default.createElement("title", null, e, ": ", t)), s.default.createElement("div", null, s.default.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "body { margin: 0 }"
                            }
                        }), e ? s.default.createElement("h1", {
                            style: h.h1
                        }, e) : null, s.default.createElement("div", {
                            style: h.desc
                        }, s.default.createElement("h2", {
                            style: h.h2
                        }, t, "."))))
                    }
                }]), n
            }(s.default.Component);
            t.default = g, g.displayName = "ErrorPage", g.getInitialProps = p, g.origGetInitialProps = p;
            var h = {
                error: {
                    color: "#000",
                    background: "#fff",
                    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                    height: "100vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                desc: {
                    display: "inline-block",
                    textAlign: "left",
                    lineHeight: "49px",
                    height: "49px",
                    verticalAlign: "middle"
                },
                h1: {
                    display: "inline-block",
                    borderRight: "1px solid rgba(0, 0, 0,.3)",
                    margin: 0,
                    marginRight: "20px",
                    padding: "10px 23px 10px 0",
                    fontSize: "24px",
                    fontWeight: 500,
                    verticalAlign: "top"
                },
                h2: {
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0
                }
            }
        },
        0: function(e, t, n) {
            n("GcxT"), e.exports = n("nOHt")
        },
        GcxT: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("IlR1")
            }])
        },
        IlR1: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return s
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("jQyn"),
                l = n("URMD"),
                i = n("xENa"),
                u = n("nlhN"),
                c = n("AeFk");
            a.a.createElement;

            function s(e) {
                var t = e.Component,
                    n = e.pageProps,
                    a = o.default.getErrorBoundary();
                return Object(r.useEffect)((function() {
                    console.debug("This page was rendered with content from ".concat(n.globals.dataSource, " at ").concat(n.globals.renderTimestamp))
                }), []), Object(c.c)(a, {
                    FallbackComponent: l.default
                }, Object(c.c)(u.b, {
                    initialState: n.globals.featureFlags
                }, Object(c.c)(i.a, null, Object(c.c)(t, n))))
            }
        },
        URMD: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                a = n.n(r),
                o = n("eomm"),
                l = n.n(o),
                i = n("w2l6"),
                u = n("jQyn"),
                c = n("AeFk");
            a.a.createElement;

            function s(e) {
                var t = e.statusCode,
                    n = e.page;
                return 404 === t ? Object(c.c)(i.default, n) : l.a
            }
            s.getInitialProps = function(e) {
                var t = e.res,
                    n = e.err;
                return n && u.default.error(n), {
                    statusCode: t ? t.statusCode : n ? n.statusCode : 404
                }
            }, t.default = s
        },
        eomm: function(e, t, n) {
            e.exports = n("/a9y")
        },
        w2l6: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSG", (function() {
                return i
            })), n.d(t, "default", (function() {
                return u
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("f9VK"),
                l = n("AeFk"),
                i = (a.a.createElement, !0);

            function u(e) {
                var t = e.page,
                    n = e.globals,
                    r = Object(o.a)("404");
                return Object(l.c)(r, {
                    page: t,
                    globals: n
                })
            }
        }
    },
    [
        [0, 3, 2, 0]
    ]
]);