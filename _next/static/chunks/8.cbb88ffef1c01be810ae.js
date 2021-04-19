(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [8], {
        "+5B9": function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n("q1tI"),
                o = n.n(c),
                r = (n("g4pe"), n("HJ2n"), n("VnXm")),
                a = n("xvhg"),
                i = n("0W9H"),
                l = n("TSYQ"),
                u = n.n(l),
                s = n("Vvt1"),
                d = n.n(s),
                f = n("DzJC"),
                h = n.n(f),
                v = (n("MFjC"), n("bn51"), n("uuPH"), n("cpVT")),
                b = function(e, t, n) {
                    var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = c ? c / 2 : 0,
                        r = parseInt((e + t) / 2 - (n + o), 10);
                    return r > 250 ? r : 250
                },
                m = n("AeFk"),
                g = (o.a.createElement, function(e) {
                    var t, n = e.nodeRef,
                        o = e.wrapperRef,
                        r = e.highlightTime,
                        a = Object(c.useMemo)((function() {
                            var e, t = (null === (e = n.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) || {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            };
                            return [t.left, t.right, t.top, t.bottom]
                        }), [r]),
                        i = a[0],
                        l = a[1],
                        s = a[2],
                        d = a[3] - s,
                        f = (null === (t = o.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) || {},
                        h = void 0 !== f.top ? f.top : 0,
                        g = void 0 !== f.left ? f.left : 0,
                        p = b(i, l, g),
                        w = parseInt(s - h, 10),
                        O = Object(c.useState)(!1),
                        j = O[0],
                        N = O[1];
                    return Object(c.useEffect)((function() {
                        var e;
                        return N(!0), e = setTimeout((function() {
                                N(!1)
                            }), 600),
                            function() {
                                clearTimeout(e)
                            }
                    }), [r]), Object(m.c)("div", {
                        className: u()("flow-chart-ripple-effect", Object(v.a)({}, "-triggered", j)),
                        style: {
                            left: p,
                            top: w,
                            width: "".concat(d, "px"),
                            height: "".concat(d, "px")
                        }
                    })
                });
            g.defaultProps = {
                nodeRef: {},
                wrapperRef: {}
            };
            var p = g,
                w = n("bW4L"),
                O = (o.a.createElement, function(e) {
                    var t = e.charts,
                        n = e.activeChartID,
                        c = e.changeActiveChart;
                    if (t.length < 1) return null;
                    return Object(m.c)("div", {
                        className: "flow-chart-tab-wrapper"
                    }, Object.keys(t).map((function(e, o) {
                        var r = t[e],
                            a = r.buttonText,
                            i = r.gtmEvent,
                            l = n == e;
                        return Object(m.c)("button", {
                            className: u()("flow-chart-tab", {
                                "-is-active": l
                            }),
                            tabIndex: "0",
                            "data-chart-id": e,
                            "data-gtm-event-name": i,
                            onClick: function() {
                                ! function(e, t) {
                                    var n;
                                    e && null !== (n = window.AsanaAnalytics) && void 0 !== n && n.trackGTM && Object(w.b)(e, {
                                        eventCategory: "CTA Engagement",
                                        eventAction: "ClickWorkflow",
                                        eventLabel: "ClickWorkflow-".concat(e, "@Home-Workflow")
                                    }), t && c(parseInt(t, 10))
                                }(i, e)
                            },
                            key: o
                        }, a)
                    })))
                }),
                j = (o.a.createElement, function(e) {
                    var t, n, o = e.data,
                        r = e.wrapperRef,
                        a = e.highlightedNode,
                        i = (e.highlightTime, e.setTooltipHovered),
                        l = e.nodeRef,
                        s = e.baseNodeHeight,
                        d = o.cta,
                        f = o.description,
                        h = o.size,
                        v = o.title,
                        g = (null === (t = l.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) || {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        },
                        p = g.left,
                        w = g.right,
                        O = g.top,
                        j = g.bottom,
                        N = O && O ? (j + O) / 2 : 0,
                        y = (null === (n = r.current) || void 0 === n ? void 0 : n.getBoundingClientRect()) || {},
                        k = void 0 !== y.top ? y.top : 0,
                        E = void 0 !== y.left ? y.left : 0,
                        x = b(p, w, E),
                        C = parseInt(N + 1.1 * s / 2 - k + 25, 10),
                        R = Object(c.useState)(!1),
                        L = R[0],
                        D = R[1],
                        H = Object(c.useRef)(L);
                    H.current = L;
                    var S = Object(c.useState)(!1),
                        T = S[0],
                        F = S[1];
                    Object(c.useEffect)((function() {
                        D(!!a)
                    }), [a]), Object(c.useEffect)((function() {
                        var e;
                        return L ? F(!1) : e = setTimeout((function() {
                                H.current || F(!0)
                            }), 425),
                            function() {
                                clearTimeout(e)
                            }
                    }), [L]);
                    var _ = {
                        left: "".concat(x, "px"),
                        top: "".concat(C, "px")
                    };
                    return Object(m.c)("div", {
                        className: u()("flow-chart-tooltip", {
                            "-no-cta": !d
                        }, {
                            "-active": L
                        }, {
                            "-hidden": T
                        }, {
                            "-is-small": "sm" === h
                        }),
                        style: _,
                        onMouseEnter: function() {
                            i(a)
                        },
                        onMouseLeave: function() {
                            i(null)
                        }
                    }, v && Object(m.c)("h6", {
                        className: "flow-chart-tooltip-title -bold"
                    }, v), f && Object(m.c)("p", {
                        className: "flow-chart-tooltip-description"
                    }, f), d && Object(m.c)("div", {
                        className: "flow-chart-tooltip-cta-wrapper"
                    }, Object(m.c)("a", {
                        className: "flow-chart-tooltip-cta",
                        href: d.href
                    }, Object(m.c)("span", null, d.text), Object(m.c)("svg", {
                        className: "flow-chart-tooltip-cta-arrow",
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 17 11",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, Object(m.c)("path", {
                        fill: "#796EFF",
                        fillRule: "evenodd",
                        stroke: "#796EFF",
                        strokeWidth: ".5",
                        d: "M10.827 1l-.808.717 3.256 3.737H1v1.092h12.275l-3.256 3.737.808.717L15 6c-.01-.116-4.173-5-4.173-5z",
                        clipRule: "evenodd"
                    })))))
                });
            j.defaultProps = {
                nodeRef: {},
                wrapperRef: {},
                data: {}
            };
            var N = j,
                y = n("VHp+"),
                k = n("VTyt"),
                E = (o.a.createElement, d()((function() {
                    return Promise.resolve().then(n.bind(null, "MFjC"))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["MFjC"]
                        },
                        modules: ["@/components/presentational/flowcharts/flowchart"]
                    }
                })),
                x = function(e) {
                    var t = e.label,
                        n = e.heading,
                        r = e.chartsData,
                        l = e.bottomContent,
                        u = Object(c.useState)(null),
                        s = u[0],
                        d = u[1],
                        f = r[s] || null,
                        v = Object(c.useRef)(null),
                        b = Object(c.useState)({}),
                        g = b[0],
                        w = b[1],
                        j = Object(c.useState)(null),
                        x = j[0],
                        C = j[1],
                        R = Object(c.useState)(null),
                        L = R[0],
                        D = R[1],
                        H = Object(c.useState)(null),
                        S = H[0],
                        T = H[1],
                        F = Object(c.useState)(null),
                        _ = F[0],
                        I = F[1],
                        P = Object(c.useRef)(L);
                    P.current = L;
                    var B = Object(c.useRef)(_);
                    B.current = _, Object(c.useRef)(x).current = x;
                    var M = Object(i.a)(),
                        A = Object(a.a)(M, 2),
                        z = A[0],
                        W = A[1];
                    return Object(c.useEffect)((function() {
                        W && d(0)
                    }), [W]), Object(c.useEffect)((function() {
                        var e = h()((function() {
                            C(null)
                        }), 50);
                        return window.addEventListener("scroll", e),
                            function() {
                                window.removeEventListener("scroll", e)
                            }
                    })), Object(c.useEffect)((function() {
                        var e;
                        return L ? x ? (clearTimeout(e), L !== x && (T(Date.now()), C(L))) : (T(Date.now()), C(L)) : _ ? C(_) : x && (e = setTimeout((function() {
                                P.current || B.current || C(null)
                            }), 500)),
                            function() {
                                clearTimeout(e)
                            }
                    }), [L, _]), Object(m.c)("div", {
                        ref: z
                    }, Object(m.c)("div", {
                        className: "flow-chart-background-color",
                        style: {
                            backgroundColor: (null === f || void 0 === f ? void 0 : f.backgroundColor) || "#151B26"
                        }
                    }), Object(m.c)("div", {
                        className: "flow-chart-tooltip-container"
                    }, Object(m.c)("div", {
                        ref: v,
                        className: "flow-chart-tooltip-wrapper"
                    }, Object(m.c)(N, {
                        data: g ? g.tooltip : {},
                        wrapperRef: v,
                        highlightedNode: x,
                        highlightTime: S,
                        setTooltipHovered: I,
                        nodeRef: g ? g.nodeRef : {},
                        baseNodeHeight: g ? g.baseNodeHeight : 44
                    }), x && g && Object(m.c)(p, {
                        wrapperRef: v,
                        highlightTime: S,
                        highlightedNode: x,
                        nodeRef: g ? g.nodeRef : {},
                        baseNodeHeight: g ? g.baseNodeHeight : 44
                    }))), W && f ? Object(m.c)(c.Suspense, {
                        fallback: Object(m.c)(o.a.Fragment, null)
                    }, Object(m.c)("div", {
                        className: "row"
                    }, Object(m.c)("div", {
                        className: "col-xsmall-12 col-small-offset-1 col-small-9 col-medium-offset-0 col-medium-7 col-large-7"
                    }, Object(m.c)("div", {
                        className: "mb-1 textStack"
                    }, Object(m.c)("span", {
                        className: "-label"
                    }, t), Object(m.c)("h3", {
                        className: "heading -white"
                    }, n), Object(m.c)(O, {
                        charts: r,
                        activeChartID: s,
                        changeActiveChart: d
                    })))), Object(m.c)("div", {
                        className: "row flow-chart-diagrams mt-5 mb-5"
                    }, Object(m.c)("div", {
                        className: "col-xsmall-12 col-small-offset-0 col-xlarge-11 -no-gutters"
                    }, Object(m.c)(E, {
                        key: "flowchart_".concat(s),
                        flowChartNumber: s,
                        data: f,
                        setHighlightData: w,
                        setNodeHovered: D,
                        highlightedNode: x,
                        setHighlightedNode: C
                    }))), l && Object(m.c)("div", {
                        className: "row flow-chart-cta pb-1 pt-2"
                    }, l.description && Object(m.c)("div", {
                        className: "col-xsmall-12 col-small-10 col-small-offset-1 col-medium-offset-0 col-medium-7 col-xlarge-6 flow-chart-cta-description-wrapper"
                    }, Object(m.c)("p", {
                        className: "flow-chart-cta-description"
                    }, l.description)), l.cta && Object(m.c)("div", {
                        className: "col-xsmall-12 col-small-10 col-small-offset-1 col-medium-3 col-medium-offset-2 col-xlarge-3 col-xlarge-offset-2"
                    }, Object(m.c)("div", {
                        className: "flow-chart-cta-link-wrapper"
                    }, Object(m.c)(k.default, {
                        className: "flow-chart-cta-link cta-arrow-link",
                        href: l.cta.href || l.cta.href_notrans,
                        title: l.cta.text
                    }, l.cta.text, Object(m.c)(y.a, null)))))) : Object(m.c)(o.a.Fragment, null))
                },
                C = n("txz3"),
                R = n.n(C);
            o.a.createElement, t.default = function(e) {
                var t = e.flowCharts,
                    n = e.flow_chart_bottom_content,
                    c = e.flow_chart_top_content,
                    a = e.componentName,
                    i = R()(t, "_notrans"),
                    l = R()(n, "_notrans");
                return Object(m.c)(o.a.Fragment, null, t && "flowcharts" !== a && Object(m.c)(x, {
                    label: c.label,
                    heading: c.heading,
                    chartsData: i,
                    bottomContent: l
                }), t && "flowcharts" === a && Object(m.c)(r.b, {
                    className: "sectionBuilder no-padding flow-chart flow-chart-section new-homepage-flowchart-section"
                }, Object(m.c)(x, {
                    label: c.label,
                    heading: c.heading,
                    chartsData: i,
                    bottomContent: l
                })))
            }
        },
        MFjC: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n("cpVT"),
                o = n("q1tI"),
                r = n.n(o),
                a = n("DzJC"),
                i = n.n(a),
                l = n("bn51"),
                u = n("uuPH"),
                s = n("AeFk");
            r.a.createElement;

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    t && (c = c.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, c)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        Object(c.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.default = function(e) {
                var t = e.flowChartNumber,
                    n = e.data,
                    r = e.highlightedNode,
                    a = e.setHighlightedNode,
                    d = e.setHighlightData,
                    h = e.setNodeHovered,
                    v = n.data,
                    b = v.nodes,
                    m = v.edges,
                    g = v.viewBox,
                    p = n.backgroundColor,
                    w = Object(o.useRef)(null),
                    O = Object(o.useRef)(null),
                    j = Object(o.useState)(1),
                    N = j[0],
                    y = j[1];
                Object(o.useEffect)((function() {
                    var e, t, n = O.current.getBoundingClientRect().width,
                        c = parseFloat(null === (e = window.getComputedStyle(O.current)) || void 0 === e ? void 0 : e.paddingLeft) || 0,
                        o = parseFloat(null === (t = window.getComputedStyle(O.current)) || void 0 === t ? void 0 : t.paddingRight) || 0;
                    y((n - (c + o)) / g.width);
                    var r = i()((function() {
                        var e, t, n = O.current.getBoundingClientRect().width,
                            c = parseFloat(null === (e = window.getComputedStyle(O.current)) || void 0 === e ? void 0 : e.paddingLeft) || 0,
                            o = parseFloat(null === (t = window.getComputedStyle(O.current)) || void 0 === t ? void 0 : t.paddingRight) || 0;
                        y((n - (c + o)) / g.width)
                    }), 50);
                    return window.addEventListener("resize", r),
                        function() {
                            window.removeEventListener("resize", r)
                        }
                }), []);
                var k = Object(o.useState)((function() {
                        var e = {};
                        return Object.keys(b).forEach((function(t) {
                            e[t] = !1
                        })), e
                    })),
                    E = k[0],
                    x = k[1],
                    C = Object(o.useRef)(E),
                    R = Object(o.useState)((function() {
                        var e = {};
                        return Object.keys(m).forEach((function(t) {
                            e[t] = !1
                        })), e
                    })),
                    L = R[0],
                    D = R[1],
                    H = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        e.forEach((function(e) {
                            if (e) {
                                var n, o = [];
                                if (t) null !== (n = b[e].connections) && void 0 !== n && n.outgoing && b[e].connections.outgoing.forEach((function(t) {
                                    o.push("".concat(e, "_").concat(t))
                                }));
                                x((function(t) {
                                    return t[e] ? t : f(f({}, t), {}, Object(c.a)({}, e, !0))
                                })), o.length > 0 && T(o, !0)
                            }
                        }))
                    };
                Object(o.useEffect)((function() {
                    var e = Object.keys(b).map((function(e) {
                        if (!b[e].connections.incoming) return e
                    }));
                    return H(e, !0),
                        function() {
                            Object.keys(S.current).forEach((function(e) {
                                var t = S.current[e];
                                clearTimeout(t)
                            }))
                        }
                }), []);
                var S = Object(o.useRef)([]),
                    T = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        e.forEach((function(e) {
                            if (e) {
                                var n = null;
                                t && m[e] && (n = m[e].end || null), D((function(t) {
                                    return t[e] ? t : f(f({}, t), {}, Object(c.a)({}, e, !0))
                                })), t && n && !C.current[n] && (S.current[e] = setTimeout((function() {
                                    H([n], !0)
                                }), 100))
                            }
                        }))
                    },
                    F = function(e, n, c) {
                        var o = b[e] || {};
                        d({
                            tooltip: (null === o || void 0 === o ? void 0 : o.tooltip) || {},
                            nodeRef: n,
                            baseNodeHeight: c
                        }), h("flowChart-".concat(t, "_node-").concat(e))
                    },
                    _ = Object(o.useRef)({
                        isDown: !1,
                        startX: 0,
                        scrollLeft: 0
                    });
                return Object(o.useEffect)((function() {
                    if (w.current) {
                        var e = function(e) {
                                _.current.isDown = !0, _.current.startX = e.pageX - w.current.offsetLeft, _.current.scrollLeft = w.current.scrollLeft
                            },
                            t = function() {
                                _.current.isDown = !1
                            },
                            n = function() {
                                _.current.isDown = !1
                            },
                            c = i()((function(e) {
                                if (_.current.isDown) {
                                    e.preventDefault();
                                    var t = e.pageX - w.current.offsetLeft - _.current.startX,
                                        n = _.current.scrollLeft - t;
                                    w.current.scrollLeft = n
                                }
                            }), 16),
                            o = i()((function(e) {
                                a(null)
                            }), 16);
                        return w.current.addEventListener("touchmove", o), w.current.addEventListener("mousedown", e), w.current.addEventListener("mouseleave", t), w.current.addEventListener("mouseup", n), w.current.addEventListener("mousemove", c),
                            function() {
                                w.current.removeEventListener("touchmove", c), w.current.removeEventListener("mousedown", e), w.current.removeEventListener("mouseleave", t), w.current.removeEventListener("mouseup", n), w.current.removeEventListener("mousemove", c)
                            }
                    }
                }), []), Object(s.c)("div", {
                    id: "flowChart-".concat(t),
                    className: "flowChart"
                }, Object(s.c)("div", {
                    className: "flow-chart-diagram",
                    ref: w
                }, Object(s.c)("svg", {
                    className: "flow-chart-diagram-svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    fill: "none",
                    viewBox: "".concat(g.minX, " ").concat(g.minY, " ").concat(g.width, " ").concat(g.height),
                    ref: O
                }, m && Object.keys(m).map((function(e) {
                    var n = m[e];
                    return Object(s.c)(u.a, {
                        edgeID: e,
                        data: n,
                        start: b[n.start].origin,
                        end: b[n.end].origin,
                        direction: n.direction,
                        radius: n.radius,
                        key: "flowChart-".concat(t, "_edge-").concat(e),
                        id: "flowChart-".concat(t, "_edge-").concat(e),
                        animationReveal: L[e],
                        chartColor: p
                    })
                }))), Object(s.c)("div", {
                    className: "flowChart-nodes-wrapper"
                }, b && Object.keys(b).map((function(e) {
                    var n = b[e];
                    return Object(s.c)(l.a, {
                        data: n,
                        key: "flowChart-".concat(t, "_node-").concat(e),
                        id: "flowChart-".concat(t, "_node-").concat(e),
                        handleNodeHover: F,
                        handleNodeLeave: function() {
                            h(!1)
                        },
                        animationReveal: E[e],
                        backgroundID: "flowChart-".concat(t, "_node-").concat(e, "__bg"),
                        highlightedNode: r,
                        scaleFactor: N
                    })
                })))))
            }
        },
        RHI1: function(e, t, n) {
            var c = n("hypo"),
                o = n("JC6p"),
                r = n("ut/Y");
            e.exports = function(e, t) {
                var n = {};
                return t = r(t, 3), o(e, (function(e, o, r) {
                    c(n, t(e, o, r), e)
                })), n
            }
        },
        bn51: function(e, t, n) {
            "use strict";
            var c = n("q1tI"),
                o = n.n(c),
                r = n("TSYQ"),
                a = n.n(r),
                i = n("AeFk"),
                l = (o.a.createElement, o.a.createElement, function(e) {
                    var t = e.data,
                        n = e.handleNodeHover,
                        o = e.handleNodeLeave,
                        r = e.highlightedNode,
                        l = e.animationReveal,
                        u = (e.backgroundID, e.id),
                        s = e.scaleFactor,
                        d = Object(c.useState)(!1),
                        f = d[0],
                        h = d[1],
                        v = Object(c.useRef)(null),
                        b = t.color,
                        m = t.image,
                        g = t.size,
                        p = t.origin;
                    t.icon;
                    Object(c.useEffect)((function() {
                        l && h(!0)
                    }), [l]);
                    var w = Object(c.useState)(!1),
                        O = w[0],
                        j = w[1],
                        N = Object(c.useState)(!1),
                        y = N[0],
                        k = N[1];
                    Object(c.useEffect)((function() {
                        j(r === u)
                    }), [r]);
                    var E = 44;
                    "sm" === g && (E = 32), "lg" === g && (E = 48);
                    var x = E * s,
                        C = (p.cx - E) * s,
                        R = (p.cy - E) * s;
                    return Object(i.c)("div", {
                        className: a()("flow-chart-node", {
                            "-active": O || y
                        }, {
                            "-revealed": f
                        }),
                        onMouseEnter: function() {
                            if (k(!0), null !== t && void 0 !== t && t.tooltip) {
                                var e, c, o = O ? (null === (e = v.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height) / 1.1 : null === (c = v.current) || void 0 === c ? void 0 : c.getBoundingClientRect().height;
                                n(t.ID, v, o)
                            }
                        },
                        onMouseLeave: function() {
                            k(!1), o(t.ID)
                        },
                        ref: v,
                        id: u,
                        style: {
                            borderRadius: x,
                            backgroundColor: b || "white",
                            backgroundImage: "url(".concat(m, ")"),
                            width: 2 * x,
                            height: 2 * x,
                            left: C,
                            top: R
                        }
                    })
                });
            l.defaultProps = {
                data: {},
                handleNodeHover: function() {},
                handleNodeLeave: function() {},
                animationReveal: !1,
                scaleFactor: 1
            };
            t.a = l
        },
        txz3: function(e, t, n) {
            "use strict";
            var c = n("AroE"),
                o = c(n("jQyn")),
                r = c(n("RHI1")),
                a = c(n("noZS")),
                i = c(n("YO3V"));
            e.exports = function e(t, n) {
                try {
                    if (!n) throw "No suffix";
                    if (Array.isArray(t)) return t.map((function(t) {
                        return e(t, n)
                    }));
                    if (!(0, i.default)(t)) return t;
                    var c = (0, r.default)(t, (function(e, t) {
                        return t.endsWith(n) ? t.substring(0, t.length - n.length) : t
                    }));
                    return (0, a.default)(c, (function(t) {
                        return e(t, n)
                    }))
                } catch (l) {
                    return o.default.error(l, "Error during removeObjectKeySuffix()"), t
                }
            }
        },
        uuPH: function(e, t, n) {
            "use strict";
            var c = n("cpVT"),
                o = n("q1tI"),
                r = n.n(o),
                a = n("TSYQ"),
                i = n.n(a),
                l = n("AeFk"),
                u = (r.a.createElement, function(e) {
                    var t = e.start,
                        n = e.end,
                        r = e.id,
                        a = (e.edgeID, e.radius),
                        u = e.direction,
                        s = e.animationReveal,
                        d = e.chartColor,
                        f = Object(o.useMemo)((function() {
                            return function(e, t, n, c) {
                                var o, r, a, i, l = e.cx,
                                    u = t.cx,
                                    s = e.cy,
                                    d = t.cy;
                                switch (c) {
                                    case "UP":
                                        o = {
                                            x: l,
                                            y: d + n
                                        }, r = {
                                            x: l + n * (u > l ? 1 : -1),
                                            y: d
                                        }, a = {
                                            x: l,
                                            y: d
                                        }, i = l === u;
                                        break;
                                    case "DOWN":
                                        o = {
                                            x: l,
                                            y: d + n * (d > s ? -1 : 1)
                                        }, r = {
                                            x: l + n * (u > l ? 1 : -1),
                                            y: d
                                        }, a = {
                                            x: l,
                                            y: d
                                        }, i = l === u;
                                        break;
                                    case "LEFT":
                                        o = {
                                            x: u + n,
                                            y: s
                                        }, r = {
                                            x: u,
                                            y: s + n * (d > s ? 1 : -1)
                                        }, a = {
                                            x: u,
                                            y: s
                                        }, i = s === d;
                                        break;
                                    case "RIGHT":
                                        o = {
                                            x: u - n,
                                            y: s
                                        }, r = {
                                            x: u,
                                            y: s + n * (d > s ? 1 : -1)
                                        }, a = {
                                            x: u,
                                            y: s
                                        }, i = s === d
                                }
                                var f = "M ".concat(l, ",").concat(s);
                                i || (f += "\n      L ".concat(o.x, ",").concat(o.y, "\n      Q ").concat(a.x, ",").concat(a.y, " ").concat(r.x, ",").concat(r.y, "\n      L ").concat(r.x, ",").concat(r.y));
                                return f += "L ".concat(u, ",").concat(d)
                            }(t, n, a, u)
                        }), [t, n, u, a]),
                        h = Object(o.useState)(!1),
                        v = h[0],
                        b = h[1];
                    return Object(o.useEffect)((function() {
                        s && b(!0)
                    }), [s]), Object(l.c)("g", {
                        className: i()("flow-chart-edge-group", Object(c.a)({}, "-revealed", v)),
                        "data-line-group": 1,
                        id: r
                    }, Object(l.c)("path", {
                        className: i()("flow-chart-dotted-line", Object(c.a)({}, "-revealed", v)),
                        stroke: "#CBD4DB",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 16,
                        d: f
                    }), Object(l.c)("path", {
                        className: "flow-chart-solid-line",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 16,
                        d: f,
                        strokeWidth: 3,
                        stroke: d
                    }))
                });
            u.defaultProps = {
                radius: 85,
                direction: "RIGHT"
            }, t.a = u
        }
    }
]);