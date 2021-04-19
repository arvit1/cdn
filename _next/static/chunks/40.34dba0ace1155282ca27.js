(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [40], {
        "53sa": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("cpVT"),
                i = n("q1tI"),
                c = n.n(i),
                r = n("HJ2n"),
                a = n("usKF"),
                l = n("JeIt"),
                s = n("7s/w"),
                u = n("HALo"),
                d = n("TSYQ"),
                v = n.n(d),
                f = n("7BfX"),
                b = n("jQyn"),
                m = n("bW4L"),
                p = n("TKEn"),
                g = n("VHp+"),
                O = n("VTyt"),
                h = n("r3F2"),
                j = n("i1cl"),
                _ = n("AeFk");
            c.a.createElement;

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var S = [{
                    rotation: 0,
                    color: "#B9C4CC",
                    background: "#E8ECEE"
                }, {
                    rotation: 180,
                    color: "#CBCBE5",
                    background: "#F0F0FF"
                }],
                y = function(e) {
                    var t = e.section_class_notrans,
                        n = e.quote_slide_link,
                        c = e.quote_slide_link_text,
                        r = e.quote_slide_link_title,
                        a = e.quote_slides,
                        l = e.slidesWithVideo;
                    if (!t || !n || !c || !r || !a) return b.default.error("Proper data not supplied to CustomerSlideshow component"), null;
                    var s = Object(i.useState)({
                            isActive: !0,
                            activeSlide: 0,
                            squarePositionBottom: !1,
                            squareStyle: {
                                transform: "rotate(".concat(S[0].rotation, "deg)"),
                                backgroundColor: S[0].color
                            },
                            direction: "next",
                            previousSlide: null
                        }),
                        d = s[0],
                        w = s[1],
                        y = Object(i.useRef)(null),
                        k = Object(i.useRef)(null),
                        q = Object(i.useRef)(null),
                        E = Object(p.a)().viewportWidth,
                        T = function(e) {
                            var t;
                            Object(m.b)("CTAEngagement", {
                                eventCategory: "CTA Engagement",
                                eventAction: "ClickCarousel",
                                eventLabel: "ClickCarousel-".concat(a[d.activeSlide].slide_brand_name_notrans, "@Home-Customers")
                            }), t = "next" === e ? d.activeSlide + 1 >= a.length ? 0 : d.activeSlide + 1 : d.activeSlide - 1 < 0 ? a.length - 1 : d.activeSlide - 1;
                            var n = d.squarePositionBottom ? S[0] : S[1],
                                o = n.color,
                                i = n.rotation,
                                c = {
                                    backgroundColor: o,
                                    transform: "rotate(".concat(i, "deg)")
                                };
                            w((function(n) {
                                return C(C({}, n), {}, {
                                    isActive: !1,
                                    activeSlide: t,
                                    squarePositionBottom: !n.squarePositionBottom,
                                    squareStyle: c,
                                    direction: e,
                                    previousSlide: n.activeSlide
                                })
                            }))
                        },
                        P = function(e) {
                            if (l.includes(d.activeSlide)) {
                                var t = (d.squarePositionBottom ? S[1] : S[0]).rotation,
                                    n = C(C({}, d.squareStyle), {}, "enter" === e ? {
                                        transform: "rotate(".concat(t + 3, "deg)")
                                    } : {
                                        transform: "rotate(".concat(t, "deg)")
                                    });
                                w((function(e) {
                                    return C(C({}, e), {}, {
                                        squareStyle: n
                                    })
                                }))
                            }
                        },
                        x = function() {
                            return {
                                backgroundColor: (d.squarePositionBottom ? S[1] : S[0]).background
                            }
                        };
                    Object(i.useEffect)((function() {
                        var e = setTimeout((function() {
                            w((function(e) {
                                return C(C({}, e), {}, {
                                    isActive: !0
                                })
                            }))
                        }), 50);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [d.activeSlide]);
                    var A = Object(f.useSwipeable)({
                            onSwipedLeft: function() {
                                return T("next")
                            },
                            onSwipedRight: function() {
                                return T("prev")
                            },
                            preventDefaultTouchmoveEvent: !0
                        }),
                        L = "next" === d.direction ? "enter-bottom" : "enter-top",
                        D = "next" === d.direction ? "exit-top" : "exit-bottom";
                    return Object(_.c)("div", Object(u.a)({
                        className: "slideshow-container"
                    }, A), Object(_.c)("span", {
                        className: "slideshow-bg",
                        style: x()
                    }), Object(_.c)("div", {
                        className: v()("slideshow-images", "col-xsmall-12", "col-small-10", "col-small-offset-1", "col-medium-offset-0", "col-medium-5", "px-0"),
                        onMouseEnter: function() {
                            P("enter")
                        },
                        onMouseLeave: function() {
                            P("leave")
                        }
                    }, Object(_.c)("div", {
                        className: "aspect-ratio-sizer"
                    }), Object(_.c)("span", {
                        className: v()("complication", {
                            isBottom: d.squarePositionBottom
                        })
                    }, Object(_.c)("span", {
                        style: d.squareStyle
                    })), Object(_.c)("div", {
                        className: "images"
                    }, a.map((function(e, t) {
                        return Object(_.c)("div", {
                            key: e.slide_image,
                            className: v()({
                                "has-video": !!e.video_src
                            }, Object(o.a)({}, L, t === d.activeSlide), Object(o.a)({}, D, t === d.previousSlide), {
                                active: t === d.activeSlide && d.isActive
                            }),
                            onClick: function() {
                                "undefined" != typeof j.a && (k.current || (k.current = new j.a({
                                    id: e.video_src
                                })), k.current.playVideo({
                                    id: e.video_src
                                }), Object(m.b)("CTAEngagement", {
                                    eventCategory: "CTA Engagement",
                                    eventAction: "ClickPlay",
                                    eventLabel: "ClickPlay@Home-Customers"
                                }))
                            }
                        }, Object(_.c)("img", {
                            src: e.slide_image
                        }), e.video_src && Object(_.c)("button", {
                            className: v()("video-play", "-pulse")
                        }))
                    })))), Object(_.c)("aside", {
                        className: v()("col-xsmall-12", "col-small-10", "col-small-offset-1", "col-medium-offset-0", "col-medium-7", "px-0")
                    }, Object(_.c)("header", null, Object(_.c)("div", {
                        className: "data-logo-container"
                    }, a.map((function(e, t) {
                        return Object(_.c)("div", {
                            key: e.slide_image,
                            className: v()("data-logo-wrapper", Object(o.a)({}, L, !0), Object(o.a)({}, D, t !== d.activeSlide), {
                                active: t === d.activeSlide && d.isActive
                            })
                        }, Object(_.c)("img", {
                            src: e.slide_brand_image,
                            alt: e.slide_brand_name_notrans
                        }))
                    }))), Object(_.c)("div", {
                        className: "slideshow-nav",
                        "aria-label": "carousel buttons",
                        "aria-controls": "carousel"
                    }, Object(_.c)("button", {
                        value: "prev",
                        "aria-label": "previous",
                        onClick: function() {
                            return T("prev")
                        }
                    }, Object(_.c)("svg", {
                        width: "12",
                        height: "10",
                        viewBox: "0 0 12 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Object(_.c)("path", {
                        d: "M11.3346 5.66443L2.28466 5.66443L5.56747 8.88883C5.83364 9.15027 5.83364 9.54242 5.56747 9.80386C5.30129 10.0653 4.90203 10.0653 4.63586 9.80386L0.199631 5.44656C-0.066543 5.18512 -0.066543 4.79297 0.199631 4.53153L4.63586 0.174231C4.76895 0.0435118 4.9464 -6.06027e-05 5.12385 -6.05872e-05C5.3013 -6.05717e-05 5.47874 0.0435119 5.61183 0.174231C5.878 0.435669 5.878 0.827826 5.61183 1.08926L2.32902 4.31366L11.3346 4.31367C11.6895 4.31367 12 4.61868 12 4.96726C12 5.31584 11.6895 5.66443 11.3346 5.66443Z",
                        fill: "#6F7782"
                    }))), Object(_.c)("button", {
                        value: "next",
                        id: "next",
                        "aria-label": "next",
                        onClick: function() {
                            return T("next")
                        }
                    }, Object(_.c)("svg", {
                        width: "12",
                        height: "10",
                        viewBox: "0 0 12 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Object(_.c)("path", {
                        d: "M0.665434 4.33545H9.71534L6.43253 1.11105C6.16636 0.849612 6.16636 0.457455 6.43253 0.196017C6.69871 -0.0654205 7.09797 -0.0654205 7.36414 0.196017L11.8004 4.55332C12.0665 4.81475 12.0665 5.20691 11.8004 5.46835L7.36414 9.82565C7.23105 9.95637 7.0536 9.99994 6.87615 9.99994C6.69871 9.99994 6.52126 9.95637 6.38817 9.82565C6.122 9.56421 6.122 9.17205 6.38817 8.91061L9.67098 5.68621H0.665434C0.310535 5.68621 0 5.3812 0 5.03262C0 4.68403 0.310535 4.33545 0.665434 4.33545Z",
                        fill: "#6F7782"
                    }))))), Object(_.c)("div", {
                        className: "slideshow-content",
                        style: E < 960 ? {
                            minHeight: y.current
                        } : {
                            minHeight: null
                        },
                        ref: q
                    }, a.map((function(e, t) {
                        var n, i, c = e.video_src,
                            r = e.slide_quote,
                            a = e.slide_cite,
                            l = e.slide_brand_name_notrans,
                            s = c || null,
                            u = null === q || void 0 === q || null === (n = q.current) || void 0 === n || null === (i = n.children) || void 0 === i ? void 0 : i[t];
                        if (t === d.activeSlide && u) {
                            var f = u.offsetHeight || u.clientHeight,
                                b = f ? f + 40 : null;
                            y.current = b ? b + "px" : null
                        }
                        return Object(_.c)("div", {
                            className: v()("slide-content", Object(o.a)({}, L, !0), Object(o.a)({}, D, t !== d.activeSlide), {
                                active: t === d.activeSlide && d.isActive
                            }),
                            "data-video": s,
                            "data-name": l,
                            key: "quote-slide-".concat(t + 1)
                        }, Object(_.c)("div", null, Object(_.c)("blockquote", null, r && Object(_.c)("p", null, Object(_.c)(h.a, {
                            html: r
                        }))), a && Object(_.c)("cite", null, Object(_.c)(h.a, {
                            html: a
                        }))))
                    })))), Object(_.c)("footer", {
                        className: "col-xsmall-12 col-small-10 col-small-offset-1 col-medium-7 col-medium-offset-5 px-0",
                        style: x()
                    }, Object(_.c)(O.default, {
                        className: "cta-arrow-link",
                        href: n,
                        title: r,
                        onClick: function() {
                            Object(m.b)("CTAEngagement", {
                                eventCategory: "CTA Engagement",
                                eventAction: "ClickSecondaryCTA",
                                eventLabel: "ClickSecondaryCTA@Home-Customers"
                            })
                        }
                    }, c, Object(_.c)(g.a, null)), Object(_.c)("ul", null, a.map((function(e, t) {
                        return Object(_.c)("li", {
                            key: e.slide_quote,
                            className: v()({
                                active: d.activeSlide === t
                            }),
                            onClick: function() {
                                return function(e) {
                                    if (e !== d.activeSlide) {
                                        var t = d.squarePositionBottom ? S[0] : S[1],
                                            n = t.color,
                                            o = t.rotation,
                                            i = {
                                                backgroundColor: n,
                                                transform: "rotate(".concat(o, "deg)")
                                            };
                                        w((function(t) {
                                            return C(C({}, t), {}, {
                                                isActive: !1,
                                                activeSlide: e,
                                                squarePositionBottom: !t.squarePositionBottom,
                                                squareStyle: i,
                                                direction: e < t.activeSlide || e === a.length - 1 && 0 === t.activeSlide ? "next" : "prev",
                                                previousSlide: t.activeSlide
                                            })
                                        })), Object(m.b)("CTAEngagement", {
                                            eventCategory: "CTA Engagement",
                                            eventAction: "ClickBreadcrumb",
                                            eventLabel: "ClickBreadcrumb@Home-Customers"
                                        })
                                    }
                                }(t)
                            }
                        })
                    })))))
                };
            c.a.createElement;

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.default = function() {
                var e = Object(i.useContext)(r.a),
                    t = Object(i.useContext)(a.a).global_language,
                    n = (null === e || void 0 === e ? void 0 : e.sections.find((function(e) {
                        var t;
                        return "reskin/interactive/new-homepage-slideshow" === (null === (t = e.component) || void 0 === t ? void 0 : t.component_name_notrans)
                    }))) || {},
                    o = Object(l.a)(),
                    c = Object(s.b)("lang_pref").cookieValue,
                    u = [];
                switch (o) {
                    case "UK":
                        var d;
                        if (c && "en" === c) u = (null === n || void 0 === n || null === (d = n.region_quote_slides) || void 0 === d ? void 0 : d.UK) || n.quote_slides;
                        else u = n.quote_slides;
                        break;
                    case "DE":
                    case "CH":
                    case "AT":
                        var v;
                        if (c && "de" === c) u = (null === n || void 0 === n || null === (v = n.region_quote_slides) || void 0 === v ? void 0 : v.DE) || n.quote_slides;
                        else u = n.quote_slides;
                        break;
                    case "FR":
                        var f;
                        if (c && "fr" === c) u = (null === n || void 0 === n || null === (f = n.region_quote_slides) || void 0 === f ? void 0 : f.FR) || n.quote_slides;
                        else u = n.quote_slides;
                        break;
                    case "AU":
                    case "NZ":
                        var b;
                        if (c && "en" === c) u = (null === n || void 0 === n || null === (b = n.region_quote_slides) || void 0 === b ? void 0 : b.APAC) || n.quote_slides;
                        else u = n.quote_slides;
                        break;
                    case "JP":
                        var m;
                        if (c && "ja" === c) u = (null === n || void 0 === n || null === (m = n.region_quote_slides) || void 0 === m ? void 0 : m.JP) || n.quote_slides;
                        else u = n.quote_slides;
                        break;
                    default:
                        u = n.quote_slides
                }
                var p = u.reduce((function(e, t, n) {
                        return t.video_src && e.push(n), e
                    }), []),
                    g = q(q({}, n), {}, {
                        quote_slides: u,
                        slidesWithVideo: p
                    });
                return "es" === t && (g.quote_slides = g.quote_slides.map((function(e) {
                    return q(q({}, e), {}, {
                        slide_quote: e.slide_quote.replace(/\.$/g, "")
                    })
                }))), Object(_.c)(y, g)
            }
        },
        "7BfX": function(e, t, n) {
            ! function(e, t) {
                function n() {
                    return (n = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                        }
                        return e
                    }).apply(this, arguments)
                }
                var o = "Left",
                    i = "Right",
                    c = "Up",
                    r = "Down",
                    a = {
                        delta: 10,
                        preventDefaultTouchmoveEvent: !1,
                        rotationAngle: 0,
                        trackMouse: !1,
                        trackTouch: !0
                    },
                    l = {
                        first: !0,
                        initial: [0, 0],
                        start: 0,
                        swiping: !1,
                        xy: [0, 0]
                    },
                    s = "mousemove",
                    u = "mouseup",
                    d = "touchend",
                    v = "touchmove",
                    f = "touchstart";

                function b(e, t, n, a) {
                    return e > t ? n > 0 ? i : o : a > 0 ? r : c
                }

                function m(e, t) {
                    if (0 === t) return e;
                    var n = Math.PI / 180 * t;
                    return [e[0] * Math.cos(n) + e[1] * Math.sin(n), e[1] * Math.cos(n) - e[0] * Math.sin(n)]
                }

                function p(e, t) {
                    var o = function(t) {
                            t && "touches" in t && t.touches.length > 1 || e((function(e, o) {
                                o.trackMouse && (document.addEventListener(s, i), document.addEventListener(u, a));
                                var c = "touches" in t ? t.touches[0] : t,
                                    r = m([c.clientX, c.clientY], o.rotationAngle);
                                return n({}, e, l, {
                                    initial: [].concat(r),
                                    xy: r,
                                    start: t.timeStamp || 0
                                })
                            }))
                        },
                        i = function(t) {
                            e((function(e, o) {
                                if ("touches" in t && t.touches.length > 1) return e;
                                var i = "touches" in t ? t.touches[0] : t,
                                    c = m([i.clientX, i.clientY], o.rotationAngle),
                                    r = c[0],
                                    a = c[1],
                                    l = r - e.xy[0],
                                    s = a - e.xy[1],
                                    u = Math.abs(l),
                                    d = Math.abs(s),
                                    v = (t.timeStamp || 0) - e.start,
                                    f = Math.sqrt(u * u + d * d) / (v || 1),
                                    p = [l / (v || 1), s / (v || 1)];
                                if (u < o.delta && d < o.delta && !e.swiping) return e;
                                var g = b(u, d, l, s),
                                    O = {
                                        absX: u,
                                        absY: d,
                                        deltaX: l,
                                        deltaY: s,
                                        dir: g,
                                        event: t,
                                        first: e.first,
                                        initial: e.initial,
                                        velocity: f,
                                        vxvy: p
                                    };
                                O.first && o.onSwipeStart && o.onSwipeStart(O), o.onSwiping && o.onSwiping(O);
                                var h = !1;
                                return (o.onSwiping || o.onSwiped || "onSwiped" + g in o) && (h = !0), h && o.preventDefaultTouchmoveEvent && o.trackTouch && t.cancelable && t.preventDefault(), n({}, e, {
                                    first: !1,
                                    eventData: O,
                                    swiping: !0
                                })
                            }))
                        },
                        c = function(t) {
                            e((function(e, o) {
                                var i;
                                if (e.swiping && e.eventData) {
                                    i = n({}, e.eventData, {
                                        event: t
                                    }), o.onSwiped && o.onSwiped(i);
                                    var c = "onSwiped" + i.dir;
                                    c in o && o[c](i)
                                } else o.onTap && o.onTap({
                                    event: t
                                });
                                return n({}, e, l, {
                                    eventData: i
                                })
                            }))
                        },
                        r = function() {
                            document.removeEventListener(s, i), document.removeEventListener(u, a)
                        },
                        a = function(e) {
                            r(), c(e)
                        },
                        p = function(e, t) {
                            var n = function() {};
                            if (e && e.addEventListener) {
                                var r = [
                                    [f, o],
                                    [v, i],
                                    [d, c]
                                ];
                                r.forEach((function(n) {
                                    var o = n[0],
                                        i = n[1];
                                    return e.addEventListener(o, i, {
                                        passive: t
                                    })
                                })), n = function() {
                                    return r.forEach((function(t) {
                                        var n = t[0],
                                            o = t[1];
                                        return e.removeEventListener(n, o)
                                    }))
                                }
                            }
                            return n
                        },
                        g = {
                            ref: function(t) {
                                null !== t && e((function(e, o) {
                                    if (e.el === t) return e;
                                    var i = {};
                                    return e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), i.cleanUpTouch = void 0), o.trackTouch && t && (i.cleanUpTouch = p(t, !o.preventDefaultTouchmoveEvent)), n({}, e, {
                                        el: t
                                    }, i)
                                }))
                            }
                        };
                    return t.trackMouse && (g.onMouseDown = o), [g, p]
                }

                function g(e, t, o) {
                    var i = {};
                    return !t.trackTouch && e.cleanUpTouch ? (e.cleanUpTouch(), i.cleanUpTouch = void 0) : t.trackTouch && !e.cleanUpTouch && e.el && (i.cleanUpTouch = o(e.el, !t.preventDefaultTouchmoveEvent)), n({}, e, i)
                }

                function O(e) {
                    var o = e.trackMouse,
                        i = t.useRef(n({}, l)),
                        c = t.useRef(n({}, a));
                    c.current = n({}, a, e);
                    var r = t.useMemo((function() {
                            return p((function(e) {
                                return i.current = e(i.current, c.current)
                            }), {
                                trackMouse: o
                            })
                        }), [o]),
                        s = r[0],
                        u = r[1];
                    return i.current = g(i.current, c.current, u), s
                }
                e.DOWN = r, e.LEFT = o, e.RIGHT = i, e.UP = c, e.useSwipeable = O
            }(t, n("q1tI"))
        }
    }
]);