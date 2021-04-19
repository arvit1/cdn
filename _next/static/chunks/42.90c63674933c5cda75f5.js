(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [42], {
        Cc95: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var r = n("xvhg"),
                o = n("q1tI");

            function i(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0px",
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    c = Object(o.useState)(!1),
                    a = c[0],
                    u = c[1];
                return Object(o.useEffect)((function() {
                    var o = new IntersectionObserver((function(t) {
                        var e = Object(r.a)(t, 1)[0];
                        u(e.isIntersecting)
                    }), {
                        root: e,
                        rootMargin: n,
                        threshold: i
                    });
                    return t.current && o.observe(t.current),
                        function() {
                            o.unobserve(t.current)
                        }
                }), []), a
            }
        },
        "p/ad": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("cpVT"),
                o = n("q1tI"),
                i = n.n(o),
                c = n("pJ87"),
                a = n("V0FR"),
                u = n("r3F2"),
                l = n("usKF"),
                d = n("Cc95"),
                s = n("sJyK"),
                v = n("AeFk");
            i.a.createElement;

            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach((function(e) {
                        Object(r.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            e.default = function(t) {
                var e, n = t.items,
                    r = t.autoTimerDuration_notrans,
                    i = t.id_notrans,
                    f = t.headingContent,
                    p = t.headingLocation_notrans,
                    O = Object(o.useContext)(l.a).global_language,
                    g = n.map((function(t) {
                        var e, n, r, o, i, c, a, u, l, d;
                        if (!t.media && null !== (e = t.cta) && void 0 !== e && e.i18n) return t;
                        var v = (null === t || void 0 === t || null === (n = t.media) || void 0 === n ? void 0 : n[O]) || (null === t || void 0 === t || null === (r = t.media) || void 0 === r ? void 0 : r[s.DEFAULT_LANGUAGE]) || null,
                            f = v ? v.image : "",
                            p = (null === t || void 0 === t || null === (o = t.cta) || void 0 === o || null === (i = o.i18n) || void 0 === i || null === (c = i[O]) || void 0 === c ? void 0 : c.href_notrans) || (null === t || void 0 === t || null === (a = t.cta) || void 0 === a || null === (u = a.i18n) || void 0 === u || null === (l = u[s.DEFAULT_LANGUAGE]) || void 0 === l ? void 0 : l.href_notrans) || (null === t || void 0 === t || null === (d = t.cta) || void 0 === d ? void 0 : d.link) || null || "#";
                        return b(b({}, t), {}, {
                            color: t.color_notrans || t.color,
                            media: {
                                image: f
                            },
                            cta: b(b({}, t.cta), {}, {
                                link: p
                            })
                        })
                    })),
                    j = Object(o.useRef)(),
                    h = Object(d.a)(j, null, "0% 0px");
                return f && null !== f && void 0 !== f && f.text_stack ? e = Object(v.c)(a.default, f.text_stack) : "string" === typeof f && (e = Object(v.c)(u.a, {
                    html: f
                })), Object(v.c)(c.default, {
                    items: g,
                    autoTimerDuration: r,
                    id: i,
                    headingContent: e,
                    headingLocation: p,
                    accordionRef: j,
                    isInViewport: h
                })
            }
        }
    }
]);