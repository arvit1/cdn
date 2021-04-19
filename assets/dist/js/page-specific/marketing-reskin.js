! function(t) {
    var e = [];
    AsanaVisualAssets = {
        loadResponsiveVideo: function() {
            for (var t = document.querySelectorAll(".responsiveVideo"), e = 0; e < t.length; e++) {
                for (var o, n = [], i = t[e], a = 0; a < i.attributes.length; a++)
                    if (o = i.attributes[a], /^data-src-/.test(o.nodeName)) {
                        var r = {};
                        r.size = parseInt(o.nodeName.replace(/^data-src-/, "")), r.src = o.nodeValue.split(",")[0], r.poster = o.nodeValue.split(",")[1], n.push(r)
                    }
                for (var s = window.innerWidth, c = [], d = 0; d < n.length; d++) s >= n[d].size && (c[d] = n[d].size);
                for (var l, u = c.reduce((function(t, e) {
                        return Math.max(t, e)
                    })), p = 0; p < n.length; p++) n[p].size === u && (l = p);
                i.setAttribute("src", n[l].src), i.setAttribute("poster", n[l].poster), "function" == typeof i.load && i.load()
            }
        },
        handleVideoIntersect: function(t) {
            t.forEach((function(t) {
                var o = e.find((function(e) {
                    return e.DOM === t.target
                })).DOM;
                if (o instanceof HTMLVideoElement) {
                    if (t.isIntersecting && !t.wasIntersecting) {
                        o.dataset.src && !o.src && (o.src = o.dataset.src);
                        var n = o.play();
                        void 0 !== n && n.catch((function() {}))
                    } else !t.isIntersecting && o.wasIntersecting && (o.pause(), o.currentTime = 0);
                    o.wasIntersecting = t.isIntersecting
                }
            }))
        }
    }, t(document).ready((function() {
        AsanaVisualAssets.loadResponsiveVideo()
    })), document.addEventListener("DOMContentLoaded", (function() {
        var t = new IntersectionObserver(AsanaVisualAssets.handleVideoIntersect, {
            threshold: [0]
        });
        document.querySelectorAll(".videoAnimation").forEach((function(o) {
            e.push({
                DOM: o,
                wasIntersecting: !1
            }), t.observe(o)
        }))
    }))
}(jQuery);
var AsanaMobileMenu = {
    state: "closed",
    openCloseMenu: function() {
        "closed" === AsanaMobileMenu.state ? ($("html").addClass("mobile-menu-active"), $("#hamburger-x-icon").addClass("open"), AsanaMobileMenu.state = "open") : ($("html").removeClass("mobile-menu-active"), $("#hamburger-x-icon").removeClass("open"), AsanaMobileMenu.state = "closed")
    },
    init: function() {
        var t = document.querySelector("[data-toggle-menu]");
        t instanceof Element && t.addEventListener("click", AsanaMobileMenu.openCloseMenu)
    }
};
window.onload = function() {
        AsanaMobileMenu.init()
    }, $(window).on("load", (function() {
        if (null !== document.querySelector(".asanaComponent-plansBusiness")) {
            $(".plan-name").click((function(t) {
                t.preventDefault(), $(".plan-name").not($(this)).closest(".plan-wrap").removeClass("is-active"), $(this).closest(".plan-wrap").toggleClass("is-active"), window.innerWidth < 960 && $(this)[0].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }));
            ! function(t) {
                function e(t, e) {
                    return "<span>" + AsanaHelpers.userCurrency.formatWithCurrencyMarkup(AsanaHelpers.internationalPricing[t][e].annual) + "</span>"
                }

                function o(t, e) {
                    return '<span class="price-per price-billed-monthly">' + AsanaHelpers.userCurrency.format(AsanaHelpers.internationalPricing[t][e].monthly) + "</span>"
                }
                $(".js-price-formatting-premium").html(e(t, "premium")), $(".price-per.js-price-billed-monthly-premium").html(o(t, "premium")), $(".js-price-formatting-business").html(e(t, "business")), $(".price-per.js-price-billed-monthly-business").html(o(t, "business")), $(".js-price-formatting-premium").show(), $(".price-per.js-price-billed-monthly-premium").show(), $(".js-price-formatting-business").show(), $(".price-per.js-price-billed-monthly-business").show()
            }(AsanaHelpers.userCurrency.getCurrency())
        }
    })),
    function(t) {
        window.addEventListener("load", (function() {
            if (null !== document.querySelector(".asanaAtom-accordion")) {
                function e(e) {
                    t("html, body").animate({
                        scrollTop: t(e).offset().top - 100
                    }, 500)
                }

                function o(e) {
                    t("#first-item-opened-on-load").val() && e.expandItem(t(e.wrappers[0]))
                }
                var n = (i = 0, function(t, e) {
                    clearTimeout(i), i = setTimeout(t, e)
                });
                (r = function(e) {
                    this.$accordion = t(e), this.wrappers = t(this.$accordion.find(".accordion-wrapper")), this.initialize()
                }).prototype.initialize = function(t) {
                    this.setupAccordion(), this.bindClickListener()
                }, r.prototype.setupAccordion = function() {
                    var t = this.wrappers.toArray();
                    this.calculateOffsets(t), this.reset(), this.adjustBlockerHeight(), this.setAccordionHeight()
                }, r.prototype.calculateOffsets = function(e) {
                    e.forEach((function(e, o) {
                        var n = t(e).prev(),
                            i = -t(n).find(".accordion-body").outerHeight(!0) + parseInt(n.attr("data-offset"));
                        0 === t(e).index() && (i = 0), t(e).attr("data-offset", i - 1 + "px")
                    }))
                }, r.prototype.reset = function() {
                    this.wrappers.toArray().forEach((function(e, o) {
                        var n = t(e).attr("data-offset");
                        t(e).css("top", n)
                    }))
                }, r.prototype.bindClickListener = function() {
                    var e = this;
                    this.wrappers.click((function() {
                        e.expandItem(t(this))
                    }))
                }, r.prototype.expandItem = function(e) {
                    var o = t(".accordion-wrapper.is-active");
                    this.adjustAccordionSize(o, e), this.toggleActiveState(o, e), this.moveItems(o, e)
                }, r.prototype.toggleActiveState = function(e, o) {
                    if (t(".accordion-container .is-active").removeClass("is-active"), !e.is(o)) {
                        var n = o.toArray(),
                            i = o.find("*").toArray();
                        n.concat(i).forEach((function(e) {
                            t(e).addClass("is-active")
                        }))
                    }
                }, r.prototype.moveItems = function(t, e) {
                    var o = e.nextAll().toArray();
                    this.reset(), t.is(e) || this.moveDown(e, o)
                }, r.prototype.moveDown = function(e, o) {
                    var n = t(e).find(".accordion-body").outerHeight(!0);
                    o.forEach((function(e, o) {
                        var i = parseInt(t(e).attr("data-offset"));
                        t(e).css("top", i + n)
                    }))
                }, r.prototype.adjustBlockerHeight = function() {
                    var t = this.$accordion.find(".accordion-wrapper:last-child"),
                        e = t.prev().find(".accordion-body").height();
                    t.find(".accordion-tab").height(e)
                }, r.prototype.adjustAccordionSize = function(e, o) {
                    var n = this.$accordion.height(),
                        i = t(o).find(".accordion-body").outerHeight(),
                        a = t(e).find(".accordion-body").outerHeight();
                    if (e.is(o)) this.$accordion.height(n - a);
                    else {
                        var r = i - a;
                        this.$accordion.height(n + r)
                    }
                }, r.prototype.setAccordionHeight = function() {
                    var e = this.$accordion.find(".accordion-wrapper:not(.blocker)").toArray().reduce((function(e, o) {
                        return e + (t(o).find(".accordion-tab").outerHeight(!0) + 5)
                    }), 0);
                    this.$accordion.height(e)
                }, t(window).on("load", (function() {
                    var i = [];
                    t(".accordion-row").toArray().forEach((function(t) {
                        t = new r(t);
                        i.push(t)
                    })), t(".accordion-row:not(:first-of-type), .accordion-header:not(:first-of-type)").addClass("-is-hidden"), t(".accordion-container a").click((function(t) {
                        t.stopPropagation()
                    })), o(i[0]), t(window).resize((function() {
                        var e = t(".accordion-row").index(t(".accordion-row:not(.-is-hidden)"));
                        n((function() {
                            t(".accordion-container .is-active").removeClass("is-active"), i[e].setupAccordion()
                        }), 200)
                    })), t(".accordion-row").bind("newAccordionShow", (function(t, e) {
                        i[e].setupAccordion()
                    })), t(".supportcard-content").click((function(n) {
                        n.preventDefault();
                        var a = t(this).parent().index(),
                            r = t(".accordion-row").eq(a);
                        t(".accordion-row").addClass("-is-hidden"), t(".accordion-header").addClass("-is-hidden"), r.removeClass("-is-hidden"), t(".accordion-header").eq(a).removeClass("-is-hidden"), e("#accordion"), o(i[a]), t(".accordion-row").trigger("newAccordionShow", a)
                    }))
                }))
            }
            var i;
            if (null !== document.querySelector(".asanaAtom-accordion2") && (t(window).on("load", (function() {
                    function e(e) {
                        var o = t(".accordion2-item.-is-active"),
                            n = e.hasClass("-is-active");
                        if (o.find(".accordion2-body").removeAttr("style"), o.removeClass("-is-active"), !n) {
                            e.addClass("-is-active");
                            var i = e.find(".accordion2-body"),
                                a = i.prop("scrollHeight");
                            i.css("max-height", a)
                        }
                    }
                    t(".accordion2-item").each((function(o, n) {
                        var i = t(n);
                        o || e.call(i, i), i.click(e.bind(this, i))
                    }))
                })), t(window).on("resize", (function() {
                    var e = t(".accordion2-item.-is-active").find(".accordion2-body");
                    e.css("max-height", e.prop("scrollHeight"))
                }))), null !== document.querySelector(".custom-dropdown")) {
                function a(t) {
                    this.dd = t, this.elemId = "#" + t.id, this.currentValue, this.initEvents()
                }
                a.prototype = {
                        initEvents: function() {
                            var e = this,
                                o = t(this.elemId),
                                n = o.find(".hidden-dropdown-input").val();
                            n && o.find(".custom-dropdown-option[data-value=" + n + "]").addClass("selected");
                            o.on("click", (function(o) {
                                var n = t(o.target);
                                t(".custom-dropdown").not(e.elemId).removeClass("active"), n.hasClass("custom-dropdown-option") ? (e.updateValue(n), t(this).toggleClass("active")) : (n.hasClass("button-select"), t(this).toggleClass("active")), o.stopPropagation()
                            })), o.on("keydown", (function(e) {
                                var n = e.keyCode,
                                    i = o.find(".hidden-dropdown-input").val();
                                9 !== n && e.preventDefault(), 40 === n && (t(this).addClass("active"), i ? t(this).find(".custom-dropdown-option[data-value=" + i + "]")[0].focus() : t(this).find(".custom-dropdown-option")[0].focus())
                            })), o.find(".custom-dropdown-option").on("keydown", (function(n) {
                                var i = t(this),
                                    a = t(n.target),
                                    r = n.keyCode;
                                9 !== r && n.preventDefault(), 38 === r ? i.prev().focus() : 40 === r ? i.next().focus() : 13 === r || 32 === r ? (e.updateValue(a), i.closest(".custom-dropdown").toggleClass("active")) : 9 === r && o.toggleClass("active"), n.stopPropagation()
                            })), o.siblings(".custom-dropdown-mobile").find(".custom-dropdown-mobile-select").on("change", (function(n) {
                                var i = o.find(".custom-dropdown-option[data-value=" + t(this).val() + "]");
                                e.updateValue(i)
                            }))
                        },
                        updateValue: function(e) {
                            var o, n, i, a = e.closest(".custom-dropdown"),
                                r = e.text(),
                                s = a.attr("data-dropdown-name"),
                                c = t("[data-dropdown-name=" + s + "]"),
                                d = a.find(".hidden-dropdown-input"),
                                l = e.attr("data-value");
                            if (l !== d.val()) {
                                for (var u = 0; u < c.length; u++) n = (o = t(c[u])).find(".button-select-label"), i = o.find(".hidden-dropdown-input"), n.text(r), n.attr("data-value", l), i.val(l), o.find(".selected").removeClass("selected"), o.find(".custom-dropdown-option[data-value=" + l + "]").addClass("selected"), o.hasClass("custom-dropdown-mobile") && o.find(".custom-dropdown-mobile-select").val(l);
                                d.trigger("change")
                            }
                        }
                    },
                    function() {
                        for (var e = t(".custom-dropdown"), o = [], n = 0; n < e.length; n++) o[n] = new a(e[n]);
                        t(document).click((function(e) {
                            t(".custom-dropdown").removeClass("active")
                        }))
                    }()
            }
            if (null !== document.querySelector(".asanaComponent-accordion")) {
                function e(e) {
                    t("html, body").animate({
                        scrollTop: t(e).offset().top - 100
                    }, 500)
                }

                function o(e) {
                    t("#first-item-opened-on-load").val() && e.expandItem(t(e.wrappers[0]))
                }
                var r;
                n = function() {
                    var t = 0;
                    return function(e, o) {
                        clearTimeout(t), t = setTimeout(e, o)
                    }
                }();
                (r = function(e) {
                    this.$accordion = t(e), this.wrappers = t(this.$accordion.find(".accordion-wrapper")), this.initialize()
                }).prototype.initialize = function(t) {
                    this.setupAccordion(), this.bindClickListener()
                }, r.prototype.setupAccordion = function() {
                    var t = this.wrappers.toArray();
                    this.calculateOffsets(t), this.reset(), this.adjustBlockerHeight(), this.setAccordionHeight()
                }, r.prototype.calculateOffsets = function(e) {
                    e.forEach((function(e, o) {
                        var n = t(e).prev(),
                            i = -t(n).find(".accordion-body").outerHeight(!0) + parseInt(n.attr("data-offset"));
                        0 === t(e).index() && (i = 0), t(e).attr("data-offset", i - 1 + "px")
                    }))
                }, r.prototype.reset = function() {
                    this.wrappers.toArray().forEach((function(e, o) {
                        var n = t(e).attr("data-offset");
                        t(e).css("top", n)
                    }))
                }, r.prototype.bindClickListener = function() {
                    var e = this;
                    this.wrappers.click((function(o) {
                        var n, i, a, r;
                        n = o.target, i = this, a = n.className.split(" "), r = "", t.each(a, (function(t, e) {
                            e.length > 0 && (r = r + "." + e)
                        })), t(i).find(".accordion-body").find(r).length > 0 || e.expandItem(t(this))
                    }))
                }, r.prototype.expandItem = function(e, o) {
                    var n = t(".accordion-wrapper.is-active");
                    this.adjustAccordionSize(n, e), this.toggleActiveState(n, e), this.moveItems(n, e)
                }, r.prototype.toggleActiveState = function(e, o) {
                    if (t(".accordion .is-active").removeClass("is-active"), !e.is(o)) {
                        var n = o.toArray(),
                            i = o.find("*").toArray();
                        n.concat(i).forEach((function(e) {
                            t(e).addClass("is-active")
                        }))
                    }
                }, r.prototype.moveItems = function(t, e) {
                    var o = e.nextAll().toArray();
                    this.reset(), t.is(e) || this.moveDown(e, o)
                }, r.prototype.moveDown = function(e, o) {
                    var n = t(e).find(".accordion-body").outerHeight(!0);
                    o.forEach((function(e, o) {
                        var i = parseInt(t(e).attr("data-offset"));
                        t(e).css("top", i + n)
                    }))
                }, r.prototype.adjustBlockerHeight = function() {
                    var t = this.$accordion.find(".accordion-wrapper:last-child"),
                        e = t.prev().find(".accordion-body").height();
                    t.find(".accordion-tab").height(e)
                }, r.prototype.adjustAccordionSize = function(e, o) {
                    var n = this.$accordion.height(),
                        i = t(o).find(".accordion-body").outerHeight(),
                        a = t(e).find(".accordion-body").outerHeight();
                    if (e.is(o)) this.$accordion.height(n - a);
                    else {
                        var r = i - a;
                        this.$accordion.height(n + r)
                    }
                }, r.prototype.setAccordionHeight = function() {
                    var e = this.$accordion.find(".accordion-wrapper:not(.blocker)").toArray().reduce((function(e, o) {
                        return e + (t(o).find(".accordion-tab").outerHeight(!0) + 5)
                    }), 0);
                    this.$accordion.height(e)
                };
                var s = [];
                t(".accordion-row").toArray().forEach((function(t) {
                    t = new r(t);
                    s.push(t)
                })), t(".accordion-row:not(:first-of-type), .accordion-header:not(:first-of-type)").addClass("-is-hidden"), t(".accordion a").click((function(t) {
                    t.stopPropagation()
                })), o(s[0]), t(window).resize((function() {
                    var e = t(".accordion-row").index(t(".accordion-row:not(.-is-hidden)"));
                    n((function() {
                        t(".accordion .is-active").removeClass("is-active"), s[e].setupAccordion()
                    }), 200)
                })), t(".accordion-row").bind("newAccordionShow", (function(t, e) {
                    s[e].setupAccordion()
                })), t(".supportcard-content").click((function(n) {
                    n.preventDefault();
                    var i = t(this).parent().index(),
                        a = t(".accordion-row").eq(i);
                    t(".accordion-row").addClass("-is-hidden"), t(".accordion-header").addClass("-is-hidden"), a.removeClass("-is-hidden"), t(".accordion-header").eq(i).removeClass("-is-hidden"), e("#accordion"), o(s[i]), t(".accordion-row").trigger("newAccordionShow", i)
                }))
            }
            var c = {
                rotate: function(e) {
                    var o = t(".galleryExpander-item");
                    c.changePosition(o, e), c.setOffsets(), c.bindPreGalleryEvents()
                },
                changePosition: function(e, o) {
                    var n = e.length;
                    e.each((function(e, i) {
                        var a = t(i),
                            r = parseInt(a.attr("data-position"));
                        r = -1 === (r = (r + o) % n) ? n - 1 : r, a.attr("data-position", r)
                    }))
                },
                getOffset: function(t) {
                    return 370 / 1440 * (t -= 1) - .73 * 370 / 1440 + 32 / 1440 * t
                },
                setOffsets: function() {
                    t(".galleryExpander-item").each((function(e, o) {
                        var n = t(o),
                            i = parseInt(n.attr("data-position")),
                            a = c.getOffset(i);
                        n.css({
                            width: 370 / 1440 * 100 + "%"
                        }), n.css({
                            left: 100 * a + "%"
                        })
                    }))
                },
                bindPreGalleryEvents: function() {
                    t(".galleryExpander-item").unbind("click").removeClass("-half-on-screen").removeClass("-off-screen").each((function(e, o) {
                        var n = t(o),
                            i = parseInt(n.attr("data-position"));
                        2 === i || 3 === i || 4 === i ? n.click(c.toggleView.bind(null, e)) : 1 === i || 5 === i ? (n.addClass("-half-on-screen"), 5 === i ? n.click(c.rotate.bind(null, -1)) : n.click(c.rotate.bind(null, 1))) : n.addClass("-off-screen")
                    }))
                },
                setContainerHeight: function() {
                    var e = t(".galleryExpander-pre.-is-invisible").length ? "post" : "pre",
                        o = t("post" === e ? ".galleryExpander-bio" : ".galleryExpander-item").map((function() {
                            return t(this).height()
                        })).get(),
                        n = Math.max.apply(null, o);
                    "pre" !== e && (n += 50), t(".galleryExpander, .galleryExpander-pre").height(n)
                },
                toggleView: function(e) {
                    var o = t(".galleryExpander-pre"),
                        n = t(".galleryExpander-post"),
                        i = t(".galleryExpander-bio");
                    o.toggleClass("-is-invisible"), n.toggleClass("-is-invisible"), o.hasClass("-is-invisible") && (window.location.hash = i.eq(e).attr("id"), i.eq(e).addClass("-is-active")), c.setContainerHeight()
                },
                toggleNext: function(e) {
                    var o = t(".galleryExpander-bio"),
                        n = t(".galleryExpander-bio.-is-active").index(),
                        i = t(".galleryExpander-bio:not(.-structural)").length;
                    o.removeClass("-is-active");
                    var a = n + e;
                    a = (a = a < 0 ? i - 1 : a) === i ? 0 : a, o.eq(a).addClass("-is-active"), window.location.hash = o.eq(a).attr("id")
                },
                adjustTop: function(e) {
                    var o = t(".galleryExpander-post").offset().top;
                    window.scroll(0, o - e)
                },
                showTarget: function(e) {
                    if (e) {
                        var o = Number(t(e).attr("data-target"));
                        c.toggleView(o), setTimeout((function() {
                            c.adjustTop(100)
                        }), 0)
                    }
                },
                bindPostGalleryEvents: function() {
                    t(".galleryExpander-x").click((function(e) {
                        t(".galleryExpander-pre").removeClass("-is-invisible"), t(".galleryExpander-post").addClass("-is-invisible"), t(".galleryExpander-bio.-is-active").removeClass("-is-active"), c.setContainerHeight(), history.pushState("", document.title, window.location.pathname), e.preventDefault()
                    })), t(".galleryExpander-image").load((function() {
                        c.setContainerHeight()
                    })), t(".galleryExpander-caret").each((function(e, o) {
                        var n = e ? 1 : -1;
                        t(o).click(c.toggleNext.bind(null, n))
                    }))
                },
                init: function() {
                    c.setContainerHeight(), c.setOffsets(), c.bindPreGalleryEvents(), c.bindPostGalleryEvents(), c.showTarget(window.location.hash), window.onhashchange = function() {
                        c.adjustTop(100)
                    }, setTimeout((function() {
                        c.setContainerHeight()
                    }), 1e3), t(window).resize((function() {
                        c.setContainerHeight(), c.setOffsets()
                    }))
                }
            };
            if (null !== document.querySelector(".asanaComponent-galleryExpander") && c.init(), null !== document.querySelector(".asanaAtom-table")) {
                function d(t) {
                    t.stopPropagation();
                    var e = t.target,
                        o = e.querySelector(".tooltip"),
                        n = e.querySelector(".tooltip-trigger").getBoundingClientRect();
                    o.style.top = n.top + "px", o.style.left = n.left - 135 + "px", o.style.width = "270px"
                }
                document.querySelectorAll(".tooltip-wrapper").forEach((function(t) {
                    t.querySelector(".tooltip").style.position = "fixed", t.addEventListener("mouseenter", d, !1)
                }))
            }
            if (null !== document.querySelector(".js-rotatingScreenshot-screenshot")) {
                ! function() {
                    var t = document.querySelectorAll(".js-rotatingScreenshot-screenshot"),
                        e = document.querySelectorAll(".js-rotatingScreenshot-toggle");

                    function o(t) {
                        for (var e = 0, o = t.length; e < o; e++) t[e].classList.remove("-active")
                    }

                    function n(t) {
                        t.classList.add("-active")
                    }

                    function i(t) {
                        for (var e = 0, i = t.length; e < i; e++) {
                            if (t[e].classList.contains("-active")) {
                                var a = t[e + 1];
                                return a ? (o(t), n(a)) : (o(t), n(t[0])), !1
                            }
                        }
                    }(function() {
                        for (var a = 0, r = e.length; a < r; a++) ! function(i) {
                            e[a].onclick = function() {
                                o(t), o(e), n(t[i]), n(e[i]), clearInterval(s), clearInterval(c)
                            }
                        }(a);
                        var s = setInterval((function() {
                                i(e)
                            }), 8e3),
                            c = setInterval((function() {
                                i(t)
                            }), 8e3)
                    })()
                }()
            }
            t("[data-grid]").each((function(e, o) {
                var n = parseInt(t(o).find(">*").css("marginBottom"));
                t(o).find(">*:last-child").css("cssText", "margin-bottom: " + n + "px !important"), t(o).css("cssText", "margin-bottom: " + -n + "px !important")
            })), t(".signup-dialog-button").click((function() {
                setTimeout((function() {
                    t(".signup-email-signup-modal:first-of-type").focus()
                }), 300)
            })), t("a.twitter-link, a.facebook-link, a.linkedin-link").click((function(e) {
                e.preventDefault(), window.open(t(this).attr("href"), "social_window", "height=450, width=550, top=" + (t(window).height() / 2 - 225) + ", left=" + t(window).width() / 2 + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
            })), t(".accordionList").find("dt").click((function(e) {
                e.stopPropagation(), t(this).toggleClass("open").next().slideToggle("fast"), t(".accordionList dd").not(t(this).next()).slideUp("fast"), t(".accordionList dt").not(t(this)).removeClass("open")
            }));
            var l = t(".marquee-container").children().length > 6 ? "marquee-container-four-plus" : "marquee-container-three-minus";
            t(".marquee-container").addClass(l);
            var u = t("[data-android-button]"),
                p = u.attr("href"),
                f = "&referrer=" + encodeURIComponent(window.location.search.substring(1));
            u.each((function() {
                t(this).attr("href", p + f)
            }))
        }))
    }(jQuery);