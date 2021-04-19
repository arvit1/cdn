(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [1, 45, 63], {
        "/t9p": function(e, t, n) {
            "use strict";
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("85U7"),
                o = n("DZdY"),
                l = n("a6Fb"),
                s = n("DYRV"),
                u = n("QhEq"),
                d = Object(o.a)("span", {
                    target: "e53gyg60"
                })((function(e) {
                    var t = e.size,
                        n = void 0 === t ? "regular" : t;
                    return Object(l.a)("regular" === n ? "tag" : "tag-small")
                }), ";background:", (function(e) {
                    var t = e.color;
                    return t ? u.b[t] : s.a.GRAY_10
                }), ";display:inline-block;padding:", (function(e) {
                    var t = e.size;
                    return "regular" === (void 0 === t ? "regular" : t) ? "5px" : "2px 4px"
                }), ";text-transform:uppercase;color:white;border-radius:3px;&:hover{background:", (function(e) {
                    return !e.color && s.a.PURPLE_5
                }), ";}"),
                m = n("LVtp"),
                f = n("AeFk"),
                b = n("siQn"),
                g = n("tBhh"),
                p = n("0gmx");
            r.a.createElement;
            var h = Object(o.a)("div", {
                    target: "ec12j4x4"
                })("background:", s.a.GRAY_5, ";margin-top:", g.a.SPACING_8, ";margin-bottom:", g.a.SPACING_16, ';height:1px;width:100%;position:relative;overflow:hidden;:after{content:"";background:', (function(e) {
                    var t = e.color;
                    return u.b[t]
                }), ";display:block;width:100%;height:100%;position:absolute;top:0;left:0;transform:translate(-100%);transition:transform 300ms ease-in-out;}"),
                v = Object(o.a)("p", {
                    target: "ec12j4x3"
                })(Object(l.a)("p-x-small"), " color:", s.a.GRAY_8, ";"),
                O = Object(o.a)("h3", {
                    target: "ec12j4x2"
                })(Object(l.a)("heading-4"), " margin-bottom:", g.a.SPACING_8, ";"),
                j = Object(o.a)(b.default, {
                    target: "ec12j4x1"
                })({
                    name: "1kzq5ms",
                    styles: "height:100%;width:100%"
                }),
                y = function(e) {
                    return Object(f.c)(p.a, Object(a.a)({
                        css: Object(f.b)("border:1px solid ", s.a.GRAY_2, ";overflow:hidden;background-color:", u.b[e.color], ";", "")
                    }, e))
                },
                _ = parseInt(g.a.SPACING_16),
                k = Object(o.a)("div", {
                    target: "ec12j4x0"
                })("border-bottom:none;position:relative;display:block;", j, "{transition:transform 200ms ease-in-out;}:hover,:focus{border-bottom:none;outline:none;", h, ":after{transform:translate(0);}", j, "{transform:translateX(4px);}}:before{content:'';position:absolute;top:-", _, "px;left:-", _, "px;border:1px solid ", s.a.GRAY_9, ";background-color:", s.a.GRAY_2, ";border-radius:3px;height:calc(100% + ", 2 * _, "px);width:calc(100% + ", 2 * _, "px);opacity:0;pointer-events:none;transition:opacity 100ms linear;}:focus{:before{opacity:1;}}");
            r.a.createElement;
            var w = {
                    name: "1lby940",
                    styles: "position:absolute;top:0;right:0"
                },
                N = {
                    name: "6perlf",
                    styles: "padding-right:55px;position:relative"
                };
            t.a = function(e) {
                var t = Object(c.useState)(!1),
                    n = t[0],
                    r = t[1],
                    o = e.header,
                    l = e.url,
                    s = e.image,
                    u = e.publishDate,
                    b = e.color,
                    g = e.tag,
                    p = l ? "a" : "div";
                return Object(f.c)(k, Object(a.a)({
                    as: p
                }, l ? {
                    href: l
                } : {}, {
                    onMouseOver: function() {
                        return r(!0)
                    },
                    onMouseOut: function() {
                        return r(!1)
                    }
                }), s && Object(f.c)(y, {
                    color: b,
                    ratio: [3, 2]
                }, Object(f.c)(j, {
                    src: s.src
                })), Object(f.c)(h, {
                    color: b
                }), Object(f.c)("div", {
                    css: N
                }, Object(f.c)(d, {
                    size: "small",
                    color: b
                }, g), Object(f.c)(O, null, o), Object(f.c)(v, null, Object(i.a)(u)), Object(f.c)(m.b, {
                    active: n,
                    css: w,
                    color: b,
                    angle: 90,
                    size: "small"
                })))
            }
        },
        "0gmx": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n("AeFk"),
                c = n("DZdY"),
                r = n("q1tI");
            n.n(r).a.createElement;
            var i = Object(c.a)("div", {
                    target: "e8sk55l1"
                })({
                    name: "zfq8lp",
                    styles: "height:0;position:relative"
                }),
                o = Object(c.a)("div", {
                    target: "e8sk55l0"
                })({
                    name: "1b4920d",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%"
                }),
                l = function(e) {
                    var t = e.children,
                        n = e.ratio,
                        c = void 0 === n ? [16, 9] : n,
                        r = e.className;
                    return Object(a.c)(i, {
                        className: r,
                        css: Object(a.b)({
                            paddingBottom: "calc(".concat(c[1], " / ").concat(c[0], " * 100%)")
                        }, "", "")
                    }, Object(a.c)(o, null, t))
                }
        },
        "1B7j": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("AeFk");
            c.a.createElement;

            function i(e) {
                return Object(r.c)("div", {
                    className: "imageCards-column col-xsmall-12 col-small-6 col-xlarge-3"
                }, "Social Image Card (not implemented).")
            }
        },
        "3yPi": function(e, t, n) {
            "use strict";
            var a = {
                timer: null,
                startTime: null,
                raf: null,
                percentage: 0,
                duration: 1e3,
                targetY: null,
                callback: null,
                easing: {
                    outQuint: function(e, t, n, a, c) {
                        return a * ((t = t / c - 1) * t * t * t * t + 1) + n
                    }
                },
                stop: function() {
                    window.cancelAnimationFrame(this.raf)
                },
                scrollTo: function(e, t, n) {
                    var a = document.getElementById(e).getBoundingClientRect();
                    this.callback = n, this.targetY = a.top - (t || 0), this.startTime = performance.now(), this.percentage = 0, this.initialPosition = window.scrollY, this.raf && this.stop(), this.raf = window.requestAnimationFrame(this.step.bind(this))
                },
                step: function(e) {
                    var t = e - this.startTime,
                        n = t / this.duration;
                    if (t > this.duration && this.stop(), n > 1) this.stop(), this.callback && this.callback();
                    else {
                        var a = this.easing.outQuint(0, t, this.initialPosition, this.targetY, this.duration);
                        window.scrollTo(0, a), window.requestAnimationFrame(this.step.bind(this))
                    }
                }
            };
            t.a = a
        },
        "4fRq": function(e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var a = new Uint8Array(16);
                e.exports = function() {
                    return n(a), a
                }
            } else {
                var c = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), c[t] = e >>> ((3 & t) << 3) & 255;
                    return c
                }
            }
        },
        "5yOH": function(e, t, n) {
            "use strict";
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("TSYQ"),
                o = n.n(i),
                l = n("VTyt"),
                s = n("vPbN"),
                u = n("siQn"),
                d = n("r3F2"),
                m = n("VHp+"),
                f = n("AeFk");
            r.a.createElement;

            function b(e) {
                var t = e.image,
                    n = e.headline,
                    a = e.wistia_id,
                    c = e.is_video_x,
                    i = e.link_text,
                    l = e.icon_src,
                    s = e.decorate_cta_with_arrow;
                return Object(f.c)(r.a.Fragment, null, Object(f.c)("div", {
                    className: o()("imageCard-image-wrapper", {
                        "-full": !n
                    })
                }, t && Object(f.c)(r.a.Fragment, null, n ? Object(f.c)(u.default, {
                    className: "imageCard-image",
                    src: t,
                    alt: n || null,
                    no_lazy: a
                }) : Object(f.c)("div", {
                    className: "imageCard-image",
                    style: {
                        background: "url('".concat(t, "') no-repeat center center"),
                        backgroundSize: "cover"
                    }
                })), (a || c) && Object(f.c)("div", {
                    className: "imageCard-video-btn"
                })), n && Object(f.c)("div", {
                    className: "imageCard-text"
                }, l && Object(f.c)("img", {
                    className: "imageCard-icon",
                    src: l,
                    alt: n
                }), Object(f.c)(d.a, {
                    html: '<p class="imageCard-headline -large">'.concat(n, "</p>")
                }), i && Object(f.c)("div", {
                    className: "imageCard-link-text ".concat(s && "cta-arrow-link")
                }, Object(f.c)(d.a, {
                    html: i
                }), s && Object(f.c)(m.a, null))))
            }
            t.a = function(e) {
                var t = e.items_show_x_cards_on_mobile,
                    n = e.link_x,
                    c = e.link_text,
                    r = e.image_src_x,
                    i = e.icon_src,
                    u = e.image,
                    d = e.wistia_id,
                    m = e.headline,
                    g = e.isFeatured,
                    p = e.decorate_cta_with_arrow,
                    h = o()("imageCards-column", !m && "-image-only", "col-xsmall-12", "col-small-6", !g && "col-xlarge-3"),
                    v = function() {
                        return Object(f.c)(b, Object(a.a)({
                            show_mobile: t,
                            link: n,
                            link_text: c,
                            image: u || r,
                            wistia_id: d,
                            icon_src: i,
                            decorate_cta_with_arrow: p
                        }, e))
                    };
                return Object(f.c)("div", {
                    className: h
                }, Object(f.c)("div", {
                    className: "imageCard"
                }, Object(f.c)("div", {
                    className: o()("imageCard-content", {
                        "-flat": !m
                    })
                }, d && Object(f.c)(s.a, {
                    wistiaId: d
                }, Object(f.c)(v, null)), n && !d && Object(f.c)(l.default, {
                    className: "imageCard-link",
                    href: n,
                    open_in_tab: !0
                }, Object(f.c)(v, null)), !n && !d && Object(f.c)(v, null))))
            }
        },
        "6mAD": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("TSYQ"),
                o = n.n(i),
                l = n("5yOH"),
                s = n("1B7j"),
                u = n("VTyt"),
                d = n("AeFk");
            r.a.createElement;

            function m(e) {
                var t = e.items,
                    n = e.image_cards_headline,
                    c = e.image_cards_subhead,
                    i = e.image_cards_link_x,
                    u = n || c || i;
                return Object(d.c)(r.a.Fragment, null, Object(d.c)("section", {
                    className: o()("imageCards", e.image_cards_background_notrans)
                }, u && Object(d.c)(f, e), Object(d.c)("div", {
                    className: "container"
                }, Object(d.c)("div", {
                    className: "row",
                    "data-grid": !0
                }, t && t.map((function(t, n) {
                    var c = e.featured_card_index ? n === e.featured_card_index : 5 === n;
                    return t.social_card ? Object(d.c)(s.a, Object(a.a)({
                        key: n
                    }, t)) : Object(d.c)(l.a, Object(a.a)({
                        key: n
                    }, t, {
                        isFeatured: c,
                        decorate_cta_with_arrow: t.decorate_cta_with_arrow,
                        icon_src: t.icon_src
                    }))
                }))))))
            }

            function f(e) {
                return Object(d.c)("header", {
                    className: "imageCards-header row"
                }, Object(d.c)("div", {
                    className: "col-medium-8 col-xlarge-6 col-medium-push-2 col-xlarge-push-3"
                }, e.image_cards_headline && Object(d.c)("h3", null, e.image_cards_headline), e.image_cards_subhead && Object(d.c)("p", {
                    className: "-large"
                }, e.image_cards_subhead), e.image_cards_link_x && Object(d.c)("div", {
                    className: "imageCards-cta"
                }, Object(d.c)(u.default, {
                    href: e.image_cards_link_x,
                    title: e.image_cards_link_title,
                    className: "button -border -large"
                }, e.image_cards_link_title))))
            }
        },
        "6wYT": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("g4pe"),
                i = n.n(r),
                o = n("SRXQ"),
                l = n("pgf7"),
                s = n("bb7u"),
                u = n("r3F2"),
                d = n("siQn"),
                m = n("AeFk");
            c.a.createElement;

            function f(e) {
                var t = e.index,
                    n = e.panel,
                    a = e.template_screenshot,
                    c = n.template_data.preview_image_urls[0],
                    r = n.template_data.template_id,
                    i = n.template_data.maximum_tier,
                    o = n.cta,
                    f = o.class_notrans,
                    b = o.link,
                    g = o.link_logged_in,
                    p = o.text;
                return Object(m.c)("div", {
                    className: "rotatingGallery-slide",
                    "data-index": t
                }, Object(m.c)("div", {
                    className: "rotatingGallery-image"
                }, Object(m.c)(d.default, {
                    alt: a,
                    src: c,
                    title: a
                })), Object(m.c)("div", {
                    className: "rotatingGallery-text"
                }, Object(m.c)(l.a, {
                    backgroundColor: n.template_data.background_color,
                    icon: n.template_data.icon_html
                }), Object(m.c)("div", {
                    className: "templates-rotatingGallery-content"
                }, Object(m.c)("h2", {
                    className: "templates-rotatingGallery-content-headline"
                }, Object(m.c)(u.a, {
                    html: n.template_data.name
                })), Object(m.c)("p", null, n.segment.name)), Object(m.c)("div", {
                    className: "templates-rotatingGallery-cta"
                }, Object(m.c)(s.a, {
                    class_notrans: f,
                    link: b,
                    link_logged_in: g,
                    text: p,
                    template_id: r,
                    maximum_tier: i
                }))))
            }
            c.a.createElement;

            function b(e) {
                var t = e.rotating_gallery_panels,
                    n = e.rotating_gallery_classes,
                    a = (e.heading_type, e.template_screenshot),
                    r = e.background_color;
                return Object(m.c)(c.a.Fragment, null, Object(m.c)("section", {
                    className: "rotatingGallery-container " + n,
                    style: {
                        backgroundColor: r
                    }
                }, Object(m.c)("div", {
                    className: "rotatingGallery"
                }, Object(m.c)("div", {
                    className: "rotatingGallery-slides"
                }, t && t.map((function(e, t) {
                    return Object(m.c)(f, {
                        index: t,
                        panel: e,
                        template_screenshot: a,
                        key: "".concat(e, "-").concat(t)
                    })
                }))))), Object(m.c)(i.a, null, Object(m.c)("script", {
                    src: Object(o.a)("js/page-specific/rotating-gallery.js"),
                    key: "rotating-gallery"
                })))
            }
        },
        "7ucd": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n("q1tI"),
                c = n("AilD"),
                r = Object(c.a)();

            function i() {
                var e = Object(a.useState)(null),
                    t = e[0],
                    n = e[1],
                    c = Object(a.useState)(!1),
                    i = c[0],
                    o = c[1];
                return Object(a.useDebugValue)(i), Object(a.useEffect)((function() {
                    if (t) return r.observe(t, (function(e) {
                        o(e.isIntersecting)
                    }))
                }), [t]), [n, i, function() {
                    r.unobserve(t)
                }]
            }
        },
        "85U7": function(e, t, n) {
            "use strict";

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = "string" === typeof e ? new Date(e) : e,
                    c = n || {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    };
                return a.toLocaleString(t, c)
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        AFSk: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("q1tI"),
                c = n.n(a),
                r = n("TSYQ"),
                i = n.n(r),
                o = n("r3F2"),
                l = n("siQn"),
                s = n("AeFk");
            c.a.createElement;
            t.default = function(e) {
                var t = e.asanas_background,
                    n = e.asanas_headline,
                    a = e.asanas_subhead,
                    r = e.asanas_people;
                return Object(s.c)("section", {
                    className: i()("asanas", t)
                }, Object(s.c)("div", {
                    className: "container"
                }, Object(s.c)("header", {
                    className: "asanas-header"
                }, Object(s.c)("div", {
                    className: "row"
                }, Object(s.c)("div", {
                    className: "col-medium-8 col-xlarge-6 col-medium-push-2 col-xlarge-push-3"
                }, n && Object(s.c)("h3", null, Object(s.c)(o.a, {
                    html: n
                })), a && Object(s.c)("p", {
                    className: "-large"
                }, Object(s.c)(o.a, {
                    html: a
                }))))), Object(s.c)("div", {
                    className: "row",
                    "data-grid": !0
                }, r.map((function(e, t) {
                    return Object(s.c)("div", {
                        key: t,
                        className: i()("asanas-asana col-small-4 col-large-2 -no-gutters", 0 === t ? "col-large-offset-2" : "col-large-offset-1")
                    }, Object(s.c)(l.default, {
                        className: "asana-image",
                        src: e.picture_x,
                        alt: "Picture of " + e.name
                    }), e.is_biography && Object(s.c)("h6", {
                        className: "asana-title -biography"
                    }, Object(s.c)(o.a, {
                        html: e.name
                    })), e.body && Object(s.c)("p", {
                        className: i()("asana-body", {
                            "-quote": !e.is_biography
                        })
                    }, e.is_biography ? Object(s.c)(o.a, {
                        html: e.body
                    }) : Object(s.c)(o.a, {
                        html: "&ldquo;".concat(e.body, "&rdquo;")
                    })), !e.is_biography && Object(s.c)(c.a.Fragment, null, Object(s.c)("p", {
                        className: "asana-description -small"
                    }, Object(s.c)("strong", null, Object(s.c)(o.a, {
                        html: e.name
                    }))), Object(s.c)("p", {
                        className: "asana-description -secondary -small"
                    }, Object(s.c)(o.a, {
                        html: e.position
                    })), Object(s.c)("p", {
                        className: "asana-description -secondary -small"
                    }, Object(s.c)(o.a, {
                        html: e.duration
                    }))))
                })))))
            }
        },
        Ahz6: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return v
            }));
            var a = n("HALo"),
                c = n("DZdY"),
                r = n("q1tI"),
                i = n.n(r),
                o = n("TSYQ"),
                l = n.n(o),
                s = n("R4Xt"),
                u = n("VTyt"),
                d = n("r3F2"),
                m = n("VnXm"),
                f = n("OD8u"),
                b = n("AeFk");
            i.a.createElement;
            var g = {
                name: "3tj8x",
                styles: '&:after{content:"";position:absolute;bottom:0;left:50%;transform-origin:left center;transform:translateX(-50%);display:block;height:1px;width:80%;max-width:1312px;background:#848F99;}'
            };
            var p = {
                    name: "xzpnsv",
                    styles: ".textblocks-row.-four img.textblock-image{width:auto;height:100%;display:block;margin-bottom:0;}.textblocks-row.-four .textblock-content>div{height:40px;width:100%;display:flex;align-items:start;overflow:hidden;margin-bottom:32px;}"
                },
                h = Object(c.a)(m.b, {
                    target: "e1xxu0pn0"
                })((function(e) {
                    return e.isHr ? g : ""
                }), ";", (function(e) {
                    return Object(f.a)(e.theme)
                }), ";", (function(e) {
                    return e.isLogos && p
                }), ";");

            function v(e) {
                var t = e.headline,
                    n = e.subhead,
                    c = e.ctaText,
                    r = e.ctaLink,
                    i = e.ctaSubtext,
                    o = e.background,
                    m = e.classes,
                    f = e.alignment,
                    g = e.column_classes,
                    p = e.wide_layout,
                    v = e.pop,
                    O = e.items,
                    j = e.theme,
                    y = e.isLogos,
                    _ = e.hrOnOff;
                return Object(b.c)(h, {
                    className: l()("textblocks", o, m),
                    theme: j,
                    isLogos: y,
                    isSectionBuilder: !1,
                    isHr: _
                }, Object(b.c)("div", {
                    className: "container ".concat(p ? "-wide" : "-narrow")
                }, t && Object(b.c)("header", {
                    className: "textblocks-header row"
                }, Object(b.c)("div", {
                    className: "col-medium-8 col-medium-push-2"
                }, t && Object(b.c)("h3", null, Object(b.c)(d.a, {
                    html: t
                })), n && Object(b.c)("p", {
                    className: "-large"
                }, Object(b.c)(d.a, {
                    html: n
                })))), Object(b.c)("div", {
                    className: l()("textblocks-row", f, g, {
                        "-wide": p
                    }),
                    "data-grid": !0
                }, O && O.map((function(e, t) {
                    return Object(b.c)(s.default, Object(a.a)({
                        key: t,
                        pop: v,
                        align: f
                    }, e, {
                        isLogos: y
                    }))
                })), (c || i) && Object(b.c)("div", {
                    className: "col-small-6 col-small-offset-3"
                }, c && Object(b.c)(u.default, {
                    href: r
                }, Object(b.c)("button", {
                    className: "textblocks-cta-button -large"
                }, Object(b.c)(d.a, {
                    html: c
                }))), i && Object(b.c)("p", {
                    className: "textblocks-cta-subtext"
                }, Object(b.c)(d.a, {
                    html: i
                }))))))
            }
        },
        BkRI: function(e, t, n) {
            var a = n("OBhP");
            e.exports = function(e) {
                return a(e, 5)
            }
        },
        DGfl: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                c = n.n(a),
                r = (n("g4pe"), n("AeFk"));
            c.a.createElement;
            t.a = function(e) {
                var t = e.expData,
                    n = e.handleModalClose;
                return Object(r.c)(c.a.Fragment, null, Object(r.c)("div", {
                    className: "modal -signup exp-feature-modal -active",
                    onClick: n
                }, Object(r.c)("div", {
                    className: "modal-container",
                    onClick: function(e) {
                        e.stopPropagation()
                    }
                }, Object(r.c)("a", {
                    "data-modal-close": "",
                    onClick: n,
                    href: "#close",
                    tabIndex: "80",
                    "aria-label": "close",
                    className: "modal-close icon icon--x js-modal-close"
                }), Object(r.c)("div", {
                    className: "signup-modal"
                }, Object(r.c)("h3", {
                    className: "modal-header"
                }, t.name), Object(r.c)("div", {
                    className: "modal-content"
                }, Object(r.c)("p", {
                    className: "modal-copy"
                }, t.copy), Object(r.c)("div", {
                    className: "modal-image-container"
                }, Object(r.c)("img", {
                    className: "modal-image",
                    src: t.imgSrc1x
                })))))))
            }
        },
        DzJC: function(e, t, n) {
            var a = n("sEfC"),
                c = n("GoyQ");
            e.exports = function(e, t, n) {
                var r = !0,
                    i = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return c(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), a(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: i
                })
            }
        },
        EcEN: function(e, t, n) {
            var a = n("xDdU"),
                c = n("xk4V"),
                r = c;
            r.v1 = a, r.v4 = c, e.exports = r
        },
        EwQA: function(e, t, n) {
            var a = n("zZ0H");
            e.exports = function(e) {
                return "function" == typeof e ? e : a
            }
        },
        FSSv: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("xvhg"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("TSYQ"),
                o = n.n(i),
                l = n("0W9H"),
                s = n("AeFk");
            r.a.createElement;
            t.default = function(e) {
                var t = e.src,
                    n = e.src_1x,
                    c = e.src_2x,
                    i = e.src_3x,
                    u = e.caption,
                    d = e.mod,
                    m = e.alt,
                    f = e.class_notrans,
                    b = e.no_lazy,
                    g = e.className,
                    p = e.width_notrans,
                    h = Object(l.a)(),
                    v = Object(a.a)(h, 2),
                    O = v[0],
                    j = v[1],
                    y = !!b || j,
                    _ = y ? n || c || i ? "".concat(n && n + " 1x", " ").concat(c && ", " + c + " 2x", " ").concat(i && ", " + i + " 3x") : t : null,
                    k = y ? i || c || n || t : null;
                return Object(s.c)(r.a.Fragment, null, Object(s.c)("img", {
                    ref: O,
                    className: o()(e.class, f, d, g),
                    src: k,
                    srcSet: _,
                    alt: m || null,
                    width: p || null,
                    style: y ? null : {
                        opacity: "0"
                    }
                }), u && Object(s.c)("p", {
                    className: o()(e.class, "-caption")
                }, u), Object(s.c)("noscript", null, Object(s.c)("img", {
                    src: n || c || i || t,
                    alt: m || null
                })))
            }
        },
        G78X: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("TSYQ"),
                i = n.n(r),
                o = n("pgf7"),
                l = n("VTyt"),
                s = n("r3F2"),
                u = n("AeFk");
            c.a.createElement;

            function d(e) {
                var t = e.templates,
                    n = e.segmentName,
                    a = e.segmentSlug,
                    r = e.template_list_col_classes,
                    d = i()("templates-templateList", {
                        row: r
                    });
                return Object(u.c)(c.a.Fragment, null, r && Object(u.c)("div", {
                    className: d
                }, t && t.map((function(e) {
                    return Object(u.c)("div", {
                        className: "templates-templateList-col ".concat(r),
                        key: "templateList-".concat(e.name)
                    }, Object(u.c)(l.default, {
                        href: "/templates/for/".concat(a, "/").concat(e.slug),
                        className: "templates-templateCard",
                        key: "".concat(e.name, "-card")
                    }, Object(u.c)(o.a, {
                        backgroundColor: e.background_color,
                        icon: e.icon_html
                    }), Object(u.c)("div", {
                        className: "templates-templateCard-content"
                    }, Object(u.c)("p", {
                        className: "templates-templateCard-title"
                    }, Object(u.c)(s.a, {
                        html: e.name
                    })), Object(u.c)("p", {
                        className: "templates-templateCard-description"
                    }, Object(u.c)(s.a, {
                        html: n
                    })))))
                }))), !r && Object(u.c)("div", {
                    className: d
                }, t && t.map((function(e) {
                    return Object(u.c)(l.default, {
                        href: "/templates/for/".concat(a, "/").concat(e.slug),
                        className: "templates-templateCard",
                        key: "templateList-".concat(e.name)
                    }, Object(u.c)(o.a, {
                        backgroundColor: e.background_color,
                        icon: e.icon_html
                    }), Object(u.c)("div", {
                        className: "templates-templateCard-content"
                    }, Object(u.c)("p", {
                        className: "templates-templateCard-title"
                    }, Object(u.c)(s.a, {
                        html: e.name
                    })), Object(u.c)("p", {
                        className: "templates-templateCard-description"
                    }, Object(u.c)(s.a, {
                        html: n
                    }))))
                }))))
            }
        },
        I2ZF: function(e, t) {
            for (var n = [], a = 0; a < 256; ++a) n[a] = (a + 256).toString(16).substr(1);
            e.exports = function(e, t) {
                var a = t || 0,
                    c = n;
                return [c[e[a++]], c[e[a++]], c[e[a++]], c[e[a++]], "-", c[e[a++]], c[e[a++]], "-", c[e[a++]], c[e[a++]], "-", c[e[a++]], c[e[a++]], "-", c[e[a++]], c[e[a++]], c[e[a++]], c[e[a++]], c[e[a++]], c[e[a++]]].join("")
            }
        },
        IBJ6: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("q1tI"),
                c = n.n(a),
                r = n("g4pe"),
                i = n.n(r),
                o = n("4buk"),
                l = n("VTyt"),
                s = n("SRXQ"),
                u = n("AeFk");
            c.a.createElement;
            t.default = function() {
                return Object(u.c)(c.a.Fragment, null, Object(u.c)("header", {
                    className: "jobsNav"
                }, Object(u.c)("div", {
                    className: "jobs-container"
                }, Object(u.c)("div", {
                    className: "jobsNav-row"
                }, Object(u.c)("h2", null, Object(u.c)(l.default, {
                    href: "/jobs"
                }, "Careers"), Object(u.c)("span", {
                    className: "jobsNavToggle",
                    id: "jobsNavToggle"
                }, Object(u.c)(o.a, {
                    icon_notrans: "down-caret",
                    icon_color_notrans: "gray",
                    size: "10"
                }))), Object(u.c)("nav", null, Object(u.c)("ul", null, Object(u.c)("li", {
                    className: "has-subnav"
                }, Object(u.c)("span", {
                    className: "faux-link"
                }, "Offices", Object(u.c)("span", {
                    className: "jobsSubNavToggle"
                }, Object(u.c)(o.a, {
                    icon_notrans: "down-caret",
                    icon_color_notrans: "gray",
                    size: "10"
                })), Object(u.c)("span", {
                    className: "jobsSubNavToggleMobile"
                }, Object(u.c)(o.a, {
                    icon_notrans: "down-caret",
                    icon_color_notrans: "gray",
                    size: "10"
                }))), Object(u.c)("ul", {
                    className: "jobsNav-dropdown"
                }, Object(u.c)("span", {
                    className: "jobsOfficeHiddenHoverArea"
                }), Object(u.c)("span", {
                    className: "dropdown-triangle"
                }), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/dublin",
                    className: "dublin"
                }, "Dublin")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/london",
                    className: "london"
                }, "London")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/munich",
                    className: "munich"
                }, "Munich")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/new-york",
                    className: "new-york"
                }, "New York City")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/reykjavik",
                    className: "reykjavik"
                }, "Reykjavik")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/san-francisco",
                    className: "san-francisco"
                }, "San Francisco (HQ)")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/sydney",
                    className: "sydney"
                }, "Sydney")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/tokyo",
                    className: "tokyo"
                }, "Tokyo")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/vancouver",
                    className: "vancouver"
                }, "Vancouver, BC")))), Object(u.c)("li", {
                    className: "has-subnav"
                }, Object(u.c)("span", {
                    className: "faux-link"
                }, "Teams", Object(u.c)("span", {
                    className: "jobsSubNavToggle"
                }, Object(u.c)(o.a, {
                    icon_notrans: "down-caret",
                    icon_color_notrans: "gray",
                    size: "10"
                })), Object(u.c)("span", {
                    className: "jobsSubNavToggleMobile"
                }, Object(u.c)(o.a, {
                    icon_notrans: "down-caret",
                    icon_color_notrans: "gray",
                    size: "10"
                }))), Object(u.c)("ul", {
                    className: "jobsNav-dropdown"
                }, Object(u.c)("span", {
                    className: "jobsTeamHiddenHoverArea"
                }), Object(u.c)("span", {
                    className: "dropdown-triangle"
                }), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/business"
                }, "Business & Marketing")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/engineering"
                }, "Engineering & Data")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/internal"
                }, "General & Administrative")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/product"
                }, "Product & Design")), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/jobs/university-recruiting"
                }, "Interns & Early career")))), Object(u.c)("li", null, Object(u.c)(l.default, {
                    href: "/diversity-and-inclusion",
                    target: "_blank"
                }, "Diversity & Inclusion")), Object(u.c)("li", {
                    className: "open-positions-mobile"
                }, Object(u.c)(l.default, {
                    href: "/jobs/all"
                }, "All open positions")))), Object(u.c)(l.default, {
                    className: "open-positions",
                    href: "/jobs/all"
                }, "All open positions")))), Object(u.c)(i.a, null, Object(u.c)("script", {
                    src: Object(s.a)("js/page-specific/jobs.js"),
                    key: "jobs"
                })))
            }
        },
        IdCr: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("TSYQ"),
                i = n.n(r),
                o = n("r3F2"),
                l = n("AeFk");
            c.a.createElement;

            function s(e) {
                var t = e.text,
                    n = e.trigger,
                    a = e.class_notrans;
                return Object(l.c)("div", {
                    className: i()("tooltip-wrapper", a)
                }, n ? Object(l.c)("p", {
                    className: "tooltip-trigger"
                }, Object(l.c)(o.a, {
                    html: n
                })) : Object(l.c)("img", {
                    className: "tooltip-icon",
                    src: "https://d1gwm4cf8hecp4.cloudfront.net/svg/information-icon.svg"
                }), Object(l.c)("p", {
                    className: "tooltip"
                }, Object(l.c)(o.a, {
                    html: t
                })))
            }
        },
        JmpY: function(e, t, n) {
            var a = n("eUgh");
            e.exports = function(e, t) {
                return a(t, (function(t) {
                    return e[t]
                }))
            }
        },
        O6dX: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return s
            }));
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("vZTd"),
                o = n("AeFk");
            r.a.createElement;

            function l(e) {
                var t = e.img_notrans,
                    n = e.alt,
                    a = e.title,
                    c = e.subtitle;
                return Object(o.c)(i.default, {
                    img: t,
                    alt: n,
                    title: a,
                    subtitle: c
                })
            }
            r.a.createElement;

            function s(e) {
                var t = e.headshots;
                return Object(o.c)("div", {
                    className: "headshot-grid"
                }, t && t.map((function(e, t) {
                    return Object(o.c)(l, Object(a.a)({}, e, {
                        key: t
                    }))
                })))
            }
        },
        OLud: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("d0C7"),
                i = n("AeFk");
            c.a.createElement;
            var o = {
                    name: "879ic9",
                    styles: "margin-left:20px"
                },
                l = {
                    name: "ilv7oc",
                    styles: "position:fixed;bottom:20px;left:20px;padding:10px 10px 10px 140px;border:1px solid #DDD;background:white;border-radius:10px;display:flex;flex-basis:row;align-items:center;z-index:100"
                };

            function s() {
                return Object(i.c)("div", {
                    css: l
                }, Object(i.c)(r.a, null), Object(i.c)("span", null, "Preview Mode Enabled"), Object(i.c)("a", {
                    href: "/api/end-preview",
                    className: "button button--dark",
                    css: o
                }, "Exit Preview"))
            }
        },
        "P/G1": function(e, t, n) {
            var a = n("JmpY"),
                c = n("7GkX");
            e.exports = function(e) {
                return null == e ? [] : a(e, c(e))
            }
        },
        QIyF: function(e, t, n) {
            var a = n("Kz5y");
            e.exports = function() {
                return a.Date.now()
            }
        },
        SKAX: function(e, t, n) {
            var a = n("JC6p"),
                c = n("lQqw")(a);
            e.exports = c
        },
        Sb3h: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                c = n.n(a),
                r = n("VTyt"),
                i = n("siQn"),
                o = n("r3F2"),
                l = n("AeFk");
            c.a.createElement;
            t.a = function(e) {
                var t = e.override_link,
                    n = e.description,
                    a = e.cta_text,
                    s = e.cta_trial_link,
                    u = e.cta_mobile_link,
                    d = e.set_tier_desktop,
                    m = e.widget_img,
                    f = e.widget_class_notrans,
                    b = e.widget_alt,
                    g = e.cta_desktop_logged_out_onclick;
                return Object(l.c)(c.a.Fragment, null, Object(l.c)("p", null, Object(l.c)(o.a, {
                    html: n
                })), m ? Object(l.c)(r.default, {
                    href: t,
                    className: f
                }, Object(l.c)(i.default, {
                    src: m,
                    alt: b
                })) : Object(l.c)(c.a.Fragment, null, Object(l.c)(r.default, {
                    href: u || s,
                    className: "narrow-cta-banner-button button -large visible-device-mobile -mobile-full hidden-logged-in"
                }, a), Object(l.c)(r.default, {
                    href: t || s,
                    onClick: g || "AsanaHelpers.tier.setTierBusiness(); return true;",
                    className: "narrow-cta-banner-button button -large hidden-device-mobile hidden-logged-in -mobile-full"
                }, a), Object(l.c)(r.default, {
                    href: "https://app.asana.com/-/upgrade?trial=true".concat(d),
                    className: "narrow-cta-banner-button button -large visible-logged-in hidden-device-mobile -mobile-full"
                }, a)))
            }
        },
        Teb6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = n("AeFk"),
                c = n("yYjG");
            var r = Object(a.b)("display:grid;grid-column-gap:", c.b[c.a.MOBILE_375].gutter, "px;grid-template-columns:repeat(\n    ", c.b[c.a.MOBILE_375].cols, ",\n    1fr\n  );margin:0 ", c.b[c.a.MOBILE_375].margin, ";", Object(c.c)(c.a.MOBILE_480), "{margin:0 ", c.b[c.a.MOBILE_480].margin, ";}", Object(c.c)(c.a.TABLET_768), "{grid-template-columns:repeat(\n      ", c.b[c.a.TABLET_768].cols, ",\n      1fr\n    );grid-column-gap:", c.b[c.a.TABLET_768].gutter, "px;margin:0 ", c.b[c.a.TABLET_768].margin, ";}", Object(c.c)(c.a.TABLET_960), "{grid-template-columns:repeat(\n      ", c.b[c.a.TABLET_960].cols, ",\n      1fr\n    );grid-column-gap:", c.b[c.a.TABLET_960].gutter, "px;margin:0 ", c.b[c.a.TABLET_960].margin, ";}", Object(c.c)(c.a.DESKTOP_1120), "{grid-column-gap:", c.b[c.a.DESKTOP_1120].gutter, "px;margin:0 ", c.b[c.a.DESKTOP_1120].margin, ";}", Object(c.c)(c.a.DESKTOP_1440), "{grid-column-gap:", c.b[c.a.DESKTOP_1440].gutter, "px;max-width:", c.b[c.a.DESKTOP_1440].maxwidth, "px;margin:0 ", c.b[c.a.DESKTOP_1440].margin, ";}", Object(c.c)(c.a.DESKTOP_1680), "{grid-column-gap:", c.b[c.a.DESKTOP_1680].gutter, "px;}", ""),
                i = {
                    name: "18iuzk9",
                    styles: "grid-column:1/-1"
                }
        },
        UfWW: function(e, t, n) {
            var a = n("KwMD"),
                c = n("ut/Y"),
                r = n("Sxd8"),
                i = Math.max;
            e.exports = function(e, t, n) {
                var o = null == e ? 0 : e.length;
                if (!o) return -1;
                var l = null == n ? 0 : r(n);
                return l < 0 && (l = i(o + l, 0)), a(e, c(t, 3), l)
            }
        },
        "WW/z": function(e, t) {
            e.exports = function(e, t) {
                for (var n = [], a = 0; a < e.length; a += t) n.push(e.slice(a, a + t));
                return n
            }
        },
        Wg94: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("RTPm"),
                o = n("9rhg"),
                l = n("VTyt"),
                s = n("r3F2"),
                u = n("hVRO"),
                d = n("TSYQ"),
                m = n.n(d),
                f = n("20a2"),
                b = n("//LF"),
                g = n("AeFk");
            r.a.createElement;
            t.default = function(e) {
                var t = Object(f.useRouter)().pathname.split("/").slice(1),
                    n = e.generic_cta_headline,
                    c = e.generic_cta_copy,
                    d = e.generic_cta_is_signup,
                    p = e.generic_cta_is_gmail_signup,
                    h = e.gmail_signin_button,
                    v = e.generic_cta_button_link,
                    O = e.generic_cta_button_text,
                    j = e.generic_cta_alt_link_text,
                    y = e.generic_cta_background_notrans,
                    _ = e.generic_cta_show_if_logged_in,
                    k = e.generic_cta_dark_bg,
                    w = e.onclick_notrans,
                    N = e.buttons,
                    x = e.generic_cta_width_notrans,
                    E = e.generic_cta_button_modifiers_notrans,
                    A = !(!v && !w);
                return Object(g.c)("section", {
                    className: m()("genericCTA ", y, {
                        "hidden-logged-in": !_
                    })
                }, Object(g.c)("div", {
                    className: "container"
                }, Object(g.c)("div", {
                    className: m()("genericCTA-text", x)
                }, n && Object(g.c)("h3", {
                    className: m()("genericCTA-title", {
                        "-white": k
                    })
                }, Object(g.c)(s.a, {
                    html: n
                })), c && Object(g.c)("p", {
                    className: m()("genericCTA-subtitle -large", {
                        "-white": k
                    })
                }, Object(g.c)(s.a, {
                    html: c
                })), Object(g.c)("aside", {
                    className: "genericCTA-cta"
                }, d && Object(g.c)(o.default, null), p ? Object(g.c)("div", {
                    className: "genericCTA-cta-gmail-wrapper"
                }, Object(g.c)(u.a, Object(a.a)({
                    generic_cta_is_gmail_signup: p
                }, h))) : Object(g.c)(r.a.Fragment, null, N && N.map((function(e, t) {
                    return Object(g.c)(i.default, Object(a.a)({
                        key: t
                    }, e.button))
                })), A && O && !d && Object(g.c)(l.default, {
                    href: v || "#",
                    onClick: Object(b.stringsToFunction)(w),
                    className: m()("button -large", {
                        "-trigger-form": "support" === t[0]
                    }, {
                        "-light": !!y && "-bg-gray" !== y
                    }, E)
                }, Object(g.c)(s.a, {
                    html: O
                })))), j && Object(g.c)("div", {
                    className: "genericCTA-altLink-wrapper"
                }, Object(g.c)("span", {
                    className: m()("genericCTA-altLink", {
                        "-inverted ": !!y && "-bg-gray" !== y
                    })
                }, Object(g.c)(s.a, {
                    html: j
                }))))))
            }
        },
        "Y+p1": function(e, t, n) {
            var a = n("wF/u");
            e.exports = function(e, t) {
                return a(e, t)
            }
        },
        YXgd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("usKF"),
                i = n("AeFk");
            c.a.createElement;

            function o(e) {
                var t = e.children;
                return Object(i.c)("div", null, Object(i.c)("button", {
                    className: "sso-button-continue"
                }, Object(i.c)("span", {
                    className: "gmail-button-text-continue"
                }, t)))
            }
            c.a.createElement;

            function l() {
                var e = Object(a.useContext)(r.a).global_CTAcontinueFromButton;
                return Object(i.c)(o, null, e)
            }
        },
        ZBhn: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                c = n.n(a),
                r = n("TSYQ"),
                i = n.n(r),
                o = n("//LF"),
                l = n("RTPm"),
                s = n("AeFk");
            c.a.createElement;
            t.a = function(e) {
                var t = e.isVariant,
                    n = Object(o.stringsToFunction)([e.onclick_set_tier_notrans, e.onclick_event, e.event_tracking]);
                return Object(s.c)("div", {
                    className: i()("plan-cta__button", e.button_container_modifier_notrans)
                }, Object(s.c)(l.default, {
                    class_notrans: "".concat(e.button_modifier_notrans, " ").concat(t && "-large" !== e.button_modifier_notrans ? "-large" : ""),
                    link: e.button_link_notrans,
                    open_in_tab: e.open_in_tab,
                    text: e.button_text,
                    click_notrans: n
                }))
            }
        },
        ZvR7: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return u
            }));
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("TSYQ"),
                o = n.n(i),
                l = n("r3F2"),
                s = n("AeFk");
            r.a.createElement;

            function u(e) {
                var t = e.testimonial_card,
                    n = e.testimonials_background_notrans,
                    r = e.items,
                    i = Object(c.useRef)(null),
                    l = Object(c.useRef)(""),
                    u = Object(c.useState)(0),
                    m = u[0],
                    f = u[1];
                return Object(c.useEffect)((function() {
                    return l.current = setInterval((function() {
                            f((function(e) {
                                return e === r.length - 1 ? 0 : e + 1
                            }))
                        }), 3e3),
                        function() {
                            clearInterval(l.current)
                        }
                }), [r.length]), Object(s.c)("div", {
                    className: o()("testimonials", {
                        "-card": t
                    }, n)
                }, Object(s.c)("ul", {
                    className: o()("testimonials-list", {
                        "-card": t
                    }),
                    ref: i
                }, r.map((function(e, t) {
                    return Object(s.c)(d, Object(a.a)({
                        key: t
                    }, e, {
                        activeItem: m === t
                    }))
                }))))
            }

            function d(e) {
                var t = e.customer_logo,
                    n = e.customer_name_notrans,
                    a = e.customer_slug_notrans,
                    c = e.customer_quote,
                    i = e.customer_quoted,
                    u = e.customer_source,
                    d = e.activeItem;
                return Object(s.c)("li", {
                    className: "testimonial",
                    style: {
                        opacity: d ? "1" : "0"
                    }
                }, e.customer_logo && Object(s.c)("img", {
                    className: o()("testimonial-image", a),
                    src: t,
                    alt: n,
                    title: "".concat(n, " Logo")
                }), c && Object(s.c)("p", {
                    className: "testimonial-quote -large"
                }, Object(s.c)(l.a, {
                    html: c
                })), i && Object(s.c)("p", {
                    className: "testimonial-subquote -small"
                }, "\u2014 ", i && Object(s.c)(l.a, {
                    html: i
                }), u && Object(s.c)(r.a.Fragment, null, ", ", Object(s.c)("span", null, u && Object(s.c)(l.a, {
                    html: u
                })))))
            }
        },
        bNQv: function(e, t, n) {
            var a = n("gFfm"),
                c = n("SKAX"),
                r = n("EwQA"),
                i = n("Z0cm");
            e.exports = function(e, t) {
                return (i(e) ? a : c)(e, r(t))
            }
        },
        bb7u: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("VTyt"),
                i = n("AeFk");
            c.a.createElement;

            function o(e) {
                var t = e.class_notrans,
                    n = e.link,
                    a = e.link_logged_in,
                    o = e.text,
                    l = e.template_id,
                    s = e.cta_data,
                    u = e.maximum_tier;
                e.language;
                return Object(i.c)(c.a.Fragment, null, Object(i.c)(r.default, {
                    href: "".concat(a).concat(l),
                    title: o,
                    className: "".concat(t, " invisible-logged-out -mobile-full"),
                    ctaUseCaseSegment: s ? s[0].value : null,
                    ctaRegisteredWithUseCaseTemplate: s ? s[1].value : null,
                    maximumTier: u
                }, o), Object(i.c)(r.default, {
                    href: n,
                    className: "".concat(t, " invisible-logged-in -mobile-full"),
                    ctaUseCaseSegment: s ? s[0].value : null,
                    ctaRegisteredWithUseCaseTemplate: s ? s[1].value : null,
                    maximumTier: u || "premium",
                    onClick: "business" === u ? function() {
                        return AsanaHelpers.tier.setTierBusiness()
                    } : "free" === u ? function() {
                        return AsanaHelpers.tier.setTierFree()
                    } : function() {
                        return AsanaHelpers.tier.setTierPremium()
                    }
                }, o))
            }
        },
        fknt: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return l
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("VTyt"),
                i = n("r3F2"),
                o = n("AeFk");
            c.a.createElement;

            function l(e) {
                var t = e.title,
                    n = e.body,
                    a = e.cta_text,
                    c = e.cta_link,
                    l = e.useFaqSchema;
                return Object(o.c)("div", {
                    className: "accordion-wrapper",
                    "data-title": t,
                    itemScope: !!l || null,
                    itemProp: l ? "mainEntity" : null,
                    itemType: l ? "https://schema.org/Question" : null
                }, Object(o.c)("div", {
                    className: "accordion-tab"
                }, Object(o.c)("div", {
                    className: "accordion-tab-inner"
                }, Object(o.c)("p", {
                    className: "accordion-title",
                    itemProp: l ? "name" : null
                }, Object(o.c)(i.a, {
                    html: t
                })))), Object(o.c)("div", {
                    className: "accordion-body"
                }, Object(o.c)("div", {
                    className: "accordion-body-inner",
                    itemScope: !!l || null,
                    itemProp: l ? "acceptedAnswer" : null,
                    itemType: l ? "https://schema.org/Answer" : null
                }, Object(o.c)("div", {
                    className: "accordion-text ".concat(a ? "" : "-no-cta"),
                    itemProp: l ? "text" : null
                }, Object(o.c)(i.a, {
                    html: n
                })), a && Object(o.c)(r.default, {
                    href: c,
                    open_in_tab: !0,
                    className: "accordion-cta"
                }, Object(o.c)(i.a, {
                    html: a
                })))))
            }
        },
        giAx: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var a = n("HALo"),
                c = n("TSYQ"),
                r = n.n(c),
                i = n("v2rO"),
                o = n("q1tI"),
                l = n.n(o),
                s = n("g4pe"),
                u = n.n(s),
                d = n("SRXQ"),
                m = n("VHp+"),
                f = n("siQn"),
                b = n("VTyt"),
                g = n("r3F2"),
                p = n("AeFk");
            l.a.createElement;

            function h(e) {
                var t = e.selections;
                return Object(p.c)(l.a.Fragment, null, Object(p.c)("div", {
                    className: "featuresCarousel row"
                }, Object(p.c)("div", {
                    className: "featuresCarousel-feature col-12 col-medium-7"
                }, t && t.map((function(e, t) {
                    var n = e.screenshot ? e.screenshot.image : e.image ? e.image[0] : null;
                    return Object(p.c)("div", {
                        className: "featuresCarousel-slide-wrapper",
                        "data-slide-speed": e.slide_speed,
                        key: t
                    }, e.video && e.video.animation && Object(p.c)("div", {
                        className: r()("featuresCarousel-slide", {
                            "-is-active": 0 === t
                        })
                    }, Object(p.c)(i.default, e.video.animation)), n && Object(p.c)("div", {
                        className: "featuresCarousel-slide",
                        key: t
                    }, Object(p.c)(f.default, n)), Object(p.c)("div", {
                        className: "featuresCarousel-mobile-selection"
                    }, e.title && Object(p.c)("h6", {
                        className: "featuresCarousel-mobile-title"
                    }, e.title), e.tag && Object(p.c)("span", {
                        className: r()("tag", e.tag_color && "-".concat(e.tag_color))
                    }, e.tag), e.subtitle && Object(p.c)("p", {
                        className: "featuresCarousel-mobile-subtitle"
                    }, e.subtitle), e.cta && e.cta.link && Object(p.c)(b.default, {
                        href: e.cta.link,
                        className: "featuresCarousel-mobile-link"
                    }, e.cta.text)))
                }))), Object(p.c)("div", {
                    className: "featuresCarousel-selections col-12 col-medium-5 pl-3"
                }, t && t.map((function(e, t) {
                    return Object(p.c)("div", {
                        className: r()("featuresCarousel-selection", {
                            "-is-active": 0 === t
                        }),
                        "data-index": t,
                        key: t
                    }, Object(p.c)("div", {
                        className: r()("featuresCarousel-progress", e.color && "-".concat(e.color))
                    }, Object(p.c)("span", {
                        className: r()("featuresCarousel-progress-bar", e.color && "-".concat(e.color))
                    })), Object(p.c)("div", {
                        className: "featuresCarousel-body"
                    }, Object(p.c)("h6", {
                        className: "featuresCarousel-title"
                    }, Object(p.c)(g.a, {
                        html: e.title
                    }), Object(p.c)("span", {
                        className: "featuresCarousel-chevron"
                    }, Object(p.c)("svg", {
                        width: "11px",
                        height: "7px",
                        viewBox: "0 0 11 7",
                        version: "1.1",
                        xmlns: "true",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, Object(p.c)("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, Object(p.c)("g", {
                        transform: "translate(0.000000, -419.000000)",
                        stroke: "#B7BFC6",
                        strokeWidth: "1.5"
                    }, Object(p.c)("g", {
                        transform: "translate(-0.500000, 391.000000)"
                    }, Object(p.c)("g", {
                        transform: "translate(0.000000, 17.000000)"
                    }, Object(p.c)("polyline", {
                        points: "0.5 11.55 5.43814008 16.45 10.2999998 11.55"
                    })))))))), e.tag && Object(p.c)("span", {
                        className: r()("tag", e.color && "-".concat(e.color))
                    }, e.tag), e.subtitle && Object(p.c)("p", {
                        className: "featuresCarousel-subtitle"
                    }, Object(p.c)(g.a, {
                        html: e.subtitle
                    })), e.cta && e.cta.link && Object(p.c)(b.default, {
                        href: e.cta.link,
                        className: "featuresCarousel-link"
                    }, e.cta.text && Object(p.c)("span", {
                        className: "featuresCarousel-link-text"
                    }, Object(p.c)(g.a, {
                        html: e.cta.text
                    })), Object(p.c)(m.a, Object(a.a)({}, e, {
                        modifier: "small"
                    })))))
                })))), Object(p.c)(u.a, null, Object(p.c)("script", {
                    src: Object(d.a)("js/page-specific/feature-carousel.js"),
                    key: "feature-carousel"
                })))
            }
        },
        hMnm: function(e, t, n) {
            "use strict";
            (function(e) {
                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                var c = "undefined" !== typeof e && "[object global]" === {}.toString.call(e);

                function r(e, t) {
                    return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
                }

                function i(e) {
                    return Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView)
                }

                function o(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
                }

                function l(e) {
                    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
                }

                function s() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.url,
                        a = t || n;
                    if (!a) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
                    if (o(a)) return "https://vimeo.com/".concat(a);
                    if (l(a)) return a.replace("http:", "https:");
                    if (t) throw new TypeError("\u201c".concat(t, "\u201d is not a valid video id."));
                    throw new TypeError("\u201c".concat(a, "\u201d is not a vimeo.com url."))
                }
                var u = "undefined" !== typeof Array.prototype.indexOf,
                    d = "undefined" !== typeof window && "undefined" !== typeof window.postMessage;
                if (!c && (!u || !d)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
                var m = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : {};
                ! function(e) {
                    if (!e.WeakMap) {
                        var t = Object.prototype.hasOwnProperty,
                            n = function(e, t, n) {
                                Object.defineProperty ? Object.defineProperty(e, t, {
                                    configurable: !0,
                                    writable: !0,
                                    value: n
                                }) : e[t] = n
                            };
                        e.WeakMap = function() {
                            function e() {
                                if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                                if (n(this, "_id", r("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
                            }

                            function c(e, n) {
                                if (!a(e) || !t.call(e, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof e)
                            }

                            function r(e) {
                                return e + "_" + i() + "." + i()
                            }

                            function i() {
                                return Math.random().toString().substring(2)
                            }
                            return n(e.prototype, "delete", (function(e) {
                                if (c(this, "delete"), !a(e)) return !1;
                                var t = e[this._id];
                                return !(!t || t[0] !== e) && (delete e[this._id], !0)
                            })), n(e.prototype, "get", (function(e) {
                                if (c(this, "get"), a(e)) {
                                    var t = e[this._id];
                                    return t && t[0] === e ? t[1] : void 0
                                }
                            })), n(e.prototype, "has", (function(e) {
                                if (c(this, "has"), !a(e)) return !1;
                                var t = e[this._id];
                                return !(!t || t[0] !== e)
                            })), n(e.prototype, "set", (function(e, t) {
                                if (c(this, "set"), !a(e)) throw new TypeError("Invalid value used as weak map key");
                                var r = e[this._id];
                                return r && r[0] === e ? (r[1] = t, this) : (n(e, this._id, [e, t]), this)
                            })), n(e, "_polyfill", !0), e
                        }()
                    }

                    function a(e) {
                        return Object(e) === e
                    }
                }("undefined" !== typeof self ? self : "undefined" !== typeof window ? window : m);
                var f = function(e, t) {
                        return e(t = {
                            exports: {}
                        }, t.exports), t.exports
                    }((function(e) {
                        var t, n, a;
                        a = function() {
                            var e, t, n, a = Object.prototype.toString,
                                c = "undefined" != typeof setImmediate ? function(e) {
                                    return setImmediate(e)
                                } : setTimeout;
                            try {
                                Object.defineProperty({}, "x", {}), e = function(e, t, n, a) {
                                    return Object.defineProperty(e, t, {
                                        value: n,
                                        writable: !0,
                                        configurable: !1 !== a
                                    })
                                }
                            } catch (p) {
                                e = function(e, t, n) {
                                    return e[t] = n, e
                                }
                            }

                            function r(e, a) {
                                n.add(e, a), t || (t = c(n.drain))
                            }

                            function i(e) {
                                var t, n = typeof e;
                                return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t
                            }

                            function o() {
                                for (var e = 0; e < this.chain.length; e++) l(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                                this.chain.length = 0
                            }

                            function l(e, t, n) {
                                var a, c;
                                try {
                                    !1 === t ? n.reject(e.msg) : (a = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (c = i(a)) ? c.call(a, n.resolve, n.reject) : n.resolve(a)
                                } catch (p) {
                                    n.reject(p)
                                }
                            }

                            function s(e) {
                                var t, n = this;
                                if (!n.triggered) {
                                    n.triggered = !0, n.def && (n = n.def);
                                    try {
                                        (t = i(e)) ? r((function() {
                                            var a = new m(n);
                                            try {
                                                t.call(e, (function() {
                                                    s.apply(a, arguments)
                                                }), (function() {
                                                    u.apply(a, arguments)
                                                }))
                                            } catch (p) {
                                                u.call(a, p)
                                            }
                                        })): (n.msg = e, n.state = 1, n.chain.length > 0 && r(o, n))
                                    } catch (p) {
                                        u.call(new m(n), p)
                                    }
                                }
                            }

                            function u(e) {
                                var t = this;
                                t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, t.chain.length > 0 && r(o, t))
                            }

                            function d(e, t, n, a) {
                                for (var c = 0; c < t.length; c++) ! function(c) {
                                    e.resolve(t[c]).then((function(e) {
                                        n(c, e)
                                    }), a)
                                }(c)
                            }

                            function m(e) {
                                this.def = e, this.triggered = !1
                            }

                            function f(e) {
                                this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                            }

                            function b(e) {
                                if ("function" != typeof e) throw TypeError("Not a function");
                                if (0 !== this.__NPO__) throw TypeError("Not a promise");
                                this.__NPO__ = 1;
                                var t = new f(this);
                                this.then = function(e, n) {
                                    var a = {
                                        success: "function" != typeof e || e,
                                        failure: "function" == typeof n && n
                                    };
                                    return a.promise = new this.constructor((function(e, t) {
                                        if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                                        a.resolve = e, a.reject = t
                                    })), t.chain.push(a), 0 !== t.state && r(o, t), a.promise
                                }, this.catch = function(e) {
                                    return this.then(void 0, e)
                                };
                                try {
                                    e.call(void 0, (function(e) {
                                        s.call(t, e)
                                    }), (function(e) {
                                        u.call(t, e)
                                    }))
                                } catch (p) {
                                    u.call(t, p)
                                }
                            }
                            n = function() {
                                var e, n, a;

                                function c(e, t) {
                                    this.fn = e, this.self = t, this.next = void 0
                                }
                                return {
                                    add: function(t, r) {
                                        a = new c(t, r), n ? n.next = a : e = a, n = a, a = void 0
                                    },
                                    drain: function() {
                                        var a = e;
                                        for (e = n = t = void 0; a;) a.fn.call(a.self), a = a.next
                                    }
                                }
                            }();
                            var g = e({}, "constructor", b, !1);
                            return b.prototype = g, e(g, "__NPO__", 0, !1), e(b, "resolve", (function(e) {
                                return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this((function(t, n) {
                                    if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                                    t(e)
                                }))
                            })), e(b, "reject", (function(e) {
                                return new this((function(t, n) {
                                    if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                                    n(e)
                                }))
                            })), e(b, "all", (function(e) {
                                var t = this;
                                return "[object Array]" != a.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function(n, a) {
                                    if ("function" != typeof n || "function" != typeof a) throw TypeError("Not a function");
                                    var c = e.length,
                                        r = Array(c),
                                        i = 0;
                                    d(t, e, (function(e, t) {
                                        r[e] = t, ++i === c && n(r)
                                    }), a)
                                }))
                            })), e(b, "race", (function(e) {
                                var t = this;
                                return "[object Array]" != a.call(e) ? t.reject(TypeError("Not an array")) : new t((function(n, a) {
                                    if ("function" != typeof n || "function" != typeof a) throw TypeError("Not a function");
                                    d(t, e, (function(e, t) {
                                        n(t)
                                    }), a)
                                }))
                            })), b
                        }, (n = m)[t = "Promise"] = n[t] || a(), e.exports && (e.exports = n[t])
                    })),
                    b = new WeakMap;

                function g(e, t, n) {
                    var a = b.get(e.element) || {};
                    t in a || (a[t] = []), a[t].push(n), b.set(e.element, a)
                }

                function p(e, t) {
                    return (b.get(e.element) || {})[t] || []
                }

                function h(e, t, n) {
                    var a = b.get(e.element) || {};
                    if (!a[t]) return !0;
                    if (!n) return a[t] = [], b.set(e.element, a), !0;
                    var c = a[t].indexOf(n);
                    return -1 !== c && a[t].splice(c, 1), b.set(e.element, a), a[t] && 0 === a[t].length
                }

                function v(e, t) {
                    var n = b.get(e);
                    b.set(t, n), b.delete(e)
                }
                var O = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

                function j(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return O.reduce((function(t, n) {
                        var a = e.getAttribute("data-vimeo-".concat(n));
                        return (a || "" === a) && (t[n] = "" === a ? 1 : a), t
                    }), t)
                }

                function y(e, t) {
                    var n = e.html;
                    if (!t) throw new TypeError("An element must be provided");
                    if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
                    var a = document.createElement("div");
                    return a.innerHTML = n, t.appendChild(a.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
                }

                function _(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return new Promise((function(a, c) {
                        if (!l(e)) throw new TypeError("\u201c".concat(e, "\u201d is not a vimeo.com url."));
                        var r = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
                        for (var i in t) t.hasOwnProperty(i) && (r += "&".concat(i, "=").concat(encodeURIComponent(t[i])));
                        var o = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
                        o.open("GET", r, !0), o.onload = function() {
                            if (404 !== o.status)
                                if (403 !== o.status) try {
                                    var t = JSON.parse(o.responseText);
                                    if (403 === t.domain_status_code) return y(t, n), void c(new Error("\u201c".concat(e, "\u201d is not embeddable.")));
                                    a(t)
                                } catch (r) {
                                    c(r)
                                } else c(new Error("\u201c".concat(e, "\u201d is not embeddable.")));
                                else c(new Error("\u201c".concat(e, "\u201d was not found.")))
                        }, o.onerror = function() {
                            var e = o.status ? " (".concat(o.status, ")") : "";
                            c(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
                        }, o.send()
                    }))
                }

                function k(e) {
                    if ("string" === typeof e) try {
                        e = JSON.parse(e)
                    } catch (t) {
                        return console.warn(t), {}
                    }
                    return e
                }

                function w(e, t, n) {
                    if (e.element.contentWindow && e.element.contentWindow.postMessage) {
                        var a = {
                            method: t
                        };
                        void 0 !== n && (a.value = n);
                        var c = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                        c >= 8 && c < 10 && (a = JSON.stringify(a)), e.element.contentWindow.postMessage(a, e.origin)
                    }
                }

                function N(e, t) {
                    var n, a = [];
                    if ((t = k(t)).event) {
                        if ("error" === t.event) p(e, t.data.method).forEach((function(n) {
                            var a = new Error(t.data.message);
                            a.name = t.data.name, n.reject(a), h(e, t.data.method, n)
                        }));
                        a = p(e, "event:".concat(t.event)), n = t.data
                    } else if (t.method) {
                        var c = function(e, t) {
                            var n = p(e, t);
                            if (n.length < 1) return !1;
                            var a = n.shift();
                            return h(e, t, a), a
                        }(e, t.method);
                        c && (a.push(c), n = t.value)
                    }
                    a.forEach((function(t) {
                        try {
                            if ("function" === typeof t) return void t.call(e, n);
                            t.resolve(n)
                        } catch (a) {}
                    }))
                }
                var x = new WeakMap,
                    E = new WeakMap,
                    A = {},
                    T = function() {
                        function e(t) {
                            var a = this,
                                c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (n(this, e), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), "undefined" !== typeof document && "string" === typeof t && (t = document.getElementById(t)), !i(t)) throw new TypeError("You must pass either a valid element or a valid id.");
                            if ("IFRAME" !== t.nodeName) {
                                var r = t.querySelector("iframe");
                                r && (t = r)
                            }
                            if ("IFRAME" === t.nodeName && !l(t.getAttribute("src") || "")) throw new Error("The player element passed isn\u2019t a Vimeo embed.");
                            if (x.has(t)) return x.get(t);
                            this._window = t.ownerDocument.defaultView, this.element = t, this.origin = "*";
                            var o = new f((function(e, n) {
                                if (a._onMessage = function(t) {
                                        if (l(t.origin) && a.element.contentWindow === t.source) {
                                            "*" === a.origin && (a.origin = t.origin);
                                            var c = k(t.data);
                                            if (c && "error" === c.event && c.data && "ready" === c.data.method) {
                                                var r = new Error(c.data.message);
                                                return r.name = c.data.name, void n(r)
                                            }
                                            var i = c && "ready" === c.event,
                                                o = c && "ping" === c.method;
                                            if (i || o) return a.element.setAttribute("data-ready", "true"), void e();
                                            N(a, c)
                                        }
                                    }, a._window.addEventListener("message", a._onMessage), "IFRAME" !== a.element.nodeName) {
                                    var r = j(t, c);
                                    _(s(r), r, t).then((function(e) {
                                        var n = y(e, t);
                                        return a.element = n, a._originalElement = t, v(t, n), x.set(a.element, a), e
                                    })).catch(n)
                                }
                            }));
                            if (E.set(this, o), x.set(this.element, this), "IFRAME" === this.element.nodeName && w(this, "ping"), A.isEnabled) {
                                var u = function() {
                                    return A.exit()
                                };
                                A.on("fullscreenchange", (function() {
                                    A.isFullscreen ? g(a, "event:exitFullscreen", u) : h(a, "event:exitFullscreen", u), a.ready().then((function() {
                                        w(a, "fullscreenchange", A.isFullscreen)
                                    }))
                                }))
                            }
                            return this
                        }
                        var t, c, o;
                        return t = e, (c = [{
                            key: "callMethod",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return new f((function(a, c) {
                                    return t.ready().then((function() {
                                        g(t, e, {
                                            resolve: a,
                                            reject: c
                                        }), w(t, e, n)
                                    })).catch(c)
                                }))
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                var t = this;
                                return new f((function(n, a) {
                                    return e = r(e, "get"), t.ready().then((function() {
                                        g(t, e, {
                                            resolve: n,
                                            reject: a
                                        }), w(t, e)
                                    })).catch(a)
                                }))
                            }
                        }, {
                            key: "set",
                            value: function(e, t) {
                                var n = this;
                                return new f((function(a, c) {
                                    if (e = r(e, "set"), void 0 === t || null === t) throw new TypeError("There must be a value to set.");
                                    return n.ready().then((function() {
                                        g(n, e, {
                                            resolve: a,
                                            reject: c
                                        }), w(n, e, t)
                                    })).catch(c)
                                }))
                            }
                        }, {
                            key: "on",
                            value: function(e, t) {
                                if (!e) throw new TypeError("You must pass an event name.");
                                if (!t) throw new TypeError("You must pass a callback function.");
                                if ("function" !== typeof t) throw new TypeError("The callback must be a function.");
                                0 === p(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function() {})), g(this, "event:".concat(e), t)
                            }
                        }, {
                            key: "off",
                            value: function(e, t) {
                                if (!e) throw new TypeError("You must pass an event name.");
                                if (t && "function" !== typeof t) throw new TypeError("The callback must be a function.");
                                h(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function(e) {}))
                            }
                        }, {
                            key: "loadVideo",
                            value: function(e) {
                                return this.callMethod("loadVideo", e)
                            }
                        }, {
                            key: "ready",
                            value: function() {
                                var e = E.get(this) || new f((function(e, t) {
                                    t(new Error("Unknown player. Probably unloaded."))
                                }));
                                return f.resolve(e)
                            }
                        }, {
                            key: "addCuePoint",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return this.callMethod("addCuePoint", {
                                    time: e,
                                    data: t
                                })
                            }
                        }, {
                            key: "removeCuePoint",
                            value: function(e) {
                                return this.callMethod("removeCuePoint", e)
                            }
                        }, {
                            key: "enableTextTrack",
                            value: function(e, t) {
                                if (!e) throw new TypeError("You must pass a language.");
                                return this.callMethod("enableTextTrack", {
                                    language: e,
                                    kind: t
                                })
                            }
                        }, {
                            key: "disableTextTrack",
                            value: function() {
                                return this.callMethod("disableTextTrack")
                            }
                        }, {
                            key: "pause",
                            value: function() {
                                return this.callMethod("pause")
                            }
                        }, {
                            key: "play",
                            value: function() {
                                return this.callMethod("play")
                            }
                        }, {
                            key: "requestFullscreen",
                            value: function() {
                                return A.isEnabled ? A.request(this.element) : this.callMethod("requestFullscreen")
                            }
                        }, {
                            key: "exitFullscreen",
                            value: function() {
                                return A.isEnabled ? A.exit() : this.callMethod("exitFullscreen")
                            }
                        }, {
                            key: "getFullscreen",
                            value: function() {
                                return A.isEnabled ? f.resolve(A.isFullscreen) : this.get("fullscreen")
                            }
                        }, {
                            key: "requestPictureInPicture",
                            value: function() {
                                return this.callMethod("requestPictureInPicture")
                            }
                        }, {
                            key: "exitPictureInPicture",
                            value: function() {
                                return this.callMethod("exitPictureInPicture")
                            }
                        }, {
                            key: "getPictureInPicture",
                            value: function() {
                                return this.get("pictureInPicture")
                            }
                        }, {
                            key: "unload",
                            value: function() {
                                return this.callMethod("unload")
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                var e = this;
                                return new f((function(t) {
                                    if (E.delete(e), x.delete(e.element), e._originalElement && (x.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element), e.element && "DIV" === e.element.nodeName && e.element.parentNode) {
                                        e.element.removeAttribute("data-vimeo-initialized");
                                        var n = e.element.querySelector("iframe");
                                        n && n.parentNode && n.parentNode.removeChild(n)
                                    }
                                    e._window.removeEventListener("message", e._onMessage), t()
                                }))
                            }
                        }, {
                            key: "getAutopause",
                            value: function() {
                                return this.get("autopause")
                            }
                        }, {
                            key: "setAutopause",
                            value: function(e) {
                                return this.set("autopause", e)
                            }
                        }, {
                            key: "getBuffered",
                            value: function() {
                                return this.get("buffered")
                            }
                        }, {
                            key: "getCameraProps",
                            value: function() {
                                return this.get("cameraProps")
                            }
                        }, {
                            key: "setCameraProps",
                            value: function(e) {
                                return this.set("cameraProps", e)
                            }
                        }, {
                            key: "getChapters",
                            value: function() {
                                return this.get("chapters")
                            }
                        }, {
                            key: "getCurrentChapter",
                            value: function() {
                                return this.get("currentChapter")
                            }
                        }, {
                            key: "getColor",
                            value: function() {
                                return this.get("color")
                            }
                        }, {
                            key: "setColor",
                            value: function(e) {
                                return this.set("color", e)
                            }
                        }, {
                            key: "getCuePoints",
                            value: function() {
                                return this.get("cuePoints")
                            }
                        }, {
                            key: "getCurrentTime",
                            value: function() {
                                return this.get("currentTime")
                            }
                        }, {
                            key: "setCurrentTime",
                            value: function(e) {
                                return this.set("currentTime", e)
                            }
                        }, {
                            key: "getDuration",
                            value: function() {
                                return this.get("duration")
                            }
                        }, {
                            key: "getEnded",
                            value: function() {
                                return this.get("ended")
                            }
                        }, {
                            key: "getLoop",
                            value: function() {
                                return this.get("loop")
                            }
                        }, {
                            key: "setLoop",
                            value: function(e) {
                                return this.set("loop", e)
                            }
                        }, {
                            key: "setMuted",
                            value: function(e) {
                                return this.set("muted", e)
                            }
                        }, {
                            key: "getMuted",
                            value: function() {
                                return this.get("muted")
                            }
                        }, {
                            key: "getPaused",
                            value: function() {
                                return this.get("paused")
                            }
                        }, {
                            key: "getPlaybackRate",
                            value: function() {
                                return this.get("playbackRate")
                            }
                        }, {
                            key: "setPlaybackRate",
                            value: function(e) {
                                return this.set("playbackRate", e)
                            }
                        }, {
                            key: "getPlayed",
                            value: function() {
                                return this.get("played")
                            }
                        }, {
                            key: "getQualities",
                            value: function() {
                                return this.get("qualities")
                            }
                        }, {
                            key: "getQuality",
                            value: function() {
                                return this.get("quality")
                            }
                        }, {
                            key: "setQuality",
                            value: function(e) {
                                return this.set("quality", e)
                            }
                        }, {
                            key: "getSeekable",
                            value: function() {
                                return this.get("seekable")
                            }
                        }, {
                            key: "getSeeking",
                            value: function() {
                                return this.get("seeking")
                            }
                        }, {
                            key: "getTextTracks",
                            value: function() {
                                return this.get("textTracks")
                            }
                        }, {
                            key: "getVideoEmbedCode",
                            value: function() {
                                return this.get("videoEmbedCode")
                            }
                        }, {
                            key: "getVideoId",
                            value: function() {
                                return this.get("videoId")
                            }
                        }, {
                            key: "getVideoTitle",
                            value: function() {
                                return this.get("videoTitle")
                            }
                        }, {
                            key: "getVideoWidth",
                            value: function() {
                                return this.get("videoWidth")
                            }
                        }, {
                            key: "getVideoHeight",
                            value: function() {
                                return this.get("videoHeight")
                            }
                        }, {
                            key: "getVideoUrl",
                            value: function() {
                                return this.get("videoUrl")
                            }
                        }, {
                            key: "getVolume",
                            value: function() {
                                return this.get("volume")
                            }
                        }, {
                            key: "setVolume",
                            value: function(e) {
                                return this.set("volume", e)
                            }
                        }]) && a(t.prototype, c), o && a(t, o), e
                    }();
                c || (A = function() {
                    var e = function() {
                            for (var e, t = [
                                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                                ], n = 0, a = t.length, c = {}; n < a; n++)
                                if ((e = t[n]) && e[1] in document) {
                                    for (n = 0; n < e.length; n++) c[t[0][n]] = e[n];
                                    return c
                                }
                            return !1
                        }(),
                        t = {
                            fullscreenchange: e.fullscreenchange,
                            fullscreenerror: e.fullscreenerror
                        },
                        n = {
                            request: function(t) {
                                return new Promise((function(a, c) {
                                    var r = function e() {
                                        n.off("fullscreenchange", e), a()
                                    };
                                    n.on("fullscreenchange", r);
                                    var i = (t = t || document.documentElement)[e.requestFullscreen]();
                                    i instanceof Promise && i.then(r).catch(c)
                                }))
                            },
                            exit: function() {
                                return new Promise((function(t, a) {
                                    if (n.isFullscreen) {
                                        var c = function e() {
                                            n.off("fullscreenchange", e), t()
                                        };
                                        n.on("fullscreenchange", c);
                                        var r = document[e.exitFullscreen]();
                                        r instanceof Promise && r.then(c).catch(a)
                                    } else t()
                                }))
                            },
                            on: function(e, n) {
                                var a = t[e];
                                a && document.addEventListener(a, n)
                            },
                            off: function(e, n) {
                                var a = t[e];
                                a && document.removeEventListener(a, n)
                            }
                        };
                    return Object.defineProperties(n, {
                        isFullscreen: {
                            get: function() {
                                return Boolean(document[e.fullscreenElement])
                            }
                        },
                        element: {
                            enumerable: !0,
                            get: function() {
                                return document[e.fullscreenElement]
                            }
                        },
                        isEnabled: {
                            enumerable: !0,
                            get: function() {
                                return Boolean(document[e.fullscreenEnabled])
                            }
                        }
                    }), n
                }(), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                        t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
                        n = function(e) {
                            "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e))
                        };
                    t.forEach((function(e) {
                        try {
                            if (null !== e.getAttribute("data-vimeo-defer")) return;
                            var t = j(e);
                            _(s(t), t, e).then((function(t) {
                                return y(t, e)
                            })).catch(n)
                        } catch (a) {
                            n(a)
                        }
                    }))
                }(), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                    if (!window.VimeoPlayerResizeEmbeds_) {
                        window.VimeoPlayerResizeEmbeds_ = !0;
                        var t = function(t) {
                            if (l(t.origin) && t.data && "spacechange" === t.data.event)
                                for (var n = e.querySelectorAll("iframe"), a = 0; a < n.length; a++)
                                    if (n[a].contentWindow === t.source) {
                                        n[a].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                                        break
                                    }
                        };
                        window.addEventListener("message", t)
                    }
                }()), t.a = T
            }).call(this, n("ntbh"))
        },
        hVRO: function(e, t, n) {
            "use strict";
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("usKF"),
                o = n("AeFk"),
                l = (r.a.createElement, function(e) {
                    var t = e.global_CTAloginGAuth,
                        n = e.global_CTAsignupGAuth,
                        a = e.gmail_signin_button_alt_link,
                        c = e.generic_cta_is_gmail_signup;
                    return Object(o.c)("div", null, Object(o.c)("a", {
                        className: "gmail-button-sign-in",
                        onClick: function() {
                            return AsanaAnalytics.trackGTM("login_google_auth"), AsanaAnalytics.trackGTM("signup_google_auth"), void AsanaHelpers.signupWithGoogle()
                        },
                        title: t
                    }, Object(o.c)("img", {
                        className: "gmail-button-icon-sign-in",
                        srcSet: "https://luna1.co/020de6.png 1x, https://luna1.co/328201.png 2x",
                        src: "https://luna1.co/020de6.png",
                        alt: "Google logo"
                    }), Object(o.c)("span", {
                        className: "gmail-button-text-sign-in"
                    }, n)), a && !c && Object(o.c)("p", null, a))
                });
            r.a.createElement, t.a = function(e) {
                var t = Object(c.useContext)(i.a);
                return Object(o.c)(l, Object(a.a)({}, e, {
                    global_CTAloginGAuth: t.global_CTAloginGAuth,
                    global_CTAsignupGAuth: t.global_CTAsignupGAuth
                }))
            }
        },
        i1cl: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n("H+61"),
                c = n("UlJF"),
                r = n("hMnm"),
                i = function() {
                    function e(t) {
                        Object(a.a)(this, e);
                        var n = this;
                        this.id = (new Date).getTime() + parseInt(100 * Math.random()).toString(), this.paused = !1, this.defaultConfigs = {
                            id: "424929060",
                            autoplay: !1,
                            controls: !0
                        }, this.initialProps = Object.assign(this.defaultConfigs, t);
                        var c = document.createElement("div"),
                            i = document.createElement("div"),
                            o = document.createElement("div"),
                            l = document.createElement("button"),
                            s = document.createElement("button");
                        n.modal = c, n.closeButton = s, s.classList.add("close"), l.classList.add("pause"), o.classList.add("pause-video"), c.classList.add("vimeoVideoModal"), c.setAttribute("id", this.id), c.append(i), c.append(s), document.body.append(c), this.player = new r.a(i, this.initialProps), l.addEventListener("click", (function() {
                            n.paused ? (n.paused = !1, n.player.play()) : (n.paused = !0, n.player.pause())
                        })), s.addEventListener("click", (function() {
                            n.player.unload(), n.paused = !1, o.classList.remove("paused"), c.classList.remove("active")
                        })), c.addEventListener("click", (function() {
                            n.player.unload(), n.paused = !1, o.classList.remove("paused"), c.classList.remove("active")
                        }))
                    }
                    return Object(c.a)(e, [{
                        key: "playVideo",
                        value: function(e) {
                            var t = this,
                                n = this.id,
                                a = document.getElementById(n),
                                c = Object.assign(this.initialProps, e);
                            a.classList.add("active"), this.player.loadVideo(c).then((function() {
                                t.paused = !1, t.player.play()
                            }))
                        }
                    }, {
                        key: "trackHomepageWatchVideoCtaEvents",
                        value: function() {
                            var e = this;
                            e.watchVideoEventsAdded || (e.modal.addEventListener("click", (function() {
                                AsanaAnalytics.trackGtmWithEventData("CTAEngagement", "CloseVideo", "CloseVideo@Home-HeroCTAVideo")
                            })), this.player.on("ended", (function(e) {
                                AsanaAnalytics.trackGtmWithEventData("CTAEngagement", "ClickViewEndOfVideoCTA", "ClickViewEndOfVideoCTA@Home-HeroCTAVideo")
                            }))), e.watchVideoEventsAdded = !0
                        }
                    }]), e
                }()
        },
        lJ2P: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            })), n.d(t, "a", (function() {
                return d
            }));
            var a = n("vJKn"),
                c = n.n(a),
                r = n("rg98"),
                i = "BF185719B0464B3CB809D23926182246",
                o = "1",
                l = "https://asana2020tf.q4web.com/feed/PressRelease.svc";

            function s(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = Object(r.a)(c.a.mark((function e(t) {
                    var n, a;
                    return c.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = l, n += "/GetPressReleaseItem", n += "?apiKey=".concat(i), n += "&languageId=".concat(o), n += "&workflowId=".concat(t), e.next = 7, fetch(n).then((function(e) {
                                    return e.json()
                                }));
                            case 7:
                                if ("object" === typeof(a = e.sent) && a.GetPressReleaseItemResult) {
                                    e.next = 11;
                                    break
                                }
                                return Bugsnag.notify("API request to /GetPressReleaseItem returned data in unexpected format"), e.abrupt("return", {});
                            case 11:
                                return e.abrupt("return", a.GetPressReleaseItemResult);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function d() {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = Object(r.a)(c.a.mark((function e() {
                    var t, n, a, r = arguments;
                    return c.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = r.length > 0 && void 0 !== r[0] ? r[0] : "english", n = l, n += "/GetPressReleaseList", n += "?apiKey=".concat(i), n += "&bodyType=1", n += "&languageId=".concat(o), n += "&pressReleaseDateFilter=1", n += "&includeTags=true", n += "&tagList=|".concat(t, "|"), e.next = 11, fetch(n).then((function(e) {
                                    return e.json()
                                }));
                            case 11:
                                if ("object" === typeof(a = e.sent) && a.GetPressReleaseListResult) {
                                    e.next = 15;
                                    break
                                }
                                return Bugsnag.notify("API request to /GetPressReleaseList returned data in unexpected format"), e.abrupt("return", []);
                            case 15:
                                return e.abrupt("return", a.GetPressReleaseListResult);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        lQqw: function(e, t, n) {
            var a = n("MMmD");
            e.exports = function(e, t) {
                return function(n, c) {
                    if (null == n) return n;
                    if (!a(n)) return e(n, c);
                    for (var r = n.length, i = t ? r : -1, o = Object(n);
                        (t ? i-- : ++i < r) && !1 !== c(o[i], i, o););
                    return n
                }
            }
        },
        loLh: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("xvhg"),
                o = n("TSYQ"),
                l = n.n(o),
                s = n("bW4L"),
                u = n("7ucd"),
                d = n("AeFk"),
                m = (r.a.createElement, function(e) {
                    var t = e.direction_notrans,
                        n = e.clickOverride_notrans,
                        a = e.enableTracking_notrans,
                        o = e.drag,
                        m = e.wheelDrag,
                        f = e.scrollSpeed,
                        b = e.autoScroll_notrans,
                        g = e.trackingLocation_notrans,
                        p = e.trackingSublocation_notrans,
                        h = e.children,
                        v = Object(c.useRef)(),
                        O = Object(c.useRef)(),
                        j = Object(c.useRef)(),
                        y = Object(c.useRef)(),
                        _ = Object(c.useRef)({
                            position: 0,
                            direction: t,
                            clickOverride: n,
                            enableTracking: a,
                            drag: o,
                            wheelDrag: m,
                            scrollSpeed: f,
                            autoScroll: b,
                            trackingLocation: g,
                            trackingSublocation: p,
                            mousePos: {
                                x: 0,
                                y: 0
                            },
                            lastMousePos: null,
                            wheelX: null,
                            isHovered: !1,
                            dragOrigin: null,
                            dragComplete: !1,
                            targetVelocity: "right" === t ? -f : f,
                            velocity: "right" === t ? -f : f,
                            isTouch: !1,
                            clickDragThreshold: 10,
                            clickTimeThreshold: 200,
                            isValidClick: !1,
                            clickTimeout: null,
                            clickTarget: null
                        }),
                        k = Object(u.a)(),
                        w = Object(i.a)(k, 2),
                        N = w[0],
                        x = w[1];
                    Object(c.useEffect)((function() {
                        v && v.current && N(v.current)
                    }), [v]), Object(c.useEffect)((function() {
                        x ? D() : q()
                    }), [x]);
                    var E = Object(c.useState)(!1),
                        A = E[0],
                        T = E[1],
                        C = _.current,
                        I = function() {
                            j.current = O.current.getBoundingClientRect().width, O.current.style.width = j.current + "px", v.current.setAttribute("style", "")
                        },
                        F = function e() {
                            if (C.wheelX) C.velocity += -C.wheelX, C.wheelX = 0;
                            else if (C.dragOrigin) {
                                C.position = C.mousePos.x - C.dragOrigin.mouseX + C.dragOrigin.position, Math.sqrt(Math.pow(C.mousePos.x - C.dragOrigin.mouseX, 2) + Math.pow(C.mousePos.y - C.dragOrigin.mouseY, 2)) > C.clickDragThreshold && (C.isValidClick = !1)
                            } else C.dragComplete && (C.dragComplete = !1, C.velocity = C.mousePos.x - C.lastMousePos.x);
                            C.autoScroll ? C.targetVelocity = C.velocity > 0 ? C.scrollSpeed : -C.scrollSpeed : C.targetVelocity = 0, C.velocity = C.velocity * (1 - C.drag) + C.targetVelocity * C.drag, C.position += C.velocity, C.position > 0 && (C.position -= j.current / 2), C.position < -j.current / 2 && (C.position += j.current / 2), O.current && (O.current.style.transform = "translate3d(" + Math.floor(10 * C.position / 10) + "px, 0, 0)"), y.current = window.requestAnimationFrame(e)
                        },
                        P = function(e) {
                            0 !== e.deltaX && (e.preventDefault(), C.wheelX = e.deltaX * C.wheelDrag)
                        },
                        S = function(e) {
                            e.stopPropagation(), R()
                        },
                        L = function() {
                            M()
                        },
                        M = function() {
                            C.autoScroll = !0
                        },
                        R = function() {
                            C.autoScroll = !1
                        },
                        D = function() {
                            y.current || (y.current = window.requestAnimationFrame(F))
                        },
                        q = function() {
                            y.current && (window.cancelAnimationFrame(y.current), y.current = null)
                        },
                        V = function() {
                            if (C.enableTracking) {
                                var e = C.clickTarget.dataset.integration.split(" ").join("");
                                Object(s.b)("CTAEngagement", {
                                    eventCategory: "CTA Engagement",
                                    eventAction: "Click",
                                    eventLabel: "Click-" + e + "@" + C.trackingLocation + "-" + C.trackingSublocation
                                })
                            }
                        },
                        H = function() {
                            C.enableTracking && Object(s.b)("CTAEngagement", {
                                eventCategory: "CTA Engagement",
                                eventAction: "Scroll",
                                eventLabel: "Scroll@" + C.trackingLocation + "-" + C.trackingSublocation
                            })
                        },
                        U = Object(c.useState)((function() {
                            var e = r.a.Children.map(h, (function(e) {
                                return r.a.isValidElement(e) ? r.a.cloneElement(e, {
                                    onMouseEnter: S,
                                    onMouseLeave: L
                                }) : e
                            }));
                            return r.a.Children.forEach(h, (function(t) {
                                r.a.isValidElement(t) && e.push(r.a.cloneElement(t, {
                                    onMouseEnter: S,
                                    onMouseLeave: L,
                                    ariaHidden: !0
                                }))
                            })), e
                        })),
                        B = U[0];
                    U[1];
                    return Object(c.useEffect)((function() {
                        return window.addEventListener("resize", I),
                            function() {
                                window.removeEventListener("resize", I)
                            }
                    }), []), Object(c.useEffect)((function() {
                        return I(), D(), v.current.addEventListener("wheel", P),
                            function() {
                                v.current.removeEventListener("wheel", P)
                            }
                    }), []), Object(d.c)("div", {
                        className: l()("appMarquee-row", {
                            "-active": A
                        }),
                        ref: v,
                        onMouseEnter: function() {
                            C.isHovered = !0, C.dragOrigin = null
                        },
                        onMouseLeave: function() {
                            T(!1), C.isHovered = !1, C.dragOrigin = null
                        },
                        onClick: C.clickOverride ? function(e) {
                            e.preventDefault()
                        } : null,
                        onMouseDown: function(e) {
                            C.clickOverride && (C.isValidClick = !0, C.clickTarget = e.target, C.clickTimeout && clearTimeout(C.clickTimeout), C.clickTimeout = setTimeout((function() {
                                C.isValidClick = !1, C.clickTarget = null
                            }), C.clickTimeThreshold)), T(!0), C.dragOrigin = {
                                mouseX: e.clientX,
                                mouseY: e.clientY,
                                position: C.position
                            }
                        },
                        onMouseUp: function() {
                            C.isValidClick && C.clickTarget && C.clickTarget.href && (window.open(C.clickTarget.href, "_blank"), C.clickOverride && V()), !C.isValidClick && C.enableTracking && H(), T(!1), C.dragOrigin = null, C.dragComplete = !0, C.isValidClick = !0
                        },
                        onMouseMove: function(e) {
                            C.lastMousePos = C.mousePos, C.mousePos = {
                                x: e.clientX,
                                y: e.clientY
                            }
                        },
                        onTouchStart: function(e) {
                            C.isTouch = !0, C.lastMousePos = C.mousePos, C.mousePos = {
                                x: e.targetTouches[0].clientX,
                                y: e.targetTouches[0].clientY
                            }, C.dragOrigin = {
                                mouseX: e.targetTouches[0].clientX,
                                mouseY: e.targetTouches[0].clientY,
                                position: C.position
                            }
                        },
                        onTouchMove: function(e) {
                            0 !== e.targetTouches[0].clientX && (C.lastMousePos = C.mousePos, C.mousePos = {
                                x: e.targetTouches[0].clientX,
                                y: e.targetTouches[0].clientY
                            })
                        },
                        onTouchEnd: function() {
                            C.dragOrigin = null, C.dragComplete = !0
                        },
                        style: {
                            width: "auto",
                            transform: "none"
                        }
                    }, Object(d.c)("div", {
                        className: "appMarquee-wrapper",
                        ref: O
                    }, B))
                });
            m.defaultProps = {
                direction_notrans: "right",
                clickOverride_notrans: !1,
                enableTracking_notrans: !1,
                drag: .1,
                wheelDrag: .1,
                scrollSpeed: .4,
                autoScroll_notrans: "false",
                trackingLocation_notrans: "NoLocationProvided",
                trackingSublocation_notrans: "NoSublocationProvided"
            };
            var f = m,
                b = n("VTyt"),
                g = n("r3F2"),
                p = n("//LF"),
                h = n("v23C"),
                v = n.n(h),
                O = (r.a.createElement, function(e) {
                    var t = e.type_notrans,
                        n = e.color,
                        a = e.bg_image_notrans,
                        c = e.company,
                        r = e.logo_image_notrans,
                        i = e.description,
                        o = e.view_url,
                        s = (e.view_text, e.ariaHidden),
                        u = e.onMouseEnter,
                        m = e.onMouseLeave;
                    return Object(d.c)("article", {
                        className: l()("appMarquee-item", "-bg-".concat(n), "-".concat(t), {
                            "-inverted": "black" == n
                        }),
                        "aria-hidden": s,
                        onMouseEnter: u,
                        onMouseLeave: m
                    }, Object(d.c)("div", {
                        className: "appMarquee-item-content-wrapper"
                    }, a && Object(d.c)("div", {
                        className: "appMarqueeDrag-item-bg",
                        style: {
                            background: "url(".concat(a, ")")
                        }
                    }), Object(d.c)("div", {
                        className: "appMarquee-item-content"
                    }, c && Object(d.c)("div", {
                        className: "appMarquee-item-logo-wrapper"
                    }, Object(d.c)("img", {
                        draggable: "false",
                        className: "appMarquee-item-logo -".concat(Object(p.slugify)(c.toLowerCase())),
                        src: r,
                        alt: c
                    })), i && Object(d.c)("div", {
                        className: "appMarquee-item-text -".concat(Object(p.slugify)(c.toLowerCase()))
                    }, c && Object(d.c)("h6", null, Object(d.c)(g.a, {
                        html: c
                    })), Object(d.c)("div", {
                        className: "appMarquee-item-text-description"
                    }, Object(d.c)(g.a, {
                        html: v()(i, 95)
                    })))), o && Object(d.c)("div", {
                        className: "appMarquee-item-link"
                    }, Object(d.c)(b.default, {
                        href: o,
                        title: c,
                        target: "_blank",
                        attribs: {
                            "data-integration": c
                        }
                    }, Object(d.c)("span", {
                        className: "arrow-circle"
                    })))))
                });
            r.a.createElement, t.default = function(e) {
                var t = e.marquee_drag,
                    n = t.items,
                    c = t.options;
                return Object(d.c)(f, c, n && n.map((function(e, t) {
                    return Object(d.c)(O, Object(a.a)({}, e, {
                        key: t
                    }))
                })))
            }
        },
        nzeJ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("HJ2n"),
                i = n("VTyt"),
                o = n("r3F2"),
                l = n("TSYQ"),
                s = n.n(l),
                u = n("AeFk");
            c.a.createElement;

            function d(e) {
                var t = e.showBreadcrumb,
                    n = e.categoryRoot,
                    a = e.isVideoPage,
                    c = e.article_lists;
                return Object(u.c)("nav", {
                    className: "guide-sidebar-nav"
                }, t && Object(u.c)("div", {
                    className: "breadcrumb-link"
                }, Object(u.c)(i.default, {
                    href: n.url
                }, n.title)), c.map((function(e, t) {
                    var n = e.title,
                        c = e.url,
                        r = e.part_of_journey,
                        l = e.accordion,
                        d = e.display_as_link,
                        m = (e.article_list_header, e.is_parent_of_current),
                        f = (e.is_current, e.children);
                    if (n) return Object(u.c)("ul", {
                        key: t,
                        className: s()({
                            section: !0,
                            "journey-progress": r,
                            "accordion-list": l
                        })
                    }, Object(u.c)("li", null, d ? Object(u.c)(i.default, {
                        href: c
                    }, n) : Object(u.c)("div", {
                        className: s()("p--label", "section-header", {
                            open: l && m
                        })
                    }, a ? Object(u.c)(i.default, {
                        href: c
                    }, n) : n), Object(u.c)("ul", {
                        className: "article-list",
                        style: {
                            display: l ? m ? "block" : "none" : ""
                        }
                    }, f && f.map((function(e, t) {
                        var n = e.is_current,
                            a = e.url,
                            c = e.title;
                        return Object(u.c)("li", {
                            className: "article",
                            key: t
                        }, Object(u.c)(i.default, {
                            className: n ? "active" : "",
                            href: a
                        }, c && Object(u.c)(o.a, {
                            html: c
                        }), r && Object(u.c)("span", {
                            className: "progress"
                        }, Object(u.c)("svg", {
                            id: "check",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-7 -7 14 14"
                        }, Object(u.c)("path", {
                            className: "check",
                            d: "M0-7A7,7,0,0,0-7,0,7,7,0,0,0,0,7,7,7,0,0,0,7,0,7,7,0,0,0,0-7ZM-1.13,4.19L-4.46.86-3.29-.32l2,2L2.83-4.18l1.34,1Z"
                        })))))
                    })))))
                })))
            }
            c.a.createElement;

            function m() {
                var e = Object(a.useContext)(r.a);
                return Object(u.c)(d, {
                    showBreadcrumb: e.show_breadcrumb,
                    categoryRoot: e.categoryRoot,
                    isVideoPage: e.isVideoPage,
                    article_lists: e.article_lists
                })
            }
        },
        o12X: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            var a = n("cpVT"),
                c = n("q1tI"),
                r = n("7s/w"),
                i = "user_currency",
                o = {
                    GB: "GBP",
                    JP: "JPY",
                    AU: "AUD",
                    NZ: "AUD",
                    AT: "EUR",
                    BE: "EUR",
                    BG: "EUR",
                    CY: "EUR",
                    CZ: "EUR",
                    DK: "EUR",
                    DE: "EUR",
                    EE: "EUR",
                    ES: "EUR",
                    FI: "EUR",
                    FR: "EUR",
                    GR: "EUR",
                    HR: "EUR",
                    HU: "EUR",
                    IE: "EUR",
                    IT: "EUR",
                    LT: "EUR",
                    LU: "EUR",
                    LV: "EUR",
                    MT: "EUR",
                    NL: "EUR",
                    PL: "EUR",
                    PT: "EUR",
                    RO: "EUR",
                    SE: "EUR",
                    SI: "EUR",
                    SK: "EUR"
                },
                l = {
                    USD: {
                        business: {
                            annual: 24.99,
                            monthly: 30.49
                        },
                        premium: {
                            annual: 10.99,
                            monthly: 13.49
                        },
                        basic: {
                            annual: 0,
                            monthly: 0
                        }
                    },
                    GBP: {
                        business: {
                            annual: 20.99,
                            monthly: 25.69
                        },
                        premium: {
                            annual: 9.49,
                            monthly: 11.59
                        },
                        basic: {
                            annual: 0,
                            monthly: 0
                        }
                    },
                    EUR: {
                        business: {
                            annual: 24.99,
                            monthly: 30.49
                        },
                        premium: {
                            annual: 10.99,
                            monthly: 13.49
                        },
                        basic: {
                            annual: 0,
                            monthly: 0
                        }
                    },
                    JPY: {
                        business: {
                            annual: 2700,
                            monthly: 3300
                        },
                        premium: {
                            annual: 1200,
                            monthly: 1475
                        },
                        basic: {
                            annual: 0,
                            monthly: 0
                        }
                    },
                    AUD: {
                        business: {
                            annual: 33.99,
                            monthly: 41.49
                        },
                        premium: {
                            annual: 14.99,
                            monthly: 18.39
                        },
                        basic: {
                            annual: 0,
                            monthly: 0
                        }
                    }
                },
                s = n("sJyK"),
                u = n("Ld3w"),
                d = n("noZS"),
                m = n.n(d);

            function f() {
                var e = Object(c.useState)(null),
                    t = e[0],
                    n = e[1],
                    d = Object(r.b)(i),
                    f = d.cookieValue,
                    b = d.setCookieValue,
                    g = Object(r.b)("user_geo").cookieValue,
                    p = Object(r.b)("is_logged_in").cookieValue,
                    h = Object.keys(l),
                    v = function(e, t, n) {
                        return "USD" === e && "US" !== n && t === s.DEFAULT_LANGUAGE && (n && "null" !== n)
                    };
                return Object(c.useEffect)((function() {
                    var e = !f || !h.includes(f);
                    g && e && function(e, t, n) {
                        var a, c, r = Object.keys(o).includes(e) ? o[e] : "USD",
                            i = {
                                groupId: u.a.NECESSARY,
                                expiresInDays: 1,
                                crossDomain: !1
                            };
                        t(r, i), "true" === p && n && "local.asana.com" !== (null === (a = n.location) || void 0 === a ? void 0 : a.host) && null !== (c = n.AsanaAppUserInfo) && void 0 !== c && c.get && n.AsanaAppUserInfo.get((function(e) {
                            e.currency && t(e.currency, i)
                        }))
                    }(g, b, window)
                }), [g]), Object(c.useEffect)((function() {
                    var e, t = window.AsanaI18n ? window.AsanaI18n.getUserLanguageCode() : s.DEFAULT_LANGUAGE,
                        c = (e = f, h.includes(e) ? e : "USD"),
                        r = l[c],
                        i = m()(r, (function(e) {
                            return m()(e, (function(e) {
                                return function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "US",
                                        c = arguments.length > 3 ? arguments[3] : void 0,
                                        r = "".concat(c).concat(n ? "-".concat(n) : ""),
                                        i = new Intl.NumberFormat(r, {
                                            style: "currency",
                                            currency: t
                                        });
                                    if ("function" !== typeof i.formatToParts) return i.format(e);
                                    var o = i.formatToParts(e);
                                    if (!o) return null;
                                    var l = {},
                                        s = v(t, c, n);
                                    return o.forEach((function(e) {
                                        !l.integer || "integer" !== e.type && "group" !== e.type ? "currency" === e.type && s ? l[e.type] = "US$" : "currency" === e.type && "AUD" === t ? l[e.type] = "A$" : l[e.type] = e.value : l.integer += e.value
                                    })), delete Object.assign(l, Object(a.a)({}, "number", l.integer)).integer, l
                                }(e, c, g, t)
                            }))
                        }));
                    n(i)
                }), [g, f]), t
            }
        },
        oQXz: function(e, t, n) {
            "use strict";
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("VTyt"),
                o = n("r3F2"),
                l = n("AeFk"),
                s = (r.a.createElement, function(e) {
                    var t = e.source,
                        n = e.date,
                        a = e.link_text,
                        c = e.link_url;
                    return Object(l.c)("li", {
                        className: "articlelisting"
                    }, t && Object(l.c)("div", {
                        className: "articlelisting-header"
                    }, Object(l.c)("p", {
                        className: "articlelisting-source -small"
                    }, Object(l.c)(o.a, {
                        html: t
                    }), n && " \u2014 ".concat(n))), a && Object(l.c)(i.default, {
                        className: "articlelisting-link-text",
                        href: c
                    }, Object(l.c)(o.a, {
                        html: a
                    })))
                });
            r.a.createElement, t.a = function(e) {
                var t = e.headline,
                    n = e.subhead,
                    i = e.classes,
                    o = e.cta_text,
                    u = e.articles,
                    d = e.initial_display_count,
                    m = void 0 === d ? 10 : d,
                    f = Object(c.useState)(m),
                    b = f[0],
                    g = f[1];
                return Object(l.c)(r.a.Fragment, null, Object(l.c)("section", {
                    id: "articlelistings",
                    className: "articlelistings asanaComponent-articleListings ".concat(i)
                }, Object(l.c)("div", {
                    className: "container -narrow"
                }, t && Object(l.c)("header", {
                    className: "articlelistings-header row"
                }, Object(l.c)("div", {
                    className: "articlelistings-col col-medium-8 col-medium-push-2"
                }, t && Object(l.c)("h2", {
                    className: "-h3"
                }, t), n && Object(l.c)("p", {
                    className: "-large"
                }, n))), Object(l.c)("div", {
                    className: "row"
                }, Object(l.c)("ul", {
                    className: "articlelistings-list col-medium-8 col-medium-offset-2"
                }, u && u.slice(0, b).map((function(e) {
                    return Object(l.c)(s, Object(a.a)({}, e, {
                        key: e.link_url
                    }))
                })))), Object(l.c)("button", {
                    className: "button articlelistings-see-more-button -border",
                    onClick: function() {
                        g((function(e) {
                            return e + m
                        }))
                    },
                    disabled: b >= u.length
                }, o))))
            }
        },
        pJ87: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("cpVT"),
                c = n("HALo"),
                r = n("q1tI"),
                i = n.n(r),
                o = n("TSYQ"),
                l = n.n(o),
                s = n("r3F2"),
                u = n("VTyt"),
                d = n("VHp+"),
                m = n("EcEN"),
                f = "DynamicAccordion",
                b = {
                    accordionID: null,
                    activateNextItem: function() {},
                    activeItemIndex: null,
                    autoTimerDuration: null,
                    changeActiveItem: function() {},
                    changeItemFocus: function() {},
                    handleMouseOver: function() {},
                    handleMouseOut: function() {},
                    reportPanelHeight: function() {},
                    onActiveItemChange: void 0,
                    itemHeadingLevel: null,
                    numItems: 0
                },
                g = "End",
                p = "Enter",
                h = "Home",
                v = " ",
                O = "Spacebar",
                j = "ArrowUp",
                y = "ArrowDown",
                _ = "ArrowLeft",
                k = "ArrowRight",
                w = function(e) {
                    return "".concat(f, "__").concat(e)
                },
                N = function(e, t, n) {
                    return "".concat(f, "--").concat(e, "__").concat(t).concat(void 0 !== n ? "--" + n : "")
                },
                x = n("AeFk"),
                E = (i.a.createElement, Object(r.createContext)(b)),
                A = function(e) {
                    var t = e.children,
                        n = e.accordionID,
                        a = e.autoTimerDuration,
                        c = e.initialActiveItemIndex,
                        i = e.itemHeadingLevel,
                        o = e.numItems,
                        l = e.onActiveItemChange,
                        s = Object(r.useState)(c),
                        u = s[0],
                        d = s[1],
                        m = Object(r.useState)(!1),
                        f = m[0],
                        b = m[1],
                        g = Object(r.useRef)(0),
                        p = Object(r.useRef)(new Array(o).fill(0)),
                        h = Object(r.useRef)({}),
                        v = function(e) {
                            d(e), l && l(e)
                        },
                        O = {
                            accordionHovered: f,
                            accordionID: n,
                            activateNextItem: function() {
                                var e = function(e, t) {
                                    return e >= t - 1 ? 0 : e + 1
                                }(u, o);
                                v(e)
                            },
                            activeItemIndex: u,
                            changeActiveItem: v,
                            changeItemFocus: function(e, t) {
                                var n = function(e, t, n) {
                                        return "first" === e ? 0 : "last" === e ? t - 1 : "next" === e ? n >= t - 1 ? 0 : n + 1 : "previous" === e ? n > 0 ? n - 1 : t - 1 : n
                                    }(e, o, t),
                                    a = h.current[n];
                                a.current && a.current.focus()
                            },
                            handleMouseOver: function() {
                                b(!0)
                            },
                            handleMouseOut: function() {
                                b(!1)
                            },
                            onActiveItemChange: l,
                            itemHeadingLevel: i,
                            autoTimerDuration: a,
                            setButtonRef: function(e, t) {
                                t && (h.current[e] = t)
                            },
                            reportPanelHeight: function(e, t) {
                                p.current[t] = e, g.current = p.current.reduce((function(e, t) {
                                    return Math.max(e, t)
                                }))
                            },
                            tallestPanelHeight: g.current
                        };
                    return Object(x.c)(E.Provider, {
                        value: O
                    }, t)
                },
                T = E;

            function C() {
                return Object(r.useContext)(T)
            }
            i.a.createElement;
            var I = function(e) {
                var t = e.children,
                    n = e.itemIndex,
                    a = e.style,
                    c = C(),
                    i = c.accordionID,
                    o = c.activeItemIndex,
                    l = c.itemHeadingLevel,
                    s = c.changeActiveItem,
                    u = c.changeItemFocus,
                    d = c.setButtonRef,
                    m = n === o,
                    f = Object(r.useRef)(null);
                Object(r.useEffect)((function() {
                    f && f.current && d(n, f)
                }), [f]);
                var b = function(e) {
                    e.preventDefault(), s(n)
                };
                return Object(x.c)("div", {
                    className: w("item-heading"),
                    role: "heading",
                    "aria-level": l,
                    onClick: b
                }, Object(x.c)("div", {
                    onClick: b,
                    onKeyDown: function(e) {
                        var t = e.key;
                        switch (t) {
                            case h:
                                e.preventDefault(), u("first");
                                break;
                            case g:
                                e.preventDefault(), u("last");
                                break;
                            case _:
                            case j:
                                e.preventDefault(), u("previous", n);
                                break;
                            case k:
                            case y:
                                e.preventDefault(), u("next", n);
                                break;
                            default:
                                t !== p && t !== v && t !== O || (e.preventDefault(), s(n))
                        }
                    },
                    className: w("item-button"),
                    id: N(i, "item-button", n),
                    "aria-controls": N(i, "item-panel", n),
                    "aria-disabled": m,
                    "aria-expanded": m,
                    ref: f,
                    role: "button",
                    tabIndex: 0,
                    style: a
                }, t))
            };
            I.defaultProps = {
                style: {}
            }, I.displayName = "AccordionItemHeading";
            var F = I,
                P = n("TKEn"),
                S = (i.a.createElement, function(e) {
                    var t, n = e.itemIndex,
                        a = e.children,
                        c = C(),
                        i = c.accordionID,
                        o = c.activeItemIndex,
                        l = c.tallestPanelHeight,
                        s = c.reportPanelHeight,
                        u = Object(r.useRef)(null),
                        d = (null === (t = u.current) || void 0 === t ? void 0 : t.clientHeight) || 0,
                        m = Object(r.useState)(5e3),
                        f = m[0],
                        b = m[1],
                        g = n === o ? {
                            height: "".concat(f, "px")
                        } : {
                            height: "0"
                        };
                    Object(r.useEffect)((function() {
                        var e;
                        if (0 === n) {
                            var t = null === (e = u.current) || void 0 === e ? void 0 : e.querySelector("img"),
                                a = function() {
                                    var e;
                                    b(null === (e = u.current) || void 0 === e ? void 0 : e.clientHeight)
                                };
                            return t ? (t.addEventListener("load", a), function() {
                                t.removeEventListener("load", a)
                            }) : void 0
                        }
                    }), [u, n]), Object(r.useEffect)((function() {
                        l && b(l)
                    }), [l]), Object(r.useEffect)((function() {
                        s(d, n)
                    }), [d]);
                    var p = Object(P.a)().viewportWidth;
                    return Object(r.useEffect)((function() {
                        s(d, n)
                    }), [p]), Object(x.c)("div", {
                        className: w("item-panel"),
                        id: N(i, "item-panel", n),
                        role: "region",
                        "aria-labelledby": N(i, "item-button", n),
                        style: g
                    }, Object(x.c)("div", {
                        className: w("item-panel-content"),
                        ref: u
                    }, a))
                });
            S.displayName = "AccordionItemPanel";
            var L = S;
            i.a.createElement;

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var D = function(e) {
                var t = e.children,
                    n = e.animationPauseStyles,
                    c = e.animationRunningStyles,
                    o = e.classNames,
                    s = e.itemIndex,
                    u = C(),
                    d = u.accordionID,
                    m = u.activateNextItem,
                    f = u.autoTimerDuration,
                    b = u.accordionHovered,
                    g = Object(r.useState)("running"),
                    p = g[0],
                    h = g[1],
                    v = Object(r.useRef)(null),
                    O = function() {
                        clearInterval(v.current), m()
                    },
                    j = function() {
                        h("running"), v.current = setTimeout((function() {
                            O()
                        }), f)
                    };
                Object(r.useEffect)((function() {
                    return j(),
                        function() {
                            clearInterval(v.current)
                        }
                }), []), Object(r.useEffect)((function() {
                    "running" === p && b && (h("paused"), clearInterval(v.current)), "paused" !== p || b || j()
                }), [b]);
                var y = "running" === p ? R(R({}, c), {}, {
                        animationDuration: "".concat(f, "ms")
                    }) : n,
                    _ = i.a.Children.toArray(t)[0];
                return _ && (_ = i.a.cloneElement(_, {
                    style: R(R({}, _.props.style), y)
                })), Object(x.c)("div", {
                    className: l()(w("item-timer"), o, Object(a.a)({}, "-paused", "paused" === p), Object(a.a)({}, "-running", "running" === p)),
                    id: N(d, "item-timer", s),
                    onClick: O,
                    style: y
                }, _)
            };
            D.defaultProps = {
                classNames: [],
                animationPauseStyles: {
                    animationPlayState: "",
                    animationName: "none"
                },
                animationRunningStyles: {
                    animationPlayState: "running",
                    animationTimingFunction: "linear"
                }
            }, D.displayName = "AccordionItemTimer";
            var q = D,
                V = n("j4CS"),
                H = n.n(V),
                U = (i.a.createElement, function(e) {
                    var t = e.children,
                        n = e.itemIndex,
                        o = e.color,
                        s = e.isInViewport,
                        u = Object(r.useMemo)((function() {
                            return function(e) {
                                var t = {
                                    itemHeading: null,
                                    itemContent: null,
                                    itemTimer: null
                                };
                                return i.a.Children.forEach(e, (function(e) {
                                    var n = H()(e);
                                    "AccordionItemHeading" === n ? t.itemHeading = e : "AccordionItemPanel" === n ? t.itemContent = e : "AccordionItemTimer" === n && (t.itemTimer = e)
                                })), t
                            }(t)
                        }), [t]),
                        d = u.itemHeading,
                        m = u.itemContent,
                        f = u.itemTimer,
                        b = C(),
                        g = b.accordionID,
                        p = b.activeItemIndex,
                        h = b.autoTimerDuration,
                        v = n === p;
                    return Object(x.c)("div", {
                        className: l()(w("item"), Object(a.a)({}, w("item-".concat(o)), !!o), {
                            "-is-active": v
                        }),
                        id: N(g, "item", n)
                    }, f && v && h && s && Object(x.c)(q, Object(c.a)({}, f.props, {
                        itemIndex: n
                    }), f.props.children), d && Object(x.c)(F, Object(c.a)({}, d.props, {
                        itemIndex: n
                    }), d.props.children), m && Object(x.c)(L, Object(c.a)({}, m.props, {
                        itemIndex: n
                    }), m.props.children))
                });
            U.displayName = "AccordionItem";
            var B = U;
            i.a.createElement;

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Q = function(e) {
                var t = e.children,
                    n = e.autoTimerDuration,
                    a = e.initialActiveItemIndex,
                    o = e.onActiveItemChange,
                    s = e.itemHeadingLevel,
                    u = e.id,
                    d = Object(r.useMemo)((function() {
                        return function(e) {
                            var t = [],
                                n = [];
                            return i.a.Children.forEach(e, (function(e) {
                                "AccordionItem" === H()(e) ? t.push(e) : n.push(e)
                            })), {
                                accordionItems: t,
                                customChildren: n
                            }
                        }(t)
                    }), [t]),
                    b = d.accordionItems,
                    g = (d.otherChildren, b.length),
                    p = Object(r.useState)(null),
                    h = p[0],
                    v = p[1];
                Object(r.useEffect)((function() {
                    v(u || Object(m.v4)())
                }), []);
                var O = {
                    accordionID: u,
                    autoTimerDuration: n,
                    initialActiveItemIndex: a,
                    itemHeadingLevel: s,
                    numItems: g,
                    onActiveItemChange: o
                };
                return Object(x.c)(A, O, Object(x.c)(T.Consumer, null, (function(e) {
                    var t = e.handleMouseOver,
                        n = e.handleMouseOut;
                    return Object(x.c)("div", {
                        className: l()(f, Y({}, l.a)),
                        id: "DynamicAccordion--".concat(h),
                        onMouseOver: t,
                        onMouseOut: n
                    }, b.length && b.map((function(e, t) {
                        return Object(x.c)(B, Object(c.a)({}, e.props, {
                            itemIndex: t,
                            key: "DynamicAccordion--".concat(h, "__item--").concat(t)
                        }), e.props.children)
                    })))
                })))
            };
            Q.defaultProps = {
                displayName: "DynamicAccordion",
                autoTimerDuration: 0,
                initialActiveItemIndex: 0,
                onActiveItemChange: null,
                classNames: []
            };
            var z = Q;
            var W = n("siQn"),
                X = (i.a.createElement, function(e) {
                    var t = e.image;
                    return t ? Object(x.c)(W.default, t) : null
                }),
                K = (i.a.createElement, "AccordionMediaCarousel"),
                J = function(e) {
                    var t = e.items,
                        n = e.initialActiveItemIndex,
                        i = e.autoTimerDuration,
                        o = e.headingContent,
                        m = e.headingLocation,
                        f = e.itemHeadingLevel,
                        b = e.id,
                        g = e.accordionRef,
                        p = e.isInViewport;
                    if (!t.length) return null;
                    var h = Object(r.useState)(n || 0),
                        v = h[0],
                        O = h[1];
                    return Object(x.c)("div", {
                        ref: g,
                        className: "".concat(K),
                        id: b
                    }, "above" === m && Object(x.c)("div", {
                        className: l()("".concat(K, "__section-heading"), "row")
                    }, o), Object(x.c)("div", {
                        className: "row"
                    }, Object(x.c)("div", {
                        className: l()("".concat(K, "__accordion-col"), "col-xsmall-12", "col-small-10", "col-small-offset-1", "col-medium-5", "col-medium-offset-0", "col-large-4", "px-0")
                    }, "accordion" === m && Object(x.c)("div", {
                        className: "".concat(K, "__heading")
                    }, o), Object(x.c)(z, {
                        autoTimerDuration: i,
                        onActiveItemChange: function(e) {
                            O(e)
                        },
                        initialActiveItemIndex: n,
                        itemHeadingLevel: f,
                        id: b
                    }, t.map((function(e, t) {
                        return Object(x.c)(B, Object(c.a)({}, e, {
                            classNames: ["col-12", "col-medium-5", "pl-3"],
                            key: t,
                            isInViewport: p
                        }), Object(x.c)(q, {
                            classNames: ["".concat(K, "__progress")]
                        }, Object(x.c)("span", {
                            className: "".concat(K, "__progress-bar")
                        })), Object(x.c)(F, null, Object(x.c)("h6", {
                            className: "".concat(K, "__title")
                        }, Object(x.c)("span", {
                            className: "".concat(K, "__title-text")
                        }, Object(x.c)(s.a, {
                            html: e.title
                        })), Object(x.c)("span", {
                            className: "".concat(K, "__chevron")
                        }, Object(x.c)("svg", {
                            width: "11px",
                            height: "7px",
                            viewBox: "0 0 11 7",
                            version: "1.1",
                            xmlns: "true",
                            xmlnsXlink: "http://www.w3.org/1999/xlink"
                        }, Object(x.c)("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, Object(x.c)("g", {
                            transform: "translate(0.000000, -419.000000)",
                            stroke: "#B7BFC6",
                            strokeWidth: "1.5"
                        }, Object(x.c)("g", {
                            transform: "translate(-0.500000, 391.000000)"
                        }, Object(x.c)("g", {
                            transform: "translate(0.000000, 17.000000)"
                        }, Object(x.c)("polyline", {
                            points: "0.5 11.55 5.43814008 16.45 10.2999998 11.55"
                        }))))))))), Object(x.c)(L, null, Object(x.c)("p", null, Object(x.c)(s.a, {
                            html: e.subtitle
                        })), e.cta && e.cta.link && Object(x.c)(u.default, {
                            href: e.cta.link,
                            target: e.cta.target,
                            className: l()("".concat(K, "__link"), e.color && "-".concat(e.color))
                        }, e.cta.text && Object(x.c)("span", {
                            className: "".concat(K, "__link-text")
                        }, Object(x.c)(s.a, {
                            html: e.cta.text
                        })), Object(x.c)(d.a, Object(c.a)({}, e, {
                            modifier: "small"
                        }))), Object(x.c)("div", {
                            className: "".concat(K, "__mobile-only-media")
                        }, e.media && Object(x.c)(X, {
                            image: e.media.image,
                            activeItemIndex: v
                        }))))
                    })))), Object(x.c)("div", {
                        className: l()("".concat(K, "__media-col"), "col-xsmall-12", "col-medium-offset-1", "col-medium-6", "col-large-7", "px-0")
                    }, Object(x.c)("div", {
                        className: "".concat(K, "__media-slide")
                    }, t.map((function(e, t) {
                        var n = e.media;
                        return Object(x.c)("div", {
                            className: l()("".concat(K, "__media-slide-image"), Object(a.a)({}, "-current-image", t === v)),
                            key: N(b, "media-slide-image", t)
                        }, Object(x.c)(X, {
                            image: n.image
                        }))
                    }))))))
                };
            J.defaultProps = {
                initialActiveItemIndex: 0,
                autoTimerDuration: 0,
                autoplayTimerBuffer: 1e3,
                autoPlay: !1,
                headingContent: null,
                headingLocation: "above",
                itemHeadingLevel: 6
            };
            t.default = J
        },
        pgf7: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("r3F2"),
                i = n("AeFk");
            c.a.createElement;

            function o(e) {
                return Object(i.c)("span", {
                    className: "templates-tile",
                    style: {
                        backgroundColor: e.backgroundColor
                    }
                }, Object(i.c)("svg", {
                    className: "templates-tile--icon icon-svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    xmlns: "http://www.w3.org/1999/xlink"
                }, Object(i.c)(r.a, {
                    html: e.icon
                })))
            }
        },
        poAP: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                c = n.n(a),
                r = n("r3F2"),
                i = n("AeFk"),
                o = (c.a.createElement, function(e) {
                    var t = e.text,
                        n = e.tag_link_notrans,
                        a = e.isVariant,
                        o = e.tag_text,
                        l = e.handleModalOpen,
                        s = e.isMatch,
                        u = e.isTimelineFeature;
                    return Object(i.c)(c.a.Fragment, null, Object(i.c)("div", {
                        className: "opti-show-features"
                    }, u ? Object(i.c)("span", {
                        className: "feature__text opti-feature__special -is-active",
                        onClick: s ? l : null
                    }, t, Object(i.c)("div", {
                        className: "gradient-animation"
                    })) : Object(i.c)("span", {
                        className: s ? o ? "feature__text opti-feature --tag" : "feature__text opti-feature" : "feature__text",
                        onClick: s ? l : null
                    }, Object(i.c)(r.a, {
                        html: t
                    }))), o && Object(i.c)("a", {
                        className: "feature__tag tag ".concat(a ? "-black" : "-purple"),
                        href: n
                    }, o))
                }),
                l = (c.a.createElement, function(e) {
                    var t = e.text,
                        n = e.handleModalOpen,
                        a = (e.visualFeaturesVariantData, e.isMatch);
                    return Object(i.c)("div", {
                        className: "opti-show-features"
                    }, Object(i.c)("p", {
                        className: a ? "opti-feature" : "feature-name__text feature__text",
                        onClick: a ? n : null
                    }, Object(i.c)(r.a, {
                        html: t
                    })))
                });
            c.a.createElement, t.a = function(e) {
                var t = e.text,
                    n = e.tag_link_notrans,
                    a = e.isVariant,
                    r = e.visualFeaturesVariantData,
                    s = e.tag_text,
                    u = e.handleModalOpen,
                    d = e.version,
                    m = r && r.map((function(e) {
                        return e.name
                    })).includes(t);
                return Object(i.c)(c.a.Fragment, null, "grid" === d ? Object(i.c)(o, {
                    text: t,
                    tag_text: s,
                    tag_link_notrans: n,
                    isVariant: a,
                    visualFeaturesVariantData: r,
                    handleModalOpen: u,
                    isMatch: m,
                    isTimelineFeature: "Timeline" === t
                }) : Object(i.c)(l, {
                    text: t,
                    handleModalOpen: u,
                    visualFeaturesVariantData: r,
                    isMatch: m
                }))
            }
        },
        "rP/E": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("usKF"),
                i = n("AeFk"),
                o = (c.a.createElement, function(e) {
                    var t = e.text;
                    return Object(i.c)("div", null, Object(i.c)("a", {
                        className: "gmail-button-continue",
                        title: t,
                        href: null
                    }, Object(i.c)("span", {
                        className: "google-sso-verification-button-background"
                    }, Object(i.c)("img", {
                        className: "gmail-button-icon-continue",
                        srcSet: "https://luna1.co/020de6.png 1x, https://luna1.co/328201.png 2x",
                        src: "https://luna1.co/020de6.png",
                        alt: "Google logo"
                    })), Object(i.c)("span", {
                        className: "gmail-button-text-continue"
                    }, t)))
                });
            c.a.createElement;

            function l() {
                var e = Object(a.useContext)(r.a).global_CTAcontinueWithGoogle;
                return Object(i.c)(o, {
                    text: e
                })
            }
        },
        sEfC: function(e, t, n) {
            var a = n("GoyQ"),
                c = n("QIyF"),
                r = n("tLB3"),
                i = Math.max,
                o = Math.min;
            e.exports = function(e, t, n) {
                var l, s, u, d, m, f, b = 0,
                    g = !1,
                    p = !1,
                    h = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function v(t) {
                    var n = l,
                        a = s;
                    return l = s = void 0, b = t, d = e.apply(a, n)
                }

                function O(e) {
                    return b = e, m = setTimeout(y, t), g ? v(e) : d
                }

                function j(e) {
                    var n = e - f;
                    return void 0 === f || n >= t || n < 0 || p && e - b >= u
                }

                function y() {
                    var e = c();
                    if (j(e)) return _(e);
                    m = setTimeout(y, function(e) {
                        var n = t - (e - f);
                        return p ? o(n, u - (e - b)) : n
                    }(e))
                }

                function _(e) {
                    return m = void 0, h && l ? v(e) : (l = s = void 0, d)
                }

                function k() {
                    var e = c(),
                        n = j(e);
                    if (l = arguments, s = this, f = e, n) {
                        if (void 0 === m) return O(f);
                        if (p) return clearTimeout(m), m = setTimeout(y, t), v(f)
                    }
                    return void 0 === m && (m = setTimeout(y, t)), d
                }
                return t = r(t) || 0, a(n) && (g = !!n.leading, u = (p = "maxWait" in n) ? i(r(n.maxWait) || 0, t) : u, h = "trailing" in n ? !!n.trailing : h), k.cancel = function() {
                    void 0 !== m && clearTimeout(m), b = 0, l = f = s = m = void 0
                }, k.flush = function() {
                    return void 0 === m ? d : _(c())
                }, k
            }
        },
        sn7Q: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return o
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("r3F2"),
                i = n("AeFk");
            c.a.createElement;

            function o(e) {
                var t = e.ul_class_notrans,
                    n = e.items;
                return Object(i.c)("ul", {
                    className: e.class || t
                }, n.map((function(e) {
                    var t = e.attributes,
                        n = e.text;
                    return Object(i.c)("li", {
                        className: t && (t[0].class || t[0].class_notrans),
                        key: n
                    }, n && Object(i.c)(r.a, {
                        html: n
                    }))
                })))
            }
        },
        tf1w: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n("HALo"),
                c = n("q1tI"),
                r = n.n(c),
                i = n("fknt"),
                o = n("rOX3"),
                l = n("AeFk");
            r.a.createElement;

            function s(e) {
                var t = e.accordions_first_item_opened_on_load,
                    n = e.accordions,
                    r = Object(o.a)("nonprofitVisabilty").experiment;
                return Object(l.c)("section", {
                    id: "accordion",
                    className: "accordion asanaComponent-accordion"
                }, Object(l.c)("div", {
                    className: "accordion-container container -wide"
                }, Object(l.c)("input", {
                    id: "first-item-opened-on-load",
                    type: "hidden",
                    value: t || ""
                }), n && n.map((function(e, t) {
                    return Object(l.c)(c.Fragment, {
                        key: t
                    }, Object(l.c)("header", {
                        className: "accordion-header"
                    }, e.headline && Object(l.c)("h3", null, e.headline), e.subhead && Object(l.c)("p", null, e.subhead)), Object(l.c)("div", {
                        className: "accordion-row",
                        itemScope: !0,
                        itemType: "http://schema.org/FAQPage"
                    }, e.items && e.items.map((function(e, t) {
                        if (1 !== (null === r || void 0 === r ? void 0 : r.variant) || "Does Asana offer a discount for nonprofits?" !== e.title) return Object(l.c)(i.default, Object(a.a)({}, e, {
                            useFaqSchema: !0,
                            key: t
                        }))
                    })), Object(l.c)("div", {
                        className: "accordion-wrapper blocker"
                    }, Object(l.c)("div", {
                        className: "accordion-tab blocker"
                    }, Object(l.c)("div", {
                        className: "accordion-inner blocker"
                    })))))
                }))))
            }
        },
        v23C: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
                c = ["address", "article", "aside", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "section", "table", "tbody", "tfoot", "thead", "tr", "ul", "video"],
                r = 10,
                i = 47,
                o = 59,
                l = 60,
                s = 62,
                u = /[<&\n\ud800-\udbff]/,
                d = /\s{2,}/g;

            function m(e, t) {
                for (var n = e.length, a = t; a < n; a++)
                    if (g(e.charCodeAt(a))) return a;
                return n
            }

            function f(e) {
                return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122
            }

            function b(e, t) {
                var n = e.charCodeAt(t);
                if (n === r) return !0;
                if (n === l) {
                    var a = "(" + c.join("|") + "|br)";
                    return new RegExp("^<" + a + "[\t\n\f\r ]*/?>", "i").test(e.slice(t))
                }
                return !1
            }

            function g(e) {
                return 9 === e || 10 === e || 12 === e || 13 === e || 32 === e
            }

            function p(e) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var n = e[t];
                    if ("li" === n || "td" === n) return !1;
                    if ("ol" === n || "table" === n || "ul" === n) return !0
                }
                return !1
            }

            function h(e) {
                return e.trim().replace(d, " ")
            }

            function v(e, t) {
                var n = e.charCodeAt(t);
                if (55296 === (64512 & n)) {
                    var a = e.charCodeAt(t + 1);
                    if (56320 === (64512 & a)) return String.fromCharCode(n, a)
                }
                return String.fromCharCode(n)
            }
            t.default = function(e, t, n) {
                return void 0 === n && (n = {}), e ? (e = e.toString(), n.html ? function(e, t, n) {
                    for (var d = n.imageWeight, O = void 0 === d ? 2 : d, j = n.indicator, y = void 0 === j ? "\u2026" : j, _ = n.maxLines, k = void 0 === _ ? 1 / 0 : _, w = y.length, N = 1, x = 0, E = !1, A = [], T = e.length; x < T; x++) {
                        var C = x ? e.slice(x) : e,
                            I = C.search(u),
                            F = I > -1 ? I : C.length;
                        if (x += F, !E)
                            if (p(A)) {
                                if ((w += h(F === C.length ? C : C.slice(0, I)).length) > t) {
                                    x -= F;
                                    break
                                }
                            } else if ((w += F) > t) {
                            x = Math.max(x - w + t, 0);
                            break
                        }
                        if (-1 === I) break;
                        if ((X = e.charCodeAt(x)) === l) {
                            var P = 33 === e.charCodeAt(x + 1);
                            if (P && "--" === e.substr(x + 2, 2)) x = e.indexOf("--\x3e", x + 4) + 3 - 1;
                            else if (P && "[CDATA[" === e.substr(x + 2, 7)) {
                                x = e.indexOf("]]>", x + 9) + 3 - 1
                            } else {
                                if (w === t && e.charCodeAt(x + 1) !== i) {
                                    w++;
                                    break
                                }
                                for (var S = 0, L = x, M = !1;;) {
                                    if (++L >= T) throw new Error("Invalid HTML: " + e);
                                    var R = e.charCodeAt(L);
                                    if (M) S ? R === S && (M = !1) : g(R) ? M = !1 : R === s && (M = !1, L--);
                                    else if (61 === R) {
                                        for (; g(e.charCodeAt(L + 1));) L++;
                                        M = !0;
                                        var D = e.charCodeAt(L + 1);
                                        34 === D || 39 === D ? (S = D, L++) : S = 0
                                    } else if (R === s) {
                                        var q = e.charCodeAt(x + 1) === i,
                                            V = x + (q ? 2 : 1),
                                            H = Math.min(m(e, V), L);
                                        if ((J = e.slice(V, H).toLowerCase()).charCodeAt(J.length - 1) === i && (J = J.slice(0, J.length - 1)), q) {
                                            if (A.pop() !== J) throw new Error("Invalid HTML: " + e);
                                            if (("math" === J || "svg" === J) && !(E = A.includes("math") || A.includes("svg")) && (w += O) > t) break;
                                            if (c.includes(J) && !E && ++N > k) {
                                                A.push(J);
                                                break
                                            }
                                        } else if (a.includes(J) || e.charCodeAt(L - 1) === i) {
                                            if ("br" === J) {
                                                if (++N > k) break
                                            } else if ("img" === J && (w += O) > t) break
                                        } else A.push(J), "math" !== J && "svg" !== J || (E = !0);
                                        x = L;
                                        break
                                    }
                                }
                                if (w > t || N > k) break
                            }
                        } else if (38 === X) {
                            L = x + 1;
                            for (var U = !0;;) {
                                var B = e.charCodeAt(L);
                                if (!f(B)) {
                                    if (59 === B) break;
                                    U = !1;
                                    break
                                }
                                L++
                            }
                            if (!E && ++w > t) break;
                            U && (x = L)
                        } else if (X === r) {
                            if (!E && !p(A)) {
                                if (++w > t) break;
                                if (++N > k) break
                            }
                        } else {
                            if (!E && ++w > t) break;
                            56320 === (64512 & e.charCodeAt(x + 1)) && x++
                        }
                    }
                    if (w > t) {
                        var G = function(e, t) {
                            var n = v(e, t);
                            if ("&" === n)
                                for (;;) {
                                    t++;
                                    var a = e.charCodeAt(t);
                                    if (!f(a)) {
                                        if (a === o) {
                                            n += String.fromCharCode(a);
                                            break
                                        }
                                        break
                                    }
                                    n += String.fromCharCode(a)
                                }
                            return n
                        }(e, x);
                        if (y) {
                            for (var Y = x + G.length; e.charCodeAt(Y) === l && e.charCodeAt(Y + 1) === i;) {
                                var Q = e.indexOf(">", Y + 2) + 1;
                                if (!Q) break;
                                Y = Q
                            }
                            Y && (Y === e.length || b(e, Y)) && (x += G.length, G = e.charAt(x))
                        }
                        for (;
                            "<" === G && e.charCodeAt(x + 1) === i;) {
                            var z = (J = A.pop()) ? e.indexOf(">", x + 2) : -1;
                            if (-1 === z || e.slice(x + 2, z).trim() !== J) throw new Error("Invalid HTML: " + e);
                            x = z + 1, G = e.charAt(x)
                        }
                        if (x < e.length) {
                            if (!n.breakWords)
                                for (var W = x - y.length; W >= 0; W--) {
                                    var X;
                                    if ((X = e.charCodeAt(W)) === s || X === o) break;
                                    if (X === r || X === l) {
                                        x = W;
                                        break
                                    }
                                    if (g(X)) {
                                        x = W + (y ? 1 : 0);
                                        break
                                    }
                                }
                            var K = e.slice(0, x);
                            for (b(e, x) || (K += y); A.length;) {
                                K += "</" + (J = A.pop()) + ">"
                            }
                            return K
                        }
                    } else if (N > k) {
                        for (K = e.slice(0, x); A.length;) {
                            var J;
                            K += "</" + (J = A.pop()) + ">"
                        }
                        return K
                    }
                    return e
                }(e, t, n) : function(e, t, n) {
                    for (var a = n.indicator, c = void 0 === a ? "\u2026" : a, i = n.maxLines, o = void 0 === i ? 1 / 0 : i, l = c.length, s = 1, u = 0, d = e.length; u < d && !(++l > t); u++) {
                        if ((p = e.charCodeAt(u)) === r) {
                            if (++s > o) break
                        } else if (55296 === (64512 & p)) {
                            56320 === (64512 & e.charCodeAt(u + 1)) && u++
                        }
                    }
                    if (l > t) {
                        var m = v(e, u);
                        if (c) {
                            var f = u + m.length;
                            if (f === e.length) return e;
                            if (e.charCodeAt(f) === r) return e.slice(0, u + m.length)
                        }
                        if (!n.breakWords)
                            for (var b = u - c.length; b >= 0; b--) {
                                var p;
                                if ((p = e.charCodeAt(b)) === r) {
                                    u = b, m = "\n";
                                    break
                                }
                                if (g(p)) {
                                    u = b + (c ? 1 : 0);
                                    break
                                }
                            }
                        return e.slice(0, u) + ("\n" === m ? "" : c)
                    }
                    if (s > o) return e.slice(0, u);
                    return e
                }(e, t, n)) : ""
            }
        },
        vZTd: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("q1tI"),
                c = n.n(a),
                r = n("siQn"),
                i = n("r3F2"),
                o = n("AeFk");
            c.a.createElement;
            t.default = function(e) {
                var t = e.img,
                    n = e.alt,
                    a = e.title,
                    c = e.subtitle;
                return Object(o.c)("div", {
                    className: "headshot mb-2 mb-sm-3 mb-lg-4"
                }, Object(o.c)("div", {
                    className: "headshot__image-wrapper mb-1 mx-1"
                }, Object(o.c)(r.default, {
                    src: t,
                    alt: n,
                    className: "headshot__image"
                })), Object(o.c)("div", {
                    className: "headshot__text mx-1"
                }, Object(o.c)("p", {
                    className: "headshot__title"
                }, Object(o.c)(i.a, {
                    html: a
                })), Object(o.c)("p", {
                    className: "headshot__sub-title -smaller"
                }, Object(o.c)(i.a, {
                    html: c
                }))))
            }
        },
        vnLs: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                c = n.n(a),
                r = n("AeFk");
            c.a.createElement;
            t.a = function(e) {
                var t = e.context;
                return Object(r.c)("div", {
                    className: "supportBreadcrumbs ".concat(t)
                })
            }
        },
        xDdU: function(e, t, n) {
            var a, c, r = n("4fRq"),
                i = n("I2ZF"),
                o = 0,
                l = 0;
            e.exports = function(e, t, n) {
                var s = t && n || 0,
                    u = t || [],
                    d = (e = e || {}).node || a,
                    m = void 0 !== e.clockseq ? e.clockseq : c;
                if (null == d || null == m) {
                    var f = r();
                    null == d && (d = a = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]), null == m && (m = c = 16383 & (f[6] << 8 | f[7]))
                }
                var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    g = void 0 !== e.nsecs ? e.nsecs : l + 1,
                    p = b - o + (g - l) / 1e4;
                if (p < 0 && void 0 === e.clockseq && (m = m + 1 & 16383), (p < 0 || b > o) && void 0 === e.nsecs && (g = 0), g >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                o = b, l = g, c = m;
                var h = (1e4 * (268435455 & (b += 122192928e5)) + g) % 4294967296;
                u[s++] = h >>> 24 & 255, u[s++] = h >>> 16 & 255, u[s++] = h >>> 8 & 255, u[s++] = 255 & h;
                var v = b / 4294967296 * 1e4 & 268435455;
                u[s++] = v >>> 8 & 255, u[s++] = 255 & v, u[s++] = v >>> 24 & 15 | 16, u[s++] = v >>> 16 & 255, u[s++] = m >>> 8 | 128, u[s++] = 255 & m;
                for (var O = 0; O < 6; ++O) u[s + O] = d[O];
                return t || i(u)
            }
        },
        xk4V: function(e, t, n) {
            var a = n("4fRq"),
                c = n("I2ZF");
            e.exports = function(e, t, n) {
                var r = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var i = (e = e || {}).random || (e.rng || a)();
                if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
                    for (var o = 0; o < 16; ++o) t[r + o] = i[o];
                return t || c(i)
            }
        },
        z7pX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("6FTQ");
            var c = n("8rE2");

            function r(e) {
                return function(e) {
                    if (Array.isArray(e)) return Object(a.a)(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Object(c.a)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        zlsh: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n("q1tI"),
                c = n.n(a),
                r = n("HJ2n"),
                i = n("VTyt"),
                o = n("AeFk");
            c.a.createElement;

            function l(e) {
                var t = e.useCases,
                    n = e.useCasesPreviewLabel,
                    a = e.resources,
                    c = e.resourcesPreviewLabel;
                return t || a ? Object(o.c)("nav", {
                    className: "guide-related-nav"
                }, t && Object(o.c)("ul", {
                    className: "related-list section"
                }, Object(o.c)("li", {
                    className: "category"
                }, Object(o.c)("div", {
                    className: "p--label section-header"
                }, n), Object(o.c)("ul", {
                    className: "article-list"
                }, t.map((function(e, t) {
                    var n = e.url,
                        a = e.title;
                    return Object(o.c)("li", {
                        className: "article",
                        key: t
                    }, Object(o.c)(i.default, {
                        href: n
                    }, a))
                }))))), a && Object(o.c)("ul", {
                    className: "related-list section"
                }, Object(o.c)("li", {
                    className: "category"
                }, Object(o.c)("div", {
                    className: "p--label section-header"
                }, c), Object(o.c)("ul", {
                    className: "article-list"
                }, a.map((function(e, t) {
                    var n = e.url,
                        a = e.title;
                    return Object(o.c)("li", {
                        className: "article",
                        key: t
                    }, Object(o.c)(i.default, {
                        href: n
                    }, a))
                })))))) : null
            }
            c.a.createElement;

            function s() {
                var e = Object(a.useContext)(r.a),
                    t = e.related_use_cases,
                    n = e.related_resources,
                    c = e.related_use_cases_preview_label,
                    i = e.related_resources_preview_label;
                return Object(o.c)(l, {
                    useCases: t,
                    resources: n,
                    useCasesPreviewLabel: c,
                    resourcesPreviewLabel: i
                })
            }
        }
    }
]);