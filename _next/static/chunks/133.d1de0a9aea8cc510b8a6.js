(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [133], {
        "3YH5": function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, "default", (function() {
                return g
            }));
            var n = e("HALo"),
                c = e("q1tI"),
                s = e.n(c),
                r = e("TSYQ"),
                o = e.n(r),
                i = e("r3F2"),
                l = e("jQyn"),
                u = e("bW4L"),
                d = e("sJyK"),
                m = e("AeFk"),
                b = (s.a.createElement, function(t) {
                    var a = t.language,
                        e = t.graph_text_stack,
                        n = t.video_at_risk,
                        r = t.video_off_track,
                        b = t.video_on_track,
                        p = t.graph_background;
                    if (!e || !r || !b || !n) return l.default.error("Proper data not supplied to TextAndVideoWithImageUnderlay component"), null;
                    var g = e.label,
                        f = e.heading,
                        k = e.subheading,
                        _ = e.button_on_track_text,
                        v = e.button_at_risk_text,
                        O = e.button_off_track_text,
                        j = Object(c.useState)("on-track"),
                        h = j[0],
                        N = j[1],
                        x = Object(c.useState)("on-track"),
                        y = x[0],
                        A = x[1],
                        w = Object(c.useState)(!1),
                        C = w[0],
                        E = w[1],
                        S = Object(c.useRef)(null),
                        T = function(t) {
                            E(!0), N(t), S.current = setTimeout((function() {
                                E(!1), A(t)
                            }), 400)
                        };
                    Object(c.useEffect)((function() {
                        var t;
                        switch (h) {
                            case "on-track":
                                t = "OnTrack";
                                break;
                            case "at-risk":
                                t = "AtRisk";
                                break;
                            case "off-track":
                                t = "OffTrack";
                                break;
                            default:
                                l.default.error('trackStatusUpdate failed because activeGraph "'.concat(h, '" is not valid'))
                        }
                        Object(u.b)("CTAEngagement", {
                            eventCategory: "CTA Engagement",
                            eventAction: "ClickStatus",
                            eventLabel: "ClickStatus-".concat(t, "@Home-Reporting")
                        })
                    }), [h]);
                    var I = function(t, a) {
                            var e = t.find((function(t) {
                                return t.lang_notrans && t.lang_notrans === a
                            }));
                            return e || t.find((function(t) {
                                return t.lang_notrans && t.lang_notrans === d.DEFAULT_LANGUAGE
                            }))
                        },
                        F = I(b, a),
                        L = I(n, a),
                        P = I(r, a),
                        U = I(p, a);
                    return Object(m.c)(s.a.Fragment, null, Object(m.c)("div", {
                        className: "row",
                        "data-graph-background-color": h
                    }, Object(m.c)("div", {
                        className: "col-xsmall-12 col-small-10 col-small-offset-1 col-medium-5 col-medium-offset-0 col-xlarge-4 mb-3 mb-xs-5"
                    }, Object(m.c)("div", {
                        className: "graph-textStack mb-2 mb-xs-5 mb-xl-8"
                    }, Object(m.c)("span", {
                        className: "-label"
                    }, g), f && Object(m.c)("h4", {
                        className: "col-xsmall-8 col-small-12 px-0 mb-1 mb-xs-1p"
                    }, Object(m.c)(i.a, {
                        html: f
                    })), Object(m.c)("p", null, k)), Object(m.c)("div", {
                        className: "graph-buttons-container pt-1p pt-lg-2"
                    }, Object(m.c)("button", {
                        tabIndex: "0",
                        className: o()("graph-button", {
                            "-is-active": "on-track" === h
                        }),
                        "data-statustype": "on-track",
                        onClick: function() {
                            return T("on-track")
                        }
                    }, Object(m.c)("span", null), _), Object(m.c)("button", {
                        className: o()("graph-button", {
                            "-is-active": "at-risk" === h
                        }),
                        "data-statustype": "at-risk",
                        onClick: function() {
                            return T("at-risk")
                        }
                    }, Object(m.c)("span", null), v), Object(m.c)("button", {
                        className: o()("graph-button", {
                            "-is-active": "off-track" === h
                        }),
                        "data-statustype": "off-track",
                        onClick: function() {
                            return T("off-track")
                        }
                    }, Object(m.c)("span", null), O))), Object(m.c)("div", {
                        className: "graph-video-section col-xsmall-12 col-small-10 col-small-offset-1 col-medium-6 col-xlarge-7 mt-md-7 mb-md-4 px-md-0"
                    }, Object(m.c)("div", {
                        className: "graph-video-container"
                    }, Object(m.c)("div", {
                        className: o()("graph-video-wrapper", {
                            "-is-transitioning": C
                        })
                    }, F && F.src_notrans && Object(m.c)("video", {
                        className: o()("videoAnimation graph-video", {
                            "-is-hidden": "on-track" !== y
                        }),
                        "data-statustype": "on-track",
                        poster: F.poster_notrans,
                        "data-src": F.src_notrans,
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        loop: !0,
                        src: F.src_notrans
                    }), F && !F.src_notrans && Object(m.c)("img", {
                        className: o()("videoAnimation graph-video", {
                            "-is-hidden": "on-track" !== y
                        }),
                        src: F.poster_notrans
                    }), L && L.src_notrans && Object(m.c)("video", {
                        className: o()("videoAnimation graph-video", {
                            "-is-hidden": "at-risk" !== y
                        }),
                        "data-statustype": "at-risk",
                        poster: L.poster_notrans,
                        "data-src": L.src_notrans,
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        loop: !0,
                        src: L.src_notrans
                    }), L && !L.src_notrans && Object(m.c)("img", {
                        className: o()("videoAnimation graph-video", {
                            "-is-hidden": "at-risk" !== y
                        }),
                        src: L.poster_notrans
                    }), P && P.src_notrans && Object(m.c)("video", {
                        className: o()("videoAnimation graph-video", {
                            "-is-hidden": "off-track" !== y
                        }),
                        "data-statustype": "off-track",
                        poster: P.poster_notrans,
                        "data-src": P.src_notrans,
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        loop: !0,
                        src: P.src_notrans
                    }), P && !P.src_notrans && Object(m.c)("img", {
                        className: o()("videoAnimation graph-video", {
                            "-is-hidden": "off-track" !== y
                        }),
                        src: P.poster_notrans
                    })), U && Object(m.c)("img", {
                        className: "graph-image",
                        src: U.src_notrans,
                        alt: U.alt ? U.alt : "asana reporting statuses"
                    })))))
                }),
                p = e("usKF");
            s.a.createElement;

            function g(t) {
                var a = Object(c.useContext)(p.a);
                return Object(m.c)(b, Object(n.a)({}, t, {
                    language: a.global_language
                }))
            }
        }
    }
]);