(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [0], {
        "+1VY": function(e, t, n) {
            "use strict";
            var r = n("ep+1"),
                a = "-ms-",
                o = "-moz-",
                i = "-webkit-",
                c = "comm",
                s = "rule",
                l = "decl",
                u = Math.abs,
                p = String.fromCharCode;

            function f(e) {
                return e.trim()
            }

            function d(e, t, n) {
                return e.replace(t, n)
            }

            function m(e, t) {
                return e.indexOf(t)
            }

            function h(e, t) {
                return 0 | e.charCodeAt(t)
            }

            function g(e, t, n) {
                return e.slice(t, n)
            }

            function b(e) {
                return e.length
            }

            function v(e) {
                return e.length
            }

            function y(e, t) {
                return t.push(e), e
            }

            function _(e, t) {
                return e.map(t).join("")
            }
            var j = 1,
                w = 1,
                O = 0,
                x = 0,
                k = 0,
                E = "";

            function C(e, t, n, r, a, o, i) {
                return {
                    value: e,
                    root: t,
                    parent: n,
                    type: r,
                    props: a,
                    children: o,
                    line: j,
                    column: w,
                    length: i,
                    return: ""
                }
            }

            function S(e, t, n) {
                return C(e, t.root, t.parent, n, t.props, t.children, 0)
            }

            function A() {
                return k = x > 0 ? h(E, --x) : 0, w--, 10 === k && (w = 1, j--), k
            }

            function P() {
                return k = x < O ? h(E, x++) : 0, w++, 10 === k && (w = 1, j++), k
            }

            function T() {
                return h(E, x)
            }

            function N() {
                return x
            }

            function L(e, t) {
                return g(E, e, t)
            }

            function R(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function F(e) {
                return j = w = 1, O = b(E = e), x = 0, []
            }

            function I(e) {
                return E = "", e
            }

            function M(e) {
                return f(L(x - 1, D(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
            }

            function G(e) {
                for (;
                    (k = T()) && k < 33;) P();
                return R(e) > 2 || R(k) > 3 ? "" : " "
            }

            function D(e) {
                for (; P();) switch (k) {
                    case e:
                        return x;
                    case 34:
                    case 39:
                        return D(34 === e || 39 === e ? e : k);
                    case 40:
                        41 === e && D(e);
                        break;
                    case 92:
                        P()
                }
                return x
            }

            function z(e, t) {
                for (; P() && e + k !== 57 && (e + k !== 84 || 47 !== T()););
                return "/*" + L(t, x - 1) + "*" + p(47 === e ? e : P())
            }

            function B(e) {
                for (; !R(T());) P();
                return L(e, x)
            }

            function U(e) {
                return I(q("", null, null, null, [""], e = F(e), 0, [0], e))
            }

            function q(e, t, n, r, a, o, i, c, s) {
                for (var l = 0, u = 0, f = i, m = 0, h = 0, g = 0, v = 1, _ = 1, j = 1, w = 0, O = "", x = a, k = o, E = r, C = O; _;) switch (g = w, w = P()) {
                    case 34:
                    case 39:
                    case 91:
                    case 40:
                        C += M(w);
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        C += G(g);
                        break;
                    case 47:
                        switch (T()) {
                            case 42:
                            case 47:
                                y(H(z(P(), N()), t, n), s);
                                break;
                            default:
                                C += "/"
                        }
                        break;
                    case 123 * v:
                        c[l++] = b(C) * j;
                    case 125 * v:
                    case 59:
                    case 0:
                        switch (w) {
                            case 0:
                            case 125:
                                _ = 0;
                            case 59 + u:
                                h > 0 && b(C) - f && y(h > 32 ? V(C + ";", r, n, f - 1) : V(d(C, " ", "") + ";", r, n, f - 2), s);
                                break;
                            case 59:
                                C += ";";
                            default:
                                if (y(E = W(C, t, n, l, u, a, c, O, x = [], k = [], f), o), 123 === w)
                                    if (0 === u) q(C, t, E, E, x, o, f, c, k);
                                    else switch (m) {
                                        case 100:
                                        case 109:
                                        case 115:
                                            q(e, E, E, r && y(W(e, E, E, 0, 0, a, c, O, a, x = [], f), k), a, k, f, c, r ? x : k);
                                            break;
                                        default:
                                            q(C, E, E, E, [""], k, f, c, k)
                                    }
                        }
                        l = u = h = 0, v = j = 1, O = C = "", f = i;
                        break;
                    case 58:
                        f = 1 + b(C), h = g;
                    default:
                        if (v < 1)
                            if (123 == w) --v;
                            else if (125 == w && 0 == v++ && 125 == A()) continue;
                        switch (C += p(w), w * v) {
                            case 38:
                                j = u > 0 ? 1 : (C += "\f", -1);
                                break;
                            case 44:
                                c[l++] = (b(C) - 1) * j, j = 1;
                                break;
                            case 64:
                                45 === T() && (C += M(P())), m = T(), u = b(O = C += B(N())), w++;
                                break;
                            case 45:
                                45 === g && 2 == b(C) && (v = 0)
                        }
                }
                return o
            }

            function W(e, t, n, r, a, o, i, c, l, p, m) {
                for (var h = a - 1, b = 0 === a ? o : [""], y = v(b), _ = 0, j = 0, w = 0; _ < r; ++_)
                    for (var O = 0, x = g(e, h + 1, h = u(j = i[_])), k = e; O < y; ++O)(k = f(j > 0 ? b[O] + " " + x : d(x, /&\f/g, b[O]))) && (l[w++] = k);
                return C(e, t, n, 0 === a ? s : c, l, p, m)
            }

            function H(e, t, n) {
                return C(e, t, n, c, p(k), g(e, 2, -2), 0)
            }

            function V(e, t, n, r) {
                return C(e, t, n, l, g(e, 0, r), g(e, r + 1, -1), r)
            }

            function Y(e, t) {
                switch (function(e, t) {
                    return (((t << 2 ^ h(e, 0)) << 2 ^ h(e, 1)) << 2 ^ h(e, 2)) << 2 ^ h(e, 3)
                }(e, t)) {
                    case 5103:
                        return i + "print-" + e + e;
                    case 5737:
                    case 4201:
                    case 3177:
                    case 3433:
                    case 1641:
                    case 4457:
                    case 2921:
                    case 5572:
                    case 6356:
                    case 5844:
                    case 3191:
                    case 6645:
                    case 3005:
                    case 6391:
                    case 5879:
                    case 5623:
                    case 6135:
                    case 4599:
                    case 4855:
                    case 4215:
                    case 6389:
                    case 5109:
                    case 5365:
                    case 5621:
                    case 3829:
                        return i + e + e;
                    case 5349:
                    case 4246:
                    case 4810:
                    case 6968:
                    case 2756:
                        return i + e + o + e + a + e + e;
                    case 6828:
                    case 4268:
                        return i + e + a + e + e;
                    case 6165:
                        return i + e + a + "flex-" + e + e;
                    case 5187:
                        return i + e + d(e, /(\w+).+(:[^]+)/, i + "box-$1$2" + a + "flex-$1$2") + e;
                    case 5443:
                        return i + e + a + "flex-item-" + d(e, /flex-|-self/, "") + e;
                    case 4675:
                        return i + e + a + "flex-line-pack" + d(e, /align-content|flex-|-self/, "") + e;
                    case 5548:
                        return i + e + a + d(e, "shrink", "negative") + e;
                    case 5292:
                        return i + e + a + d(e, "basis", "preferred-size") + e;
                    case 6060:
                        return i + "box-" + d(e, "-grow", "") + i + e + a + d(e, "grow", "positive") + e;
                    case 4554:
                        return i + d(e, /([^-])(transform)/g, "$1" + i + "$2") + e;
                    case 6187:
                        return d(d(d(e, /(zoom-|grab)/, i + "$1"), /(image-set)/, i + "$1"), e, "") + e;
                    case 5495:
                    case 3959:
                        return d(e, /(image-set\([^]*)/, i + "$1$`$1");
                    case 4968:
                        return d(d(e, /(.+:)(flex-)?(.*)/, i + "box-pack:$3" + a + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + i + e + e;
                    case 4095:
                    case 3583:
                    case 4068:
                    case 2532:
                        return d(e, /(.+)-inline(.+)/, i + "$1$2") + e;
                    case 8116:
                    case 7059:
                    case 5753:
                    case 5535:
                    case 5445:
                    case 5701:
                    case 4933:
                    case 4677:
                    case 5533:
                    case 5789:
                    case 5021:
                    case 4765:
                        if (b(e) - 1 - t > 6) switch (h(e, t + 1)) {
                            case 109:
                                if (45 !== h(e, t + 4)) break;
                            case 102:
                                return d(e, /(.+:)(.+)-([^]+)/, "$1" + i + "$2-$3$1" + o + (108 == h(e, t + 3) ? "$3" : "$2-$3")) + e;
                            case 115:
                                return ~m(e, "stretch") ? Y(d(e, "stretch", "fill-available"), t) + e : e
                        }
                        break;
                    case 4949:
                        if (115 !== h(e, t + 1)) break;
                    case 6444:
                        switch (h(e, b(e) - 3 - (~m(e, "!important") && 10))) {
                            case 107:
                                return d(e, ":", ":" + i) + e;
                            case 101:
                                return d(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + i + (45 === h(e, 14) ? "inline-" : "") + "box$3$1" + i + "$2$3$1" + a + "$2box$3") + e
                        }
                        break;
                    case 5936:
                        switch (h(e, t + 11)) {
                            case 114:
                                return i + e + a + d(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                            case 108:
                                return i + e + a + d(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                            case 45:
                                return i + e + a + d(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                        }
                        return i + e + a + e + e
                }
                return e
            }

            function K(e, t) {
                for (var n = "", r = v(e), a = 0; a < r; a++) n += t(e[a], a, e, t) || "";
                return n
            }

            function Q(e, t, n, r) {
                switch (e.type) {
                    case "@import":
                    case l:
                        return e.return = e.return || e.value;
                    case c:
                        return "";
                    case s:
                        e.value = e.props.join(",")
                }
                return b(n = K(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
            }

            function Z(e) {
                return function(t) {
                    t.root || (t = t.return) && e(t)
                }
            }
            n("gRFL"), n("SVgp");
            var X = function(e, t) {
                    return I(function(e, t) {
                        var n = -1,
                            r = 44;
                        do {
                            switch (R(r)) {
                                case 0:
                                    38 === r && 12 === T() && (t[n] = 1), e[n] += B(x - 1);
                                    break;
                                case 2:
                                    e[n] += M(r);
                                    break;
                                case 4:
                                    if (44 === r) {
                                        e[++n] = 58 === T() ? "&\f" : "", t[n] = e[n].length;
                                        break
                                    }
                                default:
                                    e[n] += p(r)
                            }
                        } while (r = P());
                        return e
                    }(F(e), t))
                },
                $ = new WeakMap,
                J = function(e) {
                    if ("rule" === e.type && e.parent && e.length) {
                        for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                            "rule" !== n.type;)
                            if (!(n = n.parent)) return;
                        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || $.get(n)) && !r) {
                            $.set(e, !0);
                            for (var a = [], o = X(t, a), i = n.props, c = 0, s = 0; c < o.length; c++)
                                for (var l = 0; l < i.length; l++, s++) e.props[s] = a[c] ? o[c].replace(/&\f/g, i[l]) : i[l] + " " + o[c]
                        }
                    }
                },
                ee = function(e) {
                    if ("decl" === e.type) {
                        var t = e.value;
                        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                    }
                },
                te = [function(e, t, n, r) {
                    if (!e.return) switch (e.type) {
                        case l:
                            e.return = Y(e.value, e.length);
                            break;
                        case "@keyframes":
                            return K([S(d(e.value, "@", "@" + i), e, "")], r);
                        case s:
                            if (e.length) return _(e.props, (function(t) {
                                switch (function(e, t) {
                                    return (e = t.exec(e)) ? e[0] : e
                                }(t, /(::plac\w+|:read-\w+)/)) {
                                    case ":read-only":
                                    case ":read-write":
                                        return K([S(d(t, /:(read-\w+)/, ":-moz-$1"), e, "")], r);
                                    case "::placeholder":
                                        return K([S(d(t, /:(plac\w+)/, ":" + i + "input-$1"), e, ""), S(d(t, /:(plac\w+)/, ":-moz-$1"), e, ""), S(d(t, /:(plac\w+)/, a + "input-$1"), e, "")], r)
                                }
                                return ""
                            }))
                    }
                }];
            t.a = function(e) {
                var t = e.key;
                if ("css" === t) {
                    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
                    Array.prototype.forEach.call(n, (function(e) {
                        document.head.appendChild(e), e.setAttribute("data-s", "")
                    }))
                }
                var a = e.stylisPlugins || te;
                var o, i, c = {},
                    s = [];
                o = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"), (function(e) {
                    var n = e.getAttribute("data-emotion").split(" ");
                    if (n[0] === t) {
                        for (var r = 1; r < n.length; r++) c[n[r]] = !0;
                        s.push(e)
                    }
                }));
                var l = [J, ee];
                var u, p = [Q, Z((function(e) {
                        u.insert(e)
                    }))],
                    f = function(e) {
                        var t = v(e);
                        return function(n, r, a, o) {
                            for (var i = "", c = 0; c < t; c++) i += e[c](n, r, a, o) || "";
                            return i
                        }
                    }(l.concat(a, p));
                i = function(e, t, n, r) {
                    u = n, K(U(e ? e + "{" + t.styles + "}" : t.styles), f), r && (d.inserted[t.name] = !0)
                };
                var d = {
                    key: t,
                    sheet: new r.a({
                        key: t,
                        container: o,
                        nonce: e.nonce,
                        speedy: e.speedy,
                        prepend: e.prepend
                    }),
                    nonce: e.nonce,
                    inserted: c,
                    registered: {},
                    insert: i
                };
                return d.sheet.hydrate(s), d
            }
        },
        "+2iv": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("usKF"),
                i = n("g4pe"),
                c = n.n(i),
                s = n("AeFk"),
                l = (a.a.createElement, function(e) {
                    var t = e.buttonText;
                    return Object(s.c)(a.a.Fragment, null, Object(s.c)(c.a, null, Object(s.c)("style", null, '\n    @font-face {\n      font-family: "Roboto";\n      src: url("https://dk07rojba4tkh.cloudfront.net/roboto/Roboto-Medium.ttf") format(\'truetype\');\n      font-weight: 500;\n      font-display: block;\n    }\n  ')), Object(s.c)("a", {
                        className: "gmail-button-continue exp-gmail-button-continue",
                        title: t,
                        tabindex: "0",
                        onClick: function() {
                            AsanaAnalytics.trackGTM("login_google_auth"), AsanaAnalytics.trackGTM("signup_google_auth"), AsanaHelpers.signupWithGoogle()
                        },
                        onKeyDown: function(e) {
                            "Enter" === e.key && (AsanaAnalytics.trackGTM("login_google_auth"), AsanaAnalytics.trackGTM("signup_google_auth"), AsanaHelpers.signupWithGoogle())
                        }
                    }, Object(s.c)("span", {
                        className: "google-sso-verification-button-background"
                    }, Object(s.c)("img", {
                        className: "gmail-button-icon-continue",
                        srcSet: "https://luna1.co/020de6.png 1x, https://luna1.co/328201.png 2x",
                        src: "https://luna1.co/020de6.png",
                        alt: "Google logo"
                    })), Object(s.c)("span", {
                        className: "gmail-button-text-continue"
                    }, t)))
                }),
                u = n("sJyK"),
                p = (a.a.createElement, {
                    de: "Mit Google registrieren",
                    en: "Sign up with Google",
                    es: "Reg\xedstrate con Google",
                    fr: "S\u2019inscrire avec Google",
                    ja: "Google \u3067\u767b\u9332",
                    pt: "Cadastrar-se com o Google"
                });
            t.a = function() {
                var e = Object(r.useContext)(o.a).global_language || u.DEFAULT_LANGUAGE;
                return Object(s.c)(l, {
                    buttonText: p[e]
                })
            }
        },
        "+6XX": function(e, t, n) {
            var r = n("y1pI");
            e.exports = function(e) {
                return r(this.__data__, e) > -1
            }
        },
        "+K+b": function(e, t, n) {
            var r = n("JHRd");
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new r(t).set(new r(e)), t
            }
        },
        "+c4W": function(e, t, n) {
            var r = n("711d"),
                a = n("4/ic"),
                o = n("9ggG"),
                i = n("9Nap");
            e.exports = function(e) {
                return o(e) ? r(i(e)) : a(e)
            }
        },
        "+iFO": function(e, t, n) {
            var r = n("dTAl"),
                a = n("LcsW"),
                o = n("6sVZ");
            e.exports = function(e) {
                return "function" != typeof e.constructor || o(e) ? {} : r(a(e))
            }
        },
        "//LF": function(e, t) {
            function n(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e) {
                return e && "string" === typeof e ? e.split(" ").reduce((function(e, t) {
                    return e + " " + t.charAt(0).toUpperCase() + t.substring(1)
                }), "").trim() : null
            }
            e.exports = {
                slugify: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
                    if (!e) return "";
                    var n = new RegExp("[^\\w\\s\\".concat(t, "]"), "gi");
                    return e.replace(n, "").trim().toLowerCase().replace(/\s+/g, t)
                },
                unslugify: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
                    return a(e.split(t).join(" "))
                },
                stripLeadingSlash: function(e) {
                    return e && e.startsWith("/") ? e.substr(1) : e
                },
                addLeadingSlash: function(e) {
                    return e.startsWith("/") ? e : "/" + e
                },
                stripTrailingSlash: function(e) {
                    return e && e.endsWith("/") ? e.slice(0, -1) : e
                },
                truncate: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " ...";
                    if (e.length <= t) return e;
                    var r = e.slice(0, t),
                        a = r.search(/^.*(\s)\S*$/) || r.length - 1;
                    return r.slice(0, a) + n
                },
                stringsToFunction: function(e) {
                    if (!e) return null;
                    "string" === typeof e && (e = [e]);
                    var t, r = [],
                        a = n(e);
                    try {
                        for (a.s(); !(t = a.n()).done;) {
                            var o = t.value;
                            if ("string" === typeof o) {
                                var i, c = n(o.split(";").filter((function(e) {
                                    return e
                                })));
                                try {
                                    for (c.s(); !(i = c.n()).done;) {
                                        var s = i.value;
                                        r.push(s)
                                    }
                                } catch (l) {
                                    c.e(l)
                                } finally {
                                    c.f()
                                }
                            }
                        }
                    } catch (l) {
                        a.e(l)
                    } finally {
                        a.f()
                    }
                    return 0 === r.length ? null : new Function(r.join(";"))
                },
                toTitle: a
            }
        },
        "/0+H": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = i, t.useAmp = function() {
                return i(a.default.useContext(o.AmpStateContext))
            };
            var r, a = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                o = n("lwAK");

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    a = void 0 !== r && r,
                    o = e.hasQuery,
                    i = void 0 !== o && o;
                return n || a && i
            }
        },
        "/9aa": function(e, t, n) {
            var r = n("NykK"),
                a = n("ExA7");
            e.exports = function(e) {
                return "symbol" == typeof e || a(e) && "[object Symbol]" == r(e)
            }
        },
        "/GRZ": function(e, t) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        },
        "/jkW": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isDynamicRoute = function(e) {
                return r.test(e)
            };
            var r = /\/\[[^/]+?\](?=\/|$)/
        },
        "/lCS": function(e, t, n) {
            var r = n("gFfm"),
                a = n("jbM+"),
                o = [
                    ["ary", 128],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", 16],
                    ["flip", 512],
                    ["partial", 32],
                    ["partialRight", 64],
                    ["rearg", 256]
                ];
            e.exports = function(e, t) {
                return r(o, (function(n) {
                    var r = "_." + n[0];
                    t & n[1] && !a(e, r) && e.push(r)
                })), e.sort()
            }
        },
        "03A+": function(e, t, n) {
            var r = n("JTzB"),
                a = n("ExA7"),
                o = Object.prototype,
                i = o.hasOwnProperty,
                c = o.propertyIsEnumerable,
                s = r(function() {
                    return arguments
                }()) ? r : function(e) {
                    return a(e) && i.call(e, "callee") && !c.call(e, "callee")
                };
            e.exports = s
        },
        "0ADi": function(e, t, n) {
            var r = n("heNW"),
                a = n("EldB"),
                o = n("Kz5y");
            e.exports = function(e, t, n, i) {
                var c = 1 & t,
                    s = a(e);
                return function t() {
                    for (var a = -1, l = arguments.length, u = -1, p = i.length, f = Array(p + l), d = this && this !== o && this instanceof t ? s : e; ++u < p;) f[u] = i[u];
                    for (; l--;) f[u++] = arguments[++a];
                    return r(d, c ? n : this, f)
                }
            }
        },
        "0Bgb": function(e, t, n) {
            var r = n("eUgh"),
                a = n("Q1l4"),
                o = n("Z0cm"),
                i = n("/9aa"),
                c = n("GNiM"),
                s = n("9Nap"),
                l = n("dt0z");
            e.exports = function(e) {
                return o(e) ? r(e, s) : i(e) ? [e] : a(c(l(e)))
            }
        },
        "0Bsm": function(e, t, n) {
            "use strict";
            var r = n("AroE");
            t.__esModule = !0, t.default = function(e) {
                function t(t) {
                    return a.default.createElement(e, Object.assign({
                        router: (0, o.useRouter)()
                    }, t))
                }
                t.getInitialProps = e.getInitialProps, t.origGetInitialProps = e.origGetInitialProps, !1;
                return t
            };
            var a = r(n("q1tI")),
                o = n("nOHt")
        },
        "0Cz8": function(e, t, n) {
            var r = n("Xi7e"),
                a = n("ebwN"),
                o = n("e4Nc");
            e.exports = function(e, t) {
                var n = this.__data__;
                if (n instanceof r) {
                    var i = n.__data__;
                    if (!a || i.length < 199) return i.push([e, t]), this.size = ++n.size, this;
                    n = this.__data__ = new o(i)
                }
                return n.set(e, t), this.size = n.size, this
            }
        },
        "0G5g": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.cancelIdleCallback = t.requestIdleCallback = void 0;
            var r = "undefined" !== typeof self && self.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout((function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }), 1)
            };
            t.requestIdleCallback = r;
            var a = "undefined" !== typeof self && self.cancelIdleCallback || function(e) {
                return clearTimeout(e)
            };
            t.cancelIdleCallback = a
        },
        "0W9H": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("q1tI"),
                a = n("AilD"),
                o = Object(a.a)();

            function i() {
                var e = Object(r.useState)(null),
                    t = e[0],
                    n = e[1],
                    a = Object(r.useState)(!1),
                    i = a[0],
                    c = a[1];

                function s() {
                    o.unobserve(t)
                }
                return Object(r.useDebugValue)(i), Object(r.useEffect)((function() {
                    if (t) return o.observe(t, (function(e) {
                        e.isIntersecting && (c(!0), s())
                    }))
                }), [t]), [n, i, s]
            }
        },
        "0ycA": function(e, t) {
            e.exports = function() {
                return []
            }
        },
        "1+5i": function(e, t, n) {
            var r = n("w/wX"),
                a = n("sEf8"),
                o = n("mdPL"),
                i = o && o.isSet,
                c = i ? a(i) : r;
            e.exports = c
        },
        "1hJj": function(e, t, n) {
            var r = n("e4Nc"),
                a = n("ftKO"),
                o = n("3A9y");

            function i(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.__data__ = new r; ++t < n;) this.add(e[t])
            }
            i.prototype.add = i.prototype.push = a, i.prototype.has = o, e.exports = i
        },
        "20a2": function(e, t, n) {
            e.exports = n("nOHt")
        },
        "29q8": function(e, t, n) {
            e.exports = function() {
                var e = {};

                function t() {
                    return (t = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function n(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function r(e, t) {
                    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
                }
                e = function() {
                    function e() {
                        var e = "undefined" !== typeof window && window.React;
                        if (this.name = "react", this.lazy = 0 === arguments.length && !e, !this.lazy && (this.React = (arguments.length <= 0 ? void 0 : arguments[0]) || e, !this.React)) throw new Error("@bugsnag/plugin-react reference to `React` was undefined")
                    }
                    return e.prototype.load = function(e) {
                        if (!this.lazy) {
                            var t = o(this.React, e);
                            return t.createErrorBoundary = function() {
                                return t
                            }, t
                        }
                        var n = function() {
                            throw new Error("@bugsnag/plugin-react was used incorrectly. Valid usage is as follows:\nPass React to the plugin constructor\n\n  `Bugsnag.start({ plugins: [new BugsnagPluginReact(React)] })`\nand then call `const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary()`\n\nOr if React is not available until after Bugsnag has started,\nconstruct the plugin with no arguments\n  `Bugsnag.start({ plugins: [new BugsnagPluginReact()] })`,\nthen pass in React when available to construct your error boundary\n  `const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)`")
                        };
                        return n.createErrorBoundary = function(t) {
                            if (!t) throw new Error("@bugsnag/plugin-react reference to `React` was undefined");
                            return o(t, e)
                        }, n
                    }, e
                }();
                var a = function(e) {
                        for (var t = e.split(/\s*\n\s*/g), n = "", r = 0, a = t.length; r < a; r++) t[r].length && (n += (n.length ? "\n" : "") + t[r]);
                        return n
                    },
                    o = function(e, o) {
                        return function(i) {
                            function c(e) {
                                var t;
                                return (t = i.call(this, e) || this).state = {
                                    error: null,
                                    info: null
                                }, t.handleClearError = t.handleClearError.bind(n(t)), t
                            }
                            r(c, i);
                            var s = c.prototype;
                            return s.handleClearError = function() {
                                this.setState({
                                    error: null,
                                    info: null
                                })
                            }, s.componentDidCatch = function(e, t) {
                                var n = this.props.onError,
                                    r = {
                                        severity: "error",
                                        unhandled: !0,
                                        severityReason: {
                                            type: "unhandledException"
                                        }
                                    },
                                    i = o.Event.create(e, !0, r, 1);
                                t && t.componentStack && (t.componentStack = a(t.componentStack)), i.addMetadata("react", t), o._notify(i, n), this.setState({
                                    error: e,
                                    info: t
                                })
                            }, s.render = function() {
                                if (this.state.error) {
                                    var n = this.props.FallbackComponent;
                                    return n ? e.createElement(n, t({}, this.state, {
                                        clearError: this.handleClearError
                                    })) : null
                                }
                                return this.props.children
                            }, c
                        }(e.Component)
                    };
                return e.formatComponentStack = a, e.default = e, e
            }()
        },
        "2ajD": function(e, t) {
            e.exports = function(e) {
                return e !== e
            }
        },
        "2gN3": function(e, t, n) {
            var r = n("Kz5y")["__core-js_shared__"];
            e.exports = r
        },
        "2lMS": function(e, t) {
            var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            e.exports = function(e, t) {
                var r = t.length;
                if (!r) return e;
                var a = r - 1;
                return t[a] = (r > 1 ? "& " : "") + t[a], t = t.join(r > 2 ? ", " : " "), e.replace(n, "{\n/* [wrapped with " + t + "] */\n")
            }
        },
        "2mql": function(e, t, n) {
            "use strict";
            var r = n("TOwV"),
                a = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                c = {};

            function s(e) {
                return r.isMemo(e) ? i : c[e.$$typeof] || a
            }
            c[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, c[r.Memo] = i;
            var l = Object.defineProperty,
                u = Object.getOwnPropertyNames,
                p = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor,
                d = Object.getPrototypeOf,
                m = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" !== typeof n) {
                    if (m) {
                        var a = d(n);
                        a && a !== m && e(t, a, r)
                    }
                    var i = u(n);
                    p && (i = i.concat(p(n)));
                    for (var c = s(t), h = s(n), g = 0; g < i.length; ++g) {
                        var b = i[g];
                        if (!o[b] && (!r || !r[b]) && (!h || !h[b]) && (!c || !c[b])) {
                            var v = f(n, b);
                            try {
                                l(t, b, v)
                            } catch (y) {}
                        }
                    }
                }
                return t
            }
        },
        "2qu3": function(e, t, n) {
            "use strict";
            var r = n("oI91"),
                a = n("/GRZ"),
                o = n("i2R6");

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.__esModule = !0, t.default = void 0;
            var u, p = (u = n("q1tI")) && u.__esModule ? u : {
                    default: u
                },
                f = n("8L3h"),
                d = n("jwwS");
            var m = [],
                h = [],
                g = !1;

            function b(e) {
                var t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then((function(e) {
                    return n.loading = !1, n.loaded = e, e
                })).catch((function(e) {
                    throw n.loading = !1, n.error = e, e
                })), n
            }

            function v(e) {
                var t = {
                        loading: !1,
                        loaded: {},
                        error: null
                    },
                    n = [];
                try {
                    Object.keys(e).forEach((function(r) {
                        var a = b(e[r]);
                        a.loading ? t.loading = !0 : (t.loaded[r] = a.loaded, t.error = a.error), n.push(a.promise), a.promise.then((function(e) {
                            t.loaded[r] = e
                        })).catch((function(e) {
                            t.error = e
                        }))
                    }))
                } catch (r) {
                    t.error = r
                }
                return t.promise = Promise.all(n).then((function(e) {
                    return t.loading = !1, e
                })).catch((function(e) {
                    throw t.loading = !1, e
                })), t
            }

            function y(e, t) {
                return p.default.createElement(function(e) {
                    return e && e.__esModule ? e.default : e
                }(e), t)
            }

            function _(e, t) {
                var n = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        render: y,
                        webpack: null,
                        modules: null
                    }, t),
                    r = null;

                function a() {
                    if (!r) {
                        var t = new j(e, n);
                        r = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return r.promise()
                }
                if (!g && "function" === typeof n.webpack) {
                    var o = n.webpack();
                    h.push((function(e) {
                        var t, n = s(o);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                if (-1 !== e.indexOf(r)) return a()
                            }
                        } catch (i) {
                            n.e(i)
                        } finally {
                            n.f()
                        }
                    }))
                }
                var i = function(e, t) {
                    a();
                    var o = p.default.useContext(d.LoadableContext),
                        i = (0, f.useSubscription)(r);
                    return p.default.useImperativeHandle(t, (function() {
                        return {
                            retry: r.retry
                        }
                    }), []), o && Array.isArray(n.modules) && n.modules.forEach((function(e) {
                        o(e)
                    })), p.default.useMemo((function() {
                        return i.loading || i.error ? p.default.createElement(n.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: r.retry
                        }) : i.loaded ? n.render(i.loaded, e) : null
                    }), [e, i])
                };
                return i.preload = function() {
                    return a()
                }, i.displayName = "LoadableComponent", p.default.forwardRef(i)
            }
            var j = function() {
                function e(t, n) {
                    a(this, e), this._loadFn = t, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return o(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            n = this._opts;
                        t.loading && ("number" === typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            e._update({
                                pastDelay: !0
                            })
                        }), n.delay)), "number" === typeof n.timeout && (this._timeout = setTimeout((function() {
                            e._update({
                                timedOut: !0
                            })
                        }), n.timeout))), this._res.promise.then((function() {
                            e._update({}), e._clearTimeouts()
                        })).catch((function(t) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = c(c({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function(e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function w(e) {
                return _(b, e)
            }

            function O(e, t) {
                for (var n = []; e.length;) {
                    var r = e.pop();
                    n.push(r(t))
                }
                return Promise.all(n).then((function() {
                    if (e.length) return O(e, t)
                }))
            }
            w.Map = function(e) {
                if ("function" !== typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
                return _(v, e)
            }, w.preloadAll = function() {
                return new Promise((function(e, t) {
                    O(m).then(e, t)
                }))
            }, w.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(t) {
                    var n = function() {
                        return g = !0, t()
                    };
                    O(h, e).then(n, n)
                }))
            }, window.__NEXT_PRELOADREADY = w.preloadReady;
            var x = w;
            t.default = x
        },
        "3/Ot": function(e, t, n) {
            var r = n("PqPU"),
                a = n("rlHP"),
                o = n("KckH"),
                i = n("pSHO");
            e.exports = function(e) {
                return r(e) || a(e) || o(e) || i()
            }
        },
        "3A9y": function(e, t) {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        },
        "3EZw": function(e, t, n) {
            var r = n("6T1N");

            function a(e, t, n) {
                var o = r(e, 8, void 0, void 0, void 0, void 0, void 0, t = n ? void 0 : t);
                return o.placeholder = a.placeholder, o
            }
            a.placeholder = {}, e.exports = a
        },
        "3Fdi": function(e, t) {
            var n = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return n.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        "3L66": function(e, t, n) {
            var r = n("MMmD"),
                a = n("ExA7");
            e.exports = function(e) {
                return a(e) && r(e)
            }
        },
        "3Tpg": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            })), n.d(t, "a", (function() {
                return d
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("rOX3"),
                i = n("V2NO"),
                c = n("jQyn"),
                s = n("j4CS"),
                l = n.n(s),
                u = n("AeFk"),
                p = (a.a.createElement, function(e) {
                    var t = e.children,
                        n = e.experimentName,
                        a = Object(r.useMemo)((function() {
                            return {
                                variants: m(t),
                                control: h(t)
                            }
                        }), [t]),
                        i = a.variants,
                        s = a.control,
                        l = Object(o.a)(n).experiment;
                    if (l && l.variant) {
                        var u = i[l.variant];
                        return u || (c.default.error("Experiment `".concat(n, "` variant `").concat(l.variant, "` is active but no corresponding `Variant` component exists.")), s)
                    }
                    return s
                });
            p.propTypes = {
                experimentName: function(e, t, n) {
                    var r = e[t];
                    if ("string" !== typeof r) return new Error("`".concat(n, "`'s `experimentName` prop must exist and be a string."));
                    if (!Object.keys(i.a).includes(r)) return new Error("`".concat(n, "`'s `experimentName` prop must match an experiment defined in `experiment-data`."))
                },
                children: function(e, t, n) {
                    var r, o = !1,
                        i = 0,
                        c = [],
                        s = e[t];
                    if (a.a.Children.forEach(s, (function(e) {
                            var t = l()(e);
                            if ("Control" !== t) return "Variant" === t ? (i++, void c.push(e)) : void(r = new Error("`".concat(t, "` only accepts children of type `Control` or `Variant`.")));
                            o = !0
                        })), !o || !i) return new Error("`".concat(n, "` must have children of both types: `Control` and `Variant`."));
                    if (i > 1) {
                        var u = [];
                        c.forEach((function(e) {
                            e.props.name ? (u.includes(e.props.name) && (r = new Error("`".concat(n, "` contains multiple `Variant`s with the same name: ").concat(e.props.name))), u.push(e.props.name)) : r = new Error("`".concat(n, "` with multiple `Variant` conditions, but not all `Variant`s contain `name` props."))
                        }))
                    }
                    return r
                }
            }, t.c = p;
            var f = function(e) {
                var t = e.children;
                return Object(u.c)(a.a.Fragment, null, t)
            };
            f.displayName = "Variant";
            var d = function(e) {
                var t = e.children;
                return Object(u.c)(a.a.Fragment, null, t)
            };

            function m(e) {
                var t = {};
                return a.a.Children.forEach(e, (function(e) {
                    "Variant" === l()(e) && (t[e.props.name || 1] = e)
                })), t
            }

            function h(e) {
                var t = null;
                return a.a.Children.forEach(e, (function(e) {
                    "Control" === l()(e) && (t = e)
                })), t
            }
            d.displayName = "Control"
        },
        "3WeD": function(e, t, n) {
            "use strict";
            var r = n("zoAU");

            function a(e) {
                return "string" === typeof e || "number" === typeof e && !isNaN(e) || "boolean" === typeof e ? String(e) : ""
            }
            t.__esModule = !0, t.searchParamsToUrlQuery = function(e) {
                var t = {};
                return e.forEach((function(e, n) {
                    "undefined" === typeof t[n] ? t[n] = e : Array.isArray(t[n]) ? t[n].push(e) : t[n] = [t[n], e]
                })), t
            }, t.urlQueryToSearchParams = function(e) {
                var t = new URLSearchParams;
                return Object.entries(e).forEach((function(e) {
                    var n = r(e, 2),
                        o = n[0],
                        i = n[1];
                    Array.isArray(i) ? i.forEach((function(e) {
                        return t.append(o, a(e))
                    })) : t.set(o, a(i))
                })), t
            }, t.assign = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.forEach((function(t) {
                    Array.from(t.keys()).forEach((function(t) {
                        return e.delete(t)
                    })), t.forEach((function(t, n) {
                        return e.append(n, t)
                    }))
                })), e
            }
        },
        "3wub": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.normalizeLocalePath = function(e, t) {
                var n, r = e.split("/");
                return (t || []).some((function(t) {
                    return r[1].toLowerCase() === t.toLowerCase() && (n = t, r.splice(1, 1), e = r.join("/") || "/", !0)
                })), {
                    pathname: e,
                    detectedLocale: n
                }
            }
        },
        "4/ic": function(e, t, n) {
            var r = n("ZWtO");
            e.exports = function(e) {
                return function(t) {
                    return r(t, e)
                }
            }
        },
        "44Ds": function(e, t, n) {
            var r = n("e4Nc");

            function a(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        a = t ? t.apply(this, r) : r[0],
                        o = n.cache;
                    if (o.has(a)) return o.get(a);
                    var i = e.apply(this, r);
                    return n.cache = o.set(a, i) || o, i
                };
                return n.cache = new(a.Cache || r), n
            }
            a.Cache = r, e.exports = a
        },
        "48fX": function(e, t, n) {
            var r = n("qhzo");
            e.exports = function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && r(e, t)
            }
        },
        "4O/9": function(e, t, n) {
            var r = n("Sxd8");
            e.exports = function(e, t) {
                var n;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return e = r(e),
                    function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
                    }
            }
        },
        "4buk": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("VTyt"),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("//LF"),
                l = n("AeFk");
            a.a.createElement;

            function u(e) {
                var t = Object(s.slugify)(e.icon_notrans),
                    n = "app" === e.icon_color_notrans ? Object(l.c)(p, {
                        name: t
                    }) : Object(l.c)(f, {
                        name: e.icon_color_notrans,
                        svgName: t,
                        size: e.size
                    });
                return e.link && (n = Object(l.c)(o.default, {
                    href: e.link,
                    className: "svg-link"
                }, n)), n
            }

            function p(e) {
                var t = e.name;
                return Object(l.c)("i", {
                    className: "icon icon--".concat(t, " icon--app")
                })
            }

            function f(e) {
                var t = e.name,
                    n = e.svgName,
                    r = e.size,
                    a = void 0 === r ? 32 : r;
                return Object(l.c)("svg", {
                    className: c()("icon-svg", "icon-svg--".concat(n), t && "icon--".concat(t)),
                    width: a,
                    height: a,
                    viewBox: "0 0 32 32",
                    preserveAspectRatio: "xMinYMin"
                }, Object(l.c)("use", {
                    xlinkHref: "/assets/svg/icons.svg#icon--".concat(n)
                }))
            }
        },
        "4kuk": function(e, t, n) {
            var r = n("SfRM"),
                a = n("Hvzi"),
                o = n("u8Dt"),
                i = n("ekgI"),
                c = n("JSQU");

            function s(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            s.prototype.clear = r, s.prototype.delete = a, s.prototype.get = o, s.prototype.has = i, s.prototype.set = c, e.exports = s
        },
        "4sDh": function(e, t, n) {
            var r = n("4uTw"),
                a = n("03A+"),
                o = n("Z0cm"),
                i = n("wJg7"),
                c = n("shjB"),
                s = n("9Nap");
            e.exports = function(e, t, n) {
                for (var l = -1, u = (t = r(t, e)).length, p = !1; ++l < u;) {
                    var f = s(t[l]);
                    if (!(p = null != e && n(e, f))) break;
                    e = e[f]
                }
                return p || ++l != u ? p : !!(u = null == e ? 0 : e.length) && c(u) && i(f, u) && (o(e) || a(e))
            }
        },
        "4uTw": function(e, t, n) {
            var r = n("Z0cm"),
                a = n("9ggG"),
                o = n("GNiM"),
                i = n("dt0z");
            e.exports = function(e, t) {
                return r(e) ? e : a(e, t) ? [e] : o(i(e))
            }
        },
        "5Tg0": function(e, t, n) {
            (function(e) {
                var r = n("Kz5y"),
                    a = t && !t.nodeType && t,
                    o = a && "object" == typeof e && e && !e.nodeType && e,
                    i = o && o.exports === a ? r.Buffer : void 0,
                    c = i ? i.allocUnsafe : void 0;
                e.exports = function(e, t) {
                    if (t) return e.slice();
                    var n = e.length,
                        r = c ? c(n) : new e.constructor(n);
                    return e.copy(r), r
                }
            }).call(this, n("LY0y")(e))
        },
        "5fIB": function(e, t, n) {
            var r = n("7eYB");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        "5rBc": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                a = n.n(r),
                o = n("TSYQ"),
                i = n.n(o),
                c = n("9rhg"),
                s = n("VTyt"),
                l = n("r3F2"),
                u = n("AeFk");
            a.a.createElement;

            function p(e) {
                return Object(u.c)("div", {
                    className: "row"
                }, Object(u.c)("div", {
                    className: "col-large-10 col-large-push-1"
                }, Object(u.c)("img", {
                    src: e.signup_image_x,
                    alt: "The Asana product viewed from a smartphone and laptop"
                })))
            }
            t.default = function(e) {
                return Object(u.c)("section", {
                    className: i()("signupCTA", e.signup_background_notrans)
                }, Object(u.c)("div", {
                    className: "container -wide"
                }, e.signup_image_x && Object(u.c)(p, e), Object(u.c)("div", {
                    className: "signupCTA-text row"
                }, Object(u.c)("div", {
                    className: "col-medium-10 col-xlarge-8 col-medium-push-1 col-xlarge-push-2"
                }, e.signup_headline && Object(u.c)("h3", null, Object(u.c)(l.a, {
                    html: e.signup_headline
                })), e.signup_copy && Object(u.c)("p", {
                    className: "-large"
                }, Object(u.c)(l.a, {
                    html: e.signup_copy
                })), e.cta ? Object(u.c)(s.default, e.cta, e.text || e.children) : Object(u.c)(c.default, e)))))
            }
        },
        "5sOR": function(e, t, n) {
            var r = n("N4mw"),
                a = n("99Ms"),
                o = n("T8tx");
            e.exports = function(e, t, n, i, c, s, l, u, p, f) {
                var d = 8 & t;
                t |= d ? 32 : 64, 4 & (t &= ~(d ? 64 : 32)) || (t &= -4);
                var m = [e, t, c, d ? s : void 0, d ? l : void 0, d ? void 0 : s, d ? void 0 : l, u, p, f],
                    h = n.apply(void 0, m);
                return r(e) && a(h, m), h.placeholder = i, o(h, e, t)
            }
        },
        "6D7l": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.formatUrl = function(e) {
                var t = e.auth,
                    n = e.hostname,
                    a = e.protocol || "",
                    i = e.pathname || "",
                    c = e.hash || "",
                    s = e.query || "",
                    l = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? l = t + e.host : n && (l = t + (~n.indexOf(":") ? "[".concat(n, "]") : n), e.port && (l += ":" + e.port));
                s && "object" === typeof s && (s = String(r.urlQueryToSearchParams(s)));
                var u = e.search || s && "?".concat(s) || "";
                a && ":" !== a.substr(-1) && (a += ":");
                e.slashes || (!a || o.test(a)) && !1 !== l ? (l = "//" + (l || ""), i && "/" !== i[0] && (i = "/" + i)) : l || (l = "");
                c && "#" !== c[0] && (c = "#" + c);
                u && "?" !== u[0] && (u = "?" + u);
                return i = i.replace(/[?#]/g, encodeURIComponent), u = u.replace("#", "%23"), "".concat(a).concat(l).concat(i).concat(u).concat(c)
            };
            var r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                    default: e
                };
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                    }
                n.default = e, t && t.set(e, n);
                return n
            }(n("3WeD"));

            function a() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function() {
                    return e
                }, e
            }
            var o = /https?|ftp|gopher|file/
        },
        "6FTQ": function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        "6GH4": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                a = n.n(r),
                o = n("r3F2"),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("4buk"),
                l = n("AeFk");
            a.a.createElement;
            t.default = function(e) {
                var t = e.label_class,
                    n = e.label_icon,
                    r = e.label_icon_color,
                    a = e.label,
                    i = e.text;
                return Object(l.c)("p", {
                    className: c()("-label", t)
                }, n && Object(l.c)(s.a, {
                    src: "icon",
                    icon_notrans: n,
                    icon_color_notrans: r,
                    size: 14
                }), a && Object(l.c)(o.a, {
                    html: a
                }), i && Object(l.c)(o.a, {
                    html: i
                }))
            }
        },
        "6KkN": function(e, t) {
            var n = "__lodash_placeholder__";
            e.exports = function(e, t) {
                for (var r = -1, a = e.length, o = 0, i = []; ++r < a;) {
                    var c = e[r];
                    c !== t && c !== n || (e[r] = n, i[o++] = r)
                }
                return i
            }
        },
        "6T1N": function(e, t, n) {
            var r = n("s0N+"),
                a = n("ieoY"),
                o = n("Rw8+"),
                i = n("a1zH"),
                c = n("0ADi"),
                s = n("KF6i"),
                l = n("q3TU"),
                u = n("99Ms"),
                p = n("T8tx"),
                f = n("Sxd8"),
                d = Math.max;
            e.exports = function(e, t, n, m, h, g, b, v) {
                var y = 2 & t;
                if (!y && "function" != typeof e) throw new TypeError("Expected a function");
                var _ = m ? m.length : 0;
                if (_ || (t &= -97, m = h = void 0), b = void 0 === b ? b : d(f(b), 0), v = void 0 === v ? v : f(v), _ -= h ? h.length : 0, 64 & t) {
                    var j = m,
                        w = h;
                    m = h = void 0
                }
                var O = y ? void 0 : s(e),
                    x = [e, t, n, m, h, j, w, g, b, v];
                if (O && l(x, O), e = x[0], t = x[1], n = x[2], m = x[3], h = x[4], !(v = x[9] = void 0 === x[9] ? y ? 0 : e.length : d(x[9] - _, 0)) && 24 & t && (t &= -25), t && 1 != t) k = 8 == t || 16 == t ? o(e, t, v) : 32 != t && 33 != t || h.length ? i.apply(void 0, x) : c(e, t, n, m);
                else var k = a(e, t, n);
                return p((O ? r : u)(k, x), e, t)
            }
        },
        "6ae/": function(e, t, n) {
            var r = n("dTAl"),
                a = n("RrRF");

            function o(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            o.prototype = r(a.prototype), o.prototype.constructor = o, e.exports = o
        },
        "6mnf": function(e, t, n) {
            "use strict";
            var r = n("oI91"),
                a = n("zoAU");

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.__esModule = !0, t.matchHas = function(e, t, n) {
                var r = {};
                if (t.every((function(t) {
                        var a, o = t.key;
                        switch (t.type) {
                            case "header":
                                o = o.toLowerCase(), a = e.headers[o];
                                break;
                            case "cookie":
                                a = e.cookies[t.key];
                                break;
                            case "query":
                                a = n[o];
                                break;
                            case "host":
                                var i = ((null == e ? void 0 : e.headers) || {}).host;
                                a = null == i ? void 0 : i.split(":")[0].toLowerCase()
                        }
                        if (!t.value && a) return r[d(o)] = a, !0;
                        if (a) {
                            var c = new RegExp("^".concat(t.value, "$")),
                                s = a.match(c);
                            if (s) return s.groups ? Object.keys(s.groups).forEach((function(e) {
                                var t = d(e);
                                t && s.groups[e] && (r[t] = s.groups[e])
                            })) : r[d(o || "host")] = s[0], !0
                        }
                        return !1
                    }))) return r;
                return !1
            }, t.compileNonPath = m, t.default = function(e, t, n, r) {
                var o = {},
                    s = (n = Object.assign({}, n)).__nextLocale;
                if (delete n.__nextLocale, delete n.__nextDefaultLocale, e.startsWith("/")) o = (0, u.parseRelativeUrl)(e);
                else {
                    var f = new URL(e),
                        d = f.pathname,
                        h = f.searchParams,
                        g = f.hash,
                        b = f.hostname,
                        v = f.port,
                        y = f.protocol,
                        _ = f.search,
                        j = f.href;
                    o = {
                        pathname: d,
                        query: (0, l.searchParamsToUrlQuery)(h),
                        hash: g,
                        protocol: y,
                        hostname: b,
                        port: v,
                        search: _,
                        href: j
                    }
                }
                var w = o.query,
                    O = "".concat(o.pathname).concat(o.hash || ""),
                    x = [];
                p.pathToRegexp(O, x);
                for (var k, E = x.map((function(e) {
                        return e.name
                    })), C = p.compile(O, {
                        validate: !1
                    }), S = 0, A = Object.entries(w); S < A.length; S++) {
                    var P = a(A[S], 2),
                        T = P[0],
                        N = P[1],
                        L = Array.isArray(N) ? N[0] : N;
                    L && (L = m(L, t)), w[T] = L
                }
                var R = Object.keys(t);
                s && (R = R.filter((function(e) {
                    return "nextInternalLocale" !== e
                })));
                if (r && !R.some((function(e) {
                        return E.includes(e)
                    }))) {
                    var F, I = c(R);
                    try {
                        for (I.s(); !(F = I.n()).done;) {
                            var M = F.value;
                            M in w || (w[M] = t[M])
                        }
                    } catch (U) {
                        I.e(U)
                    } finally {
                        I.f()
                    }
                }
                try {
                    var G = (k = C(t)).split("#"),
                        D = a(G, 2),
                        z = D[0],
                        B = D[1];
                    o.pathname = z, o.hash = "".concat(B ? "#" : "").concat(B || ""), delete o.search
                } catch (U) {
                    if (U.message.match(/Expected .*? to not repeat, but got an array/)) throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
                    throw U
                }
                return o.query = i(i({}, n), o.query), {
                    newUrl: k,
                    parsedDestination: o
                }
            };
            var l = n("3WeD"),
                u = n("hS4m"),
                p = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("zOyy"));

            function f() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }
            var d = function(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    (r > 64 && r < 91 || r > 96 && r < 123) && (t += e[n])
                }
                return t
            };

            function m(e, t) {
                if (!e.includes(":")) return e;
                for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                    var a = r[n];
                    e.includes(":".concat(a)) && (e = e.replace(new RegExp(":".concat(a, "\\*"), "g"), ":".concat(a, "--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(a, "\\?"), "g"), ":".concat(a, "--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(a, "\\+"), "g"), ":".concat(a, "--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(a, "(?!\\w)"), "g"), "--ESCAPED_PARAM_COLON".concat(a)))
                }
                return e = e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*"), p.compile("/".concat(e), {
                    validate: !1
                })(t).substr(1)
            }
        },
        "6sVZ": function(e, t) {
            var n = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || n)
            }
        },
        "711d": function(e, t) {
            e.exports = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }
        },
        "76ZC": function(e, t, n) {
            var r = n("GkXj"),
                a = n("qpZ2"),
                o = n("QIE6"),
                i = {
                    decodeEntities: !0,
                    lowerCaseAttributeNames: !1
                };

            function c(e, t) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                return "" === e ? [] : r(o(e, (t = t || {}).htmlparser2 || i), t)
            }
            c.domToReact = r, c.htmlToDOM = o, c.attributesToProps = a, e.exports = c, e.exports.default = c
        },
        "77Zs": function(e, t, n) {
            var r = n("Xi7e");
            e.exports = function() {
                this.__data__ = new r, this.size = 0
            }
        },
        "7GkX": function(e, t, n) {
            var r = n("b80T"),
                a = n("A90E"),
                o = n("MMmD");
            e.exports = function(e) {
                return o(e) ? r(e) : a(e)
            }
        },
        "7Ix3": function(e, t) {
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var n in Object(e)) t.push(n);
                return t
            }
        },
        "7KCV": function(e, t, n) {
            var r = n("C+bE");

            function a() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function() {
                    return e
                }, e
            }
            e.exports = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var c = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        c && (c.get || c.set) ? Object.defineProperty(n, i, c) : n[i] = e[i]
                    }
                return n.default = e, t && t.set(e, n), n
            }
        },
        "7MhH": function(e, t, n) {
            var r = n("wJvl"),
                a = "html",
                o = "head",
                i = "body",
                c = /<([a-zA-Z]+[0-9]?)/,
                s = /<head.*>/i,
                l = /<body.*>/i,
                u = /<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,
                p = r.isIE(9),
                f = p || r.isIE(),
                d = function() {
                    throw new Error("This browser does not support `document.implementation.createHTMLDocument`")
                },
                m = function() {
                    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")
                };
            if ("function" === typeof window.DOMParser) {
                var h = new window.DOMParser,
                    g = p ? "text/xml" : "text/html";
                d = m = function(e, t) {
                    return t && (e = "<" + t + ">" + e + "</" + t + ">"), p && (e = e.replace(u, "<$1$2$3/>")), h.parseFromString(e, g)
                }
            }
            if (document.implementation) {
                var b = document.implementation.createHTMLDocument(f ? "html-dom-parser" : void 0);
                d = function(e, t) {
                    if (t) return b.documentElement.getElementsByTagName(t)[0].innerHTML = e, b;
                    try {
                        return b.documentElement.innerHTML = e, b
                    } catch (n) {
                        if (m) return m(e)
                    }
                }
            }
            var v, y = document.createElement("template");
            y.content && (v = function(e) {
                return y.innerHTML = e, y.content.childNodes
            }), e.exports = function(e) {
                var t, n, r, u, p = e.match(c);
                switch (p && p[1] && (t = p[1].toLowerCase()), t) {
                    case a:
                        return n = m(e), s.test(e) || (r = n.getElementsByTagName(o)[0]) && r.parentNode.removeChild(r), l.test(e) || (r = n.getElementsByTagName(i)[0]) && r.parentNode.removeChild(r), n.getElementsByTagName(a);
                    case o:
                    case i:
                        return u = d(e).getElementsByTagName(t), l.test(e) && s.test(e) ? u[0].parentNode.childNodes : u;
                    default:
                        return v ? v(e) : d(e, i).getElementsByTagName(i)[0].childNodes
                }
            }
        },
        "7eYB": function(e, t) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
        },
        "7fqy": function(e, t) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e, r) {
                    n[++t] = [r, e]
                })), n
            }
        },
        "7s/w": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return o
            }));
            var r = n("q1tI");

            function a(e) {
                var t = Object(r.useState)(null),
                    n = t[0],
                    a = t[1],
                    i = Object(r.useState)(o.UNREAD),
                    c = i[0],
                    s = i[1];
                return Object(r.useDebugValue)(n), Object(r.useEffect)((function() {
                    if (AsanaStorage) {
                        var t = AsanaStorage.getCookie(e);
                        a("null" === t ? null : t), s(o.READY)
                    }
                }), []), {
                    cookieValue: n,
                    cookieState: c,
                    setCookieValue: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (AsanaStorage) {
                            var r = n.expiresInDays,
                                o = void 0 === r ? 30 : r,
                                i = n.groupId,
                                c = n.crossDomain,
                                s = void 0 === c || c,
                                l = n.path,
                                u = void 0 === l ? "/" : l;
                            AsanaStorage.setCookie(e, t, i, o, s, u), a(t)
                        }
                    }
                }
            }
            var o = {
                UNREAD: 1,
                PENDING: 2,
                READY: 3
            }
        },
        "88Gu": function(e, t) {
            var n = Date.now;
            e.exports = function(e) {
                var t = 0,
                    r = 0;
                return function() {
                    var a = n(),
                        o = 16 - (a - r);
                    if (r = a, o > 0) {
                        if (++t >= 800) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            n("oI91");
            t.__esModule = !0, t.defaultHead = u, t.default = void 0;
            var r, a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                i = n("lwAK"),
                c = n("FYa8"),
                s = n("/0+H");

            function l() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function() {
                    return e
                }, e
            }

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [a.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(a.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function p(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var f = ["name", "httpEquiv", "charSet", "itemProp"];

            function d(e, t) {
                return e.reduce((function(e, t) {
                    var n = a.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(p, []).reverse().concat(u(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(a) {
                        var o = !0,
                            i = !1;
                        if (a.key && "number" !== typeof a.key && a.key.indexOf("$") > 0) {
                            i = !0;
                            var c = a.key.slice(a.key.indexOf("$") + 1);
                            e.has(c) ? o = !1 : e.add(c)
                        }
                        switch (a.type) {
                            case "title":
                            case "base":
                                t.has(a.type) ? o = !1 : t.add(a.type);
                                break;
                            case "meta":
                                for (var s = 0, l = f.length; s < l; s++) {
                                    var u = f[s];
                                    if (a.props.hasOwnProperty(u))
                                        if ("charSet" === u) n.has(u) ? o = !1 : n.add(u);
                                        else {
                                            var p = a.props[u],
                                                d = r[u] || new Set;
                                            "name" === u && i || !d.has(p) ? (d.add(p), r[u] = d) : o = !1
                                        }
                                }
                        }
                        return o
                    }
                }()).reverse().map((function(e, t) {
                    var n = e.key || t;
                    return a.default.cloneElement(e, {
                        key: n
                    })
                }))
            }

            function m(e) {
                var t = e.children,
                    n = (0, a.useContext)(i.AmpStateContext),
                    r = (0, a.useContext)(c.HeadManagerContext);
                return a.default.createElement(o.default, {
                    reduceComponentsToState: d,
                    headManager: r,
                    inAmpMode: (0, s.isInAmpMode)(n)
                }, t)
            }
            m.rewind = function() {};
            var h = m;
            t.default = h
        },
        "8oxB": function(e, t) {
            var n, r, a = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function c(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" === typeof setTimeout ? setTimeout : o
                } catch (e) {
                    n = o
                }
                try {
                    r = "function" === typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    r = i
                }
            }();
            var s, l = [],
                u = !1,
                p = -1;

            function f() {
                u && s && (u = !1, s.length ? l = s.concat(l) : p = -1, l.length && d())
            }

            function d() {
                if (!u) {
                    var e = c(f);
                    u = !0;
                    for (var t = l.length; t;) {
                        for (s = l, l = []; ++p < t;) s && s[p].run();
                        p = -1, t = l.length
                    }
                    s = null, u = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function m(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            a.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new m(e, t)), 1 !== l.length || u || c(d)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function(e) {
                return []
            }, a.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, a.cwd = function() {
                return "/"
            }, a.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, a.umask = function() {
                return 0
            }
        },
        "8rE2": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("6FTQ");

            function a(e, t) {
                if (e) {
                    if ("string" === typeof e) return Object(r.a)(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(r.a)(e, t) : void 0
                }
            }
        },
        "99Ms": function(e, t, n) {
            var r = n("s0N+"),
                a = n("88Gu")(r);
            e.exports = a
        },
        "9Nap": function(e, t, n) {
            var r = n("/9aa");
            e.exports = function(e) {
                if ("string" == typeof e || r(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -Infinity ? "-0" : t
            }
        },
        "9ggG": function(e, t, n) {
            var r = n("Z0cm"),
                a = n("/9aa"),
                o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                i = /^\w*$/;
            e.exports = function(e, t) {
                if (r(e)) return !1;
                var n = typeof e;
                return !("number" != n && "symbol" != n && "boolean" != n && null != e && !a(e)) || (i.test(e) || !o.test(e) || null != t && e in Object(t))
            }
        },
        "9rhg": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("usKF"),
                c = n("xvhg"),
                s = n("TSYQ"),
                l = n.n(s),
                u = n("arJ1"),
                p = n("l8qu"),
                f = n("TKEn"),
                d = n("AeFk"),
                m = (o.a.createElement, function(e) {
                    var t, n = e.children,
                        r = e.classNames,
                        a = e.contactSales,
                        o = e.contactSalesHref,
                        i = e.freeSignupHref,
                        s = e.is_contact_sales_notrans,
                        m = e.onClick,
                        h = e.signupEmail,
                        g = e.signupTrial,
                        b = e.size,
                        v = e.standardClassNames,
                        y = e.trialHref,
                        _ = e.variant,
                        j = e.language,
                        w = e.onMouseEnter,
                        O = e.setCtaStyleVar,
                        x = e.ctaStyleVar,
                        k = Object(p.a)(),
                        E = Object(c.a)(k, 1)[0],
                        C = Object(f.a)().isMobilePlatform,
                        S = b ? "-".concat(b) : null;
                    E && (t = "https://app.asana.com/-/upgrade?trial=true"), !E && C && (t = s ? o : i), E || C || (t = y);
                    var A = null;
                    return E && (A = h), !E && C && (A = s ? a : g), E || C || (A = g), Object(d.c)(u.a, {
                        href: t,
                        className: l()(r, S, v, "-mobile-full", {
                            button: "button" === _,
                            "gtm--trial_button": !E,
                            "cta-create-account-desktop": !E && !C
                        }),
                        onClick: m,
                        onMouseEnter: w,
                        language: j,
                        isCtaCreateAcct: !0,
                        ctaStyleVar: x,
                        setCtaStyleVar: O
                    }, A, n)
                });
            m.defaultProps = {
                classNames: "",
                size: "large",
                standardClassNames: "js-cta-create-account",
                variant: "button"
            };
            var h = m,
                g = n("3Tpg"),
                b = n("rOX3"),
                v = n("bW4L"),
                y = (o.a.createElement, ["orange", "blue", "magenta", "yellow", "green", "purple"]),
                _ = Object(d.c)("div", {
                    className: "exp-create-cta-icon__container"
                }, Object(d.c)("img", {
                    src: "https://luna1.co/dd24d3.png",
                    className: "exp-create-cta-icon__img",
                    alt: "check icon"
                }), Object(d.c)("div", {
                    className: "exp-create-cta-icon__border border"
                }, Object(d.c)("svg", {
                    viewBox: "0 0 32 32"
                }, Object(d.c)("circle", {
                    className: "border__circle",
                    r: "14",
                    cx: "16",
                    cy: "16",
                    fill: "transparent",
                    stroke: "#fff",
                    strokeWidth: "3"
                })))),
                j = function(e) {
                    var t, n = e.children,
                        r = e.classNames,
                        o = e.contactSales,
                        i = e.contactSalesHref,
                        s = e.freeSignupHref,
                        m = e.is_contact_sales_notrans,
                        h = e.onClick,
                        g = e.signupEmail,
                        b = e.signupTrial,
                        j = e.size,
                        w = e.standardClassNames,
                        O = e.trialHref,
                        x = e.variant,
                        k = e.language,
                        E = e.ctaStyleVar,
                        C = Object(p.a)(),
                        S = Object(c.a)(C, 1)[0],
                        A = Object(f.a)().isMobilePlatform,
                        P = j ? "-".concat(j) : null;
                    S && (t = "https://app.asana.com/-/upgrade?trial=true"), !S && A && (t = m ? i : s), S || A || (t = O);
                    var T = null;
                    S && (T = g), !S && A && (T = m ? o : b), S || A || (T = b);
                    var N = function(e) {
                            return e[Math.floor(Math.random() * e.length)]
                        },
                        L = Object(a.useState)(N(y)),
                        R = L[0],
                        F = L[1],
                        I = Object(a.useRef)();
                    Object(a.useEffect)((function() {
                        I.current = R
                    }));
                    var M = I.current,
                        G = {
                            button: "button" === x,
                            "gtm--trial_button": !S,
                            "cta-create-account-desktop": !S && !A,
                            "-mouse-enter": !!R
                        };
                    return G["-".concat(R)] = R, G["-".concat(M, "-mouse-leave")] = !1 === R, Object(d.c)(u.a, {
                        href: t,
                        className: l()("exp-delightful", "-mobile-full", r, P, w, G),
                        onClick: function() {
                            h && h(), Object(v.b)("CTAEngagement", {
                                eventCategory: "CTA Engagement",
                                eventAction: "ClickPrimaryCTA",
                                eventLabel: "ClickPrimaryCTA-".concat(R, "@Home-Hero")
                            })
                        },
                        language: k,
                        onMouseEnter: function() {
                            for (var e = N(y); e === R;) e = N(y);
                            F(e)
                        },
                        onMouseLeave: function() {
                            return F(!1)
                        },
                        ctaStyleVar: E
                    }, _, Object(d.c)("span", null, T), n)
                };
            j.defaultProps = {
                classNames: "",
                size: "large",
                standardClassNames: "js-cta-create-account",
                variant: "button"
            };
            var w = j;
            o.a.createElement, t.default = function(e) {
                var t = e.isMastheadSection,
                    n = Object(b.a)("delightfulCta"),
                    c = (n.experiment, n.activateExperiment),
                    s = Object(a.useState)(!1),
                    l = s[0],
                    u = s[1],
                    p = Object(a.useContext)(i.a),
                    f = e.cta_create_account_notrans;
                return e.mobile_signup_specific_onclick && (f += ";".concat(e.mobile_signup_specific_onclick)), e.desktop_signup_specific_onclick && (f += ";".concat(e.desktop_signup_specific_onclick)), Object(d.c)(o.a.Fragment, null, t ? Object(d.c)(g.c, {
                    experimentName: "delightfulCta"
                }, Object(d.c)(g.a, null, Object(d.c)(h, Object(r.a)({
                    trialHref: p.global_CtaTrialHref,
                    signupTrial: p.global_CTAsignupTrial,
                    contactSalesHref: p.global_CtaContactSalesHref,
                    contactSales: p.global_CTAcontactSales,
                    freeSignupHref: p.global_CtaFreeSignupHref,
                    signupEmail: p.global_CTAsignupEmail,
                    onClick: f,
                    language: p.global_language,
                    onMouseEnter: function() {
                        c && c("delightfulCta")
                    },
                    setCtaStyleVar: u,
                    ctaStyleVar: l
                }, e))), Object(d.c)(g.b, null, Object(d.c)(w, Object(r.a)({
                    trialHref: p.global_CtaTrialHref,
                    signupTrial: p.global_CTAsignupTrial,
                    contactSalesHref: p.global_CtaContactSalesHref,
                    contactSales: p.global_CTAcontactSales,
                    freeSignupHref: p.global_CtaFreeSignupHref,
                    signupEmail: p.global_CTAsignupEmail,
                    language: p.global_language,
                    ctaStyleVar: l
                }, e)))) : Object(d.c)(h, Object(r.a)({
                    trialHref: p.global_CtaTrialHref,
                    signupTrial: p.global_CTAsignupTrial,
                    contactSalesHref: p.global_CtaContactSalesHref,
                    contactSales: p.global_CTAcontactSales,
                    freeSignupHref: p.global_CtaFreeSignupHref,
                    signupEmail: p.global_CTAsignupEmail,
                    onClick: f,
                    language: p.global_language
                }, e)))
            }
        },
        A90E: function(e, t, n) {
            var r = n("6sVZ"),
                a = n("V6Ve"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return a(e);
                var t = [];
                for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        AP2z: function(e, t, n) {
            var r = n("nmnc"),
                a = Object.prototype,
                o = a.hasOwnProperty,
                i = a.toString,
                c = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var t = o.call(e, c),
                    n = e[c];
                try {
                    e[c] = void 0;
                    var r = !0
                } catch (s) {}
                var a = i.call(e);
                return r && (t ? e[c] = n : delete e[c]), a
            }
        },
        ASyH: function(e, t, n) {
            e.exports = function() {
                var e, t = ["navigation", "request", "process", "log", "user", "state", "error", "manual"],
                    n = function(e, t, n) {
                        for (var r = n, a = 0, o = e.length; a < o; a++) r = t(r, e[a], a, e);
                        return r
                    },
                    r = function(e, t) {
                        return n(e, (function(e, n, r, a) {
                            return t(n, r, a) ? e.concat(n) : e
                        }), [])
                    },
                    a = function(e, t) {
                        return n(e, (function(e, n, r, a) {
                            return !0 === e || n === t
                        }), !1)
                    },
                    o = function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    i = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    s = function(e) {
                        var t, n = [];
                        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                        if (!i) return n;
                        for (var r = 0, a = c.length; r < a; r++) Object.prototype.hasOwnProperty.call(e, c[r]) && n.push(c[r]);
                        return n
                    },
                    l = function(e, t) {
                        return void 0 === e && (e = 1), void 0 === t && (t = 1 / 0),
                            function(n) {
                                return "number" === typeof n && parseInt("" + n, 10) === n && n >= e && n <= t
                            }
                    },
                    u = function(e) {
                        return "function" === typeof e || o(e) && r(e, (function(e) {
                            return "function" === typeof e
                        })).length === e.length
                    },
                    p = function(e) {
                        return "string" === typeof e && !!e.length
                    },
                    f = {},
                    d = function() {
                        return {
                            unhandledExceptions: !0,
                            unhandledRejections: !0
                        }
                    };
                f.schema = {
                    apiKey: {
                        defaultValue: function() {
                            return null
                        },
                        message: "is required",
                        validate: p
                    },
                    appVersion: {
                        defaultValue: function() {},
                        message: "should be a string",
                        validate: function(e) {
                            return void 0 === e || p(e)
                        }
                    },
                    appType: {
                        defaultValue: function() {},
                        message: "should be a string",
                        validate: function(e) {
                            return void 0 === e || p(e)
                        }
                    },
                    autoDetectErrors: {
                        defaultValue: function() {
                            return !0
                        },
                        message: "should be true|false",
                        validate: function(e) {
                            return !0 === e || !1 === e
                        }
                    },
                    enabledErrorTypes: {
                        defaultValue: function() {
                            return d()
                        },
                        message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
                        allowPartialObject: !0,
                        validate: function(e) {
                            if ("object" !== typeof e || !e) return !1;
                            var t = s(e),
                                n = s(d());
                            return !(r(t, (function(e) {
                                return a(n, e)
                            })).length < t.length) && !(r(s(e), (function(t) {
                                return "boolean" !== typeof e[t]
                            })).length > 0)
                        }
                    },
                    onError: {
                        defaultValue: function() {
                            return []
                        },
                        message: "should be a function or array of functions",
                        validate: u
                    },
                    onSession: {
                        defaultValue: function() {
                            return []
                        },
                        message: "should be a function or array of functions",
                        validate: u
                    },
                    onBreadcrumb: {
                        defaultValue: function() {
                            return []
                        },
                        message: "should be a function or array of functions",
                        validate: u
                    },
                    endpoints: {
                        defaultValue: function() {
                            return {
                                notify: "https://notify.bugsnag.com",
                                sessions: "https://sessions.bugsnag.com"
                            }
                        },
                        message: "should be an object containing endpoint URLs { notify, sessions }",
                        validate: function(e) {
                            return e && "object" === typeof e && p(e.notify) && p(e.sessions) && 0 === r(s(e), (function(e) {
                                return !a(["notify", "sessions"], e)
                            })).length
                        }
                    },
                    autoTrackSessions: {
                        defaultValue: function(e) {
                            return !0
                        },
                        message: "should be true|false",
                        validate: function(e) {
                            return !0 === e || !1 === e
                        }
                    },
                    enabledReleaseStages: {
                        defaultValue: function() {
                            return null
                        },
                        message: "should be an array of strings",
                        validate: function(e) {
                            return null === e || o(e) && r(e, (function(e) {
                                return "string" === typeof e
                            })).length === e.length
                        }
                    },
                    releaseStage: {
                        defaultValue: function() {
                            return "production"
                        },
                        message: "should be a string",
                        validate: function(e) {
                            return "string" === typeof e && e.length
                        }
                    },
                    maxBreadcrumbs: {
                        defaultValue: function() {
                            return 25
                        },
                        message: "should be a number \u2264100",
                        validate: function(e) {
                            return l(0, 100)(e)
                        }
                    },
                    enabledBreadcrumbTypes: {
                        defaultValue: function() {
                            return t
                        },
                        message: "should be null or a list of available breadcrumb types (" + t.join(",") + ")",
                        validate: function(e) {
                            return null === e || o(e) && n(e, (function(e, n) {
                                return !1 === e ? e : a(t, n)
                            }), !0)
                        }
                    },
                    context: {
                        defaultValue: function() {},
                        message: "should be a string",
                        validate: function(e) {
                            return void 0 === e || "string" === typeof e
                        }
                    },
                    user: {
                        defaultValue: function() {
                            return {}
                        },
                        message: "should be an object with { id, email, name } properties",
                        validate: function(e) {
                            return null === e || e && n(s(e), (function(e, t) {
                                return e && a(["id", "email", "name"], t)
                            }), !0)
                        }
                    },
                    metadata: {
                        defaultValue: function() {
                            return {}
                        },
                        message: "should be an object",
                        validate: function(e) {
                            return "object" === typeof e && null !== e
                        }
                    },
                    logger: {
                        defaultValue: function() {},
                        message: "should be null or an object with methods { debug, info, warn, error }",
                        validate: function(e) {
                            return !e || e && n(["debug", "info", "warn", "error"], (function(t, n) {
                                return t && "function" === typeof e[n]
                            }), !0)
                        }
                    },
                    redactedKeys: {
                        defaultValue: function() {
                            return ["password"]
                        },
                        message: "should be an array of strings|regexes",
                        validate: function(e) {
                            return o(e) && e.length === r(e, (function(e) {
                                return "string" === typeof e || e && "function" === typeof e.test
                            })).length
                        }
                    },
                    plugins: {
                        defaultValue: function() {
                            return []
                        },
                        message: "should be an array of plugin objects",
                        validate: function(e) {
                            return o(e) && e.length === r(e, (function(e) {
                                return e && "object" === typeof e && "function" === typeof e.load
                            })).length
                        }
                    }
                };
                var m = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    },
                    h = function(e, t) {
                        return n(e, (function(e, n, r, a) {
                            return e.concat(t(n, r, a))
                        }), [])
                    },
                    g = f.schema,
                    b = {
                        releaseStage: m({}, g.releaseStage, {
                            defaultValue: function() {
                                return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production"
                            }
                        }),
                        logger: m({}, g.logger, {
                            defaultValue: function() {
                                return "undefined" !== typeof console && "function" === typeof console.debug ? v() : void 0
                            }
                        })
                    },
                    v = function() {
                        var e = {},
                            t = console.log;
                        return h(["debug", "info", "warn", "error"], (function(n) {
                            var r = console[n];
                            e[n] = "function" === typeof r ? r.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]")
                        })), e
                    },
                    y = function() {
                        function e(e, t, n, r) {
                            void 0 === r && (r = new Date), this.type = n, this.message = e, this.metadata = t, this.timestamp = r
                        }
                        return e.prototype.toJSON = function() {
                            return {
                                type: this.type,
                                name: this.message,
                                timestamp: this.timestamp,
                                metaData: this.metadata
                            }
                        }, e
                    }(),
                    _ = {};
                ! function(t, n) {
                    "use strict";
                    "function" === typeof e && e.amd ? e("stackframe", [], n) : "object" === typeof _ ? _ = n() : t.StackFrame = n()
                }(this, (function() {
                    "use strict";

                    function e(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }

                    function t(e) {
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    }

                    function n(e) {
                        return function() {
                            return this[e]
                        }
                    }
                    var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                        a = ["columnNumber", "lineNumber"],
                        o = ["fileName", "functionName", "source"],
                        i = ["args"],
                        c = r.concat(a, o, i);

                    function s(e) {
                        if (e instanceof Object)
                            for (var n = 0; n < c.length; n++) e.hasOwnProperty(c[n]) && void 0 !== e[c[n]] && this["set" + t(c[n])](e[c[n]])
                    }
                    s.prototype = {
                        getArgs: function() {
                            return this.args
                        },
                        setArgs: function(e) {
                            if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                            this.args = e
                        },
                        getEvalOrigin: function() {
                            return this.evalOrigin
                        },
                        setEvalOrigin: function(e) {
                            if (e instanceof s) this.evalOrigin = e;
                            else {
                                if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                this.evalOrigin = new s(e)
                            }
                        },
                        toString: function() {
                            return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() : "") + (e(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                        }
                    };
                    for (var l = 0; l < r.length; l++) s.prototype["get" + t(r[l])] = n(r[l]), s.prototype["set" + t(r[l])] = function(e) {
                        return function(t) {
                            this[e] = Boolean(t)
                        }
                    }(r[l]);
                    for (var u = 0; u < a.length; u++) s.prototype["get" + t(a[u])] = n(a[u]), s.prototype["set" + t(a[u])] = function(t) {
                        return function(n) {
                            if (!e(n)) throw new TypeError(t + " must be a Number");
                            this[t] = Number(n)
                        }
                    }(a[u]);
                    for (var p = 0; p < o.length; p++) s.prototype["get" + t(o[p])] = n(o[p]), s.prototype["set" + t(o[p])] = function(e) {
                        return function(t) {
                            this[e] = String(t)
                        }
                    }(o[p]);
                    return s
                }));
                var j = {};
                ! function(t, n) {
                    "use strict";
                    "function" === typeof e && e.amd ? e("error-stack-parser", ["stackframe"], n) : "object" === typeof j ? j = n(_) : t.ErrorStackParser = n(t.StackFrame)
                }(this, (function(e) {
                    "use strict";
                    var t = /(^|@)\S+\:\d+/,
                        n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                        r = /^(eval@)?(\[native code\])?$/;
                    return {
                        parse: function(e) {
                            if ("undefined" !== typeof e.stacktrace || "undefined" !== typeof e["opera#sourceloc"]) return this.parseOpera(e);
                            if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                            if (e.stack) return this.parseFFOrSafari(e);
                            throw new Error("Cannot parse given Error object")
                        },
                        extractLocation: function(e) {
                            if (-1 === e.indexOf(":")) return [e];
                            var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                            return [t[1], t[2] || void 0, t[3] || void 0]
                        },
                        parseV8OrIE: function(t) {
                            return t.stack.split("\n").filter((function(e) {
                                return !!e.match(n)
                            }), this).map((function(t) {
                                t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                                var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                                    r = n.match(/ (\((.+):(\d+):(\d+)\)$)/),
                                    a = (n = r ? n.replace(r[0], "") : n).split(/\s+/).slice(1),
                                    o = this.extractLocation(r ? r[1] : a.pop()),
                                    i = a.join(" ") || void 0,
                                    c = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                                return new e({
                                    functionName: i,
                                    fileName: c,
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }), this)
                        },
                        parseFFOrSafari: function(t) {
                            return t.stack.split("\n").filter((function(e) {
                                return !e.match(r)
                            }), this).map((function(t) {
                                if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                    functionName: t
                                });
                                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                    r = t.match(n),
                                    a = r && r[1] ? r[1] : void 0,
                                    o = this.extractLocation(t.replace(n, ""));
                                return new e({
                                    functionName: a,
                                    fileName: o[0],
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }), this)
                        },
                        parseOpera: function(e) {
                            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                        },
                        parseOpera9: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), a = [], o = 2, i = r.length; o < i; o += 2) {
                                var c = n.exec(r[o]);
                                c && a.push(new e({
                                    fileName: c[2],
                                    lineNumber: c[1],
                                    source: r[o]
                                }))
                            }
                            return a
                        },
                        parseOpera10: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), a = [], o = 0, i = r.length; o < i; o += 2) {
                                var c = n.exec(r[o]);
                                c && a.push(new e({
                                    functionName: c[3] || void 0,
                                    fileName: c[2],
                                    lineNumber: c[1],
                                    source: r[o]
                                }))
                            }
                            return a
                        },
                        parseOpera11: function(n) {
                            return n.stack.split("\n").filter((function(e) {
                                return !!e.match(t) && !e.match(/^Error created at/)
                            }), this).map((function(t) {
                                var n, r = t.split("@"),
                                    a = this.extractLocation(r.pop()),
                                    o = r.shift() || "",
                                    i = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                                o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                                var c = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                return new e({
                                    functionName: i,
                                    args: c,
                                    fileName: a[0],
                                    lineNumber: a[1],
                                    columnNumber: a[2],
                                    source: t
                                })
                            }), this)
                        }
                    }
                }));
                var w = j,
                    O = function(e) {
                        return !!e && (!!e.stack || !!e.stacktrace || !!e["opera#sourceloc"]) && "string" === typeof(e.stack || e.stacktrace || e["opera#sourceloc"]) && e.stack !== e.name + ": " + e.message
                    };

                function x(e) {
                    switch (Object.prototype.toString.call(e)) {
                        case "[object Error]":
                        case "[object Exception]":
                        case "[object DOMException]":
                            return !0;
                        default:
                            return e instanceof Error
                    }
                }
                var k = x,
                    E = "browserjs",
                    C = function(e, t, n, r) {
                        var a;
                        if (t) {
                            var o;
                            if (null === n) return S(e, t);
                            "object" === typeof n && (o = n), "string" === typeof n && ((a = {})[n] = r, o = a), o && (e[t] || (e[t] = {}), e[t] = m({}, e[t], o))
                        }
                    },
                    S = function(e, t, n) {
                        "string" === typeof t && (n ? e[t] && delete e[t][n] : delete e[t])
                    },
                    A = {
                        add: C,
                        get: function(e, t, n) {
                            if ("string" === typeof t) return n ? e[t] ? e[t][n] : void 0 : e[t]
                        },
                        clear: S
                    },
                    P = {};
                ! function(t, n) {
                    "use strict";
                    "function" === typeof e && e.amd ? e("stack-generator", ["stackframe"], n) : "object" === typeof P ? P = n(_) : t.StackGenerator = n(t.StackFrame)
                }(this, (function(e) {
                    return {
                        backtrace: function(t) {
                            var n = [],
                                r = 10;
                            "object" === typeof t && "number" === typeof t.maxStackSize && (r = t.maxStackSize);
                            for (var a = arguments.callee; a && n.length < r && a.arguments;) {
                                for (var o = new Array(a.arguments.length), i = 0; i < o.length; ++i) o[i] = a.arguments[i];
                                /function(?:\s+([\w$]+))+\s*\(/.test(a.toString()) ? n.push(new e({
                                    functionName: RegExp.$1 || void 0,
                                    args: o
                                })) : n.push(new e({
                                    args: o
                                }));
                                try {
                                    a = a.caller
                                } catch (c) {
                                    break
                                }
                            }
                            return n
                        }
                    }
                }));
                var T = function() {
                        function e(e, t, r, a, o) {
                            void 0 === r && (r = []), void 0 === a && (a = R()), this.apiKey = void 0, this.context = void 0, this.groupingHash = void 0, this.originalError = o, this._handledState = a, this.severity = this._handledState.severity, this.unhandled = this._handledState.unhandled, this.app = {}, this.device = {}, this.request = {}, this.breadcrumbs = [], this.threads = [], this._metadata = {}, this._user = {}, this._session = void 0, this.errors = [{
                                errorClass: F(e),
                                errorMessage: F(t),
                                type: E,
                                stacktrace: n(r, (function(e, t) {
                                    var n = N(t);
                                    try {
                                        return "{}" === JSON.stringify(n) ? e : e.concat(n)
                                    } catch (r) {
                                        return e
                                    }
                                }), [])
                            }]
                        }
                        var t = e.prototype;
                        return t.addMetadata = function(e, t, n) {
                            return A.add(this._metadata, e, t, n)
                        }, t.getMetadata = function(e, t) {
                            return A.get(this._metadata, e, t)
                        }, t.clearMetadata = function(e, t) {
                            return A.clear(this._metadata, e, t)
                        }, t.getUser = function() {
                            return this._user
                        }, t.setUser = function(e, t, n) {
                            this._user = {
                                id: e,
                                email: t,
                                name: n
                            }
                        }, t.toJSON = function() {
                            return {
                                payloadVersion: "4",
                                exceptions: h(this.errors, (function(e) {
                                    return m({}, e, {
                                        message: e.errorMessage
                                    })
                                })),
                                severity: this.severity,
                                unhandled: this._handledState.unhandled,
                                severityReason: this._handledState.severityReason,
                                app: this.app,
                                device: this.device,
                                request: this.request,
                                breadcrumbs: this.breadcrumbs,
                                context: this.context,
                                groupingHash: this.groupingHash,
                                metaData: this._metadata,
                                user: this._user,
                                session: this._session
                            }
                        }, e
                    }(),
                    N = function(e) {
                        var t = {
                            file: e.fileName,
                            method: L(e.functionName),
                            lineNumber: e.lineNumber,
                            columnNumber: e.columnNumber,
                            code: void 0,
                            inProject: void 0
                        };
                        return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t
                    },
                    L = function(e) {
                        return /^global code$/i.test(e) ? "global code" : e
                    },
                    R = function() {
                        return {
                            unhandled: !1,
                            severity: "warning",
                            severityReason: {
                                type: "handledException"
                            }
                        }
                    },
                    F = function(e) {
                        return "string" === typeof e ? e : ""
                    };
                T.getStacktrace = function(e, t, n) {
                    if (O(e)) return w.parse(e).slice(t);
                    try {
                        return r(P.backtrace(), (function(e) {
                            return -1 === (e.functionName || "").indexOf("StackGenerator$$")
                        })).slice(1 + n)
                    } catch (a) {
                        return []
                    }
                }, T.create = function(e, t, n, r, a, o) {
                    void 0 === a && (a = 0);
                    var i, c = M(e, t, r, o),
                        s = c[0],
                        l = c[1];
                    try {
                        var u = T.getStacktrace(s, l > 0 ? 1 + l + a : 0, 1 + a);
                        i = new T(s.name, s.message, u, n, e)
                    } catch (p) {
                        i = new T(s.name, s.message, [], n, e)
                    }
                    return "InvalidError" === s.name && i.addMetadata("" + r, "non-error parameter", I(e)), i
                };
                var I = function(e) {
                        return null === e ? "null" : void 0 === e ? "undefined" : e
                    },
                    M = function(e, t, n, r) {
                        var a, o = 0,
                            i = function(e) {
                                r && r.warn(n + ' received a non-error: "' + e + '"');
                                var t = new Error(n + ' received a non-error. See "' + n + '" tab for more detail.');
                                return t.name = "InvalidError", t
                            };
                        if (t) switch (typeof e) {
                            case "string":
                            case "number":
                            case "boolean":
                                a = new Error(String(e)), o += 1;
                                break;
                            case "function":
                                a = i("function"), o += 2;
                                break;
                            case "object":
                                null !== e && k(e) ? a = e : null !== e && G(e) ? ((a = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass, o += 1) : (a = i(null === e ? "null" : "unsupported object"), o += 2);
                                break;
                            default:
                                a = i("nothing"), o += 2
                        } else k(e) ? a = e : (a = i(typeof e), o += 2);
                        if (!O(a)) try {
                            throw a
                        } catch (c) {
                            O(c) && (a = c, o = 1)
                        }
                        return [a, o]
                    },
                    G = function(e) {
                        return ("string" === typeof e.name || "string" === typeof e.errorClass) && ("string" === typeof e.message || "string" === typeof e.errorMessage)
                    },
                    D = T,
                    z = function(e, t, n) {
                        var r = 0,
                            a = function() {
                                if (r >= e.length) return n(null, !0);
                                t(e[r], (function(e, t) {
                                    return e ? n(e) : !1 === t ? n(null, !1) : (r++, void a())
                                }))
                            };
                        a()
                    },
                    B = function(e, t, n, r) {
                        z(e, (function(e, r) {
                            if ("function" !== typeof e) return r(null);
                            try {
                                if (2 !== e.length) {
                                    var a = e(t);
                                    return a && "function" === typeof a.then ? a.then((function(e) {
                                        return setTimeout((function() {
                                            return r(null, e)
                                        }))
                                    }), (function(e) {
                                        setTimeout((function() {
                                            return n(e), r(null, !0)
                                        }))
                                    })) : r(null, a)
                                }
                                e(t, (function(e, t) {
                                    if (e) return n(e), r(null);
                                    r(null, t)
                                }))
                            } catch (o) {
                                n(o), r(null)
                            }
                        }), r)
                    },
                    U = function(e, t, n, r) {
                        for (var a = !1, o = e.slice(); !a && o.length;) try {
                            a = !1 === o.pop()(t)
                        } catch (i) {
                            r.error("Error occurred in " + n + " callback, continuing anyway\u2026"), r.error(i)
                        }
                        return a
                    },
                    q = function(e, t) {
                        var n = "000000000" + e;
                        return n.substr(n.length - t)
                    },
                    W = "object" === typeof window ? window : self,
                    H = 0;
                for (var V in W) Object.hasOwnProperty.call(W, V) && H++;
                var Y = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
                    K = q((Y + navigator.userAgent.length).toString(36) + H.toString(36), 4),
                    Q = function() {
                        return K
                    },
                    Z = 0,
                    X = 4,
                    $ = 36,
                    J = Math.pow($, X);

                function ee() {
                    return q((Math.random() * J << 0).toString($), X)
                }

                function te() {
                    return Z = Z < J ? Z : 0, ++Z - 1
                }

                function ne() {
                    return "c" + (new Date).getTime().toString($) + q(te().toString($), X) + Q() + (ee() + ee())
                }
                ne.fingerprint = Q;
                var re = ne,
                    ae = function() {
                        function e() {
                            this.id = re(), this.startedAt = new Date, this._handled = 0, this._unhandled = 0, this._user = {}, this.app = {}, this.device = {}
                        }
                        var t = e.prototype;
                        return t.getUser = function() {
                            return this._user
                        }, t.setUser = function(e, t, n) {
                            this._user = {
                                id: e,
                                email: t,
                                name: n
                            }
                        }, t.toJSON = function() {
                            return {
                                id: this.id,
                                startedAt: this.startedAt,
                                events: {
                                    handled: this._handled,
                                    unhandled: this._unhandled
                                }
                            }
                        }, t._track = function(e) {
                            this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1
                        }, e
                    }(),
                    oe = function() {},
                    ie = function() {
                        function e(t, n, r, a) {
                            var o = this;
                            void 0 === n && (n = f.schema), void 0 === r && (r = []), this._notifier = a, this._config = {}, this._schema = n, this._delivery = {
                                sendSession: oe,
                                sendEvent: oe
                            }, this._logger = {
                                debug: oe,
                                info: oe,
                                warn: oe,
                                error: oe
                            }, this._plugins = {}, this._breadcrumbs = [], this._session = null, this._metadata = {}, this._context = void 0, this._user = {}, this._cbs = {
                                e: [],
                                s: [],
                                sp: [],
                                b: []
                            }, this.Client = e, this.Event = D, this.Breadcrumb = y, this.Session = ae, this._config = this._configure(t, r), h(r.concat(this._config.plugins), (function(e) {
                                e && o._loadPlugin(e)
                            })), this._depth = 1;
                            var i = this,
                                c = this.notify;
                            this.notify = function() {
                                return c.apply(i, arguments)
                            }
                        }
                        var o = e.prototype;
                        return o.addMetadata = function(e, t, n) {
                            return A.add(this._metadata, e, t, n)
                        }, o.getMetadata = function(e, t) {
                            return A.get(this._metadata, e, t)
                        }, o.clearMetadata = function(e, t) {
                            return A.clear(this._metadata, e, t)
                        }, o.getContext = function() {
                            return this._context
                        }, o.setContext = function(e) {
                            this._context = e
                        }, o._configure = function(e, t) {
                            var r = n(t, (function(e, t) {
                                    return t && t.configSchema ? m({}, e, t.configSchema) : e
                                }), this._schema),
                                a = n(s(r), (function(t, n) {
                                    var a = r[n].defaultValue(e[n]);
                                    return void 0 !== e[n] ? r[n].validate(e[n]) ? r[n].allowPartialObject ? t.config[n] = m(a, e[n]) : t.config[n] = e[n] : (t.errors[n] = r[n].message, t.config[n] = a) : t.config[n] = a, t
                                }), {
                                    errors: {},
                                    config: {}
                                }),
                                o = a.errors,
                                i = a.config;
                            if (r.apiKey) {
                                if (!i.apiKey) throw new Error("No Bugsnag API Key set");
                                /^[0-9a-f]{32}$/i.test(i.apiKey) || (o.apiKey = "should be a string of 32 hexadecimal characters")
                            }
                            return this._metadata = m({}, i.metadata), this._user = m({}, i.user), this._context = i.context, i.logger && (this._logger = i.logger), i.onError && (this._cbs.e = this._cbs.e.concat(i.onError)), i.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(i.onBreadcrumb)), i.onSession && (this._cbs.s = this._cbs.s.concat(i.onSession)), s(o).length && this._logger.warn(ce(o, e)), i
                        }, o.getUser = function() {
                            return this._user
                        }, o.setUser = function(e, t, n) {
                            this._user = {
                                id: e,
                                email: t,
                                name: n
                            }
                        }, o._loadPlugin = function(e) {
                            var t = e.load(this);
                            return e.name && (this._plugins["~" + e.name + "~"] = t), this
                        }, o.getPlugin = function(e) {
                            return this._plugins["~" + e + "~"]
                        }, o._setDelivery = function(e) {
                            this._delivery = e(this)
                        }, o.startSession = function() {
                            var e = new ae;
                            return e.app.releaseStage = this._config.releaseStage, e.app.version = this._config.appVersion, e.app.type = this._config.appType, e._user = m({}, this._user), U(this._cbs.s, e, "onSession", this._logger) ? (this._logger.debug("Session not started due to onSession callback"), this) : this._sessionDelegate.startSession(this, e)
                        }, o.addOnError = function(e, t) {
                            void 0 === t && (t = !1), this._cbs.e[t ? "unshift" : "push"](e)
                        }, o.removeOnError = function(e) {
                            this._cbs.e = r(this._cbs.e, (function(t) {
                                return t !== e
                            }))
                        }, o._addOnSessionPayload = function(e) {
                            this._cbs.sp.push(e)
                        }, o.addOnSession = function(e) {
                            this._cbs.s.push(e)
                        }, o.removeOnSession = function(e) {
                            this._cbs.s = r(this._cbs.s, (function(t) {
                                return t !== e
                            }))
                        }, o.addOnBreadcrumb = function(e, t) {
                            void 0 === t && (t = !1), this._cbs.b[t ? "unshift" : "push"](e)
                        }, o.removeOnBreadcrumb = function(e) {
                            this._cbs.b = r(this._cbs.b, (function(t) {
                                return t !== e
                            }))
                        }, o.pauseSession = function() {
                            return this._sessionDelegate.pauseSession(this)
                        }, o.resumeSession = function() {
                            return this._sessionDelegate.resumeSession(this)
                        }, o.leaveBreadcrumb = function(e, n, r) {
                            if (e = "string" === typeof e ? e : "", r = "string" === typeof r && a(t, r) ? r : "manual", n = "object" === typeof n && null !== n ? n : {}, e) {
                                var o = new y(e, n, r);
                                U(this._cbs.b, o, "onBreadcrumb", this._logger) ? this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback") : (this._breadcrumbs.push(o), this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs)))
                            }
                        }, o.notify = function(e, t, n) {
                            void 0 === n && (n = oe);
                            var r = D.create(e, !0, void 0, "notify()", this._depth + 1, this._logger);
                            this._notify(r, t, n)
                        }, o._notify = function(t, n, r) {
                            var o = this;
                            if (void 0 === r && (r = oe), t.app = m({}, t.app, {
                                    releaseStage: this._config.releaseStage,
                                    version: this._config.appVersion,
                                    type: this._config.appType
                                }), t.context = t.context || this._context, t._metadata = m({}, t._metadata, this._metadata), t._user = m({}, t._user, this._user), t.breadcrumbs = this._breadcrumbs.slice(), null !== this._config.enabledReleaseStages && !a(this._config.enabledReleaseStages, this._config.releaseStage)) return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"), r(null, t);
                            var i = t.severity,
                                c = function(e) {
                                    o._logger.error("Error occurred in onError callback, continuing anyway\u2026"), o._logger.error(e)
                                },
                                s = [].concat(this._cbs.e).concat(n);
                            B(s, t, c, (function(n, s) {
                                if (n && c(n), !s) return o._logger.debug("Event not sent due to onError callback"), r(null, t);
                                a(o._config.enabledBreadcrumbTypes, "error") && e.prototype.leaveBreadcrumb.call(o, t.errors[0].errorClass, {
                                    errorClass: t.errors[0].errorClass,
                                    errorMessage: t.errors[0].errorMessage,
                                    severity: t.severity
                                }, "error"), i !== t.severity && (t._handledState.severityReason = {
                                    type: "userCallbackSetSeverity"
                                }), t.unhandled !== t._handledState.unhandled && (t._handledState.severityReason.unhandledOverridden = !0, t._handledState.unhandled = t.unhandled), o._session && (o._session._track(t), t._session = o._session), o._delivery.sendEvent({
                                    apiKey: t.apiKey || o._config.apiKey,
                                    notifier: o._notifier,
                                    events: [t]
                                }, (function(e) {
                                    return r(e, t)
                                }))
                            }))
                        }, e
                    }(),
                    ce = function(e, t) {
                        return new Error("Invalid configuration\n" + h(s(e), (function(n) {
                            return "  - " + n + " " + e[n] + ", got " + se(t[n])
                        })).join("\n\n"))
                    },
                    se = function(e) {
                        switch (typeof e) {
                            case "string":
                            case "number":
                            case "object":
                                return JSON.stringify(e);
                            default:
                                return String(e)
                        }
                    },
                    le = ie,
                    ue = function(e, t, n, r) {
                        var a = r && r.redactedKeys ? r.redactedKeys : [],
                            o = r && r.redactedPaths ? r.redactedPaths : [];
                        return JSON.stringify(we(e, a, o), t, n)
                    },
                    pe = 20,
                    fe = 25e3,
                    de = 8,
                    me = "...";

                function he(e) {
                    return e instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(e))
                }

                function ge(e) {
                    return "[Throws: " + (e ? e.message : "?") + "]"
                }

                function be(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return !0;
                    return !1
                }

                function ve(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (0 === t.indexOf(e[n])) return !0;
                    return !1
                }

                function ye(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) {
                        if ("string" === typeof e[n] && e[n].toLowerCase() === t.toLowerCase()) return !0;
                        if (e[n] && "function" === typeof e[n].test && e[n].test(t)) return !0
                    }
                    return !1
                }

                function _e(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }

                function je(e, t) {
                    try {
                        return e[t]
                    } catch (n) {
                        return ge(n)
                    }
                }

                function we(e, t, n) {
                    var r = [],
                        a = 0;

                    function o(e, i) {
                        function c() {
                            return i.length > de && a > fe
                        }
                        if (a++, i.length > pe) return me;
                        if (c()) return me;
                        if (null === e || "object" !== typeof e) return e;
                        if (be(r, e)) return "[Circular]";
                        if (r.push(e), "function" === typeof e.toJSON) try {
                            a--;
                            var s = o(e.toJSON(), i);
                            return r.pop(), s
                        } catch (h) {
                            return ge(h)
                        }
                        if (he(e)) {
                            a--;
                            var l = o({
                                name: e.name,
                                message: e.message
                            }, i);
                            return r.pop(), l
                        }
                        if (_e(e)) {
                            for (var u = [], p = 0, f = e.length; p < f; p++) {
                                if (c()) {
                                    u.push(me);
                                    break
                                }
                                u.push(o(e[p], i.concat("[]")))
                            }
                            return r.pop(), u
                        }
                        var d = {};
                        try {
                            for (var m in e)
                                if (Object.prototype.hasOwnProperty.call(e, m))
                                    if (ve(n, i.join(".")) && ye(t, m)) d[m] = "[REDACTED]";
                                    else {
                                        if (c()) {
                                            d[m] = me;
                                            break
                                        }
                                        d[m] = o(je(e, m), i.concat(m))
                                    }
                        } catch (g) {}
                        return r.pop(), d
                    }
                    return o(e, [])
                }
                var Oe = {},
                    xe = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
                Oe.event = function(e, t) {
                    var n = ue(e, null, null, {
                        redactedPaths: xe,
                        redactedKeys: t
                    });
                    if (n.length > 1e6 && (e.events[0]._metadata = {
                            notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed"
                        }, (n = ue(e, null, null, {
                            redactedPaths: xe,
                            redactedKeys: t
                        })).length > 1e6)) throw new Error("payload exceeded 1MB limit");
                    return n
                }, Oe.session = function(e, t) {
                    var n = ue(e, null, null);
                    if (n.length > 1e6) throw new Error("payload exceeded 1MB limit");
                    return n
                };
                var ke = {};
                ke = function(e, t) {
                    return void 0 === t && (t = window), {
                        sendEvent: function(n, r) {
                            void 0 === r && (r = function() {});
                            var a = Ee(e._config, "notify", "4", t),
                                o = new t.XDomainRequest;
                            o.onload = function() {
                                r(null)
                            }, o.open("POST", a), setTimeout((function() {
                                try {
                                    o.send(Oe.event(n, e._config.redactedKeys))
                                } catch (t) {
                                    e._logger.error(t), r(t)
                                }
                            }), 0)
                        },
                        sendSession: function(n, r) {
                            void 0 === r && (r = function() {});
                            var a = Ee(e._config, "sessions", "1", t),
                                o = new t.XDomainRequest;
                            o.onload = function() {
                                r(null)
                            }, o.open("POST", a), setTimeout((function() {
                                try {
                                    o.send(Oe.session(n, e._config.redactedKeys))
                                } catch (t) {
                                    e._logger.error(t), r(t)
                                }
                            }), 0)
                        }
                    }
                };
                var Ee = function(e, t, n, r) {
                        var a = JSON.parse(JSON.stringify(new Date));
                        return Ce(e.endpoints[t], r.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(a)
                    },
                    Ce = ke._matchPageProtocol = function(e, t) {
                        return "http:" === t ? e.replace(/^https:/, "http:") : e
                    },
                    Se = function(e, t) {
                        return void 0 === t && (t = window), {
                            sendEvent: function(n, r) {
                                void 0 === r && (r = function() {});
                                try {
                                    var a = e._config.endpoints.notify,
                                        o = new t.XMLHttpRequest;
                                    o.onreadystatechange = function() {
                                        o.readyState === t.XMLHttpRequest.DONE && r(null)
                                    }, o.open("POST", a), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", n.apiKey || e._config.apiKey), o.setRequestHeader("Bugsnag-Payload-Version", "4"), o.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()), o.send(Oe.event(n, e._config.redactedKeys))
                                } catch (i) {
                                    e._logger.error(i)
                                }
                            },
                            sendSession: function(n, r) {
                                void 0 === r && (r = function() {});
                                try {
                                    var a = e._config.endpoints.sessions,
                                        o = new t.XMLHttpRequest;
                                    o.onreadystatechange = function() {
                                        o.readyState === t.XMLHttpRequest.DONE && r(null)
                                    }, o.open("POST", a), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", e._config.apiKey), o.setRequestHeader("Bugsnag-Payload-Version", "1"), o.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()), o.send(Oe.session(n, e._config.redactedKeys))
                                } catch (i) {
                                    e._logger.error(i)
                                }
                            }
                        }
                    },
                    Ae = new Date,
                    Pe = function() {
                        Ae = new Date
                    },
                    Te = {
                        name: "appDuration",
                        load: function(e) {
                            return e.addOnError((function(e) {
                                var t = new Date;
                                e.app.duration = t - Ae
                            }), !0), {
                                reset: Pe
                            }
                        }
                    },
                    Ne = function(e) {
                        return void 0 === e && (e = window), {
                            load: function(t) {
                                t.addOnError((function(t) {
                                    void 0 === t.context && (t.context = e.location.pathname)
                                }), !0)
                            }
                        }
                    },
                    Le = function(e, t) {
                        var n = "000000000" + e;
                        return n.substr(n.length - t)
                    },
                    Re = "object" === typeof window ? window : self,
                    Fe = 0;
                for (var Ie in Re) Object.hasOwnProperty.call(Re, Ie) && Fe++;
                var Me = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
                    Ge = Le((Me + navigator.userAgent.length).toString(36) + Fe.toString(36), 4),
                    De = function() {
                        return Ge
                    },
                    ze = 0,
                    Be = 4,
                    Ue = 36,
                    qe = Math.pow(Ue, Be);

                function We() {
                    return Le((Math.random() * qe << 0).toString(Ue), Be)
                }

                function He() {
                    return ze = ze < qe ? ze : 0, ++ze - 1
                }

                function Ve() {
                    return "c" + (new Date).getTime().toString(Ue) + Le(He().toString(Ue), Be) + De() + (We() + We())
                }
                Ve.fingerprint = De;
                var Ye = Ve,
                    Ke = "bugsnag-anonymous-id",
                    Qe = function() {
                        try {
                            var e = window.localStorage,
                                t = e.getItem(Ke);
                            return t && /^c[a-z0-9]{20,32}$/.test(t) || (t = Ye(), e.setItem(Ke, t)), t
                        } catch (n) {}
                    },
                    Ze = function(e, t) {
                        return void 0 === e && (e = navigator), void 0 === t && (t = window.screen), {
                            load: function(n) {
                                var r = {
                                    locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
                                    userAgent: e.userAgent
                                };
                                t && t.orientation && t.orientation.type ? r.orientation = t.orientation.type : r.orientation = document.documentElement.clientWidth > document.documentElement.clientHeight ? "landscape" : "portrait", n._config.generateAnonymousId && (r.id = Qe()), n.addOnSession((function(e) {
                                    e.device = m({}, e.device, r)
                                })), n.addOnError((function(e) {
                                    e.device = m({}, e.device, r, {
                                        time: new Date
                                    })
                                }), !0)
                            },
                            configSchema: {
                                generateAnonymousId: {
                                    validate: function(e) {
                                        return !0 === e || !1 === e
                                    },
                                    defaultValue: function() {
                                        return !0
                                    },
                                    message: "should be true|false"
                                }
                            }
                        }
                    },
                    Xe = function(e) {
                        return void 0 === e && (e = window), {
                            load: function(t) {
                                t.addOnError((function(t) {
                                    t.request && t.request.url || (t.request = m({}, t.request, {
                                        url: e.location.href
                                    }))
                                }), !0)
                            }
                        }
                    },
                    $e = {
                        load: function(e) {
                            e._sessionDelegate = Je
                        }
                    },
                    Je = {
                        startSession: function(e, t) {
                            var n = e;
                            return n._session = t, n._pausedSession = null, null === n._config.enabledReleaseStages || a(n._config.enabledReleaseStages, n._config.releaseStage) ? (n._delivery.sendSession({
                                notifier: n._notifier,
                                device: t.device,
                                app: t.app,
                                sessions: [{
                                    id: t.id,
                                    startedAt: t.startedAt,
                                    user: t._user
                                }]
                            }), n) : (n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"), n)
                        },
                        resumeSession: function(e) {
                            return e._session ? e : e._pausedSession ? (e._session = e._pausedSession, e._pausedSession = null, e) : e.startSession()
                        },
                        pauseSession: function(e) {
                            e._pausedSession = e._session, e._session = null
                        }
                    },
                    et = {
                        load: function(e) {
                            e._config.collectUserIp || e.addOnError((function(e) {
                                e._user && "undefined" === typeof e._user.id && delete e._user.id, e._user = m({
                                    id: "[REDACTED]"
                                }, e._user), e.request = m({
                                    clientIp: "[REDACTED]"
                                }, e.request)
                            }))
                        },
                        configSchema: {
                            collectUserIp: {
                                defaultValue: function() {
                                    return !0
                                },
                                message: "should be true|false",
                                validate: function(e) {
                                    return !0 === e || !1 === e
                                }
                            }
                        }
                    },
                    tt = {
                        load: function(e) {
                            var t = /^dev(elopment)?$/.test(e._config.releaseStage);
                            e._config.enabledBreadcrumbTypes && a(e._config.enabledBreadcrumbTypes, "log") && !t && h(nt, (function(t) {
                                var r = console[t];
                                console[t] = function() {
                                    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                                    e.leaveBreadcrumb("Console output", n(o, (function(e, t, n) {
                                        var r = "[Unknown value]";
                                        try {
                                            r = String(t)
                                        } catch (a) {}
                                        if ("[object Object]" === r) try {
                                            r = JSON.stringify(t)
                                        } catch (a) {}
                                        return e["[" + n + "]"] = r, e
                                    }), {
                                        severity: 0 === t.indexOf("group") ? "log" : t
                                    }), "log"), r.apply(console, o)
                                }, console[t]._restore = function() {
                                    console[t] = r
                                }
                            }))
                        }
                    },
                    nt = r(["log", "debug", "info", "warn", "error"], (function(e) {
                        return "undefined" !== typeof console && "function" === typeof console[e]
                    })),
                    rt = 200,
                    at = 5e5,
                    ot = function(e, t) {
                        return void 0 === e && (e = document), void 0 === t && (t = window), {
                            load: function(a) {
                                if (a._config.trackInlineScripts) {
                                    var o = t.location.href,
                                        i = "",
                                        c = e.attachEvent ? "complete" === e.readyState : "loading" !== e.readyState,
                                        s = function() {
                                            return e.documentElement.outerHTML
                                        };
                                    i = s();
                                    var l = e.onreadystatechange;
                                    e.onreadystatechange = function() {
                                        "interactive" === e.readyState && (i = s(), c = !0);
                                        try {
                                            l.apply(this, arguments)
                                        } catch (t) {}
                                    };
                                    var u = null,
                                        p = function(e) {
                                            u = e
                                        },
                                        f = function() {
                                            var t = e.currentScript || u;
                                            if (!t && !c) {
                                                var n = e.scripts || e.getElementsByTagName("script");
                                                t = n[n.length - 1]
                                            }
                                            return t
                                        },
                                        d = function(e) {
                                            c && i || (i = s());
                                            var t = ["\x3c!-- DOC START --\x3e"].concat(i.split("\n")),
                                                r = e - 1,
                                                a = Math.max(r - 3, 0),
                                                o = Math.min(r + 3, t.length);
                                            return n(t.slice(a, o), (function(e, t, n) {
                                                return e[a + 1 + n] = t.length <= rt ? t : t.substr(0, rt), e
                                            }), {})
                                        };
                                    a.addOnError((function(e) {
                                        e.errors[0].stacktrace = r(e.errors[0].stacktrace, (function(e) {
                                            return !/__trace__$/.test(e.method)
                                        }));
                                        var t = e.errors[0].stacktrace[0];
                                        if (!t || !t.file || t.file.replace(/#.*$/, "") === o.replace(/#.*$/, "")) {
                                            var n = f();
                                            if (n) {
                                                var a = n.innerHTML;
                                                e.addMetadata("script", "content", a.length <= at ? a : a.substr(0, at)), t && t.lineNumber && (t.code = d(t.lineNumber))
                                            }
                                        }
                                    }), !0);
                                    var m = h(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], (function(e) {
                                        return it(t, e, (function(e) {
                                            return g(e, (function(e) {
                                                return {
                                                    get: function() {
                                                        return e[0]
                                                    },
                                                    replace: function(t) {
                                                        e[0] = t
                                                    }
                                                }
                                            }))
                                        }))
                                    }))[0];
                                    h(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], (function(e) {
                                        t[e] && t[e].prototype && Object.prototype.hasOwnProperty.call(t[e].prototype, "addEventListener") && (it(t[e].prototype, "addEventListener", (function(e) {
                                            return g(e, ct)
                                        })), it(t[e].prototype, "removeEventListener", (function(e) {
                                            return g(e, ct, !0)
                                        })))
                                    }))
                                }

                                function g(e, t, n) {
                                    return void 0 === n && (n = !1),
                                        function() {
                                            var r = [].slice.call(arguments);
                                            try {
                                                var a = t(r),
                                                    o = a.get();
                                                if (n && e.apply(this, r), "function" !== typeof o) return e.apply(this, r);
                                                if (o.__trace__) a.replace(o.__trace__);
                                                else {
                                                    var i = f();
                                                    o.__trace__ = function() {
                                                        p(i), m((function() {
                                                            p(null)
                                                        }), 0);
                                                        var e = o.apply(this, arguments);
                                                        return p(null), e
                                                    }, o.__trace__.__trace__ = o.__trace__, a.replace(o.__trace__)
                                                }
                                            } catch (c) {}
                                            if (e.apply) return e.apply(this, r);
                                            switch (r.length) {
                                                case 1:
                                                    return e(r[0]);
                                                case 2:
                                                    return e(r[0], r[1]);
                                                default:
                                                    return e()
                                            }
                                        }
                                }
                            },
                            configSchema: {
                                trackInlineScripts: {
                                    validate: function(e) {
                                        return !0 === e || !1 === e
                                    },
                                    defaultValue: function() {
                                        return !0
                                    },
                                    message: "should be true|false"
                                }
                            }
                        }
                    };

                function it(e, t, n) {
                    var r = e[t];
                    if (!r) return r;
                    var a = n(r);
                    return e[t] = a, r
                }

                function ct(e) {
                    var t = !!e[1] && "function" === typeof e[1].handleEvent;
                    return {
                        get: function() {
                            return t ? e[1].handleEvent : e[1]
                        },
                        replace: function(n) {
                            t ? e[1].handleEvent = n : e[1] = n
                        }
                    }
                }
                var st = function(e) {
                        return void 0 === e && (e = window), {
                            load: function(t) {
                                "addEventListener" in e && t._config.enabledBreadcrumbTypes && a(t._config.enabledBreadcrumbTypes, "user") && e.addEventListener("click", (function(n) {
                                    var r, a;
                                    try {
                                        r = lt(n.target), a = ut(n.target, e)
                                    } catch (o) {
                                        r = "[hidden]", a = "[hidden]", t._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")
                                    }
                                    t.leaveBreadcrumb("UI click", {
                                        targetText: r,
                                        targetSelector: a
                                    }, "user")
                                }), !0)
                            }
                        }
                    },
                    lt = function(e) {
                        var t = e.textContent || e.innerText || "";
                        return t || "submit" !== e.type && "button" !== e.type || (t = e.value), pt(t = t.replace(/^\s+|\s+$/g, ""), 140)
                    };

                function ut(e, t) {
                    var n = [e.tagName];
                    if (e.id && n.push("#" + e.id), e.className && e.className.length && n.push("." + e.className.split(" ").join(".")), !t.document.querySelectorAll || !Array.prototype.indexOf) return n.join("");
                    try {
                        if (1 === t.document.querySelectorAll(n.join("")).length) return n.join("")
                    } catch (a) {
                        return n.join("")
                    }
                    if (e.parentNode.childNodes.length > 1) {
                        var r = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
                        n.push(":nth-child(" + r + ")")
                    }
                    return 1 === t.document.querySelectorAll(n.join("")).length ? n.join("") : e.parentNode ? ut(e.parentNode, t) + " > " + n.join("") : n.join("")
                }

                function pt(e, t) {
                    var n = "(...)";
                    return e && e.length <= t ? e : e.slice(0, t - n.length) + n
                }
                var ft = {};
                ft = function(e) {
                    return void 0 === e && (e = window), {
                        load: function(t) {
                            if ("addEventListener" in e && t._config.enabledBreadcrumbTypes && a(t._config.enabledBreadcrumbTypes, "navigation")) {
                                var n = function(e) {
                                    return function() {
                                        return t.leaveBreadcrumb(e, {}, "navigation")
                                    }
                                };
                                e.addEventListener("pagehide", n("Page hidden"), !0), e.addEventListener("pageshow", n("Page shown"), !0), e.addEventListener("load", n("Page loaded"), !0), e.document.addEventListener("DOMContentLoaded", n("DOMContentLoaded"), !0), e.addEventListener("load", (function() {
                                    return e.addEventListener("popstate", n("Navigated back"), !0)
                                })), e.addEventListener("hashchange", (function(n) {
                                    var r = n.oldURL ? {
                                        from: dt(n.oldURL, e),
                                        to: dt(n.newURL, e),
                                        state: gt(e)
                                    } : {
                                        to: dt(e.location.href, e)
                                    };
                                    t.leaveBreadcrumb("Hash changed", r, "navigation")
                                }), !0), e.history.replaceState && ht(t, e.history, "replaceState", e), e.history.pushState && ht(t, e.history, "pushState", e), t.leaveBreadcrumb("Bugsnag loaded", {}, "navigation")
                            }
                        }
                    }
                };
                var dt = function(e, t) {
                        var n = t.document.createElement("A");
                        return n.href = e, "" + n.pathname + n.search + n.hash
                    },
                    mt = function(e, t, n, r) {
                        var a = dt(e.location.href, e);
                        return {
                            title: n,
                            state: t,
                            prevState: gt(e),
                            to: r || a,
                            from: a
                        }
                    },
                    ht = function(e, t, n, r) {
                        var a = t[n];
                        t[n] = function(o, i, c) {
                            e.leaveBreadcrumb("History " + n, mt(r, o, i, c), "navigation"), "function" === typeof e.resetEventCount && e.resetEventCount(), e._config.autoTrackSessions && e.startSession(), a.apply(t, [o, i].concat(void 0 !== c ? c : []))
                        }
                    },
                    gt = function(e) {
                        try {
                            return e.history.state
                        } catch (t) {}
                    },
                    bt = "request",
                    vt = "BS~~S",
                    yt = "BS~~U",
                    _t = "BS~~M",
                    jt = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = window), {
                            load: function(n) {
                                if (n._config.enabledBreadcrumbTypes && a(n._config.enabledBreadcrumbTypes, "request")) {
                                    var r = [n._config.endpoints.notify, n._config.endpoints.sessions].concat(e);
                                    c(), u();
                                    var o = function(e, t, r) {
                                            var a = {
                                                status: e.status,
                                                request: t + " " + r
                                            };
                                            e.status >= 400 ? n.leaveBreadcrumb("fetch() failed", a, bt) : n.leaveBreadcrumb("fetch() succeeded", a, bt)
                                        },
                                        i = function(e, t) {
                                            n.leaveBreadcrumb("fetch() error", {
                                                request: e + " " + t
                                            }, bt)
                                        }
                                }

                                function c() {
                                    if ("addEventListener" in t.XMLHttpRequest.prototype) {
                                        var e = t.XMLHttpRequest.prototype.open;
                                        t.XMLHttpRequest.prototype.open = function(t, n) {
                                            this[yt] = n, this[_t] = t, this[vt] && (this.removeEventListener("load", s), this.removeEventListener("error", l)), this.addEventListener("load", s), this.addEventListener("error", l), this[vt] = !0, e.apply(this, arguments)
                                        }
                                    }
                                }

                                function s() {
                                    if (!a(r, this[yt])) {
                                        var e = {
                                            status: this.status,
                                            request: this[_t] + " " + this[yt]
                                        };
                                        this.status >= 400 ? n.leaveBreadcrumb("XMLHttpRequest failed", e, bt) : n.leaveBreadcrumb("XMLHttpRequest succeeded", e, bt)
                                    }
                                }

                                function l() {
                                    a(r, this[yt]) || n.leaveBreadcrumb("XMLHttpRequest error", {
                                        request: this[_t] + " " + this[yt]
                                    }, bt)
                                }

                                function u() {
                                    if ("fetch" in t && !t.fetch.polyfill) {
                                        var e = t.fetch;
                                        t.fetch = function() {
                                            var t, n = arguments,
                                                r = arguments[0],
                                                a = arguments[1],
                                                c = null;
                                            return r && "object" === typeof r ? (c = r.url, a && "method" in a ? t = a.method : r && "method" in r && (t = r.method)) : (c = r, a && "method" in a && (t = a.method)), void 0 === t && (t = "GET"), new Promise((function(r, a) {
                                                e.apply(void 0, n).then((function(e) {
                                                    o(e, t, c), r(e)
                                                })).catch((function(e) {
                                                    i(t, c), a(e)
                                                }))
                                            }))
                                        }
                                    }
                                }
                            }
                        }
                    },
                    wt = {
                        load: function(e) {
                            var t = 0;
                            e.addOnError((function(n) {
                                if (t >= e._config.maxEvents) return !1;
                                t++
                            })), e.resetEventCount = function() {
                                t = 0
                            }
                        },
                        configSchema: {
                            maxEvents: {
                                defaultValue: function() {
                                    return 10
                                },
                                message: "should be a positive integer \u2264100",
                                validate: function(e) {
                                    return l(1, 100)(e)
                                }
                            }
                        }
                    },
                    Ot = {},
                    xt = (Ot = {
                        load: function(e) {
                            e.addOnError((function(e) {
                                var t = n(e.errors, (function(e, t) {
                                    return e.concat(t.stacktrace)
                                }), []);
                                h(t, (function(e) {
                                    e.file = xt(e.file)
                                }))
                            }))
                        }
                    })._strip = function(e) {
                        return "string" === typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e
                    },
                    kt = function(e) {
                        return void 0 === e && (e = window), {
                            load: function(t) {
                                if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledExceptions) {
                                    var n = e.onerror;
                                    e.onerror = r
                                }

                                function r(e, r, a, o, i) {
                                    if (0 === a && /Script error\.?/.test(e)) t._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");
                                    else {
                                        var c, s = {
                                            severity: "error",
                                            unhandled: !0,
                                            severityReason: {
                                                type: "unhandledException"
                                            }
                                        };
                                        if (i) c = t.Event.create(i, !0, s, "window onerror", 1), Et(c.errors[0].stacktrace, r, a, o);
                                        else if ("object" !== typeof e || null === e || r && "string" === typeof r || a || o || i) c = t.Event.create(e, !0, s, "window onerror", 1), Et(c.errors[0].stacktrace, r, a, o);
                                        else {
                                            var l = e.type ? "Event: " + e.type : "Error",
                                                u = e.message || e.detail || "";
                                            (c = t.Event.create({
                                                name: l,
                                                message: u
                                            }, !0, s, "window onerror", 1)).originalError = e, c.addMetadata("window onerror", {
                                                event: e,
                                                extraParameters: r
                                            })
                                        }
                                        t._notify(c)
                                    }
                                    "function" === typeof n && n.apply(this, arguments)
                                }
                            }
                        }
                    },
                    Et = function(e, t, n, r) {
                        e[0] || e.push({});
                        var a = e[0];
                        a.file || "string" !== typeof t || (a.file = t), !a.lineNumber && Ct(n) && (a.lineNumber = n), a.columnNumber || (Ct(r) ? a.columnNumber = r : window.event && Ct(window.event.errorCharacter) && (a.columnNumber = window.event.errorCharacter))
                    },
                    Ct = function(e) {
                        return "number" === typeof e && "NaN" !== String.call(e)
                    },
                    St = function(e) {
                        return void 0 === e && (e = window), {
                            load: function(t) {
                                if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledRejections) {
                                    var n = function(e) {
                                        var n = e.reason,
                                            r = !1;
                                        try {
                                            e.detail && e.detail.reason && (n = e.detail.reason, r = !0)
                                        } catch (o) {}
                                        var a = t.Event.create(n, !1, {
                                            severity: "error",
                                            unhandled: !0,
                                            severityReason: {
                                                type: "unhandledPromiseRejection"
                                            }
                                        }, "unhandledrejection handler", 1, t._logger);
                                        r && h(a.errors[0].stacktrace, At(n)), t._notify(a, (function(e) {
                                            var t;
                                            k(e.originalError) && !e.originalError.stack && e.addMetadata("unhandledRejection handler", ((t = {})[Object.prototype.toString.call(e.originalError)] = {
                                                name: e.originalError.name,
                                                message: e.originalError.message,
                                                code: e.originalError.code
                                            }, t))
                                        }))
                                    };
                                    "addEventListener" in e ? e.addEventListener("unhandledrejection", n) : e.onunhandledrejection = function(e, t) {
                                        n({
                                            detail: {
                                                reason: e,
                                                promise: t
                                            }
                                        })
                                    }
                                }
                            }
                        }
                    },
                    At = function(e) {
                        return function(t) {
                            t.file !== e.toString() && t.method && (t.method = t.method.replace(/^\s+/, ""))
                        }
                    },
                    Pt = {},
                    Tt = "Bugsnag JavaScript",
                    Nt = "7.9.0",
                    Lt = "https://github.com/bugsnag/bugsnag-js",
                    Rt = m({}, f.schema, b),
                    Ft = {
                        _client: null,
                        createClient: function(e) {
                            "string" === typeof e && (e = {
                                apiKey: e
                            }), e || (e = {});
                            var t = [Te, Ze(), Ne(), Xe(), wt, $e, et, Ot, kt(), St(), ft(), st(), jt(), tt, ot()],
                                n = new le(e, Rt, t, {
                                    name: Tt,
                                    version: Nt,
                                    url: Lt
                                });
                            return n._setDelivery(window.XDomainRequest ? ke : Se), n._logger.debug("Loaded!"), n._config.autoTrackSessions ? n.startSession() : n
                        },
                        start: function(e) {
                            return Ft._client ? (Ft._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."), Ft._client) : (Ft._client = Ft.createClient(e), Ft._client)
                        }
                    };
                return h(["resetEventCount"].concat(s(le.prototype)), (function(e) {
                    /^_/.test(e) || (Ft[e] = function() {
                        if (!Ft._client) return console.log("Bugsnag." + e + "() was called before Bugsnag.start()");
                        Ft._client._depth += 1;
                        var t = Ft._client[e].apply(Ft._client, arguments);
                        return Ft._client._depth -= 1, t
                    })
                })), (Pt = Ft).Client = le, Pt.Event = D, Pt.Session = ae, Pt.Breadcrumb = y, Pt.default = Ft, Pt
            }()
        },
        AeFk: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "c", (function() {
                return s
            }));
            var r = n("q1tI"),
                a = (n("+1VY"), n("cSFU")),
                o = (n("pVnL"), n("gRFL"), n("2mql"), n("eVQB")),
                i = n("Exhd"),
                c = n("ep+1"),
                s = function(e, t) {
                    var n = arguments;
                    if (null == t || !a.d.call(t, "css")) return r.createElement.apply(void 0, n);
                    var o = n.length,
                        i = new Array(o);
                    i[0] = a.a, i[1] = Object(a.c)(e, t);
                    for (var c = 2; c < o; c++) i[c] = n[c];
                    return r.createElement.apply(null, i)
                },
                l = Object(a.e)((function(e, t) {
                    var n = e.styles,
                        s = Object(i.a)([n], void 0, "function" === typeof n || Array.isArray(n) ? Object(r.useContext)(a.b) : void 0),
                        l = Object(r.useRef)();
                    return Object(r.useLayoutEffect)((function() {
                        var e = t.key + "-global",
                            n = new c.a({
                                key: e,
                                nonce: t.sheet.nonce,
                                container: t.sheet.container,
                                speedy: t.sheet.isSpeedy
                            }),
                            r = document.querySelector('style[data-emotion="' + e + " " + s.name + '"]');
                        return t.sheet.tags.length && (n.before = t.sheet.tags[0]), null !== r && n.hydrate([r]), l.current = n,
                            function() {
                                n.flush()
                            }
                    }), [t]), Object(r.useLayoutEffect)((function() {
                        void 0 !== s.next && Object(o.b)(t, s.next, !0);
                        var e = l.current;
                        if (e.tags.length) {
                            var n = e.tags[e.tags.length - 1].nextElementSibling;
                            e.before = n, e.flush()
                        }
                        t.insert("", s, e, !1)
                    }), [t, s.name]), null
                }));

            function u() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Object(i.a)(t)
            }
        },
        AilD: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("H+61"),
                a = n("UlJF");

            function o(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var c = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Object(r.a)(this, e);
                        var n = t.threshold,
                            a = void 0 === n ? [0, 1] : n,
                            o = t.rootMargin,
                            i = void 0 === o ? "60% 0px" : o;
                        this.listeners = new Map, this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
                            threshold: a,
                            rootMargin: i
                        })
                    }
                    return Object(a.a)(e, [{
                        key: "handleIntersect",
                        value: function(e) {
                            var t, n = o(e);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    if (this.listeners.has(r.target)) this.listeners.get(r.target)(r)
                                }
                            } catch (a) {
                                n.e(a)
                            } finally {
                                n.f()
                            }
                        }
                    }, {
                        key: "observe",
                        value: function(e, t) {
                            var n = this;
                            return this.listeners.has(e) || this.listeners.set(e, t), this.observer.observe(e),
                                function() {
                                    return n.unobserve(e)
                                }
                        }
                    }, {
                        key: "unobserve",
                        value: function(e) {
                            this.listeners.has(e) && this.listeners.delete(e), this.observer.unobserve(e)
                        }
                    }]), e
                }(),
                s = null;

            function l(e) {
                return s || (s = new c(e)), s
            }
        },
        AroE: function(e, t) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        B8du: function(e, t) {
            e.exports = function() {
                return !1
            }
        },
        BJ98: function(e, t, n) {
            var r = n("NBRE")(!0);
            e.exports = r
        },
        BiGR: function(e, t, n) {
            var r = n("nmnc"),
                a = n("03A+"),
                o = n("Z0cm"),
                i = r ? r.isConcatSpreadable : void 0;
            e.exports = function(e) {
                return o(e) || a(e) || !!(i && e && e[i])
            }
        },
        "C+bE": function(e, t) {
            function n(t) {
                return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? e.exports = n = function(e) {
                    return typeof e
                } : e.exports = n = function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(t)
            }
            e.exports = n
        },
        CC3I: function(e, t, n) {
            var r = n("Lc7W");
            e.exports = function(e, t) {
                var n, a = null;
                if (!e || "string" !== typeof e) return a;
                for (var o, i, c = r(e), s = "function" === typeof t, l = 0, u = c.length; l < u; l++) o = (n = c[l]).property, i = n.value, s ? t(o, i, n) : i && (a || (a = {}), a[o] = i);
                return a
            }
        },
        CH3K: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = t.length, a = e.length; ++n < r;) e[a + n] = t[n];
                return e
            }
        },
        CMye: function(e, t, n) {
            var r = n("GoyQ");
            e.exports = function(e) {
                return e === e && !r(e)
            }
        },
        CZoQ: function(e, t) {
            e.exports = function(e, t, n) {
                for (var r = n - 1, a = e.length; ++r < a;)
                    if (e[r] === t) return r;
                return -1
            }
        },
        Cwc5: function(e, t, n) {
            var r = n("NKxu"),
                a = n("Npjl");
            e.exports = function(e, t) {
                var n = a(e, t);
                return r(n) ? n : void 0
            }
        },
        CwyK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return z
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("HJ2n"),
                i = n("VTyt"),
                c = n("HGLm"),
                s = n("AeFk");
            a.a.createElement;

            function l() {
                return Object(s.c)("svg", {
                    width: "111px",
                    height: "22px",
                    viewBox: "0 0 111 22",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Object(s.c)("defs", null, Object(s.c)("radialGradient", {
                    cx: "50%",
                    cy: "54.2297354%",
                    fx: "50%",
                    fy: "54.2297354%",
                    r: "55.7622718%",
                    gradientTransform: "translate(0.500000,0.542297),scale(0.923616,1.000000),rotate(149.072303),scale(1.000000,1.015506),translate(-0.500000,-0.542297)",
                    id: "radialGradient-1"
                }, Object(s.c)("stop", {
                    stopColor: "#FFB900",
                    offset: "0%"
                }), Object(s.c)("stop", {
                    stopColor: "#FA5C86",
                    offset: "74.7090242%"
                }), Object(s.c)("stop", {
                    stopColor: "#F95353",
                    offset: "100%"
                }))), Object(s.c)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd"
                }, Object(s.c)("g", {
                    id: "dots-wrapper"
                }, Object(s.c)("path", {
                    d: "M17.0078833,5.1514375 C17.0078833,7.99677083 14.6998171,10.3034479 11.8525754,10.3034479 C9.00521901,10.3034479 6.69715289,7.99677083 6.69715289,5.1514375 C6.69715289,2.30667708 9.00521901,-1.42108547e-14 11.8525754,-1.42108547e-14 C14.6998171,-1.42108547e-14 17.0078833,2.30667708 17.0078833,5.1514375 L17.0078833,5.1514375 Z M5.15542252,11.5914792 C2.30818079,11.5914792 -2.84217094e-14,13.8974687 -2.84217094e-14,16.7428021 C-2.84217094e-14,19.5879062 2.30818079,21.8943542 5.15542252,21.8943542 C8.00277893,21.8943542 10.3110744,19.5879062 10.3110744,16.7428021 C10.3110744,13.8974687 8.00277893,11.5914792 5.15542252,11.5914792 L5.15542252,11.5914792 Z M18.5496136,11.5910208 C15.7023719,11.5910208 13.3941911,13.8974687 13.3941911,16.7428021 C13.3941911,19.5879062 15.7023719,21.8943542 18.5496136,21.8943542 C21.3968554,21.8943542 23.7050362,19.5879062 23.7050362,16.7428021 C23.7050362,13.8974687 21.3968554,11.5910208 18.5496136,11.5910208 L18.5496136,11.5910208 Z",
                    id: "dots",
                    fill: "url(#radialGradient-1)"
                })), Object(s.c)("g", {
                    id: "Text",
                    transform: "translate(29.240702, 3.322917)",
                    fill: "#273347"
                }, Object(s.c)("path", {
                    d: "M12.6047716,13.3588358 C12.6719933,14.1230851 13.2837343,15.0958717 14.3435813,15.0958717 L14.963696,15.0958717 C15.2040892,15.0958717 15.4011024,14.898965 15.4011024,14.6585597 L15.4011024,1.03059093 L15.3984275,1.03059093 C15.385867,0.801002115 15.1960645,0.617121711 14.963696,0.617121711 L13.042178,0.617121711 C12.8098095,0.617121711 12.620007,0.801002115 12.6070976,1.03059093 L12.6047716,1.03059093 L12.6047716,2.13794408 C11.427461,0.687835996 9.57130394,0.0859504229 7.70991339,0.0859504229 C3.47901512,0.0859504229 0.0491951392,3.51582589 0.0491951392,7.7470524 C0.0491951392,11.9785115 3.47901512,15.4085033 7.70991339,15.4085033 L7.70991339,15.4088522 C9.57130394,15.4088522 11.5998184,14.6867058 12.604539,13.3570912 L12.6047716,13.3588358 L12.6047716,13.3588358 Z M7.71747292,12.7271758 C5.02662674,12.7271758 2.84517703,10.4976985 2.84517703,7.7470524 C2.84517703,4.99687148 5.02662674,2.76727796 7.71747292,2.76727796 C10.4082028,2.76727796 12.5894199,4.99687148 12.5894199,7.7470524 C12.5894199,10.4976985 10.4082028,12.7271758 7.71747292,12.7271758 L7.71747292,12.7271758 Z",
                    id: "Fill-1"
                }), Object(s.c)("path", {
                    d: "M43.9109067,13.3588358 C43.9781284,14.1230851 44.5898694,15.0958717 45.6497165,15.0958717 L46.2698311,15.0958717 C46.5102243,15.0958717 46.7070049,14.898965 46.7070049,14.6585597 L46.7070049,1.03059093 L46.7045626,1.03059093 C46.6920021,0.801002115 46.501967,0.617121711 46.2698311,0.617121711 L44.3483131,0.617121711 C44.1159446,0.617121711 43.9261421,0.801002115 43.9131164,1.03059093 L43.9109067,1.03059093 L43.9109067,2.13794408 C42.7334798,0.687835996 40.8773227,0.0859504229 39.0159322,0.0859504229 C34.7850339,0.0859504229 31.3553303,3.51582589 31.3553303,7.7470524 C31.3553303,11.9785115 34.7850339,15.4085033 39.0159322,15.4085033 L39.0159322,15.4088522 C40.8773227,15.4088522 42.9059535,14.6867058 43.9106741,13.3570912 L43.9109067,13.3588358 L43.9109067,13.3588358 Z M39.0233754,12.7271758 C36.3327619,12.7271758 34.1511958,10.4976985 34.1511958,7.7470524 C34.1511958,4.99687148 36.3327619,2.76727796 39.0233754,2.76727796 C41.7143379,2.76727796 43.8954387,4.99687148 43.8954387,7.7470524 C43.8954387,10.4976985 41.7143379,12.7271758 39.0233754,12.7271758 L39.0233754,12.7271758 Z",
                    id: "Fill-2"
                }), Object(s.c)("path", {
                    d: "M78.907724,13.3588358 C78.9749457,14.1230851 79.5866867,15.0958717 80.6465337,15.0958717 L81.2666483,15.0958717 C81.5070416,15.0958717 81.7041711,14.898965 81.7041711,14.6585597 L81.7041711,1.03059093 L81.7013798,1.03059093 C81.6888194,0.801002115 81.4990169,0.617121711 81.2666483,0.617121711 L79.3451304,0.617121711 C79.1127619,0.617121711 78.9229593,0.801002115 78.9101663,1.03059093 L78.907724,1.03059093 L78.907724,2.13794408 C77.7305296,0.687835996 75.8743726,0.0859504229 74.0129821,0.0859504229 C69.7818512,0.0859504229 66.3521475,3.51582589 66.3521475,7.7470524 C66.3521475,11.9785115 69.7818512,15.4085033 74.0129821,15.4085033 L74.0129821,15.4088522 C75.8743726,15.4088522 77.9027708,14.6867058 78.9074914,13.3570912 L78.907724,13.3588358 L78.907724,13.3588358 Z M74.0204253,12.7271758 C71.3295791,12.7271758 69.1480131,10.4976985 69.1480131,7.7470524 C69.1480131,4.99687148 71.3295791,2.76727796 74.0204253,2.76727796 C76.7111552,2.76727796 78.8924886,4.99687148 78.8924886,7.7470524 C78.8924886,10.4976985 76.7111552,12.7271758 74.0204253,12.7271758 L74.0204253,12.7271758 Z",
                    id: "Fill-3"
                }), Object(s.c)("path", {
                    d: "M63.9229776,13.8274342 L63.9220472,6.77554511 L63.9222798,6.77554511 C63.9222798,2.80042528 61.4144907,0.118748825 57.4156121,0.118748825 C55.5066546,0.118748825 53.9418305,1.22261278 53.3891702,2.17085879 C53.2697295,1.42940555 52.8760521,0.650036419 51.6553614,0.650036419 L51.0331533,0.650036419 C50.7925275,0.650036419 50.5959795,0.847059445 50.5959795,1.08746476 L50.5959795,13.3929135 L50.5959795,13.3947744 L50.5959795,14.7165966 L50.5984218,14.7165966 C50.6109823,14.9458365 50.8010174,15.1299495 51.0333859,15.1299495 L52.9549039,15.1299495 C52.9843279,15.1299495 53.0131705,15.1264603 53.0410826,15.1209939 C53.0537594,15.1185515 53.065622,15.1135503 53.0779499,15.1100611 C53.0922548,15.1056414 53.1071413,15.1022686 53.1207485,15.0966859 C53.1378447,15.0895912 53.1533126,15.080054 53.1692458,15.0712148 C53.177038,15.0664462 53.185179,15.0630733 53.1927385,15.0580721 C53.2119281,15.0457437 53.2294895,15.0308564 53.2464694,15.0156203 C53.2492606,15.0128289 53.2526333,15.010968 53.2554245,15.0084093 C53.2744978,14.9899166 53.2919429,14.969563 53.3074109,14.9483952 L53.3075272,14.9480463 C53.3556756,14.8819843 53.3848671,14.8024307 53.3896354,14.7165966 L53.3920777,14.7165966 L53.3920777,6.66621711 C53.3920777,4.53129699 55.122979,2.80042528 57.2580248,2.80042528 C59.3929543,2.80042528 61.1238556,4.53129699 61.1238556,6.66621711 L61.1256001,13.3952397 L61.1260653,13.3929135 C61.1260653,13.3988452 61.1269957,13.4050094 61.1269957,13.4114063 L61.1269957,14.7165966 L61.1295543,14.7165966 C61.1422311,14.9458365 61.3320336,15.1299495 61.5644021,15.1299495 L63.4860364,15.1299495 C63.5155767,15.1299495 63.544303,15.1264603 63.5720988,15.1209939 C63.5834962,15.1189004 63.5939633,15.1143644 63.6051282,15.1112242 C63.6208287,15.1066882 63.6369945,15.1027338 63.6521136,15.0966859 C63.6678142,15.0901727 63.6821191,15.0811008 63.6970056,15.0727267 C63.706077,15.0676093 63.7156137,15.0638875 63.7243362,15.0580721 C63.7420139,15.0464415 63.758296,15.0323684 63.7742292,15.0184117 C63.7782997,15.0146898 63.7828354,15.0118985 63.7866733,15.0080604 C63.8049325,14.9904981 63.8210983,14.9715402 63.8359848,14.9516518 C63.8370315,14.9501398 63.8381945,14.9489767 63.8393575,14.9474648 C63.8866918,14.8819843 63.9156507,14.8030122 63.9206516,14.7177596 C63.9206516,14.7171781 63.9208842,14.7165966 63.9208842,14.7165966 L63.9234428,14.7165966 L63.9234428,13.8276668 L63.9229776,13.8274342",
                    id: "Fill-4"
                }), Object(s.c)("path", {
                    d: "M19.9917183,11.4069819 C21.2745135,12.295679 22.674656,12.7272921 24.0202536,12.7272921 C25.3021184,12.7272921 26.6273634,12.0627173 26.6273634,10.9060503 C26.6273634,9.36173402 23.7396203,9.12144502 21.9253315,8.50478853 C20.1106938,7.88813205 18.5477305,6.613414 18.5477305,4.54909187 C18.5477305,1.3903266 21.3622042,0.0857178102 23.989085,0.0857178102 C25.6534624,0.0857178102 27.3707566,0.634567669 28.4841019,1.42079887 C28.8675449,1.71133224 28.6340133,2.04489897 28.6340133,2.04489897 L27.5712588,3.56281367 C27.4518181,3.73378407 27.2429423,3.88149319 26.9431194,3.69644972 C26.6432965,3.51152256 25.5917068,2.76716165 23.989085,2.76716165 C22.3863469,2.76716165 21.420936,3.50733553 21.420936,4.42476034 C21.420936,5.52490249 22.6757028,5.870914 24.145393,6.24588581 C26.706564,6.93628055 29.5004525,7.76612664 29.5004525,10.9060503 C29.5004525,13.6891459 26.897297,15.4090848 24.0202536,15.4090848 C21.8399669,15.4090848 19.9836936,14.7875435 18.4268942,13.6450658 C18.1025319,13.3204547 18.3290854,13.0191048 18.3290854,13.0191048 L19.3866065,11.5088663 C19.6017625,11.2264744 19.8730917,11.3249859 19.9917183,11.4069819",
                    id: "Fill-5"
                }))))
            }
            var u = n("usKF"),
                p = (a.a.createElement, function() {
                    return Object(s.c)(a.a.Fragment, null, Object(s.c)("div", {
                        className: "language-selector-wrapper"
                    }, Object(s.c)("label", {
                        className: "language-selector__dropdown-component dropdown-component"
                    }, Object(s.c)("div", {
                        className: "language-select js-language-select"
                    }, Object(s.c)("select", {
                        name: "select"
                    }, Object(s.c)("option", {
                        datalang: "de",
                        value: "de"
                    }, "Deutsch"), Object(s.c)("option", {
                        datalang: "en",
                        value: "en"
                    }, "English"), Object(s.c)("option", {
                        datalang: "es",
                        value: "es"
                    }, "Espa\xf1ol"), Object(s.c)("option", {
                        datalang: "fr",
                        value: "fr"
                    }, "Fran\xe7ais"), Object(s.c)("option", {
                        datalang: "nl",
                        value: "nl"
                    }, "Nederlands"), Object(s.c)("option", {
                        datalang: "pl",
                        value: "pl"
                    }, "Polski"), Object(s.c)("option", {
                        datalang: "pt",
                        value: "pt"
                    }, "Portugu\xeas"), Object(s.c)("option", {
                        datalang: "ru",
                        value: "ru"
                    }, "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"), Object(s.c)("option", {
                        datalang: "ja",
                        value: "ja"
                    }, "\u65e5\u672c\u8a9e"), Object(s.c)("option", {
                        datalang: "zh-tw",
                        value: "zh-tw"
                    }, "\u7e41\u9ad4\u4e2d\u6587")), Object(s.c)("svg", {
                        width: "28px",
                        height: "28px",
                        viewBox: "0 0 19 20",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, Object(s.c)("g", {
                        id: "Laguage-selector-Tests",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, Object(s.c)("g", {
                        id: "Contact-sales_update-mock",
                        transform: "translate(-1082.000000, -552.000000)"
                    }, Object(s.c)("g", {
                        id: "Nav-Copy-3",
                        transform: "translate(60.000000, 534.000000)"
                    }, Object(s.c)("polygon", {
                        id: "Nav-bg",
                        fill: "none",
                        points: "0 0 1440 0 1440 56 0 56"
                    }), Object(s.c)("g", {
                        id: "globe",
                        transform: "translate(1022.000000, 18.500000)",
                        fill: "#6F7782",
                        fillRule: "nonzero"
                    }, Object(s.c)("path", {
                        d: "M9.5,0 C4.275,0 0,4.275 0,9.5 C0,14.725 4.275,19 9.5,19 C14.725,19 19,14.725 19,9.5 C19,4.275 14.725,0 9.5,0 Z M16.98125,5.9375 L13.359375,5.9375 C13.0625,4.096875 12.528125,2.553125 11.815625,1.54375 C14.13125,2.196875 15.971875,3.8 16.98125,5.9375 Z M12.46875,9.5 C12.46875,10.33125 12.409375,11.103125 12.35,11.875 L6.65,11.875 C6.590625,11.103125 6.53125,10.33125 6.53125,9.5 C6.53125,8.66875 6.590625,7.896875 6.65,7.125 L12.35,7.125 C12.409375,7.896875 12.46875,8.66875 12.46875,9.5 Z M9.5,17.8125 C8.490625,17.8125 7.3625,15.971875 6.828125,13.0625 L12.171875,13.0625 C11.6375,15.971875 10.509375,17.8125 9.5,17.8125 Z M6.828125,5.9375 C7.3625,3.028125 8.490625,1.1875 9.5,1.1875 C10.509375,1.1875 11.6375,3.028125 12.171875,5.9375 L6.828125,5.9375 Z M7.184375,1.54375 C6.471875,2.553125 5.9375,4.096875 5.640625,5.9375 L2.01875,5.9375 C3.028125,3.8 4.86875,2.196875 7.184375,1.54375 Z M1.54375,7.125 L5.4625,7.125 C5.403125,7.896875 5.34375,8.66875 5.34375,9.5 C5.34375,10.33125 5.403125,11.103125 5.4625,11.875 L1.54375,11.875 C1.30625,11.103125 1.1875,10.33125 1.1875,9.5 C1.1875,8.66875 1.30625,7.896875 1.54375,7.125 Z M2.01875,13.0625 L5.640625,13.0625 C5.9375,14.903125 6.471875,16.446875 7.184375,17.45625 C4.86875,16.803125 3.028125,15.2 2.01875,13.0625 Z M11.815625,17.45625 C12.528125,16.3875 13.0625,14.903125 13.359375,13.0625 L16.98125,13.0625 C15.971875,15.2 14.13125,16.803125 11.815625,17.45625 Z M17.45625,11.875 L13.5375,11.875 C13.596875,11.103125 13.65625,10.33125 13.65625,9.5 C13.65625,8.66875 13.596875,7.896875 13.5375,7.125 L17.45625,7.125 C17.69375,7.896875 17.8125,8.66875 17.8125,9.5 C17.8125,10.33125 17.69375,11.103125 17.45625,11.875 Z",
                        id: "Shape"
                    }))))))))), Object(s.c)("div", {
                        className: "language-select-separator"
                    }))
                });
            a.a.createElement;

            function f(e) {
                var t = e.homePath,
                    n = Object(r.useContext)(u.a),
                    a = n.global_CTAexploreAsana,
                    o = n.header_navigation_button_class;
                return Object(s.c)("header", {
                    className: "siteHeader -short"
                }, Object(s.c)(c.a, null), Object(s.c)("div", {
                    className: "siteHeader__row"
                }, Object(s.c)("div", {
                    className: "siteHeader__wrapper"
                }, Object(s.c)("div", {
                    className: "siteHeader__nav-group"
                }, Object(s.c)(i.default, {
                    href: t,
                    className: "siteHeader__logo"
                }, Object(s.c)(l, null))), Object(s.c)(p, null), Object(s.c)("div", {
                    className: "siteHeader-buttons"
                }, Object(s.c)(i.default, {
                    href: "/",
                    className: "siteHeader-button button " + o
                }, a)))))
            }
            a.a.createElement;

            function d(e) {
                var t = e.homePath;
                return Object(s.c)(a.a.Fragment, null, Object(s.c)("header", {
                    className: "siteHeader -short"
                }, Object(s.c)(c.a, null), Object(s.c)("div", {
                    className: "siteHeader__row"
                }, Object(s.c)("div", {
                    className: "siteHeader__wrapper"
                }, Object(s.c)("div", {
                    className: "siteHeader__nav-group"
                }, Object(s.c)("span", {
                    className: "siteHeader__logo"
                }, Object(s.c)(i.default, {
                    href: t,
                    className: "siteHeader__logo"
                }, Object(s.c)(l, null))))))))
            }
            var m = n("HALo"),
                h = n("TSYQ"),
                g = n.n(h),
                b = n("//LF");
            a.a.createElement;

            function v() {
                return Object(s.c)("svg", {
                    className: "icon-svg icon-svg--down-caret icon--gray",
                    width: "10",
                    height: "10",
                    viewBox: "0 0 32 32",
                    preserveAspectRatio: "xMinYMin"
                }, Object(s.c)("use", {
                    xlinkHref: "/assets/svg/icons.svg#icon--down-caret"
                }))
            }
            var y = n("4buk"),
                _ = n("r3F2"),
                j = n("76ZC"),
                w = n.n(j);
            a.a.createElement;

            function O(e) {
                var t = e.link_label,
                    n = e.link_icon_notrans,
                    r = e.link_color,
                    a = e.link_summary,
                    o = e.link_url_x,
                    c = e.link_modifiers,
                    l = e.index,
                    u = e.set_size,
                    p = c || [],
                    f = w()(t).toString() || "";
                return Object(s.c)("div", {
                    className: g()("navigation__dropdown__card", r && "navigation__dropdown__card--".concat(r), n && "navigation__dropdown__card--icon", p.map((function(e) {
                        return "navigation__dropdown__card--".concat(e)
                    }))),
                    "aria-describedby": "main-menu-help-1 main-menu-help-2 main-menu-help-3"
                }, n && Object(s.c)(y.a, {
                    icon_notrans: n,
                    icon_color_notrans: r,
                    size: 10
                }), Object(s.c)("div", {
                    className: "navigation__dropdown__card-description"
                }, Object(s.c)(i.default, {
                    href: o,
                    className: "navigation__dropdown__card-link",
                    attribs: {
                        role: "menuitem",
                        tabIndex: -1,
                        "aria-posinset": l + 1,
                        "aria-setsize": u,
                        "aria-describedby": "nav-card-".concat(Object(b.slugify)(f))
                    }
                }, Object(s.c)("h4", {
                    className: "navigation__dropdown__card-label"
                }, Object(s.c)(_.a, {
                    html: t
                }), p.includes("arrow") && Object(s.c)("span", {
                    className: "navigation__dropdown__card__arrow"
                }, Object(s.c)(y.a, {
                    icon_notrans: "arrow-right",
                    size: 20
                })))), a && Object(s.c)("span", {
                    id: "nav-card-".concat(Object(b.slugify)(f)),
                    className: "navigation__dropdown__card-summary"
                }, Object(s.c)(_.a, {
                    html: a
                }))))
            }
            a.a.createElement;

            function x(e) {
                var t = e.template_label,
                    n = e.link_url_x,
                    r = e.template_url_x,
                    a = e.template_icon_notrans,
                    o = e.index,
                    c = e.set_size;
                return Object(s.c)(i.default, {
                    className: g()("navigation__dropdown__template", a ? "navigation__dropdown__template--icon" : ""),
                    href: n || r,
                    attribs: {
                        role: "menuitem",
                        tabIndex: -1,
                        "aria-posinset": o + 1,
                        "aria-setsize": c,
                        "aria-describedby": "main-menu-help-1 main-menu-help-2 main-menu-help-4"
                    }
                }, a && Object(s.c)(y.a, {
                    icon_notrans: a,
                    size: 10
                }), t && Object(s.c)("span", {
                    className: "navigation__dropdown__card-label"
                }, Object(s.c)(_.a, {
                    html: t
                })))
            }
            var k = n("siQn");
            a.a.createElement;

            function E(e) {
                var t = e.link_label,
                    n = e.link_url_x,
                    r = e.link_category,
                    a = e.cta_text,
                    o = e.image,
                    c = e.index,
                    l = e.set_size,
                    u = e.opened;
                return Object(s.c)(i.default, {
                    className: "navigation__dropdown__resource-card",
                    href: n,
                    attribs: {
                        role: "menuitem",
                        tabIndex: -1,
                        "aria-posinset": c + 1,
                        "aria-setsize": l,
                        "aria-describedby": "main-menu-help-1 main-menu-help-2 main-menu-help-3"
                    }
                }, u && Object(s.c)(k.default, {
                    className: "navigation__dropdown__resource-card-image",
                    src: o,
                    no_lazy: !0
                }), Object(s.c)("div", {
                    className: "navigation__dropdown__resource-card-description"
                }, t && Object(s.c)("span", {
                    className: "navigation__dropdown__card-label"
                }, Object(s.c)(_.a, {
                    html: t
                })), Object(s.c)("span", {
                    className: "navigation__dropdown__resource-card-category"
                }, Object(s.c)("span", {
                    className: "sr-only"
                }, ","), r), Object(s.c)("span", {
                    className: "navigation__dropdown__resource-card-cta"
                }, a, Object(s.c)("span", {
                    className: "navigation__dropdown__card__arrow"
                }, Object(s.c)(y.a, {
                    icon_notrans: "arrow-right",
                    size: 20
                })))))
            }
            a.a.createElement;

            function C(e) {
                for (var t = e.section_label, n = e.section_max_column_height, r = e.section_links, a = e.opened, o = t.replace(/\s+/g, ""), i = r.map((function(e, t) {
                        var n = r.length;
                        return Object(s.c)("li", {
                            className: g()("navigation__dropdown__item", {
                                "-first": 0 === t,
                                "-last": t + 1 === n
                            }),
                            role: "presentation",
                            key: t
                        }, "card-link" === e.type && Object(s.c)(O, Object(m.a)({}, e, {
                            key: t,
                            index: t,
                            set_size: n
                        })), "template-link" === e.type && Object(s.c)(x, Object(m.a)({}, e, {
                            key: t,
                            index: t,
                            set_size: n
                        })), "resource-card" === e.type && Object(s.c)(E, Object(m.a)({}, e, {
                            key: t,
                            index: t,
                            set_size: n,
                            opened: a
                        })))
                    })), c = [], l = n ? Math.ceil(i.length / n) : 1, u = 0; u < l; u++) {
                    var p = n || i.length,
                        f = u * p;
                    c.push(Object(s.c)(S, {
                        key: u
                    }, i.slice(f, f + p)))
                }
                return Object(s.c)("div", {
                    className: "navigation__dropdown__section",
                    "aria-labelledby": "navigation__dropdown__column-label-".concat(o),
                    role: "group"
                }, Object(s.c)("h3", {
                    id: "navigation__dropdown__column-label-".concat(o),
                    className: "navigation__dropdown__section-label"
                }, t), Object(s.c)("div", {
                    className: "navigation__dropdown__column-wrapper"
                }, c))
            }

            function S(e) {
                var t = e.children;
                return Object(s.c)("ul", {
                    className: "navigation__dropdown__column",
                    role: "presentation"
                }, t)
            }
            a.a.createElement;

            function A(e) {
                var t = e.dropdown_name,
                    n = e.dropdown_machine_name_notrans,
                    o = e.sections,
                    i = e.featured_sections,
                    c = Object(r.useState)(!1),
                    l = c[0],
                    u = c[1];
                return Object(s.c)(a.a.Fragment, null, Object(s.c)("button", {
                    id: "navigation__dropdown-toggle-".concat(n),
                    "data-nav-dropdown": "navigation__dropdown-".concat(n),
                    "aria-controls": "navigation__dropdown-".concat(n),
                    "aria-haspopup": "true",
                    "aria-expanded": "false",
                    role: "menuitem",
                    className: "navigation__link navigation__link-toggle",
                    onClick: function() {
                        return u(!0)
                    }
                }, Object(s.c)("span", {
                    className: "navigation__link-text"
                }, t, "\xa0", Object(s.c)(v, null))), Object(s.c)("div", {
                    className: "navigation__dropdown",
                    id: "navigation__dropdown-".concat(n)
                }, Object(s.c)("div", {
                    className: "navigation__dropdown__section-list",
                    role: "presentation"
                }, o.map((function(e) {
                    return Object(s.c)(C, Object(m.a)({}, e, {
                        key: e.section_label,
                        opened: l
                    }))
                }))), Object(s.c)("div", {
                    className: "navigation__dropdown__featured-section-list",
                    role: "presentation"
                }, i.map((function(e) {
                    return Object(s.c)(C, Object(m.a)({}, e, {
                        key: e.section_label,
                        opened: l
                    }))
                })))))
            }
            a.a.createElement;

            function P(e) {
                var t = e.footer_links;
                return Object(s.c)(a.a.Fragment, null, t.map((function(e) {
                    var t = e.url_x,
                        n = e.label;
                    return Object(s.c)("li", {
                        className: "navigation__dropdown__footer-list-item",
                        key: n
                    }, Object(s.c)(i.default, {
                        href: t,
                        className: "navigation__dropdown__footer-link"
                    }, n))
                })))
            }
            a.a.createElement;

            function T() {
                var e = Object(r.useContext)(u.a),
                    t = e.global_CTAloginEmail,
                    n = e.global_CTAsignupEmail,
                    a = e.global_CTAgoToAppDesktop,
                    o = e.global_CtaTrialHref,
                    c = e.global_CtaFreeSignupHref;
                return Object(s.c)("div", {
                    className: "horizontalNavigation__mobile-buttons"
                }, Object(s.c)(i.default, {
                    className: "button hidden-logged-in -large -mobile-full hidden-device-mobile",
                    href: o
                }, n), Object(s.c)(i.default, {
                    className: "button hidden-logged-in -large -mobile-full visible-device-mobile",
                    href: c
                }, n), Object(s.c)("a", {
                    className: "button -border hidden-logged-in -large -mobile-full",
                    href: "https://app.asana.com"
                }, t), Object(s.c)("a", {
                    className: "button hidden-logged-out -large -mobile-full",
                    href: "https://app.asana.com"
                }, a))
            }
            a.a.createElement;

            function N(e) {
                var t = e.url_x,
                    n = e.name,
                    r = e.class_notrans;
                return Object(s.c)(i.default, {
                    href: t,
                    className: "navigation__link " + r,
                    attribs: {
                        role: "menuitem"
                    }
                }, Object(s.c)("span", {
                    className: "navigation__link-text"
                }, n))
            }
            var L = n("rOX3"),
                R = n("HZII"),
                F = n.n(R);
            a.a.createElement;

            function I(e) {
                var t = e.homePath,
                    n = Object(L.a)("stickyNavMobile"),
                    f = n.experiment,
                    d = n.activateExperiment,
                    h = Object(r.useState)(!1),
                    v = h[0],
                    y = h[1],
                    _ = F()(d),
                    j = Object(r.useCallback)((function() {
                        _("stickyNavMobile")
                    }), []);
                Object(r.useEffect)((function() {
                    f && (1 === f.variant && y(!0), window.removeEventListener("scroll", j))
                }), [f]), Object(r.useEffect)((function() {
                    return window.addEventListener("scroll", j),
                        function() {
                            window.removeEventListener("scroll", j)
                        }
                }), []);
                var w = Object(r.useContext)(o.a),
                    O = w.header_modifier,
                    x = w.nav_cta_set_plan_tier_onclick_notrans,
                    k = w.onclick_nav_login_notrans,
                    E = w.onclick_nav_cta_notrans,
                    C = Object(r.useContext)(u.a),
                    S = C.header_navigation,
                    R = C.global_CTAloginEmail,
                    I = C.global_CTAcontactSales,
                    M = C.global_CtaContactSalesHref,
                    G = C.global_CtaTrialHref,
                    D = C.global_CTAsignupEmail,
                    z = C.global_CTAgoToAppDesktop,
                    B = C.global_navCtaOnclickSetDefaultPlanTier_notrans;
                return Object(s.c)(a.a.Fragment, null, Object(s.c)("header", {
                    className: g()("siteHeader", O),
                    style: {
                        position: v ? "sticky" : void 0
                    }
                }, Object(s.c)(c.a, null), Object(s.c)("div", {
                    className: "siteHeader__row"
                }, Object(s.c)("div", {
                    className: "siteHeader__wrapper"
                }, Object(s.c)("div", {
                    className: "siteHeader__nav-group"
                }, Object(s.c)(i.default, {
                    href: t,
                    className: "siteHeader__logo"
                }, Object(s.c)(l, null)), Object(s.c)("nav", {
                    className: "horizontalNavigation"
                }, Object(s.c)("h3", {
                    className: "sr-only"
                }, "Navigation Instructions"), Object(s.c)("p", {
                    className: "sr-only"
                }, Object(s.c)("span", {
                    id: "main-menu-help-1"
                }, "Use left and right arrow keys to navigate between columns."), Object(s.c)("span", {
                    id: "main-menu-help-2"
                }, "Use up and down arrow keys to move between submenu items."), Object(s.c)("span", {
                    id: "main-menu-help-3"
                }, "Use Escape to close the menu.")), Object(s.c)("ul", {
                    className: "horizontalNavigation__list",
                    role: "group"
                }, S.map((function(e, t) {
                    return Object(s.c)("li", {
                        className: "horizontalNavigation__list-item",
                        key: t
                    }, "dropdown" === e.type && Object(s.c)(A, e), "link" === e.type && Object(s.c)(N, e))
                }))), Object(s.c)(T, null), Object(s.c)("div", {
                    className: "navigation__link-indicator",
                    style: {
                        transition: "none",
                        transform: "translateX(0) scale(0)"
                    }
                }))), Object(s.c)("div", {
                    className: "siteHeader__nav-group"
                }, Object(s.c)(p, null), Object(s.c)(i.default, {
                    href: M,
                    className: "navigation__link navigation__contact-sales contact-sales"
                }, Object(s.c)("span", {
                    className: "navigation__link-text contact-sales__text"
                }, I), Object(s.c)("span", {
                    className: "navigation__link-icon contact-sales__icon"
                }, Object(s.c)("svg", {
                    height: "20",
                    viewBox: "0 0 19 20",
                    width: "19",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Object(s.c)("path", {
                    d: "m15.4375 2.375h-11.875c-1.959375 0-3.5625 1.603125-3.5625 3.5625v7.125c0 1.959375 1.603125 3.5625 3.5625 3.5625h11.875c1.959375 0 3.5625-1.603125 3.5625-3.5625v-7.125c0-1.959375-1.603125-3.5625-3.5625-3.5625zm0 1.1875c.415625 0 .83125.11875 1.1875.35625l-6.709375 6.709375c-.2375.2375-.59375.2375-.83125 0l-6.709375-6.709375c.35625-.2375.771875-.35625 1.1875-.35625zm2.375 9.5c0 1.30625-1.06875 2.375-2.375 2.375h-11.875c-1.30625 0-2.375-1.06875-2.375-2.375v-7.125c0-.415625.11875-.83125.35625-1.1875l6.709375 6.709375c.35625.35625.771875.534375 1.246875.534375s.95-.178125 1.246875-.534375l6.709375-6.709375c.2375.35625.35625.771875.35625 1.1875z",
                    transform: "translate(0 .5)",
                    fill: "#6f7782"
                })))), Object(s.c)(i.default, {
                    className: "navigation__link navigation__sign-in hidden-logged-in sign-in",
                    href: "https://app.asana.com/-/login",
                    onClick: Object(b.stringsToFunction)(k)
                }, Object(s.c)("span", {
                    className: "navigation__link-text sign-in__text"
                }, R), Object(s.c)("span", {
                    className: "navigation__link-icon sign-in__icon"
                }, Object(s.c)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Object(s.c)("path", {
                    d: "M10 0C15.5227 0 20 4.47732 20 10C20 15.5227 15.5227 20 10 20C4.47732 20 0 15.5227 0 10C0 4.47732 4.47732 0 10 0ZM12.4155 14.0711H7.58454C6.30251 14.0711 5.26741 14.9891 5.18337 16.1315L5.17786 16.2818L5.17775 17.3319C6.56156 18.2439 8.21882 18.7747 10 18.7747C11.7816 18.7747 13.4392 18.2437 14.8232 17.3313L14.8221 16.2818C14.8221 15.0706 13.7532 14.0711 12.4155 14.0711ZM10 1.2253C5.15403 1.2253 1.2253 5.15403 1.2253 10C1.2253 12.5021 2.27267 14.7597 3.95289 16.3582L3.95257 16.2818C3.95257 14.4364 5.48397 12.9449 7.39248 12.8506L7.58454 12.8458H12.4155C14.3478 12.8458 15.9416 14.2778 16.0424 16.0984L16.0474 16.2818L16.0481 16.3572C17.7277 14.7588 18.7747 12.5016 18.7747 10C18.7747 5.15403 14.846 1.2253 10 1.2253ZM10.1186 2.96443C12.6394 2.96443 14.6838 5.00881 14.6838 7.52964C14.6838 10.0505 12.6394 12.0949 10.1186 12.0949C7.59774 12.0949 5.55336 10.0505 5.55336 7.52964C5.55336 5.00881 7.59774 2.96443 10.1186 2.96443ZM10.1186 4.18972C8.27446 4.18972 6.77866 5.68552 6.77866 7.52964C6.77866 9.37376 8.27446 10.8696 10.1186 10.8696C11.9627 10.8696 13.4585 9.37376 13.4585 7.52964C13.4585 5.68552 11.9627 4.18972 10.1186 4.18972Z",
                    fill: "#6F7782"
                })))), Object(s.c)("div", {
                    className: "siteHeader-buttons hidden-device-mobile"
                }, Object(s.c)(i.default, {
                    onClick: Object(b.stringsToFunction)("".concat(E || "", ";").concat(x || B)),
                    href: G,
                    className: "siteHeader-button button hidden-logged-in"
                }, D), Object(s.c)(i.default, {
                    className: "button visible-logged-in",
                    href: "https://app.asana.com"
                }, z))), Object(s.c)("button", {
                    className: "mobileNav-wrapper",
                    id: "mobileNavToggle"
                }, Object(s.c)("span", {
                    className: "mobileNav-toggle"
                })))), Object(s.c)("div", {
                    className: "navigation__dropdown__wrapper"
                }, Object(s.c)("div", {
                    className: "navigation__dropdown__footer"
                }, Object(s.c)("ul", {
                    className: "navigation__dropdown__footer-list"
                }, S.filter((function(e) {
                    return "footer-link" === e.type
                })).map((function(e, t) {
                    return Object(s.c)(P, Object(m.a)({}, e, {
                        key: t
                    }))
                })))), Object(s.c)("div", {
                    className: "navigation__dropdown__featured-background"
                })), Object(s.c)("div", {
                    className: "navigation__scrim"
                })))
            }
            var M = n("g4pe"),
                G = n.n(M),
                D = n("SRXQ");
            a.a.createElement;

            function z() {
                var e, t = Object(r.useContext)(o.a),
                    n = t.header_navigation_short,
                    i = t.header_navigation_medium,
                    c = Object(r.useContext)(u.a).global_language,
                    l = "en" === c ? "/?noredirect" : "/".concat(c, "/?noredirect");
                return e = n ? d : i ? f : I, Object(s.c)(a.a.Fragment, null, Object(s.c)(e, {
                    homePath: l
                }), Object(s.c)(G.a, null, Object(s.c)("script", {
                    src: Object(D.a)("js/page-specific/header.js"),
                    key: "header"
                })))
            }
        },
        DSRE: function(e, t, n) {
            (function(e) {
                var r = n("Kz5y"),
                    a = n("B8du"),
                    o = t && !t.nodeType && t,
                    i = o && "object" == typeof e && e && !e.nodeType && e,
                    c = i && i.exports === o ? r.Buffer : void 0,
                    s = (c ? c.isBuffer : void 0) || a;
                e.exports = s
            }).call(this, n("LY0y")(e))
        },
        DYRV: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = {
                GOLD_1: "#FFFEDE",
                GOLD_2: "#FFF78F",
                GOLD_3: "#FFE01B",
                GOLD_4: "#FCVD01",
                GOLD_5: "#F2A100",
                GREEN_1: "#E2FFFA",
                GREEN_2: "#B0FFF1",
                GREEN_3: "#58F5D9",
                GREEN_4: "#25E8C8",
                GREEN_5: "#00BF9C",
                TEAL_1: "#EDF8FF",
                TEAL_2: "#CAEEFF",
                TEAL_3: "#32C1FF",
                TEAL_4: "#14AAF5",
                TEAL_5: "#008CE3",
                PURPLE_1: "#F0F0FF",
                PURPLE_2: "#ABA3FF",
                PURPLE_3: "#9287FF",
                PURPLE_4: "#796EFF",
                PURPLE_5: "#635AC7",
                CORAL_1: "#FFEDEF",
                CORAL_2: "#FF9CA5",
                CORAL_3: "#FF7381",
                CORAL_4: "#FF5263",
                CORAL_5: "#ED4758",
                GRAY_1: "#F6F8F9",
                GRAY_2: "#EDF1F2",
                GRAY_3: "#E0E6E8",
                GRAY_4: "#CBD4DB",
                GRAY_5: "#B7BFC6",
                GRAY_6: "#9CA6AF",
                GRAY_7: "#848F99",
                GRAY_8: "#646F79",
                GRAY_9: "#273240",
                GRAY_10: "#151B26"
            }
        },
        DZdY: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                a = n("q1tI"),
                o = n("SVgp"),
                i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                c = Object(o.a)((function(e) {
                    return i.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
                })),
                s = n("cSFU"),
                l = n("eVQB"),
                u = n("Exhd"),
                p = c,
                f = function(e) {
                    return "theme" !== e
                },
                d = function(e) {
                    return "string" === typeof e && e.charCodeAt(0) > 96 ? p : f
                },
                m = function(e, t, n) {
                    var r;
                    if (t) {
                        var a = t.shouldForwardProp;
                        r = e.__emotion_forwardProp && a ? function(t) {
                            return e.__emotion_forwardProp(t) && a(t)
                        } : a
                    }
                    return "function" !== typeof r && n && (r = e.__emotion_forwardProp), r
                };
            t.a = function e(t, n) {
                var o, i, c = t.__emotion_real === t,
                    p = c && t.__emotion_base || t;
                void 0 !== n && (o = n.label, i = n.target);
                var f = m(t, n, c),
                    h = f || d(p),
                    g = !h("as");
                return function() {
                    var b = arguments,
                        v = c && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                    if (void 0 !== o && v.push("label:" + o + ";"), null == b[0] || void 0 === b[0].raw) v.push.apply(v, b);
                    else {
                        0,
                        v.push(b[0][0]);
                        for (var y = b.length, _ = 1; _ < y; _++) v.push(b[_], b[0][_])
                    }
                    var j = Object(s.e)((function(e, t, n) {
                        var r = g && e.as || p,
                            o = "",
                            c = [],
                            m = e;
                        if (null == e.theme) {
                            for (var b in m = {}, e) m[b] = e[b];
                            m.theme = Object(a.useContext)(s.b)
                        }
                        "string" === typeof e.className ? o = Object(l.a)(t.registered, c, e.className) : null != e.className && (o = e.className + " ");
                        var y = Object(u.a)(v.concat(c), t.registered, m);
                        Object(l.b)(t, y, "string" === typeof r);
                        o += t.key + "-" + y.name, void 0 !== i && (o += " " + i);
                        var _ = g && void 0 === f ? d(r) : h,
                            j = {};
                        for (var w in e) g && "as" === w || _(w) && (j[w] = e[w]);
                        return j.className = o, j.ref = n, Object(a.createElement)(r, j)
                    }));
                    return j.displayName = void 0 !== o ? o : "Styled(" + ("string" === typeof p ? p : p.displayName || p.name || "Component") + ")", j.defaultProps = t.defaultProps, j.__emotion_real = j, j.__emotion_base = p, j.__emotion_styles = v, j.__emotion_forwardProp = f, Object.defineProperty(j, "toString", {
                        value: function() {
                            return "." + i
                        }
                    }), j.withComponent = function(t, a) {
                        return e(t, Object(r.a)({}, n, {}, a, {
                            shouldForwardProp: m(j, a, !0)
                        })).apply(void 0, v)
                    }, j
                }
            }
        },
        "Dw+G": function(e, t, n) {
            var r = n("juv8"),
                a = n("mTTR");
            e.exports = function(e, t) {
                return e && r(t, a(t), e)
            }
        },
        "E+oP": function(e, t, n) {
            var r = n("A90E"),
                a = n("QqLw"),
                o = n("03A+"),
                i = n("Z0cm"),
                c = n("MMmD"),
                s = n("DSRE"),
                l = n("6sVZ"),
                u = n("c6wG"),
                p = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (null == e) return !0;
                if (c(e) && (i(e) || "string" == typeof e || "function" == typeof e.splice || s(e) || u(e) || o(e))) return !e.length;
                var t = a(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if (l(e)) return !r(e).length;
                for (var n in e)
                    if (p.call(e, n)) return !1;
                return !0
            }
        },
        E2jh: function(e, t, n) {
            var r = n("2gN3"),
                a = function() {
                    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!a && a in e
            }
        },
        EA7m: function(e, t, n) {
            var r = n("zZ0H"),
                a = n("Ioao"),
                o = n("wclG");
            e.exports = function(e, t) {
                return o(a(e, t, r), e + "")
            }
        },
        EEGq: function(e, t, n) {
            var r = n("juv8"),
                a = n("oCl/");
            e.exports = function(e, t) {
                return r(e, a(e), t)
            }
        },
        ERuW: function(e, t, n) {
            var r = n("JbSc"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", n = r[t], o = a.call(r, t) ? n.length : 0; o--;) {
                    var i = n[o],
                        c = i.func;
                    if (null == c || c == e) return i.name
                }
                return t
            }
        },
        EZyT: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return s
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("PMiD"),
                c = n("AeFk");
            o.a.createElement;

            function s(e) {
                return e.arbitrary.components = Array.isArray(e.arbitrary) ? e.arbitrary : e.arbitrary.components, e.arbitrary && e.arbitrary.components ? e.arbitrary.components.map((function(e, t) {
                    var n = Object.keys(e).find((function(e) {
                            return "partial_notrans" !== e
                        })),
                        a = Array.isArray(e[n]) ? e[n].length > 1 ? e[n] : e[n][0] : e[n];
                    return Object(c.c)(i.a, Object(r.a)({
                        componentName: e.partial_notrans
                    }, a, {
                        key: t
                    }))
                })) : null
            }
        },
        Ehu6: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("r3F2"),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("AeFk");
            a.a.createElement;
            t.a = function(e) {
                var t = Object(r.useRef)(),
                    n = e.class_notrans,
                    a = e.dataAttr,
                    i = e.text;
                return a && a.forEach((function(e) {
                    t.dataset[e.name] = e.value
                })), Object(s.c)("p", {
                    className: c()("subheading", n),
                    ref: t
                }, i && Object(s.c)(o.a, {
                    html: i
                }))
            }
        },
        EldB: function(e, t, n) {
            var r = n("dTAl"),
                a = n("GoyQ");
            e.exports = function(e) {
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new e(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var n = r(e.prototype),
                        o = e.apply(n, t);
                    return a(o) ? o : n
                }
            }
        },
        EpBk: function(e, t) {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        },
        ExA7: function(e, t) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        Exhd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var r = function(e) {
                    for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                    switch (a) {
                        case 3:
                            n ^= (255 & e.charCodeAt(r + 2)) << 16;
                        case 2:
                            n ^= (255 & e.charCodeAt(r + 1)) << 8;
                        case 1:
                            n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
                    }
                    return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
                },
                a = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                },
                o = n("SVgp"),
                i = /[A-Z]|^ms/g,
                c = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                s = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                l = function(e) {
                    return null != e && "boolean" !== typeof e
                },
                u = Object(o.a)((function(e) {
                    return s(e) ? e : e.replace(i, "-$&").toLowerCase()
                })),
                p = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" === typeof t) return t.replace(c, (function(e, t, n) {
                                return d = {
                                    name: t,
                                    styles: n,
                                    next: d
                                }, t
                            }))
                    }
                    return 1 === a[e] || s(e) || "number" !== typeof t || 0 === t ? t : t + "px"
                };

            function f(e, t, n) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (typeof n) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === n.anim) return d = {
                            name: n.name,
                            styles: n.styles,
                            next: d
                        }, n.name;
                        if (void 0 !== n.styles) {
                            var r = n.next;
                            if (void 0 !== r)
                                for (; void 0 !== r;) d = {
                                    name: r.name,
                                    styles: r.styles,
                                    next: d
                                }, r = r.next;
                            return n.styles + ";"
                        }
                        return function(e, t, n) {
                            var r = "";
                            if (Array.isArray(n))
                                for (var a = 0; a < n.length; a++) r += f(e, t, n[a]) + ";";
                            else
                                for (var o in n) {
                                    var i = n[o];
                                    if ("object" !== typeof i) null != t && void 0 !== t[i] ? r += o + "{" + t[i] + "}" : l(i) && (r += u(o) + ":" + p(o, i) + ";");
                                    else if (!Array.isArray(i) || "string" !== typeof i[0] || null != t && void 0 !== t[i[0]]) {
                                        var c = f(e, t, i);
                                        switch (o) {
                                            case "animation":
                                            case "animationName":
                                                r += u(o) + ":" + c + ";";
                                                break;
                                            default:
                                                r += o + "{" + c + "}"
                                        }
                                    } else
                                        for (var s = 0; s < i.length; s++) l(i[s]) && (r += u(o) + ":" + p(o, i[s]) + ";")
                                }
                            return r
                        }(e, t, n);
                    case "function":
                        if (void 0 !== e) {
                            var a = d,
                                o = n(e);
                            return d = a, f(e, t, o)
                        }
                        break;
                    case "string":
                }
                if (null == t) return n;
                var i = t[n];
                return void 0 !== i ? i : n
            }
            var d, m = /label:\s*([^\s;\n{]+)\s*;/g;
            var h = function(e, t, n) {
                if (1 === e.length && "object" === typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                var a = !0,
                    o = "";
                d = void 0;
                var i = e[0];
                null == i || void 0 === i.raw ? (a = !1, o += f(n, t, i)) : o += i[0];
                for (var c = 1; c < e.length; c++) o += f(n, t, e[c]), a && (o += i[c]);
                m.lastIndex = 0;
                for (var s, l = ""; null !== (s = m.exec(o));) l += "-" + s[1];
                return {
                    name: r(o) + l,
                    styles: o,
                    next: d
                }
            }
        },
        F3Dj: function(e, t) {
            e.exports = {
                CASE_SENSITIVE_TAG_NAMES: ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussainBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"]
            }
        },
        F6Xs: function(e, t, n) {
            "use strict";
            var r = n("HALo"),
                a = n("dhJC"),
                o = n("q1tI"),
                i = n.n(o),
                c = n("76ZC"),
                s = n.n(c),
                l = n("PMiD"),
                u = n("VTyt"),
                p = n("QQ8Z"),
                f = n("AeFk");
            i.a.createElement;

            function d(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return m(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e) {
                var t = e.body;
                if (!Array.isArray(t)) return "string" === typeof t ? Object(f.c)("p", null, "body") : null;
                var n, o = "",
                    i = d(t);
                try {
                    var m = function() {
                        var e = n.value;
                        if (e.type === p.IGNORE) return "continue";
                        if (e.type === p.HTML && (o += e.value), e.type === p.COMPONENT) {
                            var t = Object.keys(e.props).map((function(t) {
                                return "".concat(t, '="').concat(e.props[t], '"')
                            })).join(" ");
                            o += "<".concat(e.tag || "div", ' class="').concat(p.COMPONENT, '" name="').concat(e.name, '" ').concat(t, " ></").concat(e.tag || "div", ">")
                        }
                    };
                    for (i.s(); !(n = i.n()).done;) m()
                } catch (h) {
                    i.e(h)
                } finally {
                    i.f()
                }
                return s()(o, {
                    replace: function(e) {
                        var t = e.attribs,
                            n = e.children;
                        if (t && t.class === p.COMPONENT) {
                            var o = t.name,
                                i = Object(a.a)(t, ["name"]);
                            return Object(f.c)(l.a, Object(r.a)({
                                componentName: o
                            }, i))
                        }
                        if (t && t.href) {
                            var s = Object(c.attributesToProps)(t);
                            return Object(f.c)(u.default, {
                                attribs: s
                            }, Object(c.domToReact)(n))
                        }
                    }
                })
            }
            t.a = Object(o.memo)(h)
        },
        FYa8: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.HeadManagerContext = void 0;
            var a = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.HeadManagerContext = a
        },
        FlQR: function(e, t, n) {
            (function(t) {
                e.exports = {
                    isSandbox: "sandbox" === t.env.NEXT_PUBLIC_ENV,
                    isDevelopment: "development" === t.env.NEXT_PUBLIC_ENV,
                    isStaging: "staging" === t.env.NEXT_PUBLIC_ENV,
                    isTest: "test" === t.env.NEXT_PUBLIC_ENV,
                    isProduction: "production" === t.env.NEXT_PUBLIC_ENV,
                    isDark: "dark" === t.env.NEXT_PUBLIC_ENV,
                    isQaEnv: "sandbox" === t.env.NEXT_PUBLIC_ENV || "development" === t.env.NEXT_PUBLIC_ENV
                }
            }).call(this, n("8oxB"))
        },
        G6z8: function(e, t, n) {
            var r = n("fR/l"),
                a = n("oCl/"),
                o = n("mTTR");
            e.exports = function(e) {
                return r(e, o, a)
            }
        },
        GDhZ: function(e, t, n) {
            var r = n("wF/u"),
                a = n("mwIZ"),
                o = n("hgQt"),
                i = n("9ggG"),
                c = n("CMye"),
                s = n("IOzZ"),
                l = n("9Nap");
            e.exports = function(e, t) {
                return i(e) && c(t) ? s(l(e), t) : function(n) {
                    var i = a(n, e);
                    return void 0 === i && i === t ? o(n, e) : r(t, i, 3)
                }
            }
        },
        GNiM: function(e, t, n) {
            var r = n("I01J"),
                a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                o = /\\(\\)?/g,
                i = r((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(a, (function(e, n, r, a) {
                        t.push(r ? a.replace(o, "$1") : n || e)
                    })), t
                }));
            e.exports = i
        },
        Gi0A: function(e, t, n) {
            var r = n("QqLw"),
                a = n("ExA7");
            e.exports = function(e) {
                return a(e) && "[object Map]" == r(e)
            }
        },
        GkXj: function(e, t, n) {
            var r = n("q1tI"),
                a = n("qpZ2"),
                o = n("MHQ9"),
                i = o.setStyleProp;

            function c(e) {
                return o.PRESERVE_CUSTOM_ATTRIBUTES && "tag" === e.type && o.isCustomComponent(e.name, e.attribs)
            }
            e.exports = function e(t, n) {
                for (var o, s, l, u, p = (n = n || {}).library || r, f = p.cloneElement, d = p.createElement, m = p.isValidElement, h = [], g = "function" === typeof n.replace, b = n.trim, v = 0, y = t.length; v < y; v++)
                    if (o = t[v], g && m(s = n.replace(o))) y > 1 && (s = f(s, {
                        key: s.key || v
                    })), h.push(s);
                    else if ("text" !== o.type) {
                    switch (l = o.attribs, c(o) ? i(l.style, l) : l && (l = a(l)), u = null, o.type) {
                        case "script":
                        case "style":
                            o.children[0] && (l.dangerouslySetInnerHTML = {
                                __html: o.children[0].data
                            });
                            break;
                        case "tag":
                            "textarea" === o.name && o.children[0] ? l.defaultValue = o.children[0].data : o.children && o.children.length && (u = e(o.children, n));
                            break;
                        default:
                            continue
                    }
                    y > 1 && (l.key = v), h.push(d(o.name, l, u))
                } else b ? o.data.trim() && h.push(o.data) : h.push(o.data);
                return 1 === h.length ? h[0] : h
            }
        },
        GoyQ: function(e, t) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        "H+61": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        H8j4: function(e, t, n) {
            var r = n("QkVE");
            e.exports = function(e, t) {
                var n = r(this, e),
                    a = n.size;
                return n.set(e, t), this.size += n.size == a ? 0 : 1, this
            }
        },
        HALo: function(e, t, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        HDyB: function(e, t, n) {
            var r = n("nmnc"),
                a = n("JHRd"),
                o = n("ljhN"),
                i = n("or5M"),
                c = n("7fqy"),
                s = n("rEGp"),
                l = r ? r.prototype : void 0,
                u = l ? l.valueOf : void 0;
            e.exports = function(e, t, n, r, l, p, f) {
                switch (n) {
                    case "[object DataView]":
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                        e = e.buffer, t = t.buffer;
                    case "[object ArrayBuffer]":
                        return !(e.byteLength != t.byteLength || !p(new a(e), new a(t)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return o(+e, +t);
                    case "[object Error]":
                        return e.name == t.name && e.message == t.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return e == t + "";
                    case "[object Map]":
                        var d = c;
                    case "[object Set]":
                        var m = 1 & r;
                        if (d || (d = s), e.size != t.size && !m) return !1;
                        var h = f.get(e);
                        if (h) return h == t;
                        r |= 2, f.set(e, t);
                        var g = i(d(e), d(t), r, l, p, f);
                        return f.delete(e), g;
                    case "[object Symbol]":
                        if (u) return u.call(e) == u.call(t)
                }
                return !1
            }
        },
        HGLm: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return k
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("TYy9"),
                c = n.n(i),
                s = n("v8eK"),
                l = n.n(s),
                u = n("VTyt"),
                p = n("r3F2"),
                f = n("TSYQ"),
                d = n.n(f),
                m = n("76ZC"),
                h = n.n(m),
                g = n("AeFk"),
                b = (o.a.createElement, function(e) {
                    var t = e.topbar_id_notrans,
                        n = e.topbar_name_notrans,
                        r = e.topbar_value_notrans,
                        a = e.topbar_link,
                        o = e.topbar_link_text,
                        i = e.topbar_text;
                    return Object(g.c)("div", {
                        id: t,
                        "aria-hidden": "false",
                        "data-topbar-name": n,
                        "data-topbar-value": r,
                        className: "topbar"
                    }, Object(g.c)("span", {
                        className: "topbar-text"
                    }, i && "".concat(h()(i), " "), Object(g.c)(u.default, {
                        href: a || "",
                        open_in_tab: !0,
                        className: "-white"
                    }, o && Object(g.c)(p.a, {
                        html: o
                    }))), Object(g.c)("a", {
                        className: "topbar-icon icon icon--x gtm--cookie-notification-dismissed"
                    }))
                }),
                v = n("g4pe"),
                y = n.n(v),
                _ = n("SRXQ"),
                j = n("//LF"),
                w = (o.a.createElement, function(e) {
                    var t = e.announcement_topbar_dismiss_id_notrans,
                        n = e.announcement_topbar_dismiss_tracking_notrans,
                        r = e.announcement_topbar_cta_tracking_notrans,
                        a = e.announcement_topbar_link,
                        i = e.announcement_topbar_text,
                        c = e.announcement_topbar_bg_color,
                        s = e.announcement_darkmode_notrans,
                        l = e.announcement_topbar_cta_text;
                    return Object(g.c)(o.a.Fragment, null, Object(g.c)("div", {
                        id: t,
                        className: d()("announcement-topbar", {
                            "-dark-mode": s
                        }, c && "-".concat(c))
                    }, Object(g.c)("span", {
                        className: "announcement-topbar-text"
                    }, Object(g.c)(p.a, {
                        html: "".concat(i, " ")
                    }), Object(g.c)(u.default, {
                        href: a,
                        rel: "noreferrer",
                        className: "-white ".concat(r)
                    }, l)), Object(g.c)("a", {
                        className: "announcement-topbar-icon icon icon--x ".concat(n),
                        onClick: Object(j.stringsToFunction)("announcementTopbar.dismissAnnouncementTopbar()")
                    })), Object(g.c)(y.a, null, Object(g.c)("script", {
                        src: Object(_.a)("js/page-specific/announcement-topbar.js"),
                        key: "announcement-topbar"
                    })))
                }),
                O = n("HJ2n"),
                x = n("usKF");
            o.a.createElement;

            function k() {
                var e = Object(a.useContext)(O.a).topbar,
                    t = Object(a.useContext)(x.a).topbar,
                    n = e ? l()(c()([e, t]), (function(e) {
                        return e.topbar_id_notrans
                    })) : t,
                    i = Object(a.useContext)(O.a),
                    s = i.announcement_topbar,
                    u = {
                        announcement_topbar_dismiss_id_notrans: i.announcement_topbar_dismiss_id_notrans,
                        announcement_topbar_dismiss_tracking_notrans: i.announcement_topbar_dismiss_tracking_notrans,
                        announcement_topbar_cta_tracking_notrans: i.announcement_topbar_cta_tracking_notrans,
                        announcement_topbar_link: i.announcement_topbar_link,
                        announcement_topbar_text: i.announcement_topbar_text,
                        announcement_topbar_bg_color: i.announcement_topbar_bg_color,
                        announcement_darkmode_notrans: i.announcement_darkmode_notrans,
                        announcement_topbar_cta_text: i.announcement_topbar_cta_text
                    };
                return Object(g.c)(o.a.Fragment, null, s && Object(g.c)(w, u), n && n.map((function(e, t) {
                    return Object(g.c)(b, Object(r.a)({}, e, {
                        key: t
                    }))
                })))
            }
        },
        HJ2n: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r).a.createContext({});
            t.a = a
        },
        HOxn: function(e, t, n) {
            var r = n("Cwc5")(n("Kz5y"), "Promise");
            e.exports = r
        },
        HZII: function(e, t, n) {
            var r = n("4O/9");
            e.exports = function(e) {
                return r(2, e)
            }
        },
        Hvzi: function(e, t) {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }
        },
        I01J: function(e, t, n) {
            var r = n("44Ds");
            e.exports = function(e) {
                var t = r(e, (function(e) {
                        return 500 === n.size && n.clear(), e
                    })),
                    n = t.cache;
                return t
            }
        },
        IOzZ: function(e, t) {
            e.exports = function(e, t) {
                return function(n) {
                    return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
                }
            }
        },
        Ig5p: function(e, t, n) {
            e.exports = {
                ary: n("v8vJ"),
                assign: n("WwFo"),
                clone: n("uM7l"),
                curry: n("3EZw"),
                forEach: n("gFfm"),
                isArray: n("Z0cm"),
                isError: n("PtqM"),
                isFunction: n("lSCD"),
                isWeakMap: n("gz5L"),
                iteratee: n("cWj/"),
                keys: n("A90E"),
                rearg: n("be4H"),
                toInteger: n("Sxd8"),
                toPath: n("0Bgb")
            }
        },
        Ioao: function(e, t, n) {
            var r = n("heNW"),
                a = Math.max;
            e.exports = function(e, t, n) {
                return t = a(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var o = arguments, i = -1, c = a(o.length - t, 0), s = Array(c); ++i < c;) s[i] = o[t + i];
                        i = -1;
                        for (var l = Array(t + 1); ++i < t;) l[i] = o[i];
                        return l[t] = n(s), r(e, this, l)
                    }
            }
        },
        JC6p: function(e, t, n) {
            var r = n("cq/+"),
                a = n("7GkX");
            e.exports = function(e, t) {
                return e && r(e, t, a)
            }
        },
        JHRd: function(e, t, n) {
            var r = n("Kz5y").Uint8Array;
            e.exports = r
        },
        JHgL: function(e, t, n) {
            var r = n("QkVE");
            e.exports = function(e) {
                return r(this, e).get(e)
            }
        },
        JSQU: function(e, t, n) {
            var r = n("YESw");
            e.exports = function(e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }
        },
        JTzB: function(e, t, n) {
            var r = n("NykK"),
                a = n("ExA7");
            e.exports = function(e) {
                return a(e) && "[object Arguments]" == r(e)
            }
        },
        JbSc: function(e, t) {
            e.exports = {}
        },
        JeIt: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("sJyK"),
                a = n("7s/w");

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = Object(a.b)("user_geo"),
                    n = t.cookieValue,
                    o = t.cookieState;
                return o === a.a.UNREAD ? e : n || r.DEFAULT_LOCALE
            }
        },
        Juji: function(e, t) {
            e.exports = function(e, t) {
                return null != e && t in Object(e)
            }
        },
        KF6i: function(e, t, n) {
            var r = n("a5q3"),
                a = n("vN+2"),
                o = r ? function(e) {
                    return r.get(e)
                } : a;
            e.exports = o
        },
        KMkd: function(e, t) {
            e.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        KckH: function(e, t, n) {
            var r = n("7eYB");
            e.exports = function(e, t) {
                if (e) {
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }
            }
        },
        KdsC: function(e, t, n) {
            var r = n("48fX"),
                a = n("tCBg"),
                o = n("T0f4"),
                i = n("/GRZ"),
                c = n("i2R6");

            function s(e) {
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
                    var n, r = o(e);
                    if (t) {
                        var i = o(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var l = n("q1tI"),
                u = function() {
                    "use strict";

                    function e(t, n) {
                        i(this, e), this.environmentName = n, this.breadCrubs = []
                    }
                    return c(e, [{
                        key: "info",
                        value: function(e) {
                            console.info(e)
                        }
                    }, {
                        key: "warn",
                        value: function(e) {
                            console.warn(e)
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            console.error(e)
                        }
                    }, {
                        key: "breadCrumb",
                        value: function(e, t) {
                            var n = (new Date).toISOString();
                            this.breadCrubs.push({
                                event: e,
                                timestamp: n,
                                metadata: t
                            }), console.log("[".concat(this.environmentName, " | ").concat(n, "] ").concat(e), t)
                        }
                    }, {
                        key: "getErrorBoundary",
                        value: function() {
                            return p
                        }
                    }]), e
                }(),
                p = function(e) {
                    "use strict";
                    r(n, e);
                    var t = s(n);

                    function n(e) {
                        var r;
                        return i(this, n), (r = t.call(this, e)).state = {
                            hasError: !1
                        }, r
                    }
                    return c(n, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            throw e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.hasError ? this.props.FallbackComponent : this.props.children
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function(e) {
                            return {
                                hasError: !0
                            }
                        }
                    }]), n
                }(l.Component);
            e.exports = u
        },
        KfNM: function(e, t) {
            var n = Object.prototype.toString;
            e.exports = function(e) {
                return n.call(e)
            }
        },
        "Kfv+": function(e, t, n) {
            var r = n("Yoag"),
                a = n("6ae/"),
                o = n("RrRF"),
                i = n("Z0cm"),
                c = n("ExA7"),
                s = n("xFI3"),
                l = Object.prototype.hasOwnProperty;

            function u(e) {
                if (c(e) && !i(e) && !(e instanceof r)) {
                    if (e instanceof a) return e;
                    if (l.call(e, "__wrapped__")) return s(e)
                }
                return new a(e)
            }
            u.prototype = o.prototype, u.prototype.constructor = u, e.exports = u
        },
        KwMD: function(e, t) {
            e.exports = function(e, t, n, r) {
                for (var a = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a;)
                    if (t(e[o], o, e)) return o;
                return -1
            }
        },
        Kz5y: function(e, t, n) {
            var r = n("WFqU"),
                a = "object" == typeof self && self && self.Object === Object && self,
                o = r || a || Function("return this")();
            e.exports = o
        },
        L8xA: function(e, t) {
            e.exports = function(e) {
                var t = this.__data__,
                    n = t.delete(e);
                return this.size = t.size, n
            }
        },
        LGYb: function(e, t, n) {
            var r = n("1hJj"),
                a = n("jbM+"),
                o = n("Xt/L"),
                i = n("xYSL"),
                c = n("dQpi"),
                s = n("rEGp");
            e.exports = function(e, t, n) {
                var l = -1,
                    u = a,
                    p = e.length,
                    f = !0,
                    d = [],
                    m = d;
                if (n) f = !1, u = o;
                else if (p >= 200) {
                    var h = t ? null : c(e);
                    if (h) return s(h);
                    f = !1, u = i, m = new r
                } else m = t ? [] : d;
                e: for (; ++l < p;) {
                    var g = e[l],
                        b = t ? t(g) : g;
                    if (g = n || 0 !== g ? g : 0, f && b === b) {
                        for (var v = m.length; v--;)
                            if (m[v] === b) continue e;
                        t && m.push(b), d.push(g)
                    } else u(m, b, n) || (m !== d && m.push(b), d.push(g))
                }
                return d
            }
        },
        LVtp: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return h
            })), n.d(t, "a", (function() {
                return y
            }));
            var r = n("HALo"),
                a = n("dhJC"),
                o = n("DZdY"),
                i = n("q1tI"),
                c = n.n(i),
                s = n("AeFk"),
                l = n("QhEq"),
                u = n("DYRV"),
                p = n("tBhh");
            c.a.createElement;
            var f = {
                    small: p.a.SPACING_32,
                    regular: "50px"
                },
                d = (Object(o.a)("button", {
                    target: "e1ff393a2"
                })((function(e) {
                    return Object(l.a)(e.styleType)
                }), ";"), function(e) {
                    var t = e.className;
                    return Object(s.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 44 44",
                        className: t
                    }, Object(s.c)("circle", {
                        cx: "22",
                        cy: "22",
                        r: "21.5"
                    }), Object(s.c)("path", {
                        d: "M14.4883 21.652l1.104 1.152 5.496-5.256v11.76h1.824v-11.76l5.496 5.256 1.104-1.152-7.296-6.96h-.432l-7.296 6.96z"
                    }))
                }),
                m = function(e) {
                    return Object(s.b)("circle{fill:", l.b[e.color], ";stroke-opacity:0;}path{fill:white;}", "")
                },
                h = Object(o.a)(d, {
                    target: "e1ff393a1"
                })("height:", (function(e) {
                    var t = e.size;
                    return f[void 0 === t ? "regular" : t]
                }), ";circle{stroke:", u.a.GRAY_10, ";fill:transparent;stroke-opacity:0.5;transition:fill 200ms linear,stroke-opacity 200ms linear;}path{fill:", u.a.GRAY_10, ";stroke:none;transition:fill 200ms linear;transform-origin:center;transform:rotate(\n      ", (function(e) {
                    var t = e.angle;
                    return t && t + "deg"
                }), "\n    );}&:hover{", m, ";}", (function(e) {
                    return e.active && m
                }), ";"),
                g = function(e) {
                    var t = e.className;
                    return Object(s.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 44 44",
                        fill: "none",
                        className: t
                    }, Object(s.c)("circle", {
                        cx: "22",
                        cy: "22",
                        r: "21.5"
                    }), Object(s.c)("path", {
                        d: "M26.8087 16.228l-4.536 4.608-4.56-4.608-1.2 1.224 4.56 4.56-4.56 4.56 1.2 1.2 4.56-4.584 4.536 4.584 1.2-1.2-4.56-4.56 4.56-4.56-1.2-1.224z"
                    }))
                },
                b = Object(o.a)(g, {
                    target: "e1ff393a0"
                })("height:", (function(e) {
                    var t = e.size;
                    return f[void 0 === t ? "regular" : t]
                }), ";cursor:pointer;circle{stroke:", u.a.GRAY_10, ";fill:transparent;stroke-opacity:0.5;}path{fill:", u.a.GRAY_10, ";stroke:none;}&:hover{circle{fill:", u.a.GRAY_6, ";stroke:transparent;}path{fill:white;}}"),
                v = {
                    name: "qxfw6d",
                    styles: "appearance:none;background:none;padding:0;&:hover{background:none;}"
                },
                y = function(e) {
                    var t = e.size,
                        n = e.text,
                        o = e.onClick,
                        i = Object(a.a)(e, ["size", "text", "onClick"]);
                    return Object(s.c)("button", Object(r.a)({
                        onClick: o,
                        css: v
                    }, i), Object(s.c)(b, {
                        size: t
                    }), Object(s.c)("span", {
                        className: "sr-only"
                    }, n))
                }
        },
        LXxW: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, a = 0, o = []; ++n < r;) {
                    var i = e[n];
                    t(i, n, e) && (o[a++] = i)
                }
                return o
            }
        },
        LY0y: function(e, t) {
            (function(t) {
                e.exports = function() {
                    var e = {
                            880: function(e) {
                                e.exports = function(e) {
                                    return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                                        enumerable: !0,
                                        get: function() {
                                            return e.l
                                        }
                                    }), Object.defineProperty(e, "id", {
                                        enumerable: !0,
                                        get: function() {
                                            return e.i
                                        }
                                    }), e.webpackPolyfill = 1), e
                                }
                            }
                        },
                        n = {};

                    function r(t) {
                        if (n[t]) return n[t].exports;
                        var a = n[t] = {
                                exports: {}
                            },
                            o = !0;
                        try {
                            e[t](a, a.exports, r), o = !1
                        } finally {
                            o && delete n[t]
                        }
                        return a.exports
                    }
                    return r.ab = t + "/", r(880)
                }()
            }).call(this, "/")
        },
        Lab5: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = "/" === e ? "/index" : /^\/index(\/|$)/.test(e) ? "/index".concat(e) : "".concat(e);
                return n + t
            }
        },
        "Lae+": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("AeFk");
            a.a.createElement;

            function i() {
                return Object(o.c)(a.a.Fragment, null, Object(o.c)("script", {
                    dangerouslySetInnerHTML: {
                        __html: '"asana.com"!=window.location.hostname&&"blog.asana.com"!=window.location.hostname&&(Bugsnag.releaseStage="development");var AsanaAppUserInfo={get:function(n,e){var o=new XMLHttpRequest;o.open("GET","https://app.asana.com/-/marketing_info",!0),o.withCredentials=!0,o.responseType="json",o.send(),o.onloadend=function(){o.readyState===o.DONE&&200===o.status?n(o.response):("function"==typeof e&&e(),Bugsnag.notify("Non-200 response from /-/marketing_info"))}.bind(this)}};'
                    }
                }), Object(o.c)("script", {
                    dangerouslySetInnerHTML: {
                        __html: 'var AsanaStorage={STORAGE_KEYS:{ENCRYPTED_USER_ID:"ga__ec_ui",ECOMMERCE_CONFIG:"ga__ecommerce_config",USER_SIGNUP_EMAIL:"user_signup_email",GOOGLE_ANALYTICS_ID:"_ga"},pendingCookies:[],CATEGORY:{NECESSARY:"C0001",PERFORMANCE:"C0002",FUNCTIONAL:"C0003",TARGETING:"C0004"},getFromSessionStorage:function(e){try{return window.sessionStorage.getItem(e)}catch(e){Bugsnag.notifyException(e)}},setToSessionStorage:function(e,o){try{window.sessionStorage.setItem(e,o)}catch(e){Bugsnag.notifyException(e)}},removeFromSessionStorage:function(e){try{window.sessionStorage.removeItem(e)}catch(e){Bugsnag.notifyException(e)}},getFromLocalStorage:function(e){try{return window.localStorage.getItem(e)}catch(e){Bugsnag.notifyException(e)}},setToLocalStorage:function(e,o){try{window.localStorage.setItem(e,o)}catch(e){Bugsnag.notifyException(e)}},removeFromLocalStorage:function(e){try{window.localStorage.removeItem(e)}catch(e){Bugsnag.notifyException(e)}},getEcommerceConfig:function(){var e=this.getFromSessionStorage(this.STORAGE_KEYS.ECOMMERCE_CONFIG);if(!e)return{};try{return JSON.parse(e)}catch(e){Bugsnag.notifyException(e)}},setEcommerceConfig:function(e){this.setToSessionStorage(this.STORAGE_KEYS.ECOMMERCE_CONFIG,JSON.stringify(e))},removeEcommerceConfig:function(){this.removeFromSessionStorage(this.STORAGE_KEYS.ECOMMERCE_CONFIG)},updateEcommerceConfig:function(e){var o=this.getEcommerceConfig();e(o),this.setEcommerceConfig(o)},setEncryptedUserId:function(e){e&&this.setToLocalStorage(this.STORAGE_KEYS.ENCRYPTED_USER_ID,e)},getEncryptedUserId:function(){return this.getFromLocalStorage(this.STORAGE_KEYS.ENCRYPTED_USER_ID)||null},removeEncryptedUserId:function(){this.removeFromLocalStorage(this.STORAGE_KEYS.ENCRYPTED_USER_ID)},getGATrackingId:function(){return this.getCookie(this.STORAGE_KEYS.GOOGLE_ANALYTICS_ID)},getCookie:function(e){var o=document.cookie,t=o.indexOf(" "+e+"=");return o=-1==(t=-1==t?o.indexOf(e+"="):t)?null:(t=o.indexOf("=",t)+1,-1==(e=o.indexOf(";",t))&&(e=o.length),unescape(o.substring(t,e)))},setCookie:function(e,o,t,n,i,s){var r;this.getUserConsentByGroupId(t)?(n=n||30,i=void 0===i||i,(r=new Date).setTime(r.getTime()+24*n*60*60*1e3),r="expires="+r.toUTCString(),document.cookie=e+"="+o+";"+r+";path="+(s||"/")+(!0===i?";domain=.asana.com":"")+";SameSite=Lax;secure",this.getCookie("xsrf_token")||(document.cookie=e+"="+o+";")):this.pendingCookies.push({name:e,value:o,groupId:t,expires_in_days:n,cross_domain:i,path:s})},deleteCookie:function(e,o){o=o||"/";this.setCookie(e,null,this.CATEGORY.NECESSARY,0,!0,o),"null"!==this.getCookie(e)&&this.setCookie(e,null,this.CATEGORY.NECESSARY,0,!1,o)},setPendingCookies:function(){var e=this.pendingCookies.slice();this.pendingCookies=[],e.forEach(function(e){this.setCookie(e.name,e.value,e.groupId,e.expires_in_days,e.cross_domain,e.path)},this)},getUserConsentByGroupId:function(e){var o=window.OptanonActiveGroups;return o&&o.includes(e)},setUserEmailCookie:function(e){for(var o,t=["/thank-you","/thankyou","/thank","/thanks","/confirm","/confirmation","/invite-confirmation"],n=AsanaI18n.getLanguagePreference(),i=0;i<t.length;i++)this.setCookie(this.STORAGE_KEYS.USER_SIGNUP_EMAIL,e,this.CATEGORY.NECESSARY,1/24,!1,t[i]),n&&"en"!==n&&(o=["/",n,t[i]].join(""),this.setCookie(this.STORAGE_KEYS.USER_SIGNUP_EMAIL,e,this.CATEGORY.NECESSARY,1/24,!1,o))},getUserEmailCookie:function(){return this.getCookie(this.STORAGE_KEYS.USER_SIGNUP_EMAIL)},removeUserEmailCookie:function(){for(var e,o=["/thank-you","/thankyou","/thank","/thanks","/confirm","/confirmation"],t=AsanaI18n.getLanguagePreference(),n=0;n<o.length;n++)t&&"en"!==t&&(e=["/",t,o[n]].join(""),this.deleteCookie(this.STORAGE_KEYS.USER_SIGNUP_EMAIL,e)),this.deleteCookie(this.STORAGE_KEYS.USER_SIGNUP_EMAIL,o[n])}};'
                    }
                }), Object(o.c)("script", {
                    dangerouslySetInnerHTML: {
                        __html: 'var AsanaAnalytics={KEYS:{ENCRYPTED_USER_ID:"cd3",PLATFORM_CUSTOM_DIMENSION:"platform",FAST_FORWARD_ENROLLMENT:"fast_forward",FASTLY_ID:"fastly_id"},init:function(){window.dataLayer=window.dataLayer||[];var t=AsanaStorage.getEncryptedUserId();t?AsanaAnalytics.setEncryptedUserId(t):AsanaAppUserInfo.get(function(t){AsanaAnalytics.setEncryptedUserId(t.encrypted_user_id),AsanaStorage.setEncryptedUserId(t.encrypted_user_id)}),AsanaAnalytics.setPlatformCustomDimension("asanadotcom")},setEncryptedUserId:function(t){var n={};n[this.KEYS.ENCRYPTED_USER_ID]=t,window.dataLayer.push(n)},setPlatformCustomDimension:function(t){var n={};n[this.KEYS.PLATFORM_CUSTOM_DIMENSION]=t,window.dataLayer.push(n)},initGTM:function(){!function(t,n,a,e){t[e]=t[e]||[],t[e].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});e=n.getElementsByTagName(a)[0],a=n.createElement(a);a.async=!0,a.src="https://www.googletagmanager.com/gtm.js?id=GTM-58G7LFP",e.parentNode.insertBefore(a,e)}(window,document,"script","dataLayer")},trackGTM:function(t,n){try{n?"string"==typeof t&&"[object Object]"===Object.prototype.toString.call(n)&&0!==Object.keys(n).length?dataLayer.push(Object.assign({},{event:t},n)):Bugsnag.notify("AsanaAnalytics.trackGTM only accepts one argument of type <string>, one argument of type <object>, or two arguments of type [<string>, <object>]."):"string"==typeof t?dataLayer.push({event:t}):dataLayer.push(t)}catch(t){Bugsnag.notifyException(t,"Failed to push an event to the GTM data layer.")}},buildCustomGtmEventName:function(t){var n,a={};for(n in t)a[n]=function(t){return t=(t=t.trim()).split(" "),n=[],t.forEach(function(t){var a;t[0]&&(t.split(a="").forEach(function(t,n){t=0===n?t.toUpperCase():t.toLowerCase();a+=t}),n.push(a))}),n.join(" ").split(" ").join("");var n}(t[n]);return a.action=a.action||"",a.page=a.page||"",a.subAction=a.subAction?"-"+a.subAction:"",a.subLocation=a.subLocation?"-"+a.subLocation:"",a.action+a.subAction+"@"+a.page+a.subLocation},isGtmDomLoaded:function(){return window&&window.google_tag_manager&&window.google_tag_manager.dataLayer&&window.google_tag_manager.dataLayer.gtmDom},trackGtmWithEventData:function(t,n,a){AsanaAnalytics.trackGTM(t,{eventCategory:t,eventAction:n,eventLabel:a})},trackSignupEventsInGtm:{pathToLocationMap:{"/pricing":"Pricing","/create-account":"Create Account"},hashesToSublocationMap:{"#signup":"Signup","#buy-premium":"Buy Premium","#buy-business":"Buy Business"},sessionStorageKey:"gtmSignupData",init:function(t,n,a,e){var o=JSON.parse(AsanaStorage.getFromSessionStorage(this.sessionStorageKey));AsanaStorage.removeFromSessionStorage(this.sessionStorageKey),t&&n&&o&&((a=this.createEventLabel(n,o.path,a,o.hash))&&(a={eventCategory:t,eventAction:n,eventLabel:a},e&&(o=this.getCurrentTime()-o.submissionTime,a.eventValue=o),AsanaAnalytics.trackGTM(t,a)))},createEventLabel:function(t,n,a,e){n=this.getLocationFromPath(n);if(n){e=this.hashesToSublocationMap[e];return AsanaAnalytics.buildCustomGtmEventName({action:t,page:n,subAction:a||"",subLocation:e||""})}},storeGtmSignupSubmissionData:function(){var t={};t.path=window.location.pathname,t.hash=window.location.hash,t.submissionTime=this.getCurrentTime(),AsanaStorage.setToSessionStorage(this.sessionStorageKey,JSON.stringify(t))},getCurrentTime:function(){return(new Date).getTime()},getLocationFromPath:function(n){var t=Object.keys(this.pathToLocationMap).filter(function(t){return new RegExp(t,"g").test(n)});return this.pathToLocationMap[t[0]]}},stringToArrayBuffer:function(t){for(var n=new ArrayBuffer(t.length),a=new Uint8Array(n),e=0,o=t.length;e<o;e++)a[e]=t.charCodeAt(e);return n},hashString:function(o,i){return new Promise(function(n,t){var a=AsanaAnalytics.stringToArrayBuffer(i),e=(new TextEncoder).encode(o);window.crypto.subtle.importKey("raw",a,{name:"HMAC",hash:"SHA-256"},!1,["sign","verify"]).then(function(t){return window.crypto.subtle.sign("HMAC",t,e).then(function(t){t=Array.from(new Uint8Array(t)).map(function(t){return t.toString(16).padStart(2,"0")});n(t.join(""))})}).catch(function(t){Bugsnag.notify("[hashString] Failed to hash string")})})},getIpAddressFromGTM:function(){if(window.dataLayer)for(var t,n=0;n<window.dataLayer.length;n++)for(var a in t=window.dataLayer[n])if(t[a]&&t[a].ip)return t[a].ip},sendHashedIpAddressToGTM:function(){var t;!window.dataLayer||(t=this.getIpAddressFromGTM())&&this.hashString(t,"srnbyhsomm9iqk5h2z39uyl9h").then(function(t){AsanaAnalytics.trackGTM({hashedIP:t})}).catch(function(t){Bugsnag.notify("[sendHashedIpAddressToGTM] Failed to push hashed IP to GTM dataLayer")})}};AsanaAnalytics.init();'
                    }
                }), Object(o.c)("script", {
                    dangerouslySetInnerHTML: {
                        __html: 'var AsanaEmail={personalDomains:["126.com","163.com","1and1.com","aol.com","aol.it","att.net","bbox.fr","bellsouth.net","bigpond.com","bigpond.com.au","bigpond.net.au","bluewin.ch","btinternet.com","charter.net","comcast.net","cox.net","earthlink.net","email.com","excite.com","facebook.com","fastmail.fm","free.fr","freenet.de","front.ru","frontier.com","frontiernet.net","fuse.net","gmail.com","gmx.at","gmx.com","gmx.de","gmx.fr","gmx.li","gmx.net","googlemail.com","home.nl","home.no.net","home.ro","home.se","hotmail.be","hotmail.co.il","hotmail.co.uk","hotmail.com","hotmail.com.ar","hotmail.com.br","hotmail.com.mx","hotmail.de","hotmail.es","hotmail.fr","hotmail.it","hotmail.kg","hotmail.kz","hotmail.ru","icloud.com","inbox.com","inbox.ru","juno.com","laposte.net","libero.it","list.ru","live.be","live.ca","live.co.uk","live.com","live.com.ar","live.com.au","live.com.mx","live.de","live.fr","live.it","live.nl","livemail.tw","mac.com","mail.com","mail.ru","mailinator.com","me.com","mindspring.com","msn.com","netscape.net","netzero.net","neuf.fr","notmailinator.com","numericable.fr","orange.fr","outlook.com","outlook.com.br","pacbell.net","planet.nl","pobox.com","post.com","post.cz","prodigy.net","prodigy.net.mx","protonmail.com","qq.com","rediffmail.com","roadrunner.com","sbcglobal.net","sfr.fr","shaw.ca","sina.cn","sina.com","sinamail.com","sky.com","sky.com.br","sky.com.mx","skynet.be","spamarrest.com","spamfence.net","spamgourmet.com","t-online.de","telenet.be","telus.net","terra.com.br","tiscali.co.uk","tiscali.it","uol.com.br","usa.net","verizon.net","wanadoo.fr","web.de","windowslive.com","ya.ru","yahoo.ca","yahoo.co.id","yahoo.co.in","yahoo.co.jp","yahoo.co.kr","yahoo.co.nz","yahoo.co.uk","yahoo.com","yahoo.com.ar","yahoo.com.au","yahoo.com.br","yahoo.com.cn","yahoo.com.hk","yahoo.com.is","yahoo.com.mx","yahoo.com.ph","yahoo.com.ru","yahoo.com.sg","yahoo.de","yahoo.dk","yahoo.es","yahoo.fr","yahoo.ie","yahoo.in","yahoo.it","yahoo.jp","yahoo.ru","yahoo.se","yandex.com","yandex.ru","ymail.com","yopmail.com","yopmail.fr","zoho.com"],isPersonalEmail:function(o){o=o.split("@"),o=o[o.length-1];return this.personalDomains.includes(o)},validate:function(o){return/^([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/i.test(o)}};'
                    }
                }), Object(o.c)("script", {
                    dangerouslySetInnerHTML: {
                        __html: 'var AsanaI18n={defaultLanguage:"en",languageCodes:["de","fr","es","pt","ja","zh-tw","ru","nl","pl"],defaultCurrency:"USD",languageMap:{de:"Deutsch",en:"English",es:"Espa\xf1ol",fr:"Fran\xe7ais",pt:"Portugu\xeas",ja:"\u65e5\u672c\u8a9e","zh-tw":"\u7e41\u9ad4\u4e2d\u6587",pl:"Polski",nl:"Nederlands",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},countryCurrencyMap:{GB:"GBP",JP:"JPY",AT:"EUR",BE:"EUR",BG:"EUR",CY:"EUR",CZ:"EUR",DK:"EUR",DE:"EUR",EE:"EUR",ES:"EUR",FI:"EUR",FR:"EUR",GR:"EUR",HR:"EUR",HU:"EUR",IE:"EUR",IT:"EUR",LT:"EUR",LU:"EUR",LV:"EUR",MT:"EUR",NL:"EUR",PL:"EUR",PT:"EUR",RO:"EUR",SE:"EUR",SI:"EUR",SK:"EUR"},languagePreferenceCookieName:"lang_pref",translations:{emailTypo:{en:"Please try again. Did you mean correct@email.com?",fr:"Veuillez r\xe9essayer. Souhaitiez-vous saisir correct@email.com ?",de:"Bitte versuchen Sie es erneut. Meinten Sie correct@email.com?",es:"Intenta nuevamente. \xbfQuisiste decir correct@email.com?",pt:"Tente novamente. Voc\xea quis dizer correct@email.com?",ja:"\u3082\u3046\u4e00\u5ea6\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002correct@email.com \u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f","zh-tw":"\u8acb\u518d\u8a66\u4e00\u6b21\u3002\u60a8\u662f\u6307 correct@email.com \u55ce?",nl:"Probeer het opnieuw. Bedoelde u correct@email.com?",pl:"Spr\xf3buj ponownie. Czy chodzi\u0142o Ci o correct@email.com?",ru:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437. \u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 correct@email.com?"},emailPersonalFail:{en:"Please provide a valid Company Email",fr:"Veuillez fournir une adresse e-mail professionnelle valide",de:"Bitte geben Sie eine g\xfcltige E-Mail-Adresse Ihres Unternehmens an.",es:"Ingresa una direcci\xf3n de email v\xe1lida de la empresa",pt:"Insira um e-mail comercial v\xe1lido",ja:"\u6709\u52b9\u306a\u4f1a\u793e\u7528\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002","zh-tw":"\u8acb\u63d0\u4f9b\u6709\u6548\u7684\u516c\u53f8\u96fb\u5b50\u90f5\u4ef6",nl:"Geef een geldig e-mailadres van uw bedrijf op",pl:"Podaj prawid\u0142owy firmowy adres e-mail",ru:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"},emailRegexFail:{en:"Something doesn\'t look right. Please check the email and try again",fr:"Il semble y avoir une erreur. Veuillez v\xe9rifier votre adresse e-mail, puis r\xe9essayer.",de:"Hier scheint etwas nicht zu stimmen. Bitte pr\xfcfen Sie Ihre E-Mail-Adresse und versuchen Sie es erneut.",es:"Al parecer, algo no est\xe1 bien. Verifica tu email e intenta nuevamente.",pt:"Parece que algo n\xe3o est\xe1 correto. Verifique seu endere\xe7o de e-mail e tente novamente.",ja:"\u3069\u3053\u304b\u306b\u554f\u984c\u304c\u3042\u308b\u3088\u3046\u3067\u3059\u3002\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u3082\u3046\u4e00\u5ea6\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002","zh-tw":"\u4f3c\u4e4e\u6709\u5730\u65b9\u51fa\u932f\u4e86\u3002\u8acb\u6aa2\u67e5\u96fb\u5b50\u90f5\u4ef6\uff0c\u4e26\u518d\u8a66\u4e00\u6b21\u3002",nl:"Iets ziet er niet goed uit. Controleer het e-mailadres en probeer het opnieuw",pl:"Co\u015b jest nie tak. Sprawd\u017a adres e-mail i spr\xf3buj ponownie.",ru:"\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"},fourOhFour:{en:"Sorry, this page is not available in English",fr:"Malheureusement, cette page n\'est pas disponible en fran\xe7ais",de:"Leider ist diese Seite nicht auf Deutsch verf\xfcgbar",es:"Lo sentimos, esta p\xe1gina no esta disponible en espa\xf1ol",pt:"Desculpe, esta p\xe1gina n\xe3o est\xe1 dispon\xedvel em portugu\xeas",ja:"\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u3053\u306e\u30da\u30fc\u30b8\u306f\u65e5\u672c\u8a9e\u3067\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u305b\u3093\u3002","zh-tw":"\u62b1\u6b49\uff0c\u6b64\u9801\u9762\u7121\u6cd5\u4f7f\u7528\u7e41\u9ad4\u4e2d\u6587",nl:"Sorry, deze pagina is niet beschikbaar in het Nederlands",pl:"Przepraszamy, ta strona nie jest dost\u0119pna w j\u0119zyku polskim.",ru:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u044d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435"},waiting:{en:"Waiting\u2026",fr:"En attente\u2026",de:"Wartet\u2026",es:"Esperando\u2026",pt:"Aguardando\u2026",ja:"\u5f85\u6a5f\u4e2d\u2026","zh-tw":"\u7b49\u5f85\u4e2d...",nl:"Wachten\u2026",pl:"Oczekiwanie\u2026",ru:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f\u2026"},getStarted:{en:"Get Started for FREE",fr:"Commencez GRATUITEMENT",de:"Kostenlos durchstarten",es:"Comienza GRATIS",pt:"Comece GRATUITAMENTE",ja:"\u7121\u6599\u3067\u59cb\u3081\u308b","zh-tw":"\u514d\u8cbb\u958b\u59cb\u4f7f\u7528",nl:"Ga GRATIS aan de slag",pl:"Rozpocznij ZA DARMO",ru:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0411\u0415\u0421\u041f\u041b\u0410\u0422\u041d\u041e"},asanaTip:{en:"Asana Tip: ",fr:"Astuce Asana : ",de:"Asana-Tipp: ",es:"Consejo de Asana: ",pt:"Dica da Asana: ",ja:"Asana \u30d2\u30f3\u30c8: ","zh-tw":"Asana \u63d0\u793a\uff1a",nl:"Asana-tip: ",pl:"Wskaz\xf3wka Asany: ",ru:"\u0421\u043e\u0432\u0435\u0442 Asana: "},salesFormConfirm:{en:"By submitting this form, you agree that Asana may share this information with its authorized Solution Partners, and that you may be contacted about this inquiry by Asana or a partner of Asana.",fr:"En envoyant ce formulaire, vous consentez \xe0 ce qu\u2019Asana puisse communiquer ces informations \xe0 ses partenaires de solution autoris\xe9s, et \xe0 \xeatre contact\xe9 \xe0 propos de ce formulaire par Asana ou un partenaire Asana.",de:"Mit dem \xdcbermitteln dieses Formulars erkl\xe4ren Sie sich damit einverstanden, dass Asana diese Informationen an seine autorisierten L\xf6sungspartner weitergibt und dass Sie m\xf6glicherweise von Asana oder einem Partner von Asana bez\xfcglich dieser Anfrage kontaktiert werden.",es:"Al enviar este formulario, aceptas que Asana pueda compartir esta informaci\xf3n con sus socios de soluciones autorizados, y que tanto Asana como esos socios puedan comunicarse contigo por este tema.",pt:"Ao enviar este formul\xe1rio, voc\xea concorda que a Asana pode compartilhar estas informa\xe7\xf5es com seus Parceiros de solu\xe7\xf5es autorizados, e que voc\xea poder\xe1 ser contatado(a) pela Asana ou por um de seus parceiros sobre esta consulta.",ja:"\u3053\u306e\u30d5\u30a9\u30fc\u30e0\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001Asana \u304c\u3053\u306e\u60c5\u5831\u3092\u8a8d\u5b9a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u5171\u6709\u3059\u308b\u5834\u5408\u304c\u3042\u308b\u3053\u3068\u3001\u304a\u3088\u3073\u3053\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9\u306b\u3064\u3044\u3066 Asana \u307e\u305f\u306f Asana \u306e\u30d1\u30fc\u30c8\u30ca\u30fc\u3088\u308a\u304a\u5ba2\u69d8\u3078\u3054\u9023\u7d61\u3059\u308b\u5834\u5408\u304c\u3042\u308b\u3053\u3068\u306b\u3064\u3044\u3066\u3001\u304a\u5ba2\u69d8\u306f\u540c\u610f\u3059\u308b\u3082\u306e\u3068\u3057\u307e\u3059\u3002","zh-tw":"\u63d0\u4ea4\u6b64\u8868\u55ae\uff0c\u8868\u793a\u60a8\u540c\u610f Asana \u53ef\u8207\u5176\u6388\u6b0a\u7684\u89e3\u6c7a\u65b9\u6848\u5408\u4f5c\u5925\u4f34\u5206\u4eab\u6b64\u8cc7\u8a0a\uff0c\u4e14 Asana \u6216 Asana \u7684\u5408\u4f5c\u5925\u4f34\u53ef\u80fd\u5c31\u6b64\u67e5\u8a62\u8207\u60a8\u806f\u7d61\u3002",nl:"Door dit formulier in te dienen, gaat u ermee akkoord dat Asana deze informatie kan delen met haar geautoriseerde Solution Partners, en dat Asana of een partner van Asana contact met u kan opnemen over deze aanvraag.",pl:"Przesy\u0142aj\u0105c ten formularz, wyra\u017casz zgod\u0119 na udost\u0119pnienie tych informacji przez Asan\u0119 swoim autoryzowanym partnerom w zakresie rozwi\u0105za\u0144 oraz na kontakt w sprawie tego formularza przez Asan\u0119 lub partnera Asany.",ru:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044f \u044d\u0442\u0443 \u0444\u043e\u0440\u043c\u0443, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e Asana \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u044d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0441\u0432\u043e\u0438\u043c\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0430\u043c\u0438 \u043f\u043e \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e Asana \u0438\u043b\u0438 \u0435\u0451 \u043f\u0430\u0440\u0442\u043d\u0451\u0440 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0439\u0442\u0438 \u0441 \u0432\u0430\u043c\u0438 \u043d\u0430 \u0441\u0432\u044f\u0437\u044c \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u0443."}},getCurrencyByCountry:function(e){return"string"==typeof e&&(e=e.toUpperCase()),this.countryCurrencyMap[e]||this.defaultCurrency},getUserLanguageCode:function(){var e=AsanaI18n.getCurrentPageLanguage(),a="";return(a=-1!==(a=-1!==(a=e===this.defaultLanguage&&(!!navigator.languages&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.userLanguage)||e).indexOf("-")?a.split("-")[0]:a).indexOf("_")?a.split("_")[0]:a).toLowerCase()},getCurrentPageLanguage:function(){var e=window.location.pathname.split("/")[1];return-1<AsanaI18n.languageCodes.indexOf(e)?e:this.defaultLanguage},isCurrentPageLanguageEnglish:function(){return this.getCurrentPageLanguage()===this.defaultLanguage},doesCountryUseEuros:function(e){return"EUR"===this.getCurrencyByCountry(e)},setLanguagePreference:function(e,a){!AsanaI18n.languageCodes.includes(e)&&e!==AsanaI18n.defaultLanguage||AsanaStorage.setCookie(this.languagePreferenceCookieName,e,a,365,!0)},getLanguagePreference:function(){return AsanaStorage.getCookie(this.languagePreferenceCookieName)||null},getSelectedLanguagePagePathAsArray:function(e,a){e=(e=e.split("/")).filter(function(e){return!AsanaI18n.languageCodes.includes(e)});return a!==AsanaI18n.defaultLanguage&&e.unshift(a),e=e.filter(function(e){return e})},getRedirectBasedOnLangPref:function(e,a){a="/"+AsanaI18n.getSelectedLanguagePagePathAsArray(e,a).join("/");return window.location.search&&(a+=window.location.search),a="true"===AsanaStorage.getCookie("is_logged_in")?a+"#app-language":a+window.location.hash},pagePathWithoutLanguageCode:function(e){e=e.split("/");return 1===(e=e.filter(function(e){return!AsanaI18n.languageCodes.includes(e)})).length&&""===e[0]?"/":e.join("/")},isHomepage:function(e){return"/"===this.pagePathWithoutLanguageCode(window.location.pathname)},shouldIncludeQueryString:function(){var e=AsanaI18n.pagePathWithoutLanguageCode(window.location.pathname);return"/"===e&&"true"===AsanaStorage.getCookie("is_logged_in")||"/invite"===e},setHrefForLanguagePage:function(e,a,n){e=AsanaI18n.getSelectedLanguagePagePathAsArray(e,a),e=window.location.origin+"/"+e.join("/");return this.isHomepage()&&a!==this.defaultLanguage&&(e+="/"),e=n?e+window.location.search:e},languageModalLink:{init:function(){var a=AsanaI18n.getCurrentPageLanguage(),e=document.querySelectorAll(".i18n-modal a");0<e.length&&e.forEach(function(e){e.textContent=AsanaI18n.languageMap[a]})}},languageLinks:{languagePageLinks:".language-list a",init:function(){var n,e=AsanaI18n.getCurrentPageLanguage();AsanaI18n.getLanguagePreference()||AsanaI18n.setLanguagePreference(e,AsanaStorage.CATEGORY.FUNCTIONAL);e=document.querySelectorAll(this.languagePageLinks);0<e.length&&(n=AsanaI18n.shouldIncludeQueryString(),e.forEach(function(e){var a=e.getAttribute("data-lang");e.href=AsanaI18n.setHrefForLanguagePage(window.location.pathname,a,n),e.addEventListener("click",function(){AsanaI18n.setLanguagePreference(a,AsanaStorage.CATEGORY.NECESSARY)})}))}},languageSelect:{languageSelectElements:".js-language-select select",init:function(){var e=AsanaI18n.getCurrentPageLanguage();AsanaI18n.getLanguagePreference()||AsanaI18n.setLanguagePreference(e,AsanaStorage.CATEGORY.FUNCTIONAL),$(this.languageSelectElements).each(function(){$(this).val(e)}),this.bindEventListeners()},bindEventListeners:function(){$(this.languageSelectElements).each(function(){$(this).change(function(){var e=$(this).val();AsanaI18n.setLanguagePreference(e,AsanaStorage.CATEGORY.NECESSARY),window.location=AsanaI18n.getRedirectBasedOnLangPref(window.location.pathname,e)})})}}};window.addEventListener("load",function(){AsanaI18n.languageSelect.init(),AsanaI18n.languageModalLink.init()});'
                    }
                }), Object(o.c)("script", {
                    dangerouslySetInnerHTML: {
                        __html: 'var AsanaVerificationUtils={resendEmail:{init:function(){for(var i=document.querySelectorAll(".click-here-container"),e=document.querySelectorAll(".email-resend-container"),t=0;t<i.length;t++)i[t].classList.remove("show"),i[t].classList.add("hide");for(var a=0;a<e.length;a++){var n=this;e[a].classList.remove("hide"),e[a].classList.add("show"),e[a].addEventListener("click",function(){n.resendEmailRequest(n.modifyUIAfterEmailSent,n),n.toggleLoadingIndicators("show","hide")})}},resendEmailRequest:function(){var i=AsanaStorage.getEncryptedUserId(),i={email:AsanaStorage.getUserEmailCookie(),encrypted_user_id:i};$.ajax({url:AsanaHelpers.appUrl("/-/resend_email"),type:"POST",dataType:"json",data:i,timeout:3e4,crossDomain:!0,xhrFields:{withCredentials:!0},complete:function(){AsanaVerificationUtils.resendEmail.modifyUIAfterEmailSent()},error:function(i){Bugsnag.notify("Non-200 response from /-/resend_email")}})},modifyUIAfterEmailSent:function(){this.toggleLoadingIndicators("hide","show");for(var i=document.querySelectorAll(".email-send-container"),e=document.querySelectorAll(".email-resend-container"),t=0;t<e.length;t++)e[t].classList.remove("show"),e[t].classList.add("hide");for(var a=0;a<i.length;a++)i[a].classList.remove("hide"),i[a].classList.add("show")},toggleLoadingIndicators:function(i,e){for(var t=document.querySelectorAll(".email-resending-indicator"),a=0;a<t.length;a++)t[a].classList.add(i),t[a].classList.remove(e)}},SSOSignupVerification:{swapToAlternateEmailVerificationUI:function(i){var e=document.querySelector(".-pt-10"),i=document.querySelector(i);e.classList.remove("show"),e.classList.add("hide"),i.classList.remove("hide"),i.classList.add("show")},verifyEmailWithGmailSSO:function(){this.swapToAlternateEmailVerificationUI(".verification-gmail")},verifyEmailWithGsuiteSSORequired:function(){this.swapToAlternateEmailVerificationUI(".verification-gmail")},verifyEmailWithGsuiteSSOOptional:function(){this.swapToAlternateEmailVerificationUI(".verification-gsuite")},verifyEmailWithSAMLRequired:function(){this.swapToAlternateEmailVerificationUI(".verification-saml-required")},verifyEmailWithSAMLOptional:function(){this.swapToAlternateEmailVerificationUI(".verification-saml-optional")},emailVerifiedWithEcommerceForGoogleSSO:function(){this.swapToAlternateEmailVerificationUI(".verification-ecommerce-sso"),$("#redirect-cta").attr("href",AsanaHelpers.appUrl()),setTimeout(function(){window.location.href=AsanaHelpers.appUrl()},3e3),AsanaStorage.deleteCookie("user_just_claimed_due_to_sso")},addRedirectLinksToSAMLRedirectButtons:function(i){for(var e=$(".sso-button-continue"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){window.location.href=i})},attachClickHandlerToContinueWithGoogleButton:function(){$(".gmail-button-continue").click(function(){AsanaHelpers.signupWithGoogle(),AsanaAnalytics.trackGTM("login_google_auth"),AsanaAnalytics.trackGTM("signup_google_auth")})},attachClickHandlerToContinueWithGoogleButtonForShareableLinks:function(){$(".gmail-button-continue").click(function(){var i=AsanaHelpers.getUrlParams.get("share_link_key"),e=AsanaHelpers.getUrlParams.get("share_link_domain"),t=AsanaStorage.getUserEmailCookie();AsanaHelpers.signupWithGoogle(i,e,t),AsanaAnalytics.trackGTM("login_google_auth"),AsanaAnalytics.trackGTM("signup_google_auth")})},attachClickHandlersToEmailButtons:function(t){var i=$(".emailButton");$.each(i,function(i,e){$(this).click(function(){var i,e;$(this).data().emailType&&(i=t.substring(1),e=$(this).data().emailType.split("!")[0],AsanaAnalytics.trackGTM("click_thank_you_email_button",{page:i,emailServiceClicked:e||null}))})})},verifyEmailWithSSO:function(i,e,t){!i&&e?"gsuite_required"===e?this.verifyEmailWithGsuiteSSORequired():"gsuite_optional"===e?this.verifyEmailWithGsuiteSSOOptional():"saml_required"===e?this.verifyEmailWithSAMLRequired():"saml_optional"===e&&this.verifyEmailWithSAMLOptional():i||"gmail"!==t||this.verifyEmailWithGmailSSO()}}};'
                    }
                }))
            }
        },
        Lc7W: function(e, t) {
            var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                r = /\n/g,
                a = /^\s*/,
                o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                i = /^:\s*/,
                c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                s = /^[;\s]*/,
                l = /^\s+|\s+$/g,
                u = "";

            function p(e) {
                return e ? e.replace(l, u) : u
            }
            e.exports = function(e, t) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                t = t || {};
                var l = 1,
                    f = 1;

                function d(e) {
                    var t = e.match(r);
                    t && (l += t.length);
                    var n = e.lastIndexOf("\n");
                    f = ~n ? e.length - n : f + e.length
                }

                function m() {
                    var e = {
                        line: l,
                        column: f
                    };
                    return function(t) {
                        return t.position = new h(e), y(), t
                    }
                }

                function h(e) {
                    this.start = e, this.end = {
                        line: l,
                        column: f
                    }, this.source = t.source
                }
                h.prototype.content = e;
                var g = [];

                function b(n) {
                    var r = new Error(t.source + ":" + l + ":" + f + ": " + n);
                    if (r.reason = n, r.filename = t.source, r.line = l, r.column = f, r.source = e, !t.silent) throw r;
                    g.push(r)
                }

                function v(t) {
                    var n = t.exec(e);
                    if (n) {
                        var r = n[0];
                        return d(r), e = e.slice(r.length), n
                    }
                }

                function y() {
                    v(a)
                }

                function _(e) {
                    var t;
                    for (e = e || []; t = j();) !1 !== t && e.push(t);
                    return e
                }

                function j() {
                    var t = m();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var n = 2; u != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                        if (n += 2, u === e.charAt(n - 1)) return b("End of comment missing");
                        var r = e.slice(2, n - 2);
                        return f += 2, d(r), e = e.slice(n), f += 2, t({
                            type: "comment",
                            comment: r
                        })
                    }
                }

                function w() {
                    var e = m(),
                        t = v(o);
                    if (t) {
                        if (j(), !v(i)) return b("property missing ':'");
                        var r = v(c),
                            a = e({
                                type: "declaration",
                                property: p(t[0].replace(n, u)),
                                value: r ? p(r[0].replace(n, u)) : u
                            });
                        return v(s), a
                    }
                }
                return y(),
                    function() {
                        var e, t = [];
                        for (_(t); e = w();) !1 !== e && (t.push(e), _(t));
                        return t
                    }()
            }
        },
        LcsW: function(e, t, n) {
            var r = n("kekF")(Object.getPrototypeOf, Object);
            e.exports = r
        },
        Ld3w: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return o
            }));
            var r = n("q1tI"),
                a = {
                    NECESSARY: "C0001",
                    PERFORMANCE: "C0002",
                    FUNCTIONAL: "C0003",
                    TARGETING: "C0004"
                };

            function o() {
                var e = Object(r.useState)({
                        functional: null,
                        performance: null,
                        targeting: null
                    }),
                    t = e[0],
                    n = e[1];
                return Object(r.useEffect)((function() {
                    window.OptanonWrapper || (window.OptanonWrapper = function() {
                        var e = window.OptanonActiveGroups;
                        window.AsanaStorage && window.AsanaStorage.setPendingCookies(), n({
                            performance: e.includes(a.PERFORMANCE),
                            functional: e.includes(a.FUNCTIONAL),
                            targeting: e.includes(a.TARGETING)
                        })
                    })
                }), []), t
            }
        },
        MHQ9: function(e, t, n) {
            var r = n("q1tI"),
                a = n("mwSz").default;
            var o = {
                reactCompat: !0
            };
            var i = r.version.split(".")[0] >= 16;
            e.exports = {
                PRESERVE_CUSTOM_ATTRIBUTES: i,
                invertObject: function(e, t) {
                    if (!e || "object" !== typeof e) throw new TypeError("First argument must be an object");
                    var n, r, a = "function" === typeof t,
                        o = {},
                        i = {};
                    for (n in e) r = e[n], a && (o = t(n, r)) && 2 === o.length ? i[o[0]] = o[1] : "string" === typeof r && (i[r] = n);
                    return i
                },
                isCustomComponent: function(e, t) {
                    if (-1 === e.indexOf("-")) return t && "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                },
                setStyleProp: function(e, t) {
                    null !== e && void 0 !== e && (t.style = a(e, o))
                }
            }
        },
        MMiu: function(e, t) {
            var n = Math.max;
            e.exports = function(e, t, r, a) {
                for (var o = -1, i = e.length, c = -1, s = r.length, l = -1, u = t.length, p = n(i - s, 0), f = Array(p + u), d = !a; ++o < p;) f[o] = e[o];
                for (var m = o; ++l < u;) f[m + l] = t[l];
                for (; ++c < s;)(d || o < i) && (f[m + r[c]] = e[o++]);
                return f
            }
        },
        MMmD: function(e, t, n) {
            var r = n("lSCD"),
                a = n("shjB");
            e.exports = function(e) {
                return null != e && a(e.length) && !r(e)
            }
        },
        MrPd: function(e, t, n) {
            var r = n("hypo"),
                a = n("ljhN"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n) {
                var i = e[t];
                o.call(e, t) && a(i, n) && (void 0 !== n || t in e) || r(e, t, n)
            }
        },
        MvSz: function(e, t, n) {
            var r = n("LXxW"),
                a = n("0ycA"),
                o = Object.prototype.propertyIsEnumerable,
                i = Object.getOwnPropertySymbols,
                c = i ? function(e) {
                    return null == e ? [] : (e = Object(e), r(i(e), (function(t) {
                        return o.call(e, t)
                    })))
                } : a;
            e.exports = c
        },
        "N3/Y": function(e, t) {
            e.exports = {
                MUST_USE_PROPERTY: 1,
                HAS_BOOLEAN_VALUE: 4,
                HAS_NUMERIC_VALUE: 8,
                HAS_POSITIVE_NUMERIC_VALUE: 24,
                HAS_OVERLOADED_BOOLEAN_VALUE: 32
            }
        },
        N4mw: function(e, t, n) {
            var r = n("Yoag"),
                a = n("KF6i"),
                o = n("ERuW"),
                i = n("Kfv+");
            e.exports = function(e) {
                var t = o(e),
                    n = i[t];
                if ("function" != typeof n || !(t in r.prototype)) return !1;
                if (e === n) return !0;
                var c = a(n);
                return !!c && e === c[0]
            }
        },
        N6Fi: function(e, t, n) {
            "use strict";
            var r = n("oI91");

            function a(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.__esModule = !0, t.pathToRegexp = t.default = t.customRouteMatcherOptions = t.matcherOptions = void 0;
            var s = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                    default: e
                };
                var t = l();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                    }
                n.default = e, t && t.set(e, n);
                return n
            }(n("zOyy"));

            function l() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function() {
                    return e
                }, e
            }
            t.pathToRegexp = s;
            var u = {
                sensitive: !1,
                delimiter: "/"
            };
            t.matcherOptions = u;
            var p = c(c({}, u), {}, {
                strict: !0
            });
            t.customRouteMatcherOptions = p;
            t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return function(t) {
                    var n = [],
                        r = s.pathToRegexp(t, n, e ? p : u),
                        o = s.regexpToFunction(r, n);
                    return function(t, r) {
                        var i = null != t && o(t);
                        if (!i) return !1;
                        if (e) {
                            var s, l = a(n);
                            try {
                                for (l.s(); !(s = l.n()).done;) {
                                    var u = s.value;
                                    "number" === typeof u.name && delete i.params[u.name]
                                }
                            } catch (p) {
                                l.e(p)
                            } finally {
                                l.f()
                            }
                        }
                        return c(c({}, r), i.params)
                    }
                }
            }
        },
        NBRE: function(e, t, n) {
            var r = n("6ae/"),
                a = n("xs/l"),
                o = n("KF6i"),
                i = n("ERuW"),
                c = n("Z0cm"),
                s = n("N4mw");
            e.exports = function(e) {
                return a((function(t) {
                    var n = t.length,
                        a = n,
                        l = r.prototype.thru;
                    for (e && t.reverse(); a--;) {
                        var u = t[a];
                        if ("function" != typeof u) throw new TypeError("Expected a function");
                        if (l && !p && "wrapper" == i(u)) var p = new r([], !0)
                    }
                    for (a = p ? a : n; ++a < n;) {
                        u = t[a];
                        var f = i(u),
                            d = "wrapper" == f ? o(u) : void 0;
                        p = d && s(d[0]) && 424 == d[1] && !d[4].length && 1 == d[9] ? p[i(d[0])].apply(p, d[3]) : 1 == u.length && s(u) ? p[f]() : p.thru(u)
                    }
                    return function() {
                        var e = arguments,
                            r = e[0];
                        if (p && 1 == e.length && c(r)) return p.plant(r).value();
                        for (var a = 0, o = n ? t[a].apply(this, e) : r; ++a < n;) o = t[a].call(this, o);
                        return o
                    }
                }))
            }
        },
        NKxu: function(e, t, n) {
            var r = n("lSCD"),
                a = n("E2jh"),
                o = n("GoyQ"),
                i = n("3Fdi"),
                c = /^\[object .+?Constructor\]$/,
                s = Function.prototype,
                l = Object.prototype,
                u = s.toString,
                p = l.hasOwnProperty,
                f = RegExp("^" + u.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!o(e) || a(e)) && (r(e) ? f : c).test(i(e))
            }
        },
        NTr2: function(e, t, n) {
            e.exports = n("ASyH")
        },
        Nh2W: function(e, t, n) {
            "use strict";
            var r = n("vJKn"),
                a = n("zoAU"),
                o = n("qVT1"),
                i = n("AroE");
            t.__esModule = !0, t.markAssetError = p, t.isAssetError = function(e) {
                return e && u in e
            }, t.getClientBuildManifest = d, t.default = void 0;
            i(n("Lab5"));
            var c = n("0G5g");

            function s(e, t, n) {
                var r, a = t.get(e);
                if (a) return "future" in a ? a.future : Promise.resolve(a);
                var o = new Promise((function(e) {
                    r = e
                }));
                return t.set(e, a = {
                    resolve: r,
                    future: o
                }), n ? n().then((function(e) {
                    return r(e), e
                })) : o
            }
            var l = function(e) {
                try {
                    return e = document.createElement("link"), !!window.MSInputMethodContext && !!document.documentMode || e.relList.supports("prefetch")
                } catch (t) {
                    return !1
                }
            }();
            var u = Symbol("ASSET_LOAD_ERROR");

            function p(e) {
                return Object.defineProperty(e, u, {})
            }

            function f(e, t, n) {
                return new Promise((function(r, a) {
                    var o = !1;
                    e.then((function(e) {
                        o = !0, r(e)
                    })).catch(a), (0, c.requestIdleCallback)((function() {
                        return setTimeout((function() {
                            o || a(n)
                        }), t)
                    }))
                }))
            }

            function d() {
                return self.__BUILD_MANIFEST ? Promise.resolve(self.__BUILD_MANIFEST) : f(new Promise((function(e) {
                    var t = self.__BUILD_MANIFEST_CB;
                    self.__BUILD_MANIFEST_CB = function() {
                        e(self.__BUILD_MANIFEST), t && t()
                    }
                })), 3800, p(new Error("Failed to load client build manifest")))
            }

            function m(e, t) {
                return d().then((function(n) {
                    if (!(t in n)) throw p(new Error("Failed to lookup route: ".concat(t)));
                    var r = n[t].map((function(t) {
                        return e + "/_next/" + encodeURI(t)
                    }));
                    return {
                        scripts: r.filter((function(e) {
                            return e.endsWith(".js")
                        })),
                        css: r.filter((function(e) {
                            return e.endsWith(".css")
                        }))
                    }
                }))
            }
            var h = function(e) {
                var t = new Map,
                    n = new Map,
                    i = new Map,
                    u = new Map;

                function d(e) {
                    var t = n.get(e);
                    return t || (document.querySelector('script[src^="'.concat(e, '"]')) ? Promise.resolve() : (n.set(e, t = function(e, t) {
                        return new Promise((function(n, r) {
                            (t = document.createElement("script")).onload = n, t.onerror = function() {
                                return r(p(new Error("Failed to load script: ".concat(e))))
                            }, t.crossOrigin = void 0, t.src = e, document.body.appendChild(t)
                        }))
                    }(e)), t))
                }

                function h(e) {
                    var t = i.get(e);
                    return t || (i.set(e, t = fetch(e).then((function(t) {
                        if (!t.ok) throw new Error("Failed to load stylesheet: ".concat(e));
                        return t.text().then((function(t) {
                            return {
                                href: e,
                                content: t
                            }
                        }))
                    })).catch((function(e) {
                        throw p(e)
                    }))), t)
                }
                return {
                    whenEntrypoint: function(e) {
                        return s(e, t)
                    },
                    onEntrypoint: function(e, n) {
                        Promise.resolve(n).then((function(e) {
                            return e()
                        })).then((function(e) {
                            return {
                                component: e && e.default || e,
                                exports: e
                            }
                        }), (function(e) {
                            return {
                                error: e
                            }
                        })).then((function(n) {
                            var r = t.get(e);
                            t.set(e, n), r && "resolve" in r && r.resolve(n)
                        }))
                    },
                    loadRoute: function(n) {
                        var i = this;
                        return s(n, u, o(r.mark((function o() {
                            var c, s, l, u, g, b, v, y;
                            return r.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, m(e, n);
                                    case 3:
                                        return c = r.sent, s = c.scripts, l = c.css, r.next = 8, Promise.all([t.has(n) ? [] : Promise.all(s.map(d)), Promise.all(l.map(h))]);
                                    case 8:
                                        return u = r.sent, g = a(u, 2), b = g[1], r.next = 13, f(i.whenEntrypoint(n), 3800, p(new Error("Route did not complete loading: ".concat(n))));
                                    case 13:
                                        return v = r.sent, y = Object.assign({
                                            styles: b
                                        }, v), r.abrupt("return", "error" in v ? v : y);
                                    case 18:
                                        return r.prev = 18, r.t0 = r.catch(0), r.abrupt("return", {
                                            error: r.t0
                                        });
                                    case 21:
                                    case "end":
                                        return r.stop()
                                }
                            }), o, null, [
                                [0, 18]
                            ])
                        }))))
                    },
                    prefetch: function(t) {
                        var n, r = this;
                        return (n = navigator.connection) && (n.saveData || /2g/.test(n.effectiveType)) ? Promise.resolve() : m(e, t).then((function(e) {
                            return Promise.all(l ? e.scripts.map((function(e) {
                                return t = e, n = "script", new Promise((function(e, a) {
                                    if (document.querySelector('link[rel="prefetch"][href^="'.concat(t, '"]'))) return e();
                                    r = document.createElement("link"), n && (r.as = n), r.rel = "prefetch", r.crossOrigin = void 0, r.onload = e, r.onerror = a, r.href = t, document.head.appendChild(r)
                                }));
                                var t, n, r
                            })) : [])
                        })).then((function() {
                            (0, c.requestIdleCallback)((function() {
                                return r.loadRoute(t)
                            }))
                        })).catch((function() {}))
                    }
                }
            };
            t.default = h
        },
        Npjl: function(e, t) {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        NsYN: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("dhJC"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("r3F2"),
                l = n("AeFk");
            o.a.createElement;
            t.default = function(e) {
                var t = e.size_notrans,
                    n = e.size,
                    a = e.class_notrans,
                    o = e.className,
                    i = e.text,
                    u = Object(r.a)(e, ["size_notrans", "size", "class_notrans", "className", "text"]),
                    p = t || n || "h4",
                    f = a || u.class || o;
                return Object(l.c)(p, {
                    className: c()("heading", f)
                }, i && Object(l.c)(s.a, {
                    html: i
                }))
            }
        },
        NykK: function(e, t, n) {
            var r = n("nmnc"),
                a = n("AP2z"),
                o = n("KfNM"),
                i = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? a(e) : o(e)
            }
        },
        O0oS: function(e, t, n) {
            var r = n("Cwc5"),
                a = function() {
                    try {
                        var e = r(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (t) {}
                }();
            e.exports = a
        },
        O7RO: function(e, t, n) {
            var r = n("CMye"),
                a = n("7GkX");
            e.exports = function(e) {
                for (var t = a(e), n = t.length; n--;) {
                    var o = t[n],
                        i = e[o];
                    t[n] = [o, i, r(i)]
                }
                return t
            }
        },
        OBhP: function(e, t, n) {
            var r = n("fmRc"),
                a = n("gFfm"),
                o = n("MrPd"),
                i = n("WwFo"),
                c = n("Dw+G"),
                s = n("5Tg0"),
                l = n("Q1l4"),
                u = n("VOtZ"),
                p = n("EEGq"),
                f = n("qZTm"),
                d = n("G6z8"),
                m = n("QqLw"),
                h = n("yHx3"),
                g = n("wrZu"),
                b = n("+iFO"),
                v = n("Z0cm"),
                y = n("DSRE"),
                _ = n("zEVN"),
                j = n("GoyQ"),
                w = n("1+5i"),
                O = n("7GkX"),
                x = n("mTTR"),
                k = "[object Arguments]",
                E = "[object Function]",
                C = "[object Object]",
                S = {};
            S[k] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object DataView]"] = S["[object Boolean]"] = S["[object Date]"] = S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Map]"] = S["[object Number]"] = S[C] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object Symbol]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S["[object Error]"] = S[E] = S["[object WeakMap]"] = !1, e.exports = function e(t, n, A, P, T, N) {
                var L, R = 1 & n,
                    F = 2 & n,
                    I = 4 & n;
                if (A && (L = T ? A(t, P, T, N) : A(t)), void 0 !== L) return L;
                if (!j(t)) return t;
                var M = v(t);
                if (M) {
                    if (L = h(t), !R) return l(t, L)
                } else {
                    var G = m(t),
                        D = G == E || "[object GeneratorFunction]" == G;
                    if (y(t)) return s(t, R);
                    if (G == C || G == k || D && !T) {
                        if (L = F || D ? {} : b(t), !R) return F ? p(t, c(L, t)) : u(t, i(L, t))
                    } else {
                        if (!S[G]) return T ? t : {};
                        L = g(t, G, R)
                    }
                }
                N || (N = new r);
                var z = N.get(t);
                if (z) return z;
                N.set(t, L), w(t) ? t.forEach((function(r) {
                    L.add(e(r, n, A, r, t, N))
                })) : _(t) && t.forEach((function(r, a) {
                    L.set(a, e(r, n, A, a, t, N))
                }));
                var B = M ? void 0 : (I ? F ? d : f : F ? x : O)(t);
                return a(B || t, (function(r, a) {
                    B && (r = t[a = r]), o(L, a, e(r, n, A, a, t, N))
                })), L
            }
        },
        OD8u: function(e, t, n) {
            "use strict";
            var r = {
                    name: "qfmwuk",
                    styles: "background:#222B37"
                },
                a = {
                    name: "12yhsvv",
                    styles: "background:#848F99"
                },
                o = {
                    name: "l4q4sn",
                    styles: "background:#EDF1F2"
                },
                i = {
                    name: "1f32gzy",
                    styles: "background:#F6F8F9"
                },
                c = {
                    name: "1ft14fj",
                    styles: "background:inherit"
                };
            t.a = function(e) {
                var t;
                switch (e) {
                    case "Default":
                        t = c;
                        break;
                    case "Light":
                        t = i;
                        break;
                    case "LightGray":
                        t = o;
                        break;
                    case "Gray":
                        t = a;
                        break;
                    case "Dark":
                        t = r
                }
                return t
            }
        },
        "Of+w": function(e, t, n) {
            var r = n("Cwc5")(n("Kz5y"), "WeakMap");
            e.exports = r
        },
        P7gm: function(e, t, n) {
            "use strict";
            var r = n("3/Ot");
            t.__esModule = !0, t.default = function(e, t, n, a, o, p) {
                for (var d, m = !1, h = (0, l.parseRelativeUrl)(e), g = (0, c.removePathTrailingSlash)((0, s.normalizeLocalePath)((0, u.delBasePath)(h.pathname), p).pathname), b = function(n) {
                        var l = f(n.source)(h.pathname);
                        if (n.has && l) {
                            var b = (0, i.matchHas)({
                                headers: {
                                    host: document.location.hostname
                                },
                                cookies: Object.fromEntries(document.cookie.split("; ").map((function(e) {
                                    var t = e.split("="),
                                        n = r(t);
                                    return [n[0], n.slice(1).join("=")]
                                })))
                            }, n.has, h.query);
                            b ? Object.assign(l, b) : l = !1
                        }
                        if (l) {
                            if (!n.destination) return !0;
                            var v = (0, i.default)(n.destination, l, a, !0);
                            if (h = v.parsedDestination, e = v.newUrl, Object.assign(a, v.parsedDestination.query), g = (0, c.removePathTrailingSlash)((0, s.normalizeLocalePath)((0, u.delBasePath)(e), p).pathname), t.includes(g)) return m = !0, d = g, !0;
                            if ((d = o(g)) !== e && t.includes(d)) return m = !0, !0
                        }
                    }, v = !1, y = 0; y < n.beforeFiles.length; y++) {
                    var _ = n.beforeFiles[y];
                    if (b(_)) {
                        v = !0;
                        break
                    }
                }
                if (!t.includes(g)) {
                    if (!v)
                        for (var j = 0; j < n.afterFiles.length; j++) {
                            var w = n.afterFiles[j];
                            if (b(w)) {
                                v = !0;
                                break
                            }
                        }
                    if (v || (d = o(g), m = t.includes(d), v = m), !v)
                        for (var O = 0; O < n.fallback.length; O++) {
                            var x = n.fallback[O];
                            if (b(x)) {
                                v = !0;
                                break
                            }
                        }
                }
                return {
                    asPath: e,
                    parsedAs: h,
                    matchedPage: m,
                    resolvedHref: d
                }
            };
            var a, o = (a = n("N6Fi")) && a.__esModule ? a : {
                    default: a
                },
                i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = p();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("6mnf")),
                c = n("X24+"),
                s = n("3wub"),
                l = n("hS4m"),
                u = n("elyg");

            function p() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function() {
                    return e
                }, e
            }
            var f = (0, o.default)(!0)
        },
        PMiD: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            var r = n("HALo"),
                a = n("dhJC"),
                o = n("q1tI"),
                i = n.n(o),
                c = n("Vvt1"),
                s = n.n(c),
                l = {
                    "components/arbitrary": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "EZyT"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["EZyT"]
                                },
                                modules: ["@/components/statamic-containers/arbitrary"]
                            }
                        })
                    },
                    "article-listings-localized": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(122)]).then(n.bind(null, "dmnP"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["dmnP"]
                                },
                                modules: ["@/components/statamic-containers/press-coverage"]
                            }
                        })
                    },
                    "article-listings": {
                        Component: s()((function() {
                            return Promise.all([n.e(1), n.e(124)]).then(n.bind(null, "i72b"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["i72b"]
                                },
                                modules: ["@/components/statamic-containers/press-releases"]
                            }
                        })
                    },
                    "article-cards-localized": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(103)]).then(n.bind(null, "jtAY"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["jtAY"]
                                },
                                modules: ["@/components/statamic-containers/article-cards-localized"]
                            }
                        })
                    },
                    asanas: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(104)]).then(n.bind(null, "jvVM"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["jvVM"]
                                },
                                modules: ["@/components/statamic-containers/asanas"]
                            }
                        })
                    },
                    accordion: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(102)]).then(n.bind(null, "uxko"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["uxko"]
                                },
                                modules: ["@/components/statamic-containers/accordion"]
                            }
                        })
                    },
                    "accordion-item": {
                        Component: s()((function() {
                            return n.e(45).then(n.bind(null, "fknt"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["fknt"]
                                },
                                modules: ["@/components/presentational/accordion-item"]
                            }
                        })
                    },
                    "reskin/atoms/button": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "RTPm"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["RTPm"]
                                },
                                modules: ["@/components/statamic-containers/button"]
                            }
                        })
                    },
                    "components/bordered-social-icons": {
                        Component: s()((function() {
                            return n.e(105).then(n.bind(null, "E9Yh"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["E9Yh"]
                                },
                                modules: ["@/components/statamic-containers/bordered-social-icons"]
                            }
                        })
                    },
                    "create-account-form": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(107)]).then(n.bind(null, "7l/L"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["7l/L"]
                                },
                                modules: ["@/components/statamic-containers/create-account-form"]
                            }
                        })
                    },
                    "atoms/cta": {
                        Component: s()((function() {
                            return Promise.resolve().then(n.bind(null, "VTyt"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["VTyt"]
                                },
                                modules: ["@/components/statamic-containers/cta"]
                            }
                        })
                    },
                    "atoms/cta-create-account": {
                        Component: s()((function() {
                            return Promise.resolve().then(n.bind(null, "9rhg"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["9rhg"]
                                },
                                modules: ["@/components/statamic-containers/cta-create-account"]
                            }
                        })
                    },
                    "reskin/interactive/new-homepage-slideshow": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(40)]).then(n.bind(null, "53sa"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["53sa"]
                                },
                                modules: ["@/components/statamic-containers/customer-slideshow"]
                            }
                        })
                    },
                    customers: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(41)]).then(n.bind(null, "rBGo"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["rBGo"]
                                },
                                modules: ["@/components/statamic-containers/customers"]
                            }
                        }),
                        scope: "customers"
                    },
                    "reskin/interactive/new-homepage-masthead": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(29)]).then(n.bind(null, "WL7e"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["WL7e"]
                                },
                                modules: ["@/components/statamic-containers/dynamic-masthead"]
                            }
                        })
                    },
                    "reskin/interactive/homepage-flow-charts-section": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(8)]).then(n.bind(null, "+5B9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["+5B9"]
                                },
                                modules: ["@/components/statamic-containers/homepage-flow-charts-section"]
                            }
                        })
                    },
                    "atoms/customers": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(108)]).then(n.bind(null, "DX/0"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["DX/0"]
                                },
                                modules: ["@/components/statamic-containers/customer-logos"]
                            }
                        })
                    },
                    "components/customer-slider": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(109)]).then(n.bind(null, "8Cdv"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["8Cdv"]
                                },
                                modules: ["@/components/statamic-containers/customer-slider"]
                            }
                        })
                    },
                    "reskin/template-gallery/inline-video": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(132)]).then(n.bind(null, "36VB"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["36VB"]
                                },
                                modules: ["@/components/statamic-containers/template-gallery/inline-video"]
                            }
                        })
                    },
                    "feature-callout": {
                        Component: s()((function() {
                            return n.e(110).then(n.bind(null, "rvnL"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["rvnL"]
                                },
                                modules: ["@/components/statamic-containers/feature-callout"]
                            }
                        }),
                        scope: "feature-callout"
                    },
                    "interactive/feature-carousel": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(13)]).then(n.bind(null, "LXF9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["LXF9"]
                                },
                                modules: ["@/components/statamic-containers/feature-carousel"]
                            }
                        })
                    },
                    "reskin/components/feature-carousel": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(13)]).then(n.bind(null, "LXF9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["LXF9"]
                                },
                                modules: ["@/components/statamic-containers/feature-carousel"]
                            }
                        })
                    },
                    "layout/form-signup-email": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "WAai"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["WAai"]
                                },
                                modules: ["@/components/statamic-containers/form-signup-email"]
                            }
                        })
                    },
                    glossary: {
                        Component: s()((function() {
                            return n.e(113).then(n.bind(null, "5Aln"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["5Aln"]
                                },
                                modules: ["@/components/statamic-containers/guide/glossary"]
                            }
                        })
                    },
                    "apps-directory": {
                        Component: s()((function() {
                            return Promise.all([n.e(19), n.e(0), n.e(1), n.e(33)]).then(n.bind(null, "dnsp"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["dnsp"]
                                },
                                modules: ["@/components/statamic-containers/apps-directory"]
                            }
                        })
                    },
                    "image-cards": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(14)]).then(n.bind(null, "+BBu"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["+BBu"]
                                },
                                modules: ["@/components/statamic-containers/image-cards"]
                            }
                        })
                    },
                    "components/image-cards": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(14)]).then(n.bind(null, "+BBu"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["+BBu"]
                                },
                                modules: ["@/components/statamic-containers/image-cards"]
                            }
                        })
                    },
                    "image-cards-localized": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(114)]).then(n.bind(null, "gb5U"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["gb5U"]
                                },
                                modules: ["@/components/statamic-containers/image-cards-localized"]
                            }
                        })
                    },
                    "image-with-info-sections": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(115)]).then(n.bind(null, "R10L"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["R10L"]
                                },
                                modules: ["@/components/statamic-containers/image-with-info-sections"]
                            }
                        })
                    },
                    jobs: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(118)]).then(n.bind(null, "3ByU"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["3ByU"]
                                },
                                modules: ["@/components/statamic-containers/jobs"]
                            }
                        })
                    },
                    "jobs-all": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(116)]).then(n.bind(null, "Ry09"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Ry09"]
                                },
                                modules: ["@/components/statamic-containers/jobs-all"]
                            }
                        })
                    },
                    "jobs-office-slider": {
                        Component: s()((function() {
                            return Promise.all([n.e(2), n.e(28)]).then(n.bind(null, "LSF5"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["LSF5"]
                                },
                                modules: ["@/components/statamic-containers/jobs-office-slider"]
                            }
                        })
                    },
                    "jobs-team-quote": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, "UVp9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["UVp9"]
                                },
                                modules: ["@/components/statamic-containers/jobs-team-quote"]
                            }
                        })
                    },
                    "jobs-team-employee-quote": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, "UVp9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["UVp9"]
                                },
                                modules: ["@/components/statamic-containers/jobs-team-quote"]
                            }
                        })
                    },
                    "reskin/components/marketing-form": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(120)]).then(n.bind(null, "D09x"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["D09x"]
                                },
                                modules: ["@/components/statamic-containers/marketing-form"]
                            }
                        })
                    },
                    "components/modals/signup": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "rAx0"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["rAx0"]
                                },
                                modules: ["@/components/statamic-containers/modals/signup"]
                            }
                        })
                    },
                    "atoms/narrow-cta-banner": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(16)]).then(n.bind(null, "f0Bf"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["f0Bf"]
                                },
                                modules: ["@/components/statamic-containers/narrow-cta-banner"]
                            }
                        })
                    },
                    "narrow-cta-banner": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(16)]).then(n.bind(null, "f0Bf"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["f0Bf"]
                                },
                                modules: ["@/components/statamic-containers/narrow-cta-banner"]
                            }
                        })
                    },
                    "homepage-feature-carousel": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(42)]).then(n.bind(null, "p/ad"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["p/ad"]
                                },
                                modules: ["@/components/statamic-containers/homepage-feature-carousel.js"]
                            }
                        })
                    },
                    "reskin/interactive/new-homepage-scrolling-features": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(43)]).then(n.bind(null, "/gJ4"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["/gJ4"]
                                },
                                modules: ["@/components/statamic-containers/scrolling-features"]
                            }
                        })
                    },
                    "press-release-single": {
                        Component: s()((function() {
                            return Promise.all([n.e(1), n.e(123)]).then(n.bind(null, "hIf3"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["hIf3"]
                                },
                                modules: ["@/components/statamic-containers/press-release-single"]
                            }
                        })
                    },
                    "pricing-grid": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(125)]).then(n.bind(null, "iDxR"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["iDxR"]
                                },
                                modules: ["@/components/statamic-containers/pricing-grid"]
                            }
                        })
                    },
                    "pricing-table": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(126)]).then(n.bind(null, "kOfj"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["kOfj"]
                                },
                                modules: ["@/components/statamic-containers/pricing-table"]
                            }
                        })
                    },
                    "sidebar-with-images": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(129)]).then(n.bind(null, "w1R1"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["w1R1"]
                                },
                                modules: ["@/components/statamic-containers/sidebar-with-images"]
                            }
                        })
                    },
                    "single-video": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(130)]).then(n.bind(null, "DUy+"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["DUy+"]
                                },
                                modules: ["@/components/statamic-containers/single-video"]
                            }
                        })
                    },
                    "components/text-blocks": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(5)]).then(n.bind(null, "xVQ7"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["xVQ7"]
                                },
                                modules: ["@/components/statamic-containers/text-blocks"]
                            }
                        }),
                        scope: "textblocks"
                    },
                    "atoms/table": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(131)]).then(n.bind(null, "jDDR"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["jDDR"]
                                },
                                modules: ["@/components/statamic-containers/table"]
                            }
                        })
                    },
                    "reskin/interactive/new-homepage-graph": {
                        Component: s()((function() {
                            return n.e(133).then(n.bind(null, "3YH5"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["3YH5"]
                                },
                                modules: ["@/components/statamic-containers/text-and-video-with-image-underlay"]
                            }
                        })
                    },
                    "text-blocks": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(5)]).then(n.bind(null, "xVQ7"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["xVQ7"]
                                },
                                modules: ["@/components/statamic-containers/text-blocks"]
                            }
                        })
                    },
                    "text-blocks-two": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(5)]).then(n.bind(null, "xVQ7"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["xVQ7"]
                                },
                                modules: ["@/components/statamic-containers/text-blocks"]
                            }
                        })
                    },
                    "text-blocks-three": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(5)]).then(n.bind(null, "xVQ7"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["xVQ7"]
                                },
                                modules: ["@/components/statamic-containers/text-blocks"]
                            }
                        })
                    },
                    "community-referral-switcher": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(106)]).then(n.bind(null, "lqeT"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["lqeT"]
                                },
                                modules: ["@/components/statamic-containers/community-referral-switcher"]
                            }
                        })
                    },
                    callout: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(112)]).then(n.bind(null, "6OpG"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["6OpG"]
                                },
                                modules: ["@/components/statamic-containers/guide/callout"]
                            }
                        })
                    },
                    "atoms/form-invite-signup": {
                        Component: s()((function() {
                            return n.e(111).then(n.bind(null, "fMMU"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["fMMU"]
                                },
                                modules: ["@/components/statamic-containers/form-invite-signup"]
                            }
                        })
                    },
                    "question-answer": {
                        Component: s()((function() {
                            return n.e(127).then(n.bind(null, "SbBI"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["SbBI"]
                                },
                                modules: ["@/components/statamic-containers/question-answer"]
                            }
                        })
                    },
                    "quote-wheel": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(17)]).then(n.bind(null, "JSUa"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["JSUa"]
                                },
                                modules: ["@/components/statamic-containers/quote-wheel"]
                            }
                        })
                    },
                    "components/quote-wheel": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(17)]).then(n.bind(null, "JSUa"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["JSUa"]
                                },
                                modules: ["@/components/statamic-containers/quote-wheel"]
                            }
                        })
                    },
                    "exp-quote-wheel": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(139)]).then(n.bind(null, "Y5YR"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Y5YR"]
                                },
                                modules: ["@/experiments/components/containers/experiment-quote-wheel"]
                            }
                        })
                    },
                    "atoms/youtube-popup": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(138)]).then(n.bind(null, "YRqH"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["YRqH"]
                                },
                                modules: ["@/components/statamic-containers/youtube-popup"]
                            }
                        })
                    },
                    "components/verification-gmail": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(134)]).then(n.bind(null, "Stl9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Stl9"]
                                },
                                modules: ["@/components/statamic-containers/verification-gmail"]
                            }
                        }),
                        scope: "verification_gmail"
                    },
                    "components/verification-gsuite": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(135)]).then(n.bind(null, "q5RX"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["q5RX"]
                                },
                                modules: ["@/components/statamic-containers/verification-gsuite"]
                            }
                        }),
                        scope: "verification_gsuite"
                    },
                    "components/verification-saml-optional": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(136)]).then(n.bind(null, "TqeT"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["TqeT"]
                                },
                                modules: ["@/components/statamic-containers/verification-saml-optional"]
                            }
                        })
                    },
                    "components/verification-saml-required": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(137)]).then(n.bind(null, "+Fex"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["+Fex"]
                                },
                                modules: ["@/components/statamic-containers/verification-saml-required"]
                            }
                        })
                    },
                    "atoms/accordion2": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(44)]).then(n.bind(null, "VKOb"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["VKOb"]
                                },
                                modules: ["@/components/presentational/accordion-alt"]
                            }
                        })
                    },
                    "accordion-media-carousel": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "pJ87"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["pJ87"]
                                },
                                modules: ["@/components/presentational/accordion-media-carousel"]
                            }
                        })
                    },
                    "components/asanas": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "AFSk"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["AFSk"]
                                },
                                modules: ["@/components/presentational/asanas"]
                            }
                        }),
                        scope: "asanas"
                    },
                    "atoms/animation": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "v2rO"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["v2rO"]
                                },
                                modules: ["@/components/presentational/animation"]
                            }
                        }),
                        scope: "animation"
                    },
                    "reskin/atoms/blockquote": {
                        Component: s()((function() {
                            return n.e(48).then(n.bind(null, "QTAi"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["QTAi"]
                                },
                                modules: ["@/components/presentational/blockquote"]
                            }
                        })
                    },
                    "reskin/components/border-cta": {
                        Component: s()((function() {
                            return n.e(49).then(n.bind(null, "Z5Fq"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Z5Fq"]
                                },
                                modules: ["@/components/presentational/border-cta"]
                            }
                        })
                    },
                    "center-text": {
                        Component: s()((function() {
                            return n.e(51).then(n.bind(null, "N0V5"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["N0V5"]
                                },
                                modules: ["@/components/presentational/center-text"]
                            }
                        })
                    },
                    "center-text-icon": {
                        Component: s()((function() {
                            return n.e(50).then(n.bind(null, "tv0U"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["tv0U"]
                                },
                                modules: ["@/components/presentational/center-text-icon"]
                            }
                        })
                    },
                    "components/email-buttons": {
                        Component: s()((function() {
                            return n.e(57).then(n.bind(null, "3mIp"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["3mIp"]
                                },
                                modules: ["@/components/presentational/email-buttons"]
                            }
                        })
                    },
                    "components/country-picker": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(53)]).then(n.bind(null, "a7tB"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["a7tB"]
                                },
                                modules: ["@/components/presentational/country-picker"]
                            }
                        }),
                        scope: "country_picker"
                    },
                    "components/compare-reviews": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(52)]).then(n.bind(null, "1YwK"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["1YwK"]
                                },
                                modules: ["@/components/presentational/compare-reviews"]
                            }
                        }),
                        scope: "compare_reviews"
                    },
                    "interactive/customer-marquee-drag": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(54)]).then(n.bind(null, "9GYZ"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["9GYZ"]
                                },
                                modules: ["@/components/presentational/customer-marquee-drag"]
                            }
                        })
                    },
                    "customer-proof": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(56)]).then(n.bind(null, "ZX27"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["ZX27"]
                                },
                                modules: ["@/components/presentational/customer-proof"]
                            }
                        })
                    },
                    "components/gallery-expander": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(61)]).then(n.bind(null, "qCB+"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["qCB+"]
                                },
                                modules: ["@/components/presentational/gallery-expander"]
                            }
                        }),
                        scope: "gallery_expander"
                    },
                    "reskin/components/downloadable-content-page": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(34)]).then(n.bind(null, "Zvgl"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Zvgl"]
                                },
                                modules: ["@/components/presentational/downloadable-content-page"]
                            }
                        })
                    },
                    "reskin/components/customer-parallax": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(55)]).then(n.bind(null, "FcmG"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["FcmG"]
                                },
                                modules: ["@/components/presentational/customer-parallax"]
                            }
                        })
                    },
                    "exp-animation": {
                        Component: s()((function() {
                            return n.e(140).then(n.bind(null, "T5xn"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["T5xn"]
                                },
                                modules: ["@/experiments/components/presentational/experiment-animation"]
                            }
                        }),
                        scope: "animation"
                    },
                    "exp-image": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "FSSv"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["FSSv"]
                                },
                                modules: ["@/experiments/components/presentational/experiment-image"]
                            }
                        }),
                        scope: "image"
                    },
                    "generic-cta": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "Wg94"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Wg94"]
                                },
                                modules: ["@/components/presentational/generic-cta"]
                            }
                        })
                    },
                    "growth-graph": {
                        Component: s()((function() {
                            return n.e(62).then(n.bind(null, "niVL"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["niVL"]
                                },
                                modules: ["@/components/presentational/growth-graph"]
                            }
                        })
                    },
                    "hero-headline": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(35)]).then(n.bind(null, "fOVh"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["fOVh"]
                                },
                                modules: ["@/components/presentational/hero-headline"]
                            }
                        })
                    },
                    "ascend/atoms/heading": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "NsYN"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["NsYN"]
                                },
                                modules: ["@/components/presentational/heading"]
                            }
                        })
                    },
                    "atoms/heading": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "NsYN"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["NsYN"]
                                },
                                modules: ["@/components/presentational/heading"]
                            }
                        }),
                        scope: "heading"
                    },
                    "reskin/atoms/headshot": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(63)]).then(n.bind(null, "vZTd"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["vZTd"]
                                },
                                modules: ["@/components/presentational/headshot"]
                            }
                        })
                    },
                    "reskin/components/hero-overhang-asset": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(64)]).then(n.bind(null, "E4wb"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["E4wb"]
                                },
                                modules: ["@/components/presentational/hero-overhang-asset"]
                            }
                        })
                    },
                    "atoms/horizontal-rule": {
                        Component: s()((function() {
                            return n.e(65).then(n.bind(null, "PiLC"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["PiLC"]
                                },
                                modules: ["@/components/presentational/horizontal-rule"]
                            }
                        })
                    },
                    "headshot-grid": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "O6dX"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["O6dX"]
                                },
                                modules: ["@/components/presentational/headshot-grid"]
                            }
                        })
                    },
                    "atoms/image": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "siQn"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["siQn"]
                                },
                                modules: ["@/components/presentational/image"]
                            }
                        }),
                        scope: "image"
                    },
                    "image-bleed": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, "4Kea"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["4Kea"]
                                },
                                modules: ["@/components/presentational/image-bleed"]
                            }
                        })
                    },
                    "image-bleed-one": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, "4Kea"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["4Kea"]
                                },
                                modules: ["@/components/presentational/image-bleed"]
                            }
                        })
                    },
                    "image-bleed-two": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, "4Kea"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["4Kea"]
                                },
                                modules: ["@/components/presentational/image-bleed"]
                            }
                        })
                    },
                    "image-bleed-three": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, "4Kea"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["4Kea"]
                                },
                                modules: ["@/components/presentational/image-bleed"]
                            }
                        })
                    },
                    "image-text": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "rfEF"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["rfEF"]
                                },
                                modules: ["@/components/statamic-containers/image-text"]
                            }
                        })
                    },
                    "image-text-two": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "rfEF"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["rfEF"]
                                },
                                modules: ["@/components/statamic-containers/image-text"]
                            }
                        })
                    },
                    "image-text-three": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "rfEF"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["rfEF"]
                                },
                                modules: ["@/components/statamic-containers/image-text"]
                            }
                        })
                    },
                    "image-text-stack-one": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "comW"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["comW"]
                                },
                                modules: ["@/components/statamic-containers/image-text-stack"]
                            }
                        })
                    },
                    "image-text-stack-two": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "comW"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["comW"]
                                },
                                modules: ["@/components/statamic-containers/image-text-stack"]
                            }
                        })
                    },
                    "image-text-stack-three": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "comW"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["comW"]
                                },
                                modules: ["@/components/statamic-containers/image-text-stack"]
                            }
                        })
                    },
                    "intro-list": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(67)]).then(n.bind(null, "9+cl"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["9+cl"]
                                },
                                modules: ["@/components/presentational/intro-list"]
                            }
                        })
                    },
                    "jobs-office-header": {
                        Component: s()((function() {
                            return n.e(9).then(n.bind(null, "oMpF"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["oMpF"]
                                },
                                modules: ["@/components/presentational/jobs-office-header"]
                            }
                        })
                    },
                    "jobs-team-header": {
                        Component: s()((function() {
                            return n.e(9).then(n.bind(null, "oMpF"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["oMpF"]
                                },
                                modules: ["@/components/presentational/jobs-office-header"]
                            }
                        })
                    },
                    "jobs-office-location": {
                        Component: s()((function() {
                            return n.e(72).then(n.bind(null, "L8dT"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["L8dT"]
                                },
                                modules: ["@/components/presentational/jobs-office-location"]
                            }
                        })
                    },
                    "jobs-awards-row": {
                        Component: s()((function() {
                            return n.e(68).then(n.bind(null, "hG0T"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["hG0T"]
                                },
                                modules: ["@/components/presentational/jobs-awards-row"]
                            }
                        })
                    },
                    "jobs-masthead": {
                        Component: s()((function() {
                            return n.e(46).then(n.bind(null, "hR+5"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["hR+5"]
                                },
                                modules: ["@/components/presentational/all-jobs-masthead"]
                            }
                        })
                    },
                    "jobs-filter": {
                        Component: s()((function() {
                            return n.e(69).then(n.bind(null, "XQfZ"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["XQfZ"]
                                },
                                modules: ["@/components/presentational/jobs-filter"]
                            }
                        })
                    },
                    "jobs-office-filter": {
                        Component: s()((function() {
                            return n.e(71).then(n.bind(null, "Emy1"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Emy1"]
                                },
                                modules: ["@/components/presentational/jobs-office-filter"]
                            }
                        })
                    },
                    "jobs-team-filter": {
                        Component: s()((function() {
                            return n.e(73).then(n.bind(null, "u9V1"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["u9V1"]
                                },
                                modules: ["@/components/presentational/jobs-team-filter"]
                            }
                        })
                    },
                    "jobs-office-benefits": {
                        Component: s()((function() {
                            return n.e(70).then(n.bind(null, "rclQ"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["rclQ"]
                                },
                                modules: ["@/components/presentational/jobs-office-benefits"]
                            }
                        })
                    },
                    "jobs-secondary-nav": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "IBJ6"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["IBJ6"]
                                },
                                modules: ["@/components/presentational/jobs-secondary-nav"]
                            }
                        })
                    },
                    "jobs-team-text": {
                        Component: s()((function() {
                            return n.e(74).then(n.bind(null, "NyLc"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["NyLc"]
                                },
                                modules: ["@/components/presentational/jobs-team-text"]
                            }
                        })
                    },
                    "jobs-footer": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(117)]).then(n.bind(null, "J8UX"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["J8UX"]
                                },
                                modules: ["@/components/statamic-containers/jobs-office-footer"]
                            }
                        })
                    },
                    "components/jotform": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, "a9Di"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["a9Di"]
                                },
                                modules: ["@/components/presentational/jotform"]
                            }
                        }),
                        scope: "jotform"
                    },
                    jotform: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, "a9Di"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["a9Di"]
                                },
                                modules: ["@/components/presentational/jotform"]
                            }
                        })
                    },
                    "components/marketing-form": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "ytUd"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["ytUd"]
                                },
                                modules: ["@/components/presentational/marketing-form"]
                            }
                        })
                    },
                    "ascend/type/label": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "6GH4"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["6GH4"]
                                },
                                modules: ["@/components/presentational/label"]
                            }
                        })
                    },
                    "ascend/type/list": {
                        Component: s()((function() {
                            return n.e(1).then(n.bind(null, "sn7Q"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["sn7Q"]
                                },
                                modules: ["@/components/presentational/list"]
                            }
                        })
                    },
                    "components/logo-farm": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(119)]).then(n.bind(null, "IdyE"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["IdyE"]
                                },
                                modules: ["@/components/statamic-containers/logo-farm"]
                            }
                        })
                    },
                    "reskin/interactive/new-homepage-footer-cta": {
                        Component: s()((function() {
                            return n.e(121).then(n.bind(null, "3iJQ"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["3iJQ"]
                                },
                                modules: ["@/components/statamic-containers/new-homepage-footer-cta"]
                            }
                        })
                    },
                    "marketing-form-section": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(36)]).then(n.bind(null, "kn4R"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["kn4R"]
                                },
                                modules: ["@/components/presentational/marketing-form-section"]
                            }
                        })
                    },
                    "reskin/components/logo-garden-wide": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(76)]).then(n.bind(null, "IQhl"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["IQhl"]
                                },
                                modules: ["@/components/presentational/logo-garden-wide"]
                            }
                        })
                    },
                    lottie: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(77)]).then(n.bind(null, "rIhY"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["rIhY"]
                                },
                                modules: ["@/components/presentational/lottie"]
                            }
                        })
                    },
                    masthead: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(32)]).then(n.bind(null, "oJba"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["oJba"]
                                },
                                modules: ["@/components/presentational/masthead"]
                            }
                        })
                    },
                    "masthead-image": {
                        Component: s()((function() {
                            return n.e(78).then(n.bind(null, "u2i8"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["u2i8"]
                                },
                                modules: ["@/components/presentational/masthead-image"]
                            }
                        })
                    },
                    "masthead-takeover": {
                        Component: s()((function() {
                            return n.e(79).then(n.bind(null, "EKdy"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["EKdy"]
                                },
                                modules: ["@/components/presentational/masthead-takeover"]
                            }
                        })
                    },
                    "masthead-timeline": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(80)]).then(n.bind(null, "w008"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["w008"]
                                },
                                modules: ["@/components/presentational/masthead-timeline"]
                            }
                        })
                    },
                    "multi-step-blocks": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(82)]).then(n.bind(null, "By9N"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["By9N"]
                                },
                                modules: ["@/components/presentational/multi-step-blocks"]
                            }
                        })
                    },
                    "atoms/paid-services-form": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(83)]).then(n.bind(null, "qxw/"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["qxw/"]
                                },
                                modules: ["@/components/presentational/paid-services-form"]
                            }
                        })
                    },
                    "ascend/type/paragraph": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "R0bo"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["R0bo"]
                                },
                                modules: ["@/components/presentational/paragraph"]
                            }
                        })
                    },
                    "atoms/paragraph": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "R0bo"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["R0bo"]
                                },
                                modules: ["@/components/presentational/paragraph"]
                            }
                        })
                    },
                    "components/product-display": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(85)]).then(n.bind(null, "kKhZ"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["kKhZ"]
                                },
                                modules: ["@/components/presentational/product-display"]
                            }
                        })
                    },
                    "reskin/components/review": {
                        Component: s()((function() {
                            return n.e(87).then(n.bind(null, "BM5Y"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["BM5Y"]
                                },
                                modules: ["@/components/presentational/review"]
                            }
                        })
                    },
                    "components/rotating-gallery": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "9oYD"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["9oYD"]
                                },
                                modules: ["@/components/presentational/rotating-gallery"]
                            }
                        }),
                        scope: "rotating_gallery"
                    },
                    "rotating-gallery": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "9oYD"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["9oYD"]
                                },
                                modules: ["@/components/presentational/rotating-gallery"]
                            }
                        })
                    },
                    "sales-form": {
                        Component: s()((function() {
                            return Promise.all([n.e(2), n.e(0), n.e(128)]).then(n.bind(null, "/JIg"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["/JIg"]
                                },
                                modules: ["@/components/statamic-containers/sales-form"]
                            }
                        })
                    },
                    "signup-cta": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "5rBc"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["5rBc"]
                                },
                                modules: ["@/components/presentational/signup-cta"]
                            }
                        })
                    },
                    "support/support-cards": {
                        Component: s()((function() {
                            return n.e(12).then(n.bind(null, "Bscc"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Bscc"]
                                },
                                modules: ["@/components/presentational/support/support-cards"]
                            }
                        })
                    },
                    "components/support/support-cards": {
                        Component: s()((function() {
                            return n.e(12).then(n.bind(null, "Bscc"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Bscc"]
                                },
                                modules: ["@/components/presentational/support/support-cards"]
                            }
                        }),
                        scope: "supportcards"
                    },
                    "components/support/support-header": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(89)]).then(n.bind(null, "IqdC"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["IqdC"]
                                },
                                modules: ["@/components/presentational/support/support-header"]
                            }
                        })
                    },
                    "components/support/support-learnings": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(90)]).then(n.bind(null, "+L04"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["+L04"]
                                },
                                modules: ["@/components/presentational/support/support-learnings"]
                            }
                        })
                    },
                    "components/support/support-options": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(91)]).then(n.bind(null, "Xhu3"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Xhu3"]
                                },
                                modules: ["@/components/presentational/support/support-options"]
                            }
                        })
                    },
                    "components/support/post-auth-pages": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(88)]).then(n.bind(null, "EwE0"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["EwE0"]
                                },
                                modules: ["@/components/presentational/support/post-auth-pages"]
                            }
                        })
                    },
                    "interactive/square-card-marquee-drag": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "loLh"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["loLh"]
                                },
                                modules: ["@/components/presentational/square-card-marquee-drag.js"]
                            }
                        })
                    },
                    "components/template-showcase": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(92)]).then(n.bind(null, "pfVJ"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["pfVJ"]
                                },
                                modules: ["@/components/presentational/template-showcase"]
                            }
                        }),
                        scope: "template_showcase"
                    },
                    testimonials: {
                        Component: s()((function() {
                            return n.e(1).then(n.bind(null, "ZvR7"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["ZvR7"]
                                },
                                modules: ["@/components/presentational/testimonials-slideshow"]
                            }
                        })
                    },
                    "text-around-image": {
                        Component: s()((function() {
                            return n.e(93).then(n.bind(null, "CHFq"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["CHFq"]
                                },
                                modules: ["@/components/presentational/text-around-image"]
                            }
                        })
                    },
                    "text-caption": {
                        Component: s()((function() {
                            return n.e(94).then(n.bind(null, "BI6M"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["BI6M"]
                                },
                                modules: ["@/components/presentational/text-caption"]
                            }
                        })
                    },
                    "atoms/textblock": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "R4Xt"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["R4Xt"]
                                },
                                modules: ["@/components/presentational/textblock"]
                            }
                        })
                    },
                    "atoms/textblock-enclosed": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "R4Xt"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["R4Xt"]
                                },
                                modules: ["@/components/presentational/textblock"]
                            }
                        }),
                        scope: "textblock"
                    },
                    "reskin/components/text-stack-centered": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "gNn9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["gNn9"]
                                },
                                modules: ["@/components/presentational/text-stack-centered"]
                            }
                        })
                    },
                    "reskin/components/text-stack-headshot-grid": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(96)]).then(n.bind(null, "NiDs"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["NiDs"]
                                },
                                modules: ["@/components/presentational/text-stack-headshot-grid"]
                            }
                        })
                    },
                    "atoms/text-stack-enclosed": {
                        Component: s()((function() {
                            return n.e(0).then(n.bind(null, "V0FR"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["V0FR"]
                                },
                                modules: ["@/components/presentational/text-stack-enclosed"]
                            }
                        }),
                        scope: "text_stack"
                    },
                    "atoms/text-stack": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(97)]).then(n.bind(null, "Hi6V"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Hi6V"]
                                },
                                modules: ["@/components/presentational/text-stack"]
                            }
                        })
                    },
                    "atoms/texts": {
                        Component: s()((function() {
                            return n.e(98).then(n.bind(null, "kZGz"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["kZGz"]
                                },
                                modules: ["@/components/presentational/texts"]
                            }
                        })
                    },
                    "components/video": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(101)]).then(n.bind(null, "MBTo"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["MBTo"]
                                },
                                modules: ["@/components/presentational/video"]
                            }
                        }),
                        scope: "video"
                    },
                    "reskin/components/video-popout": {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(100)]).then(n.bind(null, "ybvr"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["ybvr"]
                                },
                                modules: ["@/components/presentational/video-popup"]
                            }
                        })
                    },
                    partners: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(84)]).then(n.bind(null, "YtqJ"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["YtqJ"]
                                },
                                modules: ["@/components/presentational/partner-cards"]
                            }
                        })
                    },
                    "chart-dashboard": {
                        Component: s()((function() {
                            return Promise.all([n.e(2), n.e(0), n.e(1), n.e(27)]).then(n.bind(null, "p1x4"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["p1x4"]
                                },
                                modules: ["@/components/statamic-containers/chart-dashboard"]
                            }
                        })
                    },
                    appsCarousel: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(47)]).then(n.bind(null, "gUdq"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["gUdq"]
                                },
                                modules: ["@/components/presentational/apps-carousel"]
                            }
                        })
                    },
                    contentfulCustomers: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(60)]).then(n.bind(null, "zfV/"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["zfV/"]
                                },
                                modules: ["@/components/presentational/featured-brands"]
                            }
                        })
                    },
                    faqs: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(58)]).then(n.bind(null, "iwpl"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["iwpl"]
                                },
                                modules: ["@/components/presentational/faqs/index"]
                            }
                        })
                    },
                    featureCarousel: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(59)]).then(n.bind(null, "qTJg"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["qTJg"]
                                },
                                modules: ["@/components/presentational/feature-carousel/index"]
                            }
                        })
                    },
                    flowcharts: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(8)]).then(n.bind(null, "+5B9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["+5B9"]
                                },
                                modules: ["@/components/statamic-containers/homepage-flow-charts-section"]
                            }
                        })
                    },
                    hero: {
                        Component: s()((function() {
                            return Promise.all([n.e(2), n.e(0), n.e(26)]).then(n.bind(null, "wYDU"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["wYDU"]
                                },
                                modules: ["@/components/presentational/hero"]
                            }
                        })
                    },
                    imagevideoTextStack: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(66)]).then(n.bind(null, "UvOj"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["UvOj"]
                                },
                                modules: ["@/components/presentational/image-video-text-stack"]
                            }
                        })
                    },
                    listCta: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(75)]).then(n.bind(null, "NZEj"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["NZEj"]
                                },
                                modules: ["@/components/presentational/list-cta"]
                            }
                        })
                    },
                    midPageCta: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1), n.e(81)]).then(n.bind(null, "W0J9"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["W0J9"]
                                },
                                modules: ["@/components/presentational/mid-page-cta/index"]
                            }
                        })
                    },
                    quoteWheel: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(86)]).then(n.bind(null, "gP+j"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["gP+j"]
                                },
                                modules: ["@/components/presentational/quote-wheel/index"]
                            }
                        })
                    },
                    textBlocks: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "Ahz6"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Ahz6"]
                                },
                                modules: ["@/components/presentational/text-blocks/index"]
                            }
                        })
                    },
                    textStackCentered: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(95)]).then(n.bind(null, "Cm2E"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["Cm2E"]
                                },
                                modules: ["@/components/presentational/text-stack-centered-contentful"]
                            }
                        })
                    },
                    twoColumnTextStack: {
                        Component: s()((function() {
                            return Promise.all([n.e(0), n.e(99)]).then(n.bind(null, "gGhQ"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["gGhQ"]
                                },
                                modules: ["@/components/presentational/two-column-text-stack/index"]
                            }
                        })
                    }
                },
                u = n("jQyn"),
                p = n("AeFk");
            i.a.createElement;

            function f(e) {
                var t = e.componentName,
                    n = Object(a.a)(e, ["componentName"]),
                    o = l[t];
                return o ? Object(p.c)(i.a.Fragment, null, o.scope ? Object(p.c)(o.Component, Object(r.a)({
                    componentName: t
                }, n[o.scope])) : Object(p.c)(o.Component, Object(r.a)({
                    componentName: t
                }, n))) : (u.default.warn("Component ".concat(t, " does not exist.")), null)
            }
        },
        PYnI: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("AeFk");
            o.a.createElement;

            function c(e) {
                var t = e.condition,
                    n = e.Wrapper,
                    a = e.wrapperProps,
                    o = e.children;
                return t ? Object(i.c)(n, Object(r.a)({
                    children: o
                }, a)) : o
            }
        },
        PqPU: function(e, t) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e
            }
        },
        PtqM: function(e, t, n) {
            var r = n("NykK"),
                a = n("ExA7"),
                o = n("YO3V");
            e.exports = function(e) {
                if (!a(e)) return !1;
                var t = r(e);
                return "[object Error]" == t || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !o(e)
            }
        },
        Q1l4: function(e, t) {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                return t
            }
        },
        QIE6: function(e, t, n) {
            var r = n("7MhH"),
                a = n("wJvl"),
                o = a.formatDOM,
                i = a.isIE(9),
                c = /<(![a-zA-Z\s]+)>/;
            e.exports = function(e) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                var t, n = e.match(c);
                return n && n[1] && (t = n[1], i && (e = e.replace(n[0], ""))), o(r(e), null, t)
            }
        },
        QQ8Z: function(e, t) {
            e.exports = {
                MARKDOWN: "markdown",
                HTML: "html",
                STATAMIC_TAG: "statamic-tag",
                COMPONENT: "component",
                IGNORE: "ignore"
            }
        },
        QcOe: function(e, t, n) {
            var r = n("GoyQ"),
                a = n("6sVZ"),
                o = n("7Ix3"),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return o(e);
                var t = a(e),
                    n = [];
                for (var c in e)("constructor" != c || !t && i.call(e, c)) && n.push(c);
                return n
            }
        },
        Qetd: function(e, t, n) {
            "use strict";
            var r = Object.assign.bind(Object);
            e.exports = r, e.exports.default = e.exports
        },
        QhEq: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return d
            }));
            var r = n("AeFk"),
                a = n("DYRV"),
                o = n("tBhh"),
                i = {
                    purple: a.a.PURPLE_5,
                    blue: a.a.TEAL_5,
                    yellow: a.a.GOLD_5,
                    red: a.a.CORAL_5,
                    green: a.a.GREEN_5
                },
                c = Object(r.b)("border-radius:3px;font-weight:500;cursor:pointer;letter-spacing:0.5px;text-align:center;text-decoration:none;transition:background-color 150ms,color 150ms ease-in-out;white-space:nowrap;display:inline-block;&:hover{color:white;background:", a.a.PURPLE_5, ";border:1px solid ", a.a.PURPLE_5, ";}", ""),
                s = Object(r.b)("font-size:16px;line-height:", o.a.SPACING_48, ";height:", o.a.SPACING_48, ";padding:0 ", o.a.SPACING_24, ";", ""),
                l = Object(r.b)("font-size:14px;line-height:", o.a.SPACING_32, ";height:", o.a.SPACING_32, ";padding:0 ", o.a.SPACING_16, ";", ""),
                u = Object(r.b)("color:white;background:", a.a.GRAY_10, ";border:1px solid transparent;", ""),
                p = Object(r.b)("color:", a.a.GRAY_10, ";background:none;border:1px solid ", a.a.GRAY_10, ";", ""),
                f = {
                    primary: [c, u, s, {
                        label: "primary-regular"
                    }],
                    "primary-small": [c, u, l, {
                        label: "primary-small"
                    }],
                    secondary: [c, p, s, {
                        label: "secondary-regular"
                    }],
                    "secondary-small": [c, p, l, {
                        label: "secondary-small"
                    }]
                },
                d = function(e) {
                    return f[e]
                }
        },
        QkVE: function(e, t, n) {
            var r = n("EpBk");
            e.exports = function(e, t) {
                var n = e.__data__;
                return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }
        },
        QoRX: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }
        },
        QqLw: function(e, t, n) {
            var r = n("tadb"),
                a = n("ebwN"),
                o = n("HOxn"),
                i = n("yGk4"),
                c = n("Of+w"),
                s = n("NykK"),
                l = n("3Fdi"),
                u = "[object Map]",
                p = "[object Promise]",
                f = "[object Set]",
                d = "[object WeakMap]",
                m = "[object DataView]",
                h = l(r),
                g = l(a),
                b = l(o),
                v = l(i),
                y = l(c),
                _ = s;
            (r && _(new r(new ArrayBuffer(1))) != m || a && _(new a) != u || o && _(o.resolve()) != p || i && _(new i) != f || c && _(new c) != d) && (_ = function(e) {
                var t = s(e),
                    n = "[object Object]" == t ? e.constructor : void 0,
                    r = n ? l(n) : "";
                if (r) switch (r) {
                    case h:
                        return m;
                    case g:
                        return u;
                    case b:
                        return p;
                    case v:
                        return f;
                    case y:
                        return d
                }
                return t
            }), e.exports = _
        },
        "R/W3": function(e, t, n) {
            var r = n("KwMD"),
                a = n("2ajD"),
                o = n("CZoQ");
            e.exports = function(e, t, n) {
                return t === t ? o(e, t, n) : r(e, a, n)
            }
        },
        R0bo: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                a = n.n(r),
                o = n("TSYQ"),
                i = n.n(o),
                c = n("r3F2"),
                s = n("AeFk");
            a.a.createElement;
            t.default = function(e) {
                var t = e.id,
                    n = e.text;
                return Object(s.c)(a.a.Fragment, null, "quickCustomerQuote" === e.class ? Object(s.c)("div", {
                    className: i()(e.class),
                    id: t
                }, n && Object(s.c)(c.a, {
                    html: n
                })) : Object(s.c)("p", {
                    className: i()(e.class),
                    id: t
                }, n && Object(s.c)(c.a, {
                    html: n
                })))
            }
        },
        R4Xt: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return m
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("TSYQ"),
                i = n.n(o),
                c = n("r3F2"),
                s = n("4buk"),
                l = n("siQn"),
                u = n("PYnI"),
                p = n("VTyt"),
                f = n("R0bo"),
                d = n("AeFk");
            a.a.createElement;

            function m(e) {
                var t = e.pop,
                    n = e.align,
                    r = e.icon_notrans,
                    a = e.icon_color_notrans,
                    o = e.image,
                    m = e.img_src,
                    h = e.img_alt,
                    g = e.header,
                    b = e.header_class,
                    v = e.description,
                    y = e.description_class,
                    _ = e.link_text,
                    j = e.link_x,
                    w = e.link_is_button,
                    O = e.isLogos,
                    x = _ && j && t;
                return Object(d.c)("div", {
                    className: "textblock"
                }, Object(d.c)(u.a, {
                    condition: x,
                    Wrapper: function(e) {
                        var t = e.children,
                            n = e.link_x;
                        return Object(d.c)(p.default, {
                            className: "textblock-block-link",
                            href: n
                        }, t)
                    },
                    wrapperProps: {
                        link_x: e.link_x
                    }
                }, Object(d.c)("div", {
                    className: i()("textblock-content", {
                        "-pop": t
                    }, n)
                }, r && Object(d.c)("span", {
                    className: "textblock-icon"
                }, Object(d.c)(s.a, {
                    icon_notrans: r,
                    icon_color_notrans: a
                })), o ? Object(d.c)(l.default, o) : m && Object(d.c)(u.a, {
                    condition: O,
                    Wrapper: function(e) {
                        var t = e.children;
                        return Object(d.c)("div", null, t)
                    }
                }, Object(d.c)(l.default, {
                    className: "textblock-image",
                    src: m,
                    alt: h
                })), g && Object(d.c)("p", {
                    className: i()("textblock-title", "-large", b)
                }, Object(d.c)(c.a, {
                    html: g
                })), v && Object(d.c)(f.default, {
                    class: i()("textblock-body", y),
                    text: v
                }), x && Object(d.c)("span", {
                    className: i()("textblock-link-text", w ? "button -border" : "-a")
                }, Object(d.c)(c.a, {
                    html: _
                })), !x && _ && Object(d.c)(p.default, {
                    href: j,
                    className: i()("textblock-link-text", w ? "button -border" : "-small")
                }, Object(d.c)(c.a, {
                    html: _
                })))))
            }
        },
        RTPm: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return l
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("usKF"),
                c = n("arJ1"),
                s = n("AeFk");
            o.a.createElement;

            function l(e) {
                var t = Object(a.useContext)(i.a);
                return Object(s.c)(c.a, Object(r.a)({}, e, {
                    link: e.link || null,
                    class_notrans: "button " + e.class_notrans,
                    language: t.global_language
                }))
            }
        },
        Rfcb: function(e, t, n) {
            e.exports = n("hi6i")
        },
        RrRF: function(e, t) {
            e.exports = function() {}
        },
        "Rw8+": function(e, t, n) {
            var r = n("heNW"),
                a = n("EldB"),
                o = n("a1zH"),
                i = n("5sOR"),
                c = n("V9aw"),
                s = n("6KkN"),
                l = n("Kz5y");
            e.exports = function(e, t, n) {
                var u = a(e);
                return function a() {
                    for (var p = arguments.length, f = Array(p), d = p, m = c(a); d--;) f[d] = arguments[d];
                    var h = p < 3 && f[0] !== m && f[p - 1] !== m ? [] : s(f, m);
                    if ((p -= h.length) < n) return i(e, t, o, a.placeholder, void 0, f, h, void 0, void 0, n - p);
                    var g = this && this !== l && this instanceof a ? u : e;
                    return r(g, this, f)
                }
            }
        },
        S0v1: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("Vvt1"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                c = n("jQyn"),
                s = n("AeFk"),
                l = (i.a.createElement, {
                    default: a()((function() {
                        return n.e(0).then(n.bind(null, "fdBv"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["fdBv"]
                            },
                            modules: ["./default"]
                        }
                    }),
                    guide: a()((function() {
                        return Promise.all([n.e(0), n.e(142)]).then(n.bind(null, "b3bF"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["b3bF"]
                            },
                            modules: ["./guide"]
                        }
                    }),
                    blank: a()((function() {
                        return Promise.all([n.e(0), n.e(141)]).then(n.bind(null, "z9o0"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["z9o0"]
                            },
                            modules: ["./blank"]
                        }
                    }),
                    print: a()((function() {
                        return n.e(144).then(n.bind(null, "Yei0"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["Yei0"]
                            },
                            modules: ["./print"]
                        }
                    })
                });

            function u(e) {
                e || (e = "default");
                var t = l[e];
                if (!t) {
                    c.default.error("Layout ".concat(e, " does not exist."));
                    var r = a()((function() {
                        return n.e(143).then(n.bind(null, "9WWA"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["9WWA"]
                            },
                            modules: ["./placeholder-layout"]
                        }
                    });
                    return function() {
                        return Object(s.c)(r, {
                            layoutName: e
                        })
                    }
                }
                return t
            }
        },
        SRXQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("xROn"),
                a = {};
            try {
                r.existsSync("../../public/assets/dist/hashed/rev-manifest.json") && (a = n("f7rL"))
            } catch (i) {
                console.warn("Legacy asset mapping not found; builds will not include hashed URLs.")
            }

            function o(e) {
                return e in a ? "/assets/dist/hashed/".concat(a[e]) : "/assets/dist/".concat(e)
            }
        },
        SVgp: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                var t = Object.create(null);
                return function(n) {
                    return void 0 === t[n] && (t[n] = e(n)), t[n]
                }
            }
        },
        SfRM: function(e, t, n) {
            var r = n("YESw");
            e.exports = function() {
                this.__data__ = r ? r(null) : {}, this.size = 0
            }
        },
        SwUY: function(e, t, n) {
            (function(t) {
                var r = n("/GRZ"),
                    a = n("i2R6"),
                    o = function() {
                        "use strict";

                        function e() {
                            r(this, e), this.override = "true" === t.env.PREVIEW_OVERRIDE, this.isEnabled = !1
                        }
                        return a(e, [{
                            key: "enabled",
                            get: function() {
                                return this.override || this.isEnabled
                            },
                            set: function(e) {
                                this.isEnabled = e
                            }
                        }]), e
                    }();
                e.exports = new o
            }).call(this, n("8oxB"))
        },
        Swqf: function(e, t, n) {
            "use strict";
            var r = n("2mql"),
                a = n.n(r);
            t.a = function(e, t) {
                return a()(e, t)
            }
        },
        Sxd8: function(e, t, n) {
            var r = n("ZCgT");
            e.exports = function(e) {
                var t = r(e),
                    n = t % 1;
                return t === t ? n ? t - n : t : 0
            }
        },
        T0f4: function(e, t) {
            function n(t) {
                return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(t)
            }
            e.exports = n
        },
        T8tx: function(e, t, n) {
            var r = n("ulEd"),
                a = n("2lMS"),
                o = n("wclG"),
                i = n("/lCS");
            e.exports = function(e, t, n) {
                var c = t + "";
                return o(e, a(c, i(r(c), n)))
            }
        },
        TKEn: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("q1tI");

            function a() {
                var e = Object(r.useState)(0),
                    t = e[0],
                    n = e[1],
                    a = Object(r.useState)(0),
                    o = a[0],
                    i = a[1],
                    c = Object(r.useState)(null),
                    s = c[0],
                    l = c[1];

                function u() {
                    return document ? Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth) : null
                }

                function p() {
                    return document ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : null
                }
                return Object(r.useDebugValue)(t), Object(r.useDebugValue)(s), Object(r.useEffect)((function() {
                    document && (i(p()), n(u()), l(function() {
                        var e = navigator.userAgent,
                            t = navigator.platform;
                        if (!e) return null;
                        if (t && ["iPad", "iPhone", "iPod"].includes(t) || e.includes("Mac") && "ontouchend" in document) return "ios";
                        return e.match(/Android|Pixel/) ? "android" : e.match(/MSIE/) ? "ie" : null
                    }()), window.addEventListener("resize", (function() {
                        n(u()), i(p())
                    })))
                }), []), {
                    isMobile: t <= 480,
                    isDesktop: t > 480,
                    isMobilePlatform: "ios" === s || "android" === s,
                    platform: s,
                    viewportWidth: t,
                    viewportHeight: o
                }
            }
        },
        TLkI: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("AeFk");
            a.a.createElement;

            function i() {
                return Object(o.c)("div", {
                    className: "modal-loading"
                }, Object(o.c)("div", {
                    className: "loading-indicator"
                }, Object(o.c)("div", {
                    className: "loadingIndicator-dot -large"
                })))
            }
        },
        TO8r: function(e, t) {
            var n = /\s/;
            e.exports = function(e) {
                for (var t = e.length; t-- && n.test(e.charAt(t)););
                return t
            }
        },
        TOwV: function(e, t, n) {
            "use strict";
            e.exports = n("qT12")
        },
        TSYQ: function(e, t, n) {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function a() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var o = typeof r;
                            if ("string" === o || "number" === o) e.push(r);
                            else if (Array.isArray(r) && r.length) {
                                var i = a.apply(null, r);
                                i && e.push(i)
                            } else if ("object" === o)
                                for (var c in r) n.call(r, c) && r[c] && e.push(c)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (r = function() {
                    return a
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        TYy9: function(e, t, n) {
            var r = n("XGnz");
            e.exports = function(e) {
                return (null == e ? 0 : e.length) ? r(e, 1) : []
            }
        },
        "UNi/": function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        UlJF: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function a(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        V0FR: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("4buk"),
                l = n("VTyt"),
                u = n("siQn"),
                p = n("AeFk"),
                f = (o.a.createElement, function(e) {
                    var t = e.src,
                        n = e.alt,
                        r = e.link;
                    return r ? Object(p.c)(l.default, {
                        className: "logo-image",
                        href: r
                    }, Object(p.c)(u.default, {
                        src: t,
                        alt: n
                    })) : Object(p.c)("div", {
                        className: "logo-image"
                    }, Object(p.c)(u.default, {
                        src: t,
                        alt: n
                    }))
                }),
                d = n("EZyT"),
                m = n("r3F2"),
                h = (o.a.createElement, function(e) {
                    var t = e.Component,
                        n = e.children,
                        r = e.className;
                    return Object(p.c)(t, {
                        className: r
                    }, n)
                });
            t.default = function(e) {
                var t = e.heading,
                    n = e.label,
                    a = e.subheading,
                    o = e.cta,
                    i = e.logos_inline,
                    u = e.children,
                    g = e.arbitrary;
                return Object(p.c)("div", {
                    className: "textStack"
                }, n && Object(p.c)("span", {
                    className: c()("-label", n.label_class)
                }, n.icon && Object(p.c)(s.a, n.icon), "string" === typeof n && Object(p.c)(m.a, {
                    html: n
                })), t && t.text && Object(p.c)(h, {
                    Component: t.size_notrans || "h4",
                    className: c()("heading", t.class_notrans)
                }, t.text && Object(p.c)(m.a, {
                    html: t.text
                })), a && a.text && Object(p.c)("p", {
                    className: c()("subheading", a.class_notrans, {
                        "-large": a.large
                    })
                }, Object(p.c)(m.a, {
                    html: a.text
                })), i && Object(p.c)("div", {
                    className: "logos-inline mb-3"
                }, i.map((function(e, t) {
                    return Object(p.c)(f, Object(r.a)({}, e, {
                        key: t
                    }))
                }))), u && u, o && Object(p.c)(l.default, o), g && Object(p.c)(d.default, {
                    arbitrary: g
                }))
            }
        },
        V2NO: function(e, t, n) {
            "use strict";
            var r;
            ! function(e) {
                e[e.PAGELOAD = 0] = "PAGELOAD", e[e.CUSTOM_EVENT = 1] = "CUSTOM_EVENT"
            }(r || (r = {}));
            var a = {
                regionalizedLogos: {
                    prodIds: ["7tX-fqD3SNSlEefcPhWzTw"],
                    activationType: r.CUSTOM_EVENT,
                    props: {
                        ja: ["japan-airlines", "ricoh", "finc", "nikkei", "mori", "toto", "ebiya"],
                        de: ["dhl", "roche", "beiersdorf", "messe-dusseldorf", "delivery-hero", "team-beverage", "vaillant", "blinkist"],
                        pt: ["dhl", "autodesk", "bobbi-brown", "spotify", "sky", "danone", "charlotte-tilbury", "dr-martens"],
                        es: ["dhl", "autodesk", "bobbi-brown", "spotify", "sky", "danone", "charlotte-tilbury", "dr-martens"],
                        fr: ["danone", "loreal", "doctolib", "algolia", "lvmh", "leroy-merlin", "station-f", "engie"]
                    },
                    customEvent: "optimize.logos-in-view"
                },
                showFeaturesVisually: {
                    prodIds: ["HeOTiqcHTRmUYnXfVuIQ4Q"],
                    activationType: r.PAGELOAD,
                    props: [{
                        name: "Dashboards",
                        imgSrc1x: "https://luna1.co/d41aa0.png",
                        copy: "Find relevant project data in one place, organized into real-time charts. And quickly see if work is blocked or off track and why."
                    }, {
                        name: "Goals",
                        imgSrc1x: "https://luna1.co/0eab07.png",
                        copy: "Align your company with Goals. Connect your company goals and the work to support them in one place, so everyone can see how their work contributes to company goals."
                    }, {
                        name: "Unlimited tasks",
                        imgSrc1x: "https://luna1.co/d61bbc.png",
                        copy: "Break work down into small, actionable steps with tasks. Assign tasks to your team with assignees and due dates, comment on each others' tasks, and attach files to drive work forward."
                    }, {
                        name: "List view projects",
                        imgSrc1x: "https://luna1.co/45fb7b.png",
                        copy: "Create to-do lists for project plans and manage every step from start to finish."
                    }, {
                        name: "Calendar view",
                        imgSrc1x: "https://luna1.co/0ba510.png",
                        copy: "See any list of tasks on a Calendar to get a clear view of when work is due."
                    }, {
                        name: "Timeline",
                        imgSrc1x: "https://luna1.co/f8f556.png",
                        copy: "See how work maps out over time in a Gantt chart format, and manage dependent, unscheduled, and overlapping tasks with ease."
                    }, {
                        name: "Advanced search & reporting",
                        imgSrc1x: "https://luna1.co/a371a8.png",
                        copy: "Run reports based on specific criteria that\u2019s most important to your team. Save your reports to see work across projects, assignees, custom fields and more."
                    }, {
                        name: "Custom fields",
                        imgSrc1x: "https://luna1.co/d7ab6a.png",
                        copy: "Label tasks with key information with text, dropdown or number fields."
                    }, {
                        name: "Forms",
                        imgSrc1x: "https://luna1.co/11b92c.png",
                        copy: "Create a standard intake process with Forms, and make it easy for others to request work."
                    }, {
                        name: "Custom rules builder",
                        imgSrc1x: "https://luna1.co/c4c25a.png",
                        copy: "Automate common processes with popular pre-set rules."
                    }, {
                        name: "Unlimited Custom Rules with unlimited actions",
                        imgSrc1x: "https://luna1.co/c4c25a.png",
                        copy: "Automate common processes with popular pre-set rules."
                    }, {
                        name: "Milestones",
                        imgSrc1x: "https://luna1.co/fe25ac.png",
                        copy: "Visualize significant checkpoints in your project to measure and share progress."
                    }, {
                        name: "Admin Console",
                        imgSrc1x: "https://luna1.co/8da074.png",
                        copy: "With admin console, you can manage members and teams, billing info, security settings for your organization. You can also see Asana activity across your organization."
                    }, {
                        name: "Portfolios",
                        imgSrc1x: "https://luna1.co/43b889.png",
                        copy: "Monitor and manage groups of projects with Portfolios to see a high level status of your important projects."
                    }, {
                        name: "Workload",
                        imgSrc1x: "https://luna1.co/e97f97.png",
                        copy: "Assess team bandwidth, assign new work, and load balance tasks amongst your team so that your team is more productive and avoids burnout."
                    }, {
                        name: "Approvals",
                        imgSrc1x: "https://luna1.co/0a8f54.png",
                        copy: "Clarify your approvals process to make sure teams know what work needs to be approved and when."
                    }, {
                        name: "Forms branching & customization",
                        imgSrc1x: "https://luna1.co/57a90d.png",
                        copy: "Forms branching enables you to create follow-up questions associated with particular responses to dropdown or multi-select questions."
                    }]
                },
                premiumCtaColor: {
                    prodIds: ["ZcV99JZMQZGmP5mGqQCntw"],
                    activationType: r.PAGELOAD,
                    props: {
                        1: ".premium-page .premium-masthead-row .textStack a,.premium-page .siteHeader .siteHeader-buttons a{background-color:#fff;color:#151b26;border:1px solid transparent}.premium-page .premium-masthead-row .textStack a:hover,.premium-page .siteHeader .siteHeader-buttons a:hover{background-color:#151b26;color:#fff;border:1px solid #fff}.premium-page .siteHeader.-is-scrolling .siteHeader-buttons a{background-color:#796eff;color:#fff;border:1px solid transparent}.premium-page .siteHeader.-is-scrolling .siteHeader-buttons a:hover{background-color:#635ac7;color:#fff;border:1px solid transparent}",
                        2: ".premium-page .premium-masthead-row .textStack a,.premium-page .siteHeader .siteHeader-buttons a{background-color:#fff;color:#151b26}.premium-page .premium-masthead-row .textStack a:hover,.premium-page .siteHeader .siteHeader-buttons a:hover{background-color:#635ac7;color:#fff}.premium-page .siteHeader.-is-scrolling .siteHeader-buttons a{background-color:#796eff;color:#fff}.premium-page .siteHeader.-is-scrolling .siteHeader-buttons a:hover{background-color:#635ac7;color:#fff}"
                    }
                },
                nonprofitVisabilty: {
                    prodIds: ["sLPcO1qpThuJYd4eyyG9Gw"],
                    activationType: r.CUSTOM_EVENT,
                    customEvent: "optimize.nonprofit-logos-in-view"
                },
                stickyNavMobile: {
                    prodIds: ["cxiO_0O8SVqg_9YHSShTmA"],
                    activationType: r.CUSTOM_EVENT,
                    customEvent: "optimize.activate-stickynav"
                },
                multipleWatchVideoCtas: {
                    prodIds: ["gabM16BuSvmCQYXd9aw0UQ"],
                    activationType: r.PAGELOAD,
                    props: {
                        productAdCampaign: {
                            copy: "Watch video",
                            vimeoId: "424929060",
                            name: "Product Ad Campaign"
                        },
                        fallAdCampaign: {
                            copy: "Watch video",
                            vimeoId: "460434142",
                            name: "Fall Ad Campaign"
                        }
                    }
                },
                pricingFontSize: {
                    prodIds: ["w7jywyNQSuSv0EPW8aUIpQ"],
                    activationType: r.PAGELOAD
                },
                delightfulCta: {
                    prodIds: ["ZBW_NnS8QNey4nOH8jU3bg"],
                    activationType: r.CUSTOM_EVENT,
                    customEvent: "optimize.activate-delightfulCta"
                },
                mobileSignupContinueWithGoogleButton: {
                    prodIds: ["eEvdxTFASlyVk753gvHXOw"],
                    activationType: r.CUSTOM_EVENT,
                    props: {
                        orText: {
                            de: "oder",
                            en: "or",
                            es: "o",
                            fr: "ou",
                            ja: "\u307e\u305f\u306f",
                            pt: "ou"
                        }
                    }
                },
                desktopSignupWithGoogleButton: {
                    prodIds: ["-XgoTrMcR8mjadEQeUKghA"],
                    activationType: r.PAGELOAD,
                    props: {
                        orText: {
                            de: "oder",
                            en: "or",
                            es: "o",
                            fr: "ou",
                            ja: "\u307e\u305f\u306f",
                            pt: "ou"
                        }
                    }
                },
                homepageCtaText: {
                    prodIds: ["RFcxM0XaTd2QxTtf79XMbw"],
                    activationType: r.PAGELOAD,
                    props: {
                        signupEmail: "Sign up for free",
                        signupTrial: "Sign up for free"
                    }
                },
                selfServeEnterpriseContrast: {
                    prodIds: ["MA2-qLNBTL67lJLUdu4IZw"],
                    activationType: r.PAGELOAD
                },
                concreteCopyLoggedOut: {
                    prodIds: ["gjdZvGkXS4KKvkWd1ysR4w"],
                    activationType: r.PAGELOAD
                },
                concreteCopyLoggedIn: {
                    prodIds: ["4epZ3BY2T_WFAVeDN-e2Pg"],
                    activationType: r.PAGELOAD
                },
                changeLearnMoreLinks: {
                    prodIds: ["jkQY9pZ8STOvMmlnwaF7ag"],
                    activationType: r.CUSTOM_EVENT,
                    customEvent: "optimize.activate-changeLearnMoreLinks"
                },
                pricingPageReskin: {
                    prodIds: ["UHVJnxCgTWaywPpc3oMF8Q"],
                    activationType: r.PAGELOAD
                },
                homepageScrollability: {
                    prodIds: ["jw1R6DuPSfKI6MBDn3iAtg"],
                    activationType: r.PAGELOAD
                },
                unlimitedRulesIntegrationActions: {
                    prodIds: ["wmZPbv9bRM2mlzRPEDDl-A"],
                    activationType: r.PAGELOAD,
                    props: {
                        de: {
                            preSetRules: "Vordefinierte Regeln mit unbegrenzten Aktionen",
                            unlimitedCustomRules: "Unbegrenzte benutzerdefinierte Regeln und Aktionen",
                            unlimitedCustomIntegrations: "Unbegrenzte benutzerdefinierte Regeln und Aktionen f\xfcr Integrationen"
                        },
                        en: {
                            preSetRules: "Pre-set Rules with unlimited actions",
                            unlimitedCustomRules: "Unlimited custom Rules with unlimited actions",
                            unlimitedCustomIntegrations: "Unlimited custom integration Rules with unlimited actions"
                        },
                        es: {
                            preSetRules: "Reglas predefinidas con acciones ilimitadas",
                            unlimitedCustomRules: "Reglas personalizadas ilimitadas con acciones ilimitadas",
                            unlimitedCustomIntegrations: "Reglas de integraci\xf3n personalizadas e ilimitadas con acciones ilimitadas"
                        },
                        fr: {
                            preSetRules: "R\xe8gles pr\xe9d\xe9finies, nombre illimit\xe9 d\u2019actions",
                            unlimitedCustomRules: "R\xe8gles personnalis\xe9es illimit\xe9es, nombre illimit\xe9 d\u2019actions",
                            unlimitedCustomIntegrations: "R\xe8gles personnalis\xe9es avec options d\u2019int\xe9gration illimit\xe9es, nombre illimit\xe9 d\u2019actions"
                        },
                        ja: {
                            preSetRules: "\u3042\u3089\u3086\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u542b\u3080\u4e8b\u524d\u8a2d\u5b9a\u3055\u308c\u305f\u30eb\u30fc\u30eb",
                            unlimitedCustomRules: "\u3042\u3089\u3086\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u542b\u3080\u7121\u5236\u9650\u306e\u30ab\u30b9\u30bf\u30e0\u30eb\u30fc\u30eb",
                            unlimitedCustomIntegrations: "\u3042\u3089\u3086\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u542b\u3080\u7121\u5236\u9650\u306e\u30ab\u30b9\u30bf\u30e0\u9023\u643a\u30eb\u30fc\u30eb"
                        },
                        pt: {
                            preSetRules: "Regras predefinidas com a\xe7\xf5es ilimitadas",
                            unlimitedCustomRules: "Campos personalizados e a\xe7\xf5es ilimitados",
                            unlimitedCustomIntegrations: "Regras de integra\xe7\xe3o personalizadas e a\xe7\xf5es ilimitadas"
                        },
                        premiumTableCheckmarks: [{
                            icon_notrans: ""
                        }, {
                            icon_notrans: "checkmark"
                        }, {
                            icon_notrans: "checkmark"
                        }, {
                            icon_notrans: "checkmark"
                        }],
                        businessTableCheckmarks: [{
                            icon_notrans: ""
                        }, {
                            icon_notrans: ""
                        }, {
                            icon_notrans: "checkmark"
                        }, {
                            icon_notrans: "checkmark"
                        }]
                    }
                },
                pricingFastPass: {
                    prodIds: ["YP1XouoXQl-YU8msPLIl0w"],
                    activationType: r.PAGELOAD
                },
                pageLoadDataExperiment: {
                    prodIds: ["4nErAbWMQhSKzm5Tclb42A"],
                    activationType: r.PAGELOAD,
                    props: {
                        customers_headline: "Teams do great things with Asana"
                    }
                },
                pageLoadComponentExperiment: {
                    prodIds: ["YBSEyh_SSbO1RZwd98GvuA"],
                    activationType: r.PAGELOAD
                },
                activationEventExperiment: {
                    prodIds: ["JRZOm-9zTPOomkYPT3XC3g"],
                    activationType: r.CUSTOM_EVENT,
                    customEvent: "optimize.activate-1",
                    props: {
                        customers_subhead: "you clicked me"
                    }
                },
                testExperimentOne: {
                    prodIds: ["1234exampleExperimentID"],
                    activationType: r.PAGELOAD
                },
                testExperimentTwo: {
                    prodIds: ["1234exampleExperimentIDs"],
                    activationType: r.PAGELOAD
                }
            };
            t.a = a
        },
        V6Ve: function(e, t, n) {
            var r = n("kekF")(Object.keys, Object);
            e.exports = r
        },
        V9aw: function(e, t) {
            e.exports = function(e) {
                return e.placeholder
            }
        },
        "VHp+": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("TSYQ"),
                i = n.n(o),
                c = n("AeFk");
            a.a.createElement;
            t.a = function(e) {
                var t = e.modifier;
                return Object(c.c)("div", {
                    className: i()("arrowPacman", {
                        "-short": "small" == t
                    })
                }, Object(c.c)("div", {
                    className: "arrowPacman-clip"
                }, Object(c.c)("svg", {
                    width: "small" === t ? "100%" : "21px",
                    height: "small" === t ? "100%" : "14px",
                    viewBox: "small" === t ? "0 0 28 19" : "0 0 21 14",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink"
                }, Object(c.c)("g", {
                    stroke: "none",
                    strokeWidth: "1"
                }, Object(c.c)("path", {
                    d: "M14.0384446,0 L12.8846104,1.00339949 L17.5361471,6.23552253 L0,6.23552253 L0,7.76448894 L17.5361471,7.76448894 L12.8846104,12.996612 L14.0384638,14 L20,7.00020068 L14.0384446,0 Z"
                }))), Object(c.c)("svg", {
                    width: "small" === t ? "100%" : "21px",
                    height: "small" === t ? "100%" : "14px",
                    viewBox: "small" === t ? "0 0 28 19" : "0 0 21 14",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink"
                }, Object(c.c)("g", {
                    stroke: "none",
                    strokeWidth: "1"
                }, Object(c.c)("path", {
                    d: "M14.0384446,0 L12.8846104,1.00339949 L17.5361471,6.23552253 L0,6.23552253 L0,7.76448894 L17.5361471,7.76448894 L12.8846104,12.996612 L14.0384638,14 L20,7.00020068 L14.0384446,0 Z"
                })))))
            }
        },
        VOtZ: function(e, t, n) {
            var r = n("juv8"),
                a = n("MvSz");
            e.exports = function(e, t) {
                return r(e, a(e), t)
            }
        },
        VTyt: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return u
            }));
            var r = n("HALo"),
                a = n("xvhg"),
                o = n("q1tI"),
                i = n.n(o),
                c = n("usKF"),
                s = n("ZPaE"),
                l = n("AeFk");
            i.a.createElement;

            function u(e) {
                var t = Object(o.useContext)(c.a),
                    n = (e = e.cta || e).link || e.href;
                return Object(l.c)(i.a.Fragment, null, 0 === +Object.keys(e)[0] ? Object.entries(e).map((function(e) {
                    var n = Object(a.a)(e, 2),
                        o = n[0],
                        i = n[1],
                        c = i.link || i.href;
                    return Object(l.c)(s.a, Object(r.a)({}, i, {
                        link: c || null,
                        key: o,
                        language: t.global_language
                    }))
                })) : Object(l.c)(s.a, Object(r.a)({}, e, {
                    link: n || null,
                    language: t.global_language
                })))
            }
        },
        VaNO: function(e, t) {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        },
        VnXm: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r, a = n("q1tI"),
                o = n.n(a),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("AeFk");
            o.a.createElement;
            ! function(e) {
                e.STANDARD = "standard", e.WIDE = "wide", e.NARROW = "narrow"
            }(r || (r = {}));
            t.b = function(e) {
                var t = e.children,
                    n = e.width,
                    a = void 0 === n ? r.WIDE : n,
                    i = e.className,
                    l = e.ContainerClassName,
                    u = e.style,
                    p = e.gridRef,
                    f = e.isSectionBuilder,
                    d = void 0 === f || f;
                return Object(s.c)("section", {
                    className: c()({
                        sectionBuilder: d
                    }, i),
                    style: u,
                    ref: p
                }, t && o.a.Children.map(t, (function(e, t) {
                    return Object(s.c)("div", {
                        className: c()("container", "-" + a, l),
                        key: t
                    }, e)
                })))
            }
        },
        Vvt1: function(e, t, n) {
            e.exports = n("a6RD")
        },
        WAai: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return g
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("usKF"),
                c = n("VTyt"),
                s = n("r3F2"),
                l = n("TSYQ"),
                u = n.n(l),
                p = n("76ZC"),
                f = n.n(p),
                d = n("//LF"),
                m = n("AeFk");
            o.a.createElement;

            function h(e) {
                var t = Object(a.useRef)(null),
                    n = Object(a.useRef)(null);
                var r = e.ctaCompleteSignup ? f()(e.ctaCompleteSignup) : null;
                switch (e.context) {
                    case "modal-try":
                    case "modal-trial":
                        e.ctaSignupTrial;
                        break;
                    case "get-started":
                        e.ctaSignupWithoutFree;
                        break;
                    case "modal-signup":
                    case "modal-buy-premium":
                    case "modal-buy-business":
                        e.ctaCompleteSignup;
                        break;
                    default:
                        e.ctaSignupEmail
                }
                return Object(a.useEffect)((function() {
                    n.current.focus()
                }), []), Object(m.c)(o.a.Fragment, null, Object(m.c)("form", {
                    noValidate: !0,
                    className: u()("signupForm", e.context && "-".concat(e.context), "hidden-logged-in", e.class_notrans),
                    onSubmit: function(n) {
                        n.preventDefault(), t.current && ("modal-signup" !== e.context && window.AsanaAnalytics.trackGTM("start_free_trial_button"), "modal-signup" === e.context && window.AsanaHelpers.enterFreeSignupFlow(), window.AsanaHelpers.signupWithEmail(t.current))
                    },
                    ref: t
                }, Object(m.c)("div", {
                    className: u()("signupForm-container", {
                        "-center": e.center
                    })
                }, Object(m.c)("div", {
                    className: "signupForm-row"
                }, Object(m.c)("div", {
                    className: "signupForm-email"
                }, Object(m.c)("input", {
                    type: "hidden",
                    name: "name",
                    value: ""
                }), Object(m.c)("input", {
                    className: u()("input", "input--email", "signup-email", e.context && "signup-email-".concat(e.context)),
                    placeholder: e.emailPlaceholder,
                    name: "email",
                    type: "email",
                    autoFocus: !!e.autofocus_notrans,
                    ref: n
                }), Object(m.c)("span", {
                    id: "signup-email__invalid-domain",
                    className: "input-message input-message--error"
                }, e.ctaSignupDomainInvalid), Object(m.c)("span", {
                    id: "signup-email__bad_format",
                    className: "input-message input-message--error"
                }, Object(m.c)(s.a, {
                    html: e.ctaSignupBadFormat
                })), e.ctaSignupDomainClose && Object(m.c)("span", {
                    id: "signup-email__close-domain",
                    className: "input-message input-message--error"
                }, Object(m.c)(s.a, {
                    html: e.ctaSignupDomainClose
                }))), Object(m.c)("button", {
                    className: u()("signupForm-submit submit -large signup-submit-".concat(e.context), e.button_classname),
                    onClick: function(t) {
                        if (AsanaHelpers) {
                            var n = Object(d.stringsToFunction)(e.click_notrans);
                            n && n()
                        }
                    }
                }, Object(m.c)("span", {
                    className: "signupForm-submit-icon"
                }, Object(m.c)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16"
                }, Object(m.c)("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7.5"
                }))), Object(m.c)("span", {
                    className: "signupForm-submit-text js-signupForm-submit--try"
                }, Object(m.c)("span", null, "modal-try" === e.context || "modal-trial" === e.context ? e.ctaSignupTrial : "get-started" === e.context ? e.ctaSignupWithoutFree : "modal-signup" === e.context || "modal-buy-premium" === e.context || "modal-buy-business" === e.context || "buy-page" === e.context ? r : e.ctaSignupEmail), Object(m.c)("span", null, e.ctaSignupProgress)), Object(m.c)("span", {
                    className: "signupForm-submit-text js-signupForm-submit--buy"
                }, Object(m.c)("span", null, e.ctaCompleteSignup), Object(m.c)("span", null, e.ctaSignupProgress))))), !0 === e.premium_link && Object(m.c)("p", null, "Learn more about ", Object(m.c)(c.default, {
                    href: "/premium"
                }, "Asana Premium"))), "modal-try" !== e.context && "modal-signup" !== e.context && "modal-trial" !== e.context && "modal-buy" !== e.context && "modal-get-started" !== e.context && "modal-buy-premium" !== e.context && "modal-buy-business" !== e.context && Object(m.c)("a", {
                    href: "https://app.asana.com/-/upgrade?trial=true",
                    className: "button -large invisible-logged-out -mobile-full"
                }, e.ctaSignupEmail))
            }
            o.a.createElement;

            function g(e) {
                var t = Object(a.useContext)(i.a);
                return Object(m.c)(h, Object(r.a)({
                    ctaSignupEmail: t.global_CTAsignupEmail,
                    ctaSignupTrial: t.global_CTAsignupTrial,
                    ctaSignupWithoutFree: t.global_CTAsignupWithoutFree,
                    ctaCompleteSignup: t.global_CTAcompleteSignup,
                    emailPlaceholder: t.global_placeholderEmail,
                    ctaSignupDomainInvalid: t.global_CTAsignupDomainInvalid,
                    ctaSignupBadFormat: t.global_CTAsignupBadFormat,
                    ctaSignupProgress: t.global_CTAsignupProgress,
                    ctaSignupDomainClose: t.global_CTAsignupDomainClose,
                    emailLabel: t.global_labelEmail,
                    emailPasswordLabel: t.global_labelPassword,
                    emailPasswordPlaceholder: t.global_placeholderPassword,
                    ctaLoginEmail: t.global_CTAloginEmail,
                    forgotPassword: t.global_forgotPassword
                }, e))
            }
        },
        WFqU: function(e, t, n) {
            (function(t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.exports = n
            }).call(this, n("ntbh"))
        },
        WwFo: function(e, t, n) {
            var r = n("juv8"),
                a = n("7GkX");
            e.exports = function(e, t) {
                return e && r(t, a(t), e)
            }
        },
        "X24+": function(e, t, n) {
            "use strict";

            function r(e) {
                return e.endsWith("/") && "/" !== e ? e.slice(0, -1) : e
            }
            t.__esModule = !0, t.removePathTrailingSlash = r, t.normalizePathTrailingSlash = void 0;
            var a = r;
            t.normalizePathTrailingSlash = a
        },
        XGnz: function(e, t, n) {
            var r = n("CH3K"),
                a = n("BiGR");
            e.exports = function e(t, n, o, i, c) {
                var s = -1,
                    l = t.length;
                for (o || (o = a), c || (c = []); ++s < l;) {
                    var u = t[s];
                    n > 0 && o(u) ? n > 1 ? e(u, n - 1, o, i, c) : r(c, u) : i || (c[c.length] = u)
                }
                return c
            }
        },
        XYm9: function(e, t, n) {
            var r = n("+K+b");
            e.exports = function(e, t) {
                var n = t ? r(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.byteLength)
            }
        },
        Xi7e: function(e, t, n) {
            var r = n("KMkd"),
                a = n("adU4"),
                o = n("tMB7"),
                i = n("+6XX"),
                c = n("Z8oC");

            function s(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            s.prototype.clear = r, s.prototype.delete = a, s.prototype.get = o, s.prototype.has = i, s.prototype.set = c, e.exports = s
        },
        "Xt/L": function(e, t) {
            e.exports = function(e, t, n) {
                for (var r = -1, a = null == e ? 0 : e.length; ++r < a;)
                    if (n(t, e[r])) return !0;
                return !1
            }
        },
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("mPvQ"),
                a = n("/GRZ"),
                o = n("i2R6"),
                i = (n("qXWd"), n("48fX")),
                c = n("tCBg"),
                s = n("T0f4");

            function l(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var a = s(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var u = n("q1tI"),
                p = function(e) {
                    i(n, e);
                    var t = l(n);

                    function n(e) {
                        var o;
                        return a(this, n), (o = t.call(this, e))._hasHeadManager = void 0, o.emitChange = function() {
                            o._hasHeadManager && o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances), o.props))
                        }, o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances, o
                    }
                    return o(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(u.Component);
            t.default = p
        },
        YESw: function(e, t, n) {
            var r = n("Cwc5")(Object, "create");
            e.exports = r
        },
        YO3V: function(e, t, n) {
            var r = n("NykK"),
                a = n("LcsW"),
                o = n("ExA7"),
                i = Function.prototype,
                c = Object.prototype,
                s = i.toString,
                l = c.hasOwnProperty,
                u = s.call(Object);
            e.exports = function(e) {
                if (!o(e) || "[object Object]" != r(e)) return !1;
                var t = a(e);
                if (null === t) return !0;
                var n = l.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && s.call(n) == u
            }
        },
        YTqd: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.getRouteRegex = function(e) {
                var t = (e.replace(/\/$/, "") || "/").slice(1).split("/"),
                    n = {},
                    r = 1,
                    a = t.map((function(e) {
                        if (e.startsWith("[") && e.endsWith("]")) {
                            var t = function(e) {
                                    var t = e.startsWith("[") && e.endsWith("]");
                                    t && (e = e.slice(1, -1));
                                    var n = e.startsWith("...");
                                    n && (e = e.slice(3));
                                    return {
                                        key: e,
                                        repeat: n,
                                        optional: t
                                    }
                                }(e.slice(1, -1)),
                                a = t.key,
                                o = t.optional,
                                i = t.repeat;
                            return n[a] = {
                                pos: r++,
                                repeat: i,
                                optional: o
                            }, i ? o ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                        return "/".concat(e.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&"))
                    })).join("");
                0;
                return {
                    re: new RegExp("^".concat(a, "(?:/)?$")),
                    groups: n
                }
            }
        },
        Yoag: function(e, t, n) {
            var r = n("dTAl"),
                a = n("RrRF");

            function o(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            o.prototype = r(a.prototype), o.prototype.constructor = o, e.exports = o
        },
        Z0cm: function(e, t) {
            var n = Array.isArray;
            e.exports = n
        },
        Z8oC: function(e, t, n) {
            var r = n("y1pI");
            e.exports = function(e, t) {
                var n = this.__data__,
                    a = r(n, e);
                return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this
            }
        },
        ZCgT: function(e, t, n) {
            var r = n("tLB3"),
                a = 1 / 0;
            e.exports = function(e) {
                return e ? (e = r(e)) === a || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
            }
        },
        ZCpW: function(e, t, n) {
            var r = n("lm/5"),
                a = n("O7RO"),
                o = n("IOzZ");
            e.exports = function(e) {
                var t = a(e);
                return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(n) {
                    return n === e || r(n, e, t)
                }
            }
        },
        ZPaE: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("9rhg"),
                l = n("arJ1"),
                u = n("AeFk");
            o.a.createElement;

            function p(e) {
                var t = Object(u.c)(o.a.Fragment, null, e.is_signup ? Object(u.c)(s.default, Object(r.a)({
                    center: e.signup_centered,
                    is_contact_sales_notrans: e.is_contact_sales_notrans
                }, e)) : Object(u.c)(o.a.Fragment, null, Object(u.c)(l.a, Object(r.a)({}, e, {
                    language: e.language
                })), e.cta && Object(u.c)(l.a, Object(r.a)({}, e.cta, {
                    language: e.language
                }))));
                return e.wrapper ? Object(u.c)("div", {
                    className: c()(e.wrapper_class_notrans)
                }, t) : t
            }
        },
        ZWtO: function(e, t, n) {
            var r = n("4uTw"),
                a = n("9Nap");
            e.exports = function(e, t) {
                for (var n = 0, o = (t = r(t, e)).length; null != e && n < o;) e = e[a(t[n++])];
                return n && n == o ? e : void 0
            }
        },
        a1zH: function(e, t, n) {
            var r = n("y4QH"),
                a = n("MMiu"),
                o = n("t2dP"),
                i = n("EldB"),
                c = n("5sOR"),
                s = n("V9aw"),
                l = n("pzgU"),
                u = n("6KkN"),
                p = n("Kz5y");
            e.exports = function e(t, n, f, d, m, h, g, b, v, y) {
                var _ = 128 & n,
                    j = 1 & n,
                    w = 2 & n,
                    O = 24 & n,
                    x = 512 & n,
                    k = w ? void 0 : i(t);
                return function E() {
                    for (var C = arguments.length, S = Array(C), A = C; A--;) S[A] = arguments[A];
                    if (O) var P = s(E),
                        T = o(S, P);
                    if (d && (S = r(S, d, m, O)), h && (S = a(S, h, g, O)), C -= T, O && C < y) {
                        var N = u(S, P);
                        return c(t, n, e, E.placeholder, f, S, N, b, v, y - C)
                    }
                    var L = j ? f : this,
                        R = w ? L[t] : t;
                    return C = S.length, b ? S = l(S, b) : x && C > 1 && S.reverse(), _ && v < C && (S.length = v), this && this !== p && this instanceof E && (R = k || i(R)), R.apply(L, S)
                }
            }
        },
        a5q3: function(e, t, n) {
            var r = n("Of+w"),
                a = r && new r;
            e.exports = a
        },
        a6Fb: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var r = n("AeFk"),
                a = {
                    size_56: {
                        fontSize: "56px",
                        lineHeight: "72px"
                    },
                    size_44: {
                        fontSize: "44px",
                        lineHeight: "56px"
                    },
                    size_36: {
                        fontSize: "36px",
                        lineHeight: "48px"
                    },
                    size_32: {
                        fontSize: "32px",
                        lineHeight: "44px"
                    },
                    size_24: {
                        fontSize: "24px",
                        lineHeight: "36px"
                    },
                    size_20: {
                        fontSize: "20px",
                        lineHeight: "28px"
                    },
                    size_18: {
                        fontSize: "18px",
                        lineHeight: "32px"
                    },
                    size_16: {
                        fontSize: "16px",
                        lineHeight: "24px"
                    },
                    size_14: {
                        fontSize: "14px",
                        lineHeight: "24px"
                    },
                    size_12: {
                        fontSize: "12px",
                        lineHeight: "20px"
                    },
                    size_10: {
                        fontSize: "10px",
                        lineHeight: "12px"
                    }
                },
                o = n("yYjG"),
                i = {
                    display: {
                        scale: "size_44",
                        fontWeight: 400,
                        letterSpacing: "-1px",
                        tablet: {
                            scale: "size_56"
                        }
                    },
                    "heading-1": {
                        scale: "size_36",
                        fontWeight: 400,
                        letterSpacing: "-0.3px",
                        tablet: {
                            scale: "size_44"
                        },
                        desktop: {
                            scale: "size_44"
                        }
                    },
                    "heading-2": {
                        scale: "size_32",
                        fontWeight: 400,
                        letterSpacing: "-0.3px",
                        tablet: {
                            scale: "size_36"
                        }
                    },
                    "heading-3": {
                        scale: "size_24",
                        fontWeight: 400,
                        letterSpacing: "-0.3px",
                        tablet: {
                            scale: "size_32"
                        }
                    },
                    "heading-4": {
                        scale: "size_20",
                        fontWeight: 400
                    },
                    "heading-5": {
                        scale: "size_16",
                        fontWeight: 500
                    },
                    "heading-6": {
                        scale: "size_14",
                        fontWeight: 500
                    },
                    "p-large": {
                        scale: "size_18",
                        fontWeight: 400,
                        tablet: {
                            scale: "size_20"
                        },
                        desktop: {
                            scale: "size_24"
                        }
                    },
                    "p-medium": {
                        scale: "size_16",
                        fontWeight: 400,
                        tablet: {
                            scale: "size_18"
                        }
                    },
                    p: {
                        scale: "size_16",
                        fontWeight: 400
                    },
                    "p-small": {
                        scale: "size_12",
                        fontWeight: 400,
                        tablet: {
                            scale: "size_14"
                        }
                    },
                    "p-x-small": {
                        scale: "size_12",
                        fontWeight: 400
                    },
                    "blockquote-large": {
                        scale: "size_18",
                        fontWeight: 400,
                        tablet: {
                            scale: "size_24"
                        },
                        desktop: {
                            scale: "size_32"
                        }
                    },
                    blockquote: {
                        scale: "size_18",
                        fontWeight: 400,
                        tablet: {
                            scale: "size_20"
                        },
                        desktop: {
                            scale: "size_24"
                        }
                    },
                    "blockquote-small": {
                        scale: "size_14",
                        fontWeight: 400,
                        tablet: {
                            scale: "size_16"
                        }
                    },
                    byline: {
                        scale: "size_12",
                        tablet: {
                            scale: "size_14"
                        }
                    },
                    tag: {
                        scale: "size_12",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        textTransform: "uppercase"
                    },
                    "tag-small": {
                        scale: "size_10",
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase"
                    }
                },
                c = function(e) {
                    return Object(r.b)((t = e.scale, Object(r.b)("font-size:", a[t].fontSize, ";line-height:", a[t].lineHeight, ";", "")), " ", e.fontWeight && "font-weight: " + e.fontWeight + ";", " ", e.letterSpacing && "letter-spacing: " + e.letterSpacing + ";", " ", e.textTransform && "text-transform: " + e.textTransform + ";", ";", "");
                    var t
                },
                s = function(e) {
                    var t = i[e];
                    return Object(r.b)(c(t), " ", t.tablet && Object(o.c)(o.a.TABLET_768), "{", t.tablet && c(t.tablet), ";}", t.desktop && Object(o.c)(o.a.DESKTOP_1120), "{", t.desktop && c(t.desktop), ";}label:", e, ";", "")
                }
        },
        a6RD: function(e, t, n) {
            "use strict";
            var r = n("oI91");

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.__esModule = !0, t.noSSR = s, t.default = function(e, t) {
                var n = i.default,
                    r = {
                        loading: function(e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? r.loader = function() {
                    return e
                } : "function" === typeof e ? r.loader = e : "object" === typeof e && (r = o(o({}, r), e));
                if (r = o(o({}, r), t), "object" === typeof e && !(e instanceof Promise) && (e.render && (r.render = function(t, n) {
                        return e.render(n, t)
                    }), e.modules)) {
                    n = i.default.Map;
                    var a = {},
                        c = e.modules();
                    Object.keys(c).forEach((function(e) {
                        var t = c[e];
                        "function" !== typeof t.then ? a[e] = t : a[e] = function() {
                            return t.then((function(e) {
                                return e.default || e
                            }))
                        }
                    })), r.loader = a
                }
                r.loadableGenerated && delete(r = o(o({}, r), r.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof r.ssr) {
                    if (!r.ssr) return delete r.ssr, s(n, r);
                    delete r.ssr
                }
                return n(r)
            };
            c(n("q1tI"));
            var i = c(n("2qu3"));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }
        },
        aKAC: function(e, t, n) {
            var r = n("/GRZ"),
                a = n("i2R6"),
                o = n("q1tI"),
                i = n("NTr2"),
                c = n("29q8"),
                s = function() {
                    "use strict";

                    function e(t, n) {
                        r(this, e), this.apiKey = t, this.lib = i.start({
                            apiKey: "0f70753630ea334db53f30c60b7bd95d",
                            plugins: [new c(o)],
                            releaseStage: n
                        }), this.errorBoundary = this.lib.getPlugin("react").createErrorBoundary(o)
                    }
                    return a(e, [{
                        key: "info",
                        value: function(e) {
                            this.lib.notify(e, (function(e) {
                                e.severity = "info"
                            }))
                        }
                    }, {
                        key: "warn",
                        value: function(e) {
                            this.lib.notify(e, (function(e) {
                                e.severity = "warning"
                            }))
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            this.lib.notify(e)
                        }
                    }, {
                        key: "breadCrumb",
                        value: function(e, t) {
                            this.lib.leaveBreadcrumb(e, t)
                        }
                    }, {
                        key: "getErrorBoundary",
                        value: function() {
                            return this.errorBoundary
                        }
                    }]), e
                }();
            e.exports = s
        },
        abZD: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("HJ2n"),
                c = n("dhJC"),
                s = n("4buk"),
                l = n("TSYQ"),
                u = n.n(l),
                p = n("r3F2"),
                f = n("AeFk");
            o.a.createElement;

            function d(e) {
                var t = e.hideTooltips,
                    n = e.tooltipPosition,
                    a = e.href,
                    o = e.linkClass,
                    i = e.eventName,
                    c = e.iconName,
                    l = e.tooltipTitle,
                    d = e.tooltipBody,
                    m = e.clipboardInput;
                return Object(f.c)("a", {
                    className: "social-icon-svg social-icon-svg--".concat(c, " ").concat(o || ""),
                    href: a || "#",
                    target: "#" === a ? "" : "_blank",
                    rel: "noopener".concat(m || "email" === c ? "" : " noreferrer nofollow"),
                    onClick: function() {
                        AsanaAnalytics.trackGTM(i)
                    }
                }, Object(f.c)(s.a, Object(r.a)({}, e, {
                    icon_notrans: c,
                    icon_color_notrans: "white"
                })), !t && Object(f.c)("span", {
                    className: u()("guide-tooltip", "guide-tooltip--share", n, {
                        "with-input": m
                    })
                }, Object(f.c)("span", {
                    className: "p--label"
                }, l), m && Object(f.c)("input", {
                    className: "share-field hidden-xs copy-input-to-clipboard",
                    value: m.value,
                    "data-clipboard-text": m.value,
                    "data-clipboard-action": "copy",
                    readOnly: !0
                }), Object(f.c)(p.a, {
                    html: d
                })))
            }
            o.a.createElement;

            function m(e) {
                var t = e.shareActions,
                    n = (e.share_field, e.permalink),
                    a = Object(c.a)(e, ["shareActions", "share_field", "permalink"]);
                return Object(f.c)("span", {
                    className: "share-article"
                }, t.map((function(e, t) {
                    return Object(f.c)(d, Object(r.a)({}, e, a, {
                        key: t
                    }))
                })), a.share_field && Object(f.c)(o.a.Fragment, null, Object(f.c)("input", {
                    className: "share-field copy-input-to-clipboard",
                    value: n,
                    "data-clipboard-text": n,
                    "data-clipboard-action": "copy"
                }), Object(f.c)("span", {
                    className: "guide-tooltip guide-tooltip--share above"
                }, Object(f.c)("span", {
                    className: "p--label"
                }, a.share_permalink_tooltip_success, Object(f.c)(s.a, Object(r.a)({}, a, {
                    icon_notrans: "check",
                    icon_color_notrans: "gray"
                }))))))
            }
            var h = n("h2k7");
            o.a.createElement;

            function g(e) {
                var t = Object(a.useContext)(i.a),
                    n = t.asa_dot_na || Object(h.useCurrentUrl)(),
                    o = (e.share_actions || t.share_actions).split("|").map((function(e) {
                        return function(e, t, n) {
                            var r = n.title,
                                a = n.description,
                                o = n.download_link;
                            switch (e) {
                                case "facebook":
                                    return {
                                        href: "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(t)),
                                        eventName: "shared_on_facebook",
                                        tooltipTitle: n.share_facebook_tooltip_title,
                                        tooltipBody: n.share_facebook_tooltip_body,
                                        iconName: "facebook",
                                        linkClass: "facebook-link"
                                    };
                                case "twitter":
                                    return {
                                        href: "https://twitter.com/share?via=asana&url=".concat(encodeURIComponent(t), "&text=").concat(r),
                                        eventName: "shared_on_twitter",
                                        tooltipTitle: n.share_twitter_tooltip_title,
                                        tooltipBody: n.share_twitter_tooltip_body,
                                        iconName: "twitter",
                                        linkClass: "twitter-link"
                                    };
                                case "linkedin":
                                    return {
                                        href: "http://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(t), "&title=").concat(r, "&summary=").concat(encodeURIComponent(a), "&source=Asana"),
                                        eventName: "shared_on_linkedin",
                                        tooltipTitle: n.share_linkedin_tooltip_title,
                                        tooltipBody: n.share_linkedin_tooltip_body,
                                        iconName: "linkedin",
                                        linkClass: "linkedin-link"
                                    };
                                case "download":
                                    return {
                                        href: o,
                                        eventName: "download_guide_resource",
                                        tooltipTitle: n.share_download_tooltip_title,
                                        tooltipBody: n.share_download_tooltip_body,
                                        iconName: "download"
                                    };
                                case "email":
                                    return {
                                        href: "mailto:?to=&subject=".concat(encodeURIComponent(n.share_email_subject), "&body=").concat(encodeURIComponent(r), "%20-%20").concat(encodeURIComponent(a), "%0A%0A").concat(encodeURIComponent(t)),
                                        eventName: "shared_via_email",
                                        tooltipTitle: n.share_email_tooltip_title,
                                        tooltipBody: n.share_email_tooltip_boody,
                                        iconName: "email",
                                        linkClass: "email-link"
                                    };
                                case "permalink":
                                    return {
                                        href: "#",
                                        eventName: "shared_via_copied_link",
                                        tooltipTitle: n.share_permalink_tooltip_title,
                                        tooltipBody: n.share_permalink_tooltip_boody,
                                        iconName: "link",
                                        clipboardInput: {
                                            value: t
                                        }
                                    };
                                default:
                                    return null
                            }
                        }(e, n, t)
                    })).filter((function(e) {
                        return e
                    }));
                return Object(f.c)(m, Object(r.a)({
                    shareActions: o,
                    shareField: t.share_field,
                    permalink: n,
                    hideTooltips: t.hide_tooltips,
                    tooltipPosition: t.tooltip_position
                }, t))
            }
        },
        adU4: function(e, t, n) {
            var r = n("y1pI"),
                a = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__,
                    n = r(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : a.call(t, n, 1), --this.size, !0)
            }
        },
        arJ1: function(e, t, n) {
            "use strict";
            var r = n("HALo"),
                a = n("cpVT"),
                o = n("q1tI"),
                i = n.n(o),
                c = n("TSYQ"),
                s = n.n(c),
                l = n("r3F2"),
                u = n("//LF"),
                p = n("h2k7"),
                f = n("sJyK"),
                d = n("AeFk");
            i.a.createElement;

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var g = function(e) {
                var t = e.link,
                    n = e.href,
                    a = e.url,
                    i = e.text,
                    c = e.click_notrans,
                    m = e.onClick,
                    g = e.onMouseEnter,
                    b = e.onMouseLeave,
                    v = e.link_id,
                    y = e.open_in_tab,
                    _ = e.class_notrans,
                    j = e.className,
                    w = e.children,
                    O = e.cta_is_button,
                    x = e.is_button,
                    k = e.cta_link,
                    E = e.cta_text,
                    C = e.title,
                    S = e.target,
                    A = e.rel,
                    P = e.attribs,
                    T = e.style,
                    N = (e.isSecondary, e.buttonColor),
                    L = (e.isLargeWhiteButton, e.isCtaCreateAcct),
                    R = e.setCtaStyleVar,
                    F = e.ctaStyleVar,
                    I = m || c || null,
                    M = e.language || f.DEFAULT_LANGUAGE,
                    G = (null === P || void 0 === P ? void 0 : P.href) || n || t || a || k || "#";
                /((^#)|:)/.test(G) || (G = Object(p.prependLanguagePath)(M, G), G = "/" + Object(u.stripLeadingSlash)(G)), "string" === typeof I && (I = Object(u.stringsToFunction)(I));
                var D = i || E,
                    z = "Black" === N,
                    B = Object(o.useRef)(null),
                    U = "object" === typeof T ? T : {};
                return Object(o.useEffect)((function() {
                    if (R && L && B.current.offsetWidth > 0) {
                        var e = [];
                        e["--rest-width"] = "".concat(B.current.offsetWidth, "px"), U = h(h({}, U), e), R(U)
                    }
                }), []), Object(d.c)("a", Object(r.a)({}, P, {
                    href: G,
                    id: v || null,
                    onClick: I,
                    onMouseEnter: g,
                    onMouseLeave: b,
                    className: s()(_ || j || (null === P || void 0 === P ? void 0 : P.className), {
                        "button -large": O || x,
                        "-dark": z
                    }),
                    target: y ? "_blank" : S || null,
                    rel: y ? "noopener noreferrer" : A || null,
                    title: C,
                    style: F || ("object" === typeof T ? T : {}),
                    ref: B
                }), D && Object(d.c)(l.a, {
                    html: D
                }), w)
            };
            g.defaultProps = {
                isSecondary: !1
            }, t.a = g
        },
        b2z7: function(e, t) {
            var n = /\w*$/;
            e.exports = function(e) {
                var t = new e.constructor(e.source, n.exec(e));
                return t.lastIndex = e.lastIndex, t
            }
        },
        b80T: function(e, t, n) {
            var r = n("UNi/"),
                a = n("03A+"),
                o = n("Z0cm"),
                i = n("DSRE"),
                c = n("wJg7"),
                s = n("c6wG"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = o(e),
                    u = !n && a(e),
                    p = !n && !u && i(e),
                    f = !n && !u && !p && s(e),
                    d = n || u || p || f,
                    m = d ? r(e.length, String) : [],
                    h = m.length;
                for (var g in e) !t && !l.call(e, g) || d && ("length" == g || p && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || c(g, h)) || m.push(g);
                return m
            }
        },
        bN2E: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return _
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("usKF"),
                l = n("4buk"),
                u = n("arJ1"),
                p = n("cpVT"),
                f = n("siQn"),
                d = n("AeFk");
            o.a.createElement;

            function m(e) {
                var t = e.app_store_link,
                    n = e.gtm_tracking_id,
                    a = e.data_btn_id,
                    o = e.app_store_btn_img_src,
                    i = e.app_store_btn_title;
                return Object(d.c)("a", Object(r.a)({
                    href: t,
                    onClick: function() {
                        AsanaAnalytics.trackGTM(n)
                    }
                }, Object(p.a)({}, a, !0), {
                    className: "siteFooter-mobile-button"
                }), Object(d.c)(f.default, {
                    src: o,
                    alt: "".concat(i, " Button")
                }))
            }
            o.a.createElement;

            function h(e) {
                return Object(d.c)("div", {
                    className: "i18n-modal"
                }, Object(d.c)("div", {
                    className: "i18n-globe"
                }, Object(d.c)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "40",
                    height: "41",
                    viewBox: "0 0 52 52",
                    fill: "white",
                    preserveAspectRatio: "xMinYMin",
                    role: "img",
                    stroke: "none"
                }, Object(d.c)("svg", {
                    x: "10",
                    y: "10"
                }, Object(d.c)("path", {
                    d: "M31,15.6L31,15.6C31,7,24.1,0.1,15.5,0.1C6.9,0.1,0,7,0,15.6c0,4.7,2.1,8.8,5.3,11.7l0.2,0.4c0,0,0.1,0,0.1-0.1c2.7,2.2,6.1,3.6,9.9,3.6c7.9,0,14.4-5.9,15.4-13.6H31V15.6z M29.1,15.6C29.1,15.6,29.1,15.6,29.1,15.6l-4.8,0c0-2.9-0.4-5.6-1.2-7.9c0.1-0.1,0.2-0.1,0.3-0.2c0.2-0.1,1.2-0.7,1.4-0.9c0.2-0.1,0.4-0.2,0.6-0.4C27.7,8.7,29.1,12,29.1,15.6z M23,25.8c0.3,0.2,0.6,0.4,0.9,0.5c-1,0.7-2,1.4-3.2,1.8c0.6-0.8,1.2-1.7,1.6-2.7C22.5,25.5,22.8,25.7,23,25.8z M8.9,25.7c0.4,0.9,0.9,1.7,1.5,2.4c-1-0.4-2-1-2.8-1.6c0.4-0.2,1-0.6,1.2-0.7C8.8,25.8,8.8,25.7,8.9,25.7z M8.7,15.6c0-2.5,0.4-4.9,1-6.9c1.5,0.5,3.1,0.8,4.8,0.8v6.1L8.7,15.6C8.7,15.6,8.7,15.6,8.7,15.6z M8.1,5.9C7.6,5.6,7.2,5.4,6.9,5.1c1-0.9,2.2-1.6,3.5-2.1C9.7,3.9,9.1,5,8.6,6.1C8.4,6.1,8.2,6,8.1,5.9z M22.3,5.8c-0.5-1.1-1-2-1.7-2.8c1.2,0.5,2.2,1.1,3.2,1.9c0,0-0.1,0-0.1,0.1C23.5,5.1,22.6,5.7,22.3,5.8C22.3,5.8,22.3,5.8,22.3,5.8z M16.5,2.2c1.6,0.5,3.1,2.1,4.1,4.5c-1.2,0.5-2.4,0.7-4.1,0.8V2.2z M14.5,2.2v5.4c-1.5,0-2.9-0.3-4.2-0.7C11.4,4.4,12.9,2.7,14.5,2.2z M14.5,17.5v4.6c-1.9,0.1-3.3,0.4-4.7,0.9c-0.5-1.6-0.9-3.5-1.1-5.5H14.5z M14.5,24.1V29c-1.5-0.5-2.9-2-3.9-4.1C11.7,24.4,12.9,24.2,14.5,24.1z M16.5,29v-4.9c1.4,0,2.8,0.2,4,0.6C19.4,27,18,28.5,16.5,29z M16.5,22.1v-4.6h5.7c-0.1,2-0.5,3.8-1,5.4C19.7,22.4,18.2,22.2,16.5,22.1z M16.5,15.6V9.5c2-0.1,3.4-0.4,4.8-0.9c0.6,2.1,1,4.5,1,7.1c0,0,0,0,0,0H16.5z M5.5,6.5c0.5,0.3,1,0.7,1.7,1.1C7.4,7.7,7.6,7.8,7.9,8c-0.7,2.3-1.1,4.9-1.1,7.6H1.9c0,0,0,0,0,0C1.9,12.1,3.3,8.9,5.5,6.5z M2.1,17.5h4.8C7,19.9,7.5,22,8.1,23.9C8,24,7.8,24.1,7.7,24.1c-0.2,0.1-1.2,0.7-1.4,0.9c-0.1,0.1-0.2,0.1-0.4,0.2C3.9,23.2,2.5,20.5,2.1,17.5z M25.3,25c-0.4-0.3-0.9-0.6-1.4-0.9c-0.3-0.2-0.6-0.3-0.9-0.5c0.6-1.8,1-3.9,1.2-6.1h4.8C28.5,20.4,27.2,23,25.3,25z"
                })))), Object(d.c)("div", {
                    className: "i18n-modal-link"
                }, Object(d.c)("a", {
                    href: "#i18n",
                    className: "-white"
                }, "Language")))
            }
            var g = n("HJ2n"),
                b = n("VTyt"),
                v = n("r3F2"),
                y = n("dVpt");
            o.a.createElement;

            function _() {
                var e = Object(a.useContext)(s.a),
                    t = e.context,
                    n = e.footerColumns,
                    o = e.secondaryFooterColumns,
                    i = Object(a.useContext)(g.a).footer_navigation_short,
                    u = Object(y.a)("test_flag").enabled;
                return Object(d.c)("footer", {
                    className: c()("siteFooter", {
                        "-is-mobile-hidden": "guide" === t
                    })
                }, !0 !== i && Object(d.c)("div", {
                    className: "siteFooter__main__wrapper py-2 py-sm-5"
                }, Object(d.c)("div", {
                    className: "container -wide"
                }, Object(d.c)("div", {
                    className: "siteFooter__row"
                }, Object(d.c)("div", {
                    className: "siteFooter__logo mb-3 mb-md-0"
                }, Object(d.c)(b.default, {
                    className: "siteFooter__logo-icon",
                    href: "/?noredirect"
                }, Object(d.c)("span", {
                    className: "sr-only"
                }, "Asana Logo"), Object(d.c)(l.a, {
                    icon_notrans: "dots",
                    icon_color_notrans: "white"
                }))), n.map((function(e, t) {
                    return Object(d.c)("ul", {
                        className: "siteFooter__list",
                        key: t
                    }, Object(d.c)("li", {
                        className: "siteFooter__title"
                    }, e.footerColumn), e.list.map((function(e, t) {
                        return Object(d.c)("li", {
                            className: "siteFooter__item",
                            key: t
                        }, Object(d.c)(b.default, Object(r.a)({}, e, {
                            className: "-white",
                            open_in_tab: e.external,
                            onClick: e.ga
                        }), e.item && Object(d.c)(v.a, {
                            html: e.item
                        })))
                    })))
                }))))), Object(d.c)("div", {
                    className: "siteFooter__secondary__wrapper"
                }, Object(d.c)("div", {
                    className: "container -wide"
                }, Object(d.c)("div", {
                    className: "siteFooter__row"
                }, Object(d.c)("div", {
                    className: "siteFooter__secondary__col-wrapper"
                }, o.map((function(e, t) {
                    return Object(d.c)(a.Fragment, {
                        key: t
                    }, "languageSelect" === e.type_notrans && Object(d.c)("div", {
                        className: "siteFooter__secondary__col"
                    }, Object(d.c)(h, null)), "socialLinks" === e.type_notrans && Object(d.c)("div", {
                        className: "siteFooter__secondary__col siteFooter__secondary__col--social"
                    }, e.icons.map((function(e, t) {
                        return Object(d.c)(j, Object(r.a)({}, e, {
                            key: t
                        }))
                    }))), "terms" === e.type_notrans && Object(d.c)("div", {
                        className: "siteFooter__secondary__col siteFooter__secondary__col--terms"
                    }, Object(d.c)(b.default, {
                        href: e.url,
                        className: "-white"
                    }, e.name && Object(d.c)(v.a, {
                        html: e.name
                    }))), "appLinks" === e.type_notrans && Object(d.c)("div", {
                        className: "siteFooter__secondary__col"
                    }, e.apps.map((function(e, t) {
                        return Object(d.c)(m, Object(r.a)({}, e, {
                            key: t
                        }))
                    }))))
                })), u && Object(d.c)("div", {
                    className: "siteFooter__secondary__col"
                }, "Hello, world!"))))))
            }

            function j(e) {
                var t = e.url,
                    n = e.ga,
                    r = e.img_url,
                    a = e.image_alt,
                    o = e.item;
                return Object(d.c)(u.a, {
                    href: t,
                    onClick: n,
                    open_in_tab: !0
                }, Object(d.c)(f.default, {
                    src: r,
                    alt: a || o
                }))
            }
        },
        bW4L: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return o
            }));
            var r = n("jQyn"),
                a = function(e, t) {
                    try {
                        if (!e) return void r.default.warn("analytics-utils/triggerCustomEvent requires an argument for eventToPush ");
                        if (!t) return void("string" === typeof e ? dataLayer.push({
                            event: e
                        }) : dataLayer.push(e));
                        "string" === typeof e && "object" === typeof t && Object.keys(t).length > 0 ? dataLayer.push(Object.assign({}, {
                            event: e
                        }, t)) : r.default.warn("analytics-utils/triggerCustomEvent only accepts one argument of type <string>, one argument of type <object>, or two arguments of type [<string>, <object>].")
                    } catch (n) {
                        r.default.error(n, "Failed to push an event to the GTM data layer.")
                    }
                },
                o = function(e) {
                    var t = {};
                    for (var n in e) t[n] = function(e) {
                        return e.split(" ").join("")
                    }(function(e) {
                        var t = e.split(" "),
                            n = [];
                        return t.forEach((function(e) {
                            if (e[0]) {
                                var t = "";
                                e.split("").forEach((function(e, n) {
                                    var r = 0 === n ? e.toUpperCase() : e.toLowerCase();
                                    t += r
                                })), n.push(t)
                            }
                        })), n.join(" ")
                    }(e[n].trim()));
                    return t.action = t.action || "", t.page = t.page || "", t.subAction = t.subAction ? "-" + t.subAction : "", t.subLocation = t.subLocation ? "-" + t.subLocation : "", t.action + t.subAction + "@" + t.page + t.subLocation
                }
        },
        be4H: function(e, t, n) {
            var r = n("6T1N"),
                a = n("xs/l"),
                o = a((function(e, t) {
                    return r(e, 256, void 0, void 0, void 0, t)
                }));
            e.exports = o
        },
        c6wG: function(e, t, n) {
            var r = n("dD9F"),
                a = n("sEf8"),
                o = n("mdPL"),
                i = o && o.isTypedArray,
                c = i ? a(i) : r;
            e.exports = c
        },
        cSFU: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "c", (function() {
                return f
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            }));
            var r = n("q1tI"),
                a = n("+1VY"),
                o = (n("wx14"), n("gRFL"), n("Swqf"), n("eVQB")),
                i = n("Exhd"),
                c = Object.prototype.hasOwnProperty,
                s = Object(r.createContext)("undefined" !== typeof HTMLElement ? Object(a.a)({
                    key: "css"
                }) : null),
                l = (s.Provider, function(e) {
                    return Object(r.forwardRef)((function(t, n) {
                        var a = Object(r.useContext)(s);
                        return e(t, a, n)
                    }))
                }),
                u = Object(r.createContext)({});
            var p = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
                f = function(e, t) {
                    var n = {};
                    for (var r in t) c.call(t, r) && (n[r] = t[r]);
                    return n[p] = e, n
                },
                d = l((function(e, t, n) {
                    var a = e.css;
                    "string" === typeof a && void 0 !== t.registered[a] && (a = t.registered[a]);
                    var s = e[p],
                        l = [a],
                        f = "";
                    "string" === typeof e.className ? f = Object(o.a)(t.registered, l, e.className) : null != e.className && (f = e.className + " ");
                    var d = Object(i.a)(l, void 0, "function" === typeof a || Array.isArray(a) ? Object(r.useContext)(u) : void 0);
                    Object(o.b)(t, d, "string" === typeof s);
                    f += t.key + "-" + d.name;
                    var m = {};
                    for (var h in e) c.call(e, h) && "css" !== h && h !== p && (m[h] = e[h]);
                    return m.ref = n, m.className = f, Object(r.createElement)(s, m)
                }))
        },
        "cWj/": function(e, t, n) {
            var r = n("OBhP"),
                a = n("ut/Y");
            e.exports = function(e) {
                return a("function" == typeof e ? e : r(e, 1))
            }
        },
        cpVT: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        "cq/+": function(e, t, n) {
            var r = n("mc0g")();
            e.exports = r
        },
        cvCv: function(e, t) {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        d0C7: function(e, t, n) {
            "use strict";
            var r = n("DZdY"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("FlQR"),
                c = n("AeFk");
            o.a.createElement;
            var s = Object(r.a)("div", {
                    target: "esl3c6l2"
                })({
                    name: "vfh4oc",
                    styles: "position:fixed;bottom:30px;left:30px;background:black;color:white;padding:13px 20px;border-radius:30px;pointer-events:none"
                }),
                l = Object(r.a)("h3", {
                    target: "esl3c6l1"
                })({
                    name: "1er2rrf",
                    styles: "color:white;text-transform:uppercase;font-size:.7rem"
                }),
                u = Object(r.a)("span", {
                    target: "esl3c6l0"
                })({
                    name: "18g7vhg",
                    styles: "color:#66FF00;font-weight:bold"
                });
            t.a = function() {
                return i.isStaging || i.isDevelopment || i.isTest || i.isSandbox ? Object(c.c)(s, null, Object(c.c)(l, null, "ENV\xa0", Object(c.c)(u, null, "master"))) : null
            }
        },
        dD9F: function(e, t, n) {
            var r = n("NykK"),
                a = n("shjB"),
                o = n("ExA7"),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function(e) {
                return o(e) && a(e.length) && !!i[r(e)]
            }
        },
        dQpi: function(e, t, n) {
            var r = n("yGk4"),
                a = n("vN+2"),
                o = n("rEGp"),
                i = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(e) {
                    return new r(e)
                } : a;
            e.exports = i
        },
        dTAl: function(e, t, n) {
            var r = n("GoyQ"),
                a = Object.create,
                o = function() {
                    function e() {}
                    return function(t) {
                        if (!r(t)) return {};
                        if (a) return a(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = void 0, n
                    }
                }();
            e.exports = o
        },
        dVpt: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("cpVT"),
                a = n("q1tI"),
                o = n("nlhN"),
                i = n("SwUY"),
                c = n.n(i);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e) {
                var t = Object(a.useContext)(o.a),
                    n = t.featureFlagState,
                    i = t.setFeatureFlagState;

                function s(t) {
                    if (i((function(n) {
                            return l(l({}, n), {}, Object(r.a)({}, e, l(l({}, n[e]), {}, {
                                enabledLocally: t
                            })))
                        })), AsanaStorage) {
                        var n = AsanaStorage.getFromSessionStorage("feature_flags");
                        (n = n ? JSON.parse(n) : {})[e] = t, AsanaStorage.setToSessionStorage("feature_flags", JSON.stringify(n))
                    }
                }
                var u = n[e];
                return u ? {
                    enabled: u.enabled || u.enabledLocally || c.a.enabled && u.availableInPreview,
                    enableLocally: function() {
                        s(!0)
                    },
                    disableLocally: function() {
                        s(!1)
                    },
                    setLocally: s
                } : (console.error('"'.concat(e, '" is not a valid flag id.')), {
                    enabled: !1,
                    enableLocally: function() {},
                    disableLocally: function() {},
                    setLocally: function() {}
                })
            }
        },
        dZ6Y: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = function() {
                var e = Object.create(null);
                return {
                    on: function(t, n) {
                        (e[t] || (e[t] = [])).push(n)
                    },
                    off: function(t, n) {
                        e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1)
                    },
                    emit: function(t) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                        (e[t] || []).slice().map((function(e) {
                            e.apply(void 0, r)
                        }))
                    }
                }
            }
        },
        dhJC: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        dt0z: function(e, t, n) {
            var r = n("zoYe");
            e.exports = function(e) {
                return null == e ? "" : r(e)
            }
        },
        e4Nc: function(e, t, n) {
            var r = n("fGT3"),
                a = n("k+1r"),
                o = n("JHgL"),
                i = n("pSRY"),
                c = n("H8j4");

            function s(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            s.prototype.clear = r, s.prototype.delete = a, s.prototype.get = o, s.prototype.has = i, s.prototype.set = c, e.exports = s
        },
        e5cp: function(e, t, n) {
            var r = n("fmRc"),
                a = n("or5M"),
                o = n("HDyB"),
                i = n("seXi"),
                c = n("QqLw"),
                s = n("Z0cm"),
                l = n("DSRE"),
                u = n("c6wG"),
                p = "[object Arguments]",
                f = "[object Array]",
                d = "[object Object]",
                m = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n, h, g, b) {
                var v = s(e),
                    y = s(t),
                    _ = v ? f : c(e),
                    j = y ? f : c(t),
                    w = (_ = _ == p ? d : _) == d,
                    O = (j = j == p ? d : j) == d,
                    x = _ == j;
                if (x && l(e)) {
                    if (!l(t)) return !1;
                    v = !0, w = !1
                }
                if (x && !w) return b || (b = new r), v || u(e) ? a(e, t, n, h, g, b) : o(e, t, _, n, h, g, b);
                if (!(1 & n)) {
                    var k = w && m.call(e, "__wrapped__"),
                        E = O && m.call(t, "__wrapped__");
                    if (k || E) {
                        var C = k ? e.value() : e,
                            S = E ? t.value() : t;
                        return b || (b = new r), g(C, S, n, h, b)
                    }
                }
                return !!x && (b || (b = new r), i(e, t, n, h, g, b))
            }
        },
        "eKC+": function(e, t, n) {
            var r = n("nYr6"),
                a = n("xp0l"),
                o = n("N3/Y"),
                i = o.MUST_USE_PROPERTY,
                c = o.HAS_BOOLEAN_VALUE,
                s = o.HAS_NUMERIC_VALUE,
                l = o.HAS_POSITIVE_NUMERIC_VALUE,
                u = o.HAS_OVERLOADED_BOOLEAN_VALUE;

            function p(e, t) {
                return (e & t) === t
            }

            function f(e, t, n) {
                var r, a, o, f = e.Properties,
                    d = e.DOMAttributeNames;
                for (a in f) r = d[a] || (n ? a : a.toLowerCase()), o = f[a], t[r] = {
                    attributeName: r,
                    propertyName: a,
                    mustUseProperty: p(o, i),
                    hasBooleanValue: p(o, c),
                    hasNumericValue: p(o, s),
                    hasPositiveNumericValue: p(o, l),
                    hasOverloadedBooleanValue: p(o, u)
                }
            }
            var d = {};
            f(r, d);
            var m = {};
            f(a, m, !0);
            var h = {};
            f(r, h), f(a, h, !0);
            e.exports = {
                html: d,
                svg: m,
                properties: h,
                isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))
            }
        },
        eUgh: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
                return a
            }
        },
        eVQB: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            }));

            function r(e, t, n) {
                var r = "";
                return n.split(" ").forEach((function(n) {
                    void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
                })), r
            }
            var a = function(e, t, n) {
                var r = e.key + "-" + t.name;
                if (!1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles), void 0 === e.inserted[t.name]) {
                    var a = t;
                    do {
                        e.insert(t === a ? "." + r : "", a, e.sheet, !0);
                        a = a.next
                    } while (void 0 !== a)
                }
            }
        },
        ebwN: function(e, t, n) {
            var r = n("Cwc5")(n("Kz5y"), "Map");
            e.exports = r
        },
        ekgI: function(e, t, n) {
            var r = n("YESw"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return r ? void 0 !== t[e] : a.call(t, e)
            }
        },
        elyg: function(e, t, n) {
            "use strict";
            var r = n("vJKn"),
                a = n("qVT1"),
                o = n("/GRZ"),
                i = n("i2R6"),
                c = n("zoAU");
            t.__esModule = !0, t.getDomainLocale = function(e, t, n, r) {
                0;
                return !1
            }, t.addLocale = j, t.delLocale = w, t.hasBasePath = x, t.addBasePath = k, t.delBasePath = E, t.isLocalURL = C, t.interpolateAs = S, t.resolveHref = P, t.default = void 0;
            var s = n("X24+"),
                l = n("Nh2W"),
                u = n("wkBG"),
                p = (n("3wub"), y(n("dZ6Y"))),
                f = n("g/15"),
                d = n("/jkW"),
                m = n("hS4m"),
                h = n("3WeD"),
                g = y(n("P7gm")),
                b = n("gguc"),
                v = n("YTqd");

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _() {
                return Object.assign(new Error("Route Cancelled"), {
                    cancelled: !0
                })
            }

            function j(e, t, n) {
                return e
            }

            function w(e, t) {
                return e
            }

            function O(e) {
                var t = e.indexOf("?"),
                    n = e.indexOf("#");
                return (t > -1 || n > -1) && (e = e.substring(0, t > -1 ? t : n)), e
            }

            function x(e) {
                return "" === (e = O(e)) || e.startsWith("/")
            }

            function k(e) {
                return function(e, t) {
                    return t && e.startsWith("/") ? "/" === e ? (0, s.normalizePathTrailingSlash)(t) : "".concat(t).concat("/" === O(e) ? e.substring(1) : e) : e
                }(e, "")
            }

            function E(e) {
                return (e = e.slice("".length)).startsWith("/") || (e = "/".concat(e)), e
            }

            function C(e) {
                if (e.startsWith("/") || e.startsWith("#")) return !0;
                try {
                    var t = (0, f.getLocationOrigin)(),
                        n = new URL(e, t);
                    return n.origin === t && x(n.pathname)
                } catch (r) {
                    return !1
                }
            }

            function S(e, t, n) {
                var r = "",
                    a = (0, v.getRouteRegex)(e),
                    o = a.groups,
                    i = (t !== e ? (0, b.getRouteMatcher)(a)(t) : "") || n;
                r = e;
                var c = Object.keys(o);
                return c.every((function(e) {
                    var t = i[e] || "",
                        n = o[e],
                        a = n.repeat,
                        c = n.optional,
                        s = "[".concat(a ? "..." : "").concat(e, "]");
                    return c && (s = "".concat(t ? "" : "/", "[").concat(s, "]")), a && !Array.isArray(t) && (t = [t]), (c || e in i) && (r = r.replace(s, a ? t.map((function(e) {
                        return encodeURIComponent(e)
                    })).join("/") : encodeURIComponent(t)) || "/")
                })) || (r = ""), {
                    params: c,
                    result: r
                }
            }

            function A(e, t) {
                var n = {};
                return Object.keys(e).forEach((function(r) {
                    t.includes(r) || (n[r] = e[r])
                })), n
            }

            function P(e, t, n) {
                var r = new URL(e, "http://n"),
                    a = "string" === typeof t ? t : (0, f.formatWithValidation)(t);
                if (!C(a)) return n ? [a] : a;
                try {
                    var o = new URL(a, r);
                    o.pathname = (0, s.normalizePathTrailingSlash)(o.pathname);
                    var i = "";
                    if ((0, d.isDynamicRoute)(o.pathname) && o.searchParams && n) {
                        var c = (0, h.searchParamsToUrlQuery)(o.searchParams),
                            l = S(o.pathname, o.pathname, c),
                            u = l.result,
                            p = l.params;
                        u && (i = (0, f.formatWithValidation)({
                            pathname: u,
                            hash: o.hash,
                            query: A(c, p)
                        }))
                    }
                    var m = o.origin === r.origin ? o.href.slice(o.origin.length) : o.href;
                    return n ? [m, i || m] : m
                } catch (g) {
                    return n ? [a] : a
                }
            }

            function T(e) {
                var t = (0, f.getLocationOrigin)();
                return e.startsWith(t) ? e.substring(t.length) : e
            }

            function N(e, t, n) {
                var r = P(e.pathname, t, !0),
                    a = c(r, 2),
                    o = a[0],
                    i = a[1],
                    s = (0, f.getLocationOrigin)(),
                    l = o.startsWith(s),
                    u = i && i.startsWith(s);
                o = T(o), i = i ? T(i) : i;
                var p = l ? o : k(o),
                    d = n ? T(P(e.pathname, n)) : i || o;
                return {
                    url: p,
                    as: u ? d : k(d)
                }
            }

            function L(e, t) {
                var n = (0, s.removePathTrailingSlash)((0, u.denormalizePagePath)(e));
                return "/404" === n || "/_error" === n ? e : (t.includes(n) || t.some((function(t) {
                    if ((0, d.isDynamicRoute)(t) && (0, v.getRouteRegex)(t).re.test(n)) return e = t, !0
                })), (0, s.removePathTrailingSlash)(e))
            }
            var R = Symbol("SSG_DATA_NOT_FOUND");

            function F(e, t) {
                return fetch(e, {
                    credentials: "same-origin"
                }).then((function(n) {
                    if (!n.ok) {
                        if (t > 1 && n.status >= 500) return F(e, t - 1);
                        if (404 === n.status) return n.json().then((function(e) {
                            if (e.notFound) return {
                                notFound: R
                            };
                            throw new Error("Failed to load static props")
                        }));
                        throw new Error("Failed to load static props")
                    }
                    return n.json()
                }))
            }

            function I(e, t) {
                return F(e, t ? 3 : 1).catch((function(e) {
                    throw t || (0, l.markAssetError)(e), e
                }))
            }
            var M = function() {
                function e(t, n, r, a) {
                    var i = this,
                        c = a.initialProps,
                        l = a.pageLoader,
                        u = a.App,
                        p = a.wrapApp,
                        h = a.Component,
                        g = a.err,
                        b = a.subscription,
                        v = a.isFallback,
                        y = a.locale,
                        _ = (a.locales, a.defaultLocale, a.domainLocales, a.isPreview);
                    o(this, e), this.route = void 0, this.pathname = void 0, this.query = void 0, this.asPath = void 0, this.basePath = void 0, this.components = void 0, this.sdc = {}, this.sdr = {}, this.sub = void 0, this.clc = void 0, this.pageLoader = void 0, this._bps = void 0, this.events = void 0, this._wrapApp = void 0, this.isSsr = void 0, this.isFallback = void 0, this._inFlightRoute = void 0, this._shallow = void 0, this.locale = void 0, this.locales = void 0, this.defaultLocale = void 0, this.domainLocales = void 0, this.isReady = void 0, this.isPreview = void 0, this.isLocaleDomain = void 0, this._idx = 0, this.onPopState = function(e) {
                        var t = e.state;
                        if (t) {
                            if (t.__N) {
                                var n = t.url,
                                    r = t.as,
                                    a = t.options,
                                    o = t.idx;
                                i._idx = o;
                                var c = (0, m.parseRelativeUrl)(n).pathname;
                                i.isSsr && r === i.asPath && c === i.pathname || i._bps && !i._bps(t) || i.change("replaceState", n, r, Object.assign({}, a, {
                                    shallow: a.shallow && i._shallow,
                                    locale: a.locale || i.defaultLocale
                                }), undefined)
                            }
                        } else {
                            var s = i.pathname,
                                l = i.query;
                            i.changeState("replaceState", (0, f.formatWithValidation)({
                                pathname: k(s),
                                query: l
                            }), (0, f.getURL)())
                        }
                    }, this.route = (0, s.removePathTrailingSlash)(t), this.components = {}, "/_error" !== t && (this.components[this.route] = {
                        Component: h,
                        initial: !0,
                        props: c,
                        err: g,
                        __N_SSG: c && c.__N_SSG,
                        __N_SSP: c && c.__N_SSP
                    }), this.components["/_app"] = {
                        Component: u,
                        styleSheets: []
                    }, this.events = e.events, this.pageLoader = l, this.pathname = t, this.query = n;
                    var j = (0, d.isDynamicRoute)(t) && self.__NEXT_DATA__.autoExport;
                    this.asPath = j ? t : r, this.basePath = "", this.sub = b, this.clc = null, this._wrapApp = p, this.isSsr = !0, this.isFallback = v, this.isReady = !(!self.__NEXT_DATA__.gssp && !self.__NEXT_DATA__.gip && (j || self.location.search)), this.isPreview = !!_, this.isLocaleDomain = !1, "//" !== r.substr(0, 2) && this.changeState("replaceState", (0, f.formatWithValidation)({
                        pathname: k(t),
                        query: n
                    }), (0, f.getURL)(), {
                        locale: y
                    }), window.addEventListener("popstate", this.onPopState)
                }
                return i(e, [{
                    key: "reload",
                    value: function() {
                        window.location.reload()
                    }
                }, {
                    key: "back",
                    value: function() {
                        window.history.back()
                    }
                }, {
                    key: "push",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        var r = N(this, e, t);
                        return e = r.url, t = r.as, this.change("pushState", e, t, n)
                    }
                }, {
                    key: "replace",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = N(this, e, t);
                        return e = r.url, t = r.as, this.change("replaceState", e, t, n)
                    }
                }, {
                    key: "change",
                    value: function() {
                        var t = a(r.mark((function t(n, a, o, i, c) {
                            var u, p, h, y, _, O, P, T, F, I, M, G, D, z, B, U, q, W, H, V, Y, K, Q, Z, X, $, J, ee, te, ne, re, ae, oe, ie, ce, se;
                            return r.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (C(a)) {
                                            t.next = 3;
                                            break
                                        }
                                        return window.location.href = a, t.abrupt("return", !1);
                                    case 3:
                                        i._h && (this.isReady = !0), i.scroll = !(null != (u = i.scroll) && !u), p = i.locale !== this.locale, t.next = 18;
                                        break;
                                    case 18:
                                        if (i._h || (this.isSsr = !1), f.ST && performance.mark("routeChange"), h = i.shallow, y = {
                                                shallow: void 0 !== h && h
                                            }, this._inFlightRoute && this.abortComponentLoad(this._inFlightRoute, y), o = k(j(x(o) ? E(o) : o, i.locale, this.defaultLocale)), _ = w(x(o) ? E(o) : o, this.locale), this._inFlightRoute = o, i._h || !this.onlyAHashChange(_)) {
                                            t.next = 34;
                                            break
                                        }
                                        return this.asPath = _, e.events.emit("hashChangeStart", o, y), this.changeState(n, a, o, i), this.scrollToHash(_), this.notify(this.components[this.route], null), e.events.emit("hashChangeComplete", o, y), t.abrupt("return", !0);
                                    case 34:
                                        return O = (0, m.parseRelativeUrl)(a), P = O.pathname, T = O.query, t.prev = 36, t.next = 39, this.pageLoader.getPageList();
                                    case 39:
                                        return F = t.sent, t.next = 42, (0, l.getClientBuildManifest)();
                                    case 42:
                                        M = t.sent, I = M.__rewrites, t.next = 50;
                                        break;
                                    case 46:
                                        return t.prev = 46, t.t0 = t.catch(36), window.location.href = o, t.abrupt("return", !1);
                                    case 50:
                                        if (this.urlIsNew(_) || p || (n = "replaceState"), G = o, "/_error" !== (P = P ? (0, s.removePathTrailingSlash)(E(P)) : P) && (o.startsWith("/") ? (D = (0, g.default)(k(j(E(o), this.locale)), F, I, T, (function(e) {
                                                return L(e, F)
                                            }), this.locales), G = D.asPath, D.matchedPage && D.resolvedHref && (P = D.resolvedHref, O.pathname = P, a = (0, f.formatWithValidation)(O))) : (O.pathname = L(P, F), O.pathname !== P && (P = O.pathname, a = (0, f.formatWithValidation)(O)))), z = (0, s.removePathTrailingSlash)(P), C(o)) {
                                            t.next = 60;
                                            break
                                        }
                                        t.next = 58;
                                        break;
                                    case 58:
                                        return window.location.href = o, t.abrupt("return", !1);
                                    case 60:
                                        if (G = w(E(G), this.locale), !(0, d.isDynamicRoute)(z)) {
                                            t.next = 76;
                                            break
                                        }
                                        if (B = (0, m.parseRelativeUrl)(G), U = B.pathname, q = (0, v.getRouteRegex)(z), W = (0, b.getRouteMatcher)(q)(U), V = (H = z === U) ? S(z, U, T) : {}, W && (!H || V.result)) {
                                            t.next = 75;
                                            break
                                        }
                                        if (!((Y = Object.keys(q.groups).filter((function(e) {
                                                return !T[e]
                                            }))).length > 0)) {
                                            t.next = 73;
                                            break
                                        }
                                        throw new Error((H ? "The provided `href` (".concat(a, ") value is missing query values (").concat(Y.join(", "), ") to be interpolated properly. ") : "The provided `as` value (".concat(U, ") is incompatible with the `href` value (").concat(z, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(H ? "href-interpolation-failed" : "incompatible-href-as"));
                                    case 73:
                                        t.next = 76;
                                        break;
                                    case 75:
                                        H ? o = (0, f.formatWithValidation)(Object.assign({}, B, {
                                            pathname: V.result,
                                            query: A(T, V.params)
                                        })) : Object.assign(T, W);
                                    case 76:
                                        return e.events.emit("routeChangeStart", o, y), t.prev = 77, t.next = 80, this.getRouteInfo(z, P, T, o, G, y);
                                    case 80:
                                        if (Z = t.sent, $ = (X = Z).error, J = X.props, ee = X.__N_SSG, te = X.__N_SSP, !ee && !te || !J) {
                                            t.next = 107;
                                            break
                                        }
                                        if (!J.pageProps || !J.pageProps.__N_REDIRECT) {
                                            t.next = 93;
                                            break
                                        }
                                        if (!(ne = J.pageProps.__N_REDIRECT).startsWith("/")) {
                                            t.next = 91;
                                            break
                                        }
                                        if ((re = (0, m.parseRelativeUrl)(ne)).pathname = L(re.pathname, F), !F.includes(re.pathname)) {
                                            t.next = 91;
                                            break
                                        }
                                        return ae = N(this, ne, ne), oe = ae.url, ie = ae.as, t.abrupt("return", this.change(n, oe, ie, i));
                                    case 91:
                                        return window.location.href = ne, t.abrupt("return", new Promise((function() {})));
                                    case 93:
                                        if (this.isPreview = !!J.__N_PREVIEW, J.notFound !== R) {
                                            t.next = 107;
                                            break
                                        }
                                        return t.prev = 95, t.next = 98, this.fetchComponent("/404");
                                    case 98:
                                        ce = "/404", t.next = 104;
                                        break;
                                    case 101:
                                        t.prev = 101, t.t1 = t.catch(95), ce = "/_error";
                                    case 104:
                                        return t.next = 106, this.getRouteInfo(ce, ce, T, o, G, {
                                            shallow: !1
                                        });
                                    case 106:
                                        Z = t.sent;
                                    case 107:
                                        return e.events.emit("beforeHistoryChange", o, y), this.changeState(n, a, o, i), se = i.shallow && this.route === z, i._h && "/_error" === P && 500 === (null == (K = self.__NEXT_DATA__.props) || null == (Q = K.pageProps) ? void 0 : Q.statusCode) && null != J && J.pageProps && (J.pageProps.statusCode = 500), t.next = 114, this.set(z, P, T, _, Z, c || (se || !i.scroll ? null : {
                                            x: 0,
                                            y: 0
                                        })).catch((function(e) {
                                            if (!e.cancelled) throw e;
                                            $ = $ || e
                                        }));
                                    case 114:
                                        if (!$) {
                                            t.next = 117;
                                            break
                                        }
                                        throw e.events.emit("routeChangeError", $, _, y), $;
                                    case 117:
                                        return e.events.emit("routeChangeComplete", o, y), t.abrupt("return", !0);
                                    case 122:
                                        if (t.prev = 122, t.t2 = t.catch(77), !t.t2.cancelled) {
                                            t.next = 126;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 126:
                                        throw t.t2;
                                    case 127:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [36, 46],
                                [77, 122],
                                [95, 101]
                            ])
                        })));
                        return function(e, n, r, a, o) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "changeState",
                    value: function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        "pushState" === e && (0, f.getURL)() === n || (this._shallow = r.shallow, window.history[e]({
                            url: t,
                            as: n,
                            options: r,
                            __N: !0,
                            idx: this._idx = "pushState" !== e ? this._idx : this._idx + 1
                        }, "", n))
                    }
                }, {
                    key: "handleRouteInfoError",
                    value: function() {
                        var t = a(r.mark((function t(n, a, o, i, c, s) {
                            var u, p, f, d;
                            return r.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!n.cancelled) {
                                            t.next = 2;
                                            break
                                        }
                                        throw n;
                                    case 2:
                                        if (!(0, l.isAssetError)(n) && !s) {
                                            t.next = 6;
                                            break
                                        }
                                        throw e.events.emit("routeChangeError", n, i, c), window.location.href = i, _();
                                    case 6:
                                        if (t.prev = 6, "undefined" !== typeof u && "undefined" !== typeof p) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.next = 11, this.fetchComponent("/_error");
                                    case 11:
                                        f = t.sent, u = f.page, p = f.styleSheets;
                                    case 14:
                                        if ((d = {
                                                props: undefined,
                                                Component: u,
                                                styleSheets: p,
                                                err: n,
                                                error: n
                                            }).props) {
                                            t.next = 26;
                                            break
                                        }
                                        return t.prev = 16, t.next = 19, this.getInitialProps(u, {
                                            err: n,
                                            pathname: a,
                                            query: o
                                        });
                                    case 19:
                                        d.props = t.sent, t.next = 26;
                                        break;
                                    case 22:
                                        t.prev = 22, t.t0 = t.catch(16), console.error("Error in error page `getInitialProps`: ", t.t0), d.props = {};
                                    case 26:
                                        return t.abrupt("return", d);
                                    case 29:
                                        return t.prev = 29, t.t1 = t.catch(6), t.abrupt("return", this.handleRouteInfoError(t.t1, a, o, i, c, !0));
                                    case 32:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [6, 29],
                                [16, 22]
                            ])
                        })));
                        return function(e, n, r, a, o, i) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getRouteInfo",
                    value: function() {
                        var e = a(r.mark((function e(t, n, a, o, i, c) {
                            var s, l, u, p, d, m, h, g, b = this;
                            return r.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, s = this.components[t], !c.shallow || !s || this.route !== t) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", s);
                                    case 4:
                                        if (!(l = s && "initial" in s ? void 0 : s)) {
                                            e.next = 9;
                                            break
                                        }
                                        e.t0 = l, e.next = 12;
                                        break;
                                    case 9:
                                        return e.next = 11, this.fetchComponent(t).then((function(e) {
                                            return {
                                                Component: e.page,
                                                styleSheets: e.styleSheets,
                                                __N_SSG: e.mod.__N_SSG,
                                                __N_SSP: e.mod.__N_SSP
                                            }
                                        }));
                                    case 11:
                                        e.t0 = e.sent;
                                    case 12:
                                        u = e.t0, p = u.Component, d = u.__N_SSG, m = u.__N_SSP, e.next = 18;
                                        break;
                                    case 18:
                                        return (d || m) && (h = this.pageLoader.getDataHref((0, f.formatWithValidation)({
                                            pathname: n,
                                            query: a
                                        }), i, d, this.locale)), e.next = 21, this._getData((function() {
                                            return d ? b._getStaticData(h) : m ? b._getServerData(h) : b.getInitialProps(p, {
                                                pathname: n,
                                                query: a,
                                                asPath: o
                                            })
                                        }));
                                    case 21:
                                        return g = e.sent, u.props = g, this.components[t] = u, e.abrupt("return", u);
                                    case 27:
                                        return e.prev = 27, e.t1 = e.catch(0), e.abrupt("return", this.handleRouteInfoError(e.t1, n, a, o, c));
                                    case 30:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 27]
                            ])
                        })));
                        return function(t, n, r, a, o, i) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "set",
                    value: function(e, t, n, r, a, o) {
                        return this.isFallback = !1, this.route = e, this.pathname = t, this.query = n, this.asPath = r, this.notify(a, o)
                    }
                }, {
                    key: "beforePopState",
                    value: function(e) {
                        this._bps = e
                    }
                }, {
                    key: "onlyAHashChange",
                    value: function(e) {
                        if (!this.asPath) return !1;
                        var t = this.asPath.split("#"),
                            n = c(t, 2),
                            r = n[0],
                            a = n[1],
                            o = e.split("#"),
                            i = c(o, 2),
                            s = i[0],
                            l = i[1];
                        return !(!l || r !== s || a !== l) || r === s && a !== l
                    }
                }, {
                    key: "scrollToHash",
                    value: function(e) {
                        var t = e.split("#"),
                            n = c(t, 2)[1];
                        if ("" !== n && "top" !== n) {
                            var r = document.getElementById(n);
                            if (r) r.scrollIntoView();
                            else {
                                var a = document.getElementsByName(n)[0];
                                a && a.scrollIntoView()
                            }
                        } else window.scrollTo(0, 0)
                    }
                }, {
                    key: "urlIsNew",
                    value: function(e) {
                        return this.asPath !== e
                    }
                }, {
                    key: "prefetch",
                    value: function() {
                        var e = a(r.mark((function e(t) {
                            var n, a, o, i, c, u, p, d, h, b, v = this,
                                y = arguments;
                            return r.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = y.length > 1 && void 0 !== y[1] ? y[1] : t, a = y.length > 2 && void 0 !== y[2] ? y[2] : {}, o = (0, m.parseRelativeUrl)(t), i = o.pathname, e.next = 7, this.pageLoader.getPageList();
                                    case 7:
                                        if (c = e.sent, u = n, !n.startsWith("/")) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.next = 12, (0, l.getClientBuildManifest)();
                                    case 12:
                                        d = e.sent, p = d.__rewrites, h = (0, g.default)(k(j(n, this.locale)), c, p, o.query, (function(e) {
                                            return L(e, c)
                                        }), this.locales), u = w(E(h.asPath), this.locale), h.matchedPage && h.resolvedHref && (i = h.resolvedHref, o.pathname = i, t = (0, f.formatWithValidation)(o)), e.next = 21;
                                        break;
                                    case 19:
                                        o.pathname = L(o.pathname, c), o.pathname !== i && (i = o.pathname, t = (0, f.formatWithValidation)(o));
                                    case 21:
                                        b = (0, s.removePathTrailingSlash)(i), e.next = 24;
                                        break;
                                    case 24:
                                        return e.next = 26, Promise.all([this.pageLoader._isSsg(b).then((function(e) {
                                            return !!e && v._getStaticData(v.pageLoader.getDataHref(t, u, !0, "undefined" !== typeof a.locale ? a.locale : v.locale))
                                        })), this.pageLoader[a.priority ? "loadPage" : "prefetch"](b)]);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "fetchComponent",
                    value: function() {
                        var e = a(r.mark((function e(t) {
                            var n, a, o, i;
                            return r.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = !1, a = this.clc = function() {
                                            n = !0
                                        }, e.next = 4, this.pageLoader.loadPage(t);
                                    case 4:
                                        if (o = e.sent, !n) {
                                            e.next = 9;
                                            break
                                        }
                                        throw (i = new Error('Abort fetching component for route: "'.concat(t, '"'))).cancelled = !0, i;
                                    case 9:
                                        return a === this.clc && (this.clc = null), e.abrupt("return", o);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_getData",
                    value: function(e) {
                        var t = this,
                            n = !1,
                            r = function() {
                                n = !0
                            };
                        return this.clc = r, e().then((function(e) {
                            if (r === t.clc && (t.clc = null), n) {
                                var a = new Error("Loading initial props cancelled");
                                throw a.cancelled = !0, a
                            }
                            return e
                        }))
                    }
                }, {
                    key: "_getStaticData",
                    value: function(e) {
                        var t = this,
                            n = new URL(e, window.location.href).href;
                        return !this.isPreview && this.sdc[n] ? Promise.resolve(this.sdc[n]) : I(e, this.isSsr).then((function(e) {
                            return t.sdc[n] = e, e
                        }))
                    }
                }, {
                    key: "_getServerData",
                    value: function(e) {
                        var t = this,
                            n = new URL(e, window.location.href).href;
                        return this.sdr[n] ? this.sdr[n] : this.sdr[n] = I(e, this.isSsr).then((function(e) {
                            return delete t.sdr[n], e
                        })).catch((function(e) {
                            throw delete t.sdr[n], e
                        }))
                    }
                }, {
                    key: "getInitialProps",
                    value: function(e, t) {
                        var n = this.components["/_app"].Component,
                            r = this._wrapApp(n);
                        return t.AppTree = r, (0, f.loadGetInitialProps)(n, {
                            AppTree: r,
                            Component: e,
                            router: this,
                            ctx: t
                        })
                    }
                }, {
                    key: "abortComponentLoad",
                    value: function(t, n) {
                        this.clc && (e.events.emit("routeChangeError", _(), t, n), this.clc(), this.clc = null)
                    }
                }, {
                    key: "notify",
                    value: function(e, t) {
                        return this.sub(e, this.components["/_app"].Component, t)
                    }
                }]), e
            }();
            t.default = M, M.events = (0, p.default)()
        },
        "ep+1": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                function e(e) {
                    var t = this;
                    this._insertTag = function(e) {
                        var n;
                        n = 0 === t.tags.length ? t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                    }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.before = null
                }
                var t = e.prototype;
                return t.hydrate = function(e) {
                    e.forEach(this._insertTag)
                }, t.insert = function(e) {
                    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(function(e) {
                        var t = document.createElement("style");
                        return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
                    }(this));
                    var t = this.tags[this.tags.length - 1];
                    if (this.isSpeedy) {
                        var n = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }(t);
                        try {
                            n.insertRule(e, n.cssRules.length)
                        } catch (r) {
                            0
                        }
                    } else t.appendChild(document.createTextNode(e));
                    this.ctr++
                }, t.flush = function() {
                    this.tags.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), this.tags = [], this.ctr = 0
                }, e
            }()
        },
        f7rL: function(e) {
            e.exports = JSON.parse('{"css/asana-guide.css":"css/asana-guide-2ce2759ea2.css","css/ebook.css":"css/ebook-0a611e3193.css","css/marketing.css":"css/marketing-7faf017e23.css","css/reskin.css":"css/reskin-c9afb11e57.css","css/styleguide.css":"css/styleguide-7930d95f81.css","js/first-party-apis/analytics.js":"js/first-party-apis/analytics-005f74ff53.js","js/first-party-apis/app-user-info.js":"js/first-party-apis/app-user-info-c6e311efce.js","js/first-party-apis/email.js":"js/first-party-apis/email-7551abef0a.js","js/first-party-apis/helpers.js":"js/first-party-apis/helpers-d41d8cd98f.js","js/first-party-apis/i18n.js":"js/first-party-apis/i18n-db3041190d.js","js/first-party-apis/login.js":"js/first-party-apis/login-8497288ca7.js","js/first-party-apis/signup.js":"js/first-party-apis/signup-e81bee8e38.js","js/first-party-apis/storage.js":"js/first-party-apis/storage-234a164583.js","js/first-party-apis/verification.js":"js/first-party-apis/verification-b25bfb7fa7.js","js/global.js":"js/global-121eb1dd7b.js","js/objects/animations.js":"js/objects/animations-17e9c41fb9.js","js/objects/asanaAtom-accordion.js":"js/objects/asanaAtom-accordion-5fc6e78e60.js","js/objects/asanaAtom-accordion2.js":"js/objects/asanaAtom-accordion2-68a86a6249.js","js/objects/asanaAtom-customDropdown.js":"js/objects/asanaAtom-customDropdown-7047073cb3.js","js/objects/asanaAtom-guideRateArticle.js":"js/objects/asanaAtom-guideRateArticle-3ca3c3e5e9.js","js/objects/asanaAtom-table.js":"js/objects/asanaAtom-table-81b56a42f9.js","js/objects/asanaComponent-accordion.js":"js/objects/asanaComponent-accordion-aa0391aae5.js","js/objects/asanaComponent-galleryExpander.js":"js/objects/asanaComponent-galleryExpander-aff7d11187.js","js/objects/asanaComponent-plansBusiness.js":"js/objects/asanaComponent-plansBusiness-0ea0cac7ce.js","js/objects/asanaComponent-rotatingScreenshots.js":"js/objects/asanaComponent-rotatingScreenshots-e88cc802b6.js","js/objects/error-tracking.js":"js/objects/error-tracking-f196329192.js","js/objects/text-transition.js":"js/objects/text-transition-a041482372.js","js/objects/visualAssets.js":"js/objects/visualAssets-4066971cb1.js","js/page-specific/animation-square.js":"js/page-specific/animation-square-4e92ecef88.js","js/page-specific/announcement-topbar.js":"js/page-specific/announcement-topbar-aaba362b24.js","js/page-specific/apps-mobile-nav.js":"js/page-specific/apps-mobile-nav-29cab74674.js","js/page-specific/create-account.js":"js/page-specific/create-account-a3a73fab7e.js","js/page-specific/customer-marquee-drag.js":"js/page-specific/customer-marquee-drag-89339bebfc.js","js/page-specific/customer-parallax.js":"js/page-specific/customer-parallax-3c06de430c.js","js/page-specific/customer-slider.js":"js/page-specific/customer-slider-42df825a3e.js","js/page-specific/drag-marquee.js":"js/page-specific/drag-marquee-1448811700.js","js/page-specific/drift.js":"js/page-specific/drift-6eca7c7e68.js","js/page-specific/ebook.js":"js/page-specific/ebook-7a80d18d25.js","js/page-specific/feature-carousel.js":"js/page-specific/feature-carousel-c57be4946f.js","js/page-specific/gtm-push-transaction-details.js":"js/page-specific/gtm-push-transaction-details-ba919e652f.js","js/page-specific/guide-search-results.js":"js/page-specific/guide-search-results-5e8f0360a5.js","js/page-specific/guide-videos.js":"js/page-specific/guide-videos-08c8cfbe90.js","js/page-specific/guide.js":"js/page-specific/guide-2d646b85b4.js","js/page-specific/header.js":"js/page-specific/header-444201738a.js","js/page-specific/internal.js":"js/page-specific/internal-19ba4baf74.js","js/page-specific/invite-confirmation.js":"js/page-specific/invite-confirmation-6f2cd24a2f.js","js/page-specific/invite.js":"js/page-specific/invite-8096e30d17.js","js/page-specific/jobs.js":"js/page-specific/jobs-ad161d39ce.js","js/page-specific/jotform.js":"js/page-specific/jotform-38b61fc423.js","js/page-specific/lottie.js":"js/page-specific/lottie-c526d3805e.js","js/page-specific/marketing-embed-form.js":"js/page-specific/marketing-embed-form-46893b6ca8.js","js/page-specific/marketing-reskin.js":"js/page-specific/marketing-reskin-cf7b5ac7a5.js","js/page-specific/marketing.js":"js/page-specific/marketing-22c1082840.js","js/page-specific/nonprofit.js":"js/page-specific/nonprofit-96e3149f84.js","js/page-specific/popup-receiver-guide.js":"js/page-specific/popup-receiver-guide-a0c7908c1d.js","js/page-specific/pricing-grid.js":"js/page-specific/pricing-grid-8dd9fa06b2.js","js/page-specific/quiz.js":"js/page-specific/quiz-86e553225d.js","js/page-specific/quote-wheel.js":"js/page-specific/quote-wheel-ceffb8f5f8.js","js/page-specific/rotating-gallery.js":"js/page-specific/rotating-gallery-d0361b0c40.js","js/page-specific/sales-form.js":"js/page-specific/sales-form-f5cf8330fa.js","js/page-specific/sales.js":"js/page-specific/sales-274811f511.js","js/page-specific/searchbar.js":"js/page-specific/searchbar-089f97d9f6.js","js/page-specific/sso-redirect.js":"js/page-specific/sso-redirect-4234bef558.js","js/page-specific/support-form-dropdown.js":"js/page-specific/support-form-dropdown-b988783052.js","js/page-specific/support.js":"js/page-specific/support-9d8e075a6a.js","js/page-specific/swiftype.js":"js/page-specific/swiftype-7d12003b40.js","js/page-specific/team-cards.js":"js/page-specific/team-cards-bb139d0412.js","js/page-specific/template-gallery.js":"js/page-specific/template-gallery-a83d22bc36.js","js/page-specific/terms.js":"js/page-specific/terms-7f4691c244.js","js/page-specific/thanks.js":"js/page-specific/thanks-ddff0b1815.js","js/page-specific/topbar.js":"js/page-specific/topbar-c7aad24c13.js","js/page-specific/tracking.js":"js/page-specific/tracking-bdee452c67.js","js/page-specific/video-popout.js":"js/page-specific/video-popout-5470d36e5e.js","js/page-specific/video-popup.js":"js/page-specific/video-popup-908c79ff1b.js","js/page-specific/youtube-popup.js":"js/page-specific/youtube-popup-78cf4a59da.js"}')
        },
        f9VK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("Vvt1"),
                i = n.n(o),
                c = n("jQyn"),
                s = n("AeFk"),
                l = (a.a.createElement, {
                    "page-builder": i()((function() {
                        return Promise.all([n.e(0), n.e(18)]).then(n.bind(null, "5XXq"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["5XXq"]
                            },
                            modules: ["./page-builder"]
                        }
                    }),
                    "landing-page-builder": i()((function() {
                        return Promise.all([n.e(0), n.e(18)]).then(n.bind(null, "5XXq"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["5XXq"]
                            },
                            modules: ["./page-builder"]
                        }
                    }),
                    "section-builder": i()((function() {
                        return Promise.all([n.e(0), n.e(160)]).then(n.bind(null, "ELD6"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["ELD6"]
                            },
                            modules: ["./section-builder"]
                        }
                    }),
                    default: i()((function() {
                        return Promise.all([n.e(0), n.e(147)]).then(n.bind(null, "a7gn"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["a7gn"]
                            },
                            modules: ["./default"]
                        }
                    }),
                    content: i()((function() {
                        return Promise.all([n.e(0), n.e(146)]).then(n.bind(null, "q+vC"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["q+vC"]
                            },
                            modules: ["./content"]
                        }
                    }),
                    404: i()((function() {
                        return Promise.all([n.e(0), n.e(145)]).then(n.bind(null, "Izsr"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["Izsr"]
                            },
                            modules: ["./404"]
                        }
                    }),
                    app: i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(38)]).then(n.bind(null, "VjZ6"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["VjZ6"]
                            },
                            modules: ["./app"]
                        }
                    }),
                    legal: i()((function() {
                        return Promise.all([n.e(0), n.e(39)]).then(n.bind(null, "Ebai"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["Ebai"]
                            },
                            modules: ["./legal"]
                        }
                    }),
                    "legal-mobile": i()((function() {
                        return Promise.all([n.e(0), n.e(157)]).then(n.bind(null, "WWOn"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["WWOn"]
                            },
                            modules: ["./legal-mobile"]
                        }
                    }),
                    support: i()((function() {
                        return Promise.all([n.e(0), n.e(163)]).then(n.bind(null, "xS34"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["xS34"]
                            },
                            modules: ["./support"]
                        }
                    }),
                    "support-failure": i()((function() {
                        return Promise.all([n.e(0), n.e(161)]).then(n.bind(null, "1oIb"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["1oIb"]
                            },
                            modules: ["./support-failure"]
                        }
                    }),
                    "support-success": i()((function() {
                        return Promise.all([n.e(0), n.e(162)]).then(n.bind(null, "Wmz4"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["Wmz4"]
                            },
                            modules: ["./support-success"]
                        }
                    }),
                    "guide-home": i()((function() {
                        return Promise.all([n.e(0), n.e(149)]).then(n.bind(null, "VpLU"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["VpLU"]
                            },
                            modules: ["./guide-home"]
                        }
                    }),
                    "guide-article": i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(148)]).then(n.bind(null, "AiBD"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["AiBD"]
                            },
                            modules: ["./guide-article"]
                        }
                    }),
                    "guide-use-cases-list": i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(153)]).then(n.bind(null, "F04Y"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["F04Y"]
                            },
                            modules: ["./guide-use-cases-list"]
                        }
                    }),
                    "guide-resources-list": i()((function() {
                        return Promise.all([n.e(0), n.e(150)]).then(n.bind(null, "XOjO"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["XOjO"]
                            },
                            modules: ["./guide-resources-list"]
                        }
                    }),
                    "guide-search": i()((function() {
                        return Promise.all([n.e(0), n.e(151)]).then(n.bind(null, "E+ua"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["E+ua"]
                            },
                            modules: ["./guide-search"]
                        }
                    }),
                    "guide-sitemap": i()((function() {
                        return Promise.all([n.e(0), n.e(152)]).then(n.bind(null, "ZDar"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["ZDar"]
                            },
                            modules: ["./guide-sitemap"]
                        }
                    }),
                    "guide-webinars": i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(155)]).then(n.bind(null, "9W/4"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["9W/4"]
                            },
                            modules: ["./guide-webinars"]
                        }
                    }),
                    "guide-videos": i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(154)]).then(n.bind(null, "b3yw"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["b3yw"]
                            },
                            modules: ["./guide-videos"]
                        }
                    }),
                    "jobs-single": i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(156)]).then(n.bind(null, "KPEH"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["KPEH"]
                            },
                            modules: ["./jobs-single"]
                        }
                    }),
                    "template-gallery/gallery": i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(164)]).then(n.bind(null, "BWMO"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["BWMO"]
                            },
                            modules: ["./template-gallery/gallery"]
                        }
                    }),
                    "template-gallery/segment": i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(165)]).then(n.bind(null, "X/6m"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["X/6m"]
                            },
                            modules: ["./template-gallery/segment"]
                        }
                    }),
                    "template-gallery/template": i()((function() {
                        return Promise.all([n.e(0), n.e(30)]).then(n.bind(null, "Yav1"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["Yav1"]
                            },
                            modules: ["./template-gallery/template"]
                        }
                    }),
                    blankPageTemplate: i()((function() {
                        return Promise.all([n.e(0), n.e(37)]).then(n.bind(null, "PqMO"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["PqMO"]
                            },
                            modules: ["./blank-page"]
                        }
                    }),
                    resourceHubTemplate: i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(159)]).then(n.bind(null, "3DrD"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["3DrD"]
                            },
                            modules: ["./resource-hub"]
                        }
                    }),
                    resourceArticle: i()((function() {
                        return Promise.all([n.e(0), n.e(1), n.e(31)]).then(n.bind(null, "3iQQ"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["3iQQ"]
                            },
                            modules: ["./resource-article"]
                        }
                    })
                });

            function u(e) {
                e || (e = "default");
                var t = l[e];
                if (!t) {
                    c.default.error("Template ".concat(e, " does not exist."));
                    var r = i()((function() {
                        return n.e(158).then(n.bind(null, "BKN0"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["BKN0"]
                            },
                            modules: ["./placeholder-template"]
                        }
                    });
                    return function() {
                        return Object(s.c)(r, {
                            template_name: e || ""
                        })
                    }
                }
                return t
            }
        },
        fGT3: function(e, t, n) {
            var r = n("4kuk"),
                a = n("Xi7e"),
                o = n("ebwN");
            e.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new r,
                    map: new(o || a),
                    string: new r
                }
            }
        },
        "fR/l": function(e, t, n) {
            var r = n("CH3K"),
                a = n("Z0cm");
            e.exports = function(e, t, n) {
                var o = t(e);
                return a(e) ? o : r(o, n(e))
            }
        },
        fdBv: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return ne
            }));
            var r = n("dhJC"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("g4pe"),
                c = n.n(i),
                s = n("HJ2n"),
                l = n("SRXQ"),
                u = n("hzw2"),
                p = n("zbgk"),
                f = n("Lae+"),
                d = n("HALo"),
                m = n("cpVT"),
                h = n("usKF"),
                g = n("rAx0"),
                b = n("VTyt"),
                v = n("AeFk");
            o.a.createElement;

            function y(e) {
                var t = e.children,
                    n = Object(r.a)(e, ["children"]),
                    o = Object(a.useRef)(null);
                return Object(a.useEffect)((function() {
                    var e = function(e) {
                            "Escape" === e.key && (e.preventDefault(), n.onClose(), window.location.hash = "#close")
                        },
                        t = function(e) {
                            o.current.contains(e.target) || (n.onClose(), window.location.hash = "#close")
                        };
                    return window.addEventListener("click", t), window.addEventListener("keydown", e),
                        function() {
                            window.removeEventListener("click", t), window.removeEventListener("keydown", e)
                        }
                }), []), Object(v.c)("div", {
                    id: n.modal_id_notrans,
                    className: "modal -".concat(n.modal_class_notrans, " -active"),
                    tabindex_origin: n.tabindex_origin,
                    "data-swiftype-index": "false"
                }, Object(v.c)("a", {
                    "data-modal-close": !0,
                    href: "#close",
                    className: "modal-logo"
                }, Object(v.c)("span", {
                    className: "sr-only"
                }, "Close Modal")), Object(v.c)("a", {
                    "data-modal-close": !0,
                    href: "#close",
                    className: "modal-close modal-close-background"
                }, Object(v.c)("span", {
                    className: "sr-only"
                }, "Close Modal")), Object(v.c)("div", {
                    className: "modal-container",
                    ref: o
                }, Object(v.c)("a", {
                    "data-modal-close": !0,
                    href: "#close",
                    className: "modal-close icon icon--x js-modal-close",
                    onClick: n.onClose
                }, Object(v.c)("span", {
                    className: "sr-only"
                }, "Close modal")), t))
            }
            var _ = n("r3F2");
            o.a.createElement;

            function j(e) {
                var t = e.children,
                    n = Object(r.a)(e, ["children"]);
                return Object(v.c)(o.a.Fragment, null, n.modal_img_src && Object(v.c)("div", {
                    className: "modal-img"
                }, Object(v.c)("img", {
                    src: n.modal_img_src
                })), n.modal_title && Object(v.c)("h3", {
                    className: "modal-header"
                }, Object(v.c)(_.a, {
                    html: n.modal_title
                })), Object(v.c)("div", {
                    className: "modal-content"
                }, n.modal_content && Object(v.c)("p", null, Object(v.c)(_.a, {
                    html: n.modal_content
                })), t))
            }
            var w = n("siQn");
            o.a.createElement;

            function O(e) {
                var t = e.children,
                    n = Object(r.a)(e, ["children"]);
                return Object(v.c)(o.a.Fragment, null, Object(v.c)("div", {
                    className: "signup-modal"
                }, n.modal_img_src && Object(v.c)("div", {
                    className: "modal-img"
                }, Object(v.c)(w.default, {
                    src: n.modal_img_src
                })), n.modal_title && Object(v.c)("h3", {
                    className: "modal-header"
                }, Object(v.c)(_.a, {
                    html: n.modal_title
                })), Object(v.c)("div", {
                    className: "modal-content"
                }, n.modal_content && Object(v.c)("p", null, Object(v.c)(_.a, {
                    html: n.modal_content
                })), t)), Object(v.c)("div", {
                    className: "premium-reminder-modal-overlay"
                }, Object(v.c)("aside", {
                    className: "premium-reminder-modal"
                }, n.premium_reminder_image_src && Object(v.c)("section", {
                    className: "premium-reminder-image-container"
                }, Object(v.c)(w.default, {
                    src: n.premium_reminder_image_src
                })), n.premium_reminder_premium_cta && Object(v.c)("div", {
                    className: "premium-reminder-cta-container"
                }, Object(v.c)("button", {
                    className: "button -large -border signupForm-submit -basic",
                    onClick: function(e) {
                        AsanaHelpers.tier.setTierPremium(), AsanaHelpers.recordTrialIntent(), AsanaHelpers.signupWithEmail(document.querySelector(".signupForm.-modal-signup")), AsanaSignupUtils.signupButtons.request($(e.target))
                    }
                }, Object(v.c)("span", {
                    className: "signupForm-submit-icon"
                }, Object(v.c)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16"
                }, Object(v.c)("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7.5"
                }))), Object(v.c)("span", {
                    className: "signupForm-submit-text"
                }, Object(v.c)("span", null, n.premium_reminder_premium_cta), Object(v.c)("span", {
                    className: "signupForm-premium-progress-text"
                }, n.global_CTAsignupProgress))), Object(v.c)("a", {
                    className: "button -large premium-reminder-basic-button signupForm-submit -basic js-signup-button",
                    href: "#",
                    onClick: function(e) {
                        e.preventDefault(), AsanaHelpers.enterFreeSignupFlow(), AsanaHelpers.signupWithEmail(document.querySelector(".signupForm.-modal-signup")), AsanaSignupUtils.signupButtons.request($(e.target))
                    }
                }, Object(v.c)("span", {
                    className: "signupForm-submit-icon"
                }, Object(v.c)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16"
                }, Object(v.c)("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7.5"
                }))), Object(v.c)("span", {
                    className: "signupForm-submit-text"
                }, Object(v.c)("span", null, n.premium_reminder_basic_cta), Object(v.c)("span", null, n.global_CTAsignupProgress)))))))
            }
            var x = n("qJWP"),
                k = n("pFwx"),
                E = n("t0ry"),
                C = n("TLkI");
            o.a.createElement;

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function A(e) {
                var t = Object(a.useContext)(h.a),
                    n = t.global_modals,
                    r = t.global_CTAsignupProgress,
                    i = Object(a.useState)(null),
                    c = i[0],
                    s = i[1];
                Object(a.useEffect)((function() {
                    function e() {
                        var e = window.location.hash ? window.location.hash.slice(1) : null;
                        ["login", "existing-account", "calculate"].includes(e) ? window.location = "https://app.asana.com/-/login" : s(e in l ? e : null)
                    }
                    return e(), window.addEventListener("hashchange", e),
                        function() {
                            return window.removeEventListener("hashchange", e)
                        }
                }), []), Object(a.useEffect)((function() {
                    document.querySelector("body").classList.toggle("modal--open", !!c)
                }), [c]);
                var l = {
                        signup: {
                            ModalBody: g.default,
                            ModalWrapper: O
                        },
                        "buy-premium": {
                            ModalBody: g.default,
                            ModalWrapper: j
                        },
                        "buy-business": {
                            ModalBody: g.default,
                            ModalWrapper: j
                        },
                        "get-started": {
                            ModalBody: g.default,
                            ModalWrapper: j
                        },
                        try: {
                            ModalBody: g.default,
                            ModalWrapper: j
                        },
                        trial: {
                            ModalBody: g.default,
                            ModalWrapper: j
                        },
                        "re-authenticate": {
                            ModalBody: b.default,
                            ModalWrapper: j
                        },
                        "verify-google": {
                            ModalBody: k.a,
                            ModalWrapper: j
                        },
                        loading: {
                            ModalBody: C.a,
                            ModalWrapper: j
                        },
                        playVideo: {
                            ModalBody: E.a,
                            ModalWrapper: j
                        },
                        video: {
                            ModalBody: E.a,
                            ModalWrapper: j
                        },
                        i18n: {
                            ModalBody: x.a,
                            ModalWrapper: j
                        },
                        "signup-failed": {
                            ModalWrapper: j
                        }
                    },
                    u = l[c] || void 0,
                    p = (null === u || void 0 === u ? void 0 : u.ModalWrapper) || j,
                    f = (null === u || void 0 === u ? void 0 : u.ModalBody) || function() {
                        return Object(v.c)(o.a.Fragment, null)
                    };
                var _ = n.concat(e.modals || []).find((function(e) {
                    return e.modal_id_notrans === c
                }));
                if (!_) return null;
                var w = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? S(Object(n), !0).forEach((function(t) {
                            Object(m.a)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    global_CTAsignupProgress: r
                }, _);
                return Object(v.c)(y, Object(d.a)({}, w, {
                    onClose: function() {
                        s(null)
                    }
                }), Object(v.c)(p, w, Object(v.c)(f, w)))
            }
            var P = n("kUBA"),
                T = n("Ld3w"),
                N = n("d0C7");
            o.a.createElement;
            var L = {
                    name: "o9tlzi",
                    styles: ':root{--white:#FFFFFF;--gray-1:#F6F8F9;--gray-1a:#F4F6F6;--gray-2:#EDF1F2;--gray-3:#E0E6E8;--gray-4:#D5DCE0;--gray-5:#B7BFC6;--gray-6:#9CA6AF;--gray-7:#848F99;--gray-8:#646F79;--gray-9:#222B37;--gray-10:#151B26;--green-1:#E2FFFA;--green-2:#B0FFF1;--green-3:#58F5D9;--green-4:#25E8C8;--green-5:#00BF9C;--teal-1:#EDF8FF;--teal-2:#95E0FF;--teal-3:#32C1FF;--teal-4:#14AAF5;--teal-5:#008CE3;--purple-1:#F0F0FF;--purple-2:#ABA3FF;--purple-3:#9287FF;--purple-4:#796EFF;--purple-5:#635AC7;--gold-1:#FFFEDE;--gold-2:#FFF78F;--gold-3:#FFE01B;--gold-4:#FCBD01;--gold-5:#F2A100;--orange-1:#F9DC00;--orange-2:#FFBA00;--orange-3:#FF7F00;--coral-1:#FFEDEF;--coral-2:#FF9CA5;--coral-3:#FF7381;--coral-4:#FF5263;--coral-5:#ED4758;--shadow-color:rgb(36,50,66);--shadow-10:0 3px 5px 0 rgba(36,50,66, .2);--shadow-20:0 11px 12px 0 rgba(36,50,66, .12);--shadow-30:0 20px 30px 0 rgba(36,50,66, .14);--shadow-40:0 50px 60px 0 rgba(36,50,66, .15);--spacing-0:0;--spacing-1half:8px;--spacing-1:16px;--spacing-1plus:24px;--spacing-2:32px;--spacing-3:48px;--spacing-4:64px;--spacing-5:80px;--spacing-6:96px;--spacing-7:112px;--spacing-8:128px;--spacing-9:144px;--spacing-10:160px;--zIndex-1:100;--zIndex-2:200;--zIndex-3:300;--zIndex-4:400;--zIndex-5:500;--zIndex-6:600;--zIndex-7:700;--zIndex-8:800;--zIndex-9:900;--zIndex-10:1000;--fontFamily-base:"gordita","Helvetica Neue","Helvetica",sans-serif;--fontFamily-print:"Georgia","Times New Roman","Times",serif;--fontFamily-mono:"Consolas",monospace;--fontSize-base:16px;--fontSize-larger:3.2rem;--fontSize-large:2.2rem;--fontSize-medium:2.0rem;--fontSize-regular:1.6rem;--fontSize-small:1.4rem;--fontSize-smaller:1.2rem;--fontSize-xl:82;--fontSize-h1:56;--fontSize-h2:56;--fontSize-h3:45;--fontSize-h4:31;--fontSize-h5:22;--fontSize-h6:16;--fontWeight-thin:300;--fontWeight-light:300;--fontWeight-normal:normal;--fontWeight-medium:400;--fontWeight-semibold:500;--fontWeight-bold:500;--media-xsmall:480;--media-small:768;--media-medium:960;--media-large:1120;--media-xlarge:1280;--media-xxlarge:1440;--media-xxxlarge:1920;--media-xsmall-min:cacl(var(--media-xsmall)/var(--fontSize-base));--media-small-min:cacl(var(--media-small)/var(--fontSize-base));--media-medium-min:cacl(var(--media-medium)/var(--fontSize-base));--media-large-min:cacl(var(--media-large)/var(--fontSize-base));--media-xlarge-min:cacl(var(--media-xlarge)/var(--fontSize-base));--media-xxlarge-min:cacl(var(--media-xxlarge)/var(--fontSize-base));--media-xxxlarge-min:cacl(var(--media-xxxlarge)/var(--fontSize-base));--media-xsmall-max:cacl((var(--media-small) - 1)/var(--fontSize-base));--media-small-max:cacl((var(--media-medium) - 1)/var(--fontSize-base));--media-medium-max:cacl((var(--media-large) - 1)/var(--fontSize-base));--media-large-max:cacl((var(--media-xlarge) - 1)/var(--fontSize-base));--media-xlarge-max:cacl((var(--media-xxlarge) - 1)/var(--fontSize-base));--transition-duration-short:75ms;--transition-duration:150ms;--transition-duration-med:225ms;--transition-duration-long:300ms;--transition-duration-xlong:450ms;--grid-columns:12;--grid-gutter-width:32px;--border-radius:3px;}'
                },
                R = function() {
                    return Object(v.c)(v.a, {
                        styles: L
                    })
                },
                F = n("rOX3"),
                I = n("TSYQ"),
                M = n.n(I),
                G = n("nlhN"),
                D = n("dVpt"),
                z = n("DZdY"),
                B = n("DYRV"),
                U = n("tBhh"),
                q = n("a6Fb"),
                W = Object(z.a)("div", {
                    target: "e16yc2bd5"
                })("position:fixed;top:50%;left:50%;width:calc(100% - ", U.a.SPACING_24, ");max-width:900px;max-height:calc(100vh - ", U.a.SPACING_128, ");overflow-y:scroll;overflow-x:hidden;transform:translate(-50%, -50%);background:white;padding:", U.a.SPACING_24, ";z-index:500;border:1px solid black;"),
                H = Object(z.a)("table", {
                    target: "e16yc2bd4"
                })("padding:", U.a.SPACING_24, ";background:", B.a.GRAY_1, ";margin:0;width:100%;text-align:left;"),
                V = Object(z.a)("tr", {
                    target: "e16yc2bd3"
                })("border-bottom:2px solid ", B.a.GRAY_3, ";"),
                Y = Object(z.a)("td", {
                    target: "e16yc2bd2"
                })("padding:", U.a.SPACING_8, ";vertical-align:middle;"),
                K = Object(z.a)("span", {
                    target: "e16yc2bd1"
                })(Object(q.a)("p-small"), ";display:inline-block;"),
                Q = Object(z.a)("h2", {
                    target: "e16yc2bd0"
                })(Object(q.a)("heading-5"), ";margin-bottom:", U.a.SPACING_16, ";"),
                Z = n("LVtp");
            o.a.createElement;
            var X = {
                    name: "a1rgbw",
                    styles: "position:absolute;top:10px;right:10px"
                },
                J = {
                    name: "8b5ub8",
                    styles: "display:inline-block;margin-bottom:12px"
                },
                ee = function() {
                    var e = Object(a.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = Object(a.useContext)(G.a).featureFlagState;
                    return Object(a.useEffect)((function() {
                        window && (window.__enable_feature_flag_panel = function() {
                            return n(!0), "Activated Feature Flag Panel"
                        })
                    }), []), t && r ? Object(v.c)(W, {
                        "data-cy-name": "feature-flag-panel"
                    }, Object(v.c)(Q, null, "Feature Flags"), Object(v.c)(K, {
                        css: J
                    }, "Enabling any feature flags here will ", Object(v.c)("em", null, "only"), " affect your current session. It will NOT affect production, or any other user. Some flags are only applied on the server, so enabling them will not affect your current session."), Object(v.c)(H, null, Object(v.c)("thead", null, Object(v.c)("tr", null, Object(v.c)(Y, null, Object(v.c)(K, null, "Enabled")), Object(v.c)(Y, null, Object(v.c)(K, null, "Flag Name")), Object(v.c)(Y, null, Object(v.c)(K, null, "Description")))), Object(v.c)("tbody", null, Object.keys(r).map((function(e) {
                        return Object(v.c)(te, Object(d.a)({
                            key: e
                        }, r[e]))
                    })))), Object(v.c)(Z.a, {
                        "data-cy-name": "feature-flag-panel-close",
                        text: "close feature panel",
                        onClick: function() {
                            return n(!1)
                        },
                        size: "small",
                        css: X
                    })) : null
                },
                te = function(e) {
                    var t = e.name,
                        n = e.id,
                        r = e.description,
                        a = Object(D.a)(n),
                        o = a.enabled,
                        i = a.setLocally;
                    return Object(v.c)(V, null, Object(v.c)(Y, null, Object(v.c)("input", {
                        type: "checkbox",
                        name: n,
                        checked: o,
                        onChange: function() {
                            return i(!o)
                        }
                    })), Object(v.c)(Y, null, Object(v.c)(K, null, t)), Object(v.c)(Y, null, Object(v.c)(K, null, r)))
                };
            o.a.createElement;

            function ne(e) {
                var t = e.children,
                    n = (Object(r.a)(e, ["children"]), Object(a.useContext)(s.a)),
                    o = n.pre_global_page_specific_javascript,
                    i = n.page_specific_javascript,
                    d = n.livechat,
                    m = n.page_background_notrans,
                    h = n.body_class,
                    g = Object(T.b)(),
                    b = g.performance,
                    y = g.targeting,
                    _ = Object(F.a)("pricingPageReskin").experiment,
                    j = (null === _ || void 0 === _ ? void 0 : _.variant) > 0,
                    w = "pricing-page" === m,
                    O = Object(F.a)("homepageScrollability").experiment,
                    x = "new-homepage" === h;
                return Object(a.useEffect)((function() {
                    window.dataLayer.push({
                        event: "optimize.activate-default-mounted"
                    })
                }), []), Object(v.c)("div", {
                    className: M()({
                        "-reskin--a": w && j,
                        "exp-homepage-scroll": x && (null === O || void 0 === O ? void 0 : O.variant) > 0,
                        "-variant-two": x && 2 === (null === O || void 0 === O ? void 0 : O.variant)
                    })
                }, Object(v.c)(u.a, null), Object(v.c)(c.a, null, Object(v.c)("link", {
                    rel: "preconnect",
                    href: "https://api.ipify.org"
                }), Object(v.c)("link", {
                    rel: "preconnect",
                    href: "https://notify.bugsnag.com"
                }), Object(v.c)("link", {
                    rel: "preconnect",
                    href: "https://sessions.bugsnag.com"
                }), Object(v.c)("link", {
                    rel: "preconnect",
                    href: "http://distillery.wistia.com"
                }), Object(v.c)("link", {
                    rel: "preconnect",
                    href: "http://pipedream.wistia.com"
                }), Object(v.c)("link", {
                    rel: "preconnect",
                    href: "http://embed.wistia.com"
                }), Object(v.c)("link", {
                    rel: "preconnect",
                    href: "http://fast.wistia.com"
                }), Object(v.c)("link", {
                    rel: "preconnect",
                    href: "http://ad.doubleclick.net"
                }), Object(v.c)("script", {
                    src: "/assets/dist/js/lib/bugsnag-2.js",
                    "data-apikey": "0f70753630ea334db53f30c60b7bd95d",
                    key: "bugsnag-2.js"
                }), Object(v.c)(f.a, null), o && Object(v.c)("script", {
                    src: Object(l.a)("js/page-specific/".concat(o, ".js"))
                }), Object(v.c)("script", {
                    src: Object(l.a)("js/global.js"),
                    key: "global"
                }), Object(v.c)("script", {
                    src: Object(l.a)("js/first-party-apis/login.js"),
                    defer: !0
                }), Object(v.c)("script", {
                    src: Object(l.a)("js/first-party-apis/signup.js"),
                    defer: !0
                }), Object(v.c)("script", {
                    src: Object(l.a)("js/page-specific/marketing-reskin.js")
                }), i && Object(v.c)("script", {
                    src: Object(l.a)("js/page-specific/".concat(i, ".js"))
                }), Object(v.c)("link", {
                    rel: "preload",
                    as: "style",
                    href: "/assets/dist/css/reskin.css"
                }), Object(v.c)("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "/assets/dist/css/reskin.css"
                }), Object(v.c)("script", {
                    src: "https://platform.twitter.com/oct.js",
                    async: !0,
                    id: "twttr-js"
                }), Object(v.c)("style", null, ".async-hide {opacity: 0 !important}")), Object(v.c)(R, null), d && b && y && Object(v.c)(P.a, {
                    deferTime: 500
                }, Object(v.c)("script", {
                    src: Object(l.a)("js/page-specific/drift.js"),
                    async: !0
                })), Object(v.c)(p.a, {
                    fonts: [{
                        url: "https://fonts.luna1.co/gordita/hinted/hinted-Gordita-Regular",
                        formats: ["woff2"]
                    }, {
                        url: "https://fonts.luna1.co/gordita/hinted/hinted-Gordita-Light",
                        formats: ["woff2"]
                    }, {
                        url: "https://fonts.luna1.co/gordita/hinted/hinted-Gordita-Medium",
                        formats: ["woff2"]
                    }, {
                        url: "https://fonts.luna1.co/icons/asanaIcons",
                        formats: ["woff"]
                    }]
                }), t, Object(v.c)(A, null), Object(v.c)(N.a, null), Object(v.c)(ee, null))
            }
        },
        fmRc: function(e, t, n) {
            var r = n("Xi7e"),
                a = n("77Zs"),
                o = n("L8xA"),
                i = n("gCq4"),
                c = n("VaNO"),
                s = n("0Cz8");

            function l(e) {
                var t = this.__data__ = new r(e);
                this.size = t.size
            }
            l.prototype.clear = a, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = c, l.prototype.set = s, e.exports = l
        },
        ftKO: function(e, t) {
            e.exports = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            }
        },
        "g/15": function(e, t, n) {
            "use strict";
            var r = n("vJKn"),
                a = n("qVT1");
            t.__esModule = !0, t.execOnce = function(e) {
                var t, n = !1;
                return function() {
                    return n || (n = !0, t = e.apply(void 0, arguments)), t
                }
            }, t.getLocationOrigin = i, t.getURL = function() {
                var e = window.location.href,
                    t = i();
                return e.substring(t.length)
            }, t.getDisplayName = c, t.isResSent = s, t.loadGetInitialProps = l, t.formatWithValidation = function(e) {
                0;
                return (0, o.formatUrl)(e)
            }, t.ST = t.SP = t.urlObjectKeys = void 0;
            var o = n("6D7l");

            function i() {
                var e = window.location,
                    t = e.protocol,
                    n = e.hostname,
                    r = e.port;
                return "".concat(t, "//").concat(n).concat(r ? ":" + r : "")
            }

            function c(e) {
                return "string" === typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function s(e) {
                return e.finished || e.headersSent
            }

            function l(e, t) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = a(r.mark((function e(t, n) {
                    var a, o, i;
                    return r.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                e.next = 4;
                                break;
                            case 4:
                                if (a = n.res || n.ctx && n.ctx.res, t.getInitialProps) {
                                    e.next = 12;
                                    break
                                }
                                if (!n.ctx || !n.Component) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 9, l(n.Component, n.ctx);
                            case 9:
                                return e.t0 = e.sent, e.abrupt("return", {
                                    pageProps: e.t0
                                });
                            case 11:
                                return e.abrupt("return", {});
                            case 12:
                                return e.next = 14, t.getInitialProps(n);
                            case 14:
                                if (o = e.sent, !a || !s(a)) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return", o);
                            case 17:
                                if (o) {
                                    e.next = 20;
                                    break
                                }
                                throw i = '"'.concat(c(t), '.getInitialProps()" should resolve to an object. But found "').concat(o, '" instead.'), new Error(i);
                            case 20:
                                return e.abrupt("return", o);
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            t.urlObjectKeys = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
            var p = "undefined" !== typeof performance;
            t.SP = p;
            var f = p && "function" === typeof performance.mark && "function" === typeof performance.measure;
            t.ST = f
        },
        g4pe: function(e, t, n) {
            e.exports = n("8Kt/")
        },
        gCq4: function(e, t) {
            e.exports = function(e) {
                return this.__data__.get(e)
            }
        },
        gFfm: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                return e
            }
        },
        gNn9: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("cpVT"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("V0FR"),
                c = n("AeFk");
            o.a.createElement;
            t.default = function(e) {
                return Object(c.c)("div", Object(r.a)({
                    className: "row textStack-centered"
                }, "className", e.className), Object(c.c)("div", {
                    className: "col-xsmall-12 col-small-10 col-small-offset-1 col-medium-8 col-medium-offset-2 -ta-center"
                }, Object(c.c)(i.default, e)))
            }
        },
        gRFL: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                var t = new WeakMap;
                return function(n) {
                    if (t.has(n)) return t.get(n);
                    var r = e(n);
                    return t.set(n, r), r
                }
            }
        },
        gguc: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.getRouteMatcher = function(e) {
                var t = e.re,
                    n = e.groups;
                return function(e) {
                    var r = t.exec(e);
                    if (!r) return !1;
                    var a = function(e) {
                            try {
                                return decodeURIComponent(e)
                            } catch (n) {
                                var t = new Error("failed to decode param");
                                throw t.code = "DECODE_FAILED", t
                            }
                        },
                        o = {};
                    return Object.keys(n).forEach((function(e) {
                        var t = n[e],
                            i = r[t.pos];
                        void 0 !== i && (o[e] = ~i.indexOf("/") ? i.split("/").map((function(e) {
                            return a(e)
                        })) : t.repeat ? [a(i)] : a(i))
                    })), o
                }
            }
        },
        gz5L: function(e, t, n) {
            var r = n("QqLw"),
                a = n("ExA7");
            e.exports = function(e) {
                return a(e) && "[object WeakMap]" == r(e)
            }
        },
        h2k7: function(e, t, n) {
            (function(t) {
                var r = n("tpqs"),
                    a = n("20a2").useRouter,
                    o = n("sJyK"),
                    i = o.isPageLanguageDefault,
                    c = o.DEFAULT_LANGUAGE,
                    s = o.LANGUAGE_CODES,
                    l = n("//LF"),
                    u = l.stripLeadingSlash,
                    p = l.stripTrailingSlash,
                    f = {
                        development: "https://local.asana.com",
                        staging: "https://staging.luna3.co",
                        production: "https://asana.com"
                    };

                function d() {
                    return f[t.env.NEXT_PUBLIC_ENV] || f.production
                }
                e.exports = {
                    englishPath: function(e) {
                        var t = u(e).split("/");
                        return i(e) || t.splice(0, 1), "/" + t.join("/")
                    },
                    cleanPath: function(e) {
                        var t = e.split("?")[0].split("#")[0];
                        return p(t)
                    },
                    removeTrailingHashFromPath: function(e) {
                        var t = e.split("#")[0];
                        return p(t)
                    },
                    useCurrentUrl: function() {
                        var e = a();
                        return d() + e.asPath
                    },
                    getCurrentDomain: d,
                    getAllUrlParams: function() {
                        var e = {},
                            t = a().asPath.split("?"),
                            n = t.length > 1 ? t[1].split("&") : [];
                        if (1 === n.length && "" === n[0]) return "";
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r].split("=");
                            if ("undefined" === typeof e[o[0]]) e[o[0]] = decodeURIComponent(o[1]);
                            else if ("string" === typeof e[o[0]]) {
                                var i = [e[o[0]], decodeURIComponent(o[1])];
                                e[o[0]] = i
                            } else e[o[0]].push(decodeURIComponent(o[1]))
                        }
                        return e
                    },
                    prependLanguagePath: function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                defaultLanguage: c
                            },
                            o = new RegExp("(^\\/?(".concat(s.join("|"), ")\\/.+)")),
                            i = a.defaultLanguage || c;
                        return e = o.test(n) || t === i || !/(^[^:]*$)/.test(n) || /(^(#).+)/.test(n) ? n : r.join(t, n), "/" + u(e)
                    },
                    domains: f,
                    isTemplatePath: function(e) {
                        var t = u(e).split("/");
                        return "templates" === t[0] || "templates" === t[1]
                    },
                    isTemplateGalleryHomePage: function(e) {
                        return new RegExp("(^/?((".concat(s.join("|"), ")/)?templates$)")).test(e)
                    },
                    isTemplateGallerySegmentPage: function(e) {
                        return new RegExp("(^/?((".concat(s.join("|"), ")/)?templates/for/[a-zA-Z0-9-]+$)")).test(e)
                    },
                    isTemplateGalleryTemplatePage: function(e) {
                        return new RegExp("(^/?((".concat(s.join("|"), ")/)?templates/for/[a-zA-Z0-9-]+/[a-zA-Z0-9-]+$)")).test(e)
                    }
                }
            }).call(this, n("8oxB"))
        },
        hS4m: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.parseRelativeUrl = function(e, t) {
                var n = new URL((0, r.getLocationOrigin)()),
                    o = t ? new URL(t, n) : n,
                    i = new URL(e, o),
                    c = i.pathname,
                    s = i.searchParams,
                    l = i.search,
                    u = i.hash,
                    p = i.href;
                if (i.origin !== n.origin) throw new Error("invariant: invalid relative URL, router received ".concat(e));
                return {
                    pathname: c,
                    query: (0, a.searchParamsToUrlQuery)(s),
                    search: l,
                    hash: u,
                    href: p.slice(n.origin.length)
                }
            };
            var r = n("g/15"),
                a = n("3WeD")
        },
        heNW: function(e, t) {
            e.exports = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
        },
        hgQt: function(e, t, n) {
            var r = n("Juji"),
                a = n("4sDh");
            e.exports = function(e, t) {
                return null != e && a(e, t, r)
            }
        },
        hi6i: function(e, t, n) {
            var r = n("sZCt")("flowRight", n("BJ98"));
            r.placeholder = n("wuTn"), e.exports = r
        },
        hypo: function(e, t, n) {
            var r = n("O0oS");
            e.exports = function(e, t, n) {
                "__proto__" == t && r ? r(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n
            }
        },
        hzw2: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("g4pe"),
                i = n.n(o),
                c = n("20a2"),
                s = n("76ZC"),
                l = n.n(s),
                u = n("xI07"),
                p = n("qZmz"),
                f = n.n(p),
                d = n("usKF"),
                m = n("HJ2n"),
                h = n("h2k7"),
                g = n("AeFk");
            a.a.createElement;

            function b() {
                var e = Object(c.useRouter)(),
                    t = Object(r.useContext)(d.a),
                    n = Object(r.useContext)(m.a),
                    o = "Asana",
                    s = [n.seo_title || n.title, n.title_addon, o].filter((function(e) {
                        return !!e
                    })).join(" \u2022 "),
                    u = l()(n.description || t.global_site_description || ""),
                    p = "https://asana.com".concat(e.asPath),
                    b = n.share_url || p,
                    y = n.share_image || t.global_site_share_image,
                    _ = e.asPath.split("/").slice(1);
                return Object(g.c)(i.a, null, Object(g.c)("meta", {
                    charSet: "utf-8"
                }), Object(g.c)("title", null, l()(s)), Object(g.c)("meta", {
                    httpEquiv: "X-UA-Compatible",
                    content: "IE=edge,chrome=1"
                }), (n.norobots || n._is_hidden) && Object(g.c)("meta", {
                    name: "ROBOTS",
                    content: "NOINDEX,NOFOLLOW"
                }), Object(g.c)("meta", {
                    itemProp: "name",
                    content: s
                }), Object(g.c)("meta", {
                    property: "og:title",
                    content: s
                }), Object(g.c)("meta", {
                    name: "twitter:title",
                    content: s
                }), Object(g.c)("link", {
                    rel: "canonical",
                    href: Object(h.cleanPath)(n.canonical || p)
                }), Object(g.c)("link", {
                    itemProp: "url",
                    href: b
                }), Object(g.c)("meta", {
                    property: "og:url",
                    content: b
                }), Object(g.c)("meta", {
                    name: "twitter:url",
                    content: b
                }), Object(g.c)("meta", {
                    name: "description",
                    content: u
                }), Object(g.c)("meta", {
                    itemProp: "description",
                    content: u
                }), Object(g.c)("meta", {
                    name: "twitter:description",
                    content: u
                }), Object(g.c)("meta", {
                    property: "og:description",
                    content: u
                }), Object(g.c)("meta", {
                    property: "author",
                    content: "Asana"
                }), Object(g.c)("meta", {
                    property: "og:site_name",
                    content: o
                }), Object(g.c)("meta", {
                    property: "fb:app_id",
                    content: t.global_site_fb_app_id
                }), Object(g.c)("meta", {
                    name: "twitter:site",
                    content: "@asana"
                }), Object(g.c)("meta", {
                    name: "twitter:creator",
                    content: "@asana"
                }), Object(g.c)("link", {
                    rel: "author",
                    href: t.global_site_gplus_author
                }), Object(g.c)("link", {
                    rel: "publisher",
                    href: t.global_site_gplus_author
                }), Object(g.c)("meta", {
                    name: "theme-color",
                    content: "#2e3c54"
                }), Object(g.c)("meta", {
                    name: "msapplication-navbutton-color",
                    content: "#2e3c54"
                }), Object(g.c)("meta", {
                    itemProp: "image",
                    content: y
                }), Object(g.c)("meta", {
                    property: "og:image",
                    content: y
                }), Object(g.c)("meta", {
                    name: "twitter:image",
                    content: y
                }), Object(g.c)("meta", {
                    name: "twitter:image:src",
                    content: y
                }), Object(g.c)("link", {
                    itemProp: "thumbnailUrl",
                    href: y
                }), n.breadcrumbs && Object(g.c)(v, {
                    data: n.breadcrumbs
                }), n.share_app ? Object(g.c)(a.a.Fragment, null, Object(g.c)("meta", {
                    name: "twitter:card",
                    content: "app"
                }), Object(g.c)("meta", {
                    name: "twitter:app:name:iphone",
                    content: l()(t.global_meta_desc)
                }), Object(g.c)("meta", {
                    name: "twitter:app:id:iphone",
                    content: "489969512"
                }), Object(g.c)("meta", {
                    name: "twitter:app:name:ipad",
                    content: l()(t.global_meta_desc)
                }), Object(g.c)("meta", {
                    name: "twitter:app:id:ipad",
                    content: "489969512"
                }), Object(g.c)("meta", {
                    name: "twitter:app:name:googleplay",
                    content: l()(t.global_meta_title)
                }), Object(g.c)("meta", {
                    name: "twitter:app:id:googleplay",
                    content: "com.asana.app"
                }), Object(g.c)("meta", {
                    property: "al:ios:app_store_id",
                    content: "489969512"
                }), Object(g.c)("meta", {
                    property: "al:ios:app_name",
                    content: l()(t.global_meta_desc)
                }), Object(g.c)("meta", {
                    property: "al:android:app_name",
                    content: l()(t.global_meta_title)
                }), Object(g.c)("meta", {
                    property: "al:android:package",
                    content: "com.asana.app"
                }), Object(g.c)("meta", {
                    itemProp: "screenshot",
                    content: "http://a5.mzstatic.com/us/r30/Purple3/v4/f9/19/5e/f9195e1d-504e-9777-514d-8de51ec87e15/screen568x568.jpeg"
                }), Object(g.c)("meta", {
                    itemProp: "screenshot",
                    content: "http://a3.mzstatic.com/us/r30/Purple4/v4/52/93/49/529349dc-61de-6232-ca64-5d543fa8b8d4/screen568x568.jpeg"
                }), Object(g.c)("meta", {
                    itemProp: "downloadUrl",
                    content: "https://play.google.com/store/apps/details?id=com.asana.app"
                }), Object(g.c)("meta", {
                    itemProp: "applicationCategory",
                    content: "Task Management"
                }), Object(g.c)("meta", {
                    itemProp: "applicationCategory",
                    content: "Productivity"
                }), Object(g.c)("meta", {
                    itemProp: "operatingSystem",
                    content: "Android 2.2+, iOS6+"
                }), Object(g.c)("meta", {
                    itemProp: "device",
                    content: "Android, iOS"
                })) : n.share_video ? Object(g.c)(a.a.Fragment, null, Object(g.c)("meta", {
                    property: "og:type",
                    content: "video.movie"
                }), Object(g.c)("meta", {
                    name: "twitter:card",
                    content: "player"
                }), Object(g.c)("meta", {
                    name: "twitter:player",
                    content: n.player
                }), Object(g.c)("link", {
                    itemProp: "embedURL",
                    href: n.player
                }), Object(g.c)("meta", {
                    property: "og:video",
                    content: "http:".concat(n.share_video)
                }), Object(g.c)("meta", {
                    property: "og:video:secure_url",
                    content: "https:".concat(n.share_video)
                }), Object(g.c)("meta", {
                    property: "og:video:type",
                    content: "application/x-shockwave-flash"
                }), Object(g.c)("meta", {
                    itemProp: "playerType",
                    content: "Flash"
                }), Object(g.c)("meta", {
                    property: "og:video:width",
                    content: "640"
                }), Object(g.c)("meta", {
                    property: "og:video:height",
                    content: "360"
                }), Object(g.c)("meta", {
                    itemProp: "width",
                    content: "640"
                }), Object(g.c)("meta", {
                    itemProp: "height",
                    content: "360"
                }), Object(g.c)("meta", {
                    name: "twitter:player:width",
                    content: "435"
                }), Object(g.c)("meta", {
                    name: "twitter:player:height",
                    content: "245"
                })) : Object(g.c)(a.a.Fragment, null, Object(g.c)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), Object(g.c)("meta", {
                    property: "og:type",
                    content: "article"
                })), ("guide" === _[0] || "apps" === _[0] || "internal" === _[0]) && Object(g.c)(a.a.Fragment, null, Object(g.c)("meta", {
                    className: "swiftype",
                    name: "summary",
                    "data-type": "text",
                    content: l()(u)
                }), Object(g.c)("meta", {
                    className: "swiftype",
                    name: "content_type",
                    "data-type": "string",
                    content: n.share_video ? "video" : "article"
                })), "asanapedia" === _[0] ? f.a.dev_environment_favicons_notrans.map((function(e, t) {
                    return Object(g.c)("link", {
                        rel: e.rel,
                        sizes: e.sizes,
                        type: "image/png",
                        href: e.href,
                        key: t
                    })
                })) : Object(g.c)(a.a.Fragment, null, f.a.prod_environment_favicons_notrans.map((function(e, t) {
                    return Object(g.c)("link", {
                        rel: e.rel,
                        sizes: e.sizes,
                        type: "image/png",
                        href: e.href,
                        key: t
                    })
                })), Object(g.c)("link", {
                    rel: "shortcut icon",
                    href: f.a.shortcut_icon_notrans
                })), "apps" === _[0] && (_[1] ? Object(g.c)(a.a.Fragment, null, Object(g.c)("meta", {
                    className: "swiftype",
                    name: "category",
                    "data-type": "string",
                    content: "All Apps"
                }), n.categories && Object(g.c)("meta", {
                    className: "swiftype",
                    name: "parent",
                    "data-type": "string",
                    content: n.categories.join(", ")
                })) : Object(g.c)(a.a.Fragment, null, Object(g.c)("meta", {
                    className: "swiftype",
                    name: "category",
                    "data-type": "string",
                    content: n.title
                }), Object(g.c)("meta", {
                    className: "swiftype",
                    name: "parent",
                    "data-type": "string",
                    content: "All Apps"
                }))), Object(g.c)("meta", {
                    name: "apple-itunes-app",
                    content: "app-id=489969512"
                }), Object(g.c)("meta", {
                    name: "twitter:app:name:iphone",
                    content: l()(t.global_meta_desc)
                }), Object(g.c)("meta", {
                    name: "twitter:app:id:iphone",
                    content: "489969512"
                }), Object(g.c)("meta", {
                    name: "twitter:app:name:ipad",
                    content: l()(t.global_meta_desc)
                }), Object(g.c)("meta", {
                    name: "twitter:app:id:ipad",
                    content: "489969512"
                }), Object(g.c)("meta", {
                    name: "twitter:app:name:googleplay",
                    content: t.global_meta_title
                }), Object(g.c)("meta", {
                    name: "twitter:app:id:googleplay",
                    content: "com.asana.app"
                }), Object(g.c)("meta", {
                    name: "google-site-verification",
                    content: "DxotoqlMTfSRrxiKGMd-XA44xVkuFK-hBE6Fb1s_sos"
                }), Object(g.c)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }), v({
                    data: {
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        url: "https://asana.com",
                        logo: "https://luna1.co/232620.png",
                        sameAs: ["http://facebook.com/asana", "http://www.twitter.com/asana", "http://instagram.com/teamasana", "https://www.linkedin.com/company/asana", "https://plus.google.com/+asana/", "https://www.youtube.com/user/AsanaTeam"]
                    }
                }), v({
                    data: {
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        name: o,
                        url: "https://asana.com",
                        potentialAction: {
                            "@type": "SearchAction",
                            target: "https://asana.com/guide/search#stq={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    }
                }))
            }

            function v(e) {
                var t = e.data;
                return Object(g.c)("script", Object(u.jsonLdScriptProps)(t))
            }
        },
        i2R6: function(e, t) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            e.exports = function(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
        },
        iGAk: function(e, t) {
            t.aliasToReal = {
                each: "forEach",
                eachRight: "forEachRight",
                entries: "toPairs",
                entriesIn: "toPairsIn",
                extend: "assignIn",
                extendAll: "assignInAll",
                extendAllWith: "assignInAllWith",
                extendWith: "assignInWith",
                first: "head",
                conforms: "conformsTo",
                matches: "isMatch",
                property: "get",
                __: "placeholder",
                F: "stubFalse",
                T: "stubTrue",
                all: "every",
                allPass: "overEvery",
                always: "constant",
                any: "some",
                anyPass: "overSome",
                apply: "spread",
                assoc: "set",
                assocPath: "set",
                complement: "negate",
                compose: "flowRight",
                contains: "includes",
                dissoc: "unset",
                dissocPath: "unset",
                dropLast: "dropRight",
                dropLastWhile: "dropRightWhile",
                equals: "isEqual",
                identical: "eq",
                indexBy: "keyBy",
                init: "initial",
                invertObj: "invert",
                juxt: "over",
                omitAll: "omit",
                nAry: "ary",
                path: "get",
                pathEq: "matchesProperty",
                pathOr: "getOr",
                paths: "at",
                pickAll: "pick",
                pipe: "flow",
                pluck: "map",
                prop: "get",
                propEq: "matchesProperty",
                propOr: "getOr",
                props: "at",
                symmetricDifference: "xor",
                symmetricDifferenceBy: "xorBy",
                symmetricDifferenceWith: "xorWith",
                takeLast: "takeRight",
                takeLastWhile: "takeRightWhile",
                unapply: "rest",
                unnest: "flatten",
                useWith: "overArgs",
                where: "conformsTo",
                whereEq: "isMatch",
                zipObj: "zipObject"
            }, t.aryMethod = {
                1: ["assignAll", "assignInAll", "attempt", "castArray", "ceil", "create", "curry", "curryRight", "defaultsAll", "defaultsDeepAll", "floor", "flow", "flowRight", "fromPairs", "invert", "iteratee", "memoize", "method", "mergeAll", "methodOf", "mixin", "nthArg", "over", "overEvery", "overSome", "rest", "reverse", "round", "runInContext", "spread", "template", "trim", "trimEnd", "trimStart", "uniqueId", "words", "zipAll"],
                2: ["add", "after", "ary", "assign", "assignAllWith", "assignIn", "assignInAllWith", "at", "before", "bind", "bindAll", "bindKey", "chunk", "cloneDeepWith", "cloneWith", "concat", "conformsTo", "countBy", "curryN", "curryRightN", "debounce", "defaults", "defaultsDeep", "defaultTo", "delay", "difference", "divide", "drop", "dropRight", "dropRightWhile", "dropWhile", "endsWith", "eq", "every", "filter", "find", "findIndex", "findKey", "findLast", "findLastIndex", "findLastKey", "flatMap", "flatMapDeep", "flattenDepth", "forEach", "forEachRight", "forIn", "forInRight", "forOwn", "forOwnRight", "get", "groupBy", "gt", "gte", "has", "hasIn", "includes", "indexOf", "intersection", "invertBy", "invoke", "invokeMap", "isEqual", "isMatch", "join", "keyBy", "lastIndexOf", "lt", "lte", "map", "mapKeys", "mapValues", "matchesProperty", "maxBy", "meanBy", "merge", "mergeAllWith", "minBy", "multiply", "nth", "omit", "omitBy", "overArgs", "pad", "padEnd", "padStart", "parseInt", "partial", "partialRight", "partition", "pick", "pickBy", "propertyOf", "pull", "pullAll", "pullAt", "random", "range", "rangeRight", "rearg", "reject", "remove", "repeat", "restFrom", "result", "sampleSize", "some", "sortBy", "sortedIndex", "sortedIndexOf", "sortedLastIndex", "sortedLastIndexOf", "sortedUniqBy", "split", "spreadFrom", "startsWith", "subtract", "sumBy", "take", "takeRight", "takeRightWhile", "takeWhile", "tap", "throttle", "thru", "times", "trimChars", "trimCharsEnd", "trimCharsStart", "truncate", "union", "uniqBy", "uniqWith", "unset", "unzipWith", "without", "wrap", "xor", "zip", "zipObject", "zipObjectDeep"],
                3: ["assignInWith", "assignWith", "clamp", "differenceBy", "differenceWith", "findFrom", "findIndexFrom", "findLastFrom", "findLastIndexFrom", "getOr", "includesFrom", "indexOfFrom", "inRange", "intersectionBy", "intersectionWith", "invokeArgs", "invokeArgsMap", "isEqualWith", "isMatchWith", "flatMapDepth", "lastIndexOfFrom", "mergeWith", "orderBy", "padChars", "padCharsEnd", "padCharsStart", "pullAllBy", "pullAllWith", "rangeStep", "rangeStepRight", "reduce", "reduceRight", "replace", "set", "slice", "sortedIndexBy", "sortedLastIndexBy", "transform", "unionBy", "unionWith", "update", "xorBy", "xorWith", "zipWith"],
                4: ["fill", "setWith", "updateWith"]
            }, t.aryRearg = {
                2: [1, 0],
                3: [2, 0, 1],
                4: [3, 2, 0, 1]
            }, t.iterateeAry = {
                dropRightWhile: 1,
                dropWhile: 1,
                every: 1,
                filter: 1,
                find: 1,
                findFrom: 1,
                findIndex: 1,
                findIndexFrom: 1,
                findKey: 1,
                findLast: 1,
                findLastFrom: 1,
                findLastIndex: 1,
                findLastIndexFrom: 1,
                findLastKey: 1,
                flatMap: 1,
                flatMapDeep: 1,
                flatMapDepth: 1,
                forEach: 1,
                forEachRight: 1,
                forIn: 1,
                forInRight: 1,
                forOwn: 1,
                forOwnRight: 1,
                map: 1,
                mapKeys: 1,
                mapValues: 1,
                partition: 1,
                reduce: 2,
                reduceRight: 2,
                reject: 1,
                remove: 1,
                some: 1,
                takeRightWhile: 1,
                takeWhile: 1,
                times: 1,
                transform: 2
            }, t.iterateeRearg = {
                mapKeys: [1],
                reduceRight: [1, 0]
            }, t.methodRearg = {
                assignInAllWith: [1, 0],
                assignInWith: [1, 2, 0],
                assignAllWith: [1, 0],
                assignWith: [1, 2, 0],
                differenceBy: [1, 2, 0],
                differenceWith: [1, 2, 0],
                getOr: [2, 1, 0],
                intersectionBy: [1, 2, 0],
                intersectionWith: [1, 2, 0],
                isEqualWith: [1, 2, 0],
                isMatchWith: [2, 1, 0],
                mergeAllWith: [1, 0],
                mergeWith: [1, 2, 0],
                padChars: [2, 1, 0],
                padCharsEnd: [2, 1, 0],
                padCharsStart: [2, 1, 0],
                pullAllBy: [2, 1, 0],
                pullAllWith: [2, 1, 0],
                rangeStep: [1, 2, 0],
                rangeStepRight: [1, 2, 0],
                setWith: [3, 1, 2, 0],
                sortedIndexBy: [2, 1, 0],
                sortedLastIndexBy: [2, 1, 0],
                unionBy: [1, 2, 0],
                unionWith: [1, 2, 0],
                updateWith: [3, 1, 2, 0],
                xorBy: [1, 2, 0],
                xorWith: [1, 2, 0],
                zipWith: [1, 2, 0]
            }, t.methodSpread = {
                assignAll: {
                    start: 0
                },
                assignAllWith: {
                    start: 0
                },
                assignInAll: {
                    start: 0
                },
                assignInAllWith: {
                    start: 0
                },
                defaultsAll: {
                    start: 0
                },
                defaultsDeepAll: {
                    start: 0
                },
                invokeArgs: {
                    start: 2
                },
                invokeArgsMap: {
                    start: 2
                },
                mergeAll: {
                    start: 0
                },
                mergeAllWith: {
                    start: 0
                },
                partial: {
                    start: 1
                },
                partialRight: {
                    start: 1
                },
                without: {
                    start: 1
                },
                zipAll: {
                    start: 0
                }
            }, t.mutate = {
                array: {
                    fill: !0,
                    pull: !0,
                    pullAll: !0,
                    pullAllBy: !0,
                    pullAllWith: !0,
                    pullAt: !0,
                    remove: !0,
                    reverse: !0
                },
                object: {
                    assign: !0,
                    assignAll: !0,
                    assignAllWith: !0,
                    assignIn: !0,
                    assignInAll: !0,
                    assignInAllWith: !0,
                    assignInWith: !0,
                    assignWith: !0,
                    defaults: !0,
                    defaultsAll: !0,
                    defaultsDeep: !0,
                    defaultsDeepAll: !0,
                    merge: !0,
                    mergeAll: !0,
                    mergeAllWith: !0,
                    mergeWith: !0
                },
                set: {
                    set: !0,
                    setWith: !0,
                    unset: !0,
                    update: !0,
                    updateWith: !0
                }
            }, t.realToAlias = function() {
                var e = Object.prototype.hasOwnProperty,
                    n = t.aliasToReal,
                    r = {};
                for (var a in n) {
                    var o = n[a];
                    e.call(r, o) ? r[o].push(a) : r[o] = [a]
                }
                return r
            }(), t.remap = {
                assignAll: "assign",
                assignAllWith: "assignWith",
                assignInAll: "assignIn",
                assignInAllWith: "assignInWith",
                curryN: "curry",
                curryRightN: "curryRight",
                defaultsAll: "defaults",
                defaultsDeepAll: "defaultsDeep",
                findFrom: "find",
                findIndexFrom: "findIndex",
                findLastFrom: "findLast",
                findLastIndexFrom: "findLastIndex",
                getOr: "get",
                includesFrom: "includes",
                indexOfFrom: "indexOf",
                invokeArgs: "invoke",
                invokeArgsMap: "invokeMap",
                lastIndexOfFrom: "lastIndexOf",
                mergeAll: "merge",
                mergeAllWith: "mergeWith",
                padChars: "pad",
                padCharsEnd: "padEnd",
                padCharsStart: "padStart",
                propertyOf: "get",
                rangeStep: "range",
                rangeStepRight: "rangeRight",
                restFrom: "rest",
                spreadFrom: "spread",
                trimChars: "trim",
                trimCharsEnd: "trimEnd",
                trimCharsStart: "trimStart",
                zipAll: "zip"
            }, t.skipFixed = {
                castArray: !0,
                flow: !0,
                flowRight: !0,
                iteratee: !0,
                mixin: !0,
                rearg: !0,
                runInContext: !0
            }, t.skipRearg = {
                add: !0,
                assign: !0,
                assignIn: !0,
                bind: !0,
                bindKey: !0,
                concat: !0,
                difference: !0,
                divide: !0,
                eq: !0,
                gt: !0,
                gte: !0,
                isEqual: !0,
                lt: !0,
                lte: !0,
                matchesProperty: !0,
                merge: !0,
                multiply: !0,
                overArgs: !0,
                partial: !0,
                partialRight: !0,
                propertyOf: !0,
                random: !0,
                range: !0,
                rangeRight: !0,
                subtract: !0,
                zip: !0,
                zipObject: !0,
                zipObjectDeep: !0
            }
        },
        ieoY: function(e, t, n) {
            var r = n("EldB"),
                a = n("Kz5y");
            e.exports = function(e, t, n) {
                var o = 1 & t,
                    i = r(e);
                return function t() {
                    var r = this && this !== a && this instanceof t ? i : e;
                    return r.apply(o ? n : this, arguments)
                }
            }
        },
        j4CS: function(e, t) {
            e.exports = function(e) {
                return e.type.displayName || e.type.name
            }
        },
        jQyn: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    var r, a = n("aKAC"),
                        o = n.n(a),
                        i = n("KdsC"),
                        c = n.n(i),
                        s = e.env.NEXT_PUBLIC_ENV || "production",
                        l = "0f70753630ea334db53f30c60b7bd95d";
                    switch (s) {
                        case "production":
                        case "preview":
                        case "staging":
                            r = new o.a(l, s);
                            break;
                        default:
                            r = new c.a(l, s)
                    }
                    t.default = r
                }.call(this, n("8oxB"))
        },
        jXQH: function(e, t, n) {
            var r = n("TO8r"),
                a = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, r(e) + 1).replace(a, "") : e
            }
        },
        "jbM+": function(e, t, n) {
            var r = n("R/W3");
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
            }
        },
        juv8: function(e, t, n) {
            var r = n("MrPd"),
                a = n("hypo");
            e.exports = function(e, t, n, o) {
                var i = !n;
                n || (n = {});
                for (var c = -1, s = t.length; ++c < s;) {
                    var l = t[c],
                        u = o ? o(n[l], e[l], l, n, e) : void 0;
                    void 0 === u && (u = e[l]), i ? a(n, l, u) : r(n, l, u)
                }
                return n
            }
        },
        jwwS: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.LoadableContext = void 0;
            var a = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext(null);
            t.LoadableContext = a
        },
        "k+1r": function(e, t, n) {
            var r = n("QkVE");
            e.exports = function(e) {
                var t = r(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }
        },
        kG2m: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        kUBA: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("g4pe"),
                i = n.n(o),
                c = n("AeFk");
            a.a.createElement;

            function s(e) {
                var t = Object(r.useState)(!1),
                    n = t[0],
                    a = t[1],
                    o = e.children,
                    s = e.deferTime;
                return Object(r.useEffect)((function() {
                    setTimeout((function() {
                        return a(!0)
                    }), s || 1e3)
                }), []), Object(c.c)(i.a, null, n ? o : null)
            }
        },
        kekF: function(e, t) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        kl55: function(e, t) {
            e.exports = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
        },
        l8qu: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("q1tI");

            function a() {
                var e = Object(r.useState)(!1),
                    t = e[0],
                    n = e[1];
                return Object(r.useDebugValue)(t), Object(r.useEffect)((function() {
                    n("true" === AsanaStorage.getCookie("is_logged_in"))
                }), []), [t]
            }
        },
        lSCD: function(e, t, n) {
            var r = n("NykK"),
                a = n("GoyQ");
            e.exports = function(e) {
                if (!a(e)) return !1;
                var t = r(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        ljhN: function(e, t) {
            e.exports = function(e, t) {
                return e === t || e !== e && t !== t
            }
        },
        "lm/5": function(e, t, n) {
            var r = n("fmRc"),
                a = n("wF/u");
            e.exports = function(e, t, n, o) {
                var i = n.length,
                    c = i,
                    s = !o;
                if (null == e) return !c;
                for (e = Object(e); i--;) {
                    var l = n[i];
                    if (s && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
                }
                for (; ++i < c;) {
                    var u = (l = n[i])[0],
                        p = e[u],
                        f = l[1];
                    if (s && l[2]) {
                        if (void 0 === p && !(u in e)) return !1
                    } else {
                        var d = new r;
                        if (o) var m = o(p, f, u, e, t, d);
                        if (!(void 0 === m ? a(f, p, 3, o, d) : m)) return !1
                    }
                }
                return !0
            }
        },
        ls82: function(e, t, n) {
            var r = function(e) {
                "use strict";
                var t, n = Object.prototype,
                    r = n.hasOwnProperty,
                    a = "function" === typeof Symbol ? Symbol : {},
                    o = a.iterator || "@@iterator",
                    i = a.asyncIterator || "@@asyncIterator",
                    c = a.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (T) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, r) {
                    var a = t && t.prototype instanceof g ? t : g,
                        o = Object.create(a.prototype),
                        i = new S(r || []);
                    return o._invoke = function(e, t, n) {
                        var r = p;
                        return function(a, o) {
                            if (r === d) throw new Error("Generator is already running");
                            if (r === m) {
                                if ("throw" === a) throw o;
                                return P()
                            }
                            for (n.method = a, n.arg = o;;) {
                                var i = n.delegate;
                                if (i) {
                                    var c = k(i, n);
                                    if (c) {
                                        if (c === h) continue;
                                        return c
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (r === p) throw r = m, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = d;
                                var s = u(e, t, n);
                                if ("normal" === s.type) {
                                    if (r = n.done ? m : f, s.arg === h) continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === s.type && (r = m, n.method = "throw", n.arg = s.arg)
                            }
                        }
                    }(e, n, i), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (T) {
                        return {
                            type: "throw",
                            arg: T
                        }
                    }
                }
                e.wrap = l;
                var p = "suspendedStart",
                    f = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    h = {};

                function g() {}

                function b() {}

                function v() {}
                var y = {};
                y[o] = function() {
                    return this
                };
                var _ = Object.getPrototypeOf,
                    j = _ && _(_(A([])));
                j && j !== n && r.call(j, o) && (y = j);
                var w = v.prototype = g.prototype = Object.create(y);

                function O(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    function n(a, o, i, c) {
                        var s = u(e[a], e, o);
                        if ("throw" !== s.type) {
                            var l = s.arg,
                                p = l.value;
                            return p && "object" === typeof p && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                n("next", e, i, c)
                            }), (function(e) {
                                n("throw", e, i, c)
                            })) : t.resolve(p).then((function(e) {
                                l.value = e, i(l)
                            }), (function(e) {
                                return n("throw", e, i, c)
                            }))
                        }
                        c(s.arg)
                    }
                    var a;
                    this._invoke = function(e, r) {
                        function o() {
                            return new t((function(t, a) {
                                n(e, r, t, a)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                }

                function k(e, n) {
                    var r = e.iterator[n.method];
                    if (r === t) {
                        if (n.delegate = null, "throw" === n.method) {
                            if (e.iterator.return && (n.method = "return", n.arg = t, k(e, n), "throw" === n.method)) return h;
                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var a = u(r, e.iterator, n.arg);
                    if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, h;
                    var o = a.arg;
                    return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, h) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, h)
                }

                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function S(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(E, this), this.reset(!0)
                }

                function A(e) {
                    if (e) {
                        var n = e[o];
                        if (n) return n.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                i = function n() {
                                    for (; ++a < e.length;)
                                        if (r.call(e, a)) return n.value = e[a], n.done = !1, n;
                                    return n.value = t, n.done = !0, n
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: t,
                        done: !0
                    }
                }
                return b.prototype = w.constructor = v, v.constructor = b, b.displayName = s(v, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" === typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, s(e, c, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, O(x.prototype), x.prototype[i] = function() {
                    return this
                }, e.AsyncIterator = x, e.async = function(t, n, r, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new x(l(t, n, r, a), o);
                    return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, O(w), s(w, c, "Generator"), w[o] = function() {
                    return this
                }, w.toString = function() {
                    return "[object Generator]"
                }, e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = A, S.prototype = {
                    constructor: S,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(C), !e)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var n = this;

                        function a(r, a) {
                            return c.type = "throw", c.arg = e, n.next = r, a && (n.method = "next", n.arg = t), !!a
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                c = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    l = r.call(i, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var a = r.arg;
                                    C(n)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, r) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = t), h
                    }
                }, e
            }(e.exports);
            try {
                regeneratorRuntime = r
            } catch (a) {
                Function("r", "regeneratorRuntime = r")(r)
            }
        },
        lwAK: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var a = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = a
        },
        mPvQ: function(e, t, n) {
            var r = n("5fIB"),
                a = n("rlHP"),
                o = n("KckH"),
                i = n("kG2m");
            e.exports = function(e) {
                return r(e) || a(e) || o(e) || i()
            }
        },
        mTTR: function(e, t, n) {
            var r = n("b80T"),
                a = n("QcOe"),
                o = n("MMmD");
            e.exports = function(e) {
                return o(e) ? r(e, !0) : a(e)
            }
        },
        mc0g: function(e, t) {
            e.exports = function(e) {
                return function(t, n, r) {
                    for (var a = -1, o = Object(t), i = r(t), c = i.length; c--;) {
                        var s = i[e ? c : ++a];
                        if (!1 === n(o[s], s, o)) break
                    }
                    return t
                }
            }
        },
        mdPL: function(e, t, n) {
            (function(e) {
                var r = n("WFqU"),
                    a = t && !t.nodeType && t,
                    o = a && "object" == typeof e && e && !e.nodeType && e,
                    i = o && o.exports === a && r.process,
                    c = function() {
                        try {
                            var e = o && o.require && o.require("util").types;
                            return e || i && i.binding && i.binding("util")
                        } catch (t) {}
                    }();
                e.exports = c
            }).call(this, n("LY0y")(e))
        },
        mwIZ: function(e, t, n) {
            var r = n("ZWtO");
            e.exports = function(e, t, n) {
                var a = null == e ? void 0 : r(e, t);
                return void 0 === a ? n : a
            }
        },
        mwSz: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            t.__esModule = !0;
            var a = r(n("CC3I")),
                o = n("vhTo");
            t.default = function(e, t) {
                var n = {};
                return e && "string" === typeof e ? (a.default(e, (function(e, r) {
                    e && r && (n[o.camelCase(e, t)] = r)
                })), n) : n
            }
        },
        mxvI: function(e, t) {
            e.exports = function(e, t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (s) {
                        a = !0, o = s
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }
            }
        },
        nOHt: function(e, t, n) {
            "use strict";
            var r = n("q722");

            function a(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var i = n("7KCV"),
                c = n("AroE");
            t.__esModule = !0, t.useRouter = function() {
                return s.default.useContext(u.RouterContext)
            }, t.makePublicRouterInstance = function(e) {
                var t, n = e,
                    r = {},
                    o = a(d);
                try {
                    for (o.s(); !(t = o.n()).done;) {
                        var i = t.value;
                        "object" !== typeof n[i] ? r[i] = n[i] : r[i] = Object.assign(Array.isArray(n[i]) ? [] : {}, n[i])
                    }
                } catch (c) {
                    o.e(c)
                } finally {
                    o.f()
                }
                return r.events = l.default.events, m.forEach((function(e) {
                    r[e] = function() {
                        return n[e].apply(n, arguments)
                    }
                })), r
            }, t.createRouter = t.withRouter = t.default = void 0;
            var s = c(n("q1tI")),
                l = i(n("elyg"));
            t.Router = l.default, t.NextRouter = l.NextRouter;
            var u = n("qOIg"),
                p = c(n("0Bsm"));
            t.withRouter = p.default;
            var f = {
                    router: null,
                    readyCallbacks: [],
                    ready: function(e) {
                        if (this.router) return e();
                        this.readyCallbacks.push(e)
                    }
                },
                d = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain"],
                m = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];

            function h() {
                if (!f.router) {
                    throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')
                }
                return f.router
            }
            Object.defineProperty(f, "events", {
                get: function() {
                    return l.default.events
                }
            }), d.forEach((function(e) {
                Object.defineProperty(f, e, {
                    get: function() {
                        return h()[e]
                    }
                })
            })), m.forEach((function(e) {
                f[e] = function() {
                    var t = h();
                    return t[e].apply(t, arguments)
                }
            })), ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach((function(e) {
                f.ready((function() {
                    l.default.events.on(e, (function() {
                        var t = "on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1)),
                            n = f;
                        if (n[t]) try {
                            n[t].apply(n, arguments)
                        } catch (r) {
                            console.error("Error when running the Router event: ".concat(t)), console.error("".concat(r.message, "\n").concat(r.stack))
                        }
                    }))
                }))
            }));
            var g = f;
            t.default = g;
            t.createRouter = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return f.router = r(l.default, t), f.readyCallbacks.forEach((function(e) {
                    return e()
                })), f.readyCallbacks = [], f.router
            }
        },
        nYr6: function(e, t) {
            e.exports = {
                Properties: {
                    autoFocus: 4,
                    accept: 0,
                    acceptCharset: 0,
                    accessKey: 0,
                    action: 0,
                    allowFullScreen: 4,
                    allowTransparency: 0,
                    alt: 0,
                    as: 0,
                    async: 4,
                    autoComplete: 0,
                    autoPlay: 4,
                    capture: 4,
                    cellPadding: 0,
                    cellSpacing: 0,
                    charSet: 0,
                    challenge: 0,
                    checked: 5,
                    cite: 0,
                    classID: 0,
                    className: 0,
                    cols: 24,
                    colSpan: 0,
                    content: 0,
                    contentEditable: 0,
                    contextMenu: 0,
                    controls: 4,
                    controlsList: 0,
                    coords: 0,
                    crossOrigin: 0,
                    data: 0,
                    dateTime: 0,
                    default: 4,
                    defer: 4,
                    dir: 0,
                    disabled: 4,
                    download: 32,
                    draggable: 0,
                    encType: 0,
                    form: 0,
                    formAction: 0,
                    formEncType: 0,
                    formMethod: 0,
                    formNoValidate: 4,
                    formTarget: 0,
                    frameBorder: 0,
                    headers: 0,
                    height: 0,
                    hidden: 4,
                    high: 0,
                    href: 0,
                    hrefLang: 0,
                    htmlFor: 0,
                    httpEquiv: 0,
                    icon: 0,
                    id: 0,
                    inputMode: 0,
                    integrity: 0,
                    is: 0,
                    keyParams: 0,
                    keyType: 0,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: 4,
                    low: 0,
                    manifest: 0,
                    marginHeight: 0,
                    marginWidth: 0,
                    max: 0,
                    maxLength: 0,
                    media: 0,
                    mediaGroup: 0,
                    method: 0,
                    min: 0,
                    minLength: 0,
                    multiple: 5,
                    muted: 5,
                    name: 0,
                    nonce: 0,
                    noValidate: 4,
                    open: 4,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: 4,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 0,
                    readOnly: 4,
                    referrerPolicy: 0,
                    rel: 0,
                    required: 4,
                    reversed: 4,
                    role: 0,
                    rows: 24,
                    rowSpan: 8,
                    sandbox: 0,
                    scope: 0,
                    scoped: 4,
                    scrolling: 0,
                    seamless: 4,
                    selected: 5,
                    shape: 0,
                    size: 24,
                    sizes: 0,
                    span: 24,
                    spellCheck: 0,
                    src: 0,
                    srcDoc: 0,
                    srcLang: 0,
                    srcSet: 0,
                    start: 8,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 0,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 0,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    datatype: 0,
                    inlist: 0,
                    prefix: 0,
                    property: 0,
                    resource: 0,
                    typeof: 0,
                    vocab: 0,
                    autoCapitalize: 0,
                    autoCorrect: 0,
                    autoSave: 0,
                    color: 0,
                    itemProp: 0,
                    itemScope: 4,
                    itemType: 0,
                    itemID: 0,
                    itemRef: 0,
                    results: 0,
                    security: 0,
                    unselectable: 0
                },
                DOMAttributeNames: {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv"
                }
            }
        },
        nlhN: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("cpVT"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("AeFk");
            o.a.createElement;

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var l = o.a.createContext({
                featureFlagState: {},
                setFeatureFlagState: function() {}
            });
            t.b = function(e) {
                var t = e.children,
                    n = e.initialState,
                    r = Object(a.useState)(n || {}),
                    o = r[0],
                    c = r[1];
                return Object(a.useEffect)((function() {
                    if (window && (window.setFeatureFlagState = c), AsanaStorage) {
                        var e = AsanaStorage.getFromSessionStorage("feature_flags");
                        if (!e) return;
                        e = JSON.parse(e);
                        var t = s({}, o);
                        for (var n in e) n in t && (t[n] = s(s({}, t[n]), {}, {
                            enabledLocally: e[n]
                        }));
                        c(t)
                    }
                }), []), Object(i.c)(l.Provider, {
                    value: {
                        featureFlagState: o,
                        setFeatureFlagState: c
                    }
                }, t)
            }
        },
        nmnc: function(e, t, n) {
            var r = n("Kz5y").Symbol;
            e.exports = r
        },
        noZS: function(e, t, n) {
            var r = n("hypo"),
                a = n("JC6p"),
                o = n("ut/Y");
            e.exports = function(e, t) {
                var n = {};
                return t = o(t, 3), a(e, (function(e, a, o) {
                    r(n, a, t(e, a, o))
                })), n
            }
        },
        ntbh: function(e, t) {
            (function(t) {
                e.exports = function() {
                    var e = {
                            149: function(e) {
                                var t;
                                t = function() {
                                    return this
                                }();
                                try {
                                    t = t || new Function("return this")()
                                } catch (n) {
                                    "object" === typeof window && (t = window)
                                }
                                e.exports = t
                            }
                        },
                        n = {};

                    function r(t) {
                        if (n[t]) return n[t].exports;
                        var a = n[t] = {
                                exports: {}
                            },
                            o = !0;
                        try {
                            e[t](a, a.exports, r), o = !1
                        } finally {
                            o && delete n[t]
                        }
                        return a.exports
                    }
                    return r.ab = t + "/", r(149)
                }()
            }).call(this, "/")
        },
        "oCl/": function(e, t, n) {
            var r = n("CH3K"),
                a = n("LcsW"),
                o = n("MvSz"),
                i = n("0ycA"),
                c = Object.getOwnPropertySymbols ? function(e) {
                    for (var t = []; e;) r(t, o(e)), e = a(e);
                    return t
                } : i;
            e.exports = c
        },
        oI91: function(e, t) {
            e.exports = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        or5M: function(e, t, n) {
            var r = n("1hJj"),
                a = n("QoRX"),
                o = n("xYSL");
            e.exports = function(e, t, n, i, c, s) {
                var l = 1 & n,
                    u = e.length,
                    p = t.length;
                if (u != p && !(l && p > u)) return !1;
                var f = s.get(e),
                    d = s.get(t);
                if (f && d) return f == t && d == e;
                var m = -1,
                    h = !0,
                    g = 2 & n ? new r : void 0;
                for (s.set(e, t), s.set(t, e); ++m < u;) {
                    var b = e[m],
                        v = t[m];
                    if (i) var y = l ? i(v, b, m, t, e, s) : i(b, v, m, e, t, s);
                    if (void 0 !== y) {
                        if (y) continue;
                        h = !1;
                        break
                    }
                    if (g) {
                        if (!a(t, (function(e, t) {
                                if (!o(g, t) && (b === e || c(b, e, n, i, s))) return g.push(t)
                            }))) {
                            h = !1;
                            break
                        }
                    } else if (b !== v && !c(b, v, n, i, s)) {
                        h = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), h
            }
        },
        "otv/": function(e, t, n) {
            var r = n("nmnc"),
                a = r ? r.prototype : void 0,
                o = a ? a.valueOf : void 0;
            e.exports = function(e) {
                return o ? Object(o.call(e)) : {}
            }
        },
        pFRH: function(e, t, n) {
            var r = n("cvCv"),
                a = n("O0oS"),
                o = n("zZ0H"),
                i = a ? function(e, t) {
                    return a(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : o;
            e.exports = i
        },
        pFwx: function(e, t, n) {
            "use strict";

            function r(e) {
                return console.warn("GoogleVerifyModal NOT IMPLEMENTED; DOESN\u2019T WORK IN STATAMIC EITHER"), null
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        pSHO: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        pSRY: function(e, t, n) {
            var r = n("QkVE");
            e.exports = function(e) {
                return r(this, e).has(e)
            }
        },
        pVnL: function(e, t) {
            function n() {
                return e.exports = n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, e.exports.default = e.exports, e.exports.__esModule = !0, n.apply(this, arguments)
            }
            e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        pzgU: function(e, t, n) {
            var r = n("Q1l4"),
                a = n("wJg7"),
                o = Math.min;
            e.exports = function(e, t) {
                for (var n = e.length, i = o(t.length, n), c = r(e); i--;) {
                    var s = t[i];
                    e[i] = a(s, n) ? c[s] : void 0
                }
                return e
            }
        },
        q3TU: function(e, t, n) {
            var r = n("y4QH"),
                a = n("MMiu"),
                o = n("6KkN"),
                i = "__lodash_placeholder__",
                c = 128,
                s = Math.min;
            e.exports = function(e, t) {
                var n = e[1],
                    l = t[1],
                    u = n | l,
                    p = u < 131,
                    f = l == c && 8 == n || l == c && 256 == n && e[7].length <= t[8] || 384 == l && t[7].length <= t[8] && 8 == n;
                if (!p && !f) return e;
                1 & l && (e[2] = t[2], u |= 1 & n ? 0 : 4);
                var d = t[3];
                if (d) {
                    var m = e[3];
                    e[3] = m ? r(m, d, t[4]) : d, e[4] = m ? o(e[3], i) : t[4]
                }
                return (d = t[5]) && (m = e[5], e[5] = m ? a(m, d, t[6]) : d, e[6] = m ? o(e[5], i) : t[6]), (d = t[7]) && (e[7] = d), l & c && (e[8] = null == e[8] ? t[8] : s(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = u, e
            }
        },
        q722: function(e, t, n) {
            var r = n("qhzo"),
                a = n("kl55");

            function o(t, n, i) {
                return a() ? e.exports = o = Reflect.construct : e.exports = o = function(e, t, n) {
                    var a = [null];
                    a.push.apply(a, t);
                    var o = new(Function.bind.apply(e, a));
                    return n && r(o, n.prototype), o
                }, o.apply(null, arguments)
            }
            e.exports = o
        },
        qJWP: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("h2k7"),
                i = n("20a2"),
                c = n("AeFk");
            a.a.createElement;

            function s() {
                var e = Object(i.useRouter)(),
                    t = Object(o.cleanPath)(e.asPath),
                    n = Object(o.englishPath)(t);
                return Object(r.useEffect)((function() {
                    window.window.AsanaI18n && window.AsanaI18n.languageLinks && window.AsanaI18n.languageLinks.init()
                }), []), Object(c.c)("div", {
                    className: "language-list-wrapper"
                }, Object(c.c)("ul", {
                    className: "language-list"
                }, Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/de".concat(n),
                    "data-lang": "de"
                }, "Deutsch")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: n,
                    "data-lang": "en"
                }, "English")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/es".concat(n),
                    "data-lang": "es"
                }, "Espa\xf1ol")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/fr".concat(n),
                    "data-lang": "fr"
                }, "Fran\xe7ais")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/nl".concat(n),
                    "data-lang": "nl"
                }, "Nederlands")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/pl".concat(n),
                    "data-lang": "pl"
                }, "Polski")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/pt".concat(n),
                    "data-lang": "pt"
                }, "Portugu\xeas")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/ru".concat(n),
                    "data-lang": "ru"
                }, "\u0420\u0443\u0441\u0441\u043a\u0438\u0439")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/ja".concat(n),
                    "data-lang": "ja"
                }, "\u65e5\u672c\u8a9e")), Object(c.c)("li", null, Object(c.c)("a", {
                    href: "/zh-tw".concat(n),
                    "data-lang": "zh-tw"
                }, "\u7e41\u9ad4\u4e2d\u6587"))))
            }
        },
        qOIg: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.RouterContext = void 0;
            var a = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext(null);
            t.RouterContext = a
        },
        qT12: function(e, t, n) {
            "use strict";
            var r = "function" === typeof Symbol && Symbol.for,
                a = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                i = r ? Symbol.for("react.fragment") : 60107,
                c = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                l = r ? Symbol.for("react.provider") : 60109,
                u = r ? Symbol.for("react.context") : 60110,
                p = r ? Symbol.for("react.async_mode") : 60111,
                f = r ? Symbol.for("react.concurrent_mode") : 60111,
                d = r ? Symbol.for("react.forward_ref") : 60112,
                m = r ? Symbol.for("react.suspense") : 60113,
                h = r ? Symbol.for("react.suspense_list") : 60120,
                g = r ? Symbol.for("react.memo") : 60115,
                b = r ? Symbol.for("react.lazy") : 60116,
                v = r ? Symbol.for("react.block") : 60121,
                y = r ? Symbol.for("react.fundamental") : 60117,
                _ = r ? Symbol.for("react.responder") : 60118,
                j = r ? Symbol.for("react.scope") : 60119;

            function w(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case a:
                            switch (e = e.type) {
                                case p:
                                case f:
                                case i:
                                case s:
                                case c:
                                case m:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case d:
                                        case b:
                                        case g:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function O(e) {
                return w(e) === f
            }
            t.AsyncMode = p, t.ConcurrentMode = f, t.ContextConsumer = u, t.ContextProvider = l, t.Element = a, t.ForwardRef = d, t.Fragment = i, t.Lazy = b, t.Memo = g, t.Portal = o, t.Profiler = s, t.StrictMode = c, t.Suspense = m, t.isAsyncMode = function(e) {
                return O(e) || w(e) === p
            }, t.isConcurrentMode = O, t.isContextConsumer = function(e) {
                return w(e) === u
            }, t.isContextProvider = function(e) {
                return w(e) === l
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === a
            }, t.isForwardRef = function(e) {
                return w(e) === d
            }, t.isFragment = function(e) {
                return w(e) === i
            }, t.isLazy = function(e) {
                return w(e) === b
            }, t.isMemo = function(e) {
                return w(e) === g
            }, t.isPortal = function(e) {
                return w(e) === o
            }, t.isProfiler = function(e) {
                return w(e) === s
            }, t.isStrictMode = function(e) {
                return w(e) === c
            }, t.isSuspense = function(e) {
                return w(e) === m
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === i || e === f || e === s || e === c || e === m || e === h || "object" === typeof e && null !== e && (e.$$typeof === b || e.$$typeof === g || e.$$typeof === l || e.$$typeof === u || e.$$typeof === d || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === j || e.$$typeof === v)
            }, t.typeOf = w
        },
        qVT1: function(e, t) {
            function n(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i),
                        s = c.value
                } catch (l) {
                    return void n(l)
                }
                c.done ? t(s) : Promise.resolve(s).then(r, a)
            }
            e.exports = function(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            n(i, a, o, c, s, "next", e)
                        }

                        function s(e) {
                            n(i, a, o, c, s, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
        },
        qXWd: function(e, t) {
            e.exports = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        },
        qZTm: function(e, t, n) {
            var r = n("fR/l"),
                a = n("MvSz"),
                o = n("7GkX");
            e.exports = function(e) {
                return r(e, o, a)
            }
        },
        qZmz: function(e, t) {
            e.exports = {
                prod_environment_favicons_notrans: [{
                    sizes: "57x57",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-57x57.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "60x60",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-60x60.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "72x72",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-72x72.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "76x76",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-76x76.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "114x114",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-114x114.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "120x120",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-120x120.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "144x144",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-144x144.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "152x152",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-152x152.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "180x180",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon-180x180.png",
                    rel: "apple-touch-icon"
                }, {
                    sizes: "16x16",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/favicon-16x16.png",
                    rel: "favicon"
                }, {
                    sizes: "32x32",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/favicon-32x32.png",
                    rel: "favicon"
                }, {
                    sizes: "96x96",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/favicon-96x96.png",
                    rel: "favicon"
                }, {
                    sizes: "192x192",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/android-chrome-192x192.png",
                    rel: "favicon"
                }, {
                    sizes: "194x194",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/favicon-194x194.png",
                    rel: "favicon"
                }],
                shortcut_icon_notrans: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/favicon.ico",
                dev_environment_favicons_notrans: [{
                    sizes: "32x32",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/internal/oban_32.png",
                    rel: "icon"
                }, {
                    sizes: "256x256",
                    href: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/internal/oban_256.png",
                    rel: "apple-touch-icon"
                }]
            }
        },
        qhzo: function(e, t) {
            function n(t, r) {
                return e.exports = n = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, n(t, r)
            }
            e.exports = n
        },
        qpZ2: function(e, t, n) {
            var r = n("eKC+"),
                a = n("MHQ9"),
                o = a.setStyleProp,
                i = r.html,
                c = r.svg,
                s = r.isCustomAttribute,
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t, n, r, u;
                e = e || {};
                var p = {};
                for (t in e) r = e[t], s(t) ? p[t] = r : (n = t.toLowerCase(), l.call(i, n) ? p[(u = i[n]).propertyName] = !!(u.hasBooleanValue || u.hasOverloadedBooleanValue && !r) || r : l.call(c, t) ? p[(u = c[t]).propertyName] = r : a.PRESERVE_CUSTOM_ATTRIBUTES && (p[t] = r));
                return o(e.style, p), p
            }
        },
        r3F2: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("76ZC"),
                a = n.n(r),
                o = n("q1tI"),
                i = n.n(o),
                c = n("VTyt"),
                s = n("AeFk");
            i.a.createElement;

            function l(e) {
                var t = e.html;
                return t ? a()(t, {
                    replace: function(e) {
                        var t = e.attribs,
                            n = e.children;
                        if (t && t.href) {
                            var a = Object(r.attributesToProps)(t);
                            return Object(s.c)(c.default, {
                                attribs: a
                            }, Object(r.domToReact)(n))
                        }
                    }
                }) : null
            }
        },
        rAx0: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return b
            }));
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("usKF"),
                c = n("r3F2"),
                s = n("WAai"),
                l = n("g4pe"),
                u = n.n(l),
                p = n("AeFk");
            o.a.createElement;

            function f(e) {
                return Object(p.c)(o.a.Fragment, null, e.modal_id_notrans && e.ctaSignupLegalText && Object(p.c)("p", {
                    className: "modal-legal -small"
                }, Object(p.c)(c.a, {
                    html: e.ctaSignupLegalText
                })), Object(p.c)(s.default, Object(r.a)({}, e, {
                    context: "modal-".concat(e.modal_id_notrans),
                    modifier: "center",
                    center: "true",
                    button_classname: "js-signup-button"
                })), "try" === e.modal_id_notrans || "trial" === e.modal_id_notrans ? Object(p.c)(o.a.Fragment, null, Object(p.c)("div", {
                    className: "visible-logged-in"
                }, Object(p.c)("a", {
                    href: "https://app.asana.com/-/upgrade?trial=true",
                    className: "button -large"
                }, e.ctaLoginTrialText)), "try" === e.modal_id_notrans && e.ctaTryTrialText && Object(p.c)(o.a.Fragment, null, Object(p.c)("p", {
                    className: "try-user-text"
                }, Object(p.c)(c.a, {
                    html: e.ctaTryTrialText
                })), Object(p.c)("hr", null))) : Object(p.c)("div", {
                    className: "visible-logged-in"
                }, Object(p.c)("a", {
                    href: "https://app.asana.com",
                    className: "button -large"
                }, e.ctaGoToAppDesktopText && Object(p.c)(c.a, {
                    html: e.ctaGoToAppDesktopText
                }))), Object(p.c)(u.a, null, Object(p.c)("style", null, ".grecaptcha-badge {visibility: hidden}"), Object(p.c)("script", {
                    src: "https://www.google.com/recaptcha/enterprise.js?render=6Lf1FtQZAAAAAKGsW3JoCdtQfzfCb2umWbEoyOjE",
                    async: "async",
                    id: "recaptcha/enterprise"
                })))
            }
            var d = n("+2iv");
            o.a.createElement;

            function m(e) {
                var t, n, a, i, l, f, m, h, g, b;
                return Object(p.c)(o.a.Fragment, null, Object(p.c)(u.a, null, Object(p.c)("style", null, "#signup .modal-container .signup-modal { max-width: 100%; padding: 0 25px 80px; }\n  #signup .modal-container .modal-legal {max-width: 470px; margin: 24px auto 32px;}\n  #buy-premium a.exp-gmail-button-continue, #buy-business a.exp-gmail-button-continue{\n    max-width: 550px;\n    width: 100%;\n    margin: auto;\n  }\n  #buy-premium .modal-content .modal-legal, #buy-business .modal-content .modal-legal {\n    margin: 24px 0 32px;\n  }\n  @media (min-width: 90em) {\n    #signup .modal-container {\n      margin-top: 80px;\n    }\n  }")), e.modal_id_notrans && e.ctaSignupLegalText && Object(p.c)("p", {
                    className: "modal-legal -small"
                }, Object(p.c)(c.a, {
                    html: e.ctaSignupLegalText
                })), 1 === (null === (t = e.continueWithGoogleButton) || void 0 === t ? void 0 : t.variant) ? Object(p.c)(o.a.Fragment, null, Object(p.c)(d.a, null), (null === (n = e.continueWithGoogleButton) || void 0 === n || null === (a = n.props) || void 0 === a ? void 0 : a.orText[e.language]) && Object(p.c)("div", {
                    className: "form-option"
                }, null === (i = e.continueWithGoogleButton) || void 0 === i || null === (l = i.props) || void 0 === l ? void 0 : l.orText[e.language])) : null, Object(p.c)(s.default, Object(r.a)({}, e, {
                    context: "modal-".concat(e.modal_id_notrans),
                    modifier: "center",
                    center: "true",
                    button_classname: "js-signup-button"
                })), 2 === (null === (f = e.continueWithGoogleButton) || void 0 === f ? void 0 : f.variant) ? Object(p.c)(o.a.Fragment, null, (null === (m = e.continueWithGoogleButton) || void 0 === m || null === (h = m.props) || void 0 === h ? void 0 : h.orText[e.language]) && Object(p.c)("div", {
                    className: "form-option"
                }, null === (g = e.continueWithGoogleButton) || void 0 === g || null === (b = g.props) || void 0 === b ? void 0 : b.orText[e.language]), Object(p.c)(d.a, null)) : null, "try" === e.modal_id_notrans || "trial" === e.modal_id_notrans ? Object(p.c)(o.a.Fragment, null, Object(p.c)("div", {
                    className: "visible-logged-in"
                }, Object(p.c)("a", {
                    href: "https://app.asana.com/-/upgrade?trial=true",
                    className: "button -large"
                }, e.ctaLoginTrialText)), "try" === e.modal_id_notrans && e.ctaTryTrialText && Object(p.c)(o.a.Fragment, null, Object(p.c)("p", {
                    className: "try-user-text"
                }, Object(p.c)(c.a, {
                    html: e.ctaTryTrialText
                })), Object(p.c)("hr", null))) : Object(p.c)("div", {
                    className: "visible-logged-in"
                }, Object(p.c)("a", {
                    href: "https://app.asana.com",
                    className: "button -large"
                }, e.ctaGoToAppDesktopText && Object(p.c)(c.a, {
                    html: e.ctaGoToAppDesktopText
                }))), Object(p.c)(u.a, null, Object(p.c)("style", null, ".grecaptcha-badge {visibility: hidden}"), Object(p.c)("script", {
                    src: "https://www.google.com/recaptcha/enterprise.js?render=6Lf1FtQZAAAAAKGsW3JoCdtQfzfCb2umWbEoyOjE",
                    async: "async",
                    id: "recaptcha/enterprise"
                })))
            }
            var h = n("rOX3"),
                g = (n("bW4L"), n("sJyK"));
            o.a.createElement;

            function b(e) {
                var t = Object(a.useContext)(i.a),
                    n = Object(h.a)("desktopSignupWithGoogleButton").experiment;
                return n && n.variant > 0 ? Object(p.c)(m, Object(r.a)({}, e, {
                    ctaSignupText: t.global_CTAsignupText,
                    signupTrialText: t.global_CTAsignupTrialText,
                    ctaGoToAppDesktopText: t.global_CTAgoToAppDesktop,
                    ctaTryTrialText: t.global_try_link_trial,
                    ctaLoginTrialText: t.global_CTAloginTrial,
                    ctaSignupLegalText: t.global_CTAsignupLegalese,
                    emailPlaceholder: t.global_placeholderEmail,
                    ctaCompleteSignup: t.global_CTAcompleteSignup,
                    continueWithGoogleButton: n,
                    language: t.global_language || g.DEFAULT_LANGUAGE
                })) : Object(p.c)(f, Object(r.a)({}, e, {
                    ctaSignupText: t.global_CTAsignupText,
                    signupTrialText: t.global_CTAsignupTrialText,
                    ctaGoToAppDesktopText: t.global_CTAgoToAppDesktop,
                    ctaTryTrialText: t.global_try_link_trial,
                    ctaLoginTrialText: t.global_CTAloginTrial,
                    ctaSignupLegalText: t.global_CTAsignupLegalese,
                    emailPlaceholder: t.global_placeholderEmail,
                    ctaCompleteSignup: t.global_CTAcompleteSignup
                }))
            }
        },
        rEGp: function(e, t) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                })), n
            }
        },
        rOX3: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("q1tI"),
                a = n("xENa");

            function o(e) {
                var t = Object(r.useContext)(a.b);
                return {
                    experiment: t[e],
                    activateExperiment: function(n) {
                        t.handleActivationEvent(n || e)
                    }
                }
            }
        },
        rg98: function(e, t, n) {
            "use strict";

            function r(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i),
                        s = c.value
                } catch (l) {
                    return void n(l)
                }
                c.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            r(i, a, o, c, s, "next", e)
                        }

                        function s(e) {
                            r(i, a, o, c, s, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        rlHP: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        "s0N+": function(e, t, n) {
            var r = n("zZ0H"),
                a = n("a5q3"),
                o = a ? function(e, t) {
                    return a.set(e, t), e
                } : r;
            e.exports = o
        },
        sEf8: function(e, t) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        sJyK: function(e, t, n) {
            var r = n("zoAU"),
                a = n("//LF"),
                o = a.stripLeadingSlash,
                i = a.addLeadingSlash,
                c = "en",
                s = ["de", "fr", "es", "pt", "ja", "zh-tw", "pl", "nl", "ru"],
                l = s.concat(c),
                u = "en-US";

            function p(e) {
                if ("" === (e = o(e))) return c;
                var t = e.split("/")[0];
                return s.indexOf(t) > -1 ? t : c
            }
            e.exports = {
                getPageLanguage: p,
                getContentfulLocale: function(e) {
                    if ("string" !== typeof e) throw Error("Non string provided to contentfulLocale");
                    if (e === c) return u;
                    var t = e.split(/[-_]/),
                        n = r(t, 2),
                        a = n[0],
                        o = n[1];
                    return o ? a.toLowerCase() + "-" + o.toUpperCase() : a
                },
                isPageLanguageDefault: function(e) {
                    return p(e) === c
                },
                removeLanguageFromPath: function(e) {
                    var t = (e = o(e)).split("/"),
                        n = t[0];
                    return s.indexOf(n) > -1 && t.shift(), i(t.join("/"))
                },
                DEFAULT_LANGUAGE: c,
                DEFAULT_LOCALE: "US",
                LANGUAGE_CODES: s,
                LANGUAGE_CODES_ISO_639_1: ["de", "fr", "es", "pt", "ja", "zh_TW", "pl", "nl", "ru"],
                LANGUAGE_MAP: {
                    de: "Deutsch",
                    en: "English",
                    es: "Espa\xf1ol",
                    fr: "Fran\xe7ais",
                    pt: "Portugu\xeas",
                    ja: "\u65e5\u672c\u8a9e",
                    "zh-tw": "\u7e41\u9ad4\u4e2d\u6587",
                    pl: "Polski",
                    nl: "Nederlands",
                    ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
                },
                ALL_LANGUAGE_CODES: l,
                CONTENTFUL_DEFAULT_LOCALE: u
            }
        },
        sZCt: function(e, t, n) {
            var r = n("ttrC"),
                a = n("Ig5p");
            e.exports = function(e, t, n) {
                return r(a, e, t, n)
            }
        },
        seXi: function(e, t, n) {
            var r = n("qZTm"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n, o, i, c) {
                var s = 1 & n,
                    l = r(e),
                    u = l.length;
                if (u != r(t).length && !s) return !1;
                for (var p = u; p--;) {
                    var f = l[p];
                    if (!(s ? f in t : a.call(t, f))) return !1
                }
                var d = c.get(e),
                    m = c.get(t);
                if (d && m) return d == t && m == e;
                var h = !0;
                c.set(e, t), c.set(t, e);
                for (var g = s; ++p < u;) {
                    var b = e[f = l[p]],
                        v = t[f];
                    if (o) var y = s ? o(v, b, f, t, e, c) : o(b, v, f, e, t, c);
                    if (!(void 0 === y ? b === v || i(b, v, n, o, c) : y)) {
                        h = !1;
                        break
                    }
                    g || (g = "constructor" == f)
                }
                if (h && !g) {
                    var _ = e.constructor,
                        j = t.constructor;
                    _ == j || !("constructor" in e) || !("constructor" in t) || "function" == typeof _ && _ instanceof _ && "function" == typeof j && j instanceof j || (h = !1)
                }
                return c.delete(e), c.delete(t), h
            }
        },
        shjB: function(e, t) {
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        siQn: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("xvhg"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("0W9H"),
                l = n("AeFk");
            o.a.createElement;
            t.default = function(e) {
                var t = e.src,
                    n = e.src_1x,
                    a = e.src_1x_notrans,
                    i = e.src_2x,
                    u = e.src_2x_notrans,
                    p = e.caption,
                    f = e.mod,
                    d = e.alt,
                    m = e.class_notrans,
                    h = e.no_lazy,
                    g = e.className,
                    b = e.width_notrans,
                    v = e.style,
                    y = Object.assign({}, v),
                    _ = Object(s.a)(),
                    j = Object(r.a)(_, 2),
                    w = j[0],
                    O = j[1],
                    x = !!h || O,
                    k = n || a,
                    E = i || u,
                    C = E || k || t,
                    S = d || "",
                    A = x ? k || E ? "".concat(k && k + " 1x", " ").concat(E && ", " + E + " 2x") : C : null,
                    P = x ? C : null;
                return y.opacity = x ? null : "0", Object(l.c)(o.a.Fragment, null, Object(l.c)("img", {
                    ref: w,
                    className: c()(e.class, m, f, g),
                    src: P,
                    srcSet: A,
                    alt: S,
                    width: b || null,
                    style: y
                }), p && Object(l.c)("p", {
                    className: c()(e.class, "-caption")
                }, p), Object(l.c)("noscript", null, Object(l.c)("img", {
                    src: C,
                    alt: S
                })))
            }
        },
        swag: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("siQn"),
                i = n("r3F2"),
                c = n("AeFk");
            a.a.createElement;
            t.a = function(e) {
                var t = e.header,
                    n = e.subheader,
                    r = e.isUserEmail,
                    s = e.emailAddress,
                    l = e.optionText,
                    u = e.noEmail,
                    p = e.resendEmail,
                    f = e.inboxEmail,
                    d = e.emailSent,
                    m = e.isRequired,
                    h = e.VerificationButton;
                return Object(c.c)(a.a.Fragment, null, Object(c.c)("div", {
                    className: "row -xsmall-center"
                }, Object(c.c)("div", {
                    className: "xl-12 -ta-center"
                }, Object(c.c)(o.default, {
                    src: "https://d3ki9tyy5l5ruj.cloudfront.net/obj/fdfb4a46bef27b7941f740a836bf745bba4e321b/AsanaDesktop.svg"
                }))), Object(c.c)("div", {
                    className: "row -spacing-2 -xsmall-center"
                }, Object(c.c)("div", {
                    className: "-large"
                }, Object(c.c)("section", {
                    className: "verificationHeadline sso-verification-headline".concat(m ? "" : "-with-option")
                }, Object(c.c)("div", {
                    className: "verificationHeadline-text-wrapper"
                }, Object(c.c)("h1", {
                    className: "verificationHeadline-headline -light"
                }, t), Object(c.c)("p", {
                    className: "verificationHeadline-subhead -large"
                }, "".concat(n.getStarted, " ").concat(n.tier, "! "), " ", Object(c.c)(i.a, {
                    html: n.continue
                }), " ", Object(c.c)("span", {
                    className: "user-email".concat(r ? " dark" : "")
                }, s), ".")), Object(c.c)("div", {
                    className: "verificationHeadline-extras-wrapper"
                }, Object(c.c)("div", {
                    className: "verificationHeadline-button-wrapper"
                }, Object(c.c)("div", null, Object(c.c)(h, null))))))), !m && Object(c.c)("div", {
                    className: "row -spacing-2 -xsmall-center"
                }, Object(c.c)("div", {
                    className: "xl-12 -ta-center"
                }, Object(c.c)("div", null, Object(c.c)("span", {
                    className: "divider-rectangle"
                }), Object(c.c)("span", {
                    className: "divider-text"
                }, l), Object(c.c)("span", {
                    className: "divider-rectangle"
                })))), Object(c.c)("div", {
                    className: "row -spacing-2 -xsmall-center"
                }, Object(c.c)("div", {
                    className: "xl-12 -ta-center"
                }, Object(c.c)("p", null, Object(c.c)(i.a, {
                    html: f
                }), m ? Object(c.c)("br", null) : " ", Object(c.c)(i.a, {
                    html: u
                }), Object(c.c)("span", {
                    className: "email-resend-container"
                }, "\xa0", Object(c.c)("a", null, p)), Object(c.c)("span", {
                    className: "hide email-resending-indicator"
                }, Object(c.c)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16"
                }, Object(c.c)("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7.5"
                }))), Object(c.c)("span", {
                    className: "hide email-send-container"
                }, Object(c.c)("span", {
                    className: "icon icon--green icon--check"
                }), " ", Object(c.c)("a", {
                    className: "email-resend-confirmation"
                }, d))))))
            }
        },
        t0ry: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("AeFk");
            a.a.createElement;

            function i() {
                return Object(o.c)(a.a.Fragment, null, Object(o.c)("a", {
                    "data-modal-close": !0,
                    href: "#close",
                    className: "dialog-close icon icon--x"
                }), Object(o.c)("div", {
                    className: "dialog-content"
                }, Object(o.c)("div", {
                    id: "modalVideoPlayer",
                    className: "wistia_embed wistia_async_pqsp8lk5qn autoPlay=false wmode=transparent controlsVisibleOnLoad=false videoFoam=true"
                })))
            }
        },
        t2dP: function(e, t) {
            e.exports = function(e, t) {
                for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                return r
            }
        },
        tBhh: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = {
                SPACING_2: "2px",
                SPACING_4: "4px",
                SPACING_8: "8px",
                SPACING_16: "16px",
                SPACING_24: "24px",
                SPACING_32: "32px",
                SPACING_48: "48px",
                SPACING_64: "64px",
                SPACING_80: "80px",
                SPACING_128: " 128px",
                SPACING_160: " 160px"
            }
        },
        tCBg: function(e, t, n) {
            var r = n("C+bE"),
                a = n("qXWd");
            e.exports = function(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? a(e) : t
            }
        },
        tLB3: function(e, t, n) {
            var r = n("jXQH"),
                a = n("GoyQ"),
                o = n("/9aa"),
                i = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                l = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (o(e)) return NaN;
                if (a(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = a(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = r(e);
                var n = c.test(e);
                return n || s.test(e) ? l(e.slice(2), n ? 2 : 8) : i.test(e) ? NaN : +e
            }
        },
        tMB7: function(e, t, n) {
            var r = n("y1pI");
            e.exports = function(e) {
                var t = this.__data__,
                    n = r(t, e);
                return n < 0 ? void 0 : t[n][1]
            }
        },
        tadb: function(e, t, n) {
            var r = n("Cwc5")(n("Kz5y"), "DataView");
            e.exports = r
        },
        tpqs: function(e, t, n) {
            (function(e) {
                function n(e, t) {
                    for (var n = 0, r = e.length - 1; r >= 0; r--) {
                        var a = e[r];
                        "." === a ? e.splice(r, 1) : ".." === a ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
                    }
                    if (t)
                        for (; n--; n) e.unshift("..");
                    return e
                }

                function r(e, t) {
                    if (e.filter) return e.filter(t);
                    for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                    return n
                }
                t.resolve = function() {
                    for (var t = "", a = !1, o = arguments.length - 1; o >= -1 && !a; o--) {
                        var i = o >= 0 ? arguments[o] : e.cwd();
                        if ("string" !== typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                        i && (t = i + "/" + t, a = "/" === i.charAt(0))
                    }
                    return (a ? "/" : "") + (t = n(r(t.split("/"), (function(e) {
                        return !!e
                    })), !a).join("/")) || "."
                }, t.normalize = function(e) {
                    var o = t.isAbsolute(e),
                        i = "/" === a(e, -1);
                    return (e = n(r(e.split("/"), (function(e) {
                        return !!e
                    })), !o).join("/")) || o || (e = "."), e && i && (e += "/"), (o ? "/" : "") + e
                }, t.isAbsolute = function(e) {
                    return "/" === e.charAt(0)
                }, t.join = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return t.normalize(r(e, (function(e, t) {
                        if ("string" !== typeof e) throw new TypeError("Arguments to path.join must be strings");
                        return e
                    })).join("/"))
                }, t.relative = function(e, n) {
                    function r(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++);
                        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                        return t > n ? [] : e.slice(t, n - t + 1)
                    }
                    e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
                    for (var a = r(e.split("/")), o = r(n.split("/")), i = Math.min(a.length, o.length), c = i, s = 0; s < i; s++)
                        if (a[s] !== o[s]) {
                            c = s;
                            break
                        }
                    var l = [];
                    for (s = c; s < a.length; s++) l.push("..");
                    return (l = l.concat(o.slice(c))).join("/")
                }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                    if ("string" !== typeof e && (e += ""), 0 === e.length) return ".";
                    for (var t = e.charCodeAt(0), n = 47 === t, r = -1, a = !0, o = e.length - 1; o >= 1; --o)
                        if (47 === (t = e.charCodeAt(o))) {
                            if (!a) {
                                r = o;
                                break
                            }
                        } else a = !1;
                    return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r)
                }, t.basename = function(e, t) {
                    var n = function(e) {
                        "string" !== typeof e && (e += "");
                        var t, n = 0,
                            r = -1,
                            a = !0;
                        for (t = e.length - 1; t >= 0; --t)
                            if (47 === e.charCodeAt(t)) {
                                if (!a) {
                                    n = t + 1;
                                    break
                                }
                            } else -1 === r && (a = !1, r = t + 1);
                        return -1 === r ? "" : e.slice(n, r)
                    }(e);
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
                }, t.extname = function(e) {
                    "string" !== typeof e && (e += "");
                    for (var t = -1, n = 0, r = -1, a = !0, o = 0, i = e.length - 1; i >= 0; --i) {
                        var c = e.charCodeAt(i);
                        if (47 !== c) - 1 === r && (a = !1, r = i + 1), 46 === c ? -1 === t ? t = i : 1 !== o && (o = 1) : -1 !== t && (o = -1);
                        else if (!a) {
                            n = i + 1;
                            break
                        }
                    }
                    return -1 === t || -1 === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
                };
                var a = "b" === "ab".substr(-1) ? function(e, t, n) {
                    return e.substr(t, n)
                } : function(e, t, n) {
                    return t < 0 && (t = e.length + t), e.substr(t, n)
                }
            }).call(this, n("8oxB"))
        },
        ttrC: function(e, t, n) {
            var r = n("iGAk"),
                a = n("wuTn"),
                o = Array.prototype.push;

            function i(e, t) {
                return 2 == t ? function(t, n) {
                    return e(t, n)
                } : function(t) {
                    return e(t)
                }
            }

            function c(e) {
                for (var t = e ? e.length : 0, n = Array(t); t--;) n[t] = e[t];
                return n
            }

            function s(e, t) {
                return function() {
                    var n = arguments.length;
                    if (n) {
                        for (var r = Array(n); n--;) r[n] = arguments[n];
                        var a = r[0] = t.apply(void 0, r);
                        return e.apply(void 0, r), a
                    }
                }
            }
            e.exports = function e(t, n, l, u) {
                var p = "function" == typeof n,
                    f = n === Object(n);
                if (f && (u = l, l = n, n = void 0), null == l) throw new TypeError;
                u || (u = {});
                var d = !("cap" in u) || u.cap,
                    m = !("curry" in u) || u.curry,
                    h = !("fixed" in u) || u.fixed,
                    g = !("immutable" in u) || u.immutable,
                    b = !("rearg" in u) || u.rearg,
                    v = p ? l : a,
                    y = "curry" in u && u.curry,
                    _ = "fixed" in u && u.fixed,
                    j = "rearg" in u && u.rearg,
                    w = p ? l.runInContext() : void 0,
                    O = p ? l : {
                        ary: t.ary,
                        assign: t.assign,
                        clone: t.clone,
                        curry: t.curry,
                        forEach: t.forEach,
                        isArray: t.isArray,
                        isError: t.isError,
                        isFunction: t.isFunction,
                        isWeakMap: t.isWeakMap,
                        iteratee: t.iteratee,
                        keys: t.keys,
                        rearg: t.rearg,
                        toInteger: t.toInteger,
                        toPath: t.toPath
                    },
                    x = O.ary,
                    k = O.assign,
                    E = O.clone,
                    C = O.curry,
                    S = O.forEach,
                    A = O.isArray,
                    P = O.isError,
                    T = O.isFunction,
                    N = O.isWeakMap,
                    L = O.keys,
                    R = O.rearg,
                    F = O.toInteger,
                    I = O.toPath,
                    M = L(r.aryMethod),
                    G = {
                        castArray: function(e) {
                            return function() {
                                var t = arguments[0];
                                return A(t) ? e(c(t)) : e.apply(void 0, arguments)
                            }
                        },
                        iteratee: function(e) {
                            return function() {
                                var t = arguments[0],
                                    n = arguments[1],
                                    r = e(t, n),
                                    a = r.length;
                                return d && "number" == typeof n ? (n = n > 2 ? n - 2 : 1, a && a <= n ? r : i(r, n)) : r
                            }
                        },
                        mixin: function(e) {
                            return function(t) {
                                var n = this;
                                if (!T(n)) return e(n, Object(t));
                                var r = [];
                                return S(L(t), (function(e) {
                                    T(t[e]) && r.push([e, n.prototype[e]])
                                })), e(n, Object(t)), S(r, (function(e) {
                                    var t = e[1];
                                    T(t) ? n.prototype[e[0]] = t : delete n.prototype[e[0]]
                                })), n
                            }
                        },
                        nthArg: function(e) {
                            return function(t) {
                                var n = t < 0 ? 1 : F(t) + 1;
                                return C(e(t), n)
                            }
                        },
                        rearg: function(e) {
                            return function(t, n) {
                                var r = n ? n.length : 0;
                                return C(e(t, n), r)
                            }
                        },
                        runInContext: function(n) {
                            return function(r) {
                                return e(t, n(r), u)
                            }
                        }
                    };

                function D(e, t) {
                    if (d) {
                        var n = r.iterateeRearg[e];
                        if (n) return function(e, t) {
                            return W(e, (function(e) {
                                var n = t.length;
                                return function(e, t) {
                                    return 2 == t ? function(t, n) {
                                        return e.apply(void 0, arguments)
                                    } : function(t) {
                                        return e.apply(void 0, arguments)
                                    }
                                }(R(i(e, n), t), n)
                            }))
                        }(t, n);
                        var a = !p && r.iterateeAry[e];
                        if (a) return function(e, t) {
                            return W(e, (function(e) {
                                return "function" == typeof e ? i(e, t) : e
                            }))
                        }(t, a)
                    }
                    return t
                }

                function z(e, t, n) {
                    if (h && (_ || !r.skipFixed[e])) {
                        var a = r.methodSpread[e],
                            i = a && a.start;
                        return void 0 === i ? x(t, n) : function(e, t) {
                            return function() {
                                for (var n = arguments.length, r = n - 1, a = Array(n); n--;) a[n] = arguments[n];
                                var i = a[t],
                                    c = a.slice(0, t);
                                return i && o.apply(c, i), t != r && o.apply(c, a.slice(t + 1)), e.apply(this, c)
                            }
                        }(t, i)
                    }
                    return t
                }

                function B(e, t, n) {
                    return b && n > 1 && (j || !r.skipRearg[e]) ? R(t, r.methodRearg[e] || r.aryRearg[n]) : t
                }

                function U(e, t) {
                    for (var n = -1, r = (t = I(t)).length, a = r - 1, o = E(Object(e)), i = o; null != i && ++n < r;) {
                        var c = t[n],
                            s = i[c];
                        null == s || T(s) || P(s) || N(s) || (i[c] = E(n == a ? s : Object(s))), i = i[c]
                    }
                    return o
                }

                function q(t, n) {
                    var a = r.aliasToReal[t] || t,
                        o = r.remap[a] || a,
                        i = u;
                    return function(t) {
                        var r = p ? w : O,
                            c = p ? w[o] : n,
                            s = k(k({}, i), t);
                        return e(r, a, c, s)
                    }
                }

                function W(e, t) {
                    return function() {
                        var n = arguments.length;
                        if (!n) return e();
                        for (var r = Array(n); n--;) r[n] = arguments[n];
                        var a = b ? 0 : n - 1;
                        return r[a] = t(r[a]), e.apply(void 0, r)
                    }
                }

                function H(e, t, n) {
                    var a, o = r.aliasToReal[e] || e,
                        i = t,
                        l = G[o];
                    return l ? i = l(t) : g && (r.mutate.array[o] ? i = s(t, c) : r.mutate.object[o] ? i = s(t, function(e) {
                        return function(t) {
                            return e({}, t)
                        }
                    }(t)) : r.mutate.set[o] && (i = s(t, U))), S(M, (function(e) {
                        return S(r.aryMethod[e], (function(t) {
                            if (o == t) {
                                var n = r.methodSpread[o],
                                    c = n && n.afterRearg;
                                return a = c ? z(o, B(o, i, e), e) : B(o, z(o, i, e), e), a = function(e, t, n) {
                                    return y || m && n > 1 ? C(t, n) : t
                                }(0, a = D(o, a), e), !1
                            }
                        })), !a
                    })), a || (a = i), a == t && (a = y ? C(a, 1) : function() {
                        return t.apply(this, arguments)
                    }), a.convert = q(o, t), a.placeholder = t.placeholder = n, a
                }
                if (!f) return H(n, l, v);
                var V = l,
                    Y = [];
                return S(M, (function(e) {
                    S(r.aryMethod[e], (function(e) {
                        var t = V[r.remap[e] || e];
                        t && Y.push([e, H(e, t, V)])
                    }))
                })), S(L(V), (function(e) {
                    var t = V[e];
                    if ("function" == typeof t) {
                        for (var n = Y.length; n--;)
                            if (Y[n][0] == e) return;
                        t.convert = q(e, t), Y.push([e, t])
                    }
                })), S(Y, (function(e) {
                    V[e[0]] = e[1]
                })), V.convert = function(e) {
                    return V.runInContext.convert(e)(void 0)
                }, V.placeholder = V, S(L(V), (function(e) {
                    S(r.realToAlias[e] || [], (function(t) {
                        V[t] = V[e]
                    }))
                })), V
            }
        },
        u8Dt: function(e, t, n) {
            var r = n("YESw"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (r) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return a.call(t, e) ? t[e] : void 0
            }
        },
        uM7l: function(e, t, n) {
            var r = n("OBhP");
            e.exports = function(e) {
                return r(e, 4)
            }
        },
        ulEd: function(e, t) {
            var n = /\{\n\/\* \[wrapped with (.+)\] \*/,
                r = /,? & /;
            e.exports = function(e) {
                var t = e.match(n);
                return t ? t[1].split(r) : []
            }
        },
        umFE: function(e, t, n) {
            "use strict";
            var r = this && this.__assign || function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.helmetJsonLdProp = t.jsonLdScriptProps = t.JsonLd = void 0;
            var a = n("q1tI");

            function o(e, t) {
                return void 0 === t && (t = {}), {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(e, l, t.space)
                    }
                }
            }
            t.JsonLd = function(e) {
                return a.createElement("script", r({}, o(e.item, e)))
            }, t.jsonLdScriptProps = o, t.helmetJsonLdProp = function(e, t) {
                return void 0 === t && (t = {}), {
                    type: "application/ld+json",
                    innerHTML: JSON.stringify(e, l, t.space)
                }
            };
            var i = Object.freeze({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&apos;"
                }),
                c = new RegExp("[" + Object.keys(i).join("") + "]", "g"),
                s = function(e) {
                    return i[e]
                },
                l = function(e, t) {
                    switch (typeof t) {
                        case "object":
                            if (null === t) return;
                            return t;
                        case "number":
                        case "boolean":
                        case "bigint":
                            return t;
                        case "string":
                            return t.replace(c, s);
                        default:
                            return
                    }
                }
        },
        usKF: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r).a.createContext({});
            t.a = a
        },
        "ut/Y": function(e, t, n) {
            var r = n("ZCpW"),
                a = n("GDhZ"),
                o = n("zZ0H"),
                i = n("Z0cm"),
                c = n("+c4W");
            e.exports = function(e) {
                return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? i(e) ? a(e[0], e[1]) : r(e) : c(e)
            }
        },
        v2rO: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("HALo"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("AeFk");
            o.a.createElement;
            t.default = function(e) {
                var t = e.name,
                    n = e.loop,
                    a = e.src,
                    o = e.poster,
                    i = e.circular,
                    l = e.shadow_notrans,
                    u = e.responsive_src,
                    p = {};
                return u && (p["data-src-".concat(t)] = a + "," + o, u.forEach((function(e) {
                    p["data-src-".concat(e.name)] = e.src + "," + e.poster
                }))), Object(s.c)("div", {
                    className: i && "circularCutoutVideo"
                }, Object(s.c)("video", Object(r.a)({
                    className: c()("videoAnimation", {
                        responsiveVideo: u
                    }, {
                        "-box-shadow": l
                    }),
                    loop: n,
                    poster: o,
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    "data-src": a
                }, p)))
            }
        },
        v8eK: function(e, t, n) {
            var r = n("XGnz"),
                a = n("EA7m"),
                o = n("LGYb"),
                i = n("3L66"),
                c = a((function(e) {
                    return o(r(e, 1, i, !0))
                }));
            e.exports = c
        },
        v8vJ: function(e, t, n) {
            var r = n("6T1N");
            e.exports = function(e, t, n) {
                return t = n ? void 0 : t, t = e && null == t ? e.length : t, r(e, 128, void 0, void 0, void 0, void 0, t)
            }
        },
        vJKn: function(e, t, n) {
            e.exports = n("ls82")
        },
        "vN+2": function(e, t) {
            e.exports = function() {}
        },
        vPbN: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = (n("g4pe"), n("VTyt"));
            var i = n("kUBA"),
                c = n("AeFk");
            a.a.createElement, t.a = function(e) {
                var t = e.children,
                    n = e.wistiaId,
                    s = e.link,
                    l = e.link_text,
                    u = e.poster,
                    p = e.poster_class,
                    f = e.play_button,
                    d = function(e) {
                        var t = Object(r.useState)(null),
                            n = t[0],
                            a = t[1];
                        return Object(r.useDebugValue)(n), Object(r.useEffect)((function() {
                            window && e && (window._wq = window._wq || [], window._wq.push({
                                id: e,
                                onReady: function(e) {
                                    a(e)
                                }
                            }))
                        }), []), n
                    }(n);
                return Object(c.c)(a.a.Fragment, null, Object(c.c)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "\n          .wistia_embed > .video{\n            display: none;\n          }\n          .video-popup-link{\n            display: none;\n          } \n          .wistia_embed > .video-popup-link, .wistia_click_to_play .video-popup-link {\n            display: block;\n          }"
                    }
                }), Object(c.c)("div", {
                    id: n,
                    className: "wistia_embed wistia_async_".concat(n, " popover=true popoverContent=html"),
                    onClick: function(e) {
                        if (e.preventDefault(), d) try {
                            d.play()
                        } catch (e) {}
                    }
                }, s && Object(c.c)(o.default, {
                    className: "video-popup-link -small",
                    href: s,
                    title: "Play Video"
                }, l && Object(c.c)(a.a.Fragment, null, Object(c.c)("span", {
                    className: "video-popup-link-icon"
                }), Object(c.c)("span", {
                    className: "video-popup-link-text"
                }, l)), u && Object(c.c)("img", {
                    className: p,
                    src: u
                }), f && Object(c.c)("div", {
                    className: "video-playContainer"
                }, Object(c.c)("div", {
                    className: "video-play ".concat(f)
                }))), t), Object(c.c)(i.a, {
                    deferTime: 1
                }, Object(c.c)("script", {
                    src: "//fast.wistia.com/assets/external/E-v1.js",
                    key: "E-v1.js"
                })))
            }
        },
        vhTo: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.camelCase = void 0;
            var r = /^--[a-zA-Z0-9-]+$/,
                a = /-([a-z])/g,
                o = /^[^-]+$/,
                i = /^-(webkit|moz|ms|o|khtml)-/,
                c = function(e, t) {
                    return t.toUpperCase()
                },
                s = function(e, t) {
                    return t + "-"
                };
            t.camelCase = function(e, t) {
                return void 0 === t && (t = {}),
                    function(e) {
                        return !e || o.test(e) || r.test(e)
                    }(e) ? e : (e = e.toLowerCase(), t.reactCompat || (e = e.replace(i, s)), e.replace(a, c))
            }
        },
        "w/wX": function(e, t, n) {
            var r = n("QqLw"),
                a = n("ExA7");
            e.exports = function(e) {
                return a(e) && "[object Set]" == r(e)
            }
        },
        "wF/u": function(e, t, n) {
            var r = n("e5cp"),
                a = n("ExA7");
            e.exports = function e(t, n, o, i, c) {
                return t === n || (null == t || null == n || !a(t) && !a(n) ? t !== t && n !== n : r(t, n, o, i, e, c))
            }
        },
        wJg7: function(e, t) {
            var n = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, t) {
                var r = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && n.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
        },
        wJvl: function(e, t, n) {
            for (var r, a = n("F3Dj").CASE_SENSITIVE_TAG_NAMES, o = {}, i = 0, c = a.length; i < c; i++) r = a[i], o[r.toLowerCase()] = r;

            function s(e) {
                for (var t, n = {}, r = 0, a = e.length; r < a; r++) n[(t = e[r]).name] = t.value;
                return n
            }

            function l(e) {
                var t = function(e) {
                    return o[e]
                }(e = e.toLowerCase());
                return t || e
            }
            e.exports = {
                formatAttributes: s,
                formatDOM: function e(t, n, r) {
                    n = n || null;
                    for (var a, o, i, c = [], u = 0, p = t.length; u < p; u++) {
                        switch (a = t[u], i = {
                            next: null,
                            prev: c[u - 1] || null,
                            parent: n
                        }, (o = c[u - 1]) && (o.next = i), "#" !== a.nodeName[0] && (i.name = l(a.nodeName), i.attribs = {}, a.attributes && a.attributes.length && (i.attribs = s(a.attributes))), a.nodeType) {
                            case 1:
                                "script" === i.name || "style" === i.name ? i.type = i.name : i.type = "tag", i.children = e(a.childNodes, i);
                                break;
                            case 3:
                                i.type = "text", i.data = a.nodeValue;
                                break;
                            case 8:
                                i.type = "comment", i.data = a.nodeValue
                        }
                        c.push(i)
                    }
                    return r && (c.unshift({
                        name: r.substring(0, r.indexOf(" ")).toLowerCase(),
                        data: r,
                        type: "directive",
                        next: c[0] ? c[0] : null,
                        prev: null,
                        parent: n
                    }), c[1] && (c[1].prev = c[0])), c
                },
                isIE: function(e) {
                    return e ? document.documentMode === e : /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)
                }
            }
        },
        wclG: function(e, t, n) {
            var r = n("pFRH"),
                a = n("88Gu")(r);
            e.exports = a
        },
        wkBG: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.replace(/\\/g, "/")
            }
            t.__esModule = !0, t.normalizePathSep = r, t.denormalizePagePath = function(e) {
                (e = r(e)).startsWith("/index/") ? e = e.slice(6) : "/index" === e && (e = "/");
                return e
            }
        },
        wrZu: function(e, t, n) {
            var r = n("+K+b"),
                a = n("XYm9"),
                o = n("b2z7"),
                i = n("otv/"),
                c = n("yP5f");
            e.exports = function(e, t, n) {
                var s = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return r(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new s(+e);
                    case "[object DataView]":
                        return a(e, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return c(e, n);
                    case "[object Map]":
                        return new s;
                    case "[object Number]":
                    case "[object String]":
                        return new s(e);
                    case "[object RegExp]":
                        return o(e);
                    case "[object Set]":
                        return new s;
                    case "[object Symbol]":
                        return i(e)
                }
            }
        },
        wuTn: function(e, t) {
            e.exports = {}
        },
        wx14: function(e, t, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        xENa: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return _
            }));
            var r = n("vJKn"),
                a = n.n(r),
                o = n("cpVT"),
                i = n("xvhg"),
                c = n("rg98"),
                s = n("q1tI"),
                l = n.n(s),
                u = n("V2NO"),
                p = (n("E+oP"), n("Rfcb"), function(e, t, n) {
                    return Object.entries(e).find((function(e) {
                        var r = Object(i.a)(e, 2),
                            a = (r[0], r[1]),
                            o = a.prodIds,
                            c = a.qaIds;
                        if (n && Array.isArray(c) && c.length) {
                            var s = c.find((function(e) {
                                return e === t
                            }));
                            if (s) return s
                        }
                        return o.find((function(e) {
                            return e === t
                        }))
                    }))
                }),
                f = n("bW4L"),
                d = n("FlQR"),
                m = n("jQyn"),
                h = n("AeFk");
            l.a.createElement;

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var v = l.a.createContext({});

            function y() {
                window.dataLayer = window.dataLayer || [], window.dataLayer.push(arguments)
            }
            var _ = function(e) {
                var t = e.children,
                    n = Object(s.useState)({
                        handleActivationEvent: function(e) {
                            var t = u.a[e];
                            t && t.customEvent ? Object(f.b)(t.customEvent) : m.default.error('handleActivationEvent failed because the experiment "'.concat(e, '" is not configured correctly'))
                        }
                    }),
                    r = n[0],
                    o = n[1];
                return Object(s.useEffect)((function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }

                    function t() {
                        return (t = Object(c.a)(a.a.mark((function e(t, n) {
                            var c, s, l, f, h, g;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        c = {}, (s = p(u.a, n, d.isQaEnv)) && (l = Object(i.a)(s, 2), f = l[0], h = l[1], g = parseInt(t, 10), !h.debugOverride || d.isProduction || d.isDark || (g = h.debugOverride), r[f] && "undefined" !== typeof r[f].variant && g !== r[f].variant && m.default.warn("The variant number for ".concat(f, " is changing. This could be due to having multiple experiments with overlapping targeting.")), c[f] = b(b({}, h), {}, {
                                            variant: g
                                        })), o((function(e) {
                                            return b(b({}, e), c)
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    return y("event", "optimize.callback", {
                            callback: e
                        }), Object.keys(u.a).forEach((function(t) {
                            var n = u.a[t];
                            if (n.debugOverride) {
                                m.default.warn("".concat(t, " experiment is in running in 'debugOverride' mode with variant ").concat(n.debugOverride));
                                var r = (d.isQaEnv && n.qaIds && n.qaIds.length > 0 ? n.qaIds : n.prodIds)[0];
                                e(n.debugOverride, r)
                            }
                        })),
                        function() {
                            y("event", "optimize.callback", {
                                callback: e,
                                remove: !0
                            })
                        }
                }), []), Object(h.c)(v.Provider, {
                    value: r
                }, t)
            };
            t.b = v
        },
        xFI3: function(e, t, n) {
            var r = n("Yoag"),
                a = n("6ae/"),
                o = n("Q1l4");
            e.exports = function(e) {
                if (e instanceof r) return e.clone();
                var t = new a(e.__wrapped__, e.__chain__);
                return t.__actions__ = o(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        xI07: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.jsonLdScriptProps = t.JsonLd = t.helmetJsonLdProp = void 0;
            var r = n("umFE");
            Object.defineProperty(t, "helmetJsonLdProp", {
                enumerable: !0,
                get: function() {
                    return r.helmetJsonLdProp
                }
            }), Object.defineProperty(t, "JsonLd", {
                enumerable: !0,
                get: function() {
                    return r.JsonLd
                }
            }), Object.defineProperty(t, "jsonLdScriptProps", {
                enumerable: !0,
                get: function() {
                    return r.jsonLdScriptProps
                }
            })
        },
        xROn: function(e, t) {
            (function(t) {
                e.exports = function() {
                    var e = {
                            533: function() {}
                        },
                        n = {};

                    function r(t) {
                        if (n[t]) return n[t].exports;
                        var a = n[t] = {
                                exports: {}
                            },
                            o = !0;
                        try {
                            e[t](a, a.exports, r), o = !1
                        } finally {
                            o && delete n[t]
                        }
                        return a.exports
                    }
                    return r.ab = t + "/", r(533)
                }()
            }).call(this, "/")
        },
        xYSL: function(e, t) {
            e.exports = function(e, t) {
                return e.has(t)
            }
        },
        xp0l: function(e, t) {
            e.exports = {
                Properties: {
                    accentHeight: 0,
                    accumulate: 0,
                    additive: 0,
                    alignmentBaseline: 0,
                    allowReorder: 0,
                    alphabetic: 0,
                    amplitude: 0,
                    arabicForm: 0,
                    ascent: 0,
                    attributeName: 0,
                    attributeType: 0,
                    autoReverse: 0,
                    azimuth: 0,
                    baseFrequency: 0,
                    baseProfile: 0,
                    baselineShift: 0,
                    bbox: 0,
                    begin: 0,
                    bias: 0,
                    by: 0,
                    calcMode: 0,
                    capHeight: 0,
                    clip: 0,
                    clipPath: 0,
                    clipRule: 0,
                    clipPathUnits: 0,
                    colorInterpolation: 0,
                    colorInterpolationFilters: 0,
                    colorProfile: 0,
                    colorRendering: 0,
                    contentScriptType: 0,
                    contentStyleType: 0,
                    cursor: 0,
                    cx: 0,
                    cy: 0,
                    d: 0,
                    decelerate: 0,
                    descent: 0,
                    diffuseConstant: 0,
                    direction: 0,
                    display: 0,
                    divisor: 0,
                    dominantBaseline: 0,
                    dur: 0,
                    dx: 0,
                    dy: 0,
                    edgeMode: 0,
                    elevation: 0,
                    enableBackground: 0,
                    end: 0,
                    exponent: 0,
                    externalResourcesRequired: 0,
                    fill: 0,
                    fillOpacity: 0,
                    fillRule: 0,
                    filter: 0,
                    filterRes: 0,
                    filterUnits: 0,
                    floodColor: 0,
                    floodOpacity: 0,
                    focusable: 0,
                    fontFamily: 0,
                    fontSize: 0,
                    fontSizeAdjust: 0,
                    fontStretch: 0,
                    fontStyle: 0,
                    fontVariant: 0,
                    fontWeight: 0,
                    format: 0,
                    from: 0,
                    fx: 0,
                    fy: 0,
                    g1: 0,
                    g2: 0,
                    glyphName: 0,
                    glyphOrientationHorizontal: 0,
                    glyphOrientationVertical: 0,
                    glyphRef: 0,
                    gradientTransform: 0,
                    gradientUnits: 0,
                    hanging: 0,
                    horizAdvX: 0,
                    horizOriginX: 0,
                    ideographic: 0,
                    imageRendering: 0,
                    in: 0,
                    in2: 0,
                    intercept: 0,
                    k: 0,
                    k1: 0,
                    k2: 0,
                    k3: 0,
                    k4: 0,
                    kernelMatrix: 0,
                    kernelUnitLength: 0,
                    kerning: 0,
                    keyPoints: 0,
                    keySplines: 0,
                    keyTimes: 0,
                    lengthAdjust: 0,
                    letterSpacing: 0,
                    lightingColor: 0,
                    limitingConeAngle: 0,
                    local: 0,
                    markerEnd: 0,
                    markerMid: 0,
                    markerStart: 0,
                    markerHeight: 0,
                    markerUnits: 0,
                    markerWidth: 0,
                    mask: 0,
                    maskContentUnits: 0,
                    maskUnits: 0,
                    mathematical: 0,
                    mode: 0,
                    numOctaves: 0,
                    offset: 0,
                    opacity: 0,
                    operator: 0,
                    order: 0,
                    orient: 0,
                    orientation: 0,
                    origin: 0,
                    overflow: 0,
                    overlinePosition: 0,
                    overlineThickness: 0,
                    paintOrder: 0,
                    panose1: 0,
                    pathLength: 0,
                    patternContentUnits: 0,
                    patternTransform: 0,
                    patternUnits: 0,
                    pointerEvents: 0,
                    points: 0,
                    pointsAtX: 0,
                    pointsAtY: 0,
                    pointsAtZ: 0,
                    preserveAlpha: 0,
                    preserveAspectRatio: 0,
                    primitiveUnits: 0,
                    r: 0,
                    radius: 0,
                    refX: 0,
                    refY: 0,
                    renderingIntent: 0,
                    repeatCount: 0,
                    repeatDur: 0,
                    requiredExtensions: 0,
                    requiredFeatures: 0,
                    restart: 0,
                    result: 0,
                    rotate: 0,
                    rx: 0,
                    ry: 0,
                    scale: 0,
                    seed: 0,
                    shapeRendering: 0,
                    slope: 0,
                    spacing: 0,
                    specularConstant: 0,
                    specularExponent: 0,
                    speed: 0,
                    spreadMethod: 0,
                    startOffset: 0,
                    stdDeviation: 0,
                    stemh: 0,
                    stemv: 0,
                    stitchTiles: 0,
                    stopColor: 0,
                    stopOpacity: 0,
                    strikethroughPosition: 0,
                    strikethroughThickness: 0,
                    string: 0,
                    stroke: 0,
                    strokeDasharray: 0,
                    strokeDashoffset: 0,
                    strokeLinecap: 0,
                    strokeLinejoin: 0,
                    strokeMiterlimit: 0,
                    strokeOpacity: 0,
                    strokeWidth: 0,
                    surfaceScale: 0,
                    systemLanguage: 0,
                    tableValues: 0,
                    targetX: 0,
                    targetY: 0,
                    textAnchor: 0,
                    textDecoration: 0,
                    textRendering: 0,
                    textLength: 0,
                    to: 0,
                    transform: 0,
                    u1: 0,
                    u2: 0,
                    underlinePosition: 0,
                    underlineThickness: 0,
                    unicode: 0,
                    unicodeBidi: 0,
                    unicodeRange: 0,
                    unitsPerEm: 0,
                    vAlphabetic: 0,
                    vHanging: 0,
                    vIdeographic: 0,
                    vMathematical: 0,
                    values: 0,
                    vectorEffect: 0,
                    version: 0,
                    vertAdvY: 0,
                    vertOriginX: 0,
                    vertOriginY: 0,
                    viewBox: 0,
                    viewTarget: 0,
                    visibility: 0,
                    widths: 0,
                    wordSpacing: 0,
                    writingMode: 0,
                    x: 0,
                    xHeight: 0,
                    x1: 0,
                    x2: 0,
                    xChannelSelector: 0,
                    xlinkActuate: 0,
                    xlinkArcrole: 0,
                    xlinkHref: 0,
                    xlinkRole: 0,
                    xlinkShow: 0,
                    xlinkTitle: 0,
                    xlinkType: 0,
                    xmlBase: 0,
                    xmlns: 0,
                    xmlnsXlink: 0,
                    xmlLang: 0,
                    xmlSpace: 0,
                    y: 0,
                    y1: 0,
                    y2: 0,
                    yChannelSelector: 0,
                    z: 0,
                    zoomAndPan: 0
                },
                DOMAttributeNames: {
                    accentHeight: "accent-height",
                    alignmentBaseline: "alignment-baseline",
                    arabicForm: "arabic-form",
                    baselineShift: "baseline-shift",
                    capHeight: "cap-height",
                    clipPath: "clip-path",
                    clipRule: "clip-rule",
                    colorInterpolation: "color-interpolation",
                    colorInterpolationFilters: "color-interpolation-filters",
                    colorProfile: "color-profile",
                    colorRendering: "color-rendering",
                    dominantBaseline: "dominant-baseline",
                    enableBackground: "enable-background",
                    fillOpacity: "fill-opacity",
                    fillRule: "fill-rule",
                    floodColor: "flood-color",
                    floodOpacity: "flood-opacity",
                    fontFamily: "font-family",
                    fontSize: "font-size",
                    fontSizeAdjust: "font-size-adjust",
                    fontStretch: "font-stretch",
                    fontStyle: "font-style",
                    fontVariant: "font-variant",
                    fontWeight: "font-weight",
                    glyphName: "glyph-name",
                    glyphOrientationHorizontal: "glyph-orientation-horizontal",
                    glyphOrientationVertical: "glyph-orientation-vertical",
                    horizAdvX: "horiz-adv-x",
                    horizOriginX: "horiz-origin-x",
                    imageRendering: "image-rendering",
                    letterSpacing: "letter-spacing",
                    lightingColor: "lighting-color",
                    markerEnd: "marker-end",
                    markerMid: "marker-mid",
                    markerStart: "marker-start",
                    overlinePosition: "overline-position",
                    overlineThickness: "overline-thickness",
                    paintOrder: "paint-order",
                    panose1: "panose-1",
                    pointerEvents: "pointer-events",
                    renderingIntent: "rendering-intent",
                    shapeRendering: "shape-rendering",
                    stopColor: "stop-color",
                    stopOpacity: "stop-opacity",
                    strikethroughPosition: "strikethrough-position",
                    strikethroughThickness: "strikethrough-thickness",
                    strokeDasharray: "stroke-dasharray",
                    strokeDashoffset: "stroke-dashoffset",
                    strokeLinecap: "stroke-linecap",
                    strokeLinejoin: "stroke-linejoin",
                    strokeMiterlimit: "stroke-miterlimit",
                    strokeOpacity: "stroke-opacity",
                    strokeWidth: "stroke-width",
                    textAnchor: "text-anchor",
                    textDecoration: "text-decoration",
                    textRendering: "text-rendering",
                    underlinePosition: "underline-position",
                    underlineThickness: "underline-thickness",
                    unicodeBidi: "unicode-bidi",
                    unicodeRange: "unicode-range",
                    unitsPerEm: "units-per-em",
                    vAlphabetic: "v-alphabetic",
                    vHanging: "v-hanging",
                    vIdeographic: "v-ideographic",
                    vMathematical: "v-mathematical",
                    vectorEffect: "vector-effect",
                    vertAdvY: "vert-adv-y",
                    vertOriginX: "vert-origin-x",
                    vertOriginY: "vert-origin-y",
                    wordSpacing: "word-spacing",
                    writingMode: "writing-mode",
                    xHeight: "x-height",
                    xlinkActuate: "xlink:actuate",
                    xlinkArcrole: "xlink:arcrole",
                    xlinkHref: "xlink:href",
                    xlinkRole: "xlink:role",
                    xlinkShow: "xlink:show",
                    xlinkTitle: "xlink:title",
                    xlinkType: "xlink:type",
                    xmlBase: "xml:base",
                    xmlnsXlink: "xmlns:xlink",
                    xmlLang: "xml:lang",
                    xmlSpace: "xml:space"
                }
            }
        },
        "xs/l": function(e, t, n) {
            var r = n("TYy9"),
                a = n("Ioao"),
                o = n("wclG");
            e.exports = function(e) {
                return o(a(e, void 0, r), e + "")
            }
        },
        xvhg: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("8rE2");

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                        } catch (s) {
                            a = !0, o = s
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return n
                    }
                }(e, t) || Object(r.a)(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        y1pI: function(e, t, n) {
            var r = n("ljhN");
            e.exports = function(e, t) {
                for (var n = e.length; n--;)
                    if (r(e[n][0], t)) return n;
                return -1
            }
        },
        y4QH: function(e, t) {
            var n = Math.max;
            e.exports = function(e, t, r, a) {
                for (var o = -1, i = e.length, c = r.length, s = -1, l = t.length, u = n(i - c, 0), p = Array(l + u), f = !a; ++s < l;) p[s] = t[s];
                for (; ++o < c;)(f || o < i) && (p[r[o]] = e[o]);
                for (; u--;) p[s++] = e[o++];
                return p
            }
        },
        yGk4: function(e, t, n) {
            var r = n("Cwc5")(n("Kz5y"), "Set");
            e.exports = r
        },
        yHx3: function(e, t) {
            var n = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = e.length,
                    r = new e.constructor(t);
                return t && "string" == typeof e[0] && n.call(e, "index") && (r.index = e.index, r.input = e.input), r
            }
        },
        yP5f: function(e, t, n) {
            var r = n("+K+b");
            e.exports = function(e, t) {
                var n = t ? r(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length)
            }
        },
        yYjG: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", (function() {
                    return r
                })), n.d(t, "b", (function() {
                    return a
                })), n.d(t, "c", (function() {
                    return o
                })),
                function(e) {
                    e.MOBILE_375 = "mobile-375", e.MOBILE_480 = "mobile-480", e.TABLET_768 = "tablet-768", e.TABLET_960 = "tablet-960", e.DESKTOP_1120 = "desktop-1120", e.DESKTOP_1440 = "desktop-1440", e.DESKTOP_1680 = "desktop-1680"
                }(r || (r = {}));
            var a = {
                    "mobile-375": {
                        cols: 4,
                        gutter: 8,
                        width: 375,
                        margin: "4.3%"
                    },
                    "mobile-480": {
                        cols: 4,
                        gutter: 8,
                        width: 480,
                        margin: "5%"
                    },
                    "tablet-768": {
                        cols: 8,
                        gutter: 16,
                        width: 768,
                        margin: "4.3%"
                    },
                    "tablet-960": {
                        cols: 12,
                        gutter: 16,
                        width: 960,
                        margin: "3.3%"
                    },
                    "desktop-1120": {
                        cols: 12,
                        gutter: 24,
                        width: 1120,
                        margin: "5.7%"
                    },
                    "desktop-1440": {
                        cols: 12,
                        gutter: 32,
                        width: 1440,
                        margin: "auto",
                        maxwidth: 1288
                    },
                    "desktop-1680": {
                        cols: 12,
                        gutter: 32,
                        width: 1680
                    }
                },
                o = function(e, t) {
                    return t ? "@media (max-width: ".concat(a[e].width, "px)") : "@media (min-width: ".concat(a[e].width, "px)")
                }
        },
        ytUd: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                a = n.n(r),
                o = n("6GH4"),
                i = n("NsYN"),
                c = n("Ehu6"),
                s = n("jQyn"),
                l = n("g4pe"),
                u = n.n(l),
                p = n("SRXQ"),
                f = n("AeFk"),
                d = (a.a.createElement, function(e) {
                    var t = Object(r.useRef)(),
                        n = e.marketo_success_redirect_url,
                        o = e.form_id,
                        i = e.marketo_munchkin_id,
                        c = e.base_url;
                    return Object(f.c)(a.a.Fragment, null, Object(f.c)("div", {
                        id: "marketoForm"
                    }, Object(f.c)("form", {
                        id: o ? "mktoForm".concat("_" + o) : "mktoForm",
                        "data-base-url": c,
                        "data-form-id": o,
                        "data-success-redirect-url": n,
                        "data-munchkin-id": i,
                        className: "marketing-embed-form js-marketing-embed-form--marketo",
                        ref: t
                    })), Object(f.c)(u.a, null, Object(f.c)("script", {
                        src: "//resources.asana.com/js/forms2/js/forms2.min.js",
                        key: "forms2"
                    }), Object(f.c)("script", {
                        src: Object(p.a)("js/page-specific/marketing-embed-form.js"),
                        key: "marketing-embed-form"
                    })))
                }),
                m = n("usKF"),
                h = n("FlQR"),
                g = (a.a.createElement, function(e) {
                    var t = e.marketo_success_redirect_url,
                        n = Object(r.useContext)(m.a),
                        a = h.isSandbox ? n.marketo_form_base_url_sandbox : n.marketo_form_base_url,
                        o = h.isSandbox ? n.marketo_munchkin_id_sandbox : n.marketo_munchkin_id;
                    Object(r.useEffect)((function() {
                        if (window.MarketoEmbedForm) {
                            var e = ".js-marketing-embed-form--marketo",
                                t = document.querySelector(e);
                            if (t) new window.MarketoEmbedForm({
                                baseUrl: a,
                                formId: t.dataset.formId,
                                munchkinId: o,
                                successRedirectUrl: t.dataset.successRedirectUrl
                            }).init();
                            else s.default.error("No marketo form found. Could not find element with class ".concat(e))
                        }
                    }), []);
                    var i = function(e, t) {
                        var n = t.filter((function(t) {
                            return t.language === e
                        }));
                        return n.length > 1 ? n[1] : n[0]
                    }(n.global_language, n.marketo_form_ids);
                    return Object(f.c)(d, {
                        base_url: a,
                        form_id: i && i.form_id,
                        marketo_munchkin_id: o,
                        marketo_success_redirect_url: t
                    })
                }),
                b = n("r3F2");
            a.a.createElement, t.default = function(e) {
                var t = e.label,
                    n = e.heading,
                    r = e.subheading,
                    a = e.redirectURL,
                    s = e.text;
                return Object(f.c)("div", {
                    className: "marketing-form-row"
                }, Object(f.c)("div", {
                    className: "textStack"
                }, t && Object(f.c)(o.default, t), n && Object(f.c)(i.default, n), r && Object(f.c)(c.a, r), s && Object(f.c)(b.a, {
                    html: s
                })), Object(f.c)("div", {
                    className: "marketing-form-wrapper"
                }, Object(f.c)(g, {
                    marketo_success_redirect_url: a
                })))
            }
        },
        zEG2: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("q1tI");

            function a() {
                var e = Object(r.useState)(null),
                    t = e[0],
                    n = e[1];
                return Object(r.useEffect)((function() {
                    window && AsanaStorage && n(AsanaStorage.getUserEmailCookie() || null)
                }), []), {
                    userEmail: t,
                    setUserEmail: function(e) {
                        window && AsanaStorage && (n(e), AsanaStorage.setUserEmailCookie(e))
                    }
                }
            }
        },
        zEVN: function(e, t, n) {
            var r = n("Gi0A"),
                a = n("sEf8"),
                o = n("mdPL"),
                i = o && o.isMap,
                c = i ? a(i) : r;
            e.exports = c
        },
        zOyy: function(e, t, n) {
            "use strict";

            function r(e, t) {
                void 0 === t && (t = {});
                for (var n = function(e) {
                        for (var t = [], n = 0; n < e.length;) {
                            var r = e[n];
                            if ("*" !== r && "+" !== r && "?" !== r)
                                if ("\\" !== r)
                                    if ("{" !== r)
                                        if ("}" !== r)
                                            if (":" !== r)
                                                if ("(" !== r) t.push({
                                                    type: "CHAR",
                                                    index: n,
                                                    value: e[n++]
                                                });
                                                else {
                                                    var a = 1,
                                                        o = "";
                                                    if ("?" === e[c = n + 1]) throw new TypeError('Pattern cannot start with "?" at ' + c);
                                                    for (; c < e.length;)
                                                        if ("\\" !== e[c]) {
                                                            if (")" === e[c]) {
                                                                if (0 === --a) {
                                                                    c++;
                                                                    break
                                                                }
                                                            } else if ("(" === e[c] && (a++, "?" !== e[c + 1])) throw new TypeError("Capturing groups are not allowed at " + c);
                                                            o += e[c++]
                                                        } else o += e[c++] + e[c++];
                                                    if (a) throw new TypeError("Unbalanced pattern at " + n);
                                                    if (!o) throw new TypeError("Missing pattern at " + n);
                                                    t.push({
                                                        type: "PATTERN",
                                                        index: n,
                                                        value: o
                                                    }), n = c
                                                }
                            else {
                                for (var i = "", c = n + 1; c < e.length;) {
                                    var s = e.charCodeAt(c);
                                    if (!(s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 || 95 === s)) break;
                                    i += e[c++]
                                }
                                if (!i) throw new TypeError("Missing parameter name at " + n);
                                t.push({
                                    type: "NAME",
                                    index: n,
                                    value: i
                                }), n = c
                            } else t.push({
                                type: "CLOSE",
                                index: n,
                                value: e[n++]
                            });
                            else t.push({
                                type: "OPEN",
                                index: n,
                                value: e[n++]
                            });
                            else t.push({
                                type: "ESCAPED_CHAR",
                                index: n++,
                                value: e[n++]
                            });
                            else t.push({
                                type: "MODIFIER",
                                index: n,
                                value: e[n++]
                            })
                        }
                        return t.push({
                            type: "END",
                            index: n,
                            value: ""
                        }), t
                    }(e), r = t.prefixes, a = void 0 === r ? "./" : r, o = "[^" + i(t.delimiter || "/#?") + "]+?", c = [], s = 0, l = 0, u = "", p = function(e) {
                        if (l < n.length && n[l].type === e) return n[l++].value
                    }, f = function(e) {
                        var t = p(e);
                        if (void 0 !== t) return t;
                        var r = n[l],
                            a = r.type,
                            o = r.index;
                        throw new TypeError("Unexpected " + a + " at " + o + ", expected " + e)
                    }, d = function() {
                        for (var e, t = ""; e = p("CHAR") || p("ESCAPED_CHAR");) t += e;
                        return t
                    }; l < n.length;) {
                    var m = p("CHAR"),
                        h = p("NAME"),
                        g = p("PATTERN");
                    if (h || g) {
                        var b = m || ""; - 1 === a.indexOf(b) && (u += b, b = ""), u && (c.push(u), u = ""), c.push({
                            name: h || s++,
                            prefix: b,
                            suffix: "",
                            pattern: g || o,
                            modifier: p("MODIFIER") || ""
                        })
                    } else {
                        var v = m || p("ESCAPED_CHAR");
                        if (v) u += v;
                        else if (u && (c.push(u), u = ""), p("OPEN")) {
                            b = d();
                            var y = p("NAME") || "",
                                _ = p("PATTERN") || "",
                                j = d();
                            f("CLOSE"), c.push({
                                name: y || (_ ? s++ : ""),
                                pattern: y && !_ ? o : _,
                                prefix: b,
                                suffix: j,
                                modifier: p("MODIFIER") || ""
                            })
                        } else f("END")
                    }
                }
                return c
            }

            function a(e, t) {
                void 0 === t && (t = {});
                var n = c(t),
                    r = t.encode,
                    a = void 0 === r ? function(e) {
                        return e
                    } : r,
                    o = t.validate,
                    i = void 0 === o || o,
                    s = e.map((function(e) {
                        if ("object" === typeof e) return new RegExp("^(?:" + e.pattern + ")$", n)
                    }));
                return function(t) {
                    for (var n = "", r = 0; r < e.length; r++) {
                        var o = e[r];
                        if ("string" !== typeof o) {
                            var c = t ? t[o.name] : void 0,
                                l = "?" === o.modifier || "*" === o.modifier,
                                u = "*" === o.modifier || "+" === o.modifier;
                            if (Array.isArray(c)) {
                                if (!u) throw new TypeError('Expected "' + o.name + '" to not repeat, but got an array');
                                if (0 === c.length) {
                                    if (l) continue;
                                    throw new TypeError('Expected "' + o.name + '" to not be empty')
                                }
                                for (var p = 0; p < c.length; p++) {
                                    var f = a(c[p], o);
                                    if (i && !s[r].test(f)) throw new TypeError('Expected all "' + o.name + '" to match "' + o.pattern + '", but got "' + f + '"');
                                    n += o.prefix + f + o.suffix
                                }
                            } else if ("string" !== typeof c && "number" !== typeof c) {
                                if (!l) {
                                    var d = u ? "an array" : "a string";
                                    throw new TypeError('Expected "' + o.name + '" to be ' + d)
                                }
                            } else {
                                f = a(String(c), o);
                                if (i && !s[r].test(f)) throw new TypeError('Expected "' + o.name + '" to match "' + o.pattern + '", but got "' + f + '"');
                                n += o.prefix + f + o.suffix
                            }
                        } else n += o
                    }
                    return n
                }
            }

            function o(e, t, n) {
                void 0 === n && (n = {});
                var r = n.decode,
                    a = void 0 === r ? function(e) {
                        return e
                    } : r;
                return function(n) {
                    var r = e.exec(n);
                    if (!r) return !1;
                    for (var o = r[0], i = r.index, c = Object.create(null), s = function(e) {
                            if (void 0 === r[e]) return "continue";
                            var n = t[e - 1];
                            "*" === n.modifier || "+" === n.modifier ? c[n.name] = r[e].split(n.prefix + n.suffix).map((function(e) {
                                return a(e, n)
                            })) : c[n.name] = a(r[e], n)
                        }, l = 1; l < r.length; l++) s(l);
                    return {
                        path: o,
                        index: i,
                        params: c
                    }
                }
            }

            function i(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function c(e) {
                return e && e.sensitive ? "" : "i"
            }

            function s(e, t, n) {
                void 0 === n && (n = {});
                for (var r = n.strict, a = void 0 !== r && r, o = n.start, s = void 0 === o || o, l = n.end, u = void 0 === l || l, p = n.encode, f = void 0 === p ? function(e) {
                        return e
                    } : p, d = "[" + i(n.endsWith || "") + "]|$", m = "[" + i(n.delimiter || "/#?") + "]", h = s ? "^" : "", g = 0, b = e; g < b.length; g++) {
                    var v = b[g];
                    if ("string" === typeof v) h += i(f(v));
                    else {
                        var y = i(f(v.prefix)),
                            _ = i(f(v.suffix));
                        if (v.pattern)
                            if (t && t.push(v), y || _)
                                if ("+" === v.modifier || "*" === v.modifier) {
                                    var j = "*" === v.modifier ? "?" : "";
                                    h += "(?:" + y + "((?:" + v.pattern + ")(?:" + _ + y + "(?:" + v.pattern + "))*)" + _ + ")" + j
                                } else h += "(?:" + y + "(" + v.pattern + ")" + _ + ")" + v.modifier;
                        else h += "(" + v.pattern + ")" + v.modifier;
                        else h += "(?:" + y + _ + ")" + v.modifier
                    }
                }
                if (u) a || (h += m + "?"), h += n.endsWith ? "(?=" + d + ")" : "$";
                else {
                    var w = e[e.length - 1],
                        O = "string" === typeof w ? m.indexOf(w[w.length - 1]) > -1 : void 0 === w;
                    a || (h += "(?:" + m + "(?=" + d + "))?"), O || (h += "(?=" + m + "|" + d + ")")
                }
                return new RegExp(h, c(n))
            }

            function l(e, t, n) {
                return e instanceof RegExp ? function(e, t) {
                    if (!t) return e;
                    var n = e.source.match(/\((?!\?)/g);
                    if (n)
                        for (var r = 0; r < n.length; r++) t.push({
                            name: r,
                            prefix: "",
                            suffix: "",
                            modifier: "",
                            pattern: ""
                        });
                    return e
                }(e, t) : Array.isArray(e) ? function(e, t, n) {
                    var r = e.map((function(e) {
                        return l(e, t, n).source
                    }));
                    return new RegExp("(?:" + r.join("|") + ")", c(n))
                }(e, t, n) : function(e, t, n) {
                    return s(r(e, n), t, n)
                }(e, t, n)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parse = r, t.compile = function(e, t) {
                return a(r(e, t), t)
            }, t.tokensToFunction = a, t.match = function(e, t) {
                var n = [];
                return o(l(e, n, t), n, t)
            }, t.regexpToFunction = o, t.tokensToRegexp = s, t.pathToRegexp = l
        },
        zZ0H: function(e, t) {
            e.exports = function(e) {
                return e
            }
        },
        zbgk: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("g4pe"),
                i = n.n(o),
                c = n("AeFk");
            a.a.createElement;

            function s(e) {
                var t = e.fonts,
                    n = {
                        woff: "woff",
                        woff2: "woff2",
                        ttf: "truetype",
                        svg: "svg",
                        eot: "embedded-opentype"
                    };
                return Object(c.c)(i.a, null, t.map((function(e) {
                    var t = e.url;
                    return e.formats.map((function(e) {
                        return Object(c.c)("link", {
                            rel: "preload",
                            as: "font",
                            type: "font/".concat(n[e] || e),
                            href: "".concat(t, ".").concat(e),
                            crossOrigin: "anonymous"
                        })
                    }))
                })))
            }
        },
        zoAU: function(e, t, n) {
            var r = n("PqPU"),
                a = n("mxvI"),
                o = n("KckH"),
                i = n("pSHO");
            e.exports = function(e, t) {
                return r(e) || a(e, t) || o(e, t) || i()
            }
        },
        zoYe: function(e, t, n) {
            var r = n("nmnc"),
                a = n("eUgh"),
                o = n("Z0cm"),
                i = n("/9aa"),
                c = r ? r.prototype : void 0,
                s = c ? c.toString : void 0;
            e.exports = function e(t) {
                if ("string" == typeof t) return t;
                if (o(t)) return a(t, e) + "";
                if (i(t)) return s ? s.call(t) : "";
                var n = t + "";
                return "0" == n && 1 / t == -Infinity ? "-0" : n
            }
        }
    }
]);