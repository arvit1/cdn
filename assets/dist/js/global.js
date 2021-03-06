var IS_SANDBOX = !1;
/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    var n = [],
        r = e.document,
        i = n.slice,
        o = n.concat,
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        p = {},
        f = "2.2.0",
        d = function(e, t) {
            return new d.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        g = /^-ms-/,
        m = /-([\da-z])/gi,
        v = function(e, t) {
            return t.toUpperCase()
        };

    function y(e) {
        var t = !!e && "length" in e && e.length,
            n = d.type(e);
        return "function" !== n && !d.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    d.fn = d.prototype = {
        jquery: f,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : i.call(this)
        },
        pushStack: function(e) {
            var t = d.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return d.each(this, e)
        },
        map: function(e) {
            return this.pushStack(d.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, d.extend = d.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || d.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (d.isPlainObject(r) || (i = d.isArray(r))) ? (i ? (i = !1, o = n && d.isArray(n) ? n : []) : o = n && d.isPlainObject(n) ? n : {}, a[t] = d.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, d.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === d.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !d.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === d.type(e) && !e.nodeType && !d.isWindow(e) && !(e.constructor && !c.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = d.trim(e)) && (1 === e.indexOf("use strict") ? ((t = r.createElement("script")).text = e, r.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(g, "ms-").replace(m, v)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (y(e))
                for (n = e.length; n > r && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? d.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; o > i; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (y(e))
                for (r = e.length; r > a; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), d.isFunction(e) ? (r = i.call(arguments, 2), (o = function() {
                return e.apply(t || this, r.concat(i.call(arguments)))
            }).guid = e.guid = e.guid || d.guid++, o) : void 0
        },
        now: Date.now,
        support: p
    }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    }));
    var b = function(e) {
        var t, n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            x = e.document,
            T = 0,
            A = 0,
            C = ie(),
            E = ie(),
            _ = ie(),
            S = function(e, t) {
                return e === t && (p = !0), 0
            },
            k = {}.hasOwnProperty,
            N = [],
            H = N.pop,
            I = N.push,
            j = N.push,
            O = N.slice,
            L = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            P = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            q = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            U = new RegExp("^" + M + "*," + M + "*"),
            $ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            W = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            G = new RegExp(P),
            X = new RegExp("^" + R + "$"),
            z = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + D + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            Z = /'|\\/g,
            ee = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            ne = function() {
                f()
            };
        try {
            j.apply(N = O.call(x.childNodes), x.childNodes), N[x.childNodes.length].nodeType
        } catch (e) {
            j = {
                apply: N.length ? function(e, t) {
                    I.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, r, i) {
            var o, s, l, c, p, h, v, y, T = t && t.ownerDocument,
                A = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== A && 9 !== A && 11 !== A) return r;
            if (!i && ((t ? t.ownerDocument || t : x) !== d && f(t), t = t || d, g)) {
                if (11 !== A && (h = K.exec(e)))
                    if (o = h[1]) {
                        if (9 === A) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (T && (l = T.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (h[2]) return j.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !_[e + " "] && (!m || !m.test(e))) {
                    if (1 !== A) T = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(Z, "\\$&") : t.setAttribute("id", c = w), s = (v = a(e)).length, p = X.test(c) ? "#" + c : "[id='" + c + "']"; s--;) v[s] = p + " " + he(v[s]);
                        y = v.join(","), T = Q.test(e) && fe(t.parentNode) || t
                    }
                    if (y) try {
                        return j.apply(r, T.querySelectorAll(y)), r
                    } catch (e) {} finally {
                        c === w && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ie() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function oe(e) {
            return e[w] = !0, e
        }

        function ae(e) {
            var t = d.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function se(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function ue(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function le(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function ce(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return oe((function(t) {
                return t = +t, oe((function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                }))
            }))
        }

        function fe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = re.support = {}, o = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, f = re.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : x;
                return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), n.attributes = ae((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ae((function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ae((function(e) {
                    return h.appendChild(e).id = w, !d.getElementsByName || !d.getElementsByName(w).length
                })), n.getById ? (r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, r.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete r.find.ID, r.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0
                }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ae((function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + D + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                })), ae((function(e) {
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae((function(e) {
                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", P)
                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, S = t ? function(e, t) {
                    if (e === t) return p = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === x && b(x, e) ? -1 : t === d || t.ownerDocument === x && b(x, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return p = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? L(c, e) - L(c, t) : 0;
                    if (i === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ue(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0
                }, d) : d
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && f(e), t = t.replace(W, "='$1']"), n.matchesSelector && g && !_[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return re(t, d, null, [e]).length > 0
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && f(e), b(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== d && f(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (p = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), p) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = re.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = re.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: z,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ee, te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = re.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (d = (l = (c = (p = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (b = d = 0) || h.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            c[e] = [T, d, b];
                                            break
                                        }
                                } else if (y && (b = d = (l = (c = (p = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === b)
                                    for (;
                                        (f = ++d && f && f[g] || (b = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((c = (p = f[w] || (f[w] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] = [T, b]), f !== t)););
                                return (b -= i) === r || b % r == 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? oe((function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = L(e, o[a])] = !(n[r] = o[a])
                        })) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: oe((function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[w] ? oe((function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        })) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: oe((function(e) {
                        return function(t) {
                            return re(e, t).length > 0
                        }
                    })),
                    contains: oe((function(e) {
                        return e = e.replace(ee, te),
                            function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                    })),
                    lang: oe((function(e) {
                        return X.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(ee, te).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe((function() {
                        return [0]
                    })),
                    last: pe((function(e, t) {
                        return [t - 1]
                    })),
                    eq: pe((function(e, t, n) {
                        return [0 > n ? n + t : n]
                    })),
                    even: pe((function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    })),
                    odd: pe((function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    })),
                    lt: pe((function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    })),
                    gt: pe((function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    }))
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = le(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = ce(t);

        function de() {}

        function he(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function ge(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = A++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l, c = [T, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if ((s = (u = (l = t[w] || (t[w] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[r]) && s[0] === T && s[1] === o) return c[2] = s[2];
                            if (u[r] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function me(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function ve(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function ye(e, t, n, r, i, o) {
            return r && !r[w] && (r = ye(r)), i && !i[w] && (i = ye(i, o)), oe((function(o, a, s, u) {
                var l, c, p, f = [],
                    d = [],
                    h = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; i > r; r++) re(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : ve(g, f, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, v, s, u), r)
                    for (l = ve(v, d), r(l, [], s, u), c = l.length; c--;)(p = l[c]) && (v[d[c]] = !(m[d[c]] = p));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = v.length; c--;)(p = v[c]) && l.push(m[c] = p);
                            i(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(p = v[c]) && (l = i ? L(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                    }
                } else v = ve(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : j.apply(a, v)
            }))
        }

        function be(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ge((function(e) {
                    return e === t
                }), s, !0), p = ge((function(e) {
                    return L(t, e) > -1
                }), s, !0), f = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
                    return t = null, i
                }]; o > u; u++)
                if (n = r.relative[e[u].type]) f = [ge(me(f), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
                        for (i = ++u; o > i && !r.relative[e[i].type]; i++);
                        return ye(u > 1 && me(f), u > 1 && he(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, i > u && be(e.slice(u, i)), o > i && be(e = e.slice(i)), o > i && he(e))
                    }
                    f.push(n)
                }
            return me(f)
        }

        function we(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                    var p, h, m, v = 0,
                        y = "0",
                        b = o && [],
                        w = [],
                        x = l,
                        A = o || i && r.find.TAG("*", c),
                        C = T += null == x ? 1 : Math.random() || .1,
                        E = A.length;
                    for (c && (l = a === d || a || c); y !== E && null != (p = A[y]); y++) {
                        if (i && p) {
                            for (h = 0, a || p.ownerDocument === d || (f(p), s = !g); m = e[h++];)
                                if (m(p, a || d, s)) {
                                    u.push(p);
                                    break
                                }
                            c && (T = C)
                        }
                        n && ((p = !m && p) && v--, o && b.push(p))
                    }
                    if (v += y, n && y !== v) {
                        for (h = 0; m = t[h++];) m(b, w, a, s);
                        if (o) {
                            if (v > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = H.call(u));
                            w = ve(w)
                        }
                        j.apply(u, w), c && !o && w.length > 0 && v + t.length > 1 && re.uniqueSort(u)
                    }
                    return c && (T = C, l = x), b
                };
            return n ? oe(o) : o
        }
        return de.prototype = r.filters = r.pseudos, r.setFilters = new de, a = re.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in (!n || (i = U.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = z[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : E(e, u).slice(0)
        }, s = re.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = _[e + " "];
            if (!o) {
                for (t || (t = a(e)), n = t.length; n--;)(o = be(t[n]))[w] ? r.push(o) : i.push(o);
                (o = _(e, we(i, r))).selector = e
            }
            return o
        }, u = re.select = function(e, t, i, o) {
            var u, l, c, p, f, d = "function" == typeof e && e,
                h = !o && a(e = d.selector || e);
            if (i = i || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(ee, te), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (u = z.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u], !r.relative[p = c.type]);)
                    if ((f = r.find[p]) && (o = f(c.matches[0].replace(ee, te), Q.test(l[0].type) && fe(t.parentNode) || t))) {
                        if (l.splice(u, 1), !(e = o.length && he(l))) return j.apply(i, o), i;
                        break
                    }
            }
            return (d || s(e, h))(o, t, !g, i, !t || Q.test(e) && fe(t.parentNode) || t), i
        }, n.sortStable = w.split("").sort(S).join("") === w, n.detectDuplicates = !!p, f(), n.sortDetached = ae((function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("div"))
        })), ae((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || se("type|href|height|width", (function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ae((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || se("value", (function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        })), ae((function(e) {
            return null == e.getAttribute("disabled")
        })) || se(D, (function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        })), re
    }(e);
    d.find = b, d.expr = b.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = b.uniqueSort, d.text = b.getText, d.isXMLDoc = b.isXML, d.contains = b.contains;
    var w = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && d(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        x = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        T = d.expr.match.needsContext,
        A = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        C = /^.[^:#\[\.,]*$/;

    function E(e, t, n) {
        if (d.isFunction(t)) return d.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        }));
        if (t.nodeType) return d.grep(e, (function(e) {
            return e === t !== n
        }));
        if ("string" == typeof t) {
            if (C.test(t)) return d.filter(t, e, n);
            t = d.filter(t, e)
        }
        return d.grep(e, (function(e) {
            return s.call(t, e) > -1 !== n
        }))
    }
    d.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? d.find.matchesSelector(r, e) ? [r] : [] : d.find.matches(e, d.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, d.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(d(e).filter((function() {
                for (t = 0; n > t; t++)
                    if (d.contains(i[t], this)) return !0
            })));
            for (t = 0; n > t; t++) d.find(e, i[t], r);
            return (r = this.pushStack(n > 1 ? d.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(E(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(E(this, e || [], !0))
        },
        is: function(e) {
            return !!E(this, "string" == typeof e && T.test(e) ? d(e) : e || [], !1).length
        }
    });
    var _, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || _, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : S.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && d.isPlainObject(t))
                    for (i in t) d.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = r, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this))
    }).prototype = d.fn, _ = d(r);
    var k = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    d.fn.extend({
        has: function(e) {
            var t = d(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; n > e; e++)
                    if (d.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = T.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? d.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(d(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), d.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || d.merge([], e.childNodes)
        }
    }, (function(e, t) {
        d.fn[e] = function(n, r) {
            var i = d.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = d.filter(r, i)), this.length > 1 && (N[e] || d.uniqueSort(i), k.test(e) && i.reverse()), this.pushStack(i)
        }
    }));
    var I, j = /\S+/g;

    function O() {
        r.removeEventListener("DOMContentLoaded", O), e.removeEventListener("load", O), d.ready()
    }
    d.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return d.each(e.match(j) || [], (function(e, n) {
                t[n] = !0
            })), t
        }(e) : d.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        d.each(n, (function(n, r) {
                            d.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== d.type(r) && t(r)
                        }))
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return d.each(arguments, (function(e, t) {
                        for (var n;
                            (n = d.inArray(t, o, n)) > -1;) o.splice(n, 1), s >= n && s--
                    })), this
                },
                has: function(e) {
                    return e ? d.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, d.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return d.Deferred((function(n) {
                            d.each(t, (function(t, o) {
                                var a = d.isFunction(e[t]) && e[t];
                                i[o[1]]((function() {
                                    var e = a && a.apply(this, arguments);
                                    e && d.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? d.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, d.each(t, (function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add((function() {
                    n = s
                }), t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            })), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, o = 0,
                a = i.call(arguments),
                s = a.length,
                u = 1 !== s || e && d.isFunction(e.promise) ? s : 0,
                l = 1 === u ? e : d.Deferred(),
                c = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? i.call(arguments) : o, r === t ? l.notifyWith(n, r) : --u || l.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > o; o++) a[o] && d.isFunction(a[o].promise) ? a[o].promise().progress(c(o, n, t)).done(c(o, r, a)).fail(l.reject) : --u;
            return u || l.resolveWith(r, a), l.promise()
        }
    }), d.fn.ready = function(e) {
        return d.ready.promise().done(e), this
    }, d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? d.readyWait++ : d.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (I.resolveWith(r, [d]), d.fn.triggerHandler && (d(r).triggerHandler("ready"), d(r).off("ready"))))
        }
    }), d.ready.promise = function(t) {
        return I || (I = d.Deferred(), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(d.ready) : (r.addEventListener("DOMContentLoaded", O), e.addEventListener("load", O))), I.promise(t)
    }, d.ready.promise();
    var L = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === d.type(n))
                for (s in i = !0, n) L(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, d.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(d(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        D = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function M() {
        this.expando = d.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!D(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, D(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, d.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    d.isArray(t) ? r = t.concat(t.map(d.camelCase)) : (i = d.camelCase(t), t in o ? r = [t, i] : r = (r = i) in o ? [r] : r.match(j) || []), n = r.length;
                    for (; n--;) delete o[r[n]]
                }(void 0 === t || d.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !d.isEmptyObject(t)
        }
    };
    var R = new M,
        F = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /[A-Z]/g;

    function B(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(q, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? d.parseJSON(n) : n)
                } catch (e) {}
                F.set(e, t, n)
            } else n = void 0;
        return n
    }
    d.extend({
        hasData: function(e) {
            return F.hasData(e) || R.hasData(e)
        },
        data: function(e, t, n) {
            return F.access(e, t, n)
        },
        removeData: function(e, t) {
            F.remove(e, t)
        },
        _data: function(e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function(e, t) {
            R.remove(e, t)
        }
    }), d.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = F.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (0 === (r = a[n].name).indexOf("data-") && (r = d.camelCase(r.slice(5)), B(o, r, i[r])));
                    R.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                F.set(this, e)
            })) : L(this, (function(t) {
                var n, r;
                if (o && void 0 === t) {
                    if (void 0 !== (n = F.get(o, e) || F.get(o, e.replace(q, "-$&").toLowerCase()))) return n;
                    if (r = d.camelCase(e), void 0 !== (n = F.get(o, r))) return n;
                    if (void 0 !== (n = B(o, r, void 0))) return n
                } else r = d.camelCase(e), this.each((function() {
                    var n = F.get(this, r);
                    F.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && F.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                F.remove(this, e)
            }))
        }
    }), d.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || d.isArray(n) ? r = R.access(e, t, d.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = d.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = d._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                d.dequeue(e, t)
            }), o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return R.get(e, n) || R.access(e, n, {
                empty: d.Callbacks("once memory").add((function() {
                    R.remove(e, [t + "queue", n])
                }))
            })
        }
    }), d.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = d.queue(this, e, t);
                d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                d.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = d.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = R.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var U = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $ = new RegExp("^(?:([+-])=|)(" + U + ")([a-z%]*)$", "i"),
        W = ["Top", "Right", "Bottom", "Left"],
        G = function(e, t) {
            return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
        };

    function X(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return d.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (d.cssNumber[t] ? "" : "px"),
            c = (d.cssNumber[t] || "px" !== l && +u) && $.exec(d.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                c /= o = o || ".5", d.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var z = /^(?:checkbox|radio)$/i,
        V = /<([\w:-]+)/,
        Y = /^$|\/(?:java|ecma)script/i,
        J = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function K(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], n) : n
    }

    function Q(e, t) {
        for (var n = 0, r = e.length; r > n; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
    }
    J.optgroup = J.option, J.tbody = J.tfoot = J.colgroup = J.caption = J.thead, J.th = J.td;
    var Z = /<|&#?\w+;/;

    function ee(e, t, n, r, i) {
        for (var o, a, s, u, l, c, p = t.createDocumentFragment(), f = [], h = 0, g = e.length; g > h; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === d.type(o)) d.merge(f, o.nodeType ? [o] : o);
                else if (Z.test(o)) {
            for (a = a || p.appendChild(t.createElement("div")), s = (V.exec(o) || ["", ""])[1].toLowerCase(), u = J[s] || J._default, a.innerHTML = u[1] + d.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            d.merge(f, a.childNodes), (a = p.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (p.textContent = "", h = 0; o = f[h++];)
            if (r && d.inArray(o, r) > -1) i && i.push(o);
            else if (l = d.contains(o.ownerDocument, o), a = K(p.appendChild(o), "script"), l && Q(a), n)
            for (c = 0; o = a[c++];) Y.test(o.type || "") && n.push(o);
        return p
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var te = /^key/,
        ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        re = /^([^.]*)(?:\.(.+)|)/;

    function ie() {
        return !0
    }

    function oe() {
        return !1
    }

    function ae() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = oe;
        else if (!i) return this;
        return 1 === o && (a = i, (i = function(e) {
            return d().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = d.guid++)), e.each((function() {
            d.event.add(this, t, i, r, n)
        }))
    }
    d.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, h, g, m, v = R.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = d.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return void 0 !== d && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(j) || [""]).length; l--;) h = m = (s = re.exec(t[l]) || [])[1], g = (s[2] || "").split(".").sort(), h && (p = d.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, p = d.event.special[h] || {}, c = d.extend({
                    type: h,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && d.expr.match.needsContext.test(i),
                    namespace: g.join(".")
                }, o), (f = u[h]) || ((f = u[h] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, r, g, a) || e.addEventListener && e.addEventListener(h, a)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), d.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, h, g, m, v = R.hasData(e) && R.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(j) || [""]).length; l--;)
                    if (h = m = (s = re.exec(t[l]) || [])[1], g = (s[2] || "").split(".").sort(), h) {
                        for (p = d.event.special[h] || {}, f = u[h = (r ? p.delegateType : p.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
                        a && !f.length && (p.teardown && !1 !== p.teardown.call(e, g, v.handle) || d.removeEvent(e, h, v.handle), delete u[h])
                    } else
                        for (h in u) d.event.remove(e, h + t[l], n, r, !0);
                d.isEmptyObject(u) && R.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = d.event.fix(e);
            var t, n, r, o, a, s = [],
                u = i.call(arguments),
                l = (R.get(this, "events") || {})[e.type] || [],
                c = d.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = d.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (a = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(a.namespace)) && (e.handleObj = a, e.data = a.data, void 0 !== (r = ((d.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? d(i, this).index(u) > -1 : d.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, a = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || r).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[d.expando]) return e;
            var t, n, i, o = e.type,
                a = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = ne.test(o) ? this.mouseHooks : te.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new d.Event(a), t = i.length; t--;) e[n = i[t]] = a[n];
            return e.target || (e.target = r), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, a) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ae() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ae() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return d.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, d.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, d.Event = function(e, t) {
        return this instanceof d.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ie : oe) : this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), void(this[d.expando] = !0)) : new d.Event(e, t)
    }, d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: oe,
        isPropagationStopped: oe,
        isImmediatePropagationStopped: oe,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ie, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ie, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ie, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        d.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !d.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), d.fn.extend({
        on: function(e, t, n, r) {
            return se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, d(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = oe), this.each((function() {
                d.event.remove(this, e, n, t)
            }))
        }
    });
    var ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        le = /<script|<style|<link/i,
        ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pe = /^true\/(.*)/,
        fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function de(e, t) {
        return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }

    function he(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ge(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (R.hasData(e) && (o = R.access(e), a = R.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; r > n; n++) d.event.add(t, i, l[i][n]);
            F.hasData(e) && (s = F.access(e), u = d.extend({}, s), F.set(t, u))
        }
    }

    function ve(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && z.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function ye(e, t, n, r) {
        t = o.apply([], t);
        var i, a, s, u, l, c, f = 0,
            h = e.length,
            g = h - 1,
            m = t[0],
            v = d.isFunction(m);
        if (v || h > 1 && "string" == typeof m && !p.checkClone && ce.test(m)) return e.each((function(i) {
            var o = e.eq(i);
            v && (t[0] = m.call(this, i, o.html())), ye(o, t, n, r)
        }));
        if (h && (a = (i = ee(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (u = (s = d.map(K(i, "script"), he)).length; h > f; f++) l = i, f !== g && (l = d.clone(l, !0, !0), u && d.merge(s, K(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, d.map(s, ge), f = 0; u > f; f++) l = s[f], Y.test(l.type || "") && !R.access(l, "globalEval") && d.contains(c, l) && (l.src ? d._evalUrl && d._evalUrl(l.src) : d.globalEval(l.textContent.replace(fe, "")))
        }
        return e
    }

    function be(e, t, n) {
        for (var r, i = t ? d.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || d.cleanData(K(r)), r.parentNode && (n && d.contains(r.ownerDocument, r) && Q(K(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    d.extend({
        htmlPrefilter: function(e) {
            return e.replace(ue, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = d.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
                for (a = K(s), r = 0, i = (o = K(e)).length; i > r; r++) ve(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || K(e), a = a || K(s), r = 0, i = o.length; i > r; r++) me(o[r], a[r]);
                else me(e, s);
            return (a = K(s, "script")).length > 0 && Q(a, !u && K(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = d.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (D(n)) {
                    if (t = n[R.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? d.event.remove(n, r) : d.removeEvent(n, r, t.handle);
                        n[R.expando] = void 0
                    }
                    n[F.expando] && (n[F.expando] = void 0)
                }
        }
    }), d.fn.extend({
        domManip: ye,
        detach: function(e) {
            return be(this, e, !0)
        },
        remove: function(e) {
            return be(this, e)
        },
        text: function(e) {
            return L(this, (function(e) {
                return void 0 === e ? d.text(this) : this.empty().each((function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return ye(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || de(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return ye(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = de(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return ye(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return ye(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (d.cleanData(K(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return d.clone(this, e, t)
            }))
        },
        html: function(e) {
            return L(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !le.test(e) && !J[(V.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = d.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) 1 === (t = this[n] || {}).nodeType && (d.cleanData(K(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return ye(this, arguments, (function(t) {
                var n = this.parentNode;
                d.inArray(this, e) < 0 && (d.cleanData(K(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        d.fn[e] = function(e) {
            for (var n, r = [], i = d(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), d(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var we, xe = {
        HTML: "block",
        BODY: "block"
    };

    function Te(e, t) {
        var n = d(t.createElement(e)).appendTo(t.body),
            r = d.css(n[0], "display");
        return n.detach(), r
    }

    function Ae(e) {
        var t = r,
            n = xe[e];
        return n || ("none" !== (n = Te(e, t)) && n || ((t = (we = (we || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Te(e, t), we.detach()), xe[e] = n), n
    }
    var Ce = /^margin/,
        Ee = new RegExp("^(" + U + ")(?!px)[a-z%]+$", "i"),
        _e = function(t) {
            var n = t.ownerDocument.defaultView;
            return n.opener || (n = e), n.getComputedStyle(t)
        },
        Se = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        },
        ke = r.documentElement;

    function Ne(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || _e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || d.contains(e.ownerDocument, e) || (a = d.style(e, t)), !p.pixelMarginRight() && Ee.test(a) && Ce.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function He(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, i, o, a = r.createElement("div"),
            s = r.createElement("div");
        if (s.style) {
            function u() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", ke.appendChild(a);
                var r = e.getComputedStyle(s);
                t = "1%" !== r.top, o = "2px" === r.marginLeft, n = "4px" === r.width, s.style.marginRight = "50%", i = "4px" === r.marginRight, ke.removeChild(a)
            }
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), d.extend(p, {
                pixelPosition: function() {
                    return u(), t
                },
                boxSizingReliable: function() {
                    return null == n && u(), n
                },
                pixelMarginRight: function() {
                    return null == n && u(), i
                },
                reliableMarginLeft: function() {
                    return null == n && u(), o
                },
                reliableMarginRight: function() {
                    var t, n = s.appendChild(r.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", ke.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), ke.removeChild(a), s.removeChild(n), t
                }
            })
        }
    }();
    var Ie = /^(none|table(?!-c[ea]).+)/,
        je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Oe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Le = ["Webkit", "O", "Moz", "ms"],
        De = r.createElement("div").style;

    function Me(e) {
        if (e in De) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Le.length; n--;)
            if ((e = Le[n] + t) in De) return e
    }

    function Re(e, t, n) {
        var r = $.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Fe(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += d.css(e, n + W[o], !0, i)), r ? ("content" === n && (a -= d.css(e, "padding" + W[o], !0, i)), "margin" !== n && (a -= d.css(e, "border" + W[o] + "Width", !0, i))) : (a += d.css(e, "padding" + W[o], !0, i), "padding" !== n && (a += d.css(e, "border" + W[o] + "Width", !0, i)));
        return a
    }

    function Pe(t, n, i) {
        var o = !0,
            a = "width" === n ? t.offsetWidth : t.offsetHeight,
            s = _e(t),
            u = "border-box" === d.css(t, "boxSizing", !1, s);
        if (r.msFullscreenElement && e.top !== e && t.getClientRects().length && (a = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= a || null == a) {
            if ((0 > (a = Ne(t, n, s)) || null == a) && (a = t.style[n]), Ee.test(a)) return a;
            o = u && (p.boxSizingReliable() || a === t.style[n]), a = parseFloat(a) || 0
        }
        return a + Fe(t, n, i || (u ? "border" : "content"), o, s) + "px"
    }

    function qe(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)(r = e[a]).style && (o[a] = R.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && G(r) && (o[a] = R.access(r, "olddisplay", Ae(r.nodeName)))) : (i = G(r), "none" === n && i || R.set(r, "olddisplay", i ? n : d.css(r, "display"))));
        for (a = 0; s > a; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function Be(e, t, n, r, i) {
        return new Be.prototype.init(e, t, n, r, i)
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ne(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = d.camelCase(t),
                    u = e.style;
                return t = d.cssProps[s] || (d.cssProps[s] = Me(s) || s), a = d.cssHooks[t] || d.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = $.exec(n)) && i[1] && (n = X(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (d.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = d.camelCase(t);
            return t = d.cssProps[s] || (d.cssProps[s] = Me(s) || s), (a = d.cssHooks[t] || d.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ne(e, t, r)), "normal" === i && t in Oe && (i = Oe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), d.each(["height", "width"], (function(e, t) {
        d.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Ie.test(d.css(e, "display")) && 0 === e.offsetWidth ? Se(e, je, (function() {
                    return Pe(e, t, r)
                })) : Pe(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i, o = r && _e(e),
                    a = r && Fe(e, t, r, "border-box" === d.css(e, "boxSizing", !1, o), o);
                return a && (i = $.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = d.css(e, t)), Re(0, n, a)
            }
        }
    })), d.cssHooks.marginLeft = He(p.reliableMarginLeft, (function(e, t) {
        return t ? (parseFloat(Ne(e, "marginLeft")) || e.getBoundingClientRect().left - Se(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px" : void 0
    })), d.cssHooks.marginRight = He(p.reliableMarginRight, (function(e, t) {
        return t ? Se(e, {
            display: "inline-block"
        }, Ne, [e, "marginRight"]) : void 0
    })), d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        d.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + W[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ce.test(e) || (d.cssHooks[e + t].set = Re)
    })), d.fn.extend({
        css: function(e, t) {
            return L(this, (function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (d.isArray(t)) {
                    for (r = _e(e), i = t.length; i > a; a++) o[t[a]] = d.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? d.style(e, t, n) : d.css(e, t)
            }), e, t, arguments.length > 1)
        },
        show: function() {
            return qe(this, !0)
        },
        hide: function() {
            return qe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                G(this) ? d(this).show() : d(this).hide()
            }))
        }
    }), d.Tween = Be, Be.prototype = {
        constructor: Be,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || d.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (d.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Be.propHooks[this.prop];
            return e && e.get ? e.get(this) : Be.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Be.propHooks[this.prop];
            return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Be.propHooks._default.set(this), this
        }
    }, Be.prototype.init.prototype = Be.prototype, Be.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Be.propHooks.scrollTop = Be.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, d.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, d.fx = Be.prototype.init, d.fx.step = {};
    var Ue, $e, We = /^(?:toggle|show|hide)$/,
        Ge = /queueHooks$/;

    function Xe() {
        return e.setTimeout((function() {
            Ue = void 0
        })), Ue = d.now()
    }

    function ze(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i["margin" + (n = W[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Ve(e, t, n) {
        for (var r, i = (Ye.tweeners[t] || []).concat(Ye.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Ye(e, t, n) {
        var r, i, o = 0,
            a = Ye.prefilters.length,
            s = d.Deferred().always((function() {
                delete u.elem
            })),
            u = function() {
                if (i) return !1;
                for (var t = Ue || Xe(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; a > o; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), 1 > r && a ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: d.extend({}, t),
                opts: d.extend(!0, {
                    specialEasing: {},
                    easing: d.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ue || Xe(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = d.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = d.camelCase(n)], o = e[n], d.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = d.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); a > o; o++)
            if (r = Ye.prefilters[o].call(l, e, c, l.opts)) return d.isFunction(r.stop) && (d._queueHooks(l.elem, l.opts.queue).stop = d.proxy(r.stop, r)), r;
        return d.map(c, Ve, l), d.isFunction(l.opts.start) && l.opts.start.call(e, l), d.fx.timer(d.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    d.Animation = d.extend(Ye, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return X(n.elem, e, $.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                d.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(j);
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Ye.tweeners[n] = Ye.tweeners[n] || [], Ye.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c = this,
                    p = {},
                    f = e.style,
                    h = e.nodeType && G(e),
                    g = R.get(e, "fxshow");
                for (r in n.queue || (null == (s = d._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || u()
                    }), s.unqueued++, c.always((function() {
                        c.always((function() {
                            s.unqueued--, d.queue(e, "fx").length || s.empty.fire()
                        }))
                    }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (l = d.css(e, "display")) ? R.get(e, "olddisplay") || Ae(e.nodeName) : l) && "none" === d.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always((function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    }))), t)
                    if (i = t[r], We.exec(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            h = !0
                        }
                        p[r] = g && g[r] || d.style(e, r)
                    } else l = void 0;
                if (d.isEmptyObject(p)) "inline" === ("none" === l ? Ae(e.nodeName) : l) && (f.display = l);
                else
                    for (r in g ? "hidden" in g && (h = g.hidden) : g = R.access(e, "fxshow", {}), o && (g.hidden = !h), h ? d(e).show() : c.done((function() {
                            d(e).hide()
                        })), c.done((function() {
                            var t;
                            for (t in R.remove(e, "fxshow"), p) d.style(e, t, p[t])
                        })), p) a = Ve(h ? g[r] : 0, r, c), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }],
            prefilter: function(e, t) {
                t ? Ye.prefilters.unshift(e) : Ye.prefilters.push(e)
            }
        }), d.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? d.extend({}, e) : {
                complete: n || !n && t || d.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !d.isFunction(t) && t
            };
            return r.duration = d.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in d.fx.speeds ? d.fx.speeds[r.duration] : d.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                d.isFunction(r.old) && r.old.call(this), r.queue && d.dequeue(this, r.queue)
            }, r
        }, d.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(G).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = d.isEmptyObject(e),
                    o = d.speed(t, n, r),
                    a = function() {
                        var t = Ye(this, d.extend({}, e), o);
                        (i || R.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = d.timers,
                        a = R.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && Ge.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && d.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = R.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = d.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, d.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), d.each(["toggle", "show", "hide"], (function(e, t) {
            var n = d.fn[t];
            d.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ze(t, !0), e, r, i)
            }
        })), d.each({
            slideDown: ze("show"),
            slideUp: ze("hide"),
            slideToggle: ze("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            d.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        })), d.timers = [], d.fx.tick = function() {
            var e, t = 0,
                n = d.timers;
            for (Ue = d.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || d.fx.stop(), Ue = void 0
        }, d.fx.timer = function(e) {
            d.timers.push(e), e() ? d.fx.start() : d.timers.pop()
        }, d.fx.interval = 13, d.fx.start = function() {
            $e || ($e = e.setInterval(d.fx.tick, d.fx.interval))
        }, d.fx.stop = function() {
            e.clearInterval($e), $e = null
        }, d.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, d.fn.delay = function(t, n) {
            return t = d.fx && d.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            }))
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select"),
                n = t.appendChild(r.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = n.selected, t.disabled = !0, p.optDisabled = !n.disabled, (e = r.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var Je, Ke = d.expr.attrHandle;
    d.fn.extend({
        attr: function(e, t) {
            return L(this, d.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                d.removeAttr(this, e)
            }))
        }
    }), d.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? d.prop(e, t, n) : (1 === o && d.isXMLDoc(e) || (t = t.toLowerCase(), i = d.attrHooks[t] || (d.expr.match.bool.test(t) ? Je : void 0)), void 0 !== n ? null === n ? void d.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = d.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && d.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(j);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = d.propFix[n] || n, d.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), Je = {
        set: function(e, t, n) {
            return !1 === t ? d.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, d.each(d.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = Ke[t] || d.find.attr;
        Ke[t] = function(e, t, r) {
            var i, o;
            return r || (o = Ke[t], Ke[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ke[t] = o), i
        }
    }));
    var Qe = /^(?:input|select|textarea|button)$/i,
        Ze = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(e, t) {
            return L(this, d.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[d.propFix[e] || e]
            }))
        }
    }), d.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && d.isXMLDoc(e) || (t = d.propFix[t] || t, i = d.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = d.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Qe.test(e.nodeName) || Ze.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (d.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        d.propFix[this.toLowerCase()] = this
    }));
    var et = /[\t\r\n\f]/g;

    function tt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    d.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (d.isFunction(e)) return this.each((function(t) {
                d(this).addClass(e.call(this, t, tt(this)))
            }));
            if ("string" == typeof e && e)
                for (t = e.match(j) || []; n = this[u++];)
                    if (i = tt(n), r = 1 === n.nodeType && (" " + i + " ").replace(et, " ")) {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = d.trim(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (d.isFunction(e)) return this.each((function(t) {
                d(this).removeClass(e.call(this, t, tt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(j) || []; n = this[u++];)
                    if (i = tt(n), r = 1 === n.nodeType && (" " + i + " ").replace(et, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = d.trim(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each((function(n) {
                d(this).toggleClass(e.call(this, n, tt(this), t), t)
            })) : this.each((function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = d(this), o = e.match(j) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(void 0 === e || "boolean" === n) && ((t = tt(this)) && R.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : R.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + tt(n) + " ").replace(et, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var nt = /\r/g;
    d.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = d.isFunction(e), this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, d(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : d.isArray(i) && (i = d.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }))) : i ? (t = d.valHooks[i.type] || d.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(nt, "") : null == n ? "" : n : void 0
        }
    }), d.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return d.trim(e.value)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (((n = r[u]).selected || u === i) && (p.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                            if (t = d(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = d.makeArray(t), a = i.length; a--;)((r = i[a]).selected = d.inArray(d.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), d.each(["radio", "checkbox"], (function() {
        d.valHooks[this] = {
            set: function(e, t) {
                return d.isArray(t) ? e.checked = d.inArray(d(e).val(), t) > -1 : void 0
            }
        }, p.checkOn || (d.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }));
    var rt = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, p, f, h, g = [i || r],
                m = c.call(t, "type") ? t.type : t,
                v = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !rt.test(m + d.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), p = m.indexOf(":") < 0 && "on" + m, (t = t[d.expando] ? t : new d.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : d.makeArray(n, [t]), h = d.event.special[m] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!o && !h.noBubble && !d.isWindow(i)) {
                    for (l = h.delegateType || m, rt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                    u === (i.ownerDocument || r) && g.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0;
                    (s = g[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : h.bindType || m, (f = (R.get(s, "events") || {})[t.type] && R.get(s, "handle")) && f.apply(s, n), (f = p && s[p]) && f.apply && D(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), n) || !D(i) || p && d.isFunction(i[m]) && !d.isWindow(i) && ((u = i[p]) && (i[p] = null), d.event.triggered = m, i[m](), d.event.triggered = void 0, u && (i[p] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = d.extend(new d.Event, n, {
                type: e,
                isSimulated: !0
            });
            d.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }), d.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                d.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? d.event.trigger(e, t, n, !0) : void 0
        }
    }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
        d.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), d.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), p.focusin = "onfocusin" in e, p.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            d.event.simulate(t, e.target, d.event.fix(e))
        };
        d.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = R.access(r, t);
                i || r.addEventListener(e, n, !0), R.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = R.access(r, t) - 1;
                i ? R.access(r, t, i) : (r.removeEventListener(e, n, !0), R.remove(r, t))
            }
        }
    }));
    var it = e.location,
        ot = d.now(),
        at = /\?/;
    d.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, d.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + t), n
    };
    var st = /#.*$/,
        ut = /([?&])_=[^&]*/,
        lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ct = /^(?:GET|HEAD)$/,
        pt = /^\/\//,
        ft = {},
        dt = {},
        ht = "*/".concat("*"),
        gt = r.createElement("a");

    function mt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(j) || [];
            if (d.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function vt(e, t, n, r) {
        var i = {},
            o = e === dt;

        function a(s) {
            var u;
            return i[s] = !0, d.each(e[s] || [], (function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            })), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function yt(e, t) {
        var n, r, i = d.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && d.extend(!0, e, r), e
    }
    gt.href = it.href, d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: it.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(it.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? yt(yt(e, d.ajaxSettings), t) : yt(d.ajaxSettings, e)
        },
        ajaxPrefilter: mt(ft),
        ajaxTransport: mt(dt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, p, f = d.ajaxSetup({}, n),
                h = f.context || f,
                g = f.context && (h.nodeType || h.jquery) ? d(h) : d.event,
                m = d.Deferred(),
                v = d.Callbacks("once memory"),
                y = f.statusCode || {},
                b = {},
                w = {},
                x = 0,
                T = "canceled",
                A = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = lt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = w[n] = w[n] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) y[t] = [y[t], e[t]];
                            else A.always(e[A.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t), C(0, t), this
                    }
                };
            if (m.promise(A).complete = v.add, A.success = A.done, A.error = A.fail, f.url = ((t || f.url || it.href) + "").replace(st, "").replace(pt, it.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = d.trim(f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = gt.protocol + "//" + gt.host != l.protocol + "//" + l.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = d.param(f.data, f.traditional)), vt(ft, f, n, A), 2 === x) return A;
            for (p in (c = d.event && f.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ct.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (at.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ut.test(o) ? o.replace(ut, "$1_=" + ot++) : o + (at.test(o) ? "&" : "?") + "_=" + ot++)), f.ifModified && (d.lastModified[o] && A.setRequestHeader("If-Modified-Since", d.lastModified[o]), d.etag[o] && A.setRequestHeader("If-None-Match", d.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && A.setRequestHeader("Content-Type", f.contentType), A.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ht + "; q=0.01" : "") : f.accepts["*"]), f.headers) A.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, A, f) || 2 === x)) return A.abort();
            for (p in T = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) A[p](f[p]);
            if (i = vt(dt, f, n, A)) {
                if (A.readyState = 1, c && g.trigger("ajaxSend", [A, f]), 2 === x) return A;
                f.async && f.timeout > 0 && (u = e.setTimeout((function() {
                    A.abort("timeout")
                }), f.timeout));
                try {
                    x = 1, i.send(b, C)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, r, s) {
                var l, p, b, w, T, C = n;
                2 !== x && (x = 2, u && e.clearTimeout(u), i = void 0, a = s || "", A.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(f, A, r)), w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, A, l), l ? (f.ifModified && ((T = A.getResponseHeader("Last-Modified")) && (d.lastModified[o] = T), (T = A.getResponseHeader("etag")) && (d.etag[o] = T)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, p = w.data, l = !(b = w.error))) : (b = C, (t || !C) && (C = "error", 0 > t && (t = 0))), A.status = t, A.statusText = (n || C) + "", l ? m.resolveWith(h, [p, C, A]) : m.rejectWith(h, [A, C, b]), A.statusCode(y), y = void 0, c && g.trigger(l ? "ajaxSuccess" : "ajaxError", [A, f, l ? p : b]), v.fireWith(h, [A, C]), c && (g.trigger("ajaxComplete", [A, f]), --d.active || d.event.trigger("ajaxStop")))
            }
            return A
        },
        getJSON: function(e, t, n) {
            return d.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return d.get(e, void 0, t, "script")
        }
    }), d.each(["get", "post"], (function(e, t) {
        d[t] = function(e, n, r, i) {
            return d.isFunction(n) && (i = i || r, r = n, n = void 0), d.ajax(d.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, d.isPlainObject(e) && e))
        }
    })), d._evalUrl = function(e) {
        return d.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, d.fn.extend({
        wrapAll: function(e) {
            var t;
            return d.isFunction(e) ? this.each((function(t) {
                d(this).wrapAll(e.call(this, t))
            })) : (this[0] && (t = d(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this)
        },
        wrapInner: function(e) {
            return d.isFunction(e) ? this.each((function(t) {
                d(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = d(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = d.isFunction(e);
            return this.each((function(n) {
                d(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function() {
            return this.parent().each((function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            })).end()
        }
    }), d.expr.filters.hidden = function(e) {
        return !d.expr.filters.visible(e)
    }, d.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var bt = /%20/g,
        wt = /\[\]$/,
        xt = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function Ct(e, t, n, r) {
        var i;
        if (d.isArray(t)) d.each(t, (function(t, i) {
            n || wt.test(e) ? r(e, i) : Ct(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== d.type(t)) r(e, t);
        else
            for (i in t) Ct(e + "[" + i + "]", t[i], n, r)
    }
    d.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = d.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, (function() {
            i(this.name, this.value)
        }));
        else
            for (n in e) Ct(n, e[n], t, i);
        return r.join("&").replace(bt, "+")
    }, d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = d.prop(this, "elements");
                return e ? d.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !d(this).is(":disabled") && At.test(this.nodeName) && !Tt.test(e) && (this.checked || !z.test(e))
            })).map((function(e, t) {
                var n = d(this).val();
                return null == n ? null : d.isArray(n) ? d.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(xt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(xt, "\r\n")
                }
            })).get()
        }
    }), d.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Et = {
            0: 200,
            1223: 204
        },
        _t = d.ajaxSettings.xhr();
    p.cors = !!_t && "withCredentials" in _t, p.ajax = _t = !!_t, d.ajaxTransport((function(t) {
        var n, r;
        return p.cors || _t && !t.crossDomain ? {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Et[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout((function() {
                        n && r()
                    }))
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    })), d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return d.globalEval(e), e
            }
        }
    }), d.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), d.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(i, o) {
                t = d("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), r.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var St = [],
        kt = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = St.pop() || d.expando + "_" + ot++;
            return this[e] = !0, e
        }
    }), d.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && kt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(kt, "$1" + i) : !1 !== t.jsonp && (t.url += (at.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || d.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always((function() {
            void 0 === o ? d(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, St.push(i)), a && d.isFunction(o) && o(a[0]), a = o = void 0
        })), "script") : void 0
    })), p.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), d.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (p.createHTMLDocument ? r.implementation.createHTMLDocument("") : r);
        var i = A.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = ee([e], t, o), o && o.length && d(o).remove(), d.merge([], i.childNodes))
    };
    var Nt = d.fn.load;

    function Ht(e) {
        return d.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    d.fn.load = function(e, t, n) {
        if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = d.trim(e.slice(s)), e = e.slice(0, s)), d.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && d.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments, a.html(r ? d("<div>").append(d.parseHTML(e)).find(r) : e)
        })).always(n && function(e, t) {
            a.each((function() {
                n.apply(a, o || [e.responseText, t, e])
            }))
        }), this
    }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        d.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), d.expr.filters.animated = function(e) {
        return d.grep(d.timers, (function(t) {
            return e === t.elem
        })).length
    }, d.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = d.css(e, "position"),
                c = d(e),
                p = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = d.css(e, "top"), u = d.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), d.isFunction(t) && (t = t.call(e, n, d.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : c.css(p)
        }
    }, d.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                d.offset.setOffset(this, e, t)
            }));
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, d.contains(t, r) ? (i = r.getBoundingClientRect(), n = Ht(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === d.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (r = e.offset()), r.top += d.css(e[0], "borderTopWidth", !0) - e.scrollTop(), r.left += d.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                    top: t.top - r.top - d.css(n, "marginTop", !0),
                    left: t.left - r.left - d.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === d.css(e, "position");) e = e.offsetParent;
                return e || ke
            }))
        }
    }), d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        d.fn[e] = function(r) {
            return L(this, (function(e, r, i) {
                var o = Ht(e);
                return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }), e, r, arguments.length)
        }
    })), d.each(["top", "left"], (function(e, t) {
        d.cssHooks[t] = He(p.pixelPosition, (function(e, n) {
            return n ? (n = Ne(e, t), Ee.test(n) ? d(e).position()[t] + "px" : n) : void 0
        }))
    })), d.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        d.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            d.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                return L(this, (function(t, n, r) {
                    var i;
                    return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? d.css(t, n, a) : d.style(t, n, r, a)
                }), t, o ? r : void 0, o, null)
            }
        }))
    })), d.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return d
    }));
    var It = e.jQuery,
        jt = e.$;
    return d.noConflict = function(t) {
        return e.$ === d && (e.$ = jt), t && e.jQuery === d && (e.jQuery = It), d
    }, t || (e.jQuery = e.$ = d), d
})), String.prototype.includes || (String.prototype.includes = function(e, t) {
        "use strict";
        return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                r = n.length >>> 0;
            if (0 === r) return !1;
            for (var i, o, a = 0 | t, s = Math.max(a >= 0 ? a : r - Math.abs(a), 0); s < r;) {
                if ((i = n[s]) === (o = e) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o)) return !0;
                s++
            }
            return !1
        }
    }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(e, t) {
            "use strict";
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), r = 1; r < arguments.length; r++) {
                var i = arguments[r];
                if (null != i)
                    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            if (null == this) throw TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if ("function" != typeof e) throw TypeError("predicate must be a function");
            for (var r = arguments[1], i = 0; i < n;) {
                var o = t[i];
                if (e.call(r, o, i, t)) return o;
                i++
            }
        },
        configurable: !0,
        writable: !0
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        do {
            if (t.matches(e)) return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);
        return null
    }), Array.from || (Array.from = function() {
        var e = Object.prototype.toString,
            t = function(t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            },
            n = Math.pow(2, 53) - 1,
            r = function(e) {
                var t = function(e) {
                    var t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }(e);
                return Math.min(Math.max(t, 0), n)
            };
        return function(e) {
            var n = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var i, o = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== o) {
                if (!t(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (i = arguments[2])
            }
            for (var a, s = r(n.length), u = t(this) ? Object(new this(s)) : new Array(s), l = 0; l < s;) a = n[l], u[l] = o ? void 0 === i ? o(a, l) : o.call(i, a, l) : a, l += 1;
            return u.length = s, u
        }
    }()), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var r = arguments[1], i = 0; i < n;) {
                var o = t[i];
                if (e.call(r, o, i, t)) return i;
                i++
            }
            return -1
        },
        configurable: !0,
        writable: !0
    }), Array.prototype.map || (Array.prototype.map = function(e) {
        var t, n, r;
        if (null == this) throw new TypeError("this is null or not defined");
        var i = Object(this),
            o = i.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (t = arguments[1]), n = new Array(o), r = 0; r < o;) {
            var a, s;
            r in i && (a = i[r], s = e.call(t, a, r, i), n[r] = s), r++
        }
        return n
    }),
    function() {
        "use strict";
        if ("object" == typeof window)
            if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            });
            else {
                var e = window.document,
                    t = [];
                r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(e) {
                    if (!this._observationTargets.some((function(t) {
                            return t.element == e
                        }))) {
                        if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: e,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, r.prototype.unobserve = function(e) {
                    this._observationTargets = this._observationTargets.filter((function(t) {
                        return t.element != e
                    })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, r.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, r.prototype.takeRecords = function() {
                    var e = this._queuedEntries.slice();
                    return this._queuedEntries = [], e
                }, r.prototype._initThresholds = function(e) {
                    var t = e || [0];
                    return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
                        if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return e !== n[t - 1]
                    }))
                }, r.prototype._parseRootMargin = function(e) {
                    var t = (e || "0px").split(/\s+/).map((function(e) {
                        var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                        if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(t[1]),
                            unit: t[2]
                        }
                    }));
                    return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                }, r.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(window, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, r.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(window, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, r.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom(),
                        t = e ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach((function(r) {
                        var i = r.element,
                            o = a(i),
                            s = this._rootContainsTarget(i),
                            u = r.entry,
                            l = e && s && this._computeTargetAndRootIntersection(i, t),
                            c = r.entry = new n({
                                time: window.performance && performance.now && performance.now(),
                                target: i,
                                boundingClientRect: o,
                                rootBounds: t,
                                intersectionRect: l
                            });
                        u ? e && s ? this._hasCrossedThreshold(u, c) && this._queuedEntries.push(c) : u && u.isIntersecting && this._queuedEntries.push(c) : this._queuedEntries.push(c)
                    }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, r.prototype._computeTargetAndRootIntersection = function(t, n) {
                    if ("none" != window.getComputedStyle(t).display) {
                        for (var r, i, o, s, l, c, p, f, d = a(t), h = u(t), g = !1; !g;) {
                            var m = null,
                                v = 1 == h.nodeType ? window.getComputedStyle(h) : {};
                            if ("none" == v.display) return;
                            if (h == this.root || h == e ? (g = !0, m = n) : h != e.body && h != e.documentElement && "visible" != v.overflow && (m = a(h)), m && (r = m, i = d, void 0, void 0, void 0, void 0, void 0, void 0, o = Math.max(r.top, i.top), s = Math.min(r.bottom, i.bottom), l = Math.max(r.left, i.left), f = s - o, !(d = (p = (c = Math.min(r.right, i.right)) - l) >= 0 && f >= 0 && {
                                    top: o,
                                    bottom: s,
                                    left: l,
                                    right: c,
                                    width: p,
                                    height: f
                                }))) break;
                            h = u(h)
                        }
                        return d
                    }
                }, r.prototype._getRootRect = function() {
                    var t;
                    if (this.root) t = a(this.root);
                    else {
                        var n = e.documentElement,
                            r = e.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: n.clientWidth || r.clientWidth,
                            width: n.clientWidth || r.clientWidth,
                            bottom: n.clientHeight || r.clientHeight,
                            height: n.clientHeight || r.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }, r.prototype._expandRectByRootMargin = function(e) {
                    var t = this._rootMarginValues.map((function(t, n) {
                            return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                        })),
                        n = {
                            top: e.top - t[0],
                            right: e.right + t[1],
                            bottom: e.bottom + t[2],
                            left: e.left - t[3]
                        };
                    return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                }, r.prototype._hasCrossedThreshold = function(e, t) {
                    var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                        r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                    if (n !== r)
                        for (var i = 0; i < this.thresholds.length; i++) {
                            var o = this.thresholds[i];
                            if (o == n || o == r || o < n != o < r) return !0
                        }
                }, r.prototype._rootIsInDom = function() {
                    return !this.root || s(e, this.root)
                }, r.prototype._rootContainsTarget = function(t) {
                    return s(this.root || e, t)
                }, r.prototype._registerInstance = function() {
                    t.indexOf(this) < 0 && t.push(this)
                }, r.prototype._unregisterInstance = function() {
                    var e = t.indexOf(this); - 1 != e && t.splice(e, 1)
                }, window.IntersectionObserver = r, window.IntersectionObserverEntry = n
            }
        function n(e) {
            this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }, this.isIntersecting = !!e.intersectionRect;
            var t = this.boundingClientRect,
                n = t.width * t.height,
                r = this.intersectionRect,
                i = r.width * r.height;
            this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
        }

        function r(e, t) {
            var n, r, i, o = t || {};
            if ("function" != typeof e) throw new Error("callback must be a function");
            if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
                i || (i = setTimeout((function() {
                    n(), i = null
                }), r))
            }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                return e.value + e.unit
            })).join(" ")
        }

        function i(e, t, n, r) {
            "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
        }

        function o(e, t, n, r) {
            "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
        }

        function a(e) {
            var t;
            try {
                t = e.getBoundingClientRect()
            } catch (e) {}
            return t ? (t.width && t.height || (t = {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.right - t.left,
                height: t.bottom - t.top
            }), t) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }

        function s(e, t) {
            for (var n = t; n;) {
                if (n == e) return !0;
                n = u(n)
            }
            return !1
        }

        function u(e) {
            var t = e.parentNode;
            return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
        }
    }(),
    function() {
        "use strict";
        var e = [],
            t = [];
        window.Levenshtein = {
            get: function(n, r) {
                var i, o, a, s, u, l, c = n.length,
                    p = r.length;
                if (0 === c) return p;
                if (0 === p) return c;
                for (a = 0; a < p; ++a) e[a] = a, t[a] = r.charCodeAt(a);
                for (e[p] = p, a = 0; a < c; ++a) {
                    for (o = a + 1, s = 0; s < p; ++s) i = o, l = n.charCodeAt(a) === t[s], (o = e[s] + (l ? 0 : 1)) > (u = i + 1) && (o = u), o > (u = e[s + 1] + 1) && (o = u), e[s] = i;
                    e[s] = o
                }
                return o
            }
        }
    }(), BrowserGoogleAuth = function() {}, BrowserGoogleAuth.redirectUrlForAuthorizing = function(e, t, n, r) {
        var i = {
            redirect_uri: e,
            response_type: "code",
            client_id: "local.asana.com" === window.location.hostname && IS_SANDBOX ? "1032199425885-2gguj0mrnnt39vggjpl9370uolg5k7rc.apps.googleusercontent.com" : "1032199425885-oq9scukspijc682n7k2erv386nc58que.apps.googleusercontent.com",
            scope: n.join(" "),
            state: t,
            prompt: "select_account"
        };
        return null != r && (i.login_hint = r), "https://accounts.google.com/o/oauth2/auth?" + Object.keys(i).map((function(e) {
            return e + "=" + encodeURIComponent(i[e])
        })).join("&")
    }, BrowserGoogleAuth.authorizeUsingRedirects = function(e) {
        var t = [e.target_url, e.is_create ? "create" : "", "https://asana.com", e.xsrf_token, e.opt_share_link_domain_id ? e.opt_share_link_domain_id : "", e.opt_share_link_key ? e.opt_share_link_key : ""].join(" ");
        window.location.href = BrowserGoogleAuth.redirectUrlForAuthorizing(e.oauth_action_url, t, ["profile", "email"], e.opt_google_email)
    }, AsanaAnalytics.initGTM();
var convNum = Math.floor(1e9 * Math.random()),
    SwiftypeKeys = {
        en: "BLb8jEzFkBE8sHre7q5x",
        fr: "xM12-qdubNaMqWycYrqY",
        de: "x2z_-CFMAUhzHis6nL3F",
        es: "TAezgDaiWxAJjYqf-weK",
        pt: "ffmMxJM47ghFhK24mYfd",
        ja: "SSD6TMYUvgtLctBxGpJE"
    },
    AsanaHelpers = {
        BLANK_SIGNUP_TRIES: 0,
        directUserToVerificationPageForEcommerceFlow: function() {
            var e = AsanaSignupUtils.getConfirmationPageRedirect();
            window.location.href = AsanaHelpers.staticSiteUrl(e)
        },
        generateNewXsrfToken: function() {
            return window.crypto && window.crypto.getRandomValues && window.Uint32Array ? crypto.getRandomValues(new Uint32Array(4)).join("-") : function e(t) {
                return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
            }()
        },
        getOrCreateXsrfToken: function() {
            var e = AsanaStorage.getCookie("xsrf_token");
            return e || (e = this.generateNewXsrfToken()), AsanaStorage.setCookie("xsrf_token", e, AsanaStorage.CATEGORY.NECESSARY, 1 / 24, !0), e
        },
        addXsrfToken: function(e) {
            var t = AsanaHelpers.getOrCreateXsrfToken();
            try {
                if (t) {
                    var n = document.createElement("input");
                    n.type = "hidden", n.name = "xsrf_token", n.value = t, e.appendChild(n)
                }
            } catch (e) {
                throw new Error("XSRF security token not properly set")
            }
        },
        appUrl: function(e, t) {
            return void 0 === e && (e = ""), t ? t += "." : t = "", "local.asana.com" === window.location.hostname && IS_SANDBOX ? "https://localhost.asana.com:8180" + e : "https://" + t + "app.asana.com" + e
        },
        staticSiteUrl: function(e) {
            void 0 === e && (e = "");
            var t = AsanaI18n.getCurrentPageLanguage();
            return "en" === t ? e : "/" + t + e
        },
        isProduction: function() {
            return "asana.com" === window.location.host || "blog.asana.com" === window.location.host
        },
        specialPlatform: function() {
            var e = navigator.userAgent;
            return e.match(/(iPhone|iPod|iPad)/) ? "ios" : e.match(/Android|Pixel/) ? "android" : !!e.match(/MSIE/) && "ie"
        },
        isMobilePlatform: function() {
            return "ios" === this.specialPlatform() || "android" === this.specialPlatform()
        },
        isLoggedIn: function() {
            return -1 !== document.cookie.indexOf("is_logged_in")
        },
        updateAttributionCookie: function() {
            var e = {
                source: document.referrer,
                query_string: document.location.search,
                exit_page: document.location.pathname,
                landing_page: document.location.pathname,
                useragent: navigator.userAgent,
                timestamp: Math.floor(Date.now() / 1e3),
                convNum: convNum
            };
            if (AsanaStorage.getCookie("asana_orig_attr") ? e.cookie = JSON.parse(AsanaStorage.getCookie("asana_orig_attr")) : AsanaStorage.setCookie("asana_orig_attr", encodeURIComponent(JSON.stringify(e)), AsanaStorage.CATEGORY.PERFORMANCE, 30, !0), AsanaStorage.getCookie("asana_attr")) {
                var t = JSON.parse(AsanaStorage.getCookie("asana_attr"));
                t.exit_page = document.location.pathname, AsanaStorage.setCookie("asana_attr", encodeURIComponent(JSON.stringify(t)), AsanaStorage.CATEGORY.PERFORMANCE, 1 / 24, !0)
            } else AsanaStorage.setCookie("asana_attr", encodeURIComponent(JSON.stringify(e)), AsanaStorage.CATEGORY.PERFORMANCE, 1 / 24, !0)
        },
        isPremiumUser: function(e) {
            (e.user_in_premium_domain || e.user_in_premium_team) && ($(".visible-premium").show(), $(".hidden-premium").hide(), window.sessionStorage.setItem("isPremium", "1"))
        },
        setGlobalClasses: function() {
            "ios" === this.specialPlatform() && $("html").addClass("device-ios"), "android" === this.specialPlatform() && $("html").addClass("device-android"), this.isMobilePlatform() && $("html").addClass("device-mobile"), this.isLoggedIn() && ($("html").addClass("is-logged-in"), "1" == window.sessionStorage.isPremium ? ($(".visible-premium").show(), $(".hidden-premium").hide()) : AsanaAppUserInfo.get(this.isPremiumUser))
        },
        redirectGoogleAppMarketplaceClicks: function() {
            for (var e = window.location.search.substr(1).split("&"), t = {}, n = 0; n < e.length; n++) {
                var r = e[n].split("=");
                t[r[0]] = unescape(r[1])
            }
            "signup-with-google-redirects" == t.action && BrowserGoogleAuth.authorizeUsingRedirects({
                oauth_action_url: AsanaHelpers.appUrl("/-/oauth2callback"),
                target_url: AsanaHelpers.appUrl(),
                is_create: !0,
                xsrf_token: AsanaHelpers.getOrCreateXsrfToken()
            })
        },
        registerGTMClickEvents: {
            init: function() {
                for (var e = document.querySelectorAll("[data-gtm-events]"), t = 0; t < e.length; t++) {
                    e[t].addEventListener("click", (function() {
                        this.dataset.gtmEvents.split(",").forEach((function(e) {
                            console.log("tracking event", e), AsanaAnalytics.trackGTM(e)
                        }))
                    }))
                }
            }
        },
        setBackgroundScroll: function(e) {
            void 0 === e && (e = $("html").hasClass("-no-scroll")), e ? $("html").removeClass("-no-scroll") : $("html").addClass("-no-scroll")
        },
        showModal: function(e, t, n) {
            AsanaHelpers.prepareModal(e, t, n), window.location.hash = e
        },
        prepareModal: function(e, t, n) {
            var r = document.getElementById(e);
            r && (AsanaHelpers.currentModal = {
                name: e,
                element: r,
                opener: n,
                data: t || {}
            }, AsanaHelpers.setBackgroundScroll(!1))
        },
        signupModal: {
            init: function() {
                setTimeout((function() {
                    var e = document.querySelector("#signup.modal .js-signup-button"),
                        t = document.querySelectorAll("#signup.modal [data-modal-close]");
                    e && t && (e.addEventListener("click", AsanaHelpers.signupModal.signupClickHandler), t.forEach((function(t) {
                        t.addEventListener("click", (function() {
                            e.removeEventListener("click", AsanaHelpers.signupModal.signupClickHandler)
                        }))
                    })))
                }), 1e3)
            },
            signupClickHandler: function(e) {
                e.preventDefault();
                try {
                    var t = document.querySelector("#signup.modal .signupForm"),
                        n = document.querySelector("#signup.modal .modal-container"),
                        r = document.querySelectorAll("#signup.modal [data-modal-close]"),
                        i = t.querySelector("input.signup-email"),
                        o = i.value;
                    if (AsanaEmail.validate(o)) n.classList.add("premium-reminder-modal-transition"), AsanaSignupUtils.validateDomain.hasTriedInvalidDomain = !0, r.forEach((function(e) {
                        e.addEventListener("click", (function() {
                            AsanaHelpers.enterFreeSignupFlow(), AsanaHelpers.signupWithEmail(t)
                        }))
                    }));
                    else {
                        var a = AsanaI18n.getCurrentPageLanguage();
                        i.setCustomValidity(AsanaI18n.translations.emailRegexFail[a]), i.reportValidity(), console.error("Email not validated because of function above but passed HTML validator."), i.addEventListener("input", (function e() {
                            i.setCustomValidity(""), i.removeEventListener("input", e)
                        }))
                    }
                } catch (e) {
                    console.warn(e)
                }
            }
        },
        currentModal: null,
        tier: {
            defaultTier: null,
            tierNamesById: {
                "tier-0-free": "free",
                "tier-1-premium": "premium",
                "tier-1plus-premium": "business",
                "tier-2-enterprise": "enterprise"
            },
            getTierNameById: function(e) {
                return this.tierNamesById[e] || null
            },
            getCurrentTier: function() {
                return AsanaStorage.getEcommerceConfig().tier || this.defaultTier
            },
            getCurrentTierName: function() {
                return this.getTierNameById(this.getCurrentTier())
            },
            setCurrentTier: function(e) {
                this.tierNamesById[e] || null === e ? AsanaStorage.updateEcommerceConfig((function(t) {
                    return t.tier = e, t
                })) : Bugsnag.notifyException(e + " is not a valid tierId", "invalid setCurrentTier param")
            },
            setTierFree: function() {
                this.setCurrentTier("tier-0-free")
            },
            isTierFree: function() {
                return "tier-0-free" === this.getCurrentTier()
            },
            setTierPremium: function() {
                this.setCurrentTier("tier-1-premium")
            },
            isTierPremium: function() {
                return "tier-1-premium" === this.getCurrentTier()
            },
            setTierBusiness: function() {
                this.setCurrentTier("tier-1plus-premium")
            },
            isTierBusiness: function() {
                return "tier-1plus-premium" === this.getCurrentTier()
            },
            setTierDefault: function() {
                this.setCurrentTier(this.defaultTier)
            }
        },
        signupEmailType: {
            validEmailTypes: ["personal", "work"],
            getSignupEmailType: function() {
                return AsanaStorage.getEcommerceConfig().signup_email_type || null
            },
            setSignupEmailType: function(e) {
                this.validEmailTypes.includes(e) ? AsanaStorage.updateEcommerceConfig((function(t) {
                    return t.signup_email_type = e, t
                })) : Bugsnag.notifyException(e + " is not a valid signup email type", "invalid setSignupEmailType param")
            },
            setSignupEmailTypePersonal: function() {
                this.setSignupEmailType("personal")
            },
            isSignupEmailTypePersonal: function() {
                return "personal" === this.getSignupEmailType()
            },
            setSignupEmailTypeWork: function() {
                this.setSignupEmailType("work")
            },
            isSignupEmailTypeWork: function() {
                return "work" === this.getSignupEmailType()
            }
        },
        billableGroupType: {
            CONFIG_KEY: "billable_group_type",
            validBillableGroupTypes: ["", "org", "team", "new_org", "workspace"],
            setUsingEmail: function(e) {
                AsanaEmail.isPersonalEmail(e) ? this.setWorkspace() : this.setNewOrg()
            },
            get: function() {
                return AsanaStorage.getEcommerceConfig()[this.CONFIG_KEY]
            },
            set: function(e) {
                if (this.validBillableGroupTypes.includes(e)) {
                    var t = AsanaStorage.getEcommerceConfig();
                    t[this.CONFIG_KEY] = e, AsanaStorage.setEcommerceConfig(t)
                } else Bugsnag.notifyException(e + " is not a valid signup email type", "invalid setBillableGroupType param")
            },
            setFullyPaid: function() {
                this.set("")
            },
            isFullyPaid: function() {
                return "" === this.get()
            },
            setTypeOrg: function() {
                this.set("org")
            },
            isOrg: function() {
                return "org" === this.get()
            },
            setTeam: function() {
                this.set("team")
            },
            isTeam: function() {
                return "team" === this.get()
            },
            setNewOrg: function() {
                this.set("new_org")
            },
            isNewOrg: function() {
                return "new_org" === this.get()
            },
            setWorkspace: function() {
                this.set("workspace")
            },
            isWorkspace: function() {
                return "workspace" === this.get()
            }
        },
        trial: {
            isInTrialFlow: !0,
            setTrialDefault: function() {
                AsanaHelpers.trial.isInTrialFlow = !0
            },
            setTrialTrue: function() {
                AsanaHelpers.trial.isInTrialFlow = !0
            },
            setTrialFalse: function() {
                AsanaHelpers.trial.isInTrialFlow = !1
            }
        },
        enterFreeSignupFlow: function() {
            AsanaHelpers.trial.setTrialFalse(), AsanaHelpers.tier.setTierFree();
            var e = AsanaStorage.getEcommerceConfig();
            e.free_user = !0, e.is_trial = "false", AsanaStorage.setEcommerceConfig(e)
        },
        recordPurchaseIntent: function() {
            AsanaHelpers.trial.setTrialFalse();
            var e = AsanaStorage.getEcommerceConfig();
            e.free_user = !1, e.is_purchase = !0, AsanaStorage.setEcommerceConfig(e)
        },
        recordTrialIntent: function() {
            AsanaHelpers.trial.setTrialTrue();
            var e = AsanaStorage.getEcommerceConfig();
            e.free_user = !1, e.is_trial = "true", e.is_purchase = !1, AsanaStorage.setEcommerceConfig(e)
        },
        topbar: {
            activeTopbarExists: function() {
                return !!document.querySelector(".announcement-topbar.-is-active")
            },
            hideInstance: function(e) {
                $(e).removeClass("-is-active"), $(e).attr("aria-hidden", !0)
            },
            unhideInstance: function(e) {
                $(e).addClass("-is-active"), $(e).attr("aria-hidden", !1)
            },
            populateMissingTranslationTopbar: function() {
                var e = AsanaHelpers.getParameterByName("missingtranslation");
                if (e && AsanaI18n.languageCodes.includes(e)) {
                    var t = AsanaI18n.translations.fourOhFour[e] || "";
                    $(".js-language").text(t)
                }
            },
            setMissingTranslationTopbarVisibility: function(e) {
                AsanaHelpers.topbar.populateMissingTranslationTopbar(), $(e + " .js-language").text().length > 0 && AsanaHelpers.topbar.unhideInstance(e)
            },
            init: function() {
                $(".topbar").each((function(e) {
                    if ("cookies-topbar" !== this.id) {
                        var t = "#" + this.id,
                            n = t + " .icon--x",
                            r = this.getAttribute("data-topbar-name"),
                            i = this.getAttribute("data-topbar-value");
                        AsanaStorage.getCookie(r) && AsanaHelpers.topbar.hideInstance(t), $(document).on("click", n, (function() {
                            AsanaStorage.setCookie(r, i, AsanaStorage.CATEGORY.FUNCTIONAL), AsanaHelpers.topbar.hideInstance(t)
                        }))
                    }
                }));
                AsanaHelpers.topbar.setMissingTranslationTopbarVisibility("#i18n-404")
            }
        },
        getPageMetadata: function() {
            if (!AsanaHelpers._pageMetadata) {
                var e = {};
                if ($("[data-page-metadata]").each((function(t, n) {
                        try {
                            var r = JSON.parse(n.textContent);
                            $.extend(e, r)
                        } catch (e) {
                            console && (console.error || console.log)("Could not parse page metadata: `" + n.textContent + "`")
                        }
                    })), "loading" === document.readyState) return e;
                AsanaHelpers._pageMetadata = e
            }
            return AsanaHelpers._pageMetadata
        },
        getUserSegment: function() {
            var e = AsanaHelpers.getPageMetadata();
            if (e.use_case_segment) return e.use_case_segment;
            var t = {
                    marketing: "marketing",
                    "product-managers": "product",
                    designers: "design",
                    engineering: "engineering",
                    hr: "hr",
                    it: "it"
                },
                n = function(e) {
                    for (var t = window.location.href, n = 0; n < e.length; n++)
                        if (t.indexOf("/teams/" + e[n]) > -1) return e[n];
                    return null
                }(Object.keys(t));
            return n ? t[n] : ""
        },
        getUserTemplate: function() {
            return AsanaHelpers.getPageMetadata().registered_with_use_case_template || ""
        },
        signupWaitingForAppResponse: function(e) {
            if (!window.location.hash || "#close" == window.location.hash) {
                var t = AsanaI18n.getCurrentPageLanguage(),
                    n = e.outerWidth();
                e.css("width", n), e.addClass("pre-loading"), window.setTimeout((function() {
                    e.addClass("loading").text(AsanaI18n.translations.waiting[t])
                }), 100)
            }
        },
        showLoginModal: function() {
            if (this.isMobilePlatform()) return window.location = AsanaHelpers.appUrl("/"), !1;
            AsanaHelpers.showModal("login"), this.specialPlatform() || $("#login-email-login-modal").focus()
        },
        requestRecaptchaScoreToken: function(e, t, n) {
            window.grecaptcha.enterprise.ready((function() {
                window.grecaptcha.enterprise.execute("6Lf1FtQZAAAAAKGsW3JoCdtQfzfCb2umWbEoyOjE", {
                    action: e
                }).then(t, n)
            }))
        },
        signupWithGoogle: function(e, t, n) {
            return BrowserGoogleAuth.authorizeUsingRedirects({
                oauth_action_url: AsanaHelpers.appUrl("/-/oauth2callback"),
                target_url: AsanaHelpers.appUrl(),
                is_create: !0,
                xsrf_token: AsanaHelpers.getOrCreateXsrfToken(),
                opt_share_link_domain_id: t,
                opt_share_link_key: e,
                opt_google_email: n
            }), !1
        },
        signupWithEmail: function(e) {
            var t = $(e),
                n = $(t.find(".input--email")).val();
            if (AsanaAnalytics.trackSignupEventsInGtm.storeGtmSignupSubmissionData(), AsanaSignupUtils.validateDomain.validateEmailSuggestion(e))
                if (AsanaEmail.validate(n)) {
                    var r = t.find(".signupForm-submit");
                    AsanaSignupUtils.signupButtons.request(r);
                    var i = {
                            email: jQuery.trim(n),
                            xsrf_token: AsanaHelpers.getOrCreateXsrfToken(),
                            extra: AsanaStorage.getCookie("asana_attr"),
                            experiments: AsanaHelpers.getEnrolledExperiments(),
                            seen_tos: !0,
                            lang_pref: AsanaI18n.getLanguagePreference(),
                            ref_lang: AsanaI18n.getCurrentPageLanguage(),
                            registered_with_trial: AsanaHelpers.trial.isInTrialFlow.toString(),
                            use_case_segment: AsanaHelpers.getUserSegment(),
                            registered_with_use_case_template: AsanaHelpers.getUserTemplate(),
                            buy_on_static_site_enabled: !AsanaHelpers.isMobilePlatform()
                        },
                        o = AsanaHelpers.tier.getCurrentTierName();
                    o ? i.registered_with_tier = o : (AsanaHelpers.tier.defaultTier = "tier-1-premium", AsanaHelpers.tier.setTierDefault(), i.registered_with_tier = AsanaHelpers.tier.getCurrentTierName());
                    try {
                        var a = AsanaHelpers.getUrlParams.get("utm_medium"),
                            s = AsanaHelpers.getUrlParams.get("utm_source"),
                            u = AsanaHelpers.getUrlParams.get("utm_campaign"),
                            l = {};
                        a && s && u && ((l = JSON.parse(i.extra)).utm_medium = a, l.utm_source = s, l.utm_campaign = u, i.extra = JSON.stringify(l))
                    } catch (e) {
                        console.error("Failed to add utm parameters to /-/signup.", e), Bugsnag.notifyException(e)
                    }
                    var c = AsanaStorage.getEcommerceConfig();
                    c.buy_on_static_site_enabled = !AsanaHelpers.isMobilePlatform(), c.is_trial = i.registered_with_trial, AsanaStorage.setEcommerceConfig(c), $.ajax({
                        url: AsanaHelpers.appUrl("/-/signup"),
                        type: "POST",
                        dataType: "json",
                        data: i,
                        timeout: 3e4,
                        crossDomain: !0,
                        xhrFields: {
                            withCredentials: !0
                        },
                        success: function(t) {
                            ! function(t, r) {
                                var i = t.email_domain_provider;
                                if ("invalid" === i && !AsanaSignupUtils.validateDomain.hasTriedInvalidDomain) return AsanaAnalytics.trackSignupEventsInGtm.init("SignupError", "Error Invalid Email Domain", "No Suggestion"), void AsanaSignupUtils.validateDomain.invalidateSignupForm(e);
                                var o = t.google_sso_required,
                                    a = t.saml_sso ? t.saml_sso.state : null,
                                    s = t.saml_sso ? t.saml_sso.sign_on_url : null;
                                AsanaSignupUtils.setLoginWithSSOSAMLCookie(i, o, a, s);
                                var u = t.billable_group_types_available_for_purchase;
                                Array.isArray(u) && (u[0] ? AsanaHelpers.billableGroupType.set(u[0]) : (AsanaHelpers.billableGroupType.setFullyPaid(), AsanaStorage.updateEcommerceConfig((function(e) {
                                    return e.is_trial = "false", e
                                }))));
                                AsanaStorage.getEcommerceConfig().buy_on_static_site_enabled || AsanaHelpers.billableGroupType.setUsingEmail(n);
                                var l = t.encrypted_user_id;
                                l && (AsanaStorage.setEncryptedUserId(l), AsanaAnalytics.trackGTM({
                                    cd3: l
                                }));
                                "check-email" === t.status ? t.user_is_new || !t.user_is_claimed ? function(e, t) {
                                    !0 === e.user_is_new && (AsanaAnalytics.trackGTM("all_signup"), AsanaAnalytics.trackGTM("signup_with_email"));
                                    "true" === t.registered_with_trial && AsanaAnalytics.trackGTM("trial_signup");
                                    e.is_personal_email ? (AsanaHelpers.signupEmailType.setSignupEmailTypePersonal(), AsanaAnalytics.trackGTM("signup_with_personal_email")) : (AsanaHelpers.signupEmailType.setSignupEmailTypeWork(), AsanaAnalytics.trackGTM("signup_with_work_email"));
                                    AsanaStorage.setUserEmailCookie(t.email);
                                    var n = AsanaSignupUtils.getConfirmationPageRedirect();
                                    window.location.href = AsanaHelpers.staticSiteUrl(n), window.location.hash = ""
                                }(t, r) : function() {
                                    AsanaAnalytics.trackGTM("existing_user_signup"), AsanaAnalytics.trackSignupEventsInGtm.init("SignupError", "Existing User");
                                    var e = window.location.search;
                                    window.location = "https://app.asana.com/-/login" + e
                                }() : (AsanaSignupUtils.signupButtons.reset(), AsanaHelpers.showModal("signup-failed"), Bugsnag.notify("Failed signup - request succeeded but responseData.status !== check-email - refactoredSignup"))
                            }(t, i)
                        },
                        error: function(e, t, n) {
                            AsanaSignupUtils.signupButtons.reset(), AsanaAnalytics.trackSignupEventsInGtm.init("SignupError", "Error Couldnt Sign Up", e.status.toString()), AsanaHelpers.showModal("signup-failed"), AsanaHelpers.trial.setTrialDefault(), t && n ? Bugsnag.notifyException(e, "Failed signup[refactored] - showing signup failed modal " + n, {
                                signup: "refactoredSignup",
                                textStatus: t,
                                errorThrown: n
                            }) : Bugsnag.notifyException(e, "Failed signup[refactored] - showing signup failed modal", {
                                signup: "refactoredSignup"
                            })
                        }
                    })
                } else AsanaSignupUtils.validateDomain.showEmailFormatValidationError(e)
        },
        getEnrolledExperiments: function() {
            var e = {};
            try {
                (window && window.gaData ? Object.keys(window.gaData) : []).forEach((function(t) {
                    var n = window.gaData[t] || {};
                    for (var r in n.experiments)
                        if (n.experiments.hasOwnProperty(r)) {
                            var i = parseInt(n.experiments[r], 10);
                            0 === i ? e[r] = "disabled" : 1 === i && (e[r] = "enabled")
                        }
                }))
            } catch (e) {
                Bugsnag.notifyException(e)
            }
            return JSON.stringify(e)
        },
        startsWith: function(e, t) {
            return 0 === e.lastIndexOf(t, 0)
        },
        endsWith: function(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        },
        loadEthnio: function() {
            var e = window.location.pathname,
                t = null;
            "/" === e || "/product" === e || "/home" === e ? t = 45066 : "/pricing" === e && (t = 50078), t && (AsanaHelpers.specialPlatform() || $.getScript("https://ethn.io/" + t + ".js"))
        },
        getHash: function() {
            return window.location.hash.substring(1)
        },
        getParameterByName: function(e, t) {
            t || (t = window.location.href), e = e.replace(/[[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        },
        addUrlParamsToAppButtonLinks: function(e) {
            var t = $(e),
                n = AsanaHelpers.getAllUrlParams(),
                r = $.param(n);
            n && t.each((function() {
                var e = $(this),
                    t = e.attr("href"),
                    n = /\?/.test(t) ? "&" : "?";
                e.attr("href", t + n + r)
            }))
        },
        getAllUrlParams: function() {
            var e = {},
                t = window.location.search.substring(1).split("&");
            if (1 === t.length && "" === t[0]) return "";
            for (var n = 0; n < t.length; n++) {
                var r = t[n].split("=");
                if (void 0 === e[r[0]]) e[r[0]] = decodeURIComponent(r[1]);
                else if ("string" == typeof e[r[0]]) {
                    var i = [e[r[0]], decodeURIComponent(r[1])];
                    e[r[0]] = i
                } else e[r[0]].push(decodeURIComponent(r[1]))
            }
            return e
        },
        getParamsFromUrlFragment: function() {
            var e = {},
                t = location.hash.slice(1).split("&");
            if (1 === t.length && "" === t[0]) return "";
            for (var n = 0; n < t.length; n++) {
                var r = t[n].split("=");
                if (void 0 === e[r[0]]) e[r[0]] = decodeURIComponent(r[1]);
                else if ("string" == typeof e[r[0]]) {
                    var i = [e[r[0]], decodeURIComponent(r[1])];
                    e[r[0]] = i
                } else e[r[0]].push(decodeURIComponent(r[1]))
            }
            return e
        },
        getUrlParams: {
            get: function(e) {
                e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
                return null === t ? t : decodeURIComponent(t[1].replace(/\+/g, " "))
            },
            has: function(e) {
                return Boolean(this.get(e))
            }
        },
        generateUrlWithParams: function(e, t) {
            var n = e;
            n += "?";
            for (var r = 0; r < t.length; r++) n += encodeURIComponent(t[r].name), n += "=", n += encodeURIComponent(t[r].value), r !== t.length - 1 && (n += "&");
            return n
        },
        getLinkTarget: function(e) {
            AsanaHelpers._currentLocation || (AsanaHelpers._currentLocation = window.location.href.split("#")[0]);
            var t = e.href.split("#");
            return t[0] === AsanaHelpers._currentLocation ? document.getElementById(t.slice(1).join("#")) : null
        },
        addKeyboardNavigation: function(e) {
            e.keydown((function(e) {
                var t = e.which;
                if ((13 === t || 32 === t) && ($(this).click(), e.preventDefault(), $(this).attr("tabindex"))) {
                    var n = $(this).attr("tabindex");
                    n++, $("[tabindex=" + n + "]").focus()
                }
                40 !== t && 39 !== t || $(this).next().focus(), 37 !== t && 38 !== t || $(this).prev().focus()
            }))
        },
        debug: {
            init: function() {
                var e = "L".charCodeAt(0);
                document.body.addEventListener("keydown", (function(t) {
                    t.keyCode === e && t.ctrlKey && t.metaKey && t.altKey && AsanaHelpers.debug.toggleDebugMode()
                }))
            },
            toggleDebugMode: function() {
                document.documentElement.classList.toggle("-debug")
            }
        }
    };
AsanaHelpers.redirectGoogleAppMarketplaceClicks(), $((function() {
    AsanaHelpers.setGlobalClasses()
})), window.addEventListener("load", (function() {
    AsanaHelpers.topbar.init(), AsanaHelpers.debug.init(), AsanaHelpers.registerGTMClickEvents.init(), $(".section--contactForm input").attr("autocomplete", "on"), AsanaStorage.getCookie("user_geo") && $("body").addClass("g-" + AsanaStorage.getCookie("user_geo").toLowerCase()), $(".guide-article blockquote p").attr("data-asanatip", AsanaI18n.translations.asanaTip[AsanaI18n.getCurrentPageLanguage()])
})), $(window).load((function() {
    var e, t, n, r, i, o;
    window.twttr = (e = document, t = "script", n = "twitter-wjs", i = e.getElementsByTagName(t)[0], o = window.twttr || {}, e.getElementById(n) || ((r = e.createElement(t)).id = n, r.src = "https://platform.twitter.com/widgets.js", i.parentNode.insertBefore(r, i), o._e = [], o.ready = function(e) {
        o._e.push(e)
    }), o), AsanaStorage.getCookie("is_logged_in") && dataLayer.push({
        logged_in: "yes"
    });
    try {
        AsanaHelpers.updateAttributionCookie()
    } catch (e) {
        console.error("Failed to update attribution cookie.", e), Bugsnag.notifyException(e)
    }
    if (void 0 !== window.OptanonActiveGroups && window.OptanonActiveGroups.includes(AsanaStorage.CATEGORY.FUNCTIONAL)) try {
        AsanaHelpers.loadEthnio()
    } catch (e) {
        console.error("Problem loading Ethnio", e), Bugsnag.notifyException(e)
    }
}));