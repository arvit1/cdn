(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [160], {
        ELD6: function(n, e, c) {
            "use strict";
            c.r(e), c.d(e, "default", (function() {
                return p
            }));
            var t = c("HALo"),
                o = c("q1tI"),
                a = c.n(o),
                r = c("HJ2n"),
                s = c("usKF"),
                i = c("jQyn"),
                l = c("S0v1"),
                u = c("PMiD"),
                b = c("bN2E"),
                d = c("CwyK"),
                m = c("TSYQ"),
                j = c.n(m),
                O = c("AeFk");
            a.a.createElement;

            function p(n) {
                var e = n.page,
                    c = n.globals,
                    o = Object(l.a)(e._layout);
                return Object(O.c)(s.a.Provider, {
                    value: c
                }, Object(O.c)(r.a.Provider, {
                    value: e
                }, Object(O.c)(o, null, Object(O.c)(d.a, null), e.sections.map((function(n, e) {
                    return n.rows ? Object(O.c)(v, {
                        section: n,
                        index: e,
                        key: e
                    }) : Object(O.c)(_, {
                        section: n,
                        index: e,
                        key: e
                    })
                })), e.modals && e.modals.map((function(n) {
                    return Object(O.c)(u.a, Object(t.a)({
                        componentName: n.partial_notrans
                    }, n))
                })), Object(O.c)(b.a, null))))
            }

            function _(n) {
                var e = n.section,
                    c = n.index,
                    o = Array.isArray(e.component) ? e.component : [e.component];
                return Object(O.c)(w, {
                    section: e,
                    index: c
                }, o.map((function(n, e) {
                    return Object(O.c)(u.a, Object(t.a)({
                        componentName: n.component_name_notrans,
                        key: e
                    }, n))
                })))
            }

            function f(n, e) {
                var c;
                return n ? c = Array.isArray(n) ? n.map((function(n, e) {
                    return Object(O.c)(y, Object(t.a)({}, n, {
                        colData: n,
                        key: e
                    }))
                })) : Object(O.c)(y, Object(t.a)({}, n, {
                    colData: n
                })) : (i.default.warn("column not found, cols is not an array of columns."), c = Object(O.c)("p", {
                    style: {
                        color: "red",
                        padding: "32px",
                        width: "100%",
                        height: "100%",
                        background: "#eee",
                        outline: "2px solid #bbb"
                    }
                }, "YAML front-matter malformed(see console for details)")), c
            }

            function v(n) {
                var e = n.section,
                    c = n.index;
                return Object(O.c)(w, {
                    section: e,
                    index: c
                }, e.rows.map((function(n, e) {
                    return Object(O.c)("div", {
                        className: j()("row", n.row_class_notrans),
                        key: e
                    }, f(n.cols))
                })))
            }

            function y(n) {
                var e = n.col_class_notrans,
                    c = n.partial_notrans,
                    o = n.colData;
                return Object(O.c)("div", {
                    className: e
                }, c && Object(O.c)(u.a, Object(t.a)({
                    componentName: c
                }, o)))
            }
            var w = function(n) {
                var e = n.section,
                    c = n.children,
                    t = n.index,
                    o = e.section_background_color_notrans,
                    a = o ? {
                        backgroundColor: o
                    } : null;
                return Object(O.c)("section", {
                    className: j()("sectionBuilder", e.section_class_notrans, {
                        "-first": 0 === t
                    }),
                    id: e.section_id_notrans,
                    style: a
                }, Object(O.c)("div", {
                    className: j()("container", e.container_class_notrans)
                }, c))
            }
        }
    }
]);