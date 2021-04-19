(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [29], {
        "1GBj": function(e, t, a) {
            var c = a("vlbB");
            e.exports = function(e, t) {
                var a = -1,
                    n = e.length,
                    o = n - 1;
                for (t = void 0 === t ? n : t; ++a < t;) {
                    var i = c(a, o),
                        l = e[i];
                    e[i] = e[a], e[a] = l
                }
                return e.length = t, e
            }
        },
        "9WAK": function(e, t, a) {
            var c = a("Il6v"),
                n = a("OVaF"),
                o = a("Z0cm");
            e.exports = function(e) {
                return (o(e) ? c : n)(e)
            }
        },
        Il6v: function(e, t, a) {
            var c = a("Q1l4"),
                n = a("1GBj");
            e.exports = function(e) {
                return n(c(e))
            }
        },
        OVaF: function(e, t, a) {
            var c = a("1GBj"),
                n = a("P/G1");
            e.exports = function(e) {
                return c(n(e))
            }
        },
        WL7e: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "DynamicMastheadContainer", (function() {
                return I
            }));
            var c = a("xvhg"),
                n = a("q1tI"),
                o = a.n(n),
                i = a("HJ2n"),
                l = a("HALo"),
                s = a("9WAK"),
                r = a.n(s),
                u = a("TSYQ"),
                d = a.n(u),
                m = a("bW4L"),
                b = a("9rhg"),
                p = a("r3F2"),
                v = ["-blue", "-red", "-gold", "-blue-green", "-orange", "-purple", "-violet"],
                O = [{
                    team: "figma",
                    tasks: [{
                        x: 40,
                        y: 32,
                        depth: 1
                    }, {
                        x: 18,
                        y: 49,
                        depth: 4
                    }, {
                        x: 40,
                        y: 58,
                        depth: 4
                    }]
                }, {
                    team: "fireclay",
                    tasks: [{
                        x: 17,
                        y: 32,
                        depth: 1
                    }, {
                        x: 10,
                        y: 40,
                        depth: 4
                    }, {
                        x: 50,
                        y: 53,
                        depth: 4
                    }]
                }, {
                    team: "mixpanel",
                    tasks: [{
                        x: 42,
                        y: 22,
                        depth: 0
                    }, {
                        x: 8,
                        y: 45,
                        depth: 1
                    }, {
                        x: 38,
                        y: 55,
                        depth: 4
                    }]
                }],
                j = a("76ZC"),
                f = a.n(j),
                h = a("//LF"),
                g = a("AeFk"),
                k = (o.a.createElement, function(e) {
                    var t = e.task,
                        a = e.taskStyle,
                        c = e.shadowTaskStyle,
                        i = e.taskSpanStyle,
                        l = e.colorClass,
                        s = e.onComplete,
                        r = t && Object(h.truncate)(f()(t), 38, "..."),
                        u = Object(n.useState)(!0),
                        b = u[0],
                        p = u[1],
                        v = Object(n.useRef)("");
                    return Object(n.useEffect)((function() {
                        return v.current = setTimeout((function() {
                                p(!1)
                            }), 900),
                            function() {
                                return clearTimeout(v.current)
                            }
                    }), []), Object(g.c)(o.a.Fragment, null, Object(g.c)("label", {
                        className: d()("task", {
                            completed: b
                        }),
                        style: a
                    }, Object(g.c)("input", {
                        type: "checkbox",
                        onChange: function() {
                            s(), p(!0), Object(m.b)("CTAEngagement", {
                                eventCategory: "CTA Engagement",
                                eventAction: "ClickTask",
                                eventLabel: "ClickTask@Home-Hero"
                            })
                        }
                    }), Object(g.c)("span", {
                        className: d()(l),
                        style: i
                    }, Object(g.c)("div", {
                        className: "check"
                    }), r)), Object(g.c)("label", {
                        className: d()("task", "task-shadow", l, {
                            completed: b
                        }),
                        style: c
                    }, Object(g.c)("input", {
                        type: "checkbox"
                    }), Object(g.c)("span", null, Object(g.c)("div", {
                        className: "check"
                    }), r)))
                }),
                y = (o.a.createElement, function(e) {
                    var t = e.props,
                        a = e.updateActiveGroup,
                        c = t.background_image_notrans,
                        o = t.foreground_image_notrans,
                        i = t.tasks,
                        l = t.caption,
                        s = t.team_notrans,
                        r = i.length,
                        u = O.find((function(e) {
                            return e.team === s
                        })),
                        d = Object(n.useState)(0),
                        m = d[0],
                        b = d[1],
                        p = Object(n.useState)(0),
                        j = p[0],
                        f = p[1],
                        h = Object(n.useState)([]),
                        y = h[0],
                        C = h[1],
                        x = Object(n.useRef)(null);
                    Object(n.useEffect)((function() {
                        j === r && a()
                    }), [j]), Object(n.useEffect)((function() {
                        C(function(e) {
                            return e.sort((function() {
                                return Math.random() - .5
                            })).filter((function(e, t) {
                                return t < 3
                            }))
                        }(v))
                    }), [t]), Object(n.useEffect)((function() {
                        if (m) {
                            var e = "https://asana.com/assets/audio/double_tap_".concat(m, ".mp3");
                            x.current = new Audio(e), x.current.play()
                        }
                    }), [m]);
                    var w = i.map((function(e, t) {
                        var a = u || O[t],
                            c = {
                                left: "".concat(a.tasks[t].x, "%"),
                                top: "".concat(a.tasks[t].y, "%"),
                                zIndex: "".concat(a.tasks[t].depth + 1)
                            },
                            n = Object.assign({}, c, {
                                zIndex: a.tasks[t].depth,
                                animationDelay: "-".concat(t + 2, "s")
                            }),
                            o = {
                                animationDelay: "-".concat(t + 2, "s")
                            },
                            i = y[t];
                        return Object(g.c)(k, {
                            key: t + e,
                            task: e,
                            taskStyle: c,
                            shadowTaskStyle: n,
                            taskSpanStyle: o,
                            colorClass: i,
                            onComplete: function() {
                                b(3 === m ? 1 : m + 1), f(j === r ? 1 : j + 1)
                            }
                        })
                    }));
                    return Object(g.c)("div", {
                        className: "tasks-group",
                        "data-team": s
                    }, Object(g.c)("div", {
                        style: {
                            backgroundImage: "url(".concat(c, ")")
                        },
                        className: "task-background"
                    }), w, Object(g.c)("div", {
                        style: {
                            backgroundImage: "url(".concat(o, ")")
                        },
                        className: "task-foreground"
                    }), Object(g.c)("span", {
                        className: "task-caption"
                    }, l))
                }),
                C = a("i1cl"),
                x = a("7ucd"),
                w = a("3Tpg"),
                A = a("g4pe"),
                _ = a.n(A);
            o.a.createElement;

            function S(e) {
                var t = Object(n.useState)(null),
                    a = t[0],
                    c = t[1];
                Object(n.useEffect)((function() {
                    a || c(new C.a({
                        id: e.vimeoId
                    }))
                }), []);
                return Object(g.c)(o.a.Fragment, null, Object(g.c)(_.a, null, Object(g.c)("style", {
                    key: "experiment-watch-video-cta"
                }, ".new-homepage .masthead .col .masthead-ctas button.exp-watch-video-button,.new-homepage .masthead .col .masthead-ctas button.exp-watch-video-text{display:none}@media (min-width:480px){.new-homepage .masthead .col .masthead-ctas button.exp-watch-video-button,.new-homepage .masthead .col .masthead-ctas button.exp-watch-video-text{display:flex;padding:0}}.new-homepage .masthead .col .masthead-ctas a{margin-right:32px}")), Object(g.c)("button", {
                    className: "exp-watch-video-text",
                    onClick: function() {
                        if (a && a.playVideo) {
                            a.playVideo(), a.trackHomepageWatchVideoCtaEvents();
                            var t = null !== e && void 0 !== e && e.copy && null !== e && void 0 !== e && e.name ? "-".concat(null === e || void 0 === e ? void 0 : e.copy, " ").concat(null === e || void 0 === e ? void 0 : e.name) : "";
                            Object(m.b)("CTAEngagement", {
                                eventCategory: "CTA Engagement",
                                eventAction: "ClickSecondaryCTA",
                                eventLabel: "ClickSecondaryCTA".concat(t, "@Home-Hero")
                            })
                        }
                    },
                    "data-video-id": e.vimeoId
                }, Object(g.c)("span", null, e.copy), Object(g.c)("span", {
                    className: "video-btn exp-watch-video-button"
                })))
            }
            var T = a("V2NO"),
                E = a("rOX3"),
                N = a("VHp+"),
                H = (a("arJ1"), a("3yPi")),
                V = (o.a.createElement, function(e) {
                    var t, a = e.mastheadSection,
                        i = a.title,
                        s = a.description,
                        u = a.vimeo_video_id,
                        v = (a.view_demo_label, a.video_section),
                        O = a.masthead_layout_type_notrans,
                        j = a.task_groups,
                        f = v.background_video_poster,
                        h = v.background_video_src,
                        k = Object(x.a)(),
                        A = Object(c.a)(k, 2),
                        _ = A[0],
                        V = A[1],
                        I = T.a.homepageCtaText,
                        F = T.a.multipleWatchVideoCtas,
                        W = Object(E.a)("homepageScrollability").experiment,
                        L = (null === W || void 0 === W ? void 0 : W.variant) > 0;
                    switch (null === W || void 0 === W ? void 0 : W.variant) {
                        case 1:
                            t = 128;
                            break;
                        case 2:
                            t = 70;
                            break;
                        default:
                            t = 0
                    }
                    var G = 56 + t,
                        M = Object(n.useState)(null),
                        B = M[0],
                        P = M[1];
                    Object(n.useEffect)((function() {
                        B || P(new C.a({
                            id: u
                        }))
                    }), []);
                    var J = Object(n.useState)([]),
                        D = J[0],
                        z = J[1];
                    Object(n.useEffect)((function() {
                        z(r()(j))
                    }), []);
                    var K = Object(n.useState)(0),
                        Q = K[0],
                        R = K[1],
                        Z = function() {
                            if (B && B.playVideo) {
                                B.playVideo(), B.trackHomepageWatchVideoCtaEvents();
                                Object(m.b)("CTAEngagement", {
                                    eventCategory: "CTA Engagement",
                                    eventAction: "ClickSecondaryCTA",
                                    eventLabel: "ClickSecondaryCTA".concat("-Watch video", "@Home-Hero")
                                })
                            }
                        },
                        q = function() {
                            Object(m.b)("CTAEngagement", {
                                eventCategory: "CTA Engagement",
                                eventAction: "ClickPrimaryCTA",
                                eventLabel: "ClickPrimaryCTA@Home-Hero"
                            })
                        };
                    return Object(g.c)(o.a.Fragment, null, Object(g.c)("div", {
                        className: "col col-xsmall-12 col-small-offset-1 col-small-10 col-medium-5 col-medium-offset-0 px-0 pb-xs-5 pb-md-0"
                    }, Object(g.c)("h3", null, Object(g.c)(p.a, {
                        html: i
                    })), s && Object(g.c)("p", {
                        className: "col-medium-12 col-xlarge-9 px-0"
                    }, Object(g.c)(p.a, {
                        html: s
                    })), Object(g.c)("div", {
                        className: "masthead-ctas"
                    }, Object(g.c)(w.c, {
                        experimentName: "homepageCtaText"
                    }, Object(g.c)(w.a, null, Object(g.c)(b.default, {
                        isMastheadSection: !!a,
                        onClick: q
                    })), Object(g.c)(w.b, null, Object(g.c)(b.default, Object(l.a)({
                        isMastheadSection: !!a,
                        onClick: q
                    }, I.props)))), Object(g.c)(w.c, {
                        experimentName: "multipleWatchVideoCtas"
                    }, Object(g.c)(w.a, null), Object(g.c)(w.b, {
                        name: "1"
                    }, Object(g.c)(S, F.props.productAdCampaign)), Object(g.c)(w.b, {
                        name: "2"
                    }, Object(g.c)(S, F.props.fallAdCampaign))))), Object(g.c)("div", {
                        ref: _,
                        className: d()("col col-xsmall-12 col-medium-6 col-medium-offset-1 px-0 col-right", {
                            "-in-viewport": V
                        })
                    }, "tasks" === O ? Object(g.c)(o.a.Fragment, null, D[Q] && Object(g.c)(y, {
                        props: D[Q],
                        updateActiveGroup: function() {
                            R(2 === Q ? 0 : Q + 1)
                        }
                    })) : Object(g.c)("div", {
                        className: "masthead-video-wrapper",
                        "data-video-id": v.vimeo_video_id,
                        onClick: Z
                    }, Object(g.c)("div", {
                        className: "masthead-video"
                    }, Object(g.c)("video", {
                        poster: f,
                        "data-src": h,
                        muted: "",
                        playsInline: "",
                        autoPlay: "",
                        loop: "",
                        src: h
                    })), Object(g.c)("button", {
                        className: "masthead-video-button video-play -pulse",
                        "data-video-id": v.vimeo_video_id,
                        onClick: Z
                    }))), L && Object(g.c)("a", {
                        className: "cta-arrow-link",
                        onClick: function() {
                            H.a.scrollTo("scrolling-features", G), Object(m.b)("ClickScrollArrow@Homepage-Hero", {
                                eventCategory: "CTA Engagement"
                            })
                        }
                    }, Object(g.c)(N.a, null)))
                }),
                I = (o.a.createElement, function() {
                    var e = Object(n.useContext)(i.a),
                        t = Object(c.a)(e.sections, 1)[0];
                    return Object(g.c)(V, {
                        mastheadSection: t
                    })
                });
            t.default = I
        },
        vlbB: function(e, t) {
            var a = Math.floor,
                c = Math.random;
            e.exports = function(e, t) {
                return e + a(c() * (t - e + 1))
            }
        }
    }
]);