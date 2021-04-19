/* **Bugsnag.js** is the official JavaScript notifier for [Bugsnag](https://bugsnag.com). */ ! function(e, t) {
    var n, r, o, a = {},
        i = !0,
        u = 0,
        c = 10;

    function s(t, o) {
        try {
            if ("function" != typeof t) return t;
            if (!t.bugsnag) {
                var c = d();
                t.bugsnag = function(s) {
                    if (o && o.eventHandler && (n = s), r = c, !i) {
                        var l = t.apply(this, arguments);
                        return r = null, l
                    }
                    try {
                        return t.apply(this, arguments)
                    } catch (t) {
                        throw I("autoNotify", !0) && (a.notifyException(t, null, null, "error"), u += 1, e.setTimeout(function() {
                            u -= 1
                        })), t
                    } finally {
                        r = null
                    }
                }, t.bugsnag.bugsnag = t.bugsnag
            }
            return t.bugsnag
        } catch (e) {
            return t
        }
    }
    a.noConflict = function() {
        return e.Bugsnag = t, a
    }, a.refresh = function() {
        c = 10
    }, a.notifyException = function(e, t, n, r) {
        t && "string" != typeof t && (n = t, t = void 0), n || (n = {}), m(n), T({
            name: t || e.name,
            message: e.message || e.description,
            stacktrace: k(e) || R(),
            file: e.fileName || e.sourceURL,
            lineNumber: e.lineNumber || e.line,
            columnNumber: e.columnNumber ? e.columnNumber + 1 : void 0,
            severity: r || "warning"
        }, n)
    }, a.notify = function(t, n, r, o) {
        T({
            name: t,
            message: n,
            stacktrace: R(),
            file: e.location.toString(),
            lineNumber: 1,
            severity: o || "warning"
        }, r)
    };
    var l = "complete" !== document.readyState;

    function f() {
        l = !1
    }

    function d() {
        var e = document.currentScript || r;
        if (!e && l) {
            var t = document.scripts || document.getElementsByTagName("script");
            e = t[t.length - 1]
        }
        return e
    }

    function m(e) {
        var t = d();
        t && (e.script = {
            src: t.src,
            content: I("inlineScript", !0) ? t.innerHTML : ""
        })
    }
    document.addEventListener ? (document.addEventListener("DOMContentLoaded", f, !0), e.addEventListener("load", f, !0)) : e.attachEvent("onload", f);
    var p, g = /^[0-9a-f]{32}$/i,
        v = /function\s*([\w\-$]+)?\s*\(/i,
        y = "https://notify.bugsnag.com/js",
        h = "2.4.8",
        N = document.getElementsByTagName("script"),
        b = N[N.length - 1];

    function E(t) {
        var n = I("disableLog"),
            r = e.console;
        void 0 === r || void 0 === r.log || n || r.log("[Bugsnag] " + t)
    }

    function w(e, t) {
        if (null == t) return e;
        for (var n in e = e || {}, t)
            if (t.hasOwnProperty(n)) try {
                t[n].constructor === Object ? e[n] = w(e[n], t[n]) : e[n] = t[n]
            } catch (r) {
                e[n] = t[n]
            }
        return e
    }

    function S(t, n) {
        (t += "?" + function t(n, r, o) {
            if (o >= 5) return encodeURIComponent(r) + "=[RECURSIVE]";
            o = o + 1 || 1;
            try {
                if (e.Node && n instanceof e.Node) return encodeURIComponent(r) + "=" + encodeURIComponent(L(n));
                var a = [];
                for (var i in n)
                    if (n.hasOwnProperty(i) && null != i && null != n[i]) {
                        var u = r ? r + "[" + i + "]" : i,
                            c = n[i];
                        a.push("object" == typeof c ? t(c, u, o) : encodeURIComponent(u) + "=" + encodeURIComponent(c))
                    }
                return a.join("&")
            } catch (e) {
                return encodeURIComponent(r) + "=" + encodeURIComponent("" + e)
            }
        }(n) + "&ct=img&cb=" + (new Date).getTime(), "undefined" != typeof BUGSNAG_TESTING && a.testRequest) ? a.testRequest(t, n): (new Image).src = t
    }

    function I(e, t) {
        p = p || function(e) {
            var t = {},
                n = /^data\-([\w\-]+)$/;
            if (e)
                for (var r = e.attributes, o = 0; o < r.length; o++) {
                    var a = r[o];
                    n.test(a.nodeName) && (t[a.nodeName.match(n)[1]] = a.value || a.nodeValue)
                }
            return t
        }(b);
        var n = void 0 !== a[e] ? a[e] : p[e.toLowerCase()];
        return "false" === n && (n = !1), void 0 !== n ? n : t
    }

    function T(t, r) {
        var i = I("apiKey");
        if (function(e) {
                return !(!e || !e.match(g)) || (E("Invalid API key '" + e + "'"), !1)
            }(i) && c) {
            c -= 1;
            var u = I("releaseStage", "production"),
                s = I("notifyReleaseStages");
            if (s) {
                for (var l = !1, f = 0; f < s.length; f++)
                    if (u === s[f]) {
                        l = !0;
                        break
                    }
                if (!l) return
            }
            var d = [t.name, t.message, t.stacktrace].join("|");
            if (d !== o) {
                var m;
                o = d, n && ((r = r || {})["Last Event"] = (m = n, {
                    millisecondsAgo: new Date - m.timeStamp,
                    type: m.type,
                    which: m.which,
                    target: L(m.target)
                }));
                var p = {
                        notifierVersion: h,
                        apiKey: i,
                        projectRoot: I("projectRoot") || e.location.protocol + "//" + e.location.host,
                        context: I("context") || e.location.pathname,
                        userId: I("userId"),
                        user: I("user"),
                        metaData: w(w({}, I("metaData")), r),
                        releaseStage: u,
                        appVersion: I("appVersion"),
                        url: e.location.href,
                        userAgent: navigator.userAgent,
                        language: navigator.language || navigator.userLanguage,
                        severity: t.severity,
                        name: t.name,
                        message: t.message,
                        stacktrace: t.stacktrace,
                        file: t.file,
                        lineNumber: t.lineNumber,
                        columnNumber: t.columnNumber,
                        payloadVersion: "2"
                    },
                    v = a.beforeNotify;
                if ("function" == typeof v)
                    if (!1 === v(p, p.metaData)) return;
                if (0 === p.lineNumber && /Script error\.?/.test(p.message)) return E("Ignoring cross-domain script error. See https://bugsnag.com/docs/notifiers/js/cors");
                S(I("endpoint") || y, p)
            }
        }
    }

    function R() {
        var e, t;
        try {
            throw new Error("")
        } catch (n) {
            e = "<generated>\n", t = k(n)
        }
        if (!t) {
            e = "<generated-ie>\n";
            var n = [];
            try {
                for (var r = arguments.callee.caller.caller; r && n.length < 10;) {
                    var o = v.test(r.toString()) && RegExp.$1 || "[anonymous]";
                    n.push(o), r = r.caller
                }
            } catch (e) {
                E(e)
            }
            t = n.join("\n")
        }
        return e + t
    }

    function k(e) {
        return e.stack || e.backtrace || e.stacktrace
    }

    function L(e) {
        if (e) {
            var t = e.attributes;
            if (t) {
                for (var n = "<" + e.nodeName.toLowerCase(), r = 0; r < t.length; r++) t[r].value && "null" != t[r].value.toString() && (n += " " + t[r].name + '="' + t[r].value + '"');
                return n + ">"
            }
            return e.nodeName
        }
    }
    if (e.atob) {
        if (e.ErrorEvent) try {
            0 === new e.ErrorEvent("test").colno && (i = !1)
        } catch (e) {}
    } else i = !1;

    function C(t, n, r) {
        var o = t[n],
            a = r(o);
        t[n] = a, "undefined" != typeof BUGSNAG_TESTING && e.undo && e.undo.push(function() {
            t[n] = o
        })
    }
    if (I("autoNotify", !0)) {
        C(e, "onerror", function(t) {
            return "undefined" != typeof BUGSNAG_TESTING && (a._onerror = t),
                function(n, o, i, c, s) {
                    var l = I("autoNotify", !0),
                        f = {};
                    !c && e.event && (c = e.event.errorCharacter), m(f), r = null, l && !u && T({
                        name: s && s.name || "window.onerror",
                        message: n,
                        file: o,
                        lineNumber: i,
                        columnNumber: c,
                        stacktrace: s && k(s) || R(),
                        severity: "error"
                    }, f), "undefined" != typeof BUGSNAG_TESTING && (t = a._onerror), t && t(n, o, i, c, s)
                }
        });
        var U = function(e) {
            return function(t, n) {
                if ("function" == typeof t) {
                    t = s(t);
                    var r = Array.prototype.slice.call(arguments, 2);
                    return e(function() {
                        t.apply(this, r)
                    }, n)
                }
                return e(t, n)
            }
        };
        C(e, "setTimeout", U), C(e, "setInterval", U), e.requestAnimationFrame && C(e, "requestAnimationFrame", function(e) {
            return function(t) {
                return e(s(t))
            }
        }), e.setImmediate && C(e, "setImmediate", function(e) {
            return function(t) {
                var n = Array.prototype.slice.call(arguments);
                return n[0] = s(n[0]), e.apply(this, n)
            }
        }), "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g, function(t) {
            var n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (C(n, "addEventListener", function(e) {
                return function(t, n, r, o) {
                    try {
                        n && n.handleEvent && (n.handleEvent = s(n.handleEvent, {
                            eventHandler: !0
                        }))
                    } catch (e) {
                        E(e)
                    }
                    return e.call(this, t, s(n, {
                        eventHandler: !0
                    }), r, o)
                }
            }), C(n, "removeEventListener", function(e) {
                return function(t, n, r, o) {
                    return e.call(this, t, n, r, o), e.call(this, t, s(n), r, o)
                }
            }))
        })
    }
    e.Bugsnag = a, "function" == typeof define && define.amd ? define([], function() {
        return a
    }) : "object" == typeof module && "object" == typeof module.exports && (module.exports = a)
}(window, window.Bugsnag);